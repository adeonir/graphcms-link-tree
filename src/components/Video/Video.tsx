type Props = {
  url?: string
}

export const Video = ({ url }: Props) => {
  return (
    <iframe
      className="aspect-video w-full rounded-md bg-gray-50 shadow-video"
      src={url}
      frameBorder="0"
    />
  )
}
