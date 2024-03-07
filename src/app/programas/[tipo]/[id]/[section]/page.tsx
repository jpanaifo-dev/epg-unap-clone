export default function PageSection ({
  params
}: {
  params: { section: string }
}) {
  return <div>{params.section}</div>
}
