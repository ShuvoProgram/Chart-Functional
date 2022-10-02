import React from 'react';
import OptionPrice from '../OptionPrice/OptionPrice';


const Pricing = () => {
    const optionPrice = [
        {id: 1, name:"Free", price: 0, features: [
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature',
            'Hudai feature',
            'Ajaira Feature'
        ]},
        {id: 2, name:"Medium", price: 100, features: [
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature',
            'Hudai feature',
            'Ajaira Feature'
        ]},
        {id: 3, name:"Premium", price: 200, features: [
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature',
            'Hudai feature',
            'Ajaira Feature'
        ]}
    ]
    return (
        <div className='mt-10'>
            <div className='text-4xl bg-purple-400 p-10'>
                <span className='text-white font-semibold'>Big Deal in your Town</span>
            </div>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    optionPrice.map(option => <OptionPrice key={option.id} option={option}></OptionPrice>)
                }
            </div>
        </div>
    );
};

export default Pricing;