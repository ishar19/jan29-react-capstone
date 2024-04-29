import { genreNames } from "../../utils/genreNames";

export default function UserInfo() {
  const user = JSON.parse(localStorage.getItem("formData"));

  return (
    <div>
      <div className="flex border-3 border-solid border-[#5746EA]  bg-[#5746EA] w-[570px] m-2 rounded-md p-3 h-[300px] ">
      <div>
        <img className="" src="/images/userinfo.png" alt="" />
      </div>
      <div className="border-3 border-solid border-[#5746EA] p-4 bg-[#5746EA] w-[500px] rounded-md h-[250px]">
        <p className="userinfo text-white font-light ">{user.name}</p>
        <p className="userinfo text-white font-light">{user.email}</p>
        <p className="userinfo text-white font-semibold">{user.username}</p>

        <div className="inline-block">
          {genreNames.map((genre) => (
            <div
              key={genre.id}
              className="bg-[#9F94FF] text-white font-medium rounded-full text-sm px-5 py-2.5 text-center float-end mt-[90px]"
            >
              <p>{genre.name}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
