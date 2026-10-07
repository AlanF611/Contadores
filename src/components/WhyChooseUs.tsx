import { whyChooseUs } from '@/data/content';
import { BadgeCheck } from 'lucide-react';

const aboutImage =
  'https://images.pexels.com/photos/7654438/pexels-photo-7654438.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function WhyChooseUs() {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-white">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative reveal">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="Equipo de contadores trabajando"
                className="w-full h-[400px] lg:h-[480px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white rounded-2xl p-6 shadow-xl max-w-[200px]">
              <p className="text-4xl font-extrabold mb-1">300+</p>
              <p className="text-sm text-emerald-50">
                empresas confían en nosotros
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="reveal delay-200">
            <span className="text-sm font-semibold text-emerald-600 tracking-wider uppercase">
              Por qué elegirnos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
              Más que contadores, somos tu aliado estratégico
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              No solo presentamos declaraciones. Trabajamos de la mano contigo
              para que tu contabilidad sea una ventaja competitiva.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {whyChooseUs.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-emerald-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex items-center gap-3 p-4 bg-emerald-50/60 rounded-xl border border-emerald-100">
              <BadgeCheck className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <p className="text-sm text-slate-700 font-medium">
                Miembros activos del Instituto Mexicano de Contadores Públicos
                (IMCP) y Colegio de Contadores Públicos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
