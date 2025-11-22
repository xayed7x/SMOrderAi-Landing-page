"use client";

export default function SolutionSection() {
  const features = [
    {
      icon: "⚡",
      title: "Lightning-Fast Comment Response",
      titleBn: "তাৎক্ষণিক কমেন্ট রিপ্লাই",
      description: (
        <div className="space-y-2">
          <p>
            আপনার পোস্টের প্রতিটা কমেন্ট AI monitor করে। কেউ "Price?" বা
            "Available?" লিখলেই:
          </p>
          <ul className="list-disc pl-4 space-y-1">
            <li>Public reply (২ সেকেন্ডের মধ্যে)</li>
            <li>Private DM inbox-এ (একই সাথে)</li>
          </ul>
          <p className="font-medium pt-1">
            Customer engaged থাকে। আপনি ঘুমাচ্ছেন? Autex জেগে আছে।
          </p>
        </div>
      ),
    },
    {
      icon: "🧠",
      title: "Smart Intent Detection",
      titleBn: "স্মার্ট Intent সনাক্তকরণ",
      description: (
        <div className="space-y-3">
          <p>সব কমেন্ট same না। Autex বুঝতে পারে:</p>
          <div className="space-y-2">
            <div className="bg-orange-50/50 p-2 rounded border border-orange-100">
              <span className="font-semibold text-orange-700">
                Buying Intent 🔥
              </span>
              <p className="text-xs mt-1 text-gray-600">
                ("Price?", "Order করব", "Available?") → High priority
                notification + special response
              </p>
            </div>
            <div className="bg-blue-50/50 p-2 rounded border border-blue-100">
              <span className="font-semibold text-blue-700">
                General Intent 💬
              </span>
              <p className="text-xs mt-1 text-gray-600">
                ("Beautiful!", "Nice product") → Thank you reply
                
              </p>
            </div>
          </div>
          <p>আপনি শুধু real buyers-দের সাথে deal করেন।</p>
        </div>
      ),
    },
    {
      icon: "📸",
      title: "AI Product Recognition",
      titleBn: "ছবি থেকে Product সনাক্তকরণ",
      description: (
        <div className="space-y-2">
          <p>কাস্টমার আপনার পণ্যের screenshot পাঠায়?</p>
          <p>Autex AI ছবি analyze করে:</p>
          <ul className="list-disc pl-4 space-y-1 text-sm">
            <li>আপনার database থেকে product খুঁজে বের করে</li>
            <li>নাম, দাম, variations confirm করে</li>
            <li>Customer-কে জিজ্ঞাসা করে: "এটা কি [Product Name]?"</li>
          </ul>
          <div className="flex gap-2 pt-1 text-xs font-semibold text-green-700">
            <span className="bg-green-50 px-2 py-1 rounded">
              ৮৫-৯২% Accuracy
            </span>
            <span className="bg-green-50 px-2 py-1 rounded">২-৫ সেকেন্ডে</span>
          </div>
          <p className="text-sm font-medium">Manual searching শেষ।</p>
        </div>
      ),
    },
    {
      icon: "💬",
      title: "Conversational Order Collection",
      titleBn: "মানুষের মতো কথোপকথন",
      description: (
        <div className="space-y-2">
          <p>Autex robotic না — এটা আপনার মতোই কথা বলে:</p>
          <div className="text-sm space-y-1.5 bg-gray-50 p-3 rounded-lg border border-gray-100">
            <p>
              <span className="font-bold text-blue-600">Bot:</span> "আপনার নাম
              কী বলবেন?"
            </p>
            <p>
              <span className="font-bold text-green-600">Customer:</span>{" "}
              "Ayesha"
            </p>
            <p>
              <span className="font-bold text-blue-600">Bot:</span> "ধন্যবাদ
              Ayesha! আপনার ফোন নম্বর?"
            </p>
            <p>
              <span className="font-bold text-green-600">Customer:</span>{" "}
              "01712345678"
            </p>
            <p>
              <span className="font-bold text-blue-600">Bot:</span> "Perfect!
              এখন ঠিকানা দিন।"
            </p>
          </div>
          <p className="italic text-sm">
            Natural, friendly, human-like। Customer comfort feel করে।
          </p>
        </div>
      ),
    },
    {
      icon: "📊",
      title: "Centralized Dashboard",
      titleBn: "সব এক জায়গায়",
      description: (
        <div className="space-y-2">
          <p>এক dashboard থেকে সবকিছু:</p>
          <ul className="space-y-1.5">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✅</span>
              <span>সব conversations (hot leads আলাদা)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✅</span>
              <span>Product database (upload, edit, manage)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✅</span>
              <span>All orders (pending, confirmed, delivered)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✅</span>
              <span>Analytics (response rate, buying intent %)</span>
            </li>
          </ul>
          <p className="font-bold text-center pt-1 text-indigo-600">
            Chaos থেকে clarity।
          </p>
        </div>
      ),
    },
    {
      icon: "🌙",
      title: "24/7 Active Agent",
      titleBn: "২৪/৭ কখনো ঘুমায় না",
      description: (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">
              রাত ২টায় order?
            </span>
            <span className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">
              শুক্রবার ছুটির দিনে?
            </span>
            <span className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">
              ঈদের দিন message?
            </span>
          </div>
          <p className="font-medium text-lg text-center">
            Autex সব সময় active।
          </p>
          <p className="text-sm text-gray-600 text-center">
            আপনি পরিবারের সাথে সময় কাটান। আপনি ভ্রমণে যান। আপনি ঘুমান।
          </p>
          <div className="bg-gray-900 text-white text-center py-1.5 rounded text-sm font-medium">
            Autex আপনার business চালায়।
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="self-stretch px-6 md:px-12 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-4 md:px-6 py-4 md:py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4">
          <h2 className="w-full text-center flex justify-center flex-col text-[#49423D] text-2xl md:text-4xl font-semibold leading-tight md:leading-[44px] font-sans tracking-tight">
            Autex কীভাবে আপনার পুরো Business Automate করে?
            <br />
            From Comment to Confirmed Order — AI Handles Everything.
          </h2>
        </div>
      </div>

      {/* Features Grid */}
      <div className="self-stretch px-4 md:px-12 py-8 md:py-12 flex flex-col justify-center items-center gap-4">
        <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-4 md:p-6 border border-[rgba(55,50,47,0.12)] rounded-lg hover:bg-[rgba(55,50,47,0.02)] transition-colors"
            >
              <div className="flex items-start gap-3 md:gap-4 mb-3">
                <div className="text-2xl md:text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="text-[#49423D] font-semibold text-base md:text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-[#605A57] text-xs md:text-sm font-medium">
                    {feature.titleBn}
                  </p>
                </div>
              </div>
              <div className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
