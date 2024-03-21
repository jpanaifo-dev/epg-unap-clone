'use client'
import DataFooter from '@/utils/dataFooter.json'
import Link from 'next/link'
import { IconPhone, IconMail, IconLocation, IconBrandFacebook, IconBrandGithub, IconBrandInstagram } from '@tabler/icons-react'
import { Divider, Image } from '@nextui-org/react'
import epg from '@/assets/images/epg-logo.png'

const icons = [
  { icon: <IconLocation size={20} />, key: 'location' },
  { icon: <IconPhone size={20} />, key: 'phone' },
  { icon: <IconMail size={20} />, key: 'mail' }
]
const year = new Date().getFullYear()

export function Footer () {
  return (
    <>
      <footer className="bg-primary-800 flex justify-center">
        <div className="container text-white p-4 px-4 lg:px-6 min-w-min max-w-7xl  py-14">
          <div className='flex  items-center gap-2'>
            {/* <div className='w-[132.8px]'>
              <Image src={unap.src} className='min-w-[8.3rem]' width={50} />
            </div>
            <Divider className='bg-white w-[2px]' orientation="vertical" /> */}
            {/* <div className='w-[160px]'>
              <Image src={epg.src} className='min-w-[10rem]' width={50} />
            </div> */}
            <div className='w-[41.59px]'>
                <Image src={epg.src} className='min-w-[2.6rem]' width={25} />
              </div>
            <div className='font-bold text-[24px] leading-tight'>
              <h3 >Escuela de Postgrado UNAP</h3>
              {/* <h3 >Postgrado UNAP</h3> */}
            </div>
          </div>
          <Divider className="my-4  bg-[#244a79]" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className=" ">
              <h4 className="mb-2 font-bold text-lg text-white">UBÍCANOS</h4>
              <ul>
                {DataFooter.infoEpg.map((item, index) => (
                  <li key={index} className="py-2 hover:text-yellow-400 text-[#d5dce8] text-sm flex gap-2">
                    {icons[index].icon}
                    <Link href={item.link}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" lg:pl-10 border-l-1 border-l-[#244a79]">
              <h4 className="mb-2 font-bold text-lg text-white">MAPA DE SITIO</h4>
              <ul className="">
                {DataFooter.mapSite.slice(0, 6).map((item, index) => (
                  <li key={index} className="py-2 hover:text-yellow-400 text-[#d5dce8] text-sm">
                    <Link href={item.link}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h4 className="lg:mb-4 hidden lg:block">
                <br />
              </h4>
              <ul className="">
                {DataFooter.mapSite.slice(6.12).map((item, index) => (
                  <li key={index} className="py-2 hover:text-yellow-400 text-[#d5dce8] text-sm">
                    <Link href={item.link}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:pl-10 border-l-1 border-l-[#244a79]">
              <h4 className="mb-2 font-bold text-lg text-white">MÁS DE LA EPG-UNAP</h4>
              <ul className="">
                {DataFooter.moreEpg.map((item, index) => (
                  <li key={index} className="py-2 hover:text-yellow-400 text-[#d5dce8] text-sm">
                    <Link href={item.link}>{item.label}</Link>
                  </li>
                ))}
              </ul>
              <Divider className="my-4 bg-[#244a79]" />
              <div className='flex gap-4 pt-1'>
                <span className='bg-blue-700 p-2 rounded-full'>
                  <IconBrandFacebook size={24} />
                </span>
                <span className='bg-blue-700 p-2 rounded-full'>
                  <IconBrandGithub size={24} />
                </span>
                <span className='bg-blue-700 p-2 rounded-full'>
                  <IconBrandInstagram size={24} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-[#191919] text-white text-xs text-center p-3">
        &copy; {year} ESCUELA DE POSTGRADO-UNAP. Todos los derechos reservados.
      </footer>
    </>
  )
}
