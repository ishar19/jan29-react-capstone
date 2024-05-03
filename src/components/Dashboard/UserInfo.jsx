import { genreNames } from "../../utils/genreNames";
import profPic from '../../assets/dashboardProf.svg'

export default function UserInfo() {
  const user = JSON.parse(localStorage.getItem("formData"));
  return (
    <div className="flex flex-row gap-[50px] items-center">

      <div>
        <img src={profPic} className="h-[250px]" alt="profPic" />
      </div>

      <div className="flex flex-row gap-4">
        <div>
          <p className="text-xl text-white">{user.name}</p>
          <p className="text-xl text-white">{user.email}</p>
          <p className="text-3xl text-white">{user.username}</p>
        </div>

        <div className="grid grid-cols-3 m-1 gap-2">
          {genreNames.map((genre) => {
            return <p className="bg-[#9F94FF] rounded-[35px] pl-4 pt-2 w-[100px] h-[40px] text-white text-lg" key={genre.id}>{genre.name}</p>;
          })}
        </div>

      </div>
    </div>
  );
}
