import { routes } from "@/utils";

export default function RutasPage() {
  return (
    <>
        <div className="space-y-6">
            {routes.map((route) => (
            <div key={route.title} className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{route.title}</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">{route.description}</p>
                </div>
                <div className="border-t border-gray-200">
                <dl>
                    {route.rules.map((rule) => (
                    <div key={rule.title} className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">{rule.title}</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{rule.description}</dd>
                    </div>
                    ))}
                </dl>
                </div>
            </div>
            ))}
        </div>
    </>
  )
}