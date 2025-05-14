import { Link } from "react-router-dom";

const Button = ({ text, to, className = '' }) => {
    return (
        <div>
            <Link
                to={to}
                class={`relative rounded px-6 py-3 overflow-hidden group bg-second-light  hover:bg-gradient-to-r hover:from-sebg-second-light hover:to-sering-second-deep text-gray-800 hover:ring-2 hover:ring-offset-2 hover:ring-second-deep transition-all ease-out duration-300 ${className}`}>
                <span class="absolute right-0 w-8 h-16 -mt-5 transition-all duration-1000 transform translate-x-12 bg-white opacity-0 group-hover:opacity-15 rotate-12 group-hover:-translate-x-52 ease"></span>
                <span class="relative uppercase  font-poppins"> {text}</span>
            </Link>
        </div>
    );
};

export default Button;

