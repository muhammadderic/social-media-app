import Image from "next/image"
import Link from "next/link"
import MobileMenu from "./MobileMenu"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-24">
      {/* LEFT */}
      <div className="w-[20%]">
        <Link href="/" className="text-xl text-blue-600 font-bold">
          DERICSOCIAL
        </Link>
      </div>

      {/* CENTER */}
      <div className="hidden md:flex items-center justify-between w-[50%] text-sm">
        {/* MENU */}
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/home.png"
              alt="Homepage"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/friends.png"
              alt="Friends"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/stories.png"
              alt="Stories"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Stories</span>
          </Link>
        </div>

        {/* SEARCH BOX */}
        <div className='hidden lg:flex p-2 bg-slate-100 items-center rounded-xl'>
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent outline-none"
          />
          <Image
            src="/search.png"
            alt=""
            width={14}
            height={14}
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-[30%] flex items-center justify-end">
        <div className="hidden md:flex items-center gap-4 xl:gap-8">
          <div className="cursor-pointer">
            <Image
              src="/people.png"
              alt=""
              width={24}
              height={24}
            />
          </div>
          <div className="cursor-pointer">
            <Image
              src="/messages.png"
              alt=""
              width={20}
              height={20}
            />
          </div>
          <div className="cursor-pointer">
            <Image
              src="/notifications.png"
              alt=""
              width={20}
              height={20}
            />
          </div>
        </div>

        <MobileMenu />
      </div>
    </div>
  )
}

export default Navbar
