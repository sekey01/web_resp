 
type ProfileProps = {
  imgUrl: string;
  name: string;
  id: string | number;
  telephone: string;
}

const Profile = ({imgUrl, name, id, telephone}: ProfileProps) => {
  const handleClick = ()=>{}
  return (
    <>
    <div className='bg-blue-200 justify-center flex flex-col items-center-safe '>
        <img src = {imgUrl} alt='Image' height={50} width={50} className=' border-1 border-amber-500 rounded-full'></img>
        <h1>{name}</h1>
        <h2>{id}</h2>
      
        <h3>{telephone}</h3>
        <button onClick={handleClick}></button>


    </div>
    </>
  )
}

export default Profile