import { Form } from "../components";
import background from "../assets/background.svg"
export default function Home() {
  return (
    <div className="bg-black flex flex-row text-white items-center justify-start gap-10">
      <div style={{
        backgroundImage: `url(${background})`,
        height:'100vh',
        width:'50vw',
      }}>
        <p style={{
          paddingLeft:'70px',
          textAlign:'justify',
          position:'fixed',
          bottom:'50px',
          fontWeight:'700',
          fontSize:'3em'
        }}>Discover new things on<br/> Superapp</p>
      </div>
      <div className="text-[#7C7C7C]">
        <p className="font-single-day text-center text-5xl text-[#72DB73]">Super app</p>
        <p className="text-center text-white text-ms">Create your new account</p><br/>
        <Form />
        <br/>
        <p className="text-xs">By clicking on Sign up. you agree to Superapp <span style={{color:'#72DB73'}}>Terms and Conditions of Use</span></p><br/>
        <p className="text-xs">To learn more about how Superapp collects, uses, shares and  protects your personal</p>
        <p className="text-xs"> data please head Superapp <span style={{color:'#72DB73'}}>Privacy Policy</span> </p>
      </div>
    </div>
  );
}
