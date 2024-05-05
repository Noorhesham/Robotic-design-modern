import Button from "./Button";
import FormFiled from "./FormFiled";
import Select from "./Select";

const SignupForm = () => {
  return (
    <div className="container mt-5">
      <div className="relative z-1 flex flex-col gap-4 border mx-auto border-n-6 rounded-2xl min-h-[28rem]  max-w-[50rem] ">
        <h4 className="h4 text-center my-5">Signup Now !</h4>
        <form className="flex flex-col w-full h-full items-center justify-center gap-5 px-2 py-4">
          <div className="flex flex-col self-center  gap-5">
            <div className="flex flex-col  lg:gap-5 gap-2 lg:flex-row items-center justify-between">
              <FormFiled text="First Name" name="firstname" />
              <FormFiled text="Last Name" name="lastname" />
            </div>
            <div className="flex flex-col  lg:gap-5 gap-2 lg:flex-row items-center justify-between">
              <FormFiled className="w-full" text="Username" name="username" />
              <Select name="role" />
            </div>
          </div>
          <div className="flex w-[80%] self-center   my-3 flex-col gap-5">
            <FormFiled className="w-full" text="Email" name="email" />
            <FormFiled className="w-full" text="Password" name="password" />
          </div>
          <Button white className="w-[80%] mt-auto justify-end mb-5">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
