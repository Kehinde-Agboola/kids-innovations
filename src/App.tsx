import Navbar from "@/components/Navbar/navbar"
import { useState } from 'react'

import { SelectedPage } from "@/components/shared/types";


function App() {
const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
 return (
  <div className='app bg-gray-600 p-10 text-green-400 text-2xl'>
    <Navbar selectedPage={selectedPage} 
    setSelectedPage={setSelectedPage} />
  </div>
 )
}

export default App
