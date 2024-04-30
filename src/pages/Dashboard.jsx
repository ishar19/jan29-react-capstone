import { Notes, News, UserInfo } from "../components";

export default function Dashboard() {
  return (
    <div className="bg-black min-h-screen flex flex-row gap-6 items-start">
      <div className="bg-[#5746EA] w-[50vw] h-[40vh] rounded-lg ml-10 mt-10 p-5">
        <UserInfo />
      </div>
      <div className="mt-10">
        <Notes />
      </div>
      <div className="bg-white w-[20vw] p-5 mt-10 rounded-lg h-[90vh]">
        <News/>
      </div>
    </div>
  );
}
