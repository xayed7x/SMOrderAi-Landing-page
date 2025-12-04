import Link from "next/link";

export default function FooterSection() {
  return (
    <div className="w-full pt-10 flex flex-col justify-start items-start bg-[#f7f7f5]">
      {/* Main Footer Content */}
      <div className="self-stretch h-auto flex flex-col md:flex-row justify-between items-stretch pr-0 pb-8 pt-0 container mx-auto px-4">
        <div className="h-auto py-4 md:py-8 flex flex-col justify-start items-start gap-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-3">
            <div className="text-[#49423D] text-xl font-semibold leading-4 font-sans">
              Autex
            </div>
            <div className="text-[rgba(73,66,61,0.90)] text-sm font-medium leading-[18px] font-sans">
              AI-powered social commerce for SMEs
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-start items-center gap-6">
            {/* X Icon */}
            <a
              href="https://x.com/Xayed007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#49423D] hover:opacity-70 transition-opacity"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/zayed-web-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#49423D] hover:opacity-70 transition-opacity"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* WhatsApp Icon */}
            <a
              href="https://wa.me/8801977994057"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#49423D] hover:opacity-70 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            </a>

            {/* YouTube Icon */}
            <a
              href="https://youtube.com/@autexai?si=sQj3SQiSb3nviV-p"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#49423D] hover:opacity-70 transition-opacity"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* TikTok Icon */}
            <a
              href="https://www.tiktok.com/@autex.app?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#49423D] hover:opacity-70 transition-opacity"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
              </svg>
            </a>

            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com/share/1AJbkYuE5e/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#49423D] hover:opacity-70 transition-opacity"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.797 1.657-2.797 3.393v.579h4.601l-.672 3.667h-3.929v7.98H9.101z" />
              </svg>
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/autex.app?igsh=enQwdnd6a2V4YTAw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#49423D] hover:opacity-70 transition-opacity"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="self-stretch py-4 md:py-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Product Column */}
          <div className="flex flex-col justify-start items-start gap-3">
            <div className="self-stretch text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5 font-sans">
              Product
            </div>
            <div className="flex flex-col justify-end items-start gap-2">
              <div className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#37322F] transition-colors">
                Features
              </div>
              <div className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#37322F] transition-colors">
                Pricing
              </div>
              <div className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#37322F] transition-colors">
                FAQ
              </div>
              <div className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#37322F] transition-colors">
                Try Free
              </div>
            </div>
          </div>

          {/* Company Column */}
          <div className="flex flex-col justify-start items-start gap-3">
            <div className="text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5 font-sans">
              Company
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
              <div className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#37322F] transition-colors">
                About us
              </div>
              <Link
                href="/contact"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#37322F] transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/privacy-policy"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#37322F] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#37322F] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col justify-start items-start gap-3 col-span-2 sm:col-span-1">
            <div className="text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5 font-sans">
              Contact
            </div>
            <div className="flex flex-col justify-center items-start gap-2">
              <a
                href="mailto:autexapp@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#37322F] transition-colors break-all"
              >
                autexapp@gmail.com
              </a>
              <a
                href="https://wa.me/8801977994057"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#49423D] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-[#37322F] transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section with Pattern */}
      <div className="self-stretch h-12 relative overflow-hidden border-t border-[rgba(55,50,47,0.12)] flex items-center justify-center">
        <div className="text-[#605A57] text-xs md:text-sm font-normal">
          © 2025 Autex. All rights reserved.
        </div>
      </div>
    </div>
  );
}
