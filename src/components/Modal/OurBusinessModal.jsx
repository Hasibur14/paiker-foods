import React from "react";
import { useForm } from "react-hook-form";

const OurBusinessModal = ({ product, onClose, onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: {
            fullName: "",
            mobileNumber: "",
            email: "",
            quantity: 1,
            productName: product.productName, // Changed from product.name
            message: ""
        }
    });

    const onFormSubmit = (data) => {
        onSubmit(data);
        reset();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[9999]">
            <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] flex flex-col">
                <div className="flex justify-between items-center p-6 pb-2 border-b">
                    <h2 className="text-xl font-bold font-poppins">Order Product: {product.productName}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-rose-600 text-2xl"
                    >
                        &times;
                    </button>
                </div>

                <form onSubmit={handleSubmit(onFormSubmit)} className="overflow-y-auto p-6">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1 font-outfit">
                            Full Name
                        </label>
                        <input
                            type="text"
                            {...register("fullName", {
                                required: "Full name is required",
                                minLength: {
                                    value: 3,
                                    message: "Name must be at least 3 characters"
                                }
                            })}
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light ${
                                errors.fullName ? "border-red-500" : "border-gray-300"
                            }`}
                        />
                        {errors.fullName && (
                            <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1 font-outfit">
                            Mobile Number
                        </label>
                        <input
                            type="tel"
                            {...register("mobileNumber", {
                                required: "Mobile number is required",
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Please enter a valid 10-digit mobile number"
                                }
                            })}
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light ${
                                errors.mobileNumber ? "border-red-500" : "border-gray-300"
                            }`}
                        />
                        {errors.mobileNumber && (
                            <p className="mt-1 text-sm text-red-600">{errors.mobileNumber.message}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1 font-outfit">
                            Email
                        </label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Please enter a valid email address"
                                }
                            })}
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light ${
                                errors.email ? "border-red-500" : "border-gray-300"
                            }`}
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1 font-outfit">
                            Product
                        </label>
                        <input
                            type="text"
                            {...register("productName")}
                            readOnly
                            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1 font-outfit">
                            Quantity
                        </label>
                        <input
                            type="number"
                            {...register("quantity", {
                                required: "Quantity is required",
                                min: {
                                    value: 1,
                                    message: "Quantity must be at least 1"
                                },
                                max: {
                                    value: 100,
                                    message: "Maximum quantity is 100"
                                }
                            })}
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light ${
                                errors.quantity ? "border-red-500" : "border-gray-300"
                            }`}
                        />
                        {errors.quantity && (
                            <p className="mt-1 text-sm text-red-600">{errors.quantity.message}</p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1 font-outfit">
                            Message
                        </label>
                        <textarea
                            {...register("message", {
                                maxLength: {
                                    value: 500,
                                    message: "Message cannot exceed 500 characters"
                                }
                            })}
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light ${
                                errors.message ? "border-red-500" : "border-gray-300"
                            }`}
                            rows={3}
                        />
                        {errors.message && (
                            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                        )}
                    </div>

                    <div className="flex justify-end gap-3 pt-4 pb-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 font-outfit"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-primary-light text-white rounded-md hover:bg-primary-deep font-outfit"
                        >
                            Submit Order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OurBusinessModal;