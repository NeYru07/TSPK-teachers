import Image from "next/image";
import Card3D from "./components/Card3D";
import { teachers } from './data/teachers';
import TeacherCard from './components/TeacherCard';

export default function Home() {
  return (
    <>
    <main id="main" className="md:w-[108.125rem] w-full h-fit md:mx-23.75 md:mt-40 mt-24 md:mb-64 mb-30 flex relative flex-col md:gap-20 gap-17.25 items-center">
      <div className="flex flex-col gap-0 items-center">
        <h1 className="UNB font-bold md:text-[6.25rem] text-[1.75rem] text-center">Наши преподаватели</h1>
        <div className="text-white  md:w-[28.5625rem] w-[8.1875rem] h-11.5 md:h-[7.875rem] UNB bg-[url(/images/bg-gradient.png)] pb-5"><p className="font-bold md:text-[6.25rem] text-[1.75rem] text-center md:leading-30 pl-7">ТСПК</p></div>
      </div>
      <p className="md:w-[82.875rem] w-[24.1875rem] text-center md:text-4xl text-[1rem]">“За каждым успешным студентом стоят мудрые наставники.  Познакомьтесь с теми, кто делится знаниями, вдохновляет и верит в своих  учеников”</p>
      <Image
        src="/svg/bigStar.svg"
        alt="Big star"
        width={199}
        height={198}
        className="md:w-[12.4375rem] w-[6.2438rem] md:h-[12.375rem] h-[6.2125rem] absolute md:top-28 top-10.5 left-0"
      />
      <Image
        src="/svg/stars.svg"
        alt="Stars"
        width={104.5}
        height={108.5}
        className="md:w-[6.5313rem] w-[3.5625rem] md:h-[6.7813rem] h-16 absolute md:top-0 md:right-0 top-8.25 right-3.5"
      />
    </main>


    {/* 2 Вторая секция 2 */}
    <section id="values" className="flex flex-col gap-10 items-center w-fit h-fit md:mb-30 mb-12.25">
      <h1 className="font-semibold md:text-5xl text-[1.8125rem] w-fit">Ценности преподователей</h1>
      <div className='flex flex-col md:flex-row gap-5 items-center'>
        <Card3D className="w-[16.8rem] h-[19.3rem] bg-[var(--Blue)] rounded-[2.875rem] flex items-center justify-center">
          <Image src="/images/graduation-hat.png" alt="Graduation hat" width={226} height={226} className="w-[14.125rem] h-auto" />
        </Card3D>
        
        <Card3D className="w-[23.625rem] h-[28.625rem] bg-[#606060] rounded-[2.875rem] flex items-center justify-center">
          <Image src="/images/reading-book.png" alt="reading book" width={378} height={314} className="w-[23.625rem] h-auto" />
        </Card3D>
        
        <Card3D className="w-[27.1875rem] h-[36rem] bg-[var(--Blue)] rounded-[4.5rem] flex items-center justify-center">
          <Image src="/images/red-pixel-heart.png" alt="pixel heart" width={435} height={374} className="w-[27.1875rem] h-auto" />
        </Card3D>
        
        <Card3D className="w-[23.625rem] h-[28.625rem] bg-[#606060] rounded-[2.875rem] flex items-center justify-center">
          <Image src="/images/books-and-apple.png" alt="Apple on books" width={372} height={420} className="w-[23.25rem] h-auto" />
        </Card3D>
        
        <Card3D className="w-[16.8rem] h-[19.3rem] bg-[var(--Blue)] rounded-[2.875rem] flex items-center justify-center">
          <Image src="/images/pen-folder.png" alt="Pen and folder" width={283} height={283} className="w-[17.6875rem] h-auto" />
        </Card3D>
      </div>
    </section>


    {/* 3 Третий блок 3 */}
    <section id="teachers" className="w-fit h-fit md:py-9.25 py-10.5 md:px-12 px-6 rounded-[5rem] border-1 border-black flex flex-col md:gap-10.25 gap-20 items-center">
      <div className='flex md:justify-between md:items-center flex-col md:flex-row gap-6.5'>
        <h1 className="font-semibold md:text-5xl text-[2rem]">Преподаватели IT-<br />отделения</h1>
        <p className="w-fit font-semibold md:text-2xl text-[1rem] text-[#8A8585]">Отделение педагогов, специализирующихся<br /> на сфере IT (Программирование, дизайн и<br /> прочее)</p>
      </div>
      <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-y-[4.875rem] xl:gap-x-[10.1875rem] gap-y-2.5 md:gap-x-20 md:gap-y-15'>
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </section>
    </>
  );
}
