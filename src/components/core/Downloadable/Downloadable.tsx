'use client'

import { Button } from '@nextui-org/react'
import {
  IconFileTypePdf,
  IconFileTypeXls,
  IconFileTypeDocx,
  IconFile,
  IconLoader
} from '@tabler/icons-react'
import { useState } from 'react'

export function Downloadable({
  title,
  fileName,
  file
}: {
  title: string
  fileName: string
  file: string
}) {
  const [isLoading, setIsLoading] = useState(false)

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
      onPress={() => window.open(file, '_blank')}
      disableAnimation={false}
      disabled={isLoading}
      target="_blank"
    >
      <h5 className="text-medium font-bold">{title}</h5>
      <div className="flex justify-start items-center gap-2">
        {isLoading ? (
          <IconLoader size={32} className="animate-spin" />
        ) : (
          fileTypesIcons[currentFileType] ?? <IconFile size={32} />
        )}
        <p className="text-base font-normal leading-normal">{fileName}</p>
      </div>
    </Button>
  )
}
