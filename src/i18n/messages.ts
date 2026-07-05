import type { SiteLocale } from '@/types'

export const defaultLocale: SiteLocale = 'en'
export const supportedLocales: SiteLocale[] = ['en', 'es']

export const messages = {
  en: {
    site: {
      name: 'Tandapp',
      tagline: 'Organize your tanda with confidence',
      description:
        'Tandapp keeps your group savings organized: track each round, see who paid and who is late, chat with your group, and build trust with clear shared records.',
    },
    nav: {
      home: 'Home',
      features: 'Features',
      onlineTandas: 'Online Tandas',
      groupSavings: 'Group Savings',
      paymentTracking: 'Payment Tracking',
      trust: 'Build Trust',
    },
    locale: {
      en: 'English',
      es: 'Español',
    },
    actions: {
      googlePlay: 'Get on Google Play',
      appStore: 'Download on App Store',
      learnMore: 'Learn more',
    },
    home: {
      eyebrow: 'Private group savings made simple',
      title: 'Organize your tanda without the confusion',
      lead: 'Tandapp replaces WhatsApp threads, forgotten payments, and messy spreadsheets with one clear space where everyone sees the same thing.',
      featureTitle: 'Everything your tanda needs',
      featureLead:
        'From the first invite to the final round. No money changes hands inside the app: just coordination, records, and clarity.',
      trustTitle: 'Built for trust, not just tracking',
      trustLead:
        'Tandas run on trust. Tandapp strengthens it with a shared record everyone can see, proof of every payment, and reminders that keep the group on schedule.',
      ctaTitle: 'Ready to organize your tanda?',
      ctaLead:
        'Free to use. Available in English and Spanish. Start your first group in under a minute.',
      freeBadge: 'Free to use',
    },
    features: {
      onlineTandas: {
        title: 'Online Tandas',
        description:
          'Create and manage your tanda digitally. Invite members with a code or link, set the contribution amount and round schedule, and let the app guide everyone through each turn.',
        sections: {
          howItWorks: {
            title: 'How it works',
            items: [
              {
                title: 'Create your group',
                description:
                  'Set the number of members, contribution amount, and how often rounds repeat. Share an invite link or code so people can join from anywhere.',
              },
              {
                title: 'Follow the rounds',
                description:
                  'Each round has a designated recipient. Everyone can see whose turn is active, when the payment is due, and the full schedule ahead.',
              },
              {
                title: 'Stay in sync',
                description:
                  'Group chat, payment confirmations, and push notifications keep every member aware of what is happening in real time, no matter where they are.',
              },
            ],
          },
          whyDigital: {
            title: 'Why go digital',
            description:
              'Traditional tandas rely on trust and memory. A spreadsheet works for one person but not for ten. WhatsApp threads bury payment confirmations under dozens of messages. Tandapp gives you a dedicated space where nothing gets lost.',
          },
        },
      },
      groupSavings: {
        title: 'Group Savings',
        description:
          'Tandas are one of the oldest and most effective ways to save as a group. Tandapp modernizes the format while keeping what makes it powerful: commitment, community, and discipline.',
        sections: {
          collective: {
            title: 'Save together, grow together',
            description:
              'When you contribute to a tanda, you are not just saving: you are building a system that helps everyone in the group reach their goals. Each round, someone receives the full pool, creating a predictable cycle of access to saved money.',
          },
          personal: {
            title: 'Your private savings, too',
            description:
              'Tandapp includes a private savings tracker visible only to you. Set a personal goal alongside your tanda and watch your progress in a space no other member can see.',
          },
          benefits: {
            title: 'Why group savings work',
            items: [
              {
                title: 'Built-in discipline',
                description:
                  'The group commitment keeps you consistent. Skipping a payment affects everyone, not just you.',
              },
              {
                title: 'No bank required',
                description:
                  'Tandas work with cash, transfers, or whatever the group agrees on. No credit checks, no paperwork, no fees.',
              },
              {
                title: 'Community momentum',
                description:
                  'Seeing others contribute motivates you to stay on track. The shared goal makes saving feel less isolating.',
              },
            ],
          },
        },
      },
      paymentTracking: {
        title: 'Payment Tracking',
        description:
          'Know exactly who paid, who is late, and what is still pending. Tandapp turns payment tracking from a guessing game into a clear, shared record.',
        sections: {
          status: {
            title: 'Clear status for every round',
            description:
              'Each member status is color-coded: paid in green, pending in gray, late in red. The whole group sees the same picture, so there is no ambiguity about who owes what.',
          },
          history: {
            title: 'A complete payment history',
            description:
              'Every payment is time-stamped and visible. If there is ever a dispute, the record is there, transparent and unchanged. Completed tandas stay accessible for future reference.',
          },
          reminders: {
            title: 'Gentle reminders, fewer excuses',
            description:
              'Send reminders to members who are late. A notification is more effective than a WhatsApp message that gets lost in a group chat with fifty unread messages.',
          },
        },
      },
      trust: {
        title: 'Build Trust',
        description:
          'Trust is the foundation of every tanda. Tandapp does not replace trust: it reinforces it with transparency, records, and a structure that leaves nothing to interpretation.',
        sections: {
          transparency: {
            title: 'Transparency by default',
            description:
              'Every action in the tanda is visible: who joined when, who paid on which date, who was late and why. No hidden information, no surprise changes.',
          },
          proof: {
            title: 'Proof attached to payments',
            description:
              'Members can attach screenshots or photos as proof of payment. The chat also supports images, so if someone pays via transfer, the receipt lives right next to the record.',
          },
          records: {
            title: 'Records that outlast the tanda',
            description:
              'Even after a tanda finishes, the full history stays available. If someone joins your next tanda, you can point to your track record of completed groups.',
          },
          dispute: {
            title: 'Dispute resolution made simple',
            description:
              'Disputes become easier to settle when there is one shared version of events. Instead of scrolling back through months of WhatsApp messages, open the tanda and see every round, every payment, and every chat message in one place.',
          },
        },
      },
    },
    footer: {
      legalHint:
        'Tandapp does not hold pooled money or process payments. It keeps private tanda coordination clear, documented, and easier to verify.',
      free: 'Tandapp is free to use.',
    },
    notFound: {
      title: 'Page not found',
      lead: 'The page you are looking for does not exist.',
      cta: 'Return home',
    },
  },
  es: {
    site: {
      name: 'Tandapp',
      tagline: 'Organiza tu tanda con confianza',
      description:
        'Tandapp mantiene tu tanda organizada: controla cada ronda, ve quién pagó y quién está atrasado, chatea con tu grupo y construye confianza con registros claros y compartidos.',
    },
    nav: {
      home: 'Inicio',
      features: 'Funciones',
      onlineTandas: 'Tandas en Línea',
      groupSavings: 'Ahorro Grupal',
      paymentTracking: 'Control de Pagos',
      trust: 'Confianza',
    },
    locale: {
      en: 'English',
      es: 'Español',
    },
    actions: {
      googlePlay: 'Descargar en Google Play',
      appStore: 'Descargar en App Store',
      learnMore: 'Más información',
    },
    home: {
      eyebrow: 'Ahorro grupal privado y sencillo',
      title: 'Organiza tu tanda sin confusiones',
      lead: 'Tandapp reemplaza los hilos de WhatsApp, los pagos olvidados y las hojas de cálculo desordenadas con un espacio claro donde todos ven lo mismo.',
      featureTitle: 'Todo lo que tu tanda necesita',
      featureLead:
        'Desde la primera invitación hasta la última ronda. El dinero nunca pasa por la app: solo coordinación, registros y claridad.',
      trustTitle: 'Diseñado para la confianza, no solo para el control',
      trustLead:
        'Las tandas funcionan con confianza. Tandapp la refuerza con un registro compartido que todos pueden ver, comprobantes de cada pago y recordatorios que mantienen al grupo al día.',
      ctaTitle: '¿Listo para organizar tu tanda?',
      ctaLead:
        'Gratis. Disponible en español e inglés. Crea tu primer grupo en menos de un minuto.',
      freeBadge: 'Gratis',
    },
    features: {
      onlineTandas: {
        title: 'Tandas en Línea',
        description:
          'Crea y gestiona tu tanda digitalmente. Invita a los miembros con un código o enlace, define el monto de la contribución y el calendario de rondas, y deja que la app guíe a todos en cada turno.',
        sections: {
          howItWorks: {
            title: 'Cómo funciona',
            items: [
              {
                title: 'Crea tu grupo',
                description:
                  'Define el número de participantes, el monto de aportación y la frecuencia de las rondas. Comparte un enlace o código de invitación para que la gente se una desde cualquier lugar.',
              },
              {
                title: 'Sigue las rondas',
                description:
                  'Cada ronda tiene un destinatario asignado. Todos pueden ver de quién es el turno, cuándo vence el pago y el calendario completo.',
              },
              {
                title: 'Todos sincronizados',
                description:
                  'El chat grupal, las confirmaciones de pago y las notificaciones push mantienen a cada miembro al tanto de lo que ocurre en tiempo real, sin importar dónde estén.',
              },
            ],
          },
          whyDigital: {
            title: 'Por qué digitalizar tu tanda',
            description:
              'Las tandas tradicionales dependen de la confianza y la memoria. Una hoja de cálculo funciona para una persona pero no para diez. Los hilos de WhatsApp entierran confirmaciones de pago bajo decenas de mensajes. Tandapp te da un espacio dedicado donde nada se pierde.',
          },
        },
      },
      groupSavings: {
        title: 'Ahorro Grupal',
        description:
          'Las tandas son una de las formas más antiguas y efectivas de ahorrar en grupo. Tandapp moderniza el formato manteniendo lo que lo hace poderoso: compromiso, comunidad y disciplina.',
        sections: {
          collective: {
            title: 'Ahorren juntos, crezcan juntos',
            description:
              'Cuando contribuyes a una tanda, no solo estás ahorrando: estás construyendo un sistema que ayuda a todos en el grupo a alcanzar sus metas. En cada ronda, alguien recibe el fondo completo, creando un ciclo predecible de acceso al dinero ahorrado.',
          },
          personal: {
            title: 'Tu ahorro privado, también',
            description:
              'Tandapp incluye un registro de ahorro privado visible solo para ti. Define una meta personal junto a tu tanda y sigue tu progreso en un espacio que ningún otro miembro puede ver.',
          },
          benefits: {
            title: 'Por qué funciona el ahorro grupal',
            items: [
              {
                title: 'Disciplina incorporada',
                description:
                  'El compromiso grupal te mantiene constante. Saltarte un pago afecta a todos, no solo a ti.',
              },
              {
                title: 'Sin banco necesario',
                description:
                  'Las tandas funcionan con efectivo, transferencias o lo que el grupo acuerde. Sin verificación de crédito, sin papeleo, sin comisiones.',
              },
              {
                title: 'Impulso comunitario',
                description:
                  'Ver que otros contribuyen te motiva a mantener el ritmo. La meta compartida hace que ahorrar se sienta menos solitario.',
              },
            ],
          },
        },
      },
      paymentTracking: {
        title: 'Control de Pagos',
        description:
          'Conoce exactamente quién pagó, quién está atrasado y qué sigue pendiente. Tandapp convierte el control de pagos de un juego de adivinanzas en un registro claro y compartido.',
        sections: {
          status: {
            title: 'Estado claro en cada ronda',
            description:
              'El estado de cada miembro se muestra con colores: pagado en verde, pendiente en gris, atrasado en rojo. Todo el grupo ve la misma información, así que no hay ambigüedad sobre quién debe qué.',
          },
          history: {
            title: 'Un historial de pagos completo',
            description:
              'Cada pago queda registrado con fecha y hora. Si alguna vez hay una disputa, el registro está ahí, transparente y sin alteraciones. Las tandas finalizadas permanecen accesibles para consulta futura.',
          },
          reminders: {
            title: 'Recordatorios amables, menos excusas',
            description:
              'Envía recordatorios a los miembros atrasados. Una notificación es más efectiva que un mensaje de WhatsApp que se pierde en un chat grupal con cincuenta mensajes sin leer.',
          },
        },
      },
      trust: {
        title: 'Construir Confianza',
        description:
          'La confianza es la base de toda tanda. Tandapp no reemplaza la confianza: la refuerza con transparencia, registros y una estructura que no deja nada a la interpretación.',
        sections: {
          transparency: {
            title: 'Transparencia por defecto',
            description:
              'Cada acción en la tanda es visible: quién se unió y cuándo, quién pagó en qué fecha, quién se atrasó y por qué. Sin información oculta, sin cambios sorpresa.',
          },
          proof: {
            title: 'Comprobantes adjuntos a los pagos',
            description:
              'Los miembros pueden adjuntar capturas de pantalla o fotos como comprobante de pago. El chat también admite imágenes, así que si alguien paga por transferencia, el recibo queda junto al registro.',
          },
          records: {
            title: 'Registros que sobreviven a la tanda',
            description:
              'Incluso después de que una tanda termina, el historial completo sigue disponible. Si alguien se une a tu próxima tanda, puedes mostrar tu historial de grupos completados.',
          },
          dispute: {
            title: 'Resolver disputas, más fácil',
            description:
              'Las disputas se resuelven más fácil cuando hay una sola versión compartida de los hechos. En lugar de buscar entre meses de mensajes de WhatsApp, abre la tanda y ve cada ronda, cada pago y cada mensaje en un solo lugar.',
          },
        },
      },
    },
    footer: {
      legalHint:
        'Tandapp no guarda ni procesa dinero. Mantiene la coordinación de tandas privadas clara, documentada y fácil de verificar.',
      free: 'Tandapp es gratis.',
    },
    notFound: {
      title: 'Página no encontrada',
      lead: 'La página que buscas no existe.',
      cta: 'Volver al inicio',
    },
  },
} as const

export function resolvePreferredLocale(): SiteLocale {
  if (typeof window === 'undefined') {
    return defaultLocale
  }

  const storedLocale = window.localStorage.getItem('site-locale')

  if (storedLocale === 'en' || storedLocale === 'es') {
    return storedLocale
  }

  return window.navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export function persistLocale(locale: SiteLocale): void {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem('site-locale', locale)
}
