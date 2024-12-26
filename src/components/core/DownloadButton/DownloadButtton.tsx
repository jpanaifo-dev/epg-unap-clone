'use client'

import { useState } from 'react'
import { Button } from '@nextui-org/react'
import { IconDownload, IconLoader } from "@tabler/icons-react"

interface IProps {
    fileName: string
    file: string
}

export const DownloadButton = (props: IProps) => {
    const { fileName, file } = props
    const [isLoading, setIsLoading] = useState(false);

    const handleDownload = () => {

        setIsLoading(true)

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
                setIsLoading(false)
            })
            .catch((error) => {
                throw new Error(error)
            })
    }

    return (
        <Button
            variant="bordered"
            size="sm"
            className="text-sm w-36"
            startContent={isLoading ? (
                <IconLoader size={14} />
              ) : (
                <IconDownload size={14} />
              )}
            disabled={isLoading}
            isLoading={isLoading}
            target='_blank'
            onClick={handleDownload}
            >
                <span className='text-sm'>
                    {isLoading ? 'Descargando' : 'Descargar'}
                </span>
        </Button>
    )
}
