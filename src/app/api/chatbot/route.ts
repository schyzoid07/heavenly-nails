import { GoogleGenerativeAI } from "@google/generative-ai"
import { messageSchema } from "@/types/message"
import { getPayload } from "payload"
import configPromise from "@/payload.config"

export const POST = async (request: Request) => {
  const body = await request.json()

  const result = messageSchema.array().safeParse(body)

  if (!result.success) {
    return Response.json(
      {
        error: result.error.format(),
      },
      {
        status: 400,
      },
    )
  }

  const parsedBody = result.data

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string)
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

  const payload = await getPayload({ config: configPromise })
  const { docs: faqs } = await payload.find({
    collection: "faq",
    limit: 20,
  })

  const prompt = ` 
  Eres NailsBot, el asistente virtual experto en uñas de Heavenly Nails. 
  Tu objetivo es brindar información clara y concisa a los clientes sobre nuestros 
  servicios de manicura y pedicura. Responde de manera amigable y profesional a todas 
  las preguntas relacionadas con nuestros tratamientos, productos, horarios y promociones. 
  Evita salirte del tema y si no conoces la respuesta, responde simplemente: 
  '¡Hola! NailsBot a tu servicio. Aún no tengo esa información, pero puedo averiguarlo 
  para ti. ¿Qué más te gustaría saber?'

  Para que puedas responder de forma más personalizada, aquí tienes algunas preguntas y
  respuestas comunes de Heavenly Nails:

  ${faqs.map((faq) => `${faq.question}: ${faq.answer}`)}

  Recuerda:

  Sé conciso y directo: Evita respuestas largas y rebuscadas.
  Utiliza un lenguaje claro y sencillo: Adapta tu lenguaje al público objetivo y utiliza un acento venezolano leve.
  Sé amable y profesional: Crea una buena impresión.
  `
  const { response } = await model.generateContent({
    contents: [
      {
        role: "model",
        parts: [{ text: prompt }],
      },
      ...parsedBody.map((message) => ({
        role: message.role,
        parts: [{ text: message.text }],
      })),
    ],
    generationConfig: {
      maxOutputTokens: 500,
    },
  })

  return Response.json({ result: response.text() })
}
