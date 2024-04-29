import { Notes, News, UserInfo } from "../components";

export default function Dashboard() {
  return (
    <>
      <div className="flex h-screen bg-black text-white">
        
      <UserInfo />
      <Notes />
      <News />
      </div>
      {/* <button className="bg-[#148A08] text-white font-medium rounded-full text-sm px-5 py-2.5 text-center float-end mt-[-57px] ">Browse</button> */}
    </>
  );
}