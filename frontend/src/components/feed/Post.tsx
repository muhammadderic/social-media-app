import Image from "next/image"
import PostInfo from "./PostInfo"
import { Suspense } from "react"
import PostInteraction from "./PostInteraction"
import Comments from "./Comments"

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={"/noAvatar.png"}
            width={40}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">
            deric deric
          </span>
        </div>
        <PostInfo />
      </div>

      {/* IMAGE AND DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="/addImage.png"
            fill
            className="object-cover rounded-md"
            alt=""
          />
        </div>
        description
      </div>

      {/* INTERACTION */}
      <Suspense fallback="Loading...">
        <PostInteraction />
      </Suspense>
      <Suspense fallback="Loading...">
        <Comments />
      </Suspense>
    </div>
  )
}

export default Post
