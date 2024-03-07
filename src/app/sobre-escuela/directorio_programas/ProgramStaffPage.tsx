import DirectorioFacultades from './sections/DirectorioFacultades'
import FilterStaffSection from './sections/filterStaffSection'
import ListSection from './sections/listStaffSection'

export default function ProgramStaffPage () {
  return (
    <div>
      {/* TODO: Cambiar esto por un filtro de personas que tengan el rol de algun personal administrativo en la institucion de epg */}
      <DirectorioFacultades />
      <FilterStaffSection />
      <ListSection />

    </div>
  )
}
