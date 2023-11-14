import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ImCross } from 'react-icons/im';

const CreatePost = () => {

    const [cat, setCat] = useState("");

    const [cats, setCats] = useState([]);

    const deleteCategory = (i) => {
        let updatedCats = [...cats];
        updatedCats.splice(i);
        setCats(updatedCats);
    }

    const addCategory = () => {
        let updatedCats = [...cats];
        updatedCats.push(cat);
        setCat("");
        setCats(updatedCats);
    }

    return (
        <div>
            <Navbar />
            <div className="px-6 md:px-[200px] mt-8">
                <h1 className='font-bold md:text-2xl text-xl'>Create a post</h1>
                <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
                    <input type="text" className='px-4 py-2 outline-none' placeholder='Enter post title' />
                    <label className="bg-black text-white px-4 py-2 ml-4 font-semibold cursor-pointer">
                        <input type="file" className='' />
                    </label>
                    <div className="flex flex-col">
                        <div className="flex items-center space-x-4 md:space-x-8">
                            <input value={cat} onChange={(e) => setCat(e.target.value)} type="text" className='px-4 py-2 outline-none' placeholder='Enter post category' />
                            <div onClick={addCategory} className="bg-black text-white px-4 py-2 font-semibold cursor-pointer">Add</div>
                        </div>
                        <div className="flex px-4 mt-3">
                            {cats.map((c, i) => (
                                <div key={i} className="flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md">
                                    <p>{c}</p>
                                    <p onClick={() => deleteCategory(i)} className='bg-black text-white rounded-full cursor-pointer p-1 text-sm'><ImCross /></p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <textarea rows={15} cols={30} className='px-4 py-2 outline-none resize-none' placeholder='Enter post description' />
                    <button className='bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg' >Create</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default CreatePost;