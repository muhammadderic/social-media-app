const UserInfoCardInteraction = () => {
  return (
    <>
      {/* FOLLOWING */}
      <form>
        <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2">
          Following
        </button>
      </form>

      {/* BLOCK USER */}
      <form className="self-end ">
        <button>
          <span className="text-red-400 text-xs cursor-pointer">
            Block User
          </span>
        </button>
      </form>
    </>
  )
}

export default UserInfoCardInteraction
