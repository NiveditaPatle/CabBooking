'use client'
import React from 'react'
import BgImage from '../../assets/girl.jpg';
import BannerCard from './BannerCard.jsx';
import { SlStar } from "react-icons/sl";

const bgStyle = {
  backgroundImage: `url(${BgImage.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '520px',
  width: '100vw',
}

const About = () => {
  return (
    <div style={bgStyle}>
      <div className='text-white bg-black/80 min-h-[530px] flex items-center py-10'>
        <div className='container'>
          {/* header title section */}
          <div className='space-y-3 uppercase text-center py-14'>
            <p data-aos='fade-up' data-aos-delay='300' className='text-primary text-2xl font-semibold'>We do Best</p>
            <h1 data-aos='fade-up' data-aos-delay='300' className='text-3xl font-bold'>Than You Wish</h1>
          </div>

          {/* Card Section */}
          <div data-aos='fade-up' data-aos-delay='500' className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
            <div className='space-y-8'>
              <BannerCard
                title={'Past Booking'}
                description={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                icon={<SlStar />}
              />

              <BannerCard
                title={'Past Booking'}
                description={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                icon={<SlStar />}
              />
            </div>
            <div className='space-y-8'>
              <BannerCard
                title={'Past Booking'}
                description={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                icon={<SlStar />}
              />

              <BannerCard
                title={'Past Booking'}
                description={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                icon={<SlStar />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About