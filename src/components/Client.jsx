/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import client1 from '../assets/img/client-logo/nfmaleka.png'
import client2 from '../assets/img/client-logo/BNM Designz.png'
import client3 from '../assets/img/client-logo/SM-DESIGNZ.png'
import client4 from '../assets/img/client-logo/ballito-villa.png'
import client5 from "../assets/img/client-logo/Ice Bomb Logo.png";

const Client = () => {

    return (
    <div className="2xl:px-20 md:px-10 2xl:mx-auto 2xl:container" style={{paddingLeft: "20px", paddingRight: "20px"}}>
            <div className="md:py-12 py-8 px-4">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold leading-10 text-gray-800">Our Client History</h1>
                    <p className="text-base leading-normal text-center text-gray-600 mt-4 xl:w-1/2 w-10/12">Our years of experience in the industry paired with a client-oriented approach not only gives us an edge against the competition but it allows us to achieve remarkable results consistently.</p>
                </div>
                <div className="flex items-center justify-center mt-10">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6 w-full">
                        <a href="https://nfmalekaattorneys.co.za/">
                        <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                            <img src={client1} height={80} width={140} />
                        </div>
                        </a>
                        <a href="http://www.smdesignz.co.za/">
                        <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                            <img src={client3} height={100} width={150} />
                        </div>
                        </a>
                        <a href="https://bnmarchitects.co.za/">
                        <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                            <img src={client2} height={100} width={150} />
                        </div>
                        </a>
                        <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                            <img src={client4} height={200} width={300} />
                        </div>
                        <a href="https://icebombs.co.za/">
                        <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                            <img src={client5}style={{height: "100px"}} height={100} width={100} />
                        </div>
                        </a>
                        <a href="https://cassoworks.co.za/">
                        <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                        <p className="text-base leading-normal text-center text-gray-600 mt-4 xl:w-1/2 w-10/12">CassoWorks</p>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Client