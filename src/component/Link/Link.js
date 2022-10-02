import React from 'react';


const Link = ({route}) => {
    const {name, path} = route;
    return (
        <div>
                <li className='text-white font-medium mr-10'><a href={path}>{name}</a></li>
        </div>
    );
};

export default Link;