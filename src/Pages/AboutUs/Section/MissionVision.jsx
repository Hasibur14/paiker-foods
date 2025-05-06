import React from 'react';
import Container from '../../../components/Container/Container';

const MissionVision = () => {
    const contentData = [
        {
            _id: 1,
            title: "Our Mission",
            description: "Our mission is to contribute to the promotion of agricultural products in Vietnam with a commitment to produce sustainable values that meet international standards and thereby create a fair and competitive market.",
        },
        {
            _id: 2,
            title: "Our Vision",
            description: "Our vision is to be a prestigious standard system that aims towards sustainable and fair agricultural development where Vietnamese producers can produce and benefit from global markets through equitable.",
        },
    ];

    return (
        <div className="py-12 my-16 bg-[#F8C32C]">
            <Container>
                <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
                    {contentData.map((item) => (
                        <div
                            key={item._id}
                            className="bg-[#52320A] text-center rounded-xl p-7 shadow-md hover:shadow-lg transition duration-300 ">
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
