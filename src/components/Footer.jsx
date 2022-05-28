import React from 'react'

const Footer = () => {
  return (
    <div className="bg-blue-700" style={{paddingLeft: "20px", paddingRight: "20px"}}>
            <div className=" bg-blue-700 pb-12">
                <div className="mx-auto container pt-20 lg:pt-72 flex flex-col items-center justify-center">
                    <div className="text-black flex flex-col md:items-center f-f-l pt-3" style={{paddingLeft: "20px", paddingRight: "20px"}}>
                        <h1 className="text-2xl font-black">Innovate Your World.</h1>
                        <div className="md:flex items-center mt-5 md:mt-10 text-base text-color f-f-l">
                            <h2 className="cursor-pointer">WE THE BEST</h2>
                        </div>
                        <div className="my-6 text-base text-color f-f-l">
                            <ul className="md:flex items-center">
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">ABOUT</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">SERVICES</li>
                                <li className="cursor-pointer pt-4 lg:py-0">TERMS & CONDITIONS</li>
                            </ul>
                        </div>
                        <div className="text-sm text-color mb-10 f-f-l">
                            <p> © 2022 Antive Development. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer