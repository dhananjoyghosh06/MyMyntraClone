
import React from 'react'

const Beauty = () => {
  return (
    <div className='absolute top-0 z-50 w-[900px] h-[500px] right-44 flex bg-gray-100 mt-[80px] rounded text-[0.90em] cursor-default'
    >
        <div className='flex ml-[40px] mt-[20px] mb-[20px] w-[20%] '>
            <div className='flex flex-col'>
                    <div className=' mt-[10px]'>
                        <p className='text-[#0db7af] font-bold cursor-pointer'>Makeup</p>
                        <ul className='mt-[10px] cursor-pointer'>
                            <li className='transform hover:scale-105  hover:font-bold'><a>Lipstick</a></li>
                            <li className='transform hover:scale-105  hover:font-bold'>Lip Gloss</li>
                            <li className='transform hover:scale-105  hover:font-bold'>Lip Liner</li>
                            <li className='transform hover:scale-105  hover:font-bold'>Mascara</li>
                            <li className='transform hover:scale-105  hover:font-bold'>Eyeliner</li>
                            <li className='transform hover:scale-105  hover:font-bold'> Eyeshadow</li>
                            <li className='transform hover:scale-105  hover:font-bold'>Foundation</li>
                            <li className='transform hover:scale-105  hover:font-bold' >Primer</li>
                            <li className='transform hover:scale-105  hover:font-bold'>Concealer</li>
                            <li className='transform hover:scale-105  hover:font-bold'><a>Compact</a></li>
                            <li className='transform hover:scale-105  hover:font-bold'><a>Nail Polish</a></li>
                        </ul>
                    </div> 
            </div>
        </div>
        {/* 2nd col */}
        <div className='flex mt-[20px] mb-[20px] mr-3[0px] basis-1/5 '>
            <div className='flex flex-col'>
                    <div className=' mt-[10px]'>
                        <p className='text-[#0db7af]  font-bold cursor-pointer'>Skincare, Bath & Body</p>
                        <ul className='mt-[10px] cursor-pointer'>
                            <li className='transform hover:scale-105  hover:font-bold'>Face Moisturiser</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Cleanser</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Masks & Peel</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Sunscreen</li>
                            <li className='transform hover:scale-105  hover:font-bold'>Serum</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Face Wash</li>
                            <li className='transform hover:scale-105  hover:font-boldhover:font-bold'>Eye Cream</li>
                            <li>Lip Balm</li>
                            <li className='transform hover:scale-105 hover:font-bold '>Body Lotion</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Body Wash</li>
                            <li className='transform hover:scale-105 hover:font-bold '>Body Scrub</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Hand Cream</li>
                        </ul>
                    </div> 
                    <hr className='mt-[10px]'></hr>
                    <div className=' mt-[20px]'>
                        <p className='text-[#0db7af]  font-bold cursor-pointer'>Baby Care</p>
                        <p className='text-[#0db7af]  font-bold mt-[10px] cursor-pointer'>Masks</p>
                    </div>
            </div>
        </div>
        {/* 3rd col */}
        <div className='flex ml-[20px] mt-[20px] mb-[20px]  basis-1/5'>
            <div className='flex flex-col'>
                    <div className=' mt-[10px]'>
                        <p className='text-0.5xl text-[#0db7af] font-bold cursor-pointer'>Haircare</p>
                        <ul className='mt-[10px] cursor-pointer'>
                            <li className='transform hover:scale-105 hover:font-bold '><a> Shampoo</a></li>
                            <li className='transform hover:scale-105  hover:font-bold '>Conditioner</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Hair Cream</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Hair Oil</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Hair Gel</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Hair Color</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Hair Serum</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Hair Accessory</li>
                        </ul>
                    </div> 
                    <hr className='mt-[10px]'></hr>
                    <div className=' mt-[10px]'>
                        <p className='text-[#0db7af] font-bold cursor-pointer'>Fragrances</p>
                        <ul className='mt-[10px] cursor-pointer'>
                            <li className='transform hover:scale-105 hover:font-bold '><a>Perfume</a></li>
                            <li className='transform hover:scale-105 hover:font-bold '>Deodorant</li>
                            <li className='transform hover:scale-105 hover:font-bold '>Body Mist</li>
                        </ul>
                    </div>
            </div>
        </div>
        {/* 4th col */}
        <div className='flex mt-[20px] mb-[20px] mr-[10px] basis-1/5 '>
            <div className='flex flex-col'>
                    <div className=' mt-[10px]'>
                        <p className='text-0.5xl text-[#0db7af] font-bold cursor-pointer'> Appliances</p>
                        <ul className='mt-[10px] cursor-pointer'>
                            <li className='transform hover:scale-105  hover:font-bold '>Hair Straightener</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Hair Dryer</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Epilator</li>
                        </ul>
                    </div> 
                    <hr className='mt-[10px]'></hr>
                    <div className=' mt-[20px]'>
                        <p className='text-[#0db7af] font-bold cursor-pointer'>Men's Grooming</p>
                        <ul className='mt-[10px] cursor-pointer'>
                            <li className='transform hover:scale-105  hover:font-bold '><a>Trimmers</a></li>
                            <li className='transform hover:scale-105  hover:font-bold '>Beard Oil</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Hair Wax</li>
                        </ul>
                    </div>
                    <hr className='mt-[10px]'></hr>
                    <div className=' mt-[20px]'>
                        <p className='text-[#0db7af] font-bold cursor-pointer'>Beauty Gift & Makeup Set</p>
                        <ul className='mt-[10px] cursor-pointer'>
                            <li className='transform hover:scale-105  hover:font-bold '><a>Beauty Gift</a></li>
                            <li className='transform hover:scale-105  hover:font-bold '>Makeup Kit</li>
                            <li className='transform hover:scale-105  hover:font-bold'>Hair Wax</li>
                        </ul>
                    </div>
                    <hr className='mt-[10px]'></hr>
                    <div className=' mt-[20px]'>
                        <p className='text-[#0db7af] font-bold cursor-pointer'>Premium Beauty</p>
                        <p className='text-[#0db7af] font-bold mt-[10px] cursor-pointer '>Wellness & Hygiene</p>
                    </div>
            </div>
        </div>
        {/* final col */}
        
        <div className='flex mb-[20px] mt-[20px] basis-1/5 '>
            <div className='flex flex-col'>
                    <div className=' mt-[10px]'>
                        <p className='text-0.5xl text-[#0db7af] font-bold cursor-pointer'>Top Brands</p>
                        <ul className='mt-[10px] cursor-pointer'>
                            <li className='transform hover:scale-105  hover:font-bold '>Lakme</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Maybelline</li>
                            <li className='transform hover:scale-105  hover:font-bold '>LOreal</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Philips</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Bath & Body Works</li>
                            <li className='transform hover:scale-105  hover:font-bold '>THE BODY SOAP</li>
                            <li className='transform hover:scale-105 hover:font-bold '>Biotique</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Mamaearth</li>
                            <li className='transform hover:scale-105  hover:font-bold '>MCaffeine</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Nivea</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Lotus Herbals</li>
                            <li className='transform hover:scale-105  hover:font-bold '>LOreal Professionnel</li>
                            <li className='transform hover:scale-105  hover:font-bold '>KAMA AYURVEDA</li>
                            <li className='transform hover:scale-105  hover:font-bold '>Forest Essentials</li>
                            <li className='transform hover:scale-105  hover:font-bold '>M.A.C</li>
                        </ul>
                    </div> 
            </div>
        </div>
    </div>
 
  )
}

export default Beauty;