import React from "react";


import Image2 from '../../assets/img/portfolio/2.jpg'
import Image5 from '../../assets/img/portfolio/5.jpg'
import Image8 from '../../assets/img/portfolio/8.jpg'
import Image11 from '../../assets/img/portfolio/11.jpg'
import Image14 from '../../assets/img/portfolio/14.jpg'

const pPhotoGrid = () => {
    return (
        <div class="container my-24 px-6 mx-auto" style={{paddingLeft: "50px", paddingRight: "50px"}}>

        <section class="mb-32 text-gray-800">
            <h2 class="text-3xl font-bold mb-12 text-center">
            Projects we are<u class="text-blue-600"> proud of</u>
            </h2>

            <div class="grid lg:grid-cols-3 gap-6">
            <div class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
                style={{backgroundPosition: "50%"}} data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <img src={Image8}
                class="w-full transition duration-300 ease-linear align-middle" />
                <a href="https://keazulu23.github.io/MyCV">
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
                    <div class="flex justify-start items-end h-full">
                    <h5 class="text-lg font-bold text-white m-6">Kea's Online CV</h5>
                    </div>
                </div>
                <div class="hover-overlay">
                    <div
                    class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
                </div>
                </a>
            </div>

            <div class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
                style={{backgroundPosition: "50%;"}} data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <img src={Image11}
                class="w-full transition duration-300 ease-linear align-middle" />
                <a href="http://www.smdesignz.co.za/">
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
                    <div class="flex justify-start items-end h-full">
                    <h5 class="text-lg font-bold text-white m-6">SM-Designz</h5>
                    </div>
                </div>
                <div class="hover-overlay">
                    <div
                    class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
                </div>
                </a>
            </div>

            <div class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
                style={{backgroundPosition: "50%;"}} data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <img src={Image2}
                class="w-full transition duration-300 ease-linear align-middle" />
                <a href="#!">
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
                    <div class="flex justify-start items-end h-full">
                    <h5 class="text-lg font-bold text-white m-6">Flvme</h5>
                    </div>
                </div>
                <div class="hover-overlay">
                    <div
                    class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
                </div>
                </a>
            </div>

            <div class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
                style={{backgroundPosition: "50%;"}} data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <img src={Image14}
                class="w-full transition duration-300 ease-linear align-middle" />
                <a href="http://nfmalekaattorneys.co.za/">
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
                    <div class="flex justify-start items-end h-full">
                    <h5 class="text-lg font-bold text-white m-6">N.F. Maleka Attorneys Inc</h5>
                    </div>
                </div>
                <div class="hover-overlay">
                    <div
                    class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
                </div>
                </a>
            </div>

            <div>
               
            </div>

            <div class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
                style={{backgroundPosition: "50%"}} data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <img src={Image5}
                class="w-full transition duration-300 ease-linear align-middle" />
                <a href="https://www.bnmarchitects.co.za/">
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}}S>
                    <div class="flex justify-start items-end h-full">
                    <h5 class="text-lg font-bold text-white m-6">BNMA Designs</h5>
                    </div>
                </div>
                <div class="hover-overlay">
                    <div
                    class="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
                </div>
                </a>
            </div>

            </div>

        </section>

        
        </div>
    );
}

export default pPhotoGrid;