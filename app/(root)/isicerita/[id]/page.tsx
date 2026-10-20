import DetailCerita from "@/app/dasboard/isicerita/detail"

export default async function DetailCeritaPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return <DetailCerita id={id} />
}
