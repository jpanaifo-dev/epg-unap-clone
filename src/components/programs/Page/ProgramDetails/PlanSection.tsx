'use client'
import { useState } from 'react'
import {
  Select,
  SelectItem,
  Selection,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell
} from '@nextui-org/react'
import { ContactBar, Downloadable } from '@/components'
import { IPlanEstudioListApi } from '@/types'
import Image from 'next/image'

interface IProps {
  data: IPlanEstudioListApi[]
}

const columns = [
  {
    key: 'codigo',
    label: 'Código'
  },
  {
    key: 'asignatura',
    label: 'Asignatura'
  },
  {
    key: 'horas-teoricas',
    label: 'HT'
  },
  {
    key: 'horas_practicas',
    label: 'HP'
  },
  {
    key: 'creditos',
    label: 'C'
  },
  {
    key: 'requisitos',
    label: 'Requisitos'
  }
]

export function PlanSection(props: IProps) {
  const { data } = props
  const [itemSelected, setItemSelected] = useState<number>(
    data.length > 0 ? data[0].plan_estudio.id : 0
  )

  const planEstudio = data.find(
    (plan) => plan.plan_estudio.id === itemSelected
  ) as IPlanEstudioListApi

  const handleSelect = (selected: Selection) => {
    console.log(selected)
    const value = Object.values(selected)[0]

    if (value) {
      setItemSelected(Number(value))
    } else {
      setItemSelected(0)
    }
  }
  return (
    <div className="flex flex-col justify-start gap-6">
      {data.length === 0 && (
        <div className='flex flex-col justify-center items-center section'>
          <Image
            src="/svg/not-programs.svg"
            width={320}
            height={320}
            alt="not-plan"
          />
          <p className="text-center text-gray-500 max-w-sm">
            No se encontraron planes de estudio para este programa académico
          </p>
        </div>
      )}
      {data.length > 0 && (
        <>
          <header>
            <Select
              aria-label="Select a plan"
              radius="sm"
              size="lg"
              selectedKeys={[String(itemSelected)]}
              onSelectionChange={handleSelect}
              disallowEmptySelection
              items={data}
              variant="bordered"
              classNames={{
                trigger: 'min-h-16'
              }}
              renderValue={(item) => {
                return item.map((plan, index) => (
                  <div className="flex gap-1" key={index.toString()}>
                    <Image
                      alt='Icono de "graduation-cap"'
                      aria-label='Icono de "graduation-cap"'
                      src="/images/Isotipo-EPG.webp"
                      width={24}
                      height={24}
                    />
                    <div className="flex flex-col">
                      <h5 className="text-primary-800 text-lg font-bold leading-7">
                        {plan?.textValue}
                      </h5>
                      <span className="text-gray-500 text-xs">
                        Sede: {plan?.data?.plan_estudio?.sede} - Modalidad:{' '}
                        {plan?.data?.plan_estudio?.modalidad}
                      </span>
                    </div>
                  </div>
                ))
              }}
            >
              {(plan) => (
                <SelectItem
                  key={plan.plan_estudio.id}
                  textValue={plan.plan_estudio.nombre}
                >
                  <SelectItemCustom
                    key={plan.plan_estudio.id.toString()}
                    title={plan.plan_estudio.nombre}
                    description={`Sede: ${plan.plan_estudio.sede} - Modalidad: ${plan.plan_estudio.modalidad}`}
                  />
                </SelectItem>
              )}
            </Select>
          </header>
          <section className="rounded-lg border-opacity-70 border border-[#A4A4A4]">
            {planEstudio?.ciclos.map((cycle, outerIndex) => (
              <div key={outerIndex}>
                <h5 className="text-start font-semibold text-sm uppercase pt-5 px-5">
                  Ciclo {cycle?.ciclo}
                </h5>
                <Table
                  aria-label="Table of courses"
                  radius="sm"
                  shadow="none"
                  fullWidth
                >
                  <TableHeader columns={columns}>
                    {(column) => (
                      <TableColumn key={column?.key}>
                        {column?.label}
                      </TableColumn>
                    )}
                  </TableHeader>
                  <TableBody>
                    {cycle.cursos.map((row, innerIndex) => (
                      <TableRow key={innerIndex}>
                        <TableCell id={row?.nombre}>{row?.codigo}</TableCell>
                        <TableCell className="max-w-96">
                          {row?.nombre}
                        </TableCell>
                        <TableCell>{row?.horas_teoricas}</TableCell>
                        <TableCell>{row?.horas_practicas}</TableCell>
                        <TableCell>{row?.creditos}</TableCell>
                        <TableCell align="center" className="w-52">
                          {row?.requisitos.length > 0
                            ? row?.requisitos.map((requisito, index) => (
                                <span key={index}>
                                  {requisito?.requisito__codigo}
                                </span>
                              ))
                            : 'Ninguno'}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ))}
          </section>
          <section className="flex flex-col gap-4">
            <header>
              <h5 className="text-black text-lg font-bold leading-7">
                Resúmen de plan de estudios
              </h5>
            </header>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SummaryItem title="Total de asignaturas" value="N asignaturas" />
              <SummaryItem
                title="Créditos totales"
                value={`${planEstudio?.creditos_totales} créditos`}
              />
              <SummaryItem
                title="Horas académicas totales"
                value={`${planEstudio?.horas_totales} horas`}
              />
            </section>
          </section>
          <section className="flex flex-col gap-4">
            <header>
              <h5 className="text-black text-lg font-bold leading-7">
                Inversión económica
              </h5>
            </header>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SummaryItem
                title="Duración académica"
                value={`${planEstudio?.plan_estudio?.duracion_academica} meses`}
              />
              <SummaryItem
                title="Costo total"
                value={`s/ ${
                  planEstudio?.plan_estudio.costo || 'No disponible'
                }`}
              />
              <SummaryItem
                title="Costo de cuotas"
                value={`s/ ${
                  planEstudio?.plan_estudio?.costo !== null
                    ? planEstudio?.plan_estudio?.costo /
                      planEstudio?.plan_estudio?.cuotas
                    : 'No disponible'
                } por cuota`}
              />
            </section>
          </section>
          <section className="flex flex-col gap-3.5">
            <h5 className="text-black text-lg font-bold leading-7">
              Descargar plan de estudios
            </h5>
            <Downloadable
              title="Plan de estudios"
              fileName="Plan-de-estudios.pdf"
              file="#"
            />
          </section>
        </>
      )}
      <ContactBar />
    </div>
  )
}

interface IPropItems {
  title: string
  value: string
}

const SummaryItem = (props: IPropItems) => {
  const { title, value } = props
  return (
    <div className="p-4 rounded-lg flex-col justify-center items-start gap-2 inline-flex border border-opacity-85 border-[#DBDBDE]">
      <h5 className="text-gray-500">{title}</h5>
      <div className="border w-full"></div>
      <span className="text-base font-bold">{value}</span>
    </div>
  )
}

interface ISelectItemProps {
  key: string
  title: string
  description: string
}

const SelectItemCustom = (props: ISelectItemProps) => {
  const { key, title, description } = props
  return (
    <div className="flex gap-1" key={key}>
      <Image
        alt='Icono de "graduation-cap"'
        aria-label='Icono de "graduation-cap"'
        src="/images/Isotipo-EPG.webp"
        width={24}
        height={24}
      />
      <div className="flex flex-col">
        <h5 className="text-primary-800 text-lg font-bold leading-7">
          {title}
        </h5>
        <span className="text-gray-500 text-xs">{description}</span>
      </div>
    </div>
  )
}
