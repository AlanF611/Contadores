import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/content';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="container-max section-padding">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-sm font-semibold text-emerald-600 tracking-wider uppercase">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
            Resolvemos tus dudas
          </h2>
          <p className="text-lg text-slate-600">
            Las preguntas más comunes que recibimos sobre nuestros servicios
            contables y fiscales.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="reveal border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-colors"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left group"
              >
                <span className="text-base font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-emerald-600 rotate-180'
                      : 'bg-slate-100'
                  }`}
                >
                  <ChevronDown
                    className={`w-4.5 h-4.5 transition-colors ${
                      openIndex === index ? 'text-white' : 'text-slate-500'
                    }`}
                  />
                </div>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
