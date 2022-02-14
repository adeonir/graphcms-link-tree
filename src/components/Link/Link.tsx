export type LinkProps = {
  __typename: 'Link' | 'Video'
  text?: string
  url: string
}

export const Link = ({ __typename, text, url }: LinkProps) => (
  <>
    {__typename === 'Link' ? (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="border-px flex h-[52px] items-center justify-center rounded border border-blue-200 bg-blue-50 text-lg font-semibold text-blue-600 transition hover:bg-blue-100"
      >
        {text}
      </a>
    ) : (
      <iframe
        src={url}
        className="aspect-video w-full rounded-md bg-gray-50 shadow-video"
        frameBorder="0"
      />
    )}
  </>
)
