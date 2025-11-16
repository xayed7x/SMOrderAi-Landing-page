"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="w-full border-b border-[#37322f]/6 bg-[#f7f5f3]">
      <div className="max-w-[1060px] mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="text-[#37322f] font-semibold text-lg cursor-pointer hover:text-[#37322f]/80 transition-colors">
              Orderly
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => handleScroll("features")}
                className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => handleScroll("pricing")}
                className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => handleScroll("faq")}
                className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium transition-colors"
              >
                FAQ
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#37322f] hover:bg-[#37322f]/5 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Log In Button */}
          <Button
            variant="ghost"
            className="hidden md:flex text-[#37322f] hover:bg-[#37322f]/5"
            onClick={() => alert("Log in functionality would be implemented here")}
          >
            Log in
          </Button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-[#37322f]/6 py-4 space-y-3">
            <button
              onClick={() => handleScroll("features")}
              className="w-full text-left px-4 py-2 text-[#37322f] hover:bg-[#37322f]/5 rounded text-sm font-medium transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => handleScroll("pricing")}
              className="w-full text-left px-4 py-2 text-[#37322f] hover:bg-[#37322f]/5 rounded text-sm font-medium transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => handleScroll("faq")}
              className="w-full text-left px-4 py-2 text-[#37322f] hover:bg-[#37322f]/5 rounded text-sm font-medium transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => alert("Log in functionality would be implemented here")}
              className="w-full px-4 py-2 text-[#37322f] hover:bg-[#37322f]/5 rounded text-sm font-medium transition-colors"
            >
              Log in
            </button>
          </div>
        )}
      </div>
    </header>
  )
}