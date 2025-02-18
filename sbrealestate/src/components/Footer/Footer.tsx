import Image from 'next/image'
import React from 'react'
import { Icons, Images } from '../../../public/exporter'

const Footer = () => {
  return (
    <footer className='bg-footer_bg w-full h-[480px] px-20 pt-32 bg-no-repeat bg-cover'>
      <div className='w-full flex gap-x-[90px] pb-9 justify-between'>
        <div className='w-[428px] flex flex-col gap-y-[16px]'>
          <Image src={Images.Logo} alt='' className='w-[360px] h-[90px]'/>
          <p className='text-background w-full text-base-16px '>We are your trusted real estate experts, helping you buy, sell, and invest with confidence. Explore the best properties, discover vibrant communities, and make informed real estate decisions with us. Let’s turn your dreams into reality!</p>    
        </div>
        <div className='flex flex-col gap-y-[24px]'>
          <h2 className='text-background w-full text-text_20 font-bold'>Quick Links</h2>
          <ul className='text-background text-base flex flex-col gap-y-[12px] '>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className='flex flex-col gap-y-[24px]'>
          <h2 className='text-background w-full text-text_20 font-bold'>Contact Us</h2>
          <div className='text-background text-base flex flex-col gap-y-[12px]'>
            <div className='flex flex-row gap-x-[8px]'>
              <Image src={Icons.Call} alt='' className='w-[22px] h-[22px]'/>
              <p className='text-background w-full text-base-16px font-sans '>604-648-7800</p>
            </div>
            <div className='flex flex-row gap-x-[8px]'>
              <Image src={Icons.Email} alt='' className='w-[22px] h-[22px]'/>
              <p className='text-background w-full text-base-16px font-sans '>sales@sukhbrar.ca</p>
            </div>
            <div className='flex flex-row gap-x-[8px]'>
              <Image src={Icons.Language} alt='' className='w-[22px] h-[22px]'/>
              <p className='text-background w-full text-base-16px font-sans '>http://www.sukhbrar.ca</p>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-row gap-1'>
              <h4 className='text-background text-text_20 font-bold'>Follow us</h4>
              <Image src={Icons.Finger} alt='' className='w-[22px] h-[22px]'/>
            </div>
            <div className='flex flex-row gap-3'>
              <div className='border border-borderStroke w-8 h-8 rounded-full p-2'> <Image src={Icons.FaceBook} alt=''  className='w-4 h-4'/> </div>
              <div className='border border-borderStroke w-8 h-8 rounded-full p-2'> <Image src={Icons.Instagram} alt=''  className='w-4 h-4'/> </div>
              <div className='border border-borderStroke w-8 h-8 rounded-full p-2'> <Image src={Icons.Twitter} alt=''  className='w-4 h-4'/> </div>
              <div className='border border-borderStroke w-8 h-8 rounded-full p-2'> <Image src={Icons.Youtube} alt=''  className='w-4 h-4'/> </div> 
              <div className='border border-borderStroke w-8 h-8 rounded-full p-2'> <Image src={Icons.Linkedin} alt=''  className='w-4 h-4'/> </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-y-[24px]'>
        <h2 className='text-background w-full text-text_20 font-bold'>Location</h2>
          <div className='text-background text-base flex flex-col gap-y-[12px]'>
            <div className='flex flex-row gap-x-[8px]'>
              <Image src={Icons.Location} alt='' className='w-[22px] h-[22px]'/>
              <p className='text-background w-full text-base '>104-13049 76 Ave Surrey, BC V3W 2V7</p>
            </div>
            <Image src={Images.RoyalLeo} alt='' className='w-[123px] h-[65px]'/>
            
          </div>
        </div>
      </div>
      <div className='w-full flex pt-5 pb-5 justify-between border-t border-borderStroke'>
        <p className='text-background text-base'>2025 Sukh Brar Real Estate Team, All Rights Reserved.</p>
        <p className='text-background text-base'>Privacy Policy</p>
      </div>
    </footer>
  )
}

export default Footer