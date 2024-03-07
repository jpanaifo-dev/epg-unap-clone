import dataRules from '@/utils/dataRules.json'
import { Downloadable } from '@/components'

export default function RulesSection () {
  return (
    <section className="flex flex-col gap-[14px] w-full">
      {dataRules.files.map((file) => (
        <Downloadable
          key={file.id}
          title={file.title}
          fileName={file.nameFile}
          file={file.urlDownload}
        />
      ))}
    </section>
  )
}
