import { ArrowRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

const heroImage =
  'https://images.pexels.com/photos/7654120/pexels-photo-7654120.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const highlights = [
  'Cumplimiento fiscal garantizado ante el SAT',
  'Reportes financieros en tiempo real 24/7',
  'Equipo de contadores públicos certificados',
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/40"
    >
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-200/20 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-200/15 rounded-full blur-3xl -z-0" />

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200/60 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">
                Contadores Públicos Certificados · IMCP
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Tu contabilidad al día,
              <br />
              <span className="text-emerald-600">sin complicaciones</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Servicios contables, fiscales y de nómina para empresas en México.
              Te mantenemos al corriente con el SAT, optimizas tus impuestos y
              tomas decisiones con información clara y oportuna.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#contacto" className="btn-primary">
                Agenda tu consulta gratuita
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#servicios" className="btn-secondary">
                Ver servicios
              </a>
            </div>

            <div className="space-y-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm text-slate-700 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-fade-in delay-200">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/15">
              <img
                src={heroImage}
                alt="Contadores profesionales trabajando"
                className="w-full h-[420px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>

            {/* Floating card 1 */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-slate-900/10 p-5 max-w-[230px] animate-float">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-slate-900">15+</p>
                  <p className="text-xs text-slate-500 font-medium">
                    años de experiencia
                  </p>
                </div>
              </div>
            </div>

            {/* Floating card 2 */}
            <div
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl shadow-slate-900/10 p-4 animate-float"
              style={{ animationDelay: '1.5s' }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-4.5 h-4.5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">99.8%</p>
                  <p className="text-[10px] text-slate-500">cumplimiento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
