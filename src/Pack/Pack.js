
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
            </div>
        </div>
    );
};

export default Pack;