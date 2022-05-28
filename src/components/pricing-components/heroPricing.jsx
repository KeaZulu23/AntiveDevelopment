import React from "react";

const heroPricing = () => {
    
    return (
        <div className="pt-16">
            <div className="w-full bg-white py-12">
                <div className="container mx-auto">
                    <div className="w-4/5 mx-auto mb-12">
                        <h1 className="xl:text-4xl text-3xl text-center text-gray-800 mb-4 font-extrabold">Simple &amp; Transparent Pricing</h1>
                        <p className="text-xl text-center text-gray-600 font-normal">Focus on your business goals and we take care of the rest. From ready-made components to perfect templates to highly customizable design. All you need to do is choose your plan according to your next project.</p>
                        <br></br>
                        <p className="text-xl text-center text-gray-600 font-normal">All prices are per once off.</p>
                    </div>
                    <div className="w-11/12 mx-auto">
                        <div className="xl:flex lg:flex items-end">
                            <div className="flex flex-wrap xl:w-1/4 bg-white items-center justify-center pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-2 sm:mb-2 mb-2 shadow">
                                <img src="https://cdn.tuk.dev/assets/calculator-img.png" alt />
                            </div>
                            <div className="xl:flex lg:flex md:flex sm:flex shadow">
                                <div className="bg-white pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-0 sm:mb-0 mb-2 pl-6 pr-6 flex flex-col xl:w-1/3 lg:w-1/3 justify-center items-center border-r border-l border-gray-200">
                                    <div className="mb-6">
                                        <img src="https://cdn.tuk.dev/assets/paper-plane.png" alt />
                                    </div>
                                    <p className="text-center text-2xl font-bold text-gray-800 mb-3">Starter Package </p>
                                    <p className="text-center text-sm text-gray-600 mb-6 font-normal w-full">Basic resources for a starter site. <br></br></p>
                                    <button className="focus:outline-none bg-white transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-600 text-white px-6 py-2 text-sm">Subscribe</button>
                                </div>
                                <div className="bg-white pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-0 sm:mb-0 mb-2 pl-6 pr-6 flex flex-col xl:w-1/3 lg:w-1/3 justify-center items-center border-r border-l border-gray-200">
                                    <div className="mb-5">
                                        <img src="https://cdn.tuk.dev/assets/plane.png" alt />
                                    </div>
                                    <p className="text-center text-2xl font-bold text-gray-800 mb-3">Silver Package</p>
                                    <p className="text-center text-sm text-gray-600 mb-6 font-normal w-full">More power for company sites and heavy traffic. Growing business. <br></br></p>
                                    <button className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-sm border">Subscribe</button>
                                </div>
                                <div className="bg-white pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-0 sm:mb-0 mb-2 pl-6 pr-6 flex flex-col xl:w-1/3 lg:w-1/3 justify-center items-center border-r border-l border-gray-200">
                                    <div className="mb-6">
                                        <img src="https://cdn.tuk.dev/assets/start-button.png" alt />
                                    </div>
                                    <p className="text-center text-2xl font-bold text-gray-800 mb-3">Blue Package</p>
                                    <p className="text-center text-sm text-gray-600 mb-6 font-normal w-full">Support multi-complex sites and high-resolution photos and videos. <br></br></p>
                                    <button className="focus:outline-none bg-white transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-600 text-white px-6 py-2 text-sm">Subscribe</button>
                                </div>
                                <div className="bg-white pt-8 pb-8 lg:mb-0 xl:mb-0 md:mb-0 sm:mb-0 mb-2 pl-6 pr-6 flex flex-col xl:w-1/3 lg:w-1/3 justify-center items-center border-r border-l border-gray-200">
                                    <div className="mb-6">
                                        <img src="https://cdn-icons.flaticon.com/png/512/3049/premium/3049628.png?token=exp=1653555064~hmac=4f05ee690bd113efbc1dc52a59a7a254" style={{height: "40px", width: "40px"}} alt />
                                    </div>
                                    <p className="text-center text-2xl font-bold text-gray-800 mb-3">Gold Package</p>
                                    <p className="text-center text-sm text-gray-600 mb-6 font-normal w-full">The best or nothing. <br></br></p>
                                    <button className="focus:outline-none bg-white transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-600 text-white px-6 py-2 text-sm">Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div className="shadow">
                            <div>
                                <div className="flex items-center w-full">
                                    <p className="pl-4 pt-3 pb-3 font-bold text-sm text-gray-600 w-3/12">Pricing</p>
                                    <p className="w-3/12 text-sm text-center text-gray-800 font-bold lg:hidden">Starter</p>
                                    <p className="w-3/12 text-sm text-center text-gray-800 font-bold lg:hidden">Silver</p>
                                    <p className="w-3/12 text-sm text-center text-gray-800 font-bold lg:hidden">Blue</p>
                                    <p className="w-3/12 text-sm text-center text-gray-800 font-bold lg:hidden">Gold</p>
                                </div>
                                <table className="sm:table-fixed table-auto w-full bg-white">
                                    <tbody>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Plan Cost</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">R2999</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">R4499</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">R6499</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">R10199</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <p className="pl-4 pt-3 pb-3 font-bold text-sm text-gray-600">Features</p>
                                <table className="sm:table-fixed table-auto w-full bg-white">
                                    <tbody>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Amount of Pages</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">3</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">4</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">5</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">6</td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Responsive Design</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Email Hosting</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td><td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Domain Name Registration</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Logo Design</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Letterhead</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Marketing Services</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Email Signature Design</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Business Card</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Submit Website to Google</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Google Maps</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">Mobile First Approach</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-xs sm:text-sm text-gray-800 break-words">On-Call Support</td>
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800" />
                                            <td className="w-3/12 border border-gray-200 p-2 sm:p-4 text-center text-xs sm:text-sm text-gray-800">
                                                <div className="h-2 w-2 rounded-full bg-indigo-700 mx-auto" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default heroPricing;