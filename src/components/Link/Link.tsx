type Props = {
  text: string
  url: string
}

export const Link = ({ text, url }: Props) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="border-px flex h-[52px] items-center justify-center rounded border border-blue-200 bg-blue-50 text-lg font-semibold text-blue-600 transition hover:bg-blue-100"
    >
      {text}
    </a>
  )
}
