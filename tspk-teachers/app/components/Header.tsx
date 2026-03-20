"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
  const mediaQuery = window.matchMedia('(min-width: 768px)');
  
  const handleScroll = () => {
    if (!mediaQuery.matches) return;
    setScrolled(window.scrollY > 5);
  };
  
  const handleChange = () => {
    if (mediaQuery.matches) {
      setScrolled(window.scrollY > 5);
    } else {
      setScrolled(false); // Сбрасываем на мобильных
    }
  };
  
  // Инициализация
  handleChange();
  
  window.addEventListener('scroll', handleScroll);
  mediaQuery.addEventListener('change', handleChange);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
    mediaQuery.removeEventListener('change', handleChange);
  };
}, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Очистка при размонтировании
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
    <header
      className={`
        md:sticky top-0 z-50 transition-all duration-300 md:w-[98rem] h-fit md:py-7 md:px-7.5 flex justify-between md:border-b-1 md:border-b-[#313131] items-center w-[27.375rem]
        ${scrolled ? 'md:bg-white/80 md:backdrop-blur-md md:border md:border-l-[#313131] md:border-r-[#313131] md:shadow-sm' : 'bg-transparent'}
      `}
    >
      <Image src="logo.svg" alt="Logo" width={120} height={48} />
      <nav className="md:flex hidden gap-7.5 w-fit h-fit">
        <a href="#main">Главная</a>
        <a href="#teachers">Преподаватели</a>
        <a href="#values">Ценности</a>
      </nav>
      <div className="md:flex hidden gap-6.25 bg-white rounded-[.6875rem] items-center">
        <p className="text-2xl ml-1.5">Классы</p>
        <button className="flex py-2.5 px-5 bg-(--Blue) border-none rounded-[.625rem] text-2xl text-white items-center hover:bg-(--hover-btn)">
          Наши контакты
          <svg
            className="w-8.5 h-8.5"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.6292 14.7256L12.0202 23.3347L10.606 21.9205L19.215 13.3114L11.2954 13.3114L11.3131 11.3138H22.6268V22.6276L20.6292 22.6452L20.6292 14.7256Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

        {/* Кнопка бургер меню */}
      <button 
          className="md:hidden flex flex-col gap-1.5 p-2 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`
            w-6 h-0.5 bg-[#313131] transition-all duration-300
            ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}
          `} />
          <span className={`
            w-6 h-0.5 bg-[#313131] transition-all duration-300
            ${mobileMenuOpen ? 'opacity-0' : ''}
          `} />
          <span className={`
            w-6 h-0.5 bg-[#313131] transition-all duration-300
            ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}
          `} />
        </button>
    </header>


<div className={`
        md:hidden absolute left-0 right-0 z-40 bg-white shadow-lg
        transition-all duration-300 overflow-hidden
        ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <nav className="flex flex-col items-center gap-6 pb-8 pt-16 px-4">
          <a 
            href="#main" 
            className="text-xl font-medium hover:text-[#0044CC] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Главная
          </a>
          <a 
            href="#teachers" 
            className="text-xl font-medium hover:text-[#0044CC] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Преподаватели
          </a>
          <a 
            href="#values" 
            className="text-xl font-medium hover:text-[#0044CC] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Ценности
          </a>
          <div className="flex gap-6.25 bg-[#f7f3f0] rounded-[.6875rem] items-center">
            <p className="text-xl ml-1.5">Классы</p>
            <button 
              className="flex py-1.5 px-2.5 bg-(--Blue) border-none rounded-[.625rem] text-2xl text-white items-center hover:bg-(--hover-btn)"
              onClick={() => setMobileMenuOpen(false)}
            >
              Наши контакты
              <svg
                className="w-8.5 h-8.5"
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.6292 14.7256L12.0202 23.3347L10.606 21.9205L19.215 13.3114L11.2954 13.3114L11.3131 11.3138H22.6268V22.6276L20.6292 22.6452L20.6292 14.7256Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
      </>
  );
}
