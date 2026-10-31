'use client'
import React from 'react'

const locationList = [
  {
    title: 'Lilavati Hospital',
    desc: 'Advanced multi-speciality medical & healthcare services',
    time: '1.3 KM',
    icon: 'fa-solid fa-hospital',
  },
  {
    title: 'MIRA Multi Speciality Hospital',
    desc: 'Modern healthcare infrastructure & emergency trauma care',
    time: '11.4 KM',
    icon: 'fa-solid fa-house-medical',
  },
  {
    title: 'Gujarat National Law University',
    desc: 'Premier National Law University (GNLU) campus',
    time: '5.1 KM',
    icon: 'fa-solid fa-graduation-cap',
  },
  {
    title: 'PDEU Gandhinagar',
    desc: 'Leading higher education & research academic institute',
    time: '4.8 KM',
    icon: 'fa-solid fa-school',
  },
  {
    title: 'GIFT City Metro Station',
    desc: 'Fast transit connecting Gandhinagar & Ahmedabad metro corridors',
    time: '1.8 KM',
    icon: 'fa-solid fa-train-subway',
  },
  {
    title: 'GIFT City Club & Grand Mercure',
    desc: 'Premier business club, fine dining & luxury hospitality',
    time: '2.0 KM',
    icon: 'fa-solid fa-hotel',
  },
  {
    title: 'Ahmedabad International Airport',
    desc: 'Signal-free drive to Sardar Vallabhbhai Patel Airport (SVPI)',
    time: '16.5 KM',
    icon: 'fa-solid fa-plane-departure',
  },
]

const Location = () => {
  return (
    <section id="location" className="location-section py-10 md:py-14 bg-white font-poppins overflow-hidden" style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-[1300px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[850px] mx-auto mb-8 md:mb-10" data-aos="fade-up">
          <span className="text-[#20658F] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2.5 block">
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
                className="group bg-white hover:bg-[#F2F7FA] border border-[#E0ECF2] hover:border-[#20658F]/60 rounded-[12px] px-3.5 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-200"
              >
                {/* Left side: Icon & Title + Context */}
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E8F1F6] group-hover:bg-[#111111] text-[#111111] group-hover:text-[#20658F] flex items-center justify-center text-[13px] sm:text-[14px] shrink-0 transition-colors duration-200">
                    <i className={`${item.icon} text-[#111111] group-hover:text-[#20658F]`}></i>
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
                <span className="bg-[#E8F1F6] group-hover:bg-[#111111] text-[#111111] group-hover:text-white font-bold text-[11px] sm:text-[12px] px-2.5 sm:px-3 py-1 rounded-full whitespace-nowrap transition-colors duration-200 shrink-0 shadow-xs">
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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13431.005032962852!2d72.698393!3d23.162465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e81d1b51857bb%3A0x2fcf2fe78415716e!2sSiban%20at%20Gift%20City%20-%20Project%20by%20United%20Yogi%20LLP!5e1!3m2!1sen!2sin!4v1793447712426!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Siban at Gift City - Project by United Yogi LLP"
              className="w-full h-full block flex-1"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Location
