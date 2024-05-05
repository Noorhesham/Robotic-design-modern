import ButtonGradient from "../assets/svg/ButtonGradient";
import Header from "./Header";
import LoginForm from "./LoginForm";
import Section from "./Section";

const Login = () => {
  return (
    <>
    <Header/>
      <Section >
        <LoginForm />
      </Section>
      <ButtonGradient/>
    </>
  );
};

export default Login;
