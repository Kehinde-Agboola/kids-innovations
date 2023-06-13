import {useState} from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from "@/assets/logo.svg"
import Link from './Link';
import { SelectedPage } from '../shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
// import {SelectedPage} from "@./shared/types";
// import {selectedPage} from '@./shared/types';
type Props = {
    page: string;
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage ) => void;
}

const Navbar = ({ selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-3`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full`}>
                    {/* left--side */}
                    <a href="/"><img src={Logo} alt="logo" /></a>

                
                    { isAboveMediumScreens ? (
                        <div>
                        <ul  className={`${flexBetween} gap-8 text-sm`}>
                           
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
                    
                    <div className={`${flexBetween} gap-8 text-sm`}>
                        <p>Sign In</p>
                        <button>Become a Memeber</button>
                    </div> 
                </div>
                ) : ( 
                    <button className='rounded-full bg-slate-200 p-2' onClick={() => setIsMenuToggle(!isMenuToggled)}> 
                        <Bars3Icon className='h-6 w-6 text-white' />
                    </button>
                )}
            </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar