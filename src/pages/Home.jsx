import { Signup } from "../components";
import '../components/Home/index.css'
export default function Home() {
  return (
    <div className="container">
      <div className="message-container">
        <p className="message">Discover new things on Superapp</p>
      </div>
      <div>
        <Signup />
      </div>
    </div>
  );
}
