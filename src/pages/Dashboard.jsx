import { Notes, News, UserInfo, Clock } from "../components";
import Weather from "../components/Dashboard/Weather";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const handleNextPage=()=>{

    navigate('/browse');
  }
  return (
    <div className="bg-black min-h-screen">
      <div className="flex flex-row gap-6">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-6">
            <div className="bg-[#5746EA] w-[50vw] h-[40vh] rounded-lg ml-10 mt-10 p-5">
              <UserInfo />
              <Weather />
            </div>
            <div className="mt-10">
              <Notes />
            </div>
          </div>
          <div className="ml-10">
            <Clock />
          </div>
        </div>

        <div className="bg-white w-[20vw] p-5 mt-10 rounded-lg h-[85vh]">
          <News />
        </div>
      </div>
      <button
        className="fixed bottom-1 right-20 text-white bg-[#148A08] pr-4 pl-4 pt-2 pb-2 rounded-3xl text-xl"
        onClick={handleNextPage}>Browse</button>
    </div>
  );
}
