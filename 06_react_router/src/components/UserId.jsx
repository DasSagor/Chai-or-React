
import React from 'react';
import { useParams } from 'react-router-dom';

const UserId = () => {
const {userId }= useParams()
    return (
        <div className='bg-amber-400 py-10 mx-20'>
           <h4 className=' text-center font-semibold text-3xl'>Id : {userId.toUpperCase()}</h4> 
        </div>
    );
};

export default UserId;