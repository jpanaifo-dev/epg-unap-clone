export default function MainSection ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex-col md:flex w-full h-full container z-10 py-14">
      {children}
    </section>
  )
}
