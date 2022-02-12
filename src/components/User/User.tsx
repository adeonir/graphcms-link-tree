import Image from 'next/image'

type Props = {
  avatar: string
  name: string
  bio: string
}

export const User = ({ avatar, name, bio }: Props) => {
  return (
    <div className="text-center">
      <Image
        className="h=[100px] w-[100px] rounded-full"
        src={avatar}
        alt="avatar"
        width={100}
        height={100}
      />
      <h1 className="mt-1 text-xl font-bold">{name}</h1>
      <p className="text-gray-550">{bio}</p>
    </div>
  )
}
