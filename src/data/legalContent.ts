import type { SiteLocale } from '@/types'

export interface LegalSection {
  title: string
  content: string[]
  list?: string[]
}

export interface LegalDoc {
  type: 'privacy' | 'terms'
  locale: SiteLocale
  title: string
  lastUpdated: string
  summary: string
  sections: LegalSection[]
}

export const legalDocs: Record<string, LegalDoc> = {
  'en-privacy': {
    type: 'privacy',
    locale: 'en',
    title: 'Privacy Policy',
    lastUpdated: 'September 2026',
    summary:
      'This Privacy Policy explains how Axis Labs collects, uses, and safeguards personal information when you use the Tandapp website and mobile applications.',
    sections: [
      {
        title: '1. Introduction and Scope',
        content: [
          'Tandapp is an application developed and operated by Axis Labs ("we", "us", or "our"). This privacy notice governs your use of the Tandapp website (https://tandapp.net) and our mobile applications available on Google Play and Apple App Store.',
          'We respect your privacy and are committed to protecting your personal information. Tandapp is designed with a minimal-data approach: we only collect the information necessary to provide you with seamless group savings coordination.',
        ],
      },
      {
        title: '2. Information We Collect and How We Use It',
        content: [
          'To enable tanda tracking and group communication, Tandapp may process the following categories of information:',
        ],
        list: [
          'Account Information: When creating an account, we may collect your email address, display name or nickname, and optional profile avatar.',
          'Tanda Coordination Data: Group names, target savings amounts, contribution frequency, round dates, and participant status (paid, pending, late).',
          'Payment Proofs and Chat: Optional receipts or transfer screenshots that you choose to upload to verify contributions, as well as messages sent within your private group chat.',
          'Device and Diagnostic Information: Basic technical diagnostics (app version, operating system) required for crash prevention and performance reliability.',
        ],
      },
      {
        title: '3. Important Financial Notice: No Money Handling',
        content: [
          'Tandapp does NOT process, collect, hold, or transmit funds. All monetary contributions in your tanda take place directly between participants using external payment methods of their choice (cash, bank transfers, payment apps).',
          'We never request, collect, or store your bank account details, credit card numbers, or payment credentials.',
        ],
      },
      {
        title: '4. Third-Party Services and Data Sharing',
        content: [
          'We do not sell, rent, or trade your personal information to third parties or advertisers.',
          'We only share data with trusted infrastructure providers strictly necessary to deliver the service, such as secure cloud hosting and platform distribution services (Google Play Services, Apple App Store). These providers are bound by confidentiality obligations.',
        ],
      },
      {
        title: '5. Data Security and Retention',
        content: [
          'We implement appropriate technical and organizational safeguards to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
          'Your coordination records are retained as long as your account is active or needed to provide you with history of your completed groups.',
        ],
      },
      {
        title: '6. Your Rights and Data Deletion',
        content: [
          'Depending on your location (including under GDPR in Europe and similar privacy frameworks worldwide), you have the right to access, rectify, export, or request the deletion of your personal data.',
          'You may request the full deletion of your account and associated tanda records at any time by emailing us at drodriguez.apps@gmail.com.',
        ],
      },
      {
        title: '7. Contact Information',
        content: [
          'If you have questions or concerns regarding this Privacy Policy or our data handling practices, please contact us at:',
          'Axis Labs — Email: drodriguez.apps@gmail.com — Website: https://axislabs.eu',
        ],
      },
    ],
  },

  'es-privacy': {
    type: 'privacy',
    locale: 'es',
    title: 'Política de Privacidad',
    lastUpdated: 'Septiembre de 2026',
    summary:
      'Esta Política de Privacidad explica cómo Axis Labs recopila, utiliza y protege la información personal al utilizar el sitio web y las aplicaciones móviles de Tandapp.',
    sections: [
      {
        title: '1. Introducción y Ámbito de Aplicación',
        content: [
          'Tandapp es una aplicación desarrollada y operada por Axis Labs ("nosotros"). Este aviso de privacidad regula el uso del sitio web de Tandapp (https://tandapp.net) y de nuestras aplicaciones móviles disponibles en Google Play y App Store.',
          'Respetamos tu privacidad y estamos comprometidos con la protección de tus datos personales. Diseñamos Tandapp con un principio de minimización de datos: únicamente recopilamos la información indispensable para coordinar tus grupos de ahorro.',
        ],
      },
      {
        title: '2. Información que Recopilamos y su Uso',
        content: [
          'Para permitir la administración de tandas y la comunicación interna, Tandapp puede procesar las siguientes categorías de datos:',
        ],
        list: [
          'Datos de cuenta: Al registrarte, podemos recopilar tu correo electrónico, nombre o apodo público y foto de perfil opcional.',
          'Datos de coordinación de tandas: Nombres de grupos, montos acordados, periodicidad de las rondas, fechas de entrega y estados de aportación (pagado, pendiente, atrasado).',
          'Comprobantes de pago y chat: Capturas de pantalla o imágenes de recibos que decidas adjuntar para comprobar tus transferencias, así como los mensajes enviados en el chat privado del grupo.',
          'Datos técnicos de diagnóstico: Información básica del sistema operativo y versión de la aplicación para prevenir fallos técnicos.',
        ],
      },
      {
        title: '3. Aviso Financiero Esencial: Sin Custodia de Dinero',
        content: [
          'Tandapp NO procesa, guarda, transfiere ni custodia dinero. Todas las aportaciones económicas de tu tanda se realizan directamente entre los integrantes mediante los medios que el grupo decida (efectivo, transferencias SPEI o aplicaciones bancarias).',
          'Nunca solicitamos ni almacenamos números de tarjeta bancaria, cuentas de banco ni contraseñas financieras.',
        ],
      },
      {
        title: '4. Servicios de Terceros y Transferencia de Datos',
        content: [
          'No vendemos, rentamos ni comercializamos tus datos personales con terceros ni redes de publicidad.',
          'Solo compartimos datos con proveedores tecnológicos de infraestructura indispensables para el funcionamiento de la app (servidores en la nube seguros, Google Play y Apple App Store), todos sujetos a estrictos acuerdos de confidencialidad.',
        ],
      },
      {
        title: '5. Seguridad y Conservación de la Información',
        content: [
          'Aplicamos medidas técnicas y organizativas adecuadas para proteger tu información personal contra accesos no autorizados, alteraciones o pérdidas.',
          'Tus registros se conservan mientras mantengas activa tu cuenta o sean necesarios para consultar tu historial de tandas concluidas.',
        ],
      },
      {
        title: '6. Derechos de los Usuarios y Eliminación de Datos',
        content: [
          'Conforme a las normativas aplicables de protección de datos (incluido el RGPD), tienes derecho a acceder, corregir, portar o solicitar la eliminación total de tus datos personales.',
          'Puedes solicitar la eliminación definitiva de tu cuenta y de tus registros en cualquier momento enviando un correo a drodriguez.apps@gmail.com.',
        ],
      },
      {
        title: '7. Contacto',
        content: [
          'Para dudas, comentarios o solicitudes sobre esta Política de Privacidad, puedes comunicarte con nosotros en:',
          'Axis Labs — Correo electrónico: drodriguez.apps@gmail.com — Sitio web: https://axislabs.eu',
        ],
      },
    ],
  },

  'en-terms': {
    type: 'terms',
    locale: 'en',
    title: 'Terms of Service',
    lastUpdated: 'September 2026',
    summary:
      'These Terms of Service govern your access to and use of the Tandapp website and mobile applications operated by Axis Labs.',
    sections: [
      {
        title: '1. Acceptance of Terms',
        content: [
          'By accessing or using the Tandapp website (https://tandapp.net) or the Tandapp mobile applications on iOS or Android, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.',
        ],
      },
      {
        title: '2. Nature of Service: Coordination Only',
        content: [
          'Tandapp is an informational organization, scheduling, and communication tool designed to help private groups coordinate rotating savings associations (tandas, cundinas, susús, or ROSCAs).',
          'Tandapp is NOT a bank, credit union, financial institution, money transmitter, payment processor, or escrow agent. No money passes through or is held by Tandapp.',
          'All financial transactions, contributions, and payouts take place privately and directly between group members outside of the application.',
        ],
      },
      {
        title: '3. User Responsibilities and Group Trust',
        content: [
          'You are responsible for selecting trustworthy group members and verifying any payment proofs shared within the app.',
          'Axis Labs does not guarantee the honesty, solvency, or punctuality of any group participant and bears no liability for defaulted payments, unpaid turns, or disputes between group members.',
        ],
      },
      {
        title: '4. Acceptable Use',
        content: [
          'You agree to use Tandapp only for lawful purposes. You may not use the service to commit fraud, launder money, harass other users, or distribute abusive or illegal material.',
          'We reserve the right to suspend or terminate accounts that violate these terms or compromise the integrity of the platform.',
        ],
      },
      {
        title: '5. Intellectual Property',
        content: [
          'All trademarks, logos, visual designs, software code, and educational content on Tandapp are the intellectual property of Axis Labs and are protected under international copyright and trademark laws.',
        ],
      },
      {
        title: '6. Disclaimer of Warranties and Limitation of Liability',
        content: [
          'Tandapp is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied.',
          'To the fullest extent permitted by law, Axis Labs shall not be liable for any indirect, incidental, punitive, or consequential damages resulting from your use of the application or the financial conduct of other group participants.',
        ],
      },
      {
        title: '7. Governing Law and Jurisdiction',
        content: [
          'These Terms shall be governed by and construed in accordance with the laws of Spain. Any disputes arising in connection with these terms shall be subject to the competent courts of Spain.',
        ],
      },
      {
        title: '8. Contact Information',
        content: [
          'Questions regarding these Terms of Service may be addressed to:',
          'Axis Labs — Email: drodriguez.apps@gmail.com — Website: https://axislabs.eu',
        ],
      },
    ],
  },

  'es-terms': {
    type: 'terms',
    locale: 'es',
    title: 'Términos y Condiciones',
    lastUpdated: 'Septiembre de 2026',
    summary:
      'Estos Términos y Condiciones regulan el acceso y uso del sitio web y las aplicaciones móviles de Tandapp operados por Axis Labs.',
    sections: [
      {
        title: '1. Aceptación de los Términos',
        content: [
          'Al acceder o utilizar el sitio web de Tandapp (https://tandapp.net) o las aplicaciones móviles en iOS o Android, aceptas quedar vinculado por estos Términos y Condiciones. Si no estás de acuerdo con alguna parte, te solicitamos no utilizar nuestros servicios.',
        ],
      },
      {
        title: '2. Naturaleza del Servicio: Exclusivamente de Coordinación',
        content: [
          'Tandapp es una herramienta de organización, calendario y comunicación diseñada para facilitar la administración de tandas, cundinas y grupos de ahorro rotativo.',
          'Tandapp NO es un banco, entidad financiera, transmisor de dinero ni servicio de custodia (escrow). El dinero de los participantes nunca ingresa a la aplicación ni pasa por nuestras cuentas.',
          'Todas las aportaciones y cobros ocurren de manera directa y privada entre los participantes fuera de la plataforma.',
        ],
      },
      {
        title: '3. Responsabilidad del Usuario y Confianza Grupal',
        content: [
          'Cada usuario es responsable de elegir con cuidado a las personas con quienes forma sus grupos y de verificar la autenticidad de los comprobantes de pago compartidos.',
          'Axis Labs no garantiza la solvencia ni la puntualidad de ningún participante, y no asume responsabilidad alguna por atrasos, faltas de pago o desacuerdos económicos entre los miembros de una tanda.',
        ],
      },
      {
        title: '4. Uso Aceptable',
        content: [
          'Te comprometes a utilizar Tandapp únicamente con fines lícitos. Queda prohibido el uso del servicio para actividades fraudulentas, difamatorias o que atenten contra los derechos de terceros.',
          'Nos reservamos el derecho de suspender o cancelar cuentas que incumplan estas condiciones o hagan un mal uso del servicio.',
        ],
      },
      {
        title: '5. Propiedad Intelectual',
        content: [
          'Todos los diseños, logotipos, marcas, código de software y contenidos educativos de Tandapp son propiedad exclusiva de Axis Labs y están protegidos por las leyes de propiedad intelectual aplicables.',
        ],
      },
      {
        title: '6. Limitación de Responsabilidad',
        content: [
          'Tandapp se proporciona "tal cual" y según disponibilidad, sin garantías expresas o implícitas de ningún tipo.',
          'En la medida máxima permitida por la ley, Axis Labs no será responsable por daños indirectos, incidentales o emergentes derivados del uso de la aplicación o de los acuerdos financieros privados entre los usuarios.',
        ],
      },
      {
        title: '7. Legislación Aplicable y Jurisdicción',
        content: [
          'Estos Términos se rigen e interpretan de acuerdo con la legislación de España. Cualquier disputa que surja se someterá a los tribunales competentes de España.',
        ],
      },
      {
        title: '8. Contacto',
        content: [
          'Para consultas sobre estos Términos y Condiciones, puedes escribir a:',
          'Axis Labs — Correo electrónico: drodriguez.apps@gmail.com — Sitio web: https://axislabs.eu',
        ],
      },
    ],
  },
}

export function getLegalDoc(type: 'privacy' | 'terms', locale: SiteLocale): LegalDoc {
  const key = `${locale}-${type}`
  const doc = legalDocs[key]
  if (!doc) {
    throw new Error(`Legal document not found: ${key}`)
  }
  return doc
}
