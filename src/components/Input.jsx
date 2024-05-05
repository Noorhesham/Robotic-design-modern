const Input = ({name,register,className}) => {
  return (
    <div className={` relative background input text-n-3 inline-flex items-center justify-center `}>
      <input name={name} {...register(name)} className={`${className?className:""} input body-2 pr-10 pl-8 py-1 bg-n-8`} type="text" placeholder="Your input" />
    </div>
  );
};

export default Input;
