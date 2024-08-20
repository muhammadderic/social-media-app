import Image from "next/image"

const StoryList = () => {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer">
      <Image
        src={"/noAvatar.png"}
        alt=""
        width={80}
        height={80}
        className="w-20 h-20 rounded-full ring-2"
      />
      <span className="font-medium">
        deric
      </span>
    </div>
  )
}

export default StoryList
