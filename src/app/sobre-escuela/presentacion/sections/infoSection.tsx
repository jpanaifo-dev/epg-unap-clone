'use client'
import { Image } from '@nextui-org/react'

export default function InfoSection () {
  return (
    <>
      <div className="mb-4">
        <h3 className="text-lg font-bold">
          Sobre la EPG - “José Torres Vasques”
        </h3>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="col-span-1 lg:col-span-2">
            <p className="text-justify ">
              La Escuela de Postgrado de la Universidad Nacional de la Amazonía
              Peruana es un órgano de línea con autonomía académica,
              administrativa y económica que ofrece variados programas de
              especialización entre maestrías y doctorados, es reconocido por su
              excelencia académica y oferta de programas de posgrado en diversas
              áreas de estudio. Con una facultad altamente calificada y recursos
              de investigación de vanguardia, la UNAP ofrece a los estudiantes
              una educación de calidad y oportunidades de crecimiento
              profesional. Ya sea que estés interesado en obtener un título de
              maestría o un doctorado, el Postgrado de la UNAP es una opción
              destacada para aquellos que buscan avanzar en sus carreras y
              contribuir al desarrollo de la región amazónica.
            </p>
          </div>
          <div className="h-[190px] overflow-hidden">
            {/* TODO: Fix imagen no carga */}
            <Image
              src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/365247180_766376495285308_2158143583334087419_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEZw6059esT7YUUnSWYuovMCnqOmY-BMLcKeo6Zj4Ewt54-u6hNnDZ6rQ8Xq-wDQcIMoQgoA0GuwW5B2uC6hJJl&_nc_ohc=t9-lYLp9ktYAX-ZROlU&_nc_ht=scontent-lim1-1.xx&oh=00_AfBN6c_UsFOHBL94TIIqDWERQRJjLCHkIJ9YxkSB59qerQ&oe=652D6954"
              alt="Escuela de Postgrado"
              className="rounded-none w-full h-auto "
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-bold">Misión</h3>
          <p className="text-base text-justify">
            Nuestra misión es impulsar la formación de profesionales altamente
            calificados y la generación de conocimiento científico de vanguardia
            en áreas de relevancia para la región amazónica. A través de
            programas de posgrado de calidad y la promoción de la investigación
            interdisciplinaria, buscamos contribuir al desarrollo sostenible, la
            conservación de la biodiversidad y el bienestar de las comunidades
            amazónicas.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Visión</h3>
          <p className="text-base text-justify">
            Nuestra visión es ser un referente internacional en la formación de
            líderes y la investigación científica aplicada en la Amazonía.
            Buscamos ser reconocidos por la excelencia académica de nuestros
            programas de maestría y doctorado, así como por la relevancia de
            nuestras investigaciones en la solución de los desafíos
            socioambientales de la región amazónica. Aspiramos a ser un motor de
            desarrollo sostenible, promoviendo la conservación de la Amazonía y
            mejorando la calidad de vida de sus habitantes.
          </p>
        </div>
      </div>
    </>
  )
}
