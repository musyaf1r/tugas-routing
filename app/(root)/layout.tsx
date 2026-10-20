import Navbars from "@/app/header/navbars"
import Selection from "@/app/header/selection"

export default function RootGroupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Navbars/>
      <div className="flex justify-between">
        <Selection/>
        {children}
      </div>
    </main>
  )
}