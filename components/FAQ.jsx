'use client'
import React, { useState } from 'react'

const faqData = [
  {
    question: 'What configurations are available at Siban Gift City?',
    answer: (
      <>
        Siban Gift City offers <strong className="font-semibold text-[#111111]">1, 2 &amp; 3 BHK apartments</strong> designed with contemporary architecture, optimal space utilization, and top-tier amenities for modern urban living.
      </>
    ),
  },
  {
    question: 'What is the starting price of Siban Gift City?',
    answer: (
      <>
        The starting price is <strong className="font-semibold text-[#111111]">₹ 1 Cr* Onwards</strong>. Exclusive new launch benefits and special early-bird offers are available upon enquiry for priority registrations.
      </>
    ),
  },
  {
    question: 'Who is the developer of Siban Gift City?',
    answer:
      'Siban Gift City is brought to you by United Yogi LLP, bringing exceptional craftsmanship, sustainable development, and superior lifestyle living to Gandhinagar.',
  },
  {
    question: 'Where exactly is Siban Gift City located?',
    answer: (
      <>
        The project is prime located within <strong className="font-semibold text-[#111111]">GIFT City, Gandhinagar, Gujarat</strong>, offering unmatched connectivity to metro stations, corporate hubs, international schools, malls, and riverfront developments.
      </>
    ),
  },
  {
    question: 'What amenities and green features are provided?',
    answer:
      'Siban Gift City is an IGBC Platinum Certified development featuring 60+ curated amenities across 1 lakh sq. ft., including club facilities, swimming pool, wellness spaces, landscaped gardens, 20ft showroom frontage, and 24/7 security.',
  },
  {
    question: 'What is the possession date and RERA registration of the project?',
    answer:
      'Siban Gift City is currently a New Launch project with expected delivery by December 2030. The RERA registration number is MAA14625.',
  },
]

const FAQ = () => {
  // First item open by default, set to index 0
  const [openIdx, setOpenIdx] = useState(0)

  const toggleAccordion = (index) => {
    setOpenIdx(prev => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="w-full py-10 md:py-14 bg-white font-poppins overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1280px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[800px] mx-auto mb-12 sm:mb-14" data-aos="fade-up">
          <span className="text-[#20658F] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-3 block">
            FAQ
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion Container */}
        <div 
          className="max-w-[960px] mx-auto border border-[#dee2e6] rounded-[12px] sm:rounded-[14px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] divide-y divide-[#dee2e6]"
          data-aos="fade-up"
        >
          {faqData.map((item, index) => {
            const isOpen = openIdx === index

            return (
              <div key={index} className="bg-white">
                {/* Accordion Button */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className={`w-full py-4 px-5 sm:py-5 sm:px-7 flex items-center justify-between gap-4 text-left text-[15.5px] sm:text-[17px] transition-all duration-200 ${
                    isOpen
                      ? 'bg-[#F4EFE6] text-[#111111] font-bold shadow-inner'
                      : 'bg-white text-[#212529] font-medium hover:bg-[#fafafa]'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  
                  {/* Chevron Icon */}
                  <span className={`text-current transition-transform duration-300 transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="bg-white px-5 py-5 sm:px-7 sm:py-6 text-[#343a40] text-[15px] sm:text-[15.5px] leading-[1.75] border-t border-[#dee2e6]/80 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQ
