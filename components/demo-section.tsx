"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Zap,
  Target,
  Moon,
  ZoomIn,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock data for the gallery - 8 steps total from preview folder
const DEMO_STEPS = [
  {
    id: 1,
    title: "১. Screenshot Analysis",
    description: "Customer স্ক্রিনশট পাঠালে AI সাথে সাথে প্রোডাক্ট চিনে ফেলে",
    fullTitle: "Screenshot Analysis & Product Identification",
    image: "/preview/send screnshort- order-1.png",
  },
  {
    id: 2,
    title: "২. Smart Response",
    description: "প্রোডাক্টের ডিটেইলস এবং 'Order Now' বাটন সহ রিপ্লাই দেয়",
    fullTitle: "Automated Smart Response with Product Details",
    image: "/preview/identtify product and give details with order now button .order 2.png",
  },
  {
    id: 3,
    title: "৩. Real-time Inventory",
    description: "ড্যাশবোর্ড থেকে রিয়েল-টাইম ডেটা নিয়ে কাস্টমারকে সঠিক তথ্য দেয়",
    fullTitle: "Real-time Inventory & Dashboard Sync",
    image: "/preview/dashboard product overview to prove AI is responding with real data order 3.png",
  },
  {
    id: 4,
    title: "৪. Out-of-stock Handling",
    description: "স্টক না থাকলে অল্টারনেটিভ সাজেস্ট করে এবং কাস্টমারের তথ্য নেয়",
    fullTitle: "Smart Out-of-stock Handling & Information Collection",
    image: "/preview/AI validate out of stock sizes and recomede available ones and ask for information to save order order 4.png",
  },
  {
    id: 5,
    title: "৫. Order Summary",
    description: "অর্ডারের সব তথ্য চেক করার জন্য একটি সামারি দেখায়",
    fullTitle: "Comprehensive Order Summary for Confirmation",
    image: "/preview/show order sumarry order 5.png",
  },
  {
    id: 6,
    title: "৬. Payment Verification",
    description: "ডেলিভারি চার্জ এবং পেমেন্টের লাস্ট ডিজিট সংগ্রহ করে",
    fullTitle: "Delivery Logistics & Payment Information Collection",
    image: "/preview/ask for delivery charge and save last two digit of the payment numbr order 6.png",
  },
  {
    id: 7,
    title: "৭. Order Management",
    description: "সব অর্ডার অটোমেটিক ড্যাশবোর্ডের অর্ডার লিস্টে জমা হয়",
    fullTitle: "Automated Order Listing in Dashboard",
    image: "/preview/order list in the dashboard order 7.png",
  },
  {
    id: 8,
    title: "৮. Customer Insights",
    description: "কাস্টমার প্রোফাইল, সাইজ, কালার এবং পেমেন্ট স্ট্যাটাস ট্র্যাক করে",
    fullTitle: "Detailed Order Overview & Customer Insights",
    image: "/preview/order overview in the dashbord with customer info, sizes,cololr and payment digit . order 8.png",
  },
];

const STATS = [
  {
    icon: Zap,
    value: "< 2 min",
    label: "Screenshot → Order",
  },
  {
    icon: Target,
    value: "97%",
    label: "AI Accuracy",
  },
  {
    icon: Moon,
    value: "24/7",
    label: "Always Active",
  },
];

