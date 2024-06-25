'use client'
import React from 'react';
import Image from 'next/image';
import CarBooking from '../../assets/carbooking.png';
import AppStoreImg from '../../assets/website/app_store.png';
import PlayStoreImg from '../../assets/website/play_store.png';

const AppStore = () => {
    return (
        <div className='bg-[#f5f5f5] dark:bg-black dark:text-white'>
            <div className='container'>
                {/* header title section */}
                <div className='space-y-3 uppercase text-center py-14'>
                    <p data-aso='fade-up' className='text-primary text-2xl font-semibold'>Donwload</p>
                    <h1 data-aos='fade-up' data-aos-delay='300' className='text-3xl font-bold'>Best Cab Service</h1>
                </div>

                {/* Card Section */}
                <div data-aos='fade-up' className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center'>
                    <div className='space-y-8 max-w-[400px] mx-auto'>
                        <h1 className='text-2xl font-bold'>
                            Download the Cab voucher app free! get Exciting New offers
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ut laborum vitae quo adipisc officiis!.
                        </p>
                        {/* App store Logo section */}
                        
                        <div className='flex flex-wrap justify-center sm:justify-start items-center'>
                            <a href='#'>
                                <Image
                                    src={AppStoreImg}
                                    alt=''
                                    className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
                                />
                            </a>
                            <a href='#'>
                                <Image
                                    src={PlayStoreImg}
                                    alt=''
                                    className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'
                                />
                            </a>
                        </div>
                    </div>

                    {/* Image section */}
                    <div>
                        <Image src={CarBooking} alt='max-w-[400px]'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppStore