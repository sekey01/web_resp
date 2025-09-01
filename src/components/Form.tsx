
const Form = () => {
  return (
    <>
        <div className='w-full h-full bg-white p-4 m-4.5 items-center-safe flex flex-col'>
            <h1>Form</h1>

        <input className='m-2 border-e-black' type='textfield' placeholder=' firstname'>
        </input>
        <input className='m-2' type='textfield' placeholder=' lastname'>
        </input>
        <input className='m-2'  type='textfield' placeholder=' password'>
        </input>
        <input className='m-2'  type='textfield' placeholder=' confirm password'>
        </input>
        
        <div className='flex flex-row'>
            <input className='m-2'  type='Checkbox' placeholder=' password'>
        </input>
        <p> I'm 18 years</p>
        </div>
        <div className='bg-amber-700 rounded-2xl m-4'>
                    <button className='m-2'> Submit Form</button>

        </div>
        </div>


    </>
  )
}

export default Form