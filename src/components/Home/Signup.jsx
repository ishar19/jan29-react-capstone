import Form from "./Form";
import '../../../src/index.css'

export default function Signup() {
    return(
        <div className="signup-container">
            <div className="signup">
                <div className="header">
                    <p className="app-name">Super app</p>
                    <p className="new-account">Create your new account</p>
                </div>
                <Form />
                <div>
                    <p className="terms-and-condition">By clicking on Sign up. you agree to Superapp <span className="terms-and-condition-text">Terms and Conditions of Use</span></p>
                    <p className="privacy-policy">To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className="privacy-policy-text">Privacy Policy</span></p>
                </div>
            </div>
        </div>
    );
}