import {useState} from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from "@/assets/logo.svg"
import Link from './Link';
import { SelectedPage } from '../shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
// import {SelectedPage} from "@./shared/types";
// import {selectedPage} from '@./shared/types';
type Props = {
    isTopOfPage: boolean;
    page: string;
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage ) => void;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage}: Props) => {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-black-300 drop-shadow";
  return (
    <nav className='bg-blue-200 p-3 text-white' >
        {/* <div className={`${flexBetween} fixed top-0 z-30 w-[1240px]  py-3`}> */}
            {/* <div className={`${flexBetween} mx-auto w-5/6`}> */}
                <div className={`${flexBetween} container mx-auto`}>
                    {/* left--side */}
                    <a href="/"><img src={Logo} alt="logo" /></a>

                
                    { isAboveMediumScreens ? (
                        // <div>
                        <>
                       <div> <ul  className={`${flexBetween} gap-8 text-sm`}>
                           
                            <Link page="Home" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                             />
                            <Link page="About" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                             />
                            <Link page="Courses" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                             />
                            <Link page="Community" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                             />
                            <Link page="Sponsor a Child" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                             />
                          
                        </ul>
                        </div>
                    
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
        {/* </div> */}
        {/* </div> */}
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
          <div className="flex flex-col gap-10 text-2xl  text-center py-6">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <div className='flex flex-col items-center justify-center gap-8 text-sm'>
                    <button className='rounded-md   border-solid border-2 border-white font-medium px-6 py-2'><a href="">Sign Up</a></button>
                        <button className='rounded-md  bg-[#FCB913] font-medium text-black px-4 py-3'><a href="">Start Learning</a></button>
                    </div> 
          </div>
          
        </div>
      )}


      <div>
      </div>
    </nav>
  )
}

export default Navbar