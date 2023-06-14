import {useState} from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from "@/assets/logo.svg"
import useMediaQuery from '@/hooks/useMediaQuery';


const Navbar = () => {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <nav className='bg-blue-200 p-3 text-white'>
                <div className={`${flexBetween} container mx-auto`}>
                    {/* left--side */}
                    <a href="/"><img src={Logo} alt="logo" /></a>

                
                    { isAboveMediumScreens ? (
                        <>
                        <ul  className={`${flexBetween} gap-8 text-sm`}>
                        <li><a href="#">Home</a></li>
                           <li><a href="#">About</a></li>
                           <li><a href="#">Courses</a></li>
                           <li><a href="#">Community</a></li>
                           <li><a href="#">Sponsor a Child</a></li>
                        </ul>
                     
                    
                    <div className={`${flexBetween} gap-8 text-sm`}>
                    <button className='rounded-md   border-solid border-2 border-white font-medium px-6 py-2'><a href="">Sign Up</a></button>
                        <button className='rounded-md  bg-[#FCB913] font-medium text-black px-4 py-3'><a href="">Start Learning</a></button>
                    </div> 
                    </>
                ) : ( 
                    <button className='rounded-full bg-black p-2' onClick={() => setIsMenuToggled(!isMenuToggled)}> 
                        <Bars3Icon className='h-6 w-6 text-white' />
                    </button>
                )}
            </div>
         {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[50%] bg-green-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div>
          <ul  className="flex flex-col gap-10 text-2xl  text-center py-6">
                        <li><a href="#">Home</a></li>
                           <li><a href="#">About</a></li>
                           <li><a href="#">Courses</a></li>
                           <li><a href="#">Community</a></li>
                           <li><a href="#">Sponsor a Child</a></li>
                        </ul>
          </div>
        </div>
      )}


      <div>
      </div>
    </nav>
  )
}

export default Navbar