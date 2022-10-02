import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import axios from 'axios';

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneLoad = data.data.data;
                const phoneData = phoneLoad.map(phone => {
                    const parts = phone.slug.split('-');
                    const price = parseInt(parts[1]);
                    const singlePhone = {
                        name: phone.phone_name,
                        price: price
                    }
                    return singlePhone;
                })
                console.log(phoneData);
                setPhones(phoneData)
            })
    }, [])

    return (
        <div className='mt-8'>
            <h1 className='text-4xl text-green-500'>Phone Price Strategy</h1>
            <div className='flex justify-center mt-5'>
                <BarChart width={1000} height={400} data={phones}>
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </BarChart>
            </div>
        </div>
    );
};

export default PhoneBar;