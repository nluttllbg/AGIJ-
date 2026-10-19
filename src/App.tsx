/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sprout,
  Droplets,
  Layers,
  Search,
  Phone,
  ArrowRight,
  Menu,
  X,
  MapPin,
  CheckCircle2,
  Download,
  BookOpen,
  ChevronRight,
  FileArchive,
  Maximize2,
  Sparkles,
  TrendingUp,
  Compass
} from 'lucide-react';

// Imagens integradas da AGIJ FERT
import mudasSoloImg from './assets/images/mudas-solo.jpg';
import regarMudaImg from './assets/images/regar-da-muda.jpg';
import colheitaAereaImg from './assets/images/colheita-aerea.jpg';
import plantaSojaImg from './assets/images/planta-de-soja.jpg';

const WHATSAPP_NUMBER = '5566996512455';
const WHATSAPP_DISPLAY = '(66) 99651-2455';
const WHATSAPP_DEFAULT_MSG =
  'Olá! Vim pelo site da AGIJ FERT e gostaria de saber mais sobre a consultoria para minha fazenda. Minha propriedade fica em [cidade/região] e gostaria de conversar sobre solo e produtividade.';

function getWhatsAppUrl(msg = WHATSAPP_DEFAULT_MSG) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// Variantes de animação elegantes para viewport reveal
const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: custom * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (custom = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.85,
      delay: custom * 0.15,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; title: string; alt: string } | null>(null);
  const [showGithubGuide, setShowGithubGuide] = useState(false);
  const [downloadingZip, setDownloadingZip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadZip = () => {
    setDownloadingZip(true);
    const link = document.createElement('a');
    link.href = '/agij-fert-site.zip';
    link.download = 'agij-fert-site.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloadingZip(false), 1200);
  };

  const heroWords = [
    { text: 'Consultoria', em: false },
    { text: 'para', em: false },
    { text: 'entender', em: true },
    { text: 'os', em: true },
    { text: 'desafios', em: true },
    { text: 'da', em: false },
    { text: 'sua', em: false },
    { text: 'fazenda', em: false },
    { text: 'e', em: false },
    { text: 'buscar', em: false },
    { text: 'melhores', em: false },
    { text: 'resultados.', em: false },
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EC] text-[#22301F] font-sans selection:bg-[#1B3A29] selection:text-[#F6F4EC] relative overflow-x-hidden">
      {/* Top Banner com status de animações e download do site */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#122A1D] text-[#F6F4EC] border-b border-[#B78A3C]/30 text-xs sm:text-sm py-2 px-4 relative z-50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#1FAE55] animate-ping" />
            <span className="font-semibold text-[#D8B36A]">AGIJ FERT</span>
            <span className="text-[#F6F4EC]/60 hidden md:inline">•</span>
            <span className="text-[#F6F4EC]/90 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D8B36A]" />
              Site 100% animado com fotos integradas para GitHub Pages
            </span>
          </div>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <button
              onClick={() => setShowGithubGuide(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#F6F4EC]/10 hover:bg-[#F6F4EC]/20 text-[#D8B36A] font-semibold transition hover:scale-105 active:scale-95"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Guia GitHub Pages
            </button>
            <button
              onClick={handleDownloadZip}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#1FAE55] hover:bg-[#179A49] text-[#05230F] font-bold shadow-sm transition hover:scale-105 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              {downloadingZip ? 'Baixando...' : 'Baixar ZIP Completo'}
            </button>
          </div>
        </div>
      </motion.div>

      {/* CABEÇALHO */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F6F4EC]/95 backdrop-blur-md shadow-md border-b border-[#122A1D]/10'
            : 'bg-[#F6F4EC]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <motion.a
            href="#inicio"
            className="flex flex-col group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <span className="font-display font-bold text-2xl tracking-wider text-[#0C1D13] leading-none">
              AGIJ<span className="text-[#B78A3C]">.</span>FERT
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#55654F] mt-1">
              Consultoria Agrícola
            </span>
          </motion.a>

          {/* Navegação Desktop com links animados */}
          <nav className="hidden md:flex items-center gap-8">
            {['Início', 'Sobre', 'Como ajudamos', 'Contato'].map((item) => {
              const href = `#${item.toLowerCase().replace(/\s+/g, '-')}`;
              return (
                <a
                  key={item}
                  href={href}
                  className="text-sm font-medium text-[#55654F] hover:text-[#122A1D] transition-colors py-1 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B78A3C] transition-all duration-300 group-hover:w-full" />
                </a>
              );
            })}
          </nav>

          {/* Botão de WhatsApp */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-[#1FAE55] hover:bg-[#179A49] text-[#05230F] font-semibold text-sm px-4 py-2.5 rounded shadow-sm hover:shadow-md transition"
            >
              <Phone className="w-4 h-4 fill-current" />
              Falar no WhatsApp
            </motion.a>
          </div>

          {/* Botão Menu Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded border border-[#122A1D]/15 text-[#0C1D13] transition hover:bg-[#122A1D]/5"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile com AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#F6F4EC] border-b border-[#122A1D]/15 px-6 py-6 space-y-4 shadow-xl overflow-hidden"
            >
              <div className="flex flex-col space-y-3 font-display text-lg">
                {[
                  { label: 'Início', href: '#inicio' },
                  { label: 'Sobre', href: '#sobre' },
                  { label: 'Como ajudamos', href: '#como-ajudamos' },
                  { label: 'Contato', href: '#contato' },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#0C1D13] hover:text-[#275238] py-1 border-b border-[#122A1D]/10 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1FAE55] hover:bg-[#179A49] text-[#05230F] font-semibold px-4 py-3 rounded shadow transition"
              >
                <Phone className="w-4 h-4 fill-current" />
                Falar no WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* SEÇÃO PRINCIPAL (HERO) */}
      <section id="inicio" className="relative overflow-hidden py-12 md:py-20 lg:py-24">
        {/* Fundo de curvas de nível com animação de flutuação suave */}
        <motion.div
          animate={{ x: [0, 8, 0], y: [0, -8, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-12 -right-12 w-[600px] h-[600px] pointer-events-none opacity-20"
        >
          <svg viewBox="0 0 400 400" className="w-full h-full text-[#B78A3C]" stroke="currentColor" fill="none">
            <path d="M-20,60 C110,15 220,92 320,60 S540,-10 660,30" strokeWidth="1.2" />
            <path d="M-20,150 C110,105 220,182 320,150 S540,80 660,120" strokeWidth="1.2" />
            <path d="M-20,240 C110,195 220,272 320,240 S540,170 660,210" strokeWidth="1.2" />
            <path d="M-20,330 C110,285 220,362 320,330 S540,260 660,300" strokeWidth="1.2" />
            <path d="M-20,420 C110,375 220,452 320,420 S540,350 660,390" strokeWidth="1.2" />
          </svg>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Texto Hero com revelação palavra por palavra */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="lg:col-span-7 space-y-6"
            >
              <motion.div
                variants={fadeInUp}
                custom={0}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8A6524]"
              >
                <span className="w-7 h-px bg-[#B78A3C]" />
                Sorriso – MT • Atendimento em Sorriso e região
              </motion.div>

              {/* Título com animação de cada palavra individualmente */}
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-normal leading-[1.14] text-[#0C1D13]">
                {heroWords.map((item, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.15 + idx * 0.045,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`inline-block mr-2.5 ${item.em ? 'italic text-[#8A6524] font-medium' : ''}`}
                  >
                    {item.text}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                variants={fadeInUp}
                custom={2}
                className="text-base sm:text-lg text-[#55654F] leading-relaxed max-w-2xl"
              >
                A AGIJ FERT atende produtores de Sorriso e região, com foco nos desafios do solo e da produtividade – ajudando você a entender o que está limitando a sua lavoura.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                custom={3}
                className="flex flex-wrap gap-4 pt-2"
              >
                <motion.a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 bg-[#1FAE55] hover:bg-[#179A49] text-[#05230F] font-bold text-base px-6 py-3.5 rounded shadow-md hover:shadow-xl transition"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  Conversar sobre minha fazenda
                </motion.a>
                <motion.a
                  href="#sobre"
                  whileHover={{ scale: 1.02, x: 3 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 border border-[#122A1D]/30 hover:border-[#122A1D] text-[#122A1D] hover:bg-[#122A1D]/5 font-semibold text-base px-6 py-3.5 rounded transition"
                >
                  Conhecer a AGIJ FERT
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                custom={4}
                className="flex items-center gap-2 text-xs sm:text-sm text-[#55654F] pt-2"
              >
                <MapPin className="w-4 h-4 text-[#8A6524] flex-shrink-0" />
                <span>O primeiro passo é uma conversa sobre a realidade da sua propriedade – sem compromisso.</span>
              </motion.div>
            </motion.div>

            {/* Imagem Hero: mudas-solo.jpg com animação Ken Burns e Moldura Dourada */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={scaleIn}
              custom={1}
              className="lg:col-span-5 relative"
            >
              <div
                className="relative group cursor-pointer"
                onClick={() =>
                  setSelectedPhoto({
                    src: mudasSoloImg,
                    title: 'Mudas no solo (Foto Hero)',
                    alt: 'Mãos de produtor regando mudas que brotaram no solo fértil em Sorriso',
                  })
                }
              >
                {/* Moldura dourada com respiração suave */}
                <div className="absolute -top-3.5 -left-3.5 -right-3.5 -bottom-3.5 border-2 border-[#B78A3C]/70 rounded-md pointer-events-none animate-gold-glow transition-transform duration-500 group-hover:scale-[1.03]" />

                <div className="relative rounded overflow-hidden aspect-[4/3] shadow-2xl bg-[#122A1D]">
                  <img
                    src={mudasSoloImg}
                    alt="Mãos de produtor regando mudas que brotaram no solo fértil da lavoura em Sorriso"
                    className="w-full h-full object-cover kenburns-anim transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs flex items-center gap-1.5 font-medium bg-black/40 px-3 py-1.5 rounded backdrop-blur-sm">
                      <Maximize2 className="w-3.5 h-3.5 text-[#D8B36A]" />
                      mudas-solo.jpg • Clique para ampliar
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Faixa com 3 pilares animados ao rolar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeInUp}
            className="mt-16 pt-8 border-t border-[#122A1D]/15 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: Sprout, text: 'Produtividade da lavoura' },
              { icon: Layers, text: 'Condições do solo' },
              { icon: Search, text: 'Fatores que limitam o resultado' },
            ].map((pilar, idx) => (
              <motion.div
                key={pilar.text}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors"
              >
                <div className="p-2.5 rounded bg-[#122A1D]/5 text-[#8A6524]">
                  <pilar.icon className="w-5 h-5 animate-sway" />
                </div>
                <span className="font-medium text-[#22301F] text-sm sm:text-base">{pilar.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO SOBRE A AGIJ FERT */}
      <section id="sobre" className="py-16 md:py-24 bg-[#EFEBDF] border-y border-[#122A1D]/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end"
          >
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#8A6524]">
                <span className="font-display text-base text-[#1B3A29]">01</span>
                <span className="w-8 h-px bg-[#B78A3C]" />
                Sobre a AGIJ FERT
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#0C1D13] mt-3">
                Uma consultoria que parte da realidade da sua fazenda
              </h2>
            </div>
            <p className="lg:col-span-5 text-[#55654F] text-sm sm:text-base leading-relaxed">
              Consultoria voltada às necessidades de cada propriedade, com proximidade do produtor e foco no que realmente está em jogo: o solo e a produtividade.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Foto Sobre: regar-da-muda.jpg animada */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={scaleIn}
              className="lg:col-span-5 relative order-2 lg:order-1"
            >
              <div
                className="relative group cursor-pointer"
                onClick={() =>
                  setSelectedPhoto({
                    src: regarMudaImg,
                    title: 'Rega da muda no solo',
                    alt: 'Água sendo aplicada com precisão sobre a muda de planta no solo fértil',
                  })
                }
              >
                <div className="absolute -top-3.5 -left-3.5 -right-3.5 -bottom-3.5 border-2 border-[#B78A3C]/70 rounded-md pointer-events-none animate-gold-glow transition-transform duration-500 group-hover:scale-[1.03]" />
                <div className="relative rounded overflow-hidden aspect-[4/3] shadow-xl bg-[#122A1D]">
                  <img
                    src={regarMudaImg}
                    alt="Água sendo aplicada com cuidado sobre a muda de planta no solo fértil"
                    className="w-full h-full object-cover kenburns-anim transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs flex items-center gap-1.5 font-medium bg-black/40 px-3 py-1.5 rounded backdrop-blur-sm">
                      <Maximize2 className="w-3.5 h-3.5 text-[#D8B36A]" />
                      regar-da-muda.jpg • Clique para ampliar
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Texto e etapas com reveal escalonado */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeInUp}
              className="lg:col-span-7 space-y-6 order-1 lg:order-2"
            >
              <p className="text-base text-[#55654F] leading-relaxed">
                A <strong className="text-[#0C1D13] font-semibold">AGIJ FERT</strong> é uma consultoria de{' '}
                <strong className="text-[#0C1D13] font-semibold">Sorriso, em Mato Grosso</strong>, com atendimento em Sorriso e em toda a região. Nosso trabalho é de perto com o produtor: entender os problemas que prejudicam a produtividade e as condições do solo, e orientar na busca por melhorias.
              </p>
              <p className="text-base text-[#55654F] leading-relaxed">
                Cada propriedade tem um histórico, um solo e um contexto diferentes. Por isso, a AGIJ FERT não trabalha com soluções prontas: a consultoria começa pela escuta — da sua lavoura, do seu solo e dos desafios que você enxerga no dia a dia.
              </p>

              {/* 3 Etapas interativas */}
              <div className="pt-4 border-t border-[#122A1D]/15 divide-y divide-[#122A1D]/15">
                {[
                  {
                    num: '01',
                    title: 'Você conta a realidade da propriedade',
                    text: 'Desafios da lavoura, do solo e o que você observa na rotina do campo.',
                  },
                  {
                    num: '02',
                    title: 'Mapeamos os pontos de atenção',
                    text: 'Juntos, organizamos as informações para entender o que pode estar limitando o resultado.',
                  },
                  {
                    num: '03',
                    title: 'Planejamos os próximos passos',
                    text: 'Orientação para buscar melhorias de acordo com a realidade da sua fazenda.',
                  },
                ].map((step, idx) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    whileHover={{ x: 6 }}
                    className="py-3.5 flex gap-4 items-start group cursor-default transition-transform"
                  >
                    <span className="font-display text-xl text-[#8A6524] font-semibold group-hover:text-[#B78A3C] transition-colors">
                      {step.num}
                    </span>
                    <div>
                      <h3 className="font-semibold text-[#0C1D13] text-base group-hover:text-[#1B3A29] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#55654F] mt-0.5">{step.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded border border-[#B78A3C]/40 bg-[#B78A3C]/10 text-xs sm:text-sm font-semibold text-[#1B3A29]"
              >
                <MapPin className="w-4 h-4 text-[#8A6524]" />
                Sorriso – MT • Atendimento em Sorriso e região
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEÇÃO COMO AJUDAMOS */}
      <section id="como-ajudamos" className="py-16 md:py-24 bg-[#0C1D13] text-[#F6F4EC] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end"
          >
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#D8B36A]">
                <span className="font-display text-base text-[#F6F4EC]">02</span>
                <span className="w-8 h-px bg-[#B78A3C]" />
                Como podemos ajudar
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#F6F4EC] mt-3">
                Desafios que podem ser discutidos na consultoria
              </h2>
            </div>
            <p className="lg:col-span-5 text-[#F6F4EC]/75 text-sm sm:text-base leading-relaxed">
              Cada fazenda tem os próprios problemas. Estes são os temas mais comuns que levamos em conversa com o produtor.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Coluna lateral com Nota e Foto da Planta de Soja */}
            <motion.aside
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeInUp}
              className="lg:col-span-4 space-y-6"
            >
              <div className="p-5 rounded border border-[#D8B36A]/40 border-l-4 border-l-[#B78A3C] bg-[#D8B36A]/10 text-sm text-[#F6F4EC]/90 leading-relaxed shadow-lg">
                <strong className="text-[#D8B36A] block mb-1">Sem promessas de resultado.</strong>
                O papel da consultoria é ajudar você a entender o cenário da sua propriedade – e o que pode ser feito a partir dele.
              </div>

              {/* Foto da Planta de Soja animada com Ken Burns */}
              <div
                className="relative group cursor-pointer"
                onClick={() =>
                  setSelectedPhoto({
                    src: plantaSojaImg,
                    title: 'Planta de soja com sistema radicular',
                    alt: 'Planta de soja com sistema radicular exposto, analisada na lavoura',
                  })
                }
              >
                <div className="rounded overflow-hidden aspect-[3/4] max-w-sm mx-auto shadow-2xl border border-white/10 bg-[#122A1D]">
                  <img
                    src={plantaSojaImg}
                    alt="Planta de soja com sistema radicular exposto com nódulos e solo fértil"
                    className="w-full h-full object-cover kenburns-anim transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs flex items-center gap-1.5 font-medium bg-black/50 px-3 py-1.5 rounded backdrop-blur-sm">
                      <Maximize2 className="w-3.5 h-3.5 text-[#D8B36A]" />
                      planta-de-soja.jpg • Clique para ampliar
                    </span>
                  </div>
                </div>
                <p className="text-center text-xs text-[#F6F4EC]/60 mt-2">
                  Avaliação da estrutura radicular e nodulação do solo
                </p>
              </div>
            </motion.aside>

            {/* 4 Cards de Desafios animados com Hover Lift */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  num: '01',
                  icon: TrendingUp,
                  title: 'Lavoura com baixa produtividade',
                  desc: 'A colheita veio abaixo do esperado, ou o resultado não acompanha o que foi investido? Esse é um ponto de partida importante para a conversa.',
                  items: [
                    'Comparar o resultado atual com o histórico',
                    'Revisar o que pode estar pesando na produção',
                    'Discutir o que pode ser ajustado nas próximas safras',
                  ],
                  msg: 'Olá! Gostaria de conversar com a AGIJ FERT sobre baixa produtividade na minha lavoura.',
                },
                {
                  num: '02',
                  icon: Layers,
                  title: 'Condições do solo',
                  desc: 'O solo é a base da lavoura. Quando ele apresenta problemas, o efeito aparece em todo o ciclo da cultura.',
                  items: [
                    'Compactação e preparo da terra',
                    'Umidade, drenagem e retenção de água',
                    'Sinais de desgaste ou limitações do terreno',
                  ],
                  msg: 'Olá! Gostaria de conversar com a AGIJ FERT sobre condições e manejo do solo da minha fazenda.',
                },
                {
                  num: '03',
                  icon: Search,
                  title: 'Identificar fatores que limitam',
                  desc: 'Nem sempre o gargalo é o primeiro que aparece. Reunir e organizar as informações da propriedade ajuda a enxergar o que está limitando a fazenda.',
                  items: [
                    'Organizar o que você observa na lavoura',
                    'Separar causas controláveis das incontroláveis',
                    'Priorizar os pontos que mais impactam o resultado',
                  ],
                  msg: 'Olá! Gostaria de identificar os fatores que estão limitando a produtividade da minha propriedade.',
                },
                {
                  num: '04',
                  icon: Compass,
                  title: 'Orientação e planejamento',
                  desc: 'Com o cenário entendido, a consultoria orienta o produtor nas decisões e nos próximos passos da propriedade.',
                  items: [
                    'Compreender as necessidades específicas',
                    'Definir prioridades de forma prática',
                    'Orientar a busca por melhorias, passo a passo',
                  ],
                  msg: 'Olá! Gostaria de agendar uma orientação e planejamento para a safra da minha fazenda.',
                },
              ].map((card, idx) => (
                <motion.div
                  key={card.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="p-6 rounded bg-[#F6F4EC]/5 border border-[#F6F4EC]/10 hover:border-[#D8B36A]/60 transition-colors shadow-lg hover:shadow-2xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded border border-[#D8B36A]/40 text-[#D8B36A] group-hover:bg-[#D8B36A]/10 transition-colors">
                        <card.icon className="w-5 h-5" />
                      </div>
                      <span className="font-display text-3xl text-[#D8B36A]/30 group-hover:text-[#D8B36A]/60 transition-colors">
                        {card.num}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#F6F4EC] mb-2 group-hover:text-[#D8B36A] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[#F6F4EC]/75 leading-relaxed mb-4">{card.desc}</p>
                    <ul className="text-xs text-[#F6F4EC]/85 space-y-1.5 pt-3 border-t border-white/10">
                      {card.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-2.5 h-px bg-[#B78A3C]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={getWhatsAppUrl(card.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#D8B36A] hover:text-[#F0D9A8] transition group-hover:translate-x-1 duration-200"
                  >
                    Quero conversar sobre esse ponto
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO CHAMADA (PRODUZINDO ABAIXO DO ESPERADO) COM FOTO AÉREA ANIMADA */}
      <section className="relative overflow-hidden py-20 md:py-28 text-[#F6F4EC]">
        {/* Imagem de Fundo com Ken Burns: colheita-aerea.jpg */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={colheitaAereaImg}
            alt="Vista aérea de colheita em lavoura extensa com colheitadeiras em Sorriso MT"
            className="w-full h-full object-cover object-center kenburns-anim scale-105"
          />
          {/* Gradiente escuro para contraste impecável */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C1D13]/95 via-[#0C1D13]/85 to-[#0C1D13]/55" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeInUp}
            className="max-w-2xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#D8B36A]">
              <span className="w-6 h-px bg-[#D8B36A]" />
              Vamos conversar?
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#F6F4EC]">
              Sua fazenda está produzindo abaixo do esperado?
            </h2>

            <p className="text-base sm:text-lg text-[#F6F4EC]/85 leading-relaxed">
              O primeiro passo é simples: conversar sobre a realidade da sua propriedade e os desafios que você está enfrentando. Não prometemos resultado pronto — o objetivo é ajudar você a entender o que está limitando a sua lavoura e a planejar os próximos passos com mais clareza.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <motion.a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-[#1FAE55] hover:bg-[#179A49] text-[#05230F] font-bold text-base px-6 py-3.5 rounded shadow-xl transition"
              >
                <Phone className="w-5 h-5 fill-current" />
                Conversar no WhatsApp
              </motion.a>
              <span className="font-display text-xl text-[#D8B36A] font-semibold tracking-wide">
                {WHATSAPP_DISPLAY}
              </span>
            </div>

            <p className="text-xs text-[#F6F4EC]/60">
              A conversa abre no WhatsApp com uma mensagem pronta para você revisar, ajustar e enviar – sem envio automático.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO CONTATO */}
      <section id="contato" className="py-16 md:py-24 bg-[#F6F4EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end"
          >
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#8A6524]">
                <span className="font-display text-base text-[#1B3A29]">03</span>
                <span className="w-8 h-px bg-[#B78A3C]" />
                Contato
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#0C1D13] mt-3">
                Fale com a AGIJ FERT sobre os desafios da sua propriedade
              </h2>
            </div>
            <p className="lg:col-span-5 text-[#55654F] text-sm sm:text-base leading-relaxed">
              Sem formulários e sem intermediários: o canal de atendimento é direto, pelo WhatsApp.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Card Principal do WhatsApp animado */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={scaleIn}
              whileHover={{ y: -4 }}
              className="lg:col-span-6 bg-white p-8 rounded-lg border border-[#122A1D]/15 border-t-4 border-t-[#1FAE55] shadow-xl space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#1FAE55] flex items-center justify-center text-[#05230F] flex-shrink-0 animate-pulse">
                  <Phone className="w-7 h-7 fill-current" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#55654F]">Canal Direto</span>
                  <p className="font-display text-2xl sm:text-3xl font-bold text-[#0C1D13]">{WHATSAPP_DISPLAY}</p>
                </div>
              </div>

              <p className="text-sm text-[#55654F] leading-relaxed">
                Toque no botão abaixo para iniciar a conversa. A mensagem já vai pronta para você revisar, personalizar e enviar.
              </p>

              <motion.a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1FAE55] hover:bg-[#179A49] text-[#05230F] font-bold text-base px-6 py-4 rounded shadow-md hover:shadow-lg transition"
              >
                <Phone className="w-5 h-5 fill-current" />
                Falar no WhatsApp
              </motion.a>
            </motion.div>

            {/* Informações Institucionais da Empresa */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeInUp}
              className="lg:col-span-6 space-y-4"
            >
              <dl className="divide-y divide-[#122A1D]/15 border-y border-[#122A1D]/15">
                {[
                  {
                    dt: 'Empresa',
                    dd: 'AGIJ FERT',
                    sub: 'Consultoria voltada às necessidades de cada fazenda',
                  },
                  {
                    dt: 'Localização',
                    dd: 'Sorriso – Mato Grosso',
                    sub: null,
                  },
                  {
                    dt: 'Atendimento',
                    dd: 'Sorriso e região',
                    sub: 'Atendimento próximo ao produtor rural',
                  },
                  {
                    dt: 'Canal',
                    dd: 'WhatsApp – (66) 99651-2455',
                    sub: 'A conversa é direta, sem formulários',
                  },
                ].map((row, idx) => (
                  <motion.div
                    key={row.dt}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="py-3.5 grid grid-cols-3 sm:grid-cols-4 gap-4 items-baseline"
                  >
                    <dt className="text-xs uppercase tracking-widest font-semibold text-[#8A6524]">{row.dt}</dt>
                    <dd className="col-span-2 sm:col-span-3 font-semibold text-[#0C1D13]">
                      {row.dd}
                      {row.sub && (
                        <span className="block text-xs font-normal text-[#55654F] mt-0.5">{row.sub}</span>
                      )}
                    </dd>
                  </motion.div>
                ))}
              </dl>

              <p className="text-xs sm:text-sm text-[#55654F] leading-relaxed pt-2">
                Se preferir, chame a qualquer momento e conte um pouco sobre a sua propriedade – de onde ela fica e quais são os principais desafios que você está enfrentando.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-[#0A1810] text-[#F6F4EC]/75 py-14 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-6 space-y-3">
              <span className="font-display font-bold text-2xl tracking-wider text-white">
                AGIJ<span className="text-[#B78A3C]">.</span>FERT
              </span>
              <p className="text-sm text-[#F6F4EC]/70 max-w-sm leading-relaxed">
                Consultoria para entender os desafios da sua fazenda e buscar melhores resultados.
              </p>
            </div>

            <div className="md:col-span-3 space-y-2 text-sm">
              <p className="text-xs uppercase tracking-wider font-semibold text-[#D8B36A]">Localização</p>
              <p className="text-[#F6F4EC]/85">Sorriso – MT</p>
              <p className="text-[#F6F4EC]/60 text-xs">Atendimento em Sorriso e região</p>
            </div>

            <div className="md:col-span-3 space-y-2 text-sm">
              <p className="text-xs uppercase tracking-wider font-semibold text-[#D8B36A]">WhatsApp</p>
              <p>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#D8B36A] font-semibold transition"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </p>
              <p className="text-[#F6F4EC]/60 text-xs">Atendimento direto</p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F6F4EC]/50 gap-4">
            <p>© {new Date().getFullYear()} AGIJ FERT — Todos os direitos reservados.</p>
            <p>Consultoria agrícola — Sorriso, Mato Grosso</p>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE DO WHATSAPP COM ANEL DE PULSO */}
      <motion.a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp com a AGIJ FERT"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#1FAE55] text-[#05230F] flex items-center justify-center shadow-2xl relative group"
      >
        <span className="absolute inset-0 rounded-full border-2 border-[#1FAE55]/60 animate-float-pulse pointer-events-none" />
        <Phone className="w-7 h-7 fill-current" />
      </motion.a>

      {/* MODAL DE AMPLIAÇÃO DE FOTO COM ANIMAÇÃO */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] bg-[#122A1D] rounded-lg overflow-hidden shadow-2xl border border-[#B78A3C]/50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 bg-[#0C1D13] flex items-center justify-between text-[#F6F4EC]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1FAE55]" />
                  <span className="font-semibold text-sm">{selectedPhoto.title}</span>
                </div>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="text-[#F6F4EC]/60 hover:text-white p-1 rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-h-[75vh] w-auto mx-auto object-contain"
              />
              <div className="p-3 bg-[#0C1D13]/80 text-xs text-center text-[#F6F4EC]/70">
                {selectedPhoto.alt}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL DO GUIA GITHUB PAGES */}
      <AnimatePresence>
        {showGithubGuide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowGithubGuide(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-2xl w-full bg-[#F6F4EC] rounded-lg overflow-hidden shadow-2xl border border-[#B78A3C]/40 text-[#22301F] max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 bg-[#122A1D] text-[#F6F4EC] flex items-center justify-between border-b border-[#B78A3C]/30">
                <div className="flex items-center gap-2.5">
                  <FileArchive className="w-5 h-5 text-[#D8B36A]" />
                  <h3 className="font-display font-bold text-lg text-white">Guia de Publicação no GitHub Pages</h3>
                </div>
                <button
                  onClick={() => setShowGithubGuide(false)}
                  className="text-[#F6F4EC]/60 hover:text-white p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-6 text-sm">
                <div className="p-4 rounded bg-[#1FAE55]/10 border border-[#1FAE55]/30 text-xs sm:text-sm text-[#0C1D13] flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1FAE55] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Tudo animado e configurado:</strong> O arquivo ZIP inclui as animações nativas em CSS e JS para o GitHub Pages e a estrutura de arquivos sem complicação.
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      step: '1',
                      title: 'Baixe o arquivo ZIP',
                      desc: 'Clique no botão verde "Baixar ZIP Completo" no topo da página e descompacte a pasta no seu computador.',
                    },
                    {
                      step: '2',
                      title: 'Crie o repositório no GitHub',
                      desc: 'Acesse o GitHub, clique em New Repository, dê o nome de agij-fert-site, deixe como Público e clique em Create.',
                    },
                    {
                      step: '3',
                      title: 'Envie os arquivos descompactados',
                      desc: 'Clique em "uploading an existing file" e arraste o index.html, a pasta assets e o README.md. Confirme as alterações.',
                    },
                    {
                      step: '4',
                      title: 'Ative o GitHub Pages',
                      desc: 'Vá em Settings > Pages, em Source escolha "Deploy from a branch", selecione main e / (root) e clique em Save. Seu site estará online!',
                    },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#122A1D] text-[#D8B36A] font-bold text-xs flex items-center justify-center flex-shrink-0">
                        {s.step}
                      </span>
                      <div>
                        <h4 className="font-bold text-[#0C1D13]">{s.title}</h4>
                        <p className="text-[#55654F] text-xs mt-0.5">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#122A1D]/15 flex justify-end gap-3">
                  <button
                    onClick={handleDownloadZip}
                    className="inline-flex items-center gap-2 bg-[#1FAE55] hover:bg-[#179A49] text-[#05230F] font-bold px-4 py-2 rounded text-xs transition"
                  >
                    <Download className="w-4 h-4" />
                    Baixar ZIP Agora
                  </button>
                  <button
                    onClick={() => setShowGithubGuide(false)}
                    className="px-4 py-2 rounded border border-[#122A1D]/20 text-[#122A1D] font-medium text-xs hover:bg-[#122A1D]/5"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
