import React from 'react';
import { BsTextParagraph, BsPeopleFill, BsFilePost } from "react-icons/bs";
import { FaBookReader, FaSignature } from "react-icons/fa";
import { MdForum, MdPrivacyTip } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { VscOrganization } from "react-icons/vsc";

const Footer = () => {
    return (
        <>
            <div className='mt-8 w-full bg-black px-8 md:px-[200px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between font-medium text-sm md:text-md py-8'>
                <div className="flex flex-col text-white">
                    <p className='flex items-center'><BsTextParagraph style={{ marginRight: '15px' }} />Featured Blogs</p>
                    <p className='flex items-center'><BsPeopleFill style={{ marginRight: '15px' }} />Most Viewed</p>
                    <p className='flex items-center'><FaBookReader style={{ marginRight: '15px' }} />Readers Choice</p>
                </div>
                <div className="flex flex-col text-white">
                    <p className='flex items-center'><MdForum style={{ marginRight: '15px' }} />Forum</p>
                    <p className='flex items-center'><BiSupport style={{ marginRight: '15px' }} />Support</p>
                    <p className='flex items-center'><BsFilePost style={{ marginRight: '15px' }} />Recent Posts</p>
                </div>
                <div className="flex flex-col text-white">
                <p className='flex items-center'><MdPrivacyTip style={{ marginRight: '15px' }} />Privacy Policy</p>
                    <p className='flex items-center'><VscOrganization style={{ marginRight: '15px' }} />About Us</p>
                    <p className='flex items-center'><FaSignature style={{ marginRight: '15px' }} />Terms & Conditions</p>
                </div>
            </div>
            <p className='py-2 pb-2 text-center text-gray-500 bg-black text-sm'>CodexSuvro Production ❤️ All rights reserved 2023.</p>
        </>
    );
};

export default Footer;