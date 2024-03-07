'use client'

import { Button } from '@nextui-org/react'
import {
  IconFileTypePdf,
  IconFileTypeXls,
  IconFileTypeDocx,
  IconFile
} from '@tabler/icons-react'

export function Downloadable ({
  title,
  fileName,
  file
}: {
  title: string
  fileName: string
  file: string
}) {
  const handleDownload = () => {
    // TODO: Remove log. it's just for testing is button is working
    console.log('clicked!')
    if (file === '#' || file === '') {
      return
    }

    fetch(file)
      .then((response) => {
        response.blob().then((blob) => {
          const url = window.URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url
          a.download = fileName
          a.click()
        })
      })
      .finally(() => {
        window.URL.revokeObjectURL(file)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  type FileTypeIcons = Record<string, React.ReactNode>

  const fileTypesIcons: FileTypeIcons = {
    pdf: <IconFileTypePdf size={32} />,
    xls: <IconFileTypeXls size={32} />,
    docx: <IconFileTypeDocx size={32} />
  }

  const currentFileType = fileName.split('.').pop() ?? 'none'

  return (
    <Button
      className="border border-[#A4A4A4] rounded-lg w-full px-4 py-2 flex flex-col gap-4 h-full bg-white items-start"
      onClick={handleDownload} disableAnimation={false}
    >
      <h5 className="text-medium font-bold">{title}</h5>
      <div className="flex justify-start items-center gap-2">
        {fileTypesIcons[currentFileType] ?? <IconFile size={32} />}
        <p className="text-base font-normal leading-normal">{fileName}</p>
      </div>
    </Button>
  )
}
