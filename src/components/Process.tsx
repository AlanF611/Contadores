import { processSteps, stats } from '@/data/content';

export default function Process() {
  return (
    <section id="proceso" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />

      <div className="container-max section-padding relative z-10">
        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 reveal">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-3xl font-extrabold text-slate-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Process steps */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-sm font-semibold text-emerald-600 tracking-wider uppercase">
            Cómo Trabajamos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
            Un proceso simple y transparente
          </h2>
          <p className="text-lg text-slate-600">
            En cuatro pasos claros transformamos la contabilidad de tu empresa
            en una herramienta de decisión, no un problema.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="reveal relative bg-white rounded-2xl p-7 border border-slate-100 hover:shadow-lg transition-all duration-300"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span className="text-5xl font-extrabold text-emerald-100 leading-none block mb-4">
                {step.number}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>

              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 z-10">
                  <div className="w-2 h-2 bg-emerald-300 rounded-full mx-auto" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
