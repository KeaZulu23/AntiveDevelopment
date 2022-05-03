import React from "react";

import client1 from '../../assets/img/client-logo/nfmaleka.png'
import client2 from '../../assets/img/client-logo/BNM Designz.png'
import client3 from '../../assets/img/client-logo/SM-DESIGNZ.png'
import client4 from '../../assets/img/client-logo/ballito-villa.png'
import client5 from "../../assets/img/logo/logo.PNG";
import client6 from "../../assets/img/logo/logo12.png";



const portfolioAbout = () => {
    return (
        <div className="container mx-auto pt-16" style={{paddingBottom: "50px", paddingLeft: "50px", paddingRight: "50px"}}>
            <div className="xl:w-full w-11/12 mx-auto">
                <h1 className="text-gray-800 font-extrabold xl:text-5xl text-3xl mb-4 text-center xl:text-left md:text-left lg:text-left">Hear From Our Customers</h1>
                <p className="text-xl xl:text-left md:text-left lg:text-left md:w-full text-center xl:w-2/3 lg:w-2/3 w-11/12 mx-auto xl:mx-0 lg:mx-0 text-gray-600">You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.</p>
            </div>
            <div className="flex flex-wrap mt-10 justify-between w-full md:w-11/12 md:mx-auto xl:mx-0 xl:w-full">
                <div className="xl:w-3/4 lg:w-3/4 md:w-8/12 w-11/12 mx-auto xl:mx-0 lg:mx-0 md:ml-0 shadow-md border border-gray-200 p-8 rounded">
                    <p className="pb-8 text-base text-gray-800">I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all.</p>
                    <p className="text-base text-gray-800">My new site is so much faster and easier to work with than my old site. It used to take me an hour or more to update a page and I would still sometimes screw things up.</p>
                    <div className="mt-8">
                        <p className="text-base text-gray-800 font-bold pb-1">- Andres Berlin</p>
                        <p className="text-sm text-gray-600 pl-2">VP, Talent Management</p>
                    </div>
                    <div className="flex items-center mt-8">
                        <div className="h-8 w-8">
                            <img src={"https://cdn.tuk.dev/assets/marketing/page_sections/testimonials_section/testimonial6.jpg"} alt className="h-full w-full object-cover rounded-md shadow" />
                        </div>
                        <p className="text-sm ml-2">Twitter Inc.</p>
                    </div>
                </div>
                <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 flex items-end xl:justify-end lg:justify-end md:justify-end sm:justify-center justify-center xl:pl-8 lg:pl-8 w-11/12 mx-auto xl:mx-0 lg:mx-0 mt-2">
                    <div className="h-64 w-64">
                        <img src="https://cdn.tuk.dev/assets/photo-1567290329751-0700a37da0af.jfif" alt className="rounded h-full w-full object-cover shadow" />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center mt-10" style={{paddingLeft: "50px", paddingRight: "50px"}}>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6 w-full">
                        <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                            <img src={client1} height={80} width={140} />
                        </div>
                        <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                            <img src={client3} height={100} width={150} />
                        </div>
                        <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                            <img src={client2} height={100} width={150} />
                        </div>
                        <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                            <img src={client4} height={200} width={300} />
                        </div>
                        <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                            <img src={client5} height={200} width={300} />
                        </div>
                        <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
                            <img src={client6} height={200} width={350} />
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default portfolioAbout;