import React from 'react';
import Navbar from '../Components/Navbar';
import img1 from '../Assets/natrajan.jpg';
import img2 from '../Assets/Rajaram.png';
function About() {
  return (
    <div className="font-sans">
        <Navbar/>
        <div className="grid grid-cols-2 mt-10">
                <div className="">
                            <div className="flex justify-center items-center"><img src={img1} className="w-[30%] rounded-3xl"/></div>
                            <div className="text-md font-semibold pt-2">Natarajan Krishnamurthy(Nats)</div>
                            <div className="text-md">Founder, Director & CEO</div>
                </div>
                <div className="">
                            <div className="flex justify-center items-center"><img src={img2} className="w-[30%] rounded-3xl"/></div>
                            <div className="text-md font-semibold pt-2">Rajaram Muthukrishnan</div>
                            <div className="">Founder  & Director</div>
                </div>
        </div>
    </div>
  )
}

export default About