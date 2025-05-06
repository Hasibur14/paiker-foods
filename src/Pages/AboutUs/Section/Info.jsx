import React from 'react'
import Container from '../../../components/Container/Container';
import { AiFillProduct } from 'react-icons/ai';
import { FaHotTubPerson } from 'react-icons/fa6';

const Info = () => {
    return (
        <div className='pt-16'>
            <Container>
                <div className='md:flex gap-16 justify-between w-full'>
                    <h2 className='text-2xl w-1/2'>We are confident that we are the leading farm in
                        providing agricultural products that ensure food hygiene and safety!</h2>
                    <div className='flex justify-between md:w-1/2'>
                        <div className="flex items-start space-x-4">
                            <AiFillProduct className="mt-1 text-7xl bg-primary-light p-4 rounded-full text-white" />
                            <div>
                                <h4 className="font-semibold">Agricultural Products</h4>
                                <h2 className='text-6xl font-bold text-second-light'>1500 +</h2>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <FaHotTubPerson className="mt-1 text-7xl bg-primary-light p-4 rounded-full text-white" />
                            <div>
                                <h4 className="font-semibold">Trust By Clients</h4>
                                <h2 className='text-6xl font-bold text-second-light'>12,600 +</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-b-2 border-dashed  my-20'></div>
            </Container>
        </div>
    )
}

export default Info;