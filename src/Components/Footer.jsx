import img52 from '../images/hero52.png';
import img53 from '../images/hero53.png';
import img54 from '../images/hero54.png';
import img55 from '../images/hero55.png';
import { CiInstagram , CiFacebook, CiTwitter,CiYoutube } from "react-icons/ci";
CiFacebook
const Footer = () => {
  return (
    <div className='bg-[#FAFBFC]  mt-[20px] pt-[20px]'>
      <div className='flex'>
        <div className='basis-1/6 pl-[60px]'>
          <div>
            <div>
              <p className='mb-[20px] font-bold italic'>ONLINE SHOPPING</p>
              <ul className='text-0.1xl font-thin font-mono italic'>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Home & Living</li>
                <li>Beauty</li>
                <li>Gift Cards</li>
                <li>Myntra Insider</li>
              </ul>
            </div>
            <div className='mt-[20px]'>
              <p className='mb-[20px] font-bold italic'>USEFUL LINKS</p>
              <ul className='text-0.1xl font-thin font-mono italic'>
                <li>Blog</li>
                <li>Site Maps</li>
                <li>Careers</li>
                <li>Corporate Information </li>
                <li>Whitehat</li>
                <li>Clear Trip</li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='basis-1/6'>
          <div>
            <div>
            <p className='mb-[20px] font-bold italic'>CUSTOMER POLICIES</p>
              <ul className='text-0.1xl font-thin font-mono italic'>
                <li>Contact Us </li>
                <li>FAQ</li>
                <li>T&C</li>
                <li>Terms of Use</li>
                <li>Track Orders</li>
                <li>Shipping</li>
                <li>Cancellation</li>
                <li>Returns</li>
                <li>Privacy Policy</li>
                <li>Grievance Officer</li>
              </ul>
            </div>
          </div>
          
        </div>
        <div className='basis-1/4'>
          <div>
            <div>
            <p className='mb-[20px] font-bold italic'>CUSTOMER POLICIES</p>
            </div>
            <div className='flex'>
            <div>
              <img src={img52} alt=''/>
            </div>
            <div>
              <img src={img53} alt=''/>
            </div>
            </div>
          </div>
          <div>
            <p className='mt-[20px] font-bold italic'>KEEP IN TOUCH</p>
              <div className='flex mt-[20px] gap-2'>
               <CiInstagram size={30}/>
               <CiTwitter size={30}/>
               <CiFacebook size={30}/>
               <CiYoutube size={30}/>
              </div>
            </div>
        </div>
        <div className='basis-1/4 ml-[70px]'>
          <div>
            <div className='flex gap-5'>
            <img className='h-[40px] w-[48px]'src={img54} alt=''/> 
            <p className='italic'><a className='font-bold'>100% ORIGINAL</a> guarantee<br/>all products at myntra.com</p>
            </div>
            <div className='flex gap-5 mt-[20px]'>
            <img className='h-[40px] w-[48px]'src={img55} alt=''/> 
            <p className='italic'><a className='font-bold'>Return within 14days</a> of <br/>receving your order</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer