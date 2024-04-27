import { useState } from "react";
import {useNavigate} from 'react-router-dom';

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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        validate();
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        margin: "0 auto",
      }}
    >
      <input
        className="input-box"
        type="text"
        placeholder="Name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <span style={{ color: "red" }}>{error.name}</span>
      <input
        className="input-box"
        type="text"
        name=""
        id=""
        placeholder="Username"
        value={data.username}
        onChange={(e) => setData({ ...data, username: e.target.value })}
      />
      <span style={{ color: "red" }}>{error.username}</span>
      <input
        className="input-box"
        type="email"
        name=""
        id=""
        placeholder="Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <span style={{ color: "red" }}>{error.email}</span>
      <input
        className="input-box"
        type="tel"
        name=""
        id=""
        placeholder="Phone"
        value={data.phone}
        onChange={(e) => setData({ ...data, phone: e.target.value })}
      />
      <span style={{ color: "red" }}>{error.phone}</span>
      <label htmlFor="checkbox">
        <input
          className="share-registration-data"
          type="checkbox"
          name="checkbox"
          id="checkbox"
          checked={data.checkbox}
          onChange={(e) => setData({ ...data, checkbox: e.target.checked })}
        />
        Share my registration data with Superapp
      </label>
      <span style={{ color: "red" }}>{error.checkbox}</span>
      <button className="signup-button" type="submit">Submit</button>
    </form>
  );
}
