"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How do I purchase tickets?",
    answer:
      "You can purchase tickets directly through our website. Simply browse the upcoming events, select the event you're interested in, and click on 'Buy Tickets'. Follow the checkout process to complete your purchase.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All transactions are secure and encrypted.",
  },
  {
    question: "Can I get a refund if I can't attend an event?",
    answer:
      "Refund policies vary by event. Generally, tickets can be refunded up to 7 days before the event date. Please check the specific event details for the exact refund policy.",
  },
  {
    question: "How do I receive my tickets?",
    answer:
      "After purchasing, your tickets will be emailed to you as e-tickets. You can either print them or show them on your mobile device at the venue entrance.",
  },
  {
    question: "Are there age restrictions for events?",
    answer:
      "Age restrictions vary by event. Some concerts are all-ages, while others may be 18+ or 21+. Age requirements are clearly listed on each event page.",
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-gray-800 rounded-lg overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${activeIndex === index ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 text-gray-400">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
