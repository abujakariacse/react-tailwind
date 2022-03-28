import React from 'react';
import Pack from '../Pack/Pack';

const Pricing = () => {
    const packages = [
        {id:1, name: "Free", fee: 0,benefits:['Access on all content', 'Phone Support','Unlimited deals','Fantastic deals','Crazy Deals']},
        {id:2, name: "Regular", fee: 9.99,benefits:['Everything on free', 'Phone Support','Unlimited deals','Fantastic deals','Crazy Deals']},
        {id:3, name: "Premium", fee: 19.99,benefits:['Everything on Reggular', 'Phone Support','Unlimited deals','Fantastic deals','Crazy Deals']}
    ];
    return (
        <div className='bg-indigo-300 pb-6'>
            <h1 className='text-5xl font-mono mt-8 p-4'>Best Package for you.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda incidunt eligendi rem sed quis commodi! Velit nobis illo nihil labore?</p>
           
            <div className='lg:grid grid-cols-3 gap-5'>
                {
                    packages.map(offer => <Pack
                        key={offer.id}
                        pack={offer}
                    ></Pack>)
                }
            </div>
        </div>
    );
};

export default Pricing;