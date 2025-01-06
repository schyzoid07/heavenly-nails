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
        <div className="flex h-full w-full flex-col items-center rounded-md p-4 text-purple-950 transition-all group-hover:bg-purple-500/40">
          {icon}
          <h3 className="mt-2 text-balance text-center font-bold">{title}</h3>
          <p className="mt-1 text-balance break-all text-center text-sm">{info}</p>
        </div>
      </a>
    )
  }

  return (
    <div className="flex h-full w-full flex-col items-center p-4 text-purple-950">
      {icon}
      <h3 className="mt-2 text-balance text-center font-bold">{title}</h3>
      <p className="mt-1 text-balance break-all text-center text-sm">{info}</p>
    </div>
  )
}
