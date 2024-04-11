
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {



  return (
    <header className="sticky top-0 z-40 border-b bg-background flex justify-between items-center px-4">
      <div className="p-6">

      </div>
      <div className="flex-1"> {/* This div will take up the remaining space */}
        <p className="font-extrabold py-5 text-center">The Rockefeller</p>
      </div>
      <div>
        <ThemeToggle /> {/* ThemeToggle component on the right */}
      </div>

    </header>
  )
}
