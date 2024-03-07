'use client'

import React from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell
} from '@nextui-org/react'
import TableData from '@/utils/table-data.json'
import { ContactBar, Downloadable } from '@/components'

export function PlanSection () {
  return (
    <div className="flex flex-col justify-start gap-6">
      <section className="rounded-lg border-opacity-70 border border-[#A4A4A4]">
        {TableData.ciclos.map((cycle, outerIndex) => (
          <div key={outerIndex}>
            <h5 className="text-start font-semibold text-sm uppercase pt-5 px-5">
              Ciclo {outerIndex + 1}
            </h5>
            <Table radius="sm" shadow="none" fullWidth>
              <TableHeader columns={TableData.columns}>
                {(column) => (
                  <TableColumn key={column.key}>{column.label}</TableColumn>
                )}
              </TableHeader>
              <TableBody>
                {cycle.courses.map((row, innerIndex) => (
                  <TableRow key={innerIndex}>
                    {TableData.columns.map(
                      (column: { key: string, label: string }) => (
                        <TableCell key={column.key}>
                          {row[column.key as keyof typeof row]}
                        </TableCell>
                      )
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ))}
      </section>
      <section className="flex flex-col gap-3.5">
        <h5 className="text-black text-lg font-bold leading-7">
          Descargar plan de estudios
        </h5>
        {/**
         *  TODO: Bind the props with objects properties
         */}
        <Downloadable
          title="Plan de estudios"
          fileName="Plan-de-estudios.pdf"
          file="#"
        />
      </section>
      <ContactBar />
    </div>
  )
}
