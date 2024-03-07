'use client'
import DataFooter from '@/utils/dataFooter.json'
import Link from 'next/link'

export function Footer () {
  return (
    <>
      <footer className="bg-primary-800 flex justify-center">
        <div className="container text-white p-4 px-4 lg:px-6 min-w-min max-w-7xl  py-14">
          <h3 className="font-bold mb-6 text-lg">Escuela de Postgardo UNAP</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className=" ">
              <h4 className="mb-4">UBÍCANOS</h4>
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
