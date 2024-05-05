import Button from "./Button";
import Input from "./Input";

const LoginForm = () => {
  return (
    <div className="container mt-5">
      <div className="relative z-1 flex flex-col gap-4 border mx-auto border-n-6 rounded-2xl min-h-[28rem]  max-w-[35rem] ">
        <h4 className="h4 text-center my-5">Login Now !</h4>
        <form className="flex flex-col h-full items-center justify-center gap-5 px-2 py-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <Input name={"username"} register={""} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="username">password</label>
            <Input name={"password"} register={""} />
          </div>
          <Button white className="w-[80%] mt-auto justify-end mb-5">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
