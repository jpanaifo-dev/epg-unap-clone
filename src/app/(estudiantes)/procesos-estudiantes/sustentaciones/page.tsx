import { sustentaciones } from "@/utils";

export default function SustentacionPage() {
    const thClasses = "px-2 lg:px-6 py-2 lg:py-3 text-left text-xs font-medium text-grayEpg-900 uppercase tracking-wider";
    const tdClasses = "px-2 lg:px-6 py-2 lg:py-5 whitespace-nowrap text-sm text-gray-500 text-wrap lg:max-w-sm";

    return (
        <>
            <div className="space-y-6">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y">
                        <thead>
                            <tr>
                                <th scope="col" className={thClasses}>
                                    Programa
                                </th>
                                <th scope="col" className={thClasses}>
                                    Tesis
                                </th>
                                <th scope="col" className={thClasses}>
                                    Estudiante(s)
                                </th>
                                <th scope="col" className={thClasses}>
                                    Fecha
                                </th>
                                <th scope="col" className={thClasses}>
                                    Hora
                                </th>
                                <th scope="col" className={thClasses}>
                                    Lugar
                                </th>
                                <th scope="col" className={thClasses}>
                                    Asesor
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-grayEpg-100">
                            {sustentaciones.map((item) => (
                                <tr key={item.student}>
                                    <td className={tdClasses}>{item.program}</td>
                                    <td className={tdClasses}>{item.thesis}</td>
                                    <td className={tdClasses}>{item.student}</td>
                                    <td className={tdClasses}>{item.date}</td>
                                    <td className={tdClasses}>{item.time}</td>
                                    <td className={tdClasses}>{item.place}</td>
                                    <td className={tdClasses}>{item.advisor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
