import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/content';

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="py-20 lg:py-28 bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl" />

      <div className="container-max section-padding relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-4 tracking-tight">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-slate-400">
            Empresas de todo México confían en nosotros para manejar su
            contabilidad y cumplir con sus obligaciones fiscales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={t.name}
              className="reveal bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/[0.07] transition-colors duration-300"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <Quote className="w-9 h-9 text-emerald-500/40 mb-4" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                "{t.content}"
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <div className="w-11 h-11 bg-emerald-600 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
