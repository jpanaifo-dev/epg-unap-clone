'use client'
import DataFooter from '@/utils/dataFooter.json'
import Link from 'next/link'

export function Footer() {
  return (
    <>
      <footer className="bg-primary-800 flex justify-center w-full">
        <div className="container text-white p-4 px-4 lg:px-6 min-w-min  py-14">
          <h3 className="font-bold mb-6 text-lg">Escuela de Postgardo UNAP</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className=" ">
              <h4 className="mb-4">UBÍCANOS</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.174840674671!2d-73.29751722412449!3d-3.7721053433979086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ea0fc8b03af903%3A0xa30ac2bf7c0720a3!2sEscuela%20de%20Postgrado%20UNAP!5e0!3m2!1ses!2spe!4v1719342423404!5m2!1ses!2spe"
                width="400"
                height="300"
                loading="lazy"
                className="w-full h-48 mt-4"
              ></iframe>
              <ul>
                {DataFooter.infoEpg.map((item, index) => (
                  <li key={index} className="py-2">
                    <Link href={item.link}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h4 className="mb-4">MAPA DE SITIO</h4>
              <ul className="list-disc px-4">
                {DataFooter.mapSite.slice(0, 6).map((item, index) => (
                  <li key={index} className="py-2">
                    <Link href={item.link}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h4 className="lg:mb-4 hidden lg:block">
                <br />
              </h4>
              <ul className="list-disc px-4">
                {DataFooter.mapSite.slice(6.12).map((item, index) => (
                  <li key={index} className="py-2">
                    <Link href={item.link}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h4 className="mb-4">MÁS DE LA EPG-UNAP</h4>
              <ul className="list-disc px-4">
                {DataFooter.moreEpg.map((item, index) => (
                  <li key={index} className="py-2">
                    <Link href={item.link}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-black text-white text-center p-1">
        Derechos reservados | EPG-UNAP{' '}
      </footer>
    </>
  )
}
