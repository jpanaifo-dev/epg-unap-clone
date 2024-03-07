export interface Master {
  id: number
  tipo: string
  nombre: string
  urlImagen: string
  modalidad: string
  inicio: string
  duracion: string
  link: string
  acercaDe: string
  objetivo?: string
  costoMensual: number
  costoTotal: number
  plan: {
    ciclos: Array<{
      asignaturas: Array<{
        curso: Array<{
          codigo: string
          creditos: number
        }>
        nombre: string
      }>
    }>
  }
  descripcion: string
  undergraduates: Array<{
    title: string
    items: string
  }>
  graduados: Array<{
    title: string
    items: string
  }>
}

export interface Doctorado {
  id: number
  tipo: string
  nombre: string
  urlImagen: string
  modalidad: string
  inicio: string
  duracion: string
  link: string
  acercaDe: string
  objetivo?: string
  costoMensual: number
  costoTotal: number
  plan: {
    ciclos: Array<{
      asignaturas: Array<{
        curso: Array<{
          codigo: string
          creditos: number
        }>
        nombre: string
      }>
    }>
  }
  descripcion: string
  undergraduates: Array<{
    title: string
    items: string
  }>
  graduados: Array<{
    title: string
    items: string
  }>
}

export interface IProfileStudentProgram {
  description: string
  undergraduate: {
    title: string
    items: string[]
  }
  graduated: {
    title: string
    items: string[]
  }
  requerements: {
    items: string[]
  }
}

export interface Params {
  params: {
    id: string
  }
}

export interface IProgram {
  id: number
  tipo: string
  nombre: string
  urlImagen: string
  modalidad: string
  inicio: string
  duracion: string
  link: string
  acercaDe: string
  objetivo?: string
  costoMensual: number
  costoTotal: number
}

export interface IFilters {
  searchTerm: string
  selectedFilter: string
  selectedModality: string
}

export interface IEvent {
  id: number
  nombre: string
  descripcion: string
  fecha: string
  hora: string
  lugar: string
  organizador: string
  categorias: string[]
  imagen: string
}

export interface INews {
  id: number
  titulo: string
  contenido: string
  fechaPublicacion: string
  autor: string
  categorias: string[]
  imagen: string
}

export interface IAdvise {
  id: number
  title?: string
  description?: string
  content?: string
  date?: string
  image: string
  time: string
}
