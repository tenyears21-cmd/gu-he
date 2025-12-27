import React, { useState, useEffect } from 'react';
import { Play, Menu, X, Camera, Film, Globe } from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10
      });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    { id: 1, title: "中原脉动", category: "CITY NARRATIVE", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1200" },
    { id: 2, title: "蓝星掠影", category: "NATURE DOCUMENTARY", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1000" },
    { id: 3, title: "未来启示", category: "COMMERCIAL ART", image: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&q=80&w=1000" }
  ];

  return (
    <div className="min-h-screen bg-[#080a0f] text-[#e0e0e0] font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden tracking-wider">

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 z-[1] opacity-40 mix-blend-screen animate-color-flow">
          <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-600/20 blur-[150px]"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-purple-600/15 blur-[150px]"></div>
          <div className="absolute top-[30%] right-[10%] w-[50%] h-[50%] rounded-full bg-emerald-600/10 blur-[130px]"></div>
        </div>

        <div
          className="absolute inset-0 transition-transform duration-[4s] ease-out scale-105 animate-subtle-zoom z-[0]"
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=2000"
            alt="Cinematic Background"
            className="w-full h-full object-cover opacity-20 contrast-[1.2] brightness-75"
          />
        </div>

        <div className="absolute inset-0 z-[2]">
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080a0f]/60 to-[#080a0f]"></div>
        </div>
      </div>

      <nav className={`fixed w-full z-50 transition-all duration-1000 px-8 md:px-20 flex justify-between items-center ${isScrolled ? 'bg-[#080a0f]/80 backdrop-blur-3xl py-5 border-b border-white/5' : 'bg-transparent py-12'}`}>
        <div className="flex items-baseline gap-4 group cursor-pointer">
          <span className="text-2xl font-black tracking-[0.4em] text-white">顾禾传媒</span>
          <span className="text-[8px] text-white/30 font-light tracking-[0.6em] hidden sm:block uppercase">GUHE MEDIA</span>
        </div>

        <div className="hidden lg:flex items-center space-x-16 text-[11px] font-medium opacity-60">
          {['作品集', '工艺', '关于我们', '联系我们'].map((item) => (
            <a key={item} href={`#${item}`} className="hover:opacity-100 hover:text-white transition-all duration-500 relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-indigo-400 transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-8">
          <button className="hidden md:block text-[10px] font-black border border-white/10 px-8 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-700 uppercase backdrop-blur-md">
            CONNECT
          </button>
          <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden z-10">
        <div className="relative z-10 text-center space-y-16">
          <div className="space-y-8">
            <div className="flex items-center justify-center gap-4 opacity-40">
              <div className="w-8 h-[1px] bg-indigo-400"></div>
              <span className="text-[10px] tracking-[1.2em] uppercase font-light text-white">Aesthetic & Narrative</span>
              <div className="w-8 h-[1px] bg-indigo-400"></div>
            </div>
            <h1 className="text-6xl md:text-[130px] font-black tracking-tighter leading-[0.85] flex flex-col items-center">
              <span className="animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200 text-white">视以载道</span>
              <span className="text-indigo-300/20 font-extralight italic mt-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500 scale-90">禾生万象</span>
            </h1>
          </div>

          <div className="flex justify-center pt-8 animate-in fade-in zoom-in duration-1000 delay-1000">
            <button className="group relative flex flex-col items-center gap-6">
              <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-indigo-500/50 transition-all duration-1000 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
                <Play size={16} fill="white" className="relative z-10 group-hover:fill-indigo-400 transition-colors duration-500" />
              </div>
              <span className="text-[9px] tracking-[0.8em] text-white/40 group-hover:text-indigo-300 transition-colors uppercase font-medium">播放展示短片</span>
            </button>
          </div>
        </div>
      </section>

      <section id="工艺" className="relative py-60 px-8 md:px-20 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/10 rounded-[60px] overflow-hidden backdrop-blur-md">
            {[
              { icon: <Globe size={18} />, title: "全球视野", desc: "以独特的艺术视角链接全球，打破地域维度的视觉界限。" },
              { icon: <Camera size={18} />, title: "8K 标准", desc: "坚持全流程 8K 影像标准，每一帧都是对大美星空的深度致敬。" },
              { icon: <Film size={18} />, title: "叙事之魂", desc: "植根厚土，用现代电影语言重新定义东方美学。" }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#0c0f16]/60 p-16 hover:bg-white/[0.03] transition-all duration-1000 flex flex-col gap-12 group">
                <div className="text-white/20 group-hover:text-indigo-400 transition-colors duration-700">{item.icon}</div>
                <div className="space-y-6">
                  <h3 className="text-xl font-bold tracking-[0.3em] text-white/90 group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed font-light group-hover:text-white/60 transition-colors duration-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="作品集" className="py-40 px-8 md:px-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-32 gap-8">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter italic uppercase text-white">Gallery<span className="text-indigo-500/20">.</span></h2>
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-white/30 tracking-[1em] font-bold uppercase mb-4">Archives 2024-2025</span>
              <div className="w-40 h-[1px] bg-indigo-500/20"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden bg-white/[0.02] border border-white/5 rounded-3xl mb-8 transition-all duration-1000 shadow-2xl group-hover:shadow-indigo-500/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out saturate-[0.85] group-hover:saturate-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-12 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                    <p className="text-[8px] tracking-[0.6em] mb-4 text-indigo-300 opacity-60 uppercase">{project.category}</p>
                    <h4 className="text-3xl font-bold italic tracking-tight leading-none text-white">{project.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="联系我们" className="relative pt-60 pb-20 px-8 md:px-20 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0c0f16]/80 backdrop-blur-[50px] border border-white/10 rounded-[80px] p-12 md:p-32 relative overflow-hidden shadow-2xl">
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/[0.05] rounded-full blur-[120px] translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 flex flex-col items-start gap-16">
              <div className="space-y-8">
                <div className="flex items-center gap-4 opacity-40 mb-8">
                  <span className="text-[10px] tracking-[1.2em] uppercase font-bold text-indigo-300">Brand Philosophy</span>
                </div>
                <h2 className="text-7xl md:text-[110px] font-black tracking-tighter leading-[0.85] flex flex-col">
                  <span className="text-white hover:text-indigo-400 transition-colors duration-700">全域影像</span>
                  <span className="text-indigo-300/10 italic mt-4 font-extralight">叙事无界</span>
                </h2>
              </div>

              <div className="w-full space-y-24">
                <div className="flex flex-col gap-6">
                  <span className="text-[9px] text-white/30 tracking-[1em] uppercase font-bold">Initiate Connection</span>
                  <a href="mailto:hello@guhemedia.com" className="text-4xl md:text-6xl lg:text-7xl font-thin tracking-tighter text-white/80 hover:text-indigo-400 transition-all duration-500 border-b border-white/5 pb-4 max-w-fit">
                    hello@guhemedia.com
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-32 text-[10px] font-bold">
                  <div className="space-y-8">
                    <p className="text-white/20 tracking-[0.6em] uppercase">Links</p>
                    <ul className="space-y-4">
                      {['Story', 'Craft', 'Artist', 'Collection'].map(link => (
                        <li key={link}>
                          <a href="#" className="text-white/40 hover:text-indigo-300 transition-all duration-500 flex items-center gap-2 group">
                            <span className="w-0 h-[1px] bg-indigo-400 transition-all duration-500 group-hover:w-4"></span>
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-8">
                    <p className="text-white/20 tracking-[0.6em] uppercase">Social</p>
                    <ul className="space-y-4">
                      {['Wechat', 'Instagram', 'Behance', 'Vimeo'].map(link => (
                        <li key={link}>
                          <a href="#" className="text-white/40 hover:text-indigo-300 transition-all duration-500 flex items-center gap-2 group">
                            <span className="w-0 h-[1px] bg-indigo-400 transition-all duration-500 group-hover:w-4"></span>
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-48 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-[9px] text-white/20 tracking-[0.8em] uppercase">
              <p>© 2025 GUHE MEDIA · 顾禾传媒 · ALL RIGHTS RESERVED</p>
            </div>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;400;800&family=Noto+Serif+SC:wght@200;900&display=swap');

        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
          cursor: crosshair;
          background: #080a0f;
        }

        h1, h2, h3, h4 { font-family: 'Noto Serif SC', serif; }

        ::-webkit-scrollbar { width: 0px; }
        html { scroll-behavior: smooth; }

        @keyframes subtle-zoom {
          0% { transform: scale(1.05); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1.05); }
        }

        @keyframes color-flow {
          0% { transform: rotate(0deg) scale(1); opacity: 0.3; }
          50% { transform: rotate(180deg) scale(1.1); opacity: 0.5; }
          100% { transform: rotate(360deg) scale(1); opacity: 0.3; }
        }

        .animate-subtle-zoom {
          animation: subtle-zoom 20s ease-in-out infinite;
        }

        .animate-color-flow {
          animation: color-flow 25s linear infinite;
        }

        .animate-in { animation-fill-mode: forwards; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-in-from-bottom { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes zoom-in { from { transform: scale(0.98); opacity: 0; } to { transform: scale(1); opacity: 1; } }

        .fade-in { animation: fade-in 1s ease-out; }
        .slide-in-from-bottom-12 { animation: slide-in-from-bottom 1.2s ease-out; }
        .slide-in-from-bottom-16 { animation: slide-in-from-bottom 1.6s ease-out; }
        .zoom-in { animation: zoom-in 1.2s ease-out; }
      `}} />
    </div>
  );
};

export default App;
