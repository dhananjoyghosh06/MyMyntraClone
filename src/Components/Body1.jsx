//1st line 
import img8 from '../images/hero8.webp';
import img11 from '../images/hero11.webp';
import img12 from '../images/hero12.webp';
import img13 from '../images/hero13.webp';
import img14 from '../images/hero14.webp';
import img15 from '../images/hero15.webp';
import img16 from '../images/hero16.webp';
import img17 from '../images/hero17.webp';


const Body1 = () => {
  return (
  <div className='mt-[30px]'>
    <div>
      <img src={img8} alt=''/>
    </div>
    <div className='flex'>
      <div className='w-[25%] cursor-pointer'>
      <img src={img11} alt=''/>
      </div>
      <div className='w-[25%] cursor-pointer'>
      <img src={img12} alt=''/>
      </div>
      <div className='w-[25%] cursor-pointer'>
      <img src={img13} alt=''/>
      </div>
      <div className='w-[25%] cursor-pointer'>
      <img src={img14} alt=''/>
      </div>
      <div className='w-[25%] cursor-pointer'>
      <img src={img15} alt=''/>
      </div>
      <div className='w-[25%] cursor-pointer'>
      <img src={img16} alt=''/>
      </div>
    </div>
    <div>
    <img src={img17} alt=''/>
    </div>
  </div>
  )
}

export default Body1;