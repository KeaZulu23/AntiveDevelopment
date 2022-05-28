import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

  const [menu, setMenu] = useState(false);

  return (
    <><nav className="lg:hidden relative z-50 bg-blue-700">
      <div className="flex py-2 justify-between items-center px-4">
        <div>
          <img src="https://keazulu23.github.io/AntiveDevelopment/assets/img/logo/photoroom.png" alt="logo" height={50} width={100} />
        </div>
        <div className="visible flex items-center">
          <button id="open" onClick={() => setMenu(!menu)} className={` ${menu ? 'hidden' : ''} focus:outline-none focus:ring-2 focus:ring-black`}>
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg2.svg" alt="menu" />
          </button>
          <ul id="list" className={` ${menu ? '' : 'hidden'} p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-24`}>
            <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
              <a href="/" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                <span className="font-bold">Home</span>
              </a>
            </li>
            <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onclick="dropdownHandler(this)">
              <a href="javascript: void(0)" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                <span className="font-bold">About Us</span>
              </a>
            </li>
            <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
              <a href="javascript: void(0)" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                <span className="font-bold">Services</span>
              </a>
            </li>
            <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onclick="dropdownHandler(this)">
              <a href="/portfolio" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                <span className="font-bold">Portfolio</span>
              </a>
            </li>
            <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onclick="dropdownHandler(this)">
              <a href="/pricing" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                <span className="font-bold">Pricing</span>
              </a>
            </li>
            <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onclick="dropdownHandler(this)">
              <a href="javascript: void(0)" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                <span className="font-bold">Contact</span>
              </a>
            </li>
          </ul>
          <div className="xl:hidden">
            <button id="close" className={` ${menu ? '' : 'hidden'} close-m-menu focus:ring-2 focus:ring-black focus:outline-none`} onClick={() => setMenu(!menu)}>
              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg3.svg" alt="close" />
            </button>
          </div>
        </div>
      </div>
    </nav>
    <nav className="f-f-l relative z-10 bg-blue-700">
        <div className="relative z-10 mx-auto container hidden w-full px-4 xl:px-0 lg:flex justify-between items-center py-11">
          <div>
            <img src="https://keazulu23.github.io/AntiveDevelopment/assets/img/logo/photoroom.png" alt="logo" height={50} width={100} />
          </div>
          <div className="flex items-center text-white text-base font-medium">
            <ul className="flex items-center pr-3 xl:pr-12">
              <li className="cursor-pointer hover:text-gray-300 ease-in">
                <a href="/" className="focus:outline-none focus:ring-2 focus:ring-white" style={{color: "White"}}>Home</a>
              </li>
              <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                <a href="javascript:void(0)" className="focus:outline-none focus:ring-2 focus:ring-white" style={{color: "White"}}>About Us</a>
              </li>
              <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                <a href="javascript:void(0)" className="focus:outline-none focus:ring-2 focus:ring-white" style={{color: "White"}}>Services</a>
              </li>
              <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                <a href="/portfolio" className="focus:outline-none focus:ring-2 focus:ring-white" style={{color: "White"}}>Portfolio</a>
              </li>
              <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                <a href="/pricing" className="focus:outline-none focus:ring-2 focus:ring-white" style={{color: "White"}}>Pricing</a>
              </li>
              <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                <a href="javascript:void(0)" className="focus:outline-none focus:ring-2 focus:ring-white" style={{color: "White"}}>Team</a>
              </li>
              <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                <a href="javascript:void(0)" className="focus:outline-none focus:ring-2 focus:ring-white" style={{color: "White"}}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav></>
  );
};

export default Navbar;
