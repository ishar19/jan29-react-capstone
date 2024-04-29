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
  function validate() {
    let isError=false;
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
      localStorage.setItem("formData", JSON.stringify(data));
      navigate("/movies");
    }
  }
  const boxStyle={
    backgroundColor: '#292929',
    color:'#7C7C7C',
    fontSize:'14px',
    padding:'12px',
    borderRadius:'3px'
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        validate();
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent:'center'
        
      }}
    >
      <input
        type="text"
        placeholder="Name"
        value={data.name}
        style={boxStyle}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <span style={{ color: "red" }}>{error.name}</span>
      <input
        type="text"
        name=""
        id=""
        placeholder="UserName"
        value={data.username}
        style={boxStyle}
        onChange={(e) => setData({ ...data, username: e.target.value })}
      />
      <span style={{ color: "red" }}>{error.username}</span>
      <input
        type="email"
        name=""
        id=""
        placeholder="Email"
        value={data.email}
        style={boxStyle}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <span style={{ color: "red" }}>{error.email}</span>
      <input
        type="tel"
        name=""
        id=""
        placeholder="Phone"
        value={data.phone}
        style={boxStyle}
        onChange={(e) => setData({ ...data, phone: e.target.value })}
      />
      <span style={{ color: "red" }}>{error.phone}</span>
      <label htmlFor="checkbox" style={{fontSize:'80%'}}>
        <input
          type="checkbox"
          name="checkbox"
          id="checkbox"
          checked={data.checkbox}
          onChange={(e) => setData({ ...data, checkbox: e.target.checked })}
        />
        &nbsp; Share my registration data with SuperApp
      </label>
      <span style={{ color: "red" }}>{error.checkbox}</span>
      <button type="submit"
        className="text-white text-2xl font-bold bg-[#72DB73] rounded-full p-2  "
      >SIGN UP</button>
    </form>
  );
}
