import Link from "next/link"
import ProfileCard from "./ProfileCard"
import Image from "next/image"
import LeftMenuItem from "./LeftMenuItem"
import Ad from "../Ad"

const LeftMenu = () => {
  return (
    <div className="flex flex-col gap-6">
      <ProfileCard />

      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <LeftMenuItem
          source="/posts.png"
          text="My Posts"
        />

        <hr className="border-t-1 border-gray-50 w-36 self-center" />

        <LeftMenuItem
          source="/activity.png"
          text="Activity"
        />

        <hr className="border-t-1 border-gray-50 w-36 self-center" />

        <LeftMenuItem
          source="/market.png"
          text="Marketplace"
        />

        <hr className="border-t-1 border-gray-50 w-36 self-center" />

        <LeftMenuItem
          source="/events.png"
          text="Events"
        />

        <hr className="border-t-1 border-gray-50 w-36 self-center" />

        <LeftMenuItem
          source="/albums.png"
          text="Albums"
        />

        <hr className="border-t-1 border-gray-50 w-36 self-center" />

        <LeftMenuItem
          source="/videos.png"
          text="Videos"
        />

        <hr className="border-t-1 border-gray-50 w-36 self-center" />

        <LeftMenuItem
          source="/news.png"
          text="News"
        />

        <hr className="border-t-1 border-gray-50 w-36 self-center" />

        <LeftMenuItem
          source="/courses.png"
          text="Courses"
        />

        <hr className="border-t-1 border-gray-50 w-36 self-center" />

        <LeftMenuItem
          source="/lists.png"
          text="Lists"
        />

        <hr className="border-t-1 border-gray-50 w-36 self-center" />

        <LeftMenuItem
          source="/settings.png"
          text="Settings"
        />

      </div>
      <Ad size="sm" />
    </div>
  )
}

export default LeftMenu
