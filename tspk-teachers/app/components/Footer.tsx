import Image from "next/image";

export default function Footer() {
 return(
  <footer className="md:w-[101.5rem] w-full flex flex-col md:flex-row gap-16.5 justify-between py-11.25 md:px-17.5 px-11.25 rounded-tl-[1.0625rem] rounded-tr-[1.0625rem] bg-[#272727] items-center mt-15">
    <nav className="flex flex-col md:flex-row gap-7.25 items-center">
      <a className="text-white white-a" href="#main">Главная</a>
      <a className="text-white white-a" href="#teachers">Преподаватели</a>
      <a className="text-white white-a" href="#values">Ценности</a>
    </nav>
    <svg className="w-[7.5rem] h-[3rem]" width="120" height="48" viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="120" height="48" rx="11" fill="white"/>
    <path d="M22 37H14.8V14.6H6.4V9H30.4V14.6H22V37ZM32.3647 31.2C39.6714 31.6 44.618 31.8 47.2047 31.8C47.818 31.8 48.298 31.6267 48.6447 31.28C49.018 30.9067 49.2047 30.4133 49.2047 29.8V26.2H40.0047C37.2047 26.2 35.1647 25.5733 33.8847 24.32C32.6314 23.04 32.0047 21 32.0047 18.2V17C32.0047 14.2 32.6314 12.1733 33.8847 10.92C35.1647 9.64 37.2047 9 40.0047 9H54.0447V14.6H41.6047C40.0047 14.6 39.2047 15.4 39.2047 17V17.8C39.2047 19.4 40.0047 20.2 41.6047 20.2H48.8047C51.418 20.2 53.338 20.8133 54.5647 22.04C55.7914 23.2667 56.4047 25.1867 56.4047 27.8V29.8C56.4047 32.4133 55.7914 34.3333 54.5647 35.56C53.338 36.7867 51.418 37.4 48.8047 37.4C47.4447 37.4 46.0047 37.3733 44.4847 37.32L40.8047 37.16C38.0847 37.0267 35.2714 36.84 32.3647 36.6V31.2ZM60.0016 9H76.8016C79.6016 9 81.6282 9.64 82.8816 10.92C84.1616 12.1733 84.8016 14.2 84.8016 17V21C84.8016 23.8 84.1616 25.84 82.8816 27.12C81.6282 28.3733 79.6016 29 76.8016 29H67.2016V37H60.0016V9ZM77.6016 17C77.6016 15.4 76.8016 14.6 75.2016 14.6H67.2016V23.4H75.2016C76.8016 23.4 77.6016 22.6 77.6016 21V17ZM95.6 37H88.4V9H95.6V20H99.2L105.44 9H113.04L105.2 22.8L113 37H105.4L99.2 25.6H95.6V37Z" fill="#0019FF"/>
    </svg>
    <div className='flex gap-6.25 bg-white rounded-[.6875rem] items-center'>
        <p className="text-2xl ml-1.5">Классы</p>
        <button className="flex py-2.5 px-5 bg-(--Blue) border-none rounded-[.625rem] text-2xl text-white items-center hover:bg-(--hover-btn)">Наши контакты
        <svg className="w-8.5 h-8.5" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.6292 14.7256L12.0202 23.3347L10.606 21.9205L19.215 13.3114L11.2954 13.3114L11.3131 11.3138H22.6268V22.6276L20.6292 22.6452L20.6292 14.7256Z" fill="white"/>
        </svg>
        </button>
      </div>
  </footer>
 );
}