export function DemoSection() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [showLeftHint, setShowLeftHint] = React.useState(false);
  const [showRightHint, setShowRightHint] = React.useState(true);

  // Scroll handling
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftHint(scrollLeft > 20);
      setShowRightHint(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 364; // 340px width + 24px gap
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  // Lightbox navigation
  const nextImage = React.useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % DEMO_STEPS.length);
  }, []);

  const prevImage = React.useCallback(() => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + DEMO_STEPS.length) % DEMO_STEPS.length
    );
  }, []);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      switch (e.key) {
        case "ArrowLeft":
          prevImage();
          break;
        case "ArrowRight":
          nextImage();
          break;
        case "Escape":
          setLightboxOpen(false);
          break;
        case " ":
          e.preventDefault();
          nextImage();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, nextImage, prevImage]);

  // Prevent body scroll when lightbox is open
  React.useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxOpen]);

  return (
    <section className="py-20 bg-[#F7F5F3] relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <Badge
            className="bg-gradient-to-r from-[#605A57] to-[#37322f] text-white border-0 px-4 py-1.5 text-sm animate-shimmer"
            variant="default"
          >
            ✨ Live Demo
          </Badge>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            দেখুন Autex কীভাবে কাজ করে
            <span className="block text-xl md:text-2xl font-medium text-slate-500 mt-3">
              From Screenshot to Confirmed Order in 2 Minutes
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            এই ৮টি ধাপে AI সম্পূর্ণ order process automate করে — product
            recognition থেকে dashboard synchronization পর্যন্ত। কোনো manual intervention ছাড়াই। 🤖
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 mx-auto bg-[#F7F5F3] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6 text-[#37322f]" />
              </div>
              <div className="text-3xl font-bold text-[#37322f] mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-[#605A57] font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Container */}
        <div className="relative group">
          {/* Scroll Hints */}
          <AnimatePresence>
            {showLeftHint && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center gap-2 bg-white/90 backdrop-blur shadow-lg px-4 py-2 rounded-full pointer-events-none"
              >
                <ChevronLeft className="w-4 h-4 text-[#37322f]" />
              </motion.div>
            )}
            {showRightHint && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center gap-2 bg-white/90 backdrop-blur shadow-lg px-4 py-2 rounded-full pointer-events-none"
              >
                <ChevronRight className="w-4 h-4 text-[#37322f]" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Horizontal Scroll Area */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 py-8 px-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {DEMO_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                className="flex-none w-[280px] md:w-[340px] snap-center cursor-zoom-in"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => {
                  setCurrentImageIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <div className="relative aspect-[9/16] rounded-[20px] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group/card bg-slate-900">
                  {/* Image */}
                  <img
                    src={step.image || "/placeholder.svg"}
                    alt={step.fullTitle}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/card:scale-100 scale-110 opacity-90 group-hover/card:opacity-100"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                  {/* Step Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm">
                    <span className="text-xs font-bold text-blue-600">
                      ধাপ {step.id}
                    </span>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/card:translate-y-0">
                    <ZoomIn className="w-5 h-5 text-blue-600" />
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                    <p className="text-sm text-slate-200 opacity-90 line-clamp-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons (Desktop) */}
          <button
            onClick={() => {
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollBy({
                  left: -340,
                  behavior: "smooth",
                });
              }
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hidden md:flex items-center justify-center text-[#37322f] hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-[#37322f] disabled:opacity-50"
            disabled={!showLeftHint}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => {
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollBy({
                  left: 340,
                  behavior: "smooth",
                });
              }
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hidden md:flex items-center justify-center text-[#37322f] hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-[#37322f] disabled:opacity-50"
            disabled={!showRightHint}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {DEMO_STEPS.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentImageIndex
                  ? "bg-[#37322f] w-4"
                  : "bg-[#847971] hover:bg-[#605A57]"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 space-y-8">
          <p className="text-lg font-medium text-slate-700">
            💡 এই পুরো process মাত্র 2 মিনিটে সম্পন্ন হয়। আপনিও চান আপনার
            business এভাবে automate করতে?
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              className="bg-gradient-to-r from-[#605A57] to-[#37322f] text-white text-sm font-semibold font-sans rounded-full px-6 py-3 animate-shimmer"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start Free Trial — 14 Days Free
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full"
              onClick={() => alert("Full demo video functionality would be implemented here")}
            >
              Watch Full Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:rotate-90 z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Keyboard Hint */}
            <div className="absolute top-6 left-6 bg-white/10 backdrop-blur px-4 py-2 rounded-lg text-white/60 text-xs hidden md:block">
              ← → Navigate • ESC Close
            </div>

            {/* Image Container */}
            <div
              className="relative w-full h-full flex items-center justify-center p-4 md:p-12"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={currentImageIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={DEMO_STEPS[currentImageIndex].image || "/placeholder.svg"}
                alt={DEMO_STEPS[currentImageIndex].fullTitle}
                className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
              />

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur hover:bg-white/20 rounded-full flex items-center justify-center text-[#37322f] transition-all hover:scale-110"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur hover:bg-white/20 rounded-full flex items-center justify-center text-[#37322f] transition-all hover:scale-110"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Caption Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-20 pb-8 px-4 text-center">
                <div className="text-white/70 text-sm mb-2 font-medium">
                  ধাপ {DEMO_STEPS[currentImageIndex].id} / {DEMO_STEPS.length}
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">
                  {DEMO_STEPS[currentImageIndex].fullTitle}
                </h3>
                <p className="text-white/80 text-lg max-w-2xl mx-auto">
                  {DEMO_STEPS[currentImageIndex].description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

