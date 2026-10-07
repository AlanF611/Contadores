import { Calculator, Phone, Mail, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

const footerLinks = {
  Servicios: [
    { label: 'Contabilidad General', href: '#servicios' },
    { label: 'Declaraciones Fiscales', href: '#servicios' },
    { label: 'Nómina y Seguro Social', href: '#servicios' },
    { label: 'Constitución de Empresas', href: '#servicios' },
    { label: 'Auditoría y Revisión', href: '#servicios' },
    { label: 'Consultoría Financiera', href: '#servicios' },
  ],
  Empresa: [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="container-max section-padding py-16">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#inicio" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                <Calculator className="w-5.5 h-5.5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-lg text-white tracking-tight">
                  Conta<span className="text-emerald-500">Fiscal</span>
                </span>
                <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">
                  Contadores en México
                </span>
              </div>
            </a>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              Firma de contadores públicos certificados con más de 15 años de
              experiencia. Mantenemos tu empresa al corriente con el SAT y
              optimizamos tu situación fiscal.
            </p>

            <div className="space-y-3">
              <a
                href="tel:+525555555555"
                className="flex items-center gap-3 text-sm hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                55 5555 5555
              </a>
              <a
                href="mailto:contacto@contafiscal.mx"
                className="flex items-center gap-3 text-sm hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                contacto@contafiscal.mx
              </a>
              <p className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Av. Insurgentes Sur 1234, CDMX
              </p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-emerald-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} ContaFiscal. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
