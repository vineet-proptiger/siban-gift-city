'use client'
import React from 'react'

const locationList = [
  {
    title: 'GIFT City Metro Station',
    desc: 'Seamless rapid transit connecting Gandhinagar and Ahmedabad',
    time: '01 KM',
    icon: 'fa-solid fa-train-subway',
  },
  {
    title: 'IFSC & Global Business Hub',
    desc: 'India’s premier international financial and corporate ecosystem',
    time: 'Within Hub',
    icon: 'fa-solid fa-building-columns',
  },
  {
    title: 'World-Class Healthcare',
    desc: 'Leading multi-specialty hospitals and emergency care units',
    time: '01 KM',
    icon: 'fa-solid fa-hospital',
  },
  {
    title: 'International Schools & Academies',
    desc: 'Top global educational institutions within GIFT City',
    time: '01 KM',
    icon: 'fa-solid fa-graduation-cap',
  },
  {
    title: 'Malls & Retail High Street',
    desc: 'Premier shopping, dining, and vibrant entertainment avenues',
    time: '01 KM',
    icon: 'fa-solid fa-bag-shopping',
  },
  {
    title: 'Scenic Riverfront Promenade',
    desc: 'Expansive landscaped riverfront developments & walking trails',
    time: '02 KM',
    icon: 'fa-solid fa-water',
  },
  {
    title: 'Ahmedabad International Airport',
    desc: 'Smooth signal-free connectivity to SVPI Airport',
    time: '15 Mins',
    icon: 'fa-solid fa-plane-departure',
  },
]

const Location = () => {
  return (
    <section id="location" className="location-section py-10 md:py-14 bg-white font-poppins overflow-hidden" style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-[1300px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[850px] mx-auto mb-8 md:mb-10" data-aos="fade-up">
          <span className="text-[#8B6A34] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2.5 block">
            LOCATION ADVANTAGES
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            A Location That Keeps You Connected
          </h2>
        </div>

        {/* ── 2-Column Grid: Left List (8 Cards) / Right Map (Equal Height) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Left: 7 Location Points */}
          <div className="flex flex-col justify-between gap-2.5 sm:gap-3 h-full">
            {locationList.map((item, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={(index * 40).toString()}
                className="group bg-white hover:bg-[#F9F8F3] border border-[#EAE6DF] hover:border-[#8B6A34]/60 rounded-[12px] px-3.5 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-200"
              >
                {/* Left side: Icon & Title + Context */}
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F4EFE6] group-hover:bg-[#111111] text-[#111111] group-hover:text-[#8B6A34] flex items-center justify-center text-[13px] sm:text-[14px] shrink-0 transition-colors duration-200">
                    <i className={`${item.icon} text-[#111111] group-hover:text-[#8B6A34]`}></i>
                  </div>
                  <div className="min-w-0 flex flex-col">
                    <span className="text-[#1f2937] group-hover:text-[#111111] font-bold text-[13px] sm:text-[14px] transition-colors duration-200 leading-snug truncate">
                      {item.title}
                    </span>
                    <span className="text-gray-500 text-[11px] sm:text-[11.5px] transition-colors duration-200 leading-tight truncate">
                      {item.desc}
                    </span>
                  </div>
                </div>

                {/* Right side: Time Badge */}
                <span className="bg-[#F4EFE6] group-hover:bg-[#111111] text-[#111111] group-hover:text-white font-bold text-[11px] sm:text-[12px] px-2.5 sm:px-3 py-1 rounded-full whitespace-nowrap transition-colors duration-200 shrink-0 shadow-xs">
                  {item.time}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Google Maps Embed (Exact Equal Height) */}
          <div 
            className="relative w-full h-full min-h-[340px] lg:min-h-0 rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-200 bg-gray-100 flex"
            data-aos="fade-left"
          >
            <iframe
              src="https://maps.google.com/maps?q=GIFT+City+Gandhinagar+Gujarat&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Siban Gift City, Gandhinagar Location Map"
              className="w-full h-full block flex-1"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Location
