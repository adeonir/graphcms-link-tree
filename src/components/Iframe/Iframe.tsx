type Props = {
  url?: string
}

export const Iframe = ({ url }: Props) => {
  return (
    <iframe
      className="aspect-video w-full rounded-md bg-gray-50 shadow-video"
      src={url}
      frameBorder="0"
    />
  )
}
