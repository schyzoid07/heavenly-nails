"use client"
import { X } from "lucide-react"
import { PopoverClose } from "@radix-ui/react-popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SendHorizontal } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Bot, Ellipsis } from "lucide-react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { useState, useRef, useEffect } from "react"
import { Message } from "@/types/message"
import { twMerge } from "tailwind-merge"

import { useMediaQuery } from "usehooks-ts"

const formSchema = z.object({
  message: z.string(),
})

export default function AISupport() {
  const isDesktop = useMediaQuery("(min-width: 640px)")
  const [isOpen, setIsOpen] = useState(false)

  const chatboxRef = useRef<HTMLDivElement>(null)

  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "¡Hola! mi nombre es NailsBot, ¿en qué puedo ayudarte? ",
      role: "model",
    },
  ])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const newMessages = [
      ...messages,
      {
        text: values.message,
        role: "user",
      } satisfies Message,
    ]

    setMessages(newMessages)

    form.reset()
    setIsLoading(true)

    fetch("/api/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessages),
    }).then(async (response) => {
      const result = await response.json()
      const parsed = z.object({ result: z.string() }).parse(result)

      setMessages((prev) => [
        ...prev,
        {
          text: parsed.result,
          role: "model",
        },
      ])
      setIsLoading(false)
    })
  }

  useEffect(() => {
    if (!chatboxRef.current) {
      return
    }

    chatboxRef.current.children[1].scrollTop = chatboxRef.current.children[1].scrollHeight
  }, [messages, chatboxRef])

  useEffect(() => {
    if (isOpen && !isDesktop) {
      document.body.classList.add("overflow-hidden")
      return
    }

    document.body.classList.remove("overflow-hidden")
  }, [isOpen, isDesktop])

  return (
    <Popover open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <PopoverTrigger asChild>
        <div className="fixed bottom-4 right-4 z-10 flex cursor-pointer items-center justify-center rounded-full bg-purple-900 p-4">
          <Bot className="size-6 text-purple-100" />
        </div>
      </PopoverTrigger>

      <PopoverContent
        side="top"
        align="end"
        sideOffset={isDesktop ? 16 : -72}
        alignOffset={isDesktop ? 0 : -16}
        className="h-[100vh] w-[100vw] overflow-hidden rounded-none border-0 p-0 sm:h-[600px] sm:w-96 sm:rounded-md"
      >
        <div className="flex h-full w-full flex-col">
          <div className="flex w-full items-center bg-purple-900 p-4">
            <Bot className="size-6 text-purple-100" />
            <div className="ml-3 font-bold text-purple-100">NailsBot</div>
            <PopoverClose asChild>
              <Button size="icon" variant="ghost" className="ml-auto text-purple-50">
                <X />
              </Button>
            </PopoverClose>
          </div>

          <div className="h-0 flex-1 bg-purple-50">
            <ScrollArea className="h-full w-full" ref={chatboxRef}>
              <div className="flex flex-col gap-3 p-4">
                {messages.map((message, i) => (
                  <p
                    className={twMerge(
                      "max-w-[75%] self-end rounded-xl bg-purple-900 px-4 py-2 text-purple-100",
                      message.role === "model" && "self-start bg-purple-200 text-purple-950",
                    )}
                    key={i}
                  >
                    {message.text}
                  </p>
                ))}
                {isLoading ? (
                  <p className="max-w-[75%] self-start rounded-xl bg-purple-200 px-4 py-2 text-purple-950">
                    <Ellipsis className="size-4" />
                  </p>
                ) : null}
              </div>
            </ScrollArea>
          </div>

          <footer className="w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex w-full items-center gap-2 bg-purple-900 p-4"
                autoComplete="off"
              >
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          placeholder="Escribe tu pregunta"
                          {...field}
                          className="w-full rounded-full bg-purple-100"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="icon"
                  variant="link"
                  className="text-purple-100"
                  disabled={isLoading}
                >
                  <SendHorizontal className="size-6" />
                </Button>
              </form>
            </Form>
          </footer>
        </div>
      </PopoverContent>
    </Popover>
  )
}
