import React from 'react'

import Footer from '../components/Footer';
import Navbar from '../components/Navbar.jsx';

const ecommerce = () => {
  return (
    <div>
        <Navbar />
        <div class="container my-24 px-6 mx-auto">
        <section class="mb-32 text-gray-800">
            <div class="flex flex-wrap items-center">
            <div class="grow-0 shrink-0 basis-auto w-full lg:w-4/12 mb-6 md:mb-0 px-3">
                <h2 class="text-3xl font-medium title-font mb-6">
                E-Commerce Solutions
                </h2>
                <p class="text-gray-500 mb-12">
                We are also a Commerce development company with an insightful and analytical approach to cater to your business requirements. Keeping in mind your target audience, products, budgets, and requirements, right from theme customization to maintenance, we offer the best solutions for enhancing your business at an affordable cost.
                </p>
            </div>
            <div class="grow-0 shrink-0 basis-auto w-full lg:w-8/12 mb-6 mb-md-0 px-3">
                <div class="flex flex-wrap">
                <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12">
                    <div class="flex">
                    <div class="shrink-0 mt-1">
                        <svg class="w-4 h-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                        </path>
                        </svg>
                    </div>
                    <div class="grow ml-4">
                        <p style={{fontSize: "13px"}} class=" mb-1 font-medium title-font">Custom e-commerce website design and development. </p>
                    </div>
                    </div>
                </div>

                <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12">
                    <div class="flex">
                    <div class="shrink-0 mt-1">
                        <svg class="w-4 h-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                        </path>
                        </svg>
                    </div>
                    <div class="grow ml-4">
                        <p style={{fontSize: "13px"}} class=" mb-1 font-medium title-font">Integration with popular payment gateways such as PayPal and Stripe </p>
                    </div>
                    </div>
                </div>

                <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12">
                    <div class="flex">
                    <div class="shrink-0 mt-1">
                        <svg class="w-4 h-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                        </path>
                        </svg>
                    </div>
                    <div class="grow ml-4">
                        <p style={{fontSize: "13px"}} class=" mb-1 font-medium title-font">Implementation of secure login and registration systems</p>
                    </div>
                    </div>
                </div>

                <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12">
                    <div class="flex">
                    <div class="shrink-0 mt-1">
                        <svg class="w-4 h-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                        </path>
                        </svg>
                    </div>
                    <div class="grow ml-4">
                        <p style={{fontSize: "13px"}} class=" mb-1 font-medium title-font">Integration with inventory management and order fulfillment systems </p>
                    </div>
                    </div>
                </div>

                <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12">
                    <div class="flex">
                    <div class="shrink-0 mt-1">
                        <svg class="w-4 h-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor"
                            d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                        </path>
                        </svg>
                    </div>
                    <div class="grow ml-4">
                        <p style={{fontSize: "13px"}} class="mb-1 font-medium title-font">Mobile-responsive design for optimal viewing on all devices</p>
                    </div>
                    </div>
                </div>

                <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-12">
                    <div class="flex">
                        <div class="shrink-0 mt-1">
                            <svg class="w-4 h-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                            </path>
                            </svg>
                        </div>
                    <div class="grow ml-4">
                        <p style={{fontSize: "13px"}} class="mb-1 font-medium title-font">Option for ongoing website maintenance and updates</p>
                    </div>
                    </div>
                </div>

                </div>
            </div>
                <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://qckbot.com/wp-content/uploads/2022/05/E-Commerce-min-768x715.png"></img>
                </div>
            </div>
        </section>
        </div>
        <Footer />
    </div>
  );
}

export default ecommerce;
