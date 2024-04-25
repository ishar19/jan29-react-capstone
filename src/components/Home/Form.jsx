import { useState } from "react";

export default function Form() {
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    checkbox: false,
  });

  const [error, setError] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    checkbox: "",
  });

  function validatePhone(phone) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  }

  function validate() {
    setError({
      name: data.name.trim() ? "" : "Name is required",
      username: data.username.trim() ? "" : "Username is required",
      email: data.email.trim() ? "" : "Email is required",
      phone: data.phone.trim() && validatePhone(data.phone) ? "" : "Phone is either empty or invalid",
      checkbox: data.checkbox ? "" : "Checkbox is required",
    });
  }

  return (
    <div className="flex bg-black text-white h-screen">
      <div className="">
        <img className="w-full h-screen" src="/images/signup.png" alt="" />
        <div className="mt-[-120px] pic-title m-3">
          Discover new things on
          <p>Superapp</p>
        </div>
      </div>
      <div className=" flex flex-col items-center ml-[160px]  ">
        <div className="text-[#72DB73]  title">Super app</div>
        <div className="mt-[-17px]">Create your new account</div>
        <br />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            validate();
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "300px",
            margin: "0 auto",
          }}
        >
          <input
            type="text"
            placeholder="Name"
            value={data.name}
            className={`input ${error.name && "input-error"}`}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <span style={{ color: "red" }}>{error.name}</span>
          <input
            type="text"
            placeholder="Username"
            value={data.username}
            className={`input ${error.username && "input-error"}`}
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
          <span style={{ color: "red" }}>{error.username}</span>
          <input
            type="email"
            placeholder="Email"
            value={data.email}
            className={`input ${error.email && "input-error"}`}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <span style={{ color: "red" }}>{error.email}</span>
          <input
            type="tel"
            placeholder="Phone"
            value={data.phone}
            className={`input ${error.phone && "input-error"}`}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
          <span style={{ color: "red" }}>{error.phone}</span>
          <label htmlFor="checkbox" className="text-sm">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              checked={data.checkbox}
              onChange={(e) => setData({ ...data, checkbox: e.target.checked })}
            />
            Share my registration data with Superapp
          </label>
          <span style={{ color: "red" }}>{error.checkbox}</span>
          <button
            className="bg-[#72DB73] text-white text-sm px-[120px] py-2.5 text-center rounded-3xl mt-[-10px]"
            type="submit"
          >
            Submit
          </button>
        </form>
        <div className="text-xs  ml-[10px] mt-[10px]">
          <p className="ml-[-63px]">By clicking on Sign up. you agree to Superapp</p>
          <span className="text-[#72DB73] ml-[-65px]">Terms and Conditions of Use</span>
        </div>
        <br />
        <div className="text-xs  ml-[100px] mt-[-10px]">
          <p className="ml-[-68px]">To learn more about how Superapp collects, uses, shares and </p>
          <p className="ml-[-69px]">protects your personal data please head Superapp</p>
          <span className="text-[#72DB73] ml-[-69px] ">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}
