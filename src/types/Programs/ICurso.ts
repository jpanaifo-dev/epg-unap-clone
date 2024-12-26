export interface ICurso {
  id: number
  nombre: string
  codigo: string
  ciclo: number
  creditos: number
  horas_teoricas: number
  horas_practicas: number
  requisitos: IRequisito[]
}

export interface IRequisito {
  requisito__codigo: string
}
