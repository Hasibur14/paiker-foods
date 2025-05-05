import React from 'react'
import BannerTitle from '../../components/BannerTitle/BannerTitle';
import banner from '../../assets/hero/banner1.png'
import Container from '../../components/Container/Container';


const ContactUs = () => {
    return (
        <div className='space-y-5 '>
            <BannerTitle
                bannerImg={banner}
                subTitle='Contact Us'
                title="Contact" />

            <section class="bg-gray-100">
                <Container>
                    <div class="">
                        <div class="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
                            <div class="overflow-hidden  bg-white rounded-xl">
                                <div class="p-6">
                                    <svg
                                        class="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    <p class="mt-6 text-lg font-medium text-gray-900">
                                        +971 6 534 7154
                                    </p>
                                    <p class="text-lg font-medium text-gray-900">
                                        +971 56 694 8430
                                    </p>
                                </div>
                            </div>

                            <div class="overflow-hidden  bg-white rounded-xl">
                                <div class="p-6">
                                    <svg
                                        class="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <p class="mt-6 text-lg font-medium text-gray-900">
                                        sales@ssfgeneraltrading.com
                                    </p>
                                </div>
                            </div>

                            <div class="overflow-hidden  bg-white rounded-xl">
                                <div class="p-6">
                                    <svg
                                        class="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <p class="mt-6 pb-3 text-lg font-medium leading-relaxed text-gray-900">
                                        <strong>Head Office :</strong> No. 17
                                        Bangali Market, Ajman
                                        New Ind. Area 2
                                        <br />
                                        <strong> U.A.E
                                            Office :</strong> Masfout Sector
                                        Plot 1215, Floor G, Unit 13
                                        Ajman - U.A.E
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div class="mt-6 overflow-hidden bg-white rounded-xl">
                            <div class="px-6 py-12 sm:p-12">
                                <h3 class="text-3xl font-semibold text-center text-gray-900">
                                    Send us a message
                                </h3>

                                <form action="#" method="POST" class="mt-14">
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                        <div>
                                            <label for="" class="text-base font-medium text-gray-900">
                                                {" "}
                                                Your name{" "}
                                            </label>
                                            <div class="mt-2.5 relative">
                                                <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    placeholder="Enter your full name"
                                                    class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label for="" class="text-base font-medium text-gray-900">
                                                {" "}
                                                Email address{" "}
                                            </label>
                                            <div class="mt-2.5 relative">
                                                <input
                                                    type="email"
                                                    name=""
                                                    id=""
                                                    placeholder="Enter your email"
                                                    class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label for="" class="text-base font-medium text-gray-900">
                                                {" "}
                                                Phone number{" "}
                                            </label>
                                            <div class="mt-2.5 relative">
                                                <input
                                                    type="tel"
                                                    name=""
                                                    id=""
                                                    placeholder="Enter  phone number"
                                                    class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label for="" class="text-base font-medium text-gray-900">
                                                {" "}
                                                Company name{" "}
                                            </label>
                                            <div class="mt-2.5 relative">
                                                <input
                                                    type="text"
                                                    name=""
                                                    id=""
                                                    placeholder="Enter company name"
                                                    class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div class="sm:col-span-2">
                                            <label for="" class="text-base font-medium text-gray-900">
                                                {" "}
                                                Message{" "}
                                            </label>
                                            <div class="mt-2.5 relative">
                                                <textarea
                                                    name=""
                                                    id=""
                                                    placeholder="Message"
                                                    class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                                                    rows="4"
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div class="sm:col-span-2">
                                            <button
                                                class="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200  bg-gradient-to-l from-primary-base via-primary-light to-primary-deep border border-transparent  rounded-md focus:outline-none hover:bg-green-700 focus:bg-green-700"
                                            >
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            {/* map  */}
            <iframe
                className="w-full h-[70vh] py-5"
                src="https://www.google.com/maps?q=No.%2017%20Bangali%20Market,%20Ajman%20New%20Ind.%20Area%202%20-%20U.A.E&output=embed"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

        </div>
    )
}

export default ContactUs;