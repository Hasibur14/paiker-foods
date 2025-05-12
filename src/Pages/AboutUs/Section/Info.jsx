import React from 'react';
import Container from '../../../components/Container/Container';
import { AiFillProduct } from 'react-icons/ai';
import { FaHotTubPerson } from 'react-icons/fa6';
import CountUp from 'react-countup';

const iconMap = {
    AiFillProduct: <AiFillProduct className="mt-1 text-7xl bg-primary-light p-4 rounded-full text-white" />,
    FaHotTubPerson: <FaHotTubPerson className="mt-1 text-7xl bg-primary-light p-4 rounded-full text-white" />
};

const infoData = [
    {
        _id: '1',
        icon: 'AiFillProduct',
        title: 'Agricultural Products',
        count: 1500
    },
    {
        _id: '2',
        icon: 'FaHotTubPerson',
        title: 'Trust By Clients',
        count: 12600
    }
];

const Info = () => {
    return (
        <div>
            <Container>
                <div className='md:flex gap-16 justify-between w-full space-y-7 lg:space-y-0'>
                    <h2 className='text-xl md:text-2xl w-full lg:w-1/2'>
                        We are confident that we are the leading farm in providing agricultural products that ensure food hygiene and safety!
                    </h2>
                    <div className='flex justify-between md:w-1/2 gap-4'>
                        {infoData.map(({ _id, icon, title, count }) => (
                            <div key={_id} className="flex items-start space-x-4">
                                {iconMap[icon]}
                                <div>
                                    <h4 className="font-semibold">{title}</h4>
                                    <h2 className='text-2xl lg:text-6xl font-bold text-second-light'>
                                        <CountUp start={0} end={count} duration={3} delay={0.5} /> +
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='border-b-2 border-dashed my-20'></div>
            </Container>
        </div>
    );
};

export default Info;
