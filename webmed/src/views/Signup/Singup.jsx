import "./signup.scss";
import SignupForm from "./SignupForm/SignupForm";
import Title from "../../components/Title/Title";
const signup = () => {
  return (
    <div className="Signup">
      <div>
        <Title title="Webmed" />
      </div>
      <div className="Signup__form">
        <SignupForm />
      </div>
    </div>
  );
};

export default signup;
