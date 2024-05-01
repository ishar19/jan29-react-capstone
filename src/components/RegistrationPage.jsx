import { useState } from 'react'

import homeImg from '../assets/home-img.png'
import { useNavigate } from 'react-router';

function RegistrationPage() {
  const [change, setChange] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    checkbox: false,
  })

  const [error, setError] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    checkbox: false,
  })
  
  const navigate = useNavigate();

  const validate = () => {
    let isError = false;
    if (change.name.length === 0) {
      console.warn("name is required")
      setError((err) => {
        return { ...err, name: "Name is required" }
      }
      )
      isError = true;
    }

    if (change.username.length === 0) {
      console.warn("user name is required")
      setError((err) => {
        return { ...err, username: "username is required" }
      })
      isError = true;
    }

    if (change.email.length === 0) {
      console.warn("email is required")
      setError((err) => {
        return { ...err, email: "Email is required" }
      })
      isError = true;
    }

    if (change.phone.length === 0) {
      console.warn("Phone num is required")
      setError((err) => {
        return { ...err, phone: "Phone number is required" }
      })
      isError = true;
    }

    if (!change.checkbox) {
      console.warn("please check the checkbox")
      setError((err) => {
        return { ...err, checkbox: "Please check the check box" }
      })
      isError = true;
    }


    if(!isError) {
      localStorage.setItem("formdata", JSON.stringify(change))
      navigate('/select/category')
    }

    
  }

  const handleClick = (e) => {
    e.preventDefault(); // Prevent form submission
    validate();
   
  }

  return (
    <>
      <div className='bg-[#000000] text-white' style={{ display: 'flex', justifyContent: 'space-between', }}>

        <div>
          <img src={homeImg} alt='' width={700} />
          <div className='relative text-2xl' style={{bottom: '10rem'}}>Discover new things on Superapp</div>
        </div>

        <div style={{ marginLeft: '3rem' }}>
          <p className='text-4xl text-[#72DB73]' style={{ fontFamily: 'Single Day' }}>Super app</p>
          <p>Create your new account</p>
          <form className='mt-6 text-[#7C7C7C]' onSubmit={(e) => { e.preventDefault(); validate(); }}>

            <div className='mb-3'>

              <input
                type='text'
                placeholder=' Name'
                value={change.name}
                onChange={(e) => {
                  setChange((prevChange) => ({ ...prevChange, name: e.target.value }));
                  setError((prevError) => ({ ...prevError, name: "" }));
                }}
                className='w-72 bg-[#292929] h-8'
              />


            </div>
            <span style={{ color: 'red' }}>{error.name}</span>


            <div className='mb-3'>

              <input
                type='text'
                placeholder=' UserName'
                value={change.username}
                onChange={(e) => {
                  setChange({ ...change, username: e.target.value });
                  setError({ ...error, username: "" })
                }}
                className='w-72 bg-[#292929] h-8'
              />
            </div>
            <span style={{ color: 'red' }}>{error.username}</span>

            <div className='mb-3'>

              <input
                type='text'
                placeholder=' Email'
                value={change.email}
                onChange={(e) => {
                  setChange({ ...change, email: e.target.value });
                  setError({ ...error, email: "" })
                }}
                className='w-72 bg-[#292929] h-8'
              />
            </div>
            <span style={{ color: 'red' }}>{error.email}</span>

            <div className='mb-3'>

              <input
                type='text'
                placeholder=' Mobile'
                value={change.phone}
                onChange={(e) => {
                  setChange({ ...change, phone: e.target.value });
                  setError({ ...error, phone: "" })
                }}
                className='w-72 bg-[#292929] h-8'
              />
            </div>
            <span style={{ color: 'red' }}>{error.phone}</span>

            <div className='mb-3'>

              <label htmlFor='checkbox' >

                <input
                  type='checkbox'
                  placeholder=' Share my data'
                  value={change.checkbox}
                  onChange={(e) => {
                    setChange({ ...change, checkbox: e.target.value });
                    setError({ ...error, checkbox: false })
                  }}

                />
                Share my registration data with Superapp
              </label>
            </div>
            <span style={{ color: 'red' }}>{error.checkbox}</span>



            <button className='w-72 bg-[#72DB73] text-white mt-6' style={{ borderRadius: '1rem' }} type='submit' onClick={handleClick}>Sign up</button>


            <div className='mt-4' >

              <p>
                By clicking on Sign up. you agree to Superapp <span className='text-[#72DB73]' style={{display: 'inline'}}> Terms and <br /> Conditions </span> of Use
              </p>
            </div>

            <div className='mt-2'>
              <p>
              To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp<span className='text-[#72DB73]'> Privacy Policy</span>
              </p>
            </div>

          </form>



        </div>
      </div>
    </>
  )
}

export default RegistrationPage