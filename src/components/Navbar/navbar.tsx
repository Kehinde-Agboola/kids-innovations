import {useState} from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from "@/assets/logo.svg"
import Link from './Link';
import { SelectedPage } from '../shared/types';
// import {SelectedPage} from "@./shared/types";
// import {selectedPage} from '@./shared/types';
type Props = {
    page: string;
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage ) => void;
}

const Navbar = ({ selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between"
  return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-3`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full`}>
                    {/* left--side */}
                    <a href="/"><img src={Logo} alt="logo" /></a>

                    {/* right--side */}
                    {/* <div className={`${flexBetween} w-full `}> */}
                        { <div>
                            <ul  className={`${flexBetween} gap-8 text-sm`}>
                                {/* <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Courses</a></li>
                                <li><a href="#">Community</a></li>
                                <li><a href="#">Sponsor a Child</a></li> */}
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
                        </div> }
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <p>Sign In</p>
                            <p>Become a Memeber</p>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar