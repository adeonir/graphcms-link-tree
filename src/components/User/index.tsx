import Image from 'next/image'

export type UserProps = {
  avatar?: {
    url: string
  }
  name: string
  bio: string
}

export const User = ({ avatar, name, bio }: UserProps) => (
  <div className="text-center">
    <Image
      className="rounded-full"
      src={avatar?.url || '/avatar.png'}
      alt="avatar"
      width={100}
      height={100}
    />
    <h1 className="mt-1 text-xl font-bold">{name}</h1>
    <p className="text-gray-550">{bio}</p>
  </div>
)
