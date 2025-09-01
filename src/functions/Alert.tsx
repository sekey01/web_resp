import { useState } from "react";

type AlertProps = {
  btnName?: string;
};
  

const Alert = ({ btnName }: AlertProps) => {
  
const [name,setName] = useState('');

 const handleSubmit =()=>{
  alert('Hello '+ name);
 }
  return (
    <>
      <input type='textfield' value={name} onChange={(e)=> setName(e.target.value)} className='border border-gray-300 p-2 rounded-md' placeholder='Enter text' />

      <button className='bg-blue-500 text-white p-2 rounded-md' onClick={ handleSubmit}> {btnName} </button>
    </>
  )
}

export default Alert