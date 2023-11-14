import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

const PostDetails = () => {
    return (
        <div>
            <Navbar />
            <div className="px-8 md:px-[200px] mt-8">
                <div className="flex justify-between items-center">
                    <h1 className='text-2xl font-bold text-black md:text-3xl'>CodexSuvro is not only Batman, but also Ironman!</h1>
                    <div className="flex justify-center items-center space-x-2">
                        <p><BiEdit /></p>
                        <p><MdDelete /></p>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-2 md:mt-4">
                    <p>Suvrodeep</p>
                    <div className="flex space-x-2">
                        <p>13-11-2023</p>
                        <p>15:58</p>
                    </div>
                </div>
                <img src="https://images.pexels.com/photos/18889183/pexels-photo-18889183/free-photo-of-portrait-of-a-hooded-man-standing-in-rain.jpeg" alt="" className='w-full mx-auto mt-8' />
                <p className='mx-auto mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni omnis neque magnam? Minus deleniti culpa maiores eaque reiciendis aspernatur id repudiandae quam a laboriosam error totam, dolorum molestias doloremque, sequi, corrupti tempora sed neque dolore fugiat cum velit sapiente. Doloribus eos, laboriosam maxime nemo illum sapiente aliquid cum, officia illo impedit eligendi odio dolor voluptatem, in non? Similique quod quis maiores consequuntur modi impedit animi ullam nesciunt, necessitatibus deserunt labore delectus ipsam quidem dolore? Quos quod reprehenderit quia repellat ipsum excepturi vitae iure, cumque delectus id, a maiores ducimus perspiciatis voluptatibus, laborum adipisci aliquam earum eligendi velit nam dolorum veritatis.</p>
                <div className="flex items-center mt-8 space-x-4 font-semibold">
                    <p>Categories:</p>
                    <div className="flex justify-center items-center space-x-2">
                        <div className="bg-gray-300 rounded-lg px-3 py-1">Technology</div>
                        <div className="bg-gray-300 rounded-lg px-3 py-1">React</div>
                    </div>
                </div>
                <div className="flex flex-col mt-4">
                    <h3 className='mt-6 mb-4 font-semibold'>Comments:</h3>
                    <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
                        <div className="flex items-center justify-between">
                            <h3 className='font-bold text-gray-600'>CodexKookie</h3>
                            <div className="flex justify-center items-center space-x-4">
                                <p className='text-gray-500 text-sm'>13/11/2023</p>
                                <p className='text-gray-500 text-sm'>16:45</p>
                                <div className="flex justify-center items-center space-x-2">
                                    <p><BiEdit /></p>
                                    <p><MdDelete /></p>
                                </div>
                            </div>
                        </div>
                        <p className="px-4 mt-2">Nice information!</p>
                    </div>
                    <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
                        <div className="flex items-center justify-between">
                            <h3 className='font-bold text-gray-600'>CodexKookie</h3>
                            <div className="flex justify-center items-center space-x-4">
                                <p className='text-gray-500 text-sm'>13/11/2023</p>
                                <p className='text-gray-500 text-sm'>16:45</p>
                                <div className="flex justify-center items-center space-x-2">
                                    <p><BiEdit /></p>
                                    <p><MdDelete /></p>
                                </div>
                            </div>
                        </div>
                        <p className="px-4 mt-2">Nice information!</p>
                    </div>
                    <div className="w-full flex flex-col mt-4 md:flex-row">
                        <input className='md:w-[80%] outline-none px-2 mt-4 md:mt-0' type="text" placeholder='Write a comment...' />
                        <button className='bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0'>Comment</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PostDetails;