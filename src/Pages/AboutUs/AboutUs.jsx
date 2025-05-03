import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
        <div className='max-w-7xl mx=[3%] md:mx-auto pt-14'>
            <div class="grid md:grid-cols-2 md:gap-x-5">
                <div className="max-w-xl md:mt-16">
                    <img
                        className="rounded-md"
                        src="https://i.postimg.cc/LXYmw6SG/Whats-App-Image-2025-02-18-at-4-55-00-PM.jpg"
                        alt="about image" />
                </div>
                <div>
                    <h2 className="font-bold leading-tight text-black text-2xl lg:text-4xl">
                        SSF General Trading L.L.C
                    </h2>

                    <p className="mt-4 text-base leading-relaxed text-gray-600 text-justify">SSF General Trading L.L.C. is a trusted supplier of high-quality raw materials and essential goods for the garment and printing industries. With a strong commitment to quality and efficiency, we provide businesses with the necessary materials to produce premium clothing tags, garment labels, and packaging solutions.</p>
                    <br />
                    <p className="hidden lg:block text-base leading-relaxed text-gray-600 text-justify">
                        Our extensive product range includes printing & packaging materials, high-grade paper products, advanced printing equipment, industrial chemicals, binding materials, and more. We take pride in being a one-stop solution for manufacturers looking to enhance their production capabilities with top-tier materials.
                    </p>
                    <br />
                    <p className="hidden lg:block text-base leading-relaxed text-gray-600 text-justify">
                        At SSF General Trading L.L.C., we prioritize customer satisfaction, competitive pricing, and timely delivery. Whether you're a small business or a large-scale manufacturer, our goal is to support your operations with the best industry supplies.
                    </p>
                   
                </div>
            </div>
        </div>
    )
}

export default AboutUs