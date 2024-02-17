import React, { useEffect, useState } from 'react';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import Sidebar from '../Component/Sidebar';

const Maindash = ({getDataUser, getDataProducts, user, products}) => {

    useEffect(() => {
            getDataUser();
            getDataProducts();    
    }, [])

return (
    <div className='flex gap-12'>
        <div className=' bg-[#121c31] h-[87vh] w-1/6 flex flex-col items-center justify-evenly'>
        <Sidebar />
        </div>
        <div className='flex justify-center items-center gap-10 w-3/4 text-white font-bold text-xl'>
            {user && user !== "string" ? (<div className='bg-[#121c31] w-1/2 flex flex-col items-center gap-8 p-6 rounded'>
                <h1 className='text-blue-600 text-3xl'>Users</h1>
                <h1>Number Of Users : <span className='text-green-400'>{user.length}</span></h1>
                <h1>Last Users Registed Is : <span className='text-green-400'>{user.pop().username}</span></h1>
                <Link to= "/users">
                <Button className='bg-blue-500'>Show Users</Button>
                </Link>
            </div>
) : (<h1>{user}</h1>)}
            {products && products !== "string" ? (
                            <div className='bg-[#121c31] w-1/2 flex flex-col items-center gap-8 p-6 rounded-md'>
                            <h1 className='text-blue-600 text-3xl'>Products</h1>
                            <h1>Number Of Products : <span className='text-green-400'>{products.length}</span></h1>
                            <h1>Last Products Added Is : <span className='text-green-400'>{products.pop().name}</span></h1>
                            <Link to = "/makers">
                            <Button className='bg-blue-500'>Show Products</Button>
                            </Link>    
                            </div>
                
            ) : (<h1>{products}</h1>)}
        </div>
    </div>
)
}

export default Maindash;
