import Input from './Input'

const FormFiled = ({name,register,text,className}) => {
  return (
    <div className="flex flex-col gap-1">
    <label htmlFor={name}>{text}</label>
    <Input className={className} name={name} register={register} />
  </div>
  )
}

export default FormFiled
