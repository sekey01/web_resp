import Logo from './Logo'

const Header = () => {
  return (
    <div className='flex flex-row w-full space-x-45 md:space-x-150 p-2.5 items-center '>

     <Logo/>

        {/* details */}
        <div className='flex flex-col gap-0.5 md:hidden lg:hidden'>
            <div className='bg-white h-1 w-8'></div>
            <div className='bg-white h-1 w-8'></div>
            <div className='bg-white h-1 w-8'></div>

        </div>

    </div>
  )
}

export default Header