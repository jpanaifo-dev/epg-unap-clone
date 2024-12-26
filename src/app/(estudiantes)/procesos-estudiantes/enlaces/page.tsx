import { CardSimple } from "@/components";


export default function EnlacesPage() {
  return (
    <div className="flex flex-col gap-[14px]">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px]">
      <CardSimple
        urlLink="http://aulapostgrado.unapiquitos.edu.pe/"
        title="AULA VIRTUAL"
        image="https://enlinea.unapiquitos.edu.pe/aulavirtual/img/admision.jpg"
        isBlank
        height="h-52"
      />
      <CardSimple
        urlLink="https://enlinea.unapiquitos.edu.pe/escuela.php"
        title="EPG - UNAP"
        image="https://enlinea.unapiquitos.edu.pe/postgrado/escuela/descargas/escuela-portada.jpg"
        isBlank
        height="h-52"
      />
      <CardSimple
        urlLink="https://sigau.unapiquitos.edu.pe/"
        title="SIGAU"
        image="https://sigau.unapiquitos.edu.pe/assets/img/intranet.jpg"
        isBlank
        height="h-52"
      />
    </div>
  </div>
  )
}
