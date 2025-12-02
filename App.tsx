import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Globe2, 
  Lock, 
  TrendingUp, 
  Menu, 
  X, 
  ChevronRight,
  User,
  Building2,
  Package,
  CheckCircle2,
  CreditCard,
  HelpCircle,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  QrCode,
  Smartphone
} from 'lucide-react';
import { TEXTS } from './constants';
import { Language } from './types';
import Calculator from './components/Calculator';
import AiAssistant from './components/AiAssistant';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('pt');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TEXTS[lang];

  const toggleLang = () => {
    setLang(prev => prev === 'pt' ? 'cn' : 'pt');
  };

  return (
    <div className={`min-h-screen font-sans ${lang === 'pt' ? 'selection:bg-yuan-red selection:text-white' : 'selection:bg-blue-500 selection:text-white'}`}>
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
              <div className="bg-yuan-red text-white p-2 rounded-lg font-black text-xl tracking-tighter shadow-lg shadow-red-200 group-hover:scale-105 transition-transform">
                ¥B
              </div>
              <span className="font-bold text-2xl tracking-tight text-gray-900 group-hover:text-yuan-red transition-colors">YUAN<span className="text-yuan-red group-hover:text-gray-900 transition-colors">BR</span></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-yuan-red font-medium transition-colors text-sm uppercase tracking-wide">{t.nav_features}</a>
              <a href="#calculator" className="text-gray-600 hover:text-yuan-red font-medium transition-colors text-sm uppercase tracking-wide">{t.nav_calculator}</a>
              
              <div className="flex items-center gap-3 border-l pl-6 border-gray-200">
                <button className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-yuan-red px-3 py-2 rounded-md hover:bg-gray-50 transition-all">
                  <User className="w-4 h-4" />
                  {t.nav_login_client}
                </button>
                <button className="flex items-center gap-2 text-sm font-bold text-white bg-gray-900 hover:bg-black px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95">
                  <Building2 className="w-4 h-4" />
                  {t.nav_login_supplier}
                </button>
              </div>

              <button 
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-200 ml-2"
              >
                <Globe2 className="w-4 h-4 text-gray-600" />
                <span className="text-xs font-bold text-gray-700 uppercase">{lang}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button onClick={toggleLang} className="text-xs font-bold bg-gray-100 px-2 py-1 rounded border border-gray-200">
                {lang.toUpperCase()}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 p-2 hover:bg-gray-100 rounded-lg">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top-5 duration-200 shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#features" className="block py-3 px-2 text-gray-600 font-bold hover:bg-gray-50 rounded" onClick={() => setMobileMenuOpen(false)}>{t.nav_features}</a>
              <a href="#calculator" className="block py-3 px-2 text-gray-600 font-bold hover:bg-gray-50 rounded" onClick={() => setMobileMenuOpen(false)}>{t.nav_calculator}</a>
              <hr className="my-2 border-gray-100" />
              <button className="w-full flex items-center gap-3 py-3 px-2 text-gray-700 font-bold hover:bg-gray-50 rounded">
                <User className="w-5 h-5 text-yuan-red" /> {t.nav_login_client}
              </button>
              <button className="w-full flex items-center gap-3 py-3 px-2 text-white bg-gray-900 rounded-lg font-bold shadow-md">
                <Building2 className="w-5 h-5" /> {t.nav_login_supplier}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-gradient-to-l from-red-50/50 via-gray-50/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-yuan-red/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-20 right-20 -z-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-[80px]"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left animate-fade-in-up">
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-8 shadow-sm border transform hover:scale-105 transition-transform cursor-default ${lang === 'pt' ? 'bg-red-50 text-red-700 border-red-100' : 'bg-blue-50 text-blue-700 border-blue-100'}`}>
                {lang === 'pt' ? <ShieldCheck className="w-3.5 h-3.5" /> : <Globe2 className="w-3.5 h-3.5" />}
                {lang === 'pt' ? 'Segurança Máxima Garantida' : 'Global Reach'}
              </div>
              
              <h1 className={`text-5xl lg:text-7xl font-black text-gray-900 leading-[1.05] mb-6 tracking-tight`}>
                {t.hero_title}
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                {t.hero_subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button className={`group w-full sm:w-auto px-8 py-4 rounded-xl text-white font-bold text-lg shadow-xl shadow-red-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 ${lang === 'pt' ? 'bg-yuan-red hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'}`}>
                  {t.hero_cta}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>{lang === 'pt' ? 'Escrow 100% Seguro' : 'Verified Escrow'}</span>
                </div>
              </div>
            </div>

            {/* Calculator Widget - Sticky appeal */}
            <div id="calculator" className="w-full lg:w-auto flex justify-center lg:justify-end animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <Calculator lang={lang} />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-y border-gray-100 bg-gray-50/80 backdrop-blur-sm py-10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Powered By & Integrated With</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
             {/* Styled Text Logos resembling real brands */}
             <div className="flex items-center gap-2 group cursor-default">
                <QrCode className="w-8 h-8 text-[#1677FF]" />
                <span className="font-black text-2xl text-[#1677FF] tracking-tighter">Alipay</span>
             </div>
             <div className="flex items-center gap-2 group cursor-default">
                <Smartphone className="w-8 h-8 text-[#07C160]" />
                <span className="font-black text-2xl text-[#07C160] tracking-tighter">WeChat Pay</span>
             </div>
             <div className="flex items-center gap-2 group cursor-default">
                <div className="w-8 h-8 bg-[#32BCAD] rounded flex items-center justify-center">
                   <span className="text-white font-bold text-xs">PIX</span>
                </div>
                <span className="font-black text-2xl text-[#32BCAD] tracking-tighter">Banco Central</span>
             </div>
             <div className="flex items-center gap-2 group cursor-default">
                <div className="border-2 border-[#B81C22] p-1 rounded">
                   <span className="font-serif font-bold text-[#B81C22] leading-none block">BOC</span>
                </div>
                <span className="font-serif font-bold text-xl text-[#B81C22]">BANK OF CHINA</span>
             </div>
          </div>
        </div>
      </div>

      {/* How it Works (Process) Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">{t.process_title}</h2>
            <div className="w-24 h-1.5 bg-yuan-red mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-10 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-14 left-[10%] w-[80%] h-0.5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 -z-10"></div>

            {[
              { icon: CreditCard, title: t.process_step_1, color: "text-blue-600", bg: "bg-blue-50" },
              { icon: Lock, title: t.process_step_2, color: "text-purple-600", bg: "bg-purple-50" },
              { icon: Package, title: t.process_step_3, color: "text-orange-600", bg: "bg-orange-50" },
              { icon: CheckCircle2, title: t.process_step_4, color: "text-green-600", bg: "bg-green-50" },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                 <div className={`w-20 h-20 mx-auto ${step.bg} border-4 border-white shadow-xl rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300 relative z-10`}>
                    <step.icon className={`w-9 h-9 ${step.color}`} />
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm border-2 border-white">
                      {index + 1}
                    </div>
                 </div>
                 <h3 className="text-gray-900 font-bold text-lg px-2 leading-tight">
                   {step.title}
                 </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">{t.features_title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-green-600 transition-colors">
                <Lock className="w-7 h-7 text-green-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.feature_1_title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">{t.feature_1_desc}</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
                <TrendingUp className="w-7 h-7 text-blue-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.feature_2_title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">{t.feature_2_desc}</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
              <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-yellow-500 transition-colors">
                <ShieldCheck className="w-7 h-7 text-yellow-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.feature_3_title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">{t.feature_3_desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1548615724-268427f311c1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 via-transparent to-gray-900"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-16">{t.testimonials_title}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-lg p-10 rounded-2xl border border-white/10 hover:border-yuan-red/50 transition-colors">
                <div className="flex gap-1 mb-6 text-yuan-gold">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-xl">★</span>)}
                </div>
                <p className="text-xl text-gray-200 mb-8 italic font-light leading-relaxed">"{t.testi_1_text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-lg font-bold">CM</div>
                  <div>
                    <p className="font-bold text-white text-lg">{t.testi_1_author}</p>
                    <p className="text-gray-500 text-sm">Verified Importer</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg p-10 rounded-2xl border border-white/10 hover:border-yuan-red/50 transition-colors">
                <div className="flex gap-1 mb-6 text-yuan-gold">
                  {[1,2,3,4,5].map(i => <span key={i} className="text-xl">★</span>)}
                </div>
                <p className="text-xl text-gray-200 mb-8 italic font-light leading-relaxed">"{t.testi_2_text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-lg font-bold">FL</div>
                  <div>
                    <p className="font-bold text-white text-lg">{t.testi_2_author}</p>
                    <p className="text-gray-500 text-sm">Verified Business</p>
                  </div>
                </div>
              </div>
            </div>
         </div>
      </section>

      {/* AI Assistant Section (Gemini) */}
      <AiAssistant lang={lang} />

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-16 text-gray-900">{t.faq_title}</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-lg transition-all bg-white">
              <div className="flex items-start gap-5">
                <div className="bg-red-50 p-2 rounded-lg">
                  <HelpCircle className="w-6 h-6 text-yuan-red shrink-0" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-3 text-gray-900">{t.faq_1_q}</h4>
                  <p className="text-gray-600 leading-relaxed">{t.faq_1_a}</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-lg transition-all bg-white">
              <div className="flex items-start gap-5">
                <div className="bg-red-50 p-2 rounded-lg">
                  <HelpCircle className="w-6 h-6 text-yuan-red shrink-0" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-3 text-gray-900">{t.faq_2_q}</h4>
                  <p className="text-gray-600 leading-relaxed">{t.faq_2_a}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rich Footer */}
      <footer className="bg-black text-white pt-24 pb-12 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 lg:gap-24 mb-20">
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <div className="bg-yuan-red text-white p-2 rounded font-black text-xl">
                  ¥B
                </div>
                <span className="font-bold text-2xl tracking-tight">YUAN<span className="text-gray-500">BR</span></span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                {t.footer_about}
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-yuan-red hover:border-yuan-red transition-all group">
                  <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white"/>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-yuan-red hover:border-yuan-red transition-all group">
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white"/>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:bg-yuan-red hover:border-yuan-red transition-all group">
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white"/>
                </a>
              </div>
            </div>

            {/* Links Column */}
            <div>
              <h4 className="font-bold text-white text-lg mb-8">{t.footer_links}</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yuan-red transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> {t.nav_home}</a></li>
                <li><a href="#features" className="hover:text-yuan-red transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> {t.nav_features}</a></li>
                <li><a href="#calculator" className="hover:text-yuan-red transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> {t.nav_calculator}</a></li>
                <li><a href="#" className="hover:text-yuan-red transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" /> {t.nav_login_supplier}</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="font-bold text-white text-lg mb-8">{t.footer_legal}</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yuan-red transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-yuan-red transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-yuan-red transition-colors">Compliance (PLD/CFT)</a></li>
                <li><a href="#" className="hover:text-yuan-red transition-colors">Security Escrow</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="font-bold text-white text-lg mb-8">{t.footer_contact}</h4>
              <ul className="space-y-6 text-sm text-gray-400">
                <li className="flex items-start gap-4 group cursor-pointer">
                  <div className="bg-gray-900 p-2 rounded group-hover:text-yuan-red transition-colors">
                    <MapPin className="w-5 h-5 text-gray-300 group-hover:text-yuan-red" />
                  </div>
                  <span className="group-hover:text-gray-200 transition-colors">Av. Paulista, 1000<br/>São Paulo, SP - Brasil</span>
                </li>
                <li className="flex items-start gap-4 group cursor-pointer">
                  <div className="bg-gray-900 p-2 rounded group-hover:text-yuan-red transition-colors">
                    <MapPin className="w-5 h-5 text-gray-300 group-hover:text-yuan-red" />
                  </div>
                  <span className="group-hover:text-gray-200 transition-colors">No. 100 Century Ave<br/>Shanghai - China</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="bg-gray-900 p-2 rounded group-hover:text-yuan-red transition-colors">
                    <Mail className="w-5 h-5 text-gray-300 group-hover:text-yuan-red" />
                  </div>
                  <a href="mailto:contato@yuanbr.com" className="group-hover:text-white transition-colors">contato@yuanbr.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p>{t.footer_rights}</p>
            <div className="flex gap-6">
               <span className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> System Operational</span>
               <span>v2.1.0 (Production)</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;