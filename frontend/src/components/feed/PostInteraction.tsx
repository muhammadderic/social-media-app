import Image from "next/image"

const PostInteraction = () => {
  return (
    <div className="flex items-center justify-between text-sm my-4">
      <div className="flex gap-8">
        {/* LIKE */}
        <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
          <form>
            <button>
              <Image
                src={"/liked.png"}
                width={16}
                height={16}
                alt=""
                className="cursor-pointer"
              />
            </button>
          </form>
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            <span className="hidden md:inline">
              Likes
            </span>
          </span>
        </div>

        {/* COMMENT */}
        <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
          <Image
            src="/comment.png"
            width={16}
            height={16}
            alt=""
            className="cursor-pointer"
          />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            0
            <span className="hidden md:inline">
              Comments
            </span>
          </span>
        </div>
      </div>

      {/* SHARE */}
      <div className="">
        <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
          <Image
            src="/share.png"
            width={16}
            height={16}
            alt=""
            className="cursor-pointer"
          />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            <span className="hidden md:inline">
              Share
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default PostInteraction
