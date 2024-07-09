import { LuInstagram } from 'react-icons/lu';
import { FaFacebookF } from 'react-icons/fa';
import { TfiYoutube } from 'react-icons/tfi';
import { SiNaver } from 'react-icons/si';
import ktFooterImg from '../../assets/ktFooterImg.png';

const Footer = () => {
  return (
    <footer className="bg-slate-950 bg-opacity-90 py-4 text-white">
      <div className="container mx-auto flex items-center justify-between gap-4 px-5">
        <img src={ktFooterImg} alt="ktFooterImg" className="h-20 w-24" />

        <section>
          <p className="mb-2 text-lg font-bold">마법 군단 케이티 위즈</p>
          <nav className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/ktwiz.pr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="KT Wiz Instagram"
            >
              <LuInstagram
                size={30}
                className="rounded-lg border-2 p-1 text-white transition-colors hover:text-red-300"
              />
            </a>
            <a
              href="https://www.facebook.com/ktwiz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="KT Wiz Facebook"
            >
              <FaFacebookF
                size={30}
                className="rounded-lg border-2 p-1 text-white transition-colors hover:text-blue-500"
              />
            </a>
            <a
              href="https://www.youtube.com/c/ktwiztv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="KT Wiz YouTube"
            >
              <TfiYoutube
                size={30}
                className="rounded-lg border-2 p-1 text-white transition-colors hover:text-red-400"
              />
            </a>
            <a
              href="https://tv.naver.com/ktwiz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="KT Wiz Naver TV"
            >
              <SiNaver
                size={30}
                className="rounded-lg border-2 p-1 text-white transition-colors hover:text-yellow-400"
              />
            </a>
          </nav>
        </section>
      </div>

      <address className="mt-4 px-5 text-xs">
        <span className="font-bold">주소 </span>경기도 수원시 장안구 경수대로
        (조원동) 수원 케이티 위즈파크
      </address>

      <p className="mt-2 px-5 text-[10px] text-gray-400">
        &copy; 2024 Boongranii. All rights reserved. (ref. Kt Sports)
      </p>
    </footer>
  );
};

export default Footer;
