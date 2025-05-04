import React from 'react';
import bg from '../../../assets/home/getIn.jpg'

const GetTauch = () => {
    return (

        <section id='getInTauch'>
            <div className='text-center contact mb-24 p-4 bg-black bg-opacity-50'
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                <fieldset className='border container mx-auto py-20 lg:max-w-2xl'>
                    <legend className='text-second-light text-xl font-bold'>Get In Tauch</legend>
                    <h1 className="text-3xl text-white mb-8">Stay connected with us</h1>
                    <input type="email"
                        placeholder="Email address"
                        className="input w-full max-w-sm mb-5"
                        data-aos="fade-up"
                        data-aos-duration="1500" />
                    <br />
                    <input type="text"
                        placeholder="Subject"
                        className="input  w-full max-w-sm mb-5"
                        data-aos="fade-up"
                        data-aos-duration="2000" />
                    <br />
                    <textarea className="textarea  w-full max-w-sm h-[130px] mb-5"
                        placeholder="Your message"
                        data-aos="fade-up"
                        data-aos-duration="2500">
                    </textarea>
                    <br />
                    <button className=' py-2 w-full max-w-sm rounded-sm text-white bg-gradient-to-r from-second-light to-second-deep border-purple-600 '
                        data-aos="fade-up"
                        data-aos-duration="2500">
                        SUBMIT
                    </button>
                </fieldset>
            </div>
        </section>

    )
}

export default GetTauch;