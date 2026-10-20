import Selection from "@/components/header/selection"
import Navbars from "@/components/header/navbar"

export default function RootGroupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Navbars />
      <div className="flex justify-between">
        <Selection />
        {children}
      </div>
    </main>
  )
}