import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Form() {
  const navigate = useNavigate();
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
  console.log(data.name.trim());
  function validate() {
    let isError = false;
    setError(() => {
      return {
        name: "",
        username: "",
        email: "",
        phone: "",
        checkbox: "",
      };
    });
    if (data.name.trim().length === 0) {
      console.warn("Name is required");
      setError((error) => {
        return { ...error, name: "Name is required" };
      });
      isError = true;
    }
    if (data.username.trim().length === 0) {
      console.warn("Username is required");
      setError((error) => {
        return { ...error, username: "Username is required" };
      });
      isError = true;
    }
    if (data.email.trim().length === 0) {
      console.warn("Email is required");
      setError((error) => {
        return { ...error, email: "Email is required" };
      });
      isError = true;
    }
    if (data.phone.trim().length === 0 || !validatePhone(data.phone)) {
      console.warn("Phone is either empty or invalid");
      setError((error) => {
        return { ...error, phone: "Phone is either empty or invalid" };
      });
      isError = true;
    }
    if (!data.checkbox) {
      console.warn("Checkbox is required");
      setError((error) => {
        return { ...error, checkbox: "Checkbox is required" };
      });
      isError = true;
    }
    if (!isError) {
      console.log("Data is valid");
      navigate("/movies");
    }
  }
  return (
    <div className="flex bg-black text-white overflow-auto   ">
      <div>
        <img className="w-full h-screen" src="/images/signup.png" alt="" />
        <div className="mt-[-120px] pic-title m-3">
          Discover new things on
          <p>Superapp</p>
        </div>
      </div>
      <div className=" flex flex-col items-center ml-[160px] bg-black h-screen   ">
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
            name=""
            id=""
            placeholder="Username"
            value={data.username}
            className={`input ${error.name && "input-error"}`}
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
          <span style={{ color: "red" }}>{error.username}</span>
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            value={data.email}
            className={`input ${error.name && "input-error"}`}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <span style={{ color: "red" }}>{error.email}</span>
          <input
            type="tel"
            name=""
            id=""
            placeholder="Phone"
            value={data.phone}
            className={`input ${error.name && "input-error"}`}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
          <span style={{ color: "red" }}>{error.phone}</span>
          <label htmlFor="checkbox" className="text-sm text-[#7C7C7C]">
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
          <p className="ml-[-63px] text-[#7C7C7C]">By clicking on Sign up. you agree to Superapp</p>
          <span className="text-[#72DB73] ml-[-65px]">Terms and Conditions of Use</span>
        </div>
        <br />
        <div className="text-xs  ml-[100px] mt-[-10px]">
          <p className="ml-[-68px] text-[#7C7C7C]">To learn more about how Superapp collects, uses, shares and </p>
          <p className="ml-[-69px] text-[#7C7C7C]">protects your personal data please head Superapp</p>
          <span className="text-[#72DB73] ml-[-69px] ">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}
