import React from 'react';

import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const About = () => {
  const features = [
    {
      name: 'UI/UX Design',
      description:
        'With services ranging from UX research, design sprints, user testing and UI design for web and mobile, we help our clients to create the best digital experiences.',
      icon: GlobeAltIcon,
    },
    {
      name: 'Web Development',
      description:
        'Your website is a space beyond mere online availability. It is a platform to distinguish your brand as established, credible, and successful. At our company, we formulate impressive user experiences that challenge the current archetype and set you apart from the rest.',
      icon: ScaleIcon,
    },
    {
      name: 'Progressive Web Application Solutions',
      description:
        'Need an app to increase sales, improve efficiency, improve productivity, increase workforce flexibility or to be a market disruptor? Make your software accessible anywhere and everywhere with a Progressive Web Application (PWA). This smart solution simulates the behavior of native mobile apps but offers much faster development.',
      icon: LightningBoltIcon,
    },
    {
      name: 'Graphics Design',
      description:
        'We use words, images and video to tell stories that connect brands to audiences, delivering defined engagement outcomes.',
      icon: AnnotationIcon,
    },
  ]
  return (
    <div className="py-12 bg-white" style={{paddingLeft: "20px", paddingRight: "20px"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-700 font-semibold tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What We Do
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          We create perfect brands, build outstanding websites and vibrant identities and inspire creative concepts. We make your brand, concept, web site and identity into a digital legend recalled throughout the ages of digital. 
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <p className="font-normal text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer pb-2">About</p>
        <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
          <div className="w-full lg:w-6/12">
            <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">Who We Are</h2>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">Antive Development is an end-to-end custom software development company that designs, builds, deploys and maintains mobile and web applications. ;).</p>
          </div>
        <div className="w-full lg:w-6/12">
            <img className="lg:block hidden w-full" src="https://i.ibb.co/RjNH7QB/Rectangle-122-1.png" alt="people discussing on board" />
            <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png" alt="people discussing on board" />
            <img className="sm:hidden block w-full" src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png" alt="people discussing on board" />
        </div>
    </div>

    <div className="relative mt-24">
      <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
        <div className="z-20 w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5V21" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19 5V14" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 4.99984C5.93464 4.08371 7.19124 3.57056 8.5 3.57056C9.80876 3.57056 11.0654 4.08371 12 4.99984C12.9346 5.91598 14.1912 6.42913 15.5 6.42913C16.8088 6.42913 18.0654 5.91598 19 4.99984" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 14.0001C5.93464 13.084 7.19124 12.5708 8.5 12.5708C9.80876 12.5708 11.0654 13.084 12 14.0001C12.9346 14.9162 14.1912 15.4294 15.5 15.4294C16.8088 15.4294 18.0654 14.9162 19 14.0001" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>

          <svg className="z-20" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="24" fill="#1F2937" />
              <path d="M26 15V19C26 19.2652 26.1054 19.5196 26.2929 19.7071C26.4804 19.8946 26.7348 20 27 20H31" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M31 30V31C31 31.5304 30.7893 32.0391 30.4142 32.4142C30.0391 32.7893 29.5304 33 29 33H19C18.4696 33 17.9609 32.7893 17.5858 32.4142C17.2107 32.0391 17 31.5304 17 31V30" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M30 26H33M15 26H18H15ZM22.5 26H25.5H22.5Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17 22V17C17 16.4696 17.2107 15.9609 17.5858 15.5858C17.9609 15.2107 18.4696 15 19 15H26L31 20V22" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
    </div>
    <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
        <div>
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">Founded in 2020</p>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">Antive Development was founded in July 7th, 2020 with the main purpose to enter the market to design unique business software meeting client expectations.</p>
        </div>
        <div>
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">20+ Projects</p>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6"> Our professional team of website developers and web designers are committed to offering exceptional services for your websites which attract end-users and sales, but most importantly bring clients.</p>
        </div>
    </div>

    <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
        <div className="w-full lg:w-6/12">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Mission</h2>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6 w-full lg:w-10/12 xl:w-9/12">Create innovative solutions based on emerging technologies to help our clients become globally competitive.</p>
            <p className="font-normal text-base leading-6 text-gray-600 w-full lg:w-10/12 xl:w-9/12 mt-10">Upholding the principles of service delivery, we tender client-centric solutions that bring them maximum productivity in the least resources. We aspire to bring in result-oriented strategies to carve the strategies for product design and creation.

Our professions have contributed the best of their skills to work on the ultimate mission of succoring our identity as credible technology leaders.</p>
        </div>
        <div className="w-full lg:w-6/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                {/* <!-- Team Card --> */}
                <div className="flex p-4 shadow-md">
                    <div className="mr-6">
                        <svg className="mr-6" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 15C20.4853 15 22.5 12.9853 22.5 10.5C22.5 8.01472 20.4853 6 18 6C15.5147 6 13.5 8.01472 13.5 10.5C13.5 12.9853 15.5147 15 18 15Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M25.5 28.5C27.9853 28.5 30 26.4853 30 24C30 21.5147 27.9853 19.5 25.5 19.5C23.0147 19.5 21 21.5147 21 24C21 26.4853 23.0147 28.5 25.5 28.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.5 28.5C12.9853 28.5 15 26.4853 15 24C15 21.5147 12.9853 19.5 10.5 19.5C8.01472 19.5 6 21.5147 6 24C6 26.4853 8.01472 28.5 10.5 28.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="">
                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Clients</p>
                        <p className="mt-2 font-normal text-base leading-6 text-gray-600">It doesn't matter if you are a start-up company that wants reasonable website development services or a reputable company looking to improve your online presence, Antive Development offers the best web solutions however above all our work is highly professional.</p>
                    </div>
                </div>

                {/* <!-- Board Card --> */}
                <div className="flex p-4 shadow-md">
                    <div className="mr-6">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 10.5C12.1569 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 12.1569 4.5 10.5 4.5C8.84315 4.5 7.5 5.84315 7.5 7.5C7.5 9.15685 8.84315 10.5 10.5 10.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.5 33V25.5L6 24V18C6 17.6022 6.15804 17.2206 6.43934 16.9393C6.72064 16.658 7.10218 16.5 7.5 16.5H13.5C13.8978 16.5 14.2794 16.658 14.5607 16.9393C14.842 17.2206 15 17.6022 15 18V24L13.5 25.5V33" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M25.5 10.5C27.1569 10.5 28.5 9.15685 28.5 7.5C28.5 5.84315 27.1569 4.5 25.5 4.5C23.8431 4.5 22.5 5.84315 22.5 7.5C22.5 9.15685 23.8431 10.5 25.5 10.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22.5 33V27H19.5L22.5 18C22.5 17.6022 22.658 17.2206 22.9393 16.9393C23.2206 16.658 23.6022 16.5 24 16.5H27C27.3978 16.5 27.7794 16.658 28.0607 16.9393C28.342 17.2206 28.5 17.6022 28.5 18L31.5 27H28.5V33" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="">
                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Live Designs</p>
                        <p className="mt-2 font-normal text-base leading-6 text-gray-600">Our goal is to be a valued partner that becomes indispensible in achieving market dominance. </p>
                    </div>
                </div>

                {/* <!-- Press Card --> */}
                <div className="flex p-4 shadow-md">
                    <div className="mr-6">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.5 7.5H7.5C5.84315 7.5 4.5 8.84315 4.5 10.5V25.5C4.5 27.1569 5.84315 28.5 7.5 28.5H28.5C30.1569 28.5 31.5 27.1569 31.5 25.5V10.5C31.5 8.84315 30.1569 7.5 28.5 7.5Z" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.5 10.5L18 19.5L31.5 10.5" stroke="#1F2937" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="">
                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Projects Completed</p>
                        <p className="mt-2 font-normal text-base leading-6 text-gray-600">Whether you're looking to build an application from scratch; evolve and upgrade an existing product, or future proof your idea - we have a Proven Track Record, Expertise and Tech Talent to bring your vision into fruition fast and cost-effectively.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
};

export default About;
