import icon from '../../assets/contact/getTauch-1.png';
import icon2 from '../../assets/contact/getTauch-2.png';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { FiRefreshCw } from 'react-icons/fi';
import toast from 'react-hot-toast';


const ContactForm = () => {
    const axiosPublic = useAxiosPublic();
    const [isChecked, setIsChecked] = useState(false);
    const [userCaptcha, setUserCaptcha] = useState("");
    const [captcha, setCaptcha] = useState(generateCaptcha());
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    function generateCaptcha() {
        const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let captcha = "";
        for (let i = 0; i < 6; i++) {
            captcha += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return captcha;
    }

    const refreshCaptcha = () => {
        setCaptcha(generateCaptcha());
        setUserCaptcha("");
    };

    const onSubmit = async (data) => {
        if (!isChecked) {
            toast.error('Please agree to the terms and conditions');
            return;
        }

        if (userCaptcha !== captcha) {
            toast.error('Captcha verification failed. Please try again.');
            refreshCaptcha();
            return;
        }

        setIsSubmitting(true);
        try {
            const now = new Date();
            const utcPlus6 = new Date(now.getTime() + 6 * 60 * 60 * 1000);

            const contactItem = {
                name: data.name,
                email: data.email,
                phoneNo: data.phoneNumber,
                message: data.message,
                support: data.support,
                timestamp: utcPlus6.toISOString().replace('Z', ''),
            };

            const response = await axiosPublic.post('/clientMessage', contactItem);

            if (response.data.insertedId) {
                reset();
                setUserCaptcha("");
                setIsChecked(false);
                refreshCaptcha();
                Swal.fire({
                    title: 'Success!',
                    text: 'Your message has been sent.',
                    icon: 'success',
                    confirmButtonColor: '#1a5632'
                });
            } else {
                toast.error('Failed to send message');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('An error occurred while submitting the form.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <div>
                <div className='flex justify-between'>
                    <h2 className="text-green-700 font-medium mb-1">Let's Cooperate Together</h2>
                    <img src={icon2} alt="icon2" className='opacity-30' />
                </div>
                <p className="mb-6 text-sm">We will reply you within 24 hours via email, thank you for contacting</p>
                <img src={icon} alt="icon" />
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Name*"
                                className="input input-bordered w-full rounded-full px-5 py-3 bg-gray-100 focus:ring-2 focus:ring-green-700"
                                {...register("name", { required: "Name is required" })}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1 ml-2">{errors.name.message}</p>}
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email*"
                                className="input input-bordered w-full rounded-full px-5 py-3 bg-gray-100 focus:ring-2 focus:ring-green-700"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1 ml-2">{errors.email.message}</p>}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Phone Number*"
                                className="input input-bordered w-full rounded-full px-5 py-3 bg-gray-100 focus:ring-2 focus:ring-green-700"
                                {...register("phoneNumber", {
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^[0-9]{10,15}$/,
                                        message: "Invalid phone number"
                                    }
                                })}
                            />
                            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1 ml-2">{errors.phoneNumber.message}</p>}
                        </div>
                        <div>
                            <select
                                className="input input-bordered w-full rounded-full px-5 py-3 bg-gray-100 focus:ring-2 focus:ring-green-700"
                                {...register("support", { required: "Please select a support option" })}
                            >
                                <option value="">You need support?</option>
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Partnership">Partnership</option>
                                <option value="Technical Help">Technical Help</option>
                            </select>
                            {errors.support && <p className="text-red-500 text-sm mt-1 ml-2">{errors.support.message}</p>}
                        </div>
                    </div>
                    <div>
                        <textarea
                            placeholder="Message..."
                            rows="5"
                            className="w-full p-5 rounded-xl bg-gray-100 resize-none focus:ring-2 focus:ring-green-700"
                            {...register("message", {
                                required: "Message is required",
                                minLength: {
                                    value: 10,
                                    message: "Message must be at least 10 characters"
                                }
                            })}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1 ml-2">{errors.message.message}</p>}
                    </div>

                    {/* Enhanced CAPTCHA Section */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">CAPTCHA Verification*</label>
                        <div className="flex items-center gap-3">
                            <div className="relative flex-1">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <span className="text-gray-500">🔒</span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Enter CAPTCHA"
                                    className="input input-bordered w-full rounded-full pl-10 pr-4 py-3 bg-gray-100 focus:ring-2 focus:ring-green-700"
                                    value={userCaptcha}
                                    onChange={(e) => setUserCaptcha(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full border border-gray-200">
                                <span className="font-mono text-lg tracking-widest text-gray-800 select-none">
                                    {captcha}
                                </span>
                                <button
                                    type="button"
                                    onClick={refreshCaptcha}
                                    className="text-gray-500 hover:text-green-700 transition-colors"
                                    aria-label="Refresh CAPTCHA"
                                >
                                    <FiRefreshCw className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 ml-2">Type the characters you see above</p>
                    </div>

                    <div className="md:flex justify-between space-y-6 md:space-y-0">
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="terms"
                                className="accent-green-700 h-5 w-5 rounded focus:ring-green-700"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                            />
                            <label htmlFor="terms" className="text-sm text-gray-700">
                                I agree to the <a href="#" className="text-green-700 hover:underline">terms and conditions</a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="bg-green-700 hover:bg-green-800 text-white flex items-center space-x-4 px-6 py-3 rounded-full transition-colors disabled:opacity-70"
                            disabled={isSubmitting}
                        >
                            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                            <span className="bg-[#F8C32C] text-black rounded-full p-2 w-10 h-10 font-bold flex items-center justify-center">
                                {isSubmitting ? (
                                    <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : (
                                    '→'
                                )}
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;