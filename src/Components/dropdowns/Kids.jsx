
import React from 'react'

const Kids = () => {
  return (
    <div className='absolute top-0 z-50 w-[1160px] h-[480px] left-32 flex bg-gray-100 mt-[80px] rounded text-[0.90em] cursor-default'
    >
        <div className='flex ml-[30px] mt-[20px] mb-[20px] w-[20%] '>
            <div className='flex flex-col'>
                    <div className=' mt-[10px]'>
                        <p className='text-[#f26a10] font-bold cursor-pointer'> Boys Clothing</p>
                        <ul className='mt-[10px] cursor-pointer'>
                            <li className='transform hover:scale-105  hover:font-bold '><a>T-Shirts</a></li>
                            <li className='transform hover:scale-105  hover:font-bold '>Shirts</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Shorts</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Jeans</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Trousers</li>
                            <li className='transform hover:scale-105  hover:font-bold '> Clothing Sets</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Ethnic Wear</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Jacket, Sweater & Sweatshirts</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Track Pants & Pyjamas</li>
                            <li className='transform hover:scale-105  hover:font-bold '><a>Jacket, Sweater & Sweatshirts</a></li>
                            <li className='transform hover:scale-105  hover:font-bold '><a>Party Wear</a></li>
                            <li className='transform hover:scale-105  hover:font-bold '><a>Innerwear & Thermals</a></li>
                            <li className='transform hover:scale-105  hover:font-bold '><a> Nightwear & Loungewear</a></li>
                            <li className='transform hover:scale-105  hover:font-bold '><a>Value Packs</a></li>
                        </ul>
                    </div> 
            </div>
        </div>
        {/* 2nd col */}
        <div className='flex mt-[20px] mb-[20px] basis-1/5 '>
            <div className='flex flex-col'>
                    <div className=' mt-[10px]'>
                        <p className='text-[#f26a10]  font-bold cursor-pointer'> Girls Clothing</p>
                        <ul className='mt-[10px] cursor-pointer'>
                            <li className='transform hover:scale-105  hover:font-bold '>Dresses</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Tops</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Tshirts</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Clothing Sets</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Lehenga choli</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Kurta Sets</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Party wear</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Dungarees & Jumpsuits</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Skirts & shorts</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Tights & Leggings</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Jeans, Trousers & Capris</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Jacket, Sweater & Sweatshirts</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Innerwear & Thermals</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Nightwear & Loungewear</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Value Packs</li>
                        </ul>
                    </div> 
                    <hr className='mt-[10px]'></hr>
                    <div className=' mt-[20px]'>
                        <p className='text-[#f26a10]  font-bold cursor-pointer'>Plus Size</p>
                    </div>
            </div>
        </div>
        {/* 3rd col */}
        <div className='flex ml-[20px] mt-[20px] mb-[20px]  basis-1/5'>
            <div className='flex flex-col'>
                    <div className=' mt-[10px]'>
                        <p className='text-0.5xl text-[#f26a10]  font-bold cursor-pointer'> Footwear</p>
                    <p className='text-[#f26a10]  font-bold mt-[10px] cursor-pointer'>Sunglasses & Frames</p>
                    </div> 

                    <div className=' mt-[10px]'>
                        <p className='text-[#f26a10] font-bold cursor-pointer'>Footwear</p>
                        <ul className='mt-[10px] cursor-pointer'>
                            <li className='transform hover:scale-105  hover:font-bold '><a>Casual Shoes</a></li>
                            <li className='transform hover:scale-105  hover:font-bold '>Flipflops</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Sports Shoes</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Flats</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Sandals</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Heels</li>
                            <li className='transform hover:scale-105  hover:font-bold '>School Shoes</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Socks</li>
                        </ul>
                    </div>
                    <hr className='mt-[10px]'></hr>
                    <div className=' mt-[20px]'>
                        <p className='text-[#f26a10]  font-bold cursor-pointer'>Toys & Games</p>
                        <ul className='cursor-pointer'>
                            <li className='transform hover:scale-105  hover:font-bold '><a>Learning & Development</a></li>
                            <li className='transform hover:scale-105  hover:font-bold '><a>Activity Toys</a></li>
                            <li className='transform hover:scale-105  hover:font-bold '><a>Soft Toys</a></li>
                            <li className='transform hover:scale-105  hover:font-bold '><a>Action Figure / Play set</a></li>
                        </ul>
                    </div>
            </div>
        </div>
        {/* 4th col */}
        <div className='flex mt-[20px] mb-[20px] mr-[10px] basis-1/5 '>
            <div className='flex flex-col'>
                    <div className=' mt-[10px]'>
                        <p className='text-0.5xl text-[#f26a10]  font-bold cursor-pointer'>Infants</p>
                        <ul className='mt-[10px] cursor-pointer'>
                            <li className='transform hover:scale-105  hover:font-bold '>Bodysuits</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Rompers & Sleepsuits</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Tshirts & Tops</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Dresses</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Bottom wear</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Winter Wear</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Innerwear & Sleepwear</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Infant Care</li>
                        </ul>
                    </div> 
                    <hr className='mt-[10px]'></hr>
                    <div className=' mt-[20px]'>
                        <p className='text-[#f26a10] font-bold cursor-pointer'>Home & Bath</p>
                        <p className='text-[#f26a10] font-bold mt-[10px] cursor-pointer'>Personal Care</p>
                    </div>
            </div>
        </div>
        {/* final col */}
        <div className='flex mb-[20px] mr-10 mt-[20px] basis-1/5 '>
            <div className='flex flex-col'>
                    <div className=' mt-[10px]'>
                        <p className='text-0.5xl text-[#f26a10] font-bold cursor-pointer'>Kids Accessories</p>
                        <ul className='mt-[10px] cursor-pointer'>
                            <li className='transform hover:scale-105  hover:font-bold '>Sunglasses</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Bags & Backpacks</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Watches</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Jewellery & Hair accessory</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Masks & Protective Gears</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Caps & Hats</li>
                        </ul>
                    </div> 
                    <hr className='mt-[10px]'></hr>
                    <div className=' mt-[20px]'>
                        <p className='text-[#f26a10] font-bold cursor-pointer'>Brands</p>
                        <ul className='mt-[10px]  cursor-pointer'>
                            <li className='transform hover:scale-105  hover:font-bold '> H&M</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Max Kids</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Pantaloons</li>
                            <li className='transform hover:scale-105  hover:font-bold '>United Colors Of Benetton Kids</li>
                            <li className='transform hover:scale-105  hover:font-bold '>YK</li>
                            <li className='transform hover:scale-105  hover:font-bold '>U.S. Polo Assn. Kids</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Mothercare</li>
                            <li className='transform hover:scale-105  hover:font-bold '>HRX</li>
                        </ul>
                    </div>
            </div>
        </div>
    </div>
 
  )
}

export default Kids