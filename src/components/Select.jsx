
const Select = ({ value, onChange }) => {
  return (
    <select 
      value={value}
      onChange={e => onChange(e.target.value)}
    className=' bg-n-11 input py-3 flex-1 px-6 mt-auto outline-none'
    >
      <option className=' py-1 px-2 input' value="student">Student</option>
      <option value="instructor">Instructor</option>
      <option value="admin">Admin</option>
    </select>
  );
};

export default Select;
