export default function MainSection ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex-col md:flex w-full h-full mx-auto max-w-7xl  p-4 sm:p-6 sm:py-8 lg:py-16  z-10">
      {children}
    </section>
  )
}
