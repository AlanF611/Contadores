import {
  Calculator,
  FileText,
  ReceiptText,
  Building2,
  Scale,
  TrendingUp,
  ShieldCheck,
  Users,
  ClipboardCheck,
  Wallet,
  Briefcase,
  LineChart,
} from 'lucide-react';

export const services = [
  {
    icon: Calculator,
    title: 'Contabilidad General',
    description:
      'Llevamos la contabilidad completa de tu empresa con estados financieros claros y precisos, cumpliendo con todas las normativas del CFF y las NIF.',
    features: ['Estados financieros mensuales', 'Balanzas de comprobación', 'Pólizas contables'],
  },
  {
    icon: ReceiptText,
    title: 'Declaraciones Fiscales',
    description:
      'Presentamos tus declaraciones mensuales y anuales ante el SAT: ISR, IVA, IESPS, IMSS y retenciones, siempre en tiempo y forma.',
    features: ['Declaraciones mensuales', 'Declaración anual', 'Avisos al SAT'],
  },
  {
    icon: FileText,
    title: 'Nómina y Seguro Social',
    description:
      'Cálculo y pago de nómina, cálculo de cuotas obrero-patronales ante el IMSS e INFONAVIT, y manejo de finiquitos y liquidaciones.',
    features: ['Cálculo de nómina semanal/quincenal', 'Movimientos ante IMSS', 'Finiquitos y liquidaciones'],
  },
  {
    icon: Building2,
    title: 'Constitución de Empresas',
    description:
      'Te asesoramos en la elección del régimen óptimo y tramitamos la constitución de tu sociedad ante notario, SAT e IMSS.',
    features: ['Persona moral o física', 'RFC y cédula fiscal', 'Padrón de proveedores'],
  },
  {
    icon: Scale,
    title: 'Auditoría y Revisión',
    description:
      'Auditorías internas y externas para garantizar la transparencia de tu información financiera y detectar oportunidades de mejora.',
    features: ['Auditoría de estados financieros', 'Revisión de inventarios', 'Dictamen fiscal'],
  },
  {
    icon: TrendingUp,
    title: 'Consultoría Financiera',
    description:
      'Planificación financiera y estratégica para optimizar tus recursos, mejorar tu rentabilidad y tomar decisiones informadas.',
    features: ['Proyecciones financieras', 'Flujo de efectivo', 'Presupuestos'],
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Diagnóstico Inicial',
    description:
      'Analizamos tu situación fiscal y contable actual para identificar áreas de oportunidad y riesgos.',
  },
  {
    number: '02',
    title: 'Propuesta Personalizada',
    description:
      'Diseñamos un plan a la medida de tu empresa con objetivos claros, costos transparentes y tiempos definidos.',
  },
  {
    number: '03',
    title: 'Implementación',
    description:
      'Ejecutamos el plan con nuestro equipo de expertos, integrando herramientas digitales para un manejo eficiente.',
  },
  {
    number: '04',
    title: 'Seguimiento Continuo',
    description:
      'Damos seguimiento mensual, resolvemos dudas y ajustamos la estrategia conforme crece tu negocio.',
  },
];

export const stats = [
  { icon: Briefcase, value: '15+', label: 'Años de experiencia' },
  { icon: Users, value: '300+', label: 'Empresas atendidas' },
  { icon: ShieldCheck, value: '99.8%', label: 'Cumplimiento fiscal' },
  { icon: ClipboardCheck, value: '5,000+', label: 'Declaraciones presentadas' },
];

export const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: 'Cumplimiento Garantizado',
    description:
      'Nos mantenemos actualizados con las reformas fiscales más recientes para que tu empresa siempre esté al corriente.',
  },
  {
    icon: Wallet,
    title: 'Optimización de Impuestos',
    description:
      'Identificamos deducciones legítimas y estrategias para reducir tu carga fiscal dentro del marco de la ley.',
  },
  {
    icon: LineChart,
    title: 'Reportes en Tiempo Real',
    description:
      'Accede a tus reportes financieros cuando quieras con nuestro portal de cliente disponible 24/7.',
  },
  {
    icon: Users,
    title: 'Equipo Certificado',
    description:
      'Contadores públicos certificados por el IMCP y expertos en materia fiscal, laboral y de seguridad social.',
  },
];

export const testimonials = [
  {
    name: 'Roberto Mendoza',
    role: 'Director General, Distribuidora del Norte',
    content:
      'Llevamos más de 6 años con su servicio y nunca hemos tenido un problema con el SAT. Su equipo es profesional, siempre disponible y nos explican todo con claridad.',
    rating: 5,
  },
  {
    name: 'Patricia Ramírez',
    role: 'CEO, Innovatech Solutions',
    content:
      'Nos ayudaron a reestructurar fiscalmente la empresa y logramos un ahorro considerable. La asesoría es de primer nivel y muy personalizada.',
    rating: 5,
  },
  {
    name: 'Javier Cortés',
    role: 'Propietario, Restaurantes La Casona',
    content:
      'Como restaurante manejamos mucha nómina y facturación. Ellos se encargan de todo y yo me puedo concentrar en mi negocio. Excelente servicio.',
    rating: 5,
  },
];

export const faqs = [
  {
    question: '¿Cuánto cuesta el servicio de contabilidad?',
    answer:
      'Nuestros paquetes se adaptan al tamaño y necesidades de tu empresa. Ofrecemos planes desde $1,500 MXN mensuales para personas físicas hasta servicios corporativos personalizados. Te invitamos a una consulta gratuita para darte una propuesta a la medida.',
  },
  {
    question: '¿Trabajan con empresas de cualquier tamaño?',
    answer:
      'Sí, atendemos desde personas físicas con actividad empresarial y Pymes hasta corporativos con múltiples sucursales. Cada cliente recibe atención personalizada según su régimen fiscal.',
  },
  {
    question: '¿Cómo me entregan los reportes financieros?',
    answer:
      'Contamos con un portal de cliente en línea donde puedes consultar tus estados financieros, declaraciones y reportes las 24 horas. Además, enviamos reportes mensuales por correo y tenemos reuniones de revisión trimestrales.',
  },
  {
    question: '¿Qué pasa si tengo atrasos con el SAT?',
    answer:
      'Te ayudamos a regularizar tu situación ante el SAT, negociamos facilidades de pago, condonaciones de multas y diseñamos un plan para mantenerte al corriente. La primera consulta es gratuita.',
  },
  {
    question: '¿Están certificados?',
    answer:
      'Sí, nuestro equipo está conformado por Contadores Públicos Certificados por el Instituto Mexicano de Contadores Públicos (IMCP) con especialidades en materia fiscal, laboral y de auditoría.',
  },
];
