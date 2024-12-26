import React from 'react'
import Navbar from '../Components/Navbar'
import img from '../Assets/Group.png';
import '@fortawesome/fontawesome-free/css/all.css';
import year from '../Assets/appointment_17543072.png';
import school from '../Assets/education_8521678.png';
import customer from '../Assets/headphone_7971542.png';
function Home() {
  return (
    <div className="font-sans">
        <Navbar />
        <div className="grid grid-cols-2">
            <div className="font-semibold  mt-[150px]">
                <span className="text-5xl text-[#CC2E20]">Savyasasy :- </span><span className="text-5xl">Empowering <span className="mr-[375px] text-5xl">Insights</span></span>
                <div className="px-20 my-7">
                    {/* <ul className="list-disc pl-5">
                        <li className="text-indent-[-0.5em]"> Your partner in digital transformation for schools and colleges.</li>
                        <li className="text-indent-[-0.5em]">Rediefining innovation in the field of  institute management.</li>
                        <li className="text-indent-[-0.5em]">Over 2000, highly recommended customer reviews.</li>
                    </ul> */}
                        <div><span className="text-green-400 mr-2"><i className="fas fa-check-circle"></i></span><span>Your partner in digital transformation for schools and colleges.</span></div>
                        <div><span className="text-green-400 mr-2"><i className="fas fa-check-circle"></i></span><span>Rediefining innovation in the field of  institute management.</span></div>
                        <div><span className="text-green-400 mr-2"><i className="fas fa-check-circle"></i></span><span>Over 2000, highly recommended customer reviews.</span></div>
                </div>
                <div></div>
            </div>
            <div className="">
                <div className="mt-[100px] hidden:sm flex items-center justify-center"><img src={img} className='w-[50%]'/></div>
            </div>
        </div>
        {/* Our clients */}
        <div className="mt-10">
                        <div className="flex justify-center items-center text-4xl font-semibold text-gray-700">Savyasasy Progress</div>

                        <div className="mt-10 px-10">
                            <div className="grid grid-cols-3">
                                    <div className="my-5">
                                        <div className="flex justify-center items-center pb-3"><img src={year} className="w-[20%]"/></div>
                                        <div className="text-4xl font-bold">20+</div>
                                        <div className="text-lg font-semibold">Successful Years</div>
                                    </div>
                                    <div className="my-5">
                                        <div className="flex justify-center items-center pb-3"><img src={school} className="w-[20%]"/></div>
                                        <div className="text-3xl font-semibold">3000+</div>
                                        <div className="text-lg font-semibold">Happy Clients</div>
                                    </div>
                                    <div className="my-5">
                                        <div className="flex justify-center items-center pb-3"><img src={customer} className="w-[20%]"/></div>
                                        <div className="text-3xl font-semibold">100%</div>
                                        <div className="text-lg font-semibold">Customer Service</div>
                                    </div>
                                    <div className="my-5">
                                        <div className="flex justify-center items-center pb-3"><img src={year} className="w-[20%]"/></div>
                                        <div className="text-4xl font-bold">20+</div>
                                        <div className="text-lg font-semibold">Successful Years</div>
                                    </div>
                                    <div className="my-5">
                                        <div className="flex justify-center items-center pb-3"><img src={school} className="w-[20%]"/></div>
                                        <div className="text-3xl font-semibold">3000+</div>
                                        <div className="text-lg font-semibold">Happy Clients</div>
                                    </div>
                                    <div className="my-5">
                                        <div className="flex justify-center items-center pb-3"><img src={customer} className="w-[20%]"/></div>
                                        <div className="text-3xl font-semibold">100%</div>
                                        <div className="text-lg font-semibold">Customer Service</div>
                                    </div>
                            </div>
                        </div>
        </div>
    </div>
  )
}

export default Home