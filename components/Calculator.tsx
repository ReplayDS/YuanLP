import React, { useState, useEffect } from 'react';
import { ArrowRightLeft, Calculator as CalcIcon, RefreshCw, Lock } from 'lucide-react';
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
    }
  }, [yuanValue, currentRate]);

  const handleYuanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setYuanValue(val);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full border border-gray-100 relative overflow-hidden group transform hover:-translate-y-1 transition-transform duration-300">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yuan-red to-yuan-gold"></div>
      
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-2 text-yuan-red">
          <CalcIcon className="w-6 h-6" />
          <h3 className="text-xl font-bold uppercase tracking-wider">{t.calc_title}</h3>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2 bg-green-50 px-2 py-1 rounded text-green-700 text-xs font-bold border border-green-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            LIVE
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Yuan Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-2">
            {t.calc_input_yuan}
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">¥</span>
            <input
              type="number"
              value={yuanValue}
              onChange={handleYuanChange}
              className="w-full pl-10 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-yuan-red focus:ring-0 outline-none transition-all text-xl font-bold text-gray-800"
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center">
          <div className="w-full h-px bg-gray-200"></div>
          <div className="absolute bg-white p-2 rounded-full shadow-sm border border-gray-100 text-yuan-red">
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
          <span className="flex items-center gap-1">
             1 CNY ≈ {currentRate.toFixed(4)} BRL
          </span>
          <button 
            onClick={updateRate}
            disabled={isUpdating}
            className="text-xs bg-yellow-200 hover:bg-yellow-300 px-2 py-1 rounded text-yellow-900 flex items-center gap-1 transition-colors"
          >
            <RefreshCw className={`w-3 h-3 ${isUpdating ? 'animate-spin' : ''}`} />
            {t.calc_refresh}
          </button>
        </div>
        <p className="text-[10px] text-yellow-700/60 text-right mt-1">
           Updated: {lastUpdated.toLocaleTimeString()}
        </p>
        <p className="text-xs text-yellow-700/80 mt-2 border-t border-yellow-200/50 pt-2">
          {t.calc_fee_note}
        </p>
      </div>

      <div className="mt-6">
        <button className="w-full bg-yuan-red hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-red-200 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 active:translate-y-0">
          <Lock className="w-5 h-5" />
          {t.calc_cta_button}
        </button>
      </div>
    </div>
  );
};

export default Calculator;