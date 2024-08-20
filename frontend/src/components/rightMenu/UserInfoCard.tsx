import Image from "next/image"
// import UpdateUser from "./UpdateUser"
import UserInfoCardInteraction from "./UserInfoCardInteraction"
import Link from "next/link"

const UserInfoCard = () => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md text-sm">
      {/* TITLE */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">
          User Information
        </span>

        {/* <UpdateUser /> */}
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">
            {" "}
            deric deric
          </span>
          <span className="text-sm">
            @deric
          </span>
        </div>

        <p>description</p>

        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>
            Living in <b>City</b>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span>
            Went to <b>school</b>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span>
            Works at <b>work station</b>
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image
              src="/link.png"
              alt=""
              width={16}
              height={16}
            />

            <Link
              href="/"
              className="text-blue-500 font-medium"
            >
              www.deric.com
            </Link>
          </div>
          <div className="flex gap-1 items-center">

            <Image
              src="/date.png"
              alt=""
              width={16}
              height={16}
            />
            <span>
              Joined 2024
            </span>
          </div>
        </div>

        <UserInfoCardInteraction />
      </div>
    </div>
  )
}

export default UserInfoCard
