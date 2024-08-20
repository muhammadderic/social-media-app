import { Suspense } from "react"
import UserInfoCard from "./UserInfoCard"

const RightMenu = () => {
  return (
    <div className="flex flex-col gap-6">
      <Suspense fallback={<div>Loading...</div>}>
        <UserInfoCard />
      </Suspense>
    </div>
  )
}

export default RightMenu
