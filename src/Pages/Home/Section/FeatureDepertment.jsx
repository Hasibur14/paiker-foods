import Container from '../../../components/Container/Container';
import Button from '../../../components/Button/Button';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';

const FeatureDepartment = () => {
    const axiosPublic = useAxiosPublic();


    const { data: fetureData = [], isLoading } = useQuery({
        queryKey: ["futureDevelopment"],
        queryFn: async () => {
            const res = await axiosPublic.get("/futureDevelopment");
            return res.data[0];
        },
    });

    console.log(fetureData)

    if (isLoading) return <LoadingSpinner />

    return (
        <div className="py-8 md:py-12">
            <Container>
                <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-8 xl:gap-12">
                    {/* Left Image */}
                    <div className="mb-6 lg:mb-0 transform lg:rotate-[-10deg] hover:rotate-0 transition-all duration-300">
                        <img
                            src={fetureData.leftImage}
                            alt="Farmer 1"
                            className="rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-lg h-auto object-cover lg:h-[400px] xl:h-[500px]" />
                    </div>

                    {/* Center Text */}
                    <div className="text-center px-4 sm:px-6 max-w-2xl lg:max-w-3xl xl:max-w-4xl text-[#01312C]">
                        <p className="text-second-deep font-medium text-base sm:text-lg mb-2">{fetureData.tagline}</p>
                        <h2 className="font-poppins text-2xl sm:text-2xl md:text-3xl xl:text-4xl font-extrabold text-[#01312C] mb-4 whitespace-pre-line">
                            {fetureData.heading}
                        </h2>
                        <p className="font-shadows mb-4 text-sm sm:text-base">{fetureData.description1}</p>
                        <p className="mb-6 sm:mb-10 text-sm sm:text-base">{fetureData.description2}</p>

                        <Button
                            to='/products'
                            text='Explore Our Products'
                            className="text-sm sm:text-base"
                        />
                    </div>

                    {/* Right Image */}
                    <div className="mt-6 lg:mt-0 transform lg:rotate-[10deg] hover:rotate-0 transition-all duration-300">
                        <img
                            src={fetureData.rightImage}
                            alt="Farmer 2"
                            className="rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-lg h-auto object-cover lg:h-[400px] xl:h-[500px]" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default FeatureDepartment;