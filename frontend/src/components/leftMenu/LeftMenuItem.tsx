import Image from "next/image"
import Link from "next/link"

interface LeftMenuItemProps {
  source: string,
  text: string,
}

const LeftMenuItem = ({ source, text }: LeftMenuItemProps) => {
  return (
    <Link
      href="/"
      className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100"
    >
      <Image
        src={source}
        alt=""
        width={20}
        height={20}
      />
      <span>
        {text}
      </span>
    </Link>
  )
}

export default LeftMenuItem
