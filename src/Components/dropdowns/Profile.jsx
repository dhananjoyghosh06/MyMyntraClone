import React from 'react'

const Profile = () => {
  return (
    <div className='absolute top-0 z-50 w-[300px] h-[450px] flex bg-gray-100 mt-[80px] right-[24px] rounded text-[0.90em] cursor-default'
    >
        <div className='flex flex-col'>
            <div className='h-[30%] m-[15px] flex flex-col justify-between'>
                <div className='flex flex-col'>
                <h3 className='font-bold'>Welcome</h3>
                <p>To access acount and manage orders</p>
                </div>
                <div className='border border-gray cursor-pointer text-[15px] hover:border-[#fb56c1] w-[130px]'><h1 className='text-[#fb56c1] font-bold ml-[10px]'>Login/Sign-Up</h1></div>
            </div>
            <div className='h-[5%] mx-[15px]'><hr></hr></div>
            <div className='basis-[30%] m-[15px]'>
                <div className='flex flex-col cursor-pointer gap-1'>
                    <div><h1 className='text-[14px] hover:font-bold'>Orders</h1></div>
                    <div><h1 className='text-[14px] hover:font-bold'>Wishlist</h1></div>
                    <div><h1 className='text-[14px] hover:font-bold'>Gift Cards</h1></div>
                    <div><h1 className='text-[14px] hover:font-bold'>Contact Us</h1></div>
                    <div><h1 className='text-[14px] hover:font-bold'>Myntra Insider</h1></div>
                </div>
            </div>
            <div className='h-[5%] mx-[15px]'><hr></hr></div>
            <div className='basis-[30%] m-[15px]'>
                <div className='flex flex-col cursor-pointer gap-1'>
                    <div><h2 className='text-[14px] hover:font-bold'>Myntra Credit</h2></div>
                    <div><h2 className='text-[14px] hover:font-bold'>Coupons</h2></div>
                    <div><h2 className='text-[14px] hover:font-bold'>Saved Cards</h2></div>
                    <div><h2 className='text-[14px] hover:font-bold'>Saved VPA</h2></div>
                    <div><h2 className='text-[14px] hover:font-bold'>Saved Addresses</h2></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile