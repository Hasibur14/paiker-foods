import React from 'react';
import Container from '../../../components/Container/Container';
import bg from '../../../assets/About/missionVision.png'
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const MissionVision = () => {
    const axiosPublic = useAxiosPublic();

    const { data: missionVision = [], isPending } = useQuery({
        queryKey: ["missionVision"],
        queryFn: async () => {
            const res = await axiosPublic.get("/mission-vision");
            return res.data;
        },
    });
    console.log(missionVision)

    if (isPending) return <LoadingSpinner />

    return (
        <div
            className="py-12 my-16 h-full flex items-center" // Added min-height and flex
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            <Container>
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    {missionVision?.map((item) => (
                        <div
                            key={item._id}
                            className="bg-[#52320A] text-center rounded-xl p-7 shadow-md hover:shadow-lg transition duration-300">
                            <div className="border border-gray-400 border-dashed px-7 py-12 rounded-xl">
                                <h3 className="text-2xl leading-6 font-medium text-second-light">{item.title}</h3>
                                <div className="mt-8 text-white">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default MissionVision;