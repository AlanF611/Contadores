import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: '55 5555 5555',
    href: 'tel:+525555555555',
  },
  {
    icon: Mail,
    label: 'Correo',
    value: 'contacto@contafiscal.mx',
    href: 'mailto:contacto@contafiscal.mx',
  },
  {
    icon: MapPin,
    label: 'Oficina',
    value: 'Av. Insurgentes Sur 1234, CDMX',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Horario',
    value: 'Lun a Vie · 9:00 - 19:00',
    href: '#',
  },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section
      id="contacto"
      className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-emerald-50/40 relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-200/20 rounded-full blur-3xl" />

      <div className="container-max section-padding relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-sm font-semibold text-emerald-600 tracking-wider uppercase">
            Contáctanos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
            Agenda tu consulta gratuita
          </h2>
          <p className="text-lg text-slate-600">
            Sin costo y sin compromiso. Analizamos tu situación fiscal y te
            proponemos la mejor solución para tu empresa.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 reveal">
            <div className="bg-slate-900 rounded-3xl p-8 text-white h-full">
              <h3 className="text-xl font-bold mb-2">Información de contacto</h3>
              <p className="text-sm text-slate-400 mb-8">
                Estamos para ayudarte. Contáctanos por el medio que prefieras.
              </p>

              <div className="space-y-5">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300 flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                          {info.label}
                        </p>
                        <p className="text-sm font-semibold text-white">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-xs text-slate-400 leading-relaxed">
                  ContaFiscal es una firma de contadores públicos certificados
                  con más de 15 años de experiencia atendiendo empresas en toda
                  la República Mexicana.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 reveal delay-200">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
            >
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-sm text-slate-600">
                    Gracias por contactarnos. Te responderemos en menos de 24
                    horas hábiles.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm text-slate-800"
                        placeholder="Juan Pérez"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm text-slate-800"
                        placeholder="55 1234 5678"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm text-slate-800"
                        placeholder="juan@empresa.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm text-slate-800"
                        placeholder="Mi empresa S.A. de C.V."
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      ¿En qué te podemos ayudar? *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm text-slate-800 resize-none"
                      placeholder="Cuéntanos sobre tu empresa y qué servicios necesitas..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-400 text-center mt-4">
                    Al enviar este formulario aceptas que nos pongamos en
                    contacto contigo. No compartimos tu información.
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
