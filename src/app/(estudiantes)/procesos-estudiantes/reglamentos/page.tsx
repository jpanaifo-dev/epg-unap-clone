import { rulesFiles } from "@/utils"
import { Link as LinkUI } from "@nextui-org/react"
import Link from "next/link"

export default function ReglamentosPage() {
  return (
    <>
        <div className="space-y-6">
            {rulesFiles.map((rule) => (
                <div key={rule.description} className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 pt-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">{rule.description}</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">{rule.description}</p>
                    </div>
                    <dl>
                        <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            {/* <DownloadButton file={rule.description} fileName={rule.file} /> */}
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                                <LinkUI as={Link} href={rule.file} target="_blank" className="text-indigo-600 hover:text-blueEpg-dark hover:underline"
                                showAnchorIcon
                                >
                                    {rule.description}
                                </LinkUI>
                            </dd>
                        </div>
                    </dl>
                </div>
            ))}

        </div>
    </>
  )
}
