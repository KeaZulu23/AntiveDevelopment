import React from "react";
import Image5 from '../../assets/img/portfolio/image4.jpg'
import Image8 from '../../assets/img/portfolio/OnlineCV.png'
import ImageIb from '../../assets/img/portfolio/image5.jpg'
import ImageTee from '../../assets/img/portfolio/image2.jpg'
import ImageEl from '../../assets/img/portfolio/image1.jpg'
import ImageTD from '../../assets/img/portfolio/image6.jpg'
import ImageBlush from '../../assets/img/portfolio/blush.png'

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
                <a href="https://keazulu23.github.io/OnlineCV/">
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
                <img src={ImageIb}
                class="w-full transition duration-300 ease-linear align-middle" />
                <a href="https://icebombs.co.za/">
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
                    <div class="flex justify-start items-end h-full">
                    <h5 class="text-lg font-bold text-white m-6">Ice Bombs </h5>
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
                style={{backgroundPosition: "50%"}} data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <img src={Image5}
                class="w-full transition duration-300 ease-linear align-middle" />
                <a href="https://keazulu23.github.io/BNM-DesignsSA/">
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

            <div class="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover"
                style={{backgroundPosition: "50%"}} data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <img src={ImageTee}
                class="w-full transition duration-300 ease-linear align-middle" />
                <a href="https://cassoworks.co.za/">
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}}S>
                    <div class="flex justify-start items-end h-full">
                    <h5 class="text-lg font-bold text-white m-6">Casso Works</h5>
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
                style={{backgroundPosition: "50%"}} data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <img src={ImageEl}
                class="w-full transition duration-300 ease-linear align-middle" />
                <a href="https://keazulu23.github.io/EliashibGroup/">
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}}S>
                    <div class="flex justify-start items-end h-full">
                    <h5 class="text-lg font-bold text-white m-6">Eliashib Group</h5>
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
                style={{backgroundPosition: "50%"}} data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <img src={ImageTD}
                class="w-full transition duration-300 ease-linear align-middle" />
                <a href="https://keazulu23.github.io/Top-Dawg-Media-House/">
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}}S>
                    <div class="flex justify-start items-end h-full">
                    <h5 class="text-lg font-bold text-white m-6">Top Dawg Media House</h5>
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
                style={{backgroundPosition: "50%"}} data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <img src={ImageBlush}
                class="w-full transition duration-300 ease-linear align-middle" />
                <a href="https://keazulu23.github.io/BlushMGT/">
                <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}}S>
                    <div class="flex justify-start items-end h-full">
                    <h5 class="text-lg font-bold text-white m-6">Blush Management</h5>
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