import Section from "../components/Section";
import ButtonGradient from "../assets/svg/ButtonGradient";
import SignupForm from "../components/SignupForm";
import Header from "../components/Header";

const Signup = () => {
  return (
    <>
    <Header/>
      <Section>
        <SignupForm />
        <ButtonGradient />
      </Section>
    </>
  );
};

export default Signup;
