import { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaLink } from "react-icons/fa6";




function Members() {
    const [profileVisible, setProfileVisible] = useState(false);
    const [selectedTab, setSelectedTab] = useState('About');
    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    const toggleProfile = () => {
        setProfileVisible(!profileVisible);
    };
    return (
        <div>
            <div className='border-b-2 pb-5'>
                Members
                <span>(2000)</span>
            </div>
            <div className='mt-3'>
                <div className='flex  cursor-pointer bg-white gap-2 hover:shadow-md hover:relative p-2 border rounded w-full' onClick={toggleProfile}>
                    <div className='h-[60px] w-[100px] rounded-md bg-black'></div>
                    <div className='flex flex-col  gap-2 '>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-bold'>Nicodemus Muholo</h1>
                            <button className='border rounded p-1 absolute top-0 right-0 mt-4 mr-4 opacity-0 hover:opacity-100 transition-opacity duration-300'>Message</button>
                        </div>
                        <span>Nairobi, Kenya</span>
                        <p>I am and adept Software Engineer, with a desire to grow in coding and provide fully fledged applications that are user friendly</p>
                    </div>
                </div>
                <div className={`profile-sidebar top-[35px] md:top-[53px] w-full md:w-[500px] ${profileVisible ? 'show' : ''}`}>
                    {/* Profile content */}
                    <div className="p-4">
                        <div className='flex justify-between items-center'>Profile <IoClose onClick={toggleProfile} className='cursor-pointer  hover:rounded hover:bg-gray-100' /></div>
                        <div className='flex items-center gap-3 mt-5'><div className='bg-[#2dabb1] text-3xl font-bold rounded-md text-white p-5'>NM</div>
                            <div className='flex flex-col gap-2'>Nicodemus Muholo<div className='flex gap-2 items-center'>
                                <button className=' rounded p-2 border-2 text-gray-600 flex gap-2 items-center'><BiMessageSquareDetail /> Message</button>
                                <button className=' hover:bg-[#2dabb1] hover:border-0 hover:text-white border-black rounded-md p-2 border text-gray-600'><FaLink /></button>
                            </div></div>
                        </div>
                        <div className='mt-6'>
                            <ul className='flex items-center gap-3 cursor-pointer'>
                                <li
                                    className={`hover:underline ${selectedTab === 'About' ? 'font-bold text-[#2dabb1] underline ' : ''}`}
                                    onClick={() => handleTabClick('About')}
                                >
                                    About
                                </li>
                                <li
                                    className={`hover:underline ${selectedTab === 'Posts' ? 'font-bold text-[#2dabb1] underline' : ''}`}
                                    onClick={() => handleTabClick('Posts')}
                                >
                                    Posts
                                </li>
                                <li
                                    className={`hover:underline ${selectedTab === 'Comments' ? 'font-bold text-[#2dabb1] underline' : ''}`}
                                    onClick={() => handleTabClick('Comments')}
                                >
                                    Comments
                                </li>
                                <li
                                    className={`hover:underline ${selectedTab === 'Rooms' ? 'font-bold text-[#2dabb1] underline' : ''}`}
                                    onClick={() => handleTabClick('Rooms')}
                                >
                                    Rooms
                                </li>
                            </ul>
                            <div className='w-full overflow-y-scroll h-full p-1'>
                                {selectedTab === 'About' && <div>{<h1>About</h1>}</div>}
                                {selectedTab === 'Posts' && <div>{<h1>Posts</h1>}</div>}
                                {selectedTab === 'Comments' && <div>{<h1>Comments</h1>}</div>}
                                {selectedTab === 'Rooms' && <div>{<h1>Rooms</h1>}</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Members