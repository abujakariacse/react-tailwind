import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';

const Benefit = (props) => {
    return (
        <div className='flex items-center'>
                <CheckCircleIcon className='w-6 text-green-500 mr-2'></CheckCircleIcon>
            <span>{props.benefit}</span>
        </div>
    );
};

export default Benefit;