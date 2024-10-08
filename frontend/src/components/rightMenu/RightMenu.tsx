import { Suspense } from "react"
import UserInfoCard from "./UserInfoCard"
import UserMediaCard from "./UserMediaCard"
import FriendRequests from "./FriendRequests"
import Birthdays from "./Birthdays"
import Ad from "../Ad"

const RightMenu = () => {
  return (
    <div className="flex flex-col gap-6">
      <Suspense fallback={<div>Loading...</div>}>
        <UserInfoCard />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <UserMediaCard />
      </Suspense>

      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  )
}

export default RightMenu
