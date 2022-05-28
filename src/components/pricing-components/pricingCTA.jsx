import React from "react";

const pricingCTA = () => {
    return(
        <div className="dark:bg-white" style={{paddingLeft: "20px", paddingRight: "20px"}}>
                <section className="mx-auto container w-full py-36">
                    <div className="flex flex-col justify-center items-center">
                        <div style={{fontSize: "16px"}} className="md:text-5xl text-4xl font-black text-center text-gray-800 dark:text-black leading-snug lg:w-3/4">
                            <h2>It doesn’t matter if you are a start-up company that wants reasonable website designer services or a reputable company looking to improve your online presence, Antive Development offers the best web design solutions and above all our work is highly professional. </h2>
                        </div>
                        <div className="md:mt-12 mt-20">
                            <a href="https://wa.me/+27718796137">
                                <button className="text-base font-medium leading-4 text-white bg-white sm:w-auto w-full rounded p-4 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-white">Let's Work!!!</button>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
    )
}

export default pricingCTA;