import Stories from "@/components/Stories";

export default function Home() {
  return (
    <div className="flex gap-6 pt-6">
      {/* LEFT */}
      <div className="hidden xl:block w-[20%]">
        <p>Left</p>
      </div>

      {/* MAIN */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          {/* <p>Main</p> */}
        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden lg:block w-[30%]">
        <p>Right</p>
      </div>
    </div>
  );
}
