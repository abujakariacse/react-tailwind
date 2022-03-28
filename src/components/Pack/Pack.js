
import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const Pack = (props) => {
    const { pack } = props;
    const { benefits } = pack;
    return (
        <div className='mt-4 gap-4 p-3 bg-white rounded'>
            <h1 className='text-4xl font-mono font-bold bg-green-300 rounded m-4'>{pack.name}</h1>
            <span className='text-6xl font-bold'>{pack.fee}</span>
            <span className='text-xl font-bold text-gray-500'>/mo</span>
            <h1 className='text-left text-xl'>Benefits</h1>
            <div>
                {
                    benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
                }
                <button className='flex bg-green-400 p-2 w-full rounded mt-4 text-xl font-bold text-white hover:text-green-300 justify-center'>Buy Now
                <ArrowRightIcon className='w-7 ml-2'></ArrowRightIcon>
                </button>
            </div>
        </div>
    );
};

export default Pack;