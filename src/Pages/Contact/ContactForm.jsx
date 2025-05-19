import icon from '../../assets/contact/getTauch-1.png'
import icon2 from '../../assets/contact//getTauch-2.png'

const ContactForm = () => {
    return (
        <div>
            <div>
                <div className='flex justify-between'>
                    <h2 className="text-green-700 font-medium mb-1">Let's Cooperate Together</h2>
                    <img src={icon2} alt="icon2" className='opacity-30' />
                </div>
                <p className="mb-6 text-sm">We will reply you within 24 hours via email, thank you for contacting</p>
                <img src={icon} alt="icon" />
                <form className="space-y-4 mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Name*" className="input input-bordered w-full rounded-full px-5 py-3 bg-gray-100" required />
                        <input type="email" placeholder="Email*" className="input input-bordered w-full rounded-full px-5 py-3 bg-gray-100" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Phone Number*" className="input input-bordered w-full rounded-full px-5 py-3 bg-gray-100" required />
                        <select className="input input-bordered w-full rounded-full px-5 py-3 bg-gray-100">
                            <option>You need support?</option>
                            <option>General Inquiry</option>
                            <option>Partnership</option>
                            <option>Technical Help</option>
                        </select>
                    </div>
                    <textarea placeholder="Message..." rows="5" className="w-full p-5 rounded-xl bg-gray-100 resize-none"></textarea>
                    <div className="md:flex justify-between space-y-6 md:space-y-0">
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="terms" className="accent-yellow-500" required />
                            <label htmlFor="terms" className="text-sm">Agree to our terms and conditions</label>
                        </div>

                        <button type="submit" className="bg-green-900 hover:bg-green-800 text-white flex items-center space-x-4 px-6 py-3 rounded-full">
                            <span>Send Message</span>
                            <span className="bg-[#F8C32C]  text-black rounded-full p-2 w-10 h-10 font-bold">&rarr;</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm