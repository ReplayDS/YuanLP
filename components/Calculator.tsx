import React, { useState, useEffect } from 'react';
import { ArrowRightLeft, Calculator as CalcIcon, RefreshCw, Lock, CheckCircle, Loader2, LogIn } from 'lucide-react';
import { BASE_EXCHANGE_RATE, TRANSACTION_FEE_PERCENT, TEXTS } from '../constants';
import { Language } from '../types';

interface CalculatorProps {
  lang: Language;
}

const Calculator: React.FC<CalculatorProps> = ({ lang }) => {
  const t = TEXTS[lang];
  const [yuanValue, setYuanValue] = useState<string>('10000');
  const [realValue, setRealValue] = useState<string>('');
  const [currentRate, setCurrentRate] = useState(BASE_EXCHANGE_RATE);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  // Function to simulate fetching live data
  const updateRate = () => {
    setIsUpdating(true);
    // Simulate network request duration
    setTimeout(() => {
      // Fluctuate rate slightly randomly (+- 1%)
      const fluctuation = (Math.random() * 0.02) - 0.01;
      const newRate = BASE_EXCHANGE_RATE + fluctuation;
      setCurrentRate(newRate);
      setLastUpdated(new Date());
      setIsUpdating(false);
    }, 1200);
  };

  const calculate = (cny: number, rate: number) => {
    const baseReal = cny * rate;
    const totalReal = baseReal * (1 + TRANSACTION_FEE_PERCENT);
    return totalReal.toFixed(2);
  };

  // Recalculate when rate or input changes
  useEffect(() => {
    const num = parseFloat(yuanValue);
    if (!isNaN(num)) {
      setRealValue(calculate(num, currentRate));
    } else {
      setRealValue('');
    }
  }, [yuanValue, currentRate]);

  const handleYuanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setYuanValue(val);
  };

  const handleLockRate = () => {
    if (!yuanValue || parseFloat(yuanValue) <= 0) return;
    
    setIsSubmitting(true);
    
    // Simulate API processing
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Simulate Redirect Delay
      setTimeout(() => {
        // In a real app, this would be: window.location.href = '/login';
        // For now we keep the state to show the user it worked
        console.log("Redirecting to login..."); 
      }, 2000);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full border border-gray-100 relative overflow-hidden group transform hover:-translate-y-1 transition-transform duration-300">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yuan-red to-yuan-gold"></div>
      
      {showSuccess ? (
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-6 animate-fade-in-up">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {lang === 'pt' ? 'Câmbio Travado!' : '汇率已锁定！'}
          </h3>
          <p className="text-gray-600 mb-6">
            {lang === 'pt' 
              ? 'Redirecionando para o Login Seguro para finalizar...' 
              : '正在重定向到安全登录以完成操作...'}
          </p>
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-yuan-red font-bold text-sm animate-pulse">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>{lang === 'pt' ? 'Aguarde...' : '请稍候...'}</span>
          </div>
          
          {/* Fallback button if redirect doesn't happen automatically in this demo */}
          <button 
            className="mt-8 text-xs text-gray-400 hover:text-gray-600 underline"
            onClick={() => window.location.reload()}
          >
            {lang === 'pt' ? 'Não foi redirecionado? Clique aqui' : '没有重定向？点击这里'}
          </button>
        </div>
      ) : null}

      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-2 text-yuan-red">
          <CalcIcon className="w-6 h-6" />
          <h3 className="text-xl font-bold uppercase tracking-wider">{t.calc_title}</h3>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2 bg-green-50 px-2 py-1 rounded text-green-700 text-xs font-bold border border-green-100 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            LIVE MARKET
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Yuan Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-2">
            {t.calc_input_yuan}
          </label>
          <div className="relative group/input">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold group-focus-within/input:text-yuan-red transition-colors">¥</span>
            <input
              type="number"
              value={yuanValue}
              onChange={handleYuanChange}
              className="w-full pl-10 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-yuan-red focus:ring-0 outline-none transition-all text-xl font-bold text-gray-800 placeholder-gray-300"
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center">
          <div className="w-full h-px bg-gray-200"></div>
          <div className="absolute bg-white p-2 rounded-full shadow-sm border border-gray-100 text-yuan-red hover:scale-110 transition-transform">
            <ArrowRightLeft className="w-5 h-5" />
          </div>
        </div>

        {/* Real Output */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-2">
            {t.calc_input_real}
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">R$</span>
            <input
              type="text"
              readOnly
              value={isUpdating ? '...' : realValue}
              className={`w-full pl-10 pr-4 py-4 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg text-xl font-bold text-br-green cursor-not-allowed transition-opacity ${isUpdating ? 'opacity-50' : 'opacity-100'}`}
              placeholder="0.00"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
        <div className="flex justify-between items-center text-sm text-yellow-800 font-medium mb-1">
          <span className="flex items-center gap-1 font-mono">
             1 CNY = {currentRate.toFixed(4)} BRL
          </span>
          <button 
            onClick={updateRate}
            disabled={isUpdating}
            className="text-xs bg-yellow-100 hover:bg-yellow-200 px-2 py-1 rounded text-yellow-900 flex items-center gap-1 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-3 h-3 ${isUpdating ? 'animate-spin' : ''}`} />
            {t.calc_refresh}
          </button>
        </div>
        <p className="text-[10px] text-yellow-700/60 text-right mt-1">
           Last tick: {lastUpdated.toLocaleTimeString()}
        </p>
        <p className="text-xs text-yellow-700/80 mt-2 border-t border-yellow-200/50 pt-2 leading-tight">
          {t.calc_fee_note}
        </p>
      </div>

      <div className="mt-6">
        <button 
          onClick={handleLockRate}
          disabled={isSubmitting || !yuanValue}
          className="w-full bg-yuan-red hover:bg-red-700 active:bg-red-800 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-red-200 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Lock className="w-5 h-5" />
          )}
          {isSubmitting ? 'Processando...' : t.calc_cta_button}
        </button>
      </div>
    </div>
  );
};

export default Calculator;