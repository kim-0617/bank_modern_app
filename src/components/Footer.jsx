import React from 'react';
import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
    return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <div className="flex-1 flex flex-col justify-start w-full">
                    <img src={logo} alt="logo" className='w-[266px] h-[72px] object-contain' />
                    <p className={`${styles.paragraph} mt-4 max-w-[310px] mb-10`}>
                        ReactJS와 tailwind CSS 를 이용해서 만든
                        반응형 사이트 입니다.
                    </p>

                    <div className="flex-[1.5] w-full flex flex-row justify-between md:mt-0 mt-10">
                        {footerLinks.map((footerlink) => (
                            <div key={footerlink.title} className="ss:my-0 my-4 min-w-[150px] flex flex-col">
                                <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>{footerlink.title}</h4>
                                <ul className='list-onoe mt-4'>
                                    {footerlink.links.map((link, index) => (
                                        <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length ? "mb-4" : "mb-0"}`}>
                                            {link.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
                <p className='font-poppins font-normal text-[18px] leading-[27px] text-white'>
                    JavaScriptMastery lecture
                </p>

                <div className='flex flex-row md:mt-0 mt-6'>
                    {socialMedia.map((social, index) => (
                        <img src={social.icon} alt={social.id} key={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Footer