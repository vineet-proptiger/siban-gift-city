'use client'
import React from 'react'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const Overview = ({ setIsOpen }) => {
  return (
    <section id="overview" className="w-full py-12 md:py-16 bg-white font-poppins">
      <div className="container mx-auto px-4" style={{ maxWidth: '1240px' }}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:mx-[-16px]">
          
          {/* Image Column */}
          <div className="w-full lg:w-1/2 lg:px-[16px] mb-10 lg:mb-0 flex justify-center lg:sticky lg:top-24">
            <div className="relative w-full max-w-[500px] h-[340px] sm:h-[390px] md:h-[430px] lg:h-[440px] rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
               <Image 
                 src={overviewImage} 
                 alt="About Siban Gift City" 
                 fill 
                 className="object-cover" 
                 sizes="(max-width: 1024px) 100vw, 50vw" 
               />
               <div className="absolute" style={{ right: '8px', bottom: '50%', transform: 'translateY(50%) rotate(-90deg)', transformOrigin: 'center right' }}>
                 <span className="text-[#e0e0e0] text-[10px] tracking-widest uppercase" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Artistic Impression</span>
               </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 lg:px-[16px] lg:pl-12">
            <div>
              <span className="text-[#20658F] font-bold text-[13px] sm:text-[14px] tracking-[2.5px] uppercase mb-2 block">
                LUXURY LIVING
              </span>
              <h2 className="text-[#111111] text-[24px] sm:text-[28px] md:text-[32px] font-black leading-[1.15] mb-4 tracking-tight">
                Project Overview
              </h2>

              <div className="mb-6 space-y-3">
                <p className="text-[#4A5568] text-[15px] leading-[1.8] text-left m-0">
                  For those looking to buy a residential property, here comes one of the choicest offerings in Gandhinagar, at Gift City. Brought to you by <strong className="text-[#111111] font-semibold">United Yogi LLP</strong>, <strong className="text-[#111111] font-semibold">Siban</strong> is among the newest addresses for homebuyers.
                </p>
                <p className="text-[#4A5568] text-[15px] leading-[1.8] text-left m-0">
                  There are 1, 2 &amp; 3 BHK apartments for sale in Siban Gift City, Gandhinagar. This is a new launch project right now, and is expected to be delivered by <strong className="text-[#20658F] font-semibold">Dec, 2030</strong>, offering a variety of options to choose from in a varied budget range.
                </p>
              </div>

              {/* ── Project Stats Grid (From Highlights) ── */}
              <div className="grid grid-cols-2 gap-4 p-5 rounded-2xl bg-[#F2F7FA] border border-[#E0ECF2]">
                <div>
                  <div className="text-[22px] sm:text-[26px] font-black text-[#111111] tracking-tight">60+</div>
                  <div className="text-[11px] sm:text-[12px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">AMENITIES (1 LAKH SQ. FT.)</div>
                </div>
                <div className="border-l border-[#E0ECF2] pl-4">
                  <div className="text-[20px] sm:text-[24px] font-black text-[#111111] tracking-tight">IGBC Platinum</div>
                  <div className="text-[11px] sm:text-[12px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">CERTIFIED</div>
                </div>
                <div className="border-t border-[#E0ECF2] pt-3">
                  <div className="text-[22px] sm:text-[26px] font-black text-[#111111] tracking-tight">GIFT City</div>
                  <div className="text-[11px] sm:text-[12px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">PRIME ADDRESS</div>
                </div>
                <div className="border-t border-l border-[#E0ECF2] pt-3 pl-4">
                  <div className="text-[22px] sm:text-[26px] font-black text-[#111111] tracking-tight">Dec, 2030</div>
                  <div className="text-[11px] sm:text-[12px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">EXPECTED DELIVERY</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Overview
