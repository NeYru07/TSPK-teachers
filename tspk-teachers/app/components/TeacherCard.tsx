'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Teacher } from '../data/teachers';

interface TeacherCardProps {
  teacher: Teacher;
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="relative w-[24.125rem] h-[36.3125rem] cursor-pointer perspective-1000 rounded-2xl duration-200 ease-in-out md:hover:scale-105"
      style={{
        filter: 'drop-shadow(0 0 1.25rem rgba(0, 0, 0, 0.3))'
      }}
      onClick={handleFlip}
    >
      <div 
        className={`
          relative w-full h-full transition-all duration-500 transform-style-3d
          ${isFlipped ? 'rotate-y-180' : ''}
        `}
      >
        {/* Лицевая сторона */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="w-full h-full bg-white rounded-2xl border-5 border-[#0019FF] p-4 flex flex-col">
            {/* Фото */}
            <div className="relative w-full h-82.75 rounded-xl overflow-hidden mb-2.75">
              <Image
                src={teacher.photo}
                alt={teacher.name}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Информация */}
            <div className="flex-1 flex flex-col">
              <h3 className="font-semibold text-[2rem] mb-2.5">
                {teacher.name}
              </h3>
              <div className='w-full h-0.5 bg-(--Blue) mb-2.75'></div>
              <p className="w-[16.875rem] text-[1.4375rem] flex-1">
                {teacher.description}
              </p>
            </div>
            
            {/* Стрелочка */}
            <svg className='w-[3.6875rem] h-[3.6875rem] absolute right-7.25 bottom-6.75' width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="59" height="59" rx="29.5" fill="#0019FF"/>
            <path d="M28.9832 24.5006H29.0184L29 24.4844L31.5829 22.0009H31.6364L31.6089 21.9759L31.6012 21.9671V21.9832L31.5829 22.0009H26.4187L26.4003 21.9832V21.9671L26.3651 22.0009H21.1994V21.9494L21.1474 22.0009H16V21.9332L18.5294 19.5012H18.5997V19.4321L21.129 17H42V37.0697L39.4707 39.5003H39.4003V39.5694L36.871 42H36.7991V37.052L36.8526 37.0021H36.7991V32.035L36.8266 32.01L36.8358 32.0012H36.8174L36.7991 31.9835V27.0179L36.8174 27.0018H36.8358L36.8266 26.9915L36.7991 26.9665V27.0179L34.2177 29.5015L34.1994 29.4838V29.5176L31.618 32.0012H31.6012V32.0188L29.0184 34.5009H28.9832L29 34.5185L26.4187 37.0021H26.3651L26.3911 37.0271L23.8174 39.5003H23.7471L23.7823 39.5341L21.2177 42H21.129L18.5997 39.5694V39.5003H18.5294L16 37.0697V36.9844L18.5645 34.5185L18.5997 34.5523V34.4847L21.1734 32.01L21.1994 32.035V31.9835L23.7823 29.5015L23.8006 29.5176V29.4838L26.382 27.0018H26.4003V26.9841L28.9832 24.5006Z" fill="white"/>
            </svg>
          </div>
        </div>

        {/* Обратная сторона */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full rounded-2xl border-5 border-(--Blue) p-8.25 flex items-center justify-center">
            <p className="text-center text-[1.625rem] font-extrabold leading-relaxed">
              {teacher.quote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}