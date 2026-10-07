import { ArrowUpRight } from 'lucide-react';
import { services } from '@/data/content';

export default function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-white">
      <div className="container-max section-padding">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-sm font-semibold text-emerald-600 tracking-wider uppercase">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
            Soluciones contables integrales
          </h2>
          <p className="text-lg text-slate-600">
            Cubrimos todas las necesidades fiscales y contables de tu empresa
            con un equipo experto y herramientas de última generación.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="reveal group bg-white border border-slate-200/80 rounded-2xl p-7 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-600/5 transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-emerald-600 transition-colors duration-300">
                  <Icon
                    className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300"
                    strokeWidth={2}
                  />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-slate-700"
                    >
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  Más información
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
