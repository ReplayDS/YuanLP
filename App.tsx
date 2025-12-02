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
  ArrowRight,
  Package,
  CheckCircle2,
  CreditCard,
  HelpCircle,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin
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
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <div className="bg-yuan-red text-white p-2 rounded-lg font-black text-xl tracking-tighter shadow-lg shadow-red-200">
                ¥B
              </div>
              <span className="font-bold text-2xl tracking-tight text-gray-900">YUAN<span className="text-yuan-red">BR</span></span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-yuan-red font-medium transition-colors">{t.nav_features}</a>
              <a href="#calculator" className="text-gray-600 hover:text-yuan-red font-medium transition-colors">{t.nav_calculator}</a>
              
              <div className="flex items-center gap-3 border-l pl-6 border-gray-200">
                <button className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-yuan-red px-3 py-2 rounded-md hover:bg-gray-50 transition-all">
                  <User className="w-4 h-4" />
                  {t.nav_login_client}
                </button>
                <button className="flex items-center gap-2 text-sm font-semibold text-white bg-gray-900 hover:bg-black px-4 py-2 rounded-md shadow-md transition-all hover:scale-105">
                  <Building2 className="w-4 h-4" />
                  {t.nav_login_supplier}
                </button>
              </div>

              <button 
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-200"
              >
                <Globe2 className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-bold text-gray-700 uppercase">{lang}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button onClick={toggleLang} className="text-sm font-bold bg-gray-100 px-2 py-1 rounded">
                {lang.toUpperCase()}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top-2">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#features" className="block py-2 text-gray-600 font-medium" onClick={() => setMobileMenuOpen(false)}>{t.nav_features}</a>
              <a href="#calculator" className="block py-2 text-gray-600 font-medium" onClick={() => setMobileMenuOpen(false)}>{t.nav_calculator}</a>
              <hr className="my-2" />
              <button className="w-full flex items-center gap-2 py-3 text-gray-700 font-semibold">
                <User className="w-4 h-4" /> {t.nav_login_client}
              </button>
              <button className="w-full flex items-center gap-2 py-3 text-yuan-red font-semibold">
                <Building2 className="w-4 h-4" /> {t.nav_login_supplier}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent opacity-50"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-64 h-64 bg-yuan-red rounded-full blur-[120px] opacity-5"></div>
        <div className="absolute top-20 right-20 -z-10 w-32 h-32 bg-yellow-400 rounded-full blur-[80px] opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-6 shadow-sm border ${lang === 'pt' ? 'bg-red-50 text-red-700 border-red-100' : 'bg-blue-50 text-blue-700 border-blue-100'}`}>
                {lang === 'pt' ? <ShieldCheck className="w-3 h-3" /> : <Globe2 className="w-3 h-3" />}
                {lang === 'pt' ? 'Segurança Máxima Garantida' : 'Global Reach'}
              </div>
              
              <h1 className={`text-4xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6 ${lang === 'pt' ? 'tracking-tight' : ''}`}>
                {t.hero_title}
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {t.hero_subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button className={`w-full sm:w-auto px-8 py-4 rounded-xl text-white font-bold text-lg shadow-xl shadow-red-200/50 hover:shadow-2xl hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2 ${lang === 'pt' ? 'bg-yuan-red hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'}`}>
                  {t.hero_cta}
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Calculator Widget - Sticky appeal */}
            <div id="calculator" className="w-full lg:w-auto flex justify-center lg:justify-end">
              <Calculator lang={lang} />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-y border-gray-100 bg-gray-50/50 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-gray-800">ALIPAY</span>
             </div>
             <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-gray-800">WECHAT PAY</span>
             </div>
             <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-gray-800">PIX BACEN</span>
             </div>
             <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-gray-800">BANK OF CHINA</span>
             </div>
        </div>
      </div>

      {/* How it Works (Process) Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.process_title}</h2>
            <div className="w-20 h-1 bg-yuan-red mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

            {[
              { icon: CreditCard, title: t.process_step_1 },
              { icon: Lock, title: t.process_step_2 },
              { icon: Package, title: t.process_step_3 },
              { icon: CheckCircle2, title: t.process_step_4 },
            ].map((step, index) => (
              <div key={index} className="bg-white pt-4 text-center group">
                 <div className="w-16 h-16 mx-auto bg-gray-50 border-2 border-gray-200 rounded-full flex items-center justify-center mb-6 group-hover:border-yuan-red group-hover:scale-110 transition-all duration-300 shadow-sm relative z-10">
                    <step.icon className="w-8 h-8 text-gray-600 group-hover:text-yuan-red transition-colors" />
                 </div>
                 <p className="text-gray-800 font-semibold px-4 leading-snug">
                   {step.title}
                 </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.features_title}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                <Lock className="w-6 h-6 text-green-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.feature_1_title}</h3>
              <p className="text-gray-600 leading-relaxed">{t.feature_1_desc}</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <TrendingUp className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.feature_2_title}</h3>
              <p className="text-gray-600 leading-relaxed">{t.feature_2_desc}</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
                <ShieldCheck className="w-6 h-6 text-yellow-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.feature_3_title}</h3>
              <p className="text-gray-600 leading-relaxed">{t.feature_3_desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1548615724-268427f311c1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl font-bold text-center mb-16">{t.testimonials_title}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 backdrop-blur p-8 rounded-2xl border border-gray-700">
                <div className="flex gap-2 mb-4 text-yuan-gold">
                  {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                </div>
                <p className="text-lg text-gray-200 mb-6 italic">"{t.testi_1_text}"</p>
                <p className="font-bold text-white">— {t.testi_1_author}</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur p-8 rounded-2xl border border-gray-700">
                <div className="flex gap-2 mb-4 text-yuan-gold">
                  {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                </div>
                <p className="text-lg text-gray-200 mb-6 italic">"{t.testi_2_text}"</p>
                <p className="font-bold text-white">— {t.testi_2_author}</p>
              </div>
            </div>
         </div>
      </section>

      {/* AI Assistant Section (Gemini) */}
      <AiAssistant lang={lang} />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">{t.faq_title}</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
              <div className="flex items-start gap-4">
                <HelpCircle className="w-6 h-6 text-yuan-red shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-2 text-gray-900">{t.faq_1_q}</h4>
                  <p className="text-gray-600">{t.faq_1_a}</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
              <div className="flex items-start gap-4">
                <HelpCircle className="w-6 h-6 text-yuan-red shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-2 text-gray-900">{t.faq_2_q}</h4>
                  <p className="text-gray-600">{t.faq_2_a}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rich Footer */}
      <footer className="bg-gray-950 text-white pt-20 pb-10 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-yuan-red text-white p-1.5 rounded font-black text-lg">
                  ¥B
                </div>
                <span className="font-bold text-xl tracking-tight">YUAN<span className="text-gray-500">BR</span></span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {t.footer_about}
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yuan-red transition-colors"><Facebook className="w-4 h-4"/></a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yuan-red transition-colors"><Instagram className="w-4 h-4"/></a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yuan-red transition-colors"><Linkedin className="w-4 h-4"/></a>
              </div>
            </div>

            {/* Links Column */}
            <div>
              <h4 className="font-bold text-white mb-6">{t.footer_links}</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yuan-red transition-colors">{t.nav_home}</a></li>
                <li><a href="#" className="hover:text-yuan-red transition-colors">{t.nav_features}</a></li>
                <li><a href="#" className="hover:text-yuan-red transition-colors">{t.nav_calculator}</a></li>
                <li><a href="#" className="hover:text-yuan-red transition-colors">{t.nav_login_supplier}</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="font-bold text-white mb-6">{t.footer_legal}</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yuan-red transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-yuan-red transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-yuan-red transition-colors">Compliance</a></li>
                <li><a href="#" className="hover:text-yuan-red transition-colors">Security</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="font-bold text-white mb-6">{t.footer_contact}</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-yuan-red shrink-0" />
                  <span>Av. Paulista, 1000 - Bela Vista<br/>São Paulo, SP - Brasil</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-yuan-red shrink-0" />
                  <span>No. 100 Century Ave, Pudong<br/>Shanghai - China</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-yuan-red shrink-0" />
                  <a href="mailto:contato@yuanbr.com" className="hover:text-white">contato@yuanbr.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>{t.footer_rights}</p>
            <div className="flex gap-4">
               <span>v1.0.2</span>
               <span>Status: <span className="text-green-500">Online</span></span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;