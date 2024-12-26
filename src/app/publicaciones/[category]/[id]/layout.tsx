export default function Layout({
  children,
  publications
}: {
  children: React.ReactNode
  publications: React.ReactNode
}) {
  return (
    <main className="flex flex-col lg:flex-row gap-5 lg:gap-6 container items-start ">
      <article className="w-full lg:max-w-[calc(100%-384px)]">
        {children}
      </article>
      <aside className="w-full lg:max-w-sm lg:w-[384px] lg:sticky lg:top-24 py-8 lg:py-16">
        {publications}
      </aside>
    </main>
  )
}
