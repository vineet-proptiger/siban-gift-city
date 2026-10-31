'use client'
import React from 'react'

const highlights = [
  {
    title: 'Business Ecosystem',
    description: 'A growing corporate and innovation hub with global momentum right at your doorstep.',
    icon: 'fa-solid fa-briefcase'
  },
  {
    title: 'Seamless Connectivity',
    description: 'Essential landmarks within a kilometer, including metro stations, malls, schools, and world-class healthcare.',
    icon: 'fa-solid fa-train-subway'
  },
  {
    title: 'Lifestyle Infrastructure',
    description: 'Premier healthcare, education, retail, and scenic riverfront developments within the GIFT City ecosystem.',
    icon: 'fa-solid fa-city'
  },
  {
    title: 'High-Value Investment',
    description: 'Significant government backing, including tax incentives and streamlined regulations, fosters a favorable investment climate.',
    icon: 'fa-solid fa-chart-line'
  },
  {
    title: '60+ Modern Amenities',
    description: 'Spanning over 1 lakh sq. ft. of curated indoor and outdoor lifestyle, fitness, and recreation spaces.',
    icon: 'fa-solid fa-spa'
  },
  {
    title: 'IGBC Platinum Certified',
    description: 'Sustainable green development with a prime GIFT City address and 20ft grand showroom frontage.',
    icon: 'fa-solid fa-award'
  },
]

const Highlights = ({ setIsOpen }) => {
  return (
    <section id="highlights" className="w-full py-10 md:py-14 font-poppins" style={{ background: '#F9F8F3' }}>
      <div className="container mx-auto px-4" style={{ maxWidth: '1280px' }}>

        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-12" data-aos="fade-up">
          <span className="text-[#8B6A34] font-bold text-[14px] tracking-[2.5px] uppercase mb-2.5 block">
            PROJECT HIGHLIGHTS
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight md:whitespace-nowrap">
            What Makes Siban Gift City Stand Apart
          </h2>
        </div>

        {/* 6 Cards: 3 per row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {highlights.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={(i * 50).toString()}
              className="group relative bg-white rounded-[20px] p-7 border border-[#EAE6DF] shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] hover:border-[#8B6A34]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Top Row: Icon & Title Side-by-Side */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-[52px] h-[52px] min-w-[52px] min-h-[52px] rounded-[14px] bg-[#F4EFE6] text-[#8B6A34] group-hover:bg-[#111111] group-hover:text-white flex items-center justify-center text-[22px] transition-all duration-300 shadow-sm flex-shrink-0 group-hover:scale-105">
                    <i className={item.icon}></i>
                  </div>
                  <h4 className="text-[#111111] font-bold text-[17px] sm:text-[18px] leading-snug group-hover:text-[#8B6A34] transition-colors duration-200 m-0">
                    {item.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-[#4A5568] text-[14.5px] font-medium leading-[1.65] m-0">
                  {item.description}
                </p>
              </div>

              {/* Subtle bottom accent line that expands on hover */}
              <div className="w-12 h-[3px] bg-[#8B6A34]/25 group-hover:bg-[#8B6A34] group-hover:w-full rounded-full mt-6 transition-all duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Highlights
