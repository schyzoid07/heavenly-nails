interface Props {
  icon: React.ReactNode
  title: string
  info: string
  href?: string
}

export default function ContactInfoCard({ icon, title, info, href }: Props) {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener" className="group h-full w-full">
        <div className="flex flex-col items-center w-full text-purple-950 group-hover:bg-purple-500/40 p-4 h-full transition-all rounded-md">
          {icon}
          <h3 className="font-bold mt-2 text-center text-balance">{title}</h3>
          <p className="text-sm text-center mt-1 break-all text-balance">{info}</p>
        </div>
      </a>
    )
  }

  return (
    <div className="flex flex-col items-center w-full text-purple-950 h-full p-4">
      {icon}
      <h3 className="font-bold mt-2 text-center text-balance">{title}</h3>
      <p className="text-sm text-center mt-1 break-all text-balance">{info}</p>
    </div>
  )
}
