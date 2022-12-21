import React from 'react';

const ContactSection = () => {
  return (
    <div className="container mx-auto pt-16">
    <div className="lg:flex">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Contact Us</h1>
            <div style={{display: "block", marginLeft: "auto", marginRight: "auto",}} className="xl:w-2/5 lg:w-2/5 bg-black py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
                <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
                    <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">Get in touch</h1>
                    <p className="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">Got a question about us? Are you interested in partnering with us? Have some suggestions or just want to say "Hi"? Please contact us. We would love to hear from you.</p>
                    <div className="flex pb-4 items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                                <path d="M15 7a2 2 0 0 1 2 2" />
                                <path d="M15 3a6 6 0 0 1 6 6" />
                            </svg>
                        </div>
                        <a href="+27718796137"><p className="pl-4 text-white text-base">+27 71 879 6137</p></a>
                        <a href="+27634973763"><p className="pl-4 text-white text-base">+27 63 497 3763</p></a>
                    </div>
                <div className="flex items-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x={3} y={5} width={18} height={14} rx={2} />
                            <polyline points="3 7 12 13 21 7" />
                        </svg>
                    </div>
                    <a href="mailto:keabetsoezulu@gmail.com"><p className="pl-4 text-white text-base">info@antive.co.za</p></a>
                </div>
                <p className="text-lg text-white pt-10 tracking-wide">
                44 Alsatian Rd, Glen Austin AH, Midrand, 1685
                </p>
            </div>
        </div>
        </div>
    </div>
</div>
  );
};

export default ContactSection;
