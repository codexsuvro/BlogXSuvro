import React from 'react';

const HomePosts = () => {
    return (
        <div className='w-full flex mt-8 space-x-4'>
            {/* Left */}
            <div className="w-[35%] h-[200px] flex justify-center items-center">
                <img src="https://images.pexels.com/photos/18889183/pexels-photo-18889183/free-photo-of-portrait-of-a-hooded-man-standing-in-rain.jpeg" alt="" className="h-full w-full object-cover" />
            </div>
            {/* Right */}
            <div className="flex flex-col w-[65%]">
                <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">CodexSuvro is not only Batman, but also Ironman!</h1>
                <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
                    <p>Suvrodeep</p>
                    <div className="flex space-x-2">
                        <p>13-11-2023</p>
                        <p>15:58</p>
                    </div>
                </div>
                <p className='text-sm md:text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia recusandae eius nihil eos cupiditate saepe dolorem ipsam molestias temporibus minus doloribus tempore deleniti accusantium ipsa eveniet inventore consequatur rem ex ab repellat reiciendis, nisi tenetur?</p>
            </div>
        </div>
    );
};

export default HomePosts;