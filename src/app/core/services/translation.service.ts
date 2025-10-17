import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Translations {
  // Navbar
  aboutMe: string;
  experience: string;
  contactMe: string;
  language: string;
  
  // Home
  hello: string;
  developer: string;
  experienceButton: string;
  
  // About Me
  aboutTitle: string;
  aboutText1: string;
  aboutText2: string;
  aboutText3: string;
  aboutText4: string;
  skillsTitle: string;
  
  // Experience
  experienceTitle: string;
  capgemini: {
    title: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
  };
  edicbravos: {
    title: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
  };
  sercide: {
    title: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
    description5: string;
    description6: string;
    description7: string;
    description8: string;
  };
  comunytek: {
    title: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
    description5: string;
  };
  
  // Contact
  contactTitle: string;
  name: string;
  email: string;
  message: string;
  sendMessage: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  emailRequired: string;
  emailInvalid: string;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = new BehaviorSubject<'es' | 'en'>('es');
  public currentLanguage$ = this.currentLanguage.asObservable();

  private translations: { es: Translations; en: Translations } = {
    es: {
      // Navbar
      aboutMe: 'Sobre mí',
      experience: 'Experiencia laboral',
      contactMe: 'Contáctame',
      language: 'Idioma',
      
      // Home
      hello: 'Hola, Soy Luis García Arranz',
      developer: 'Desarrollador y gestor web',
      experienceButton: 'Experiencia',
      
      // About Me
      aboutTitle: 'Sobre mí',
      aboutText1: 'Desarrollador Senior especializado en Angular 19 🚀 con más de 6 años de experiencia transformando ideas complejas en soluciones digitales innovadoras. Mi expertise abarca desde el desarrollo de aplicaciones empresariales escalables hasta la creación de microSaas que generan valor real para los usuarios.',
      aboutText2: '💼 Actualmente lidero proyectos de alta complejidad en Capgemini como Senior Developer, mientras desarrollo mi propia empresa EdicBravos, donde creo soluciones web personalizadas y microSaas utilizando las tecnologías más avanzadas del mercado.',
      aboutText3: '🎯 Mi enfoque se centra en la excelencia técnica, la optimización del rendimiento y la entrega de resultados que superen las expectativas. Combino mi experiencia en Angular 19, WordPress y desarrollo full-stack para ofrecer soluciones completas y escalables.',
      aboutText4: '🔗 Busco colaborar en proyectos desafiantes que permitan aplicar mi expertise técnico y mi visión estratégica. Si necesitas un desarrollador senior que aporte valor desde el primer día, ¡hablemos sobre cómo puedo impulsar tu próximo proyecto!',
      skillsTitle: 'Mis habilidades',
      
      // Experience
      experienceTitle: 'Experiencia laboral 👨🏼‍💻',
      capgemini: {
        title: 'Senior Developer en Capgemini',
        description1: 'En Capgemini, trabajo como desarrollador senior especializado en Angular 19, liderando proyectos de desarrollo frontend de alta complejidad y desempeñando un papel clave en la arquitectura y toma de decisiones técnicas.',
        description2: 'Como desarrollador senior, guío al equipo en la implementación de las mejores prácticas de Angular 19, asegurando código escalable, mantenible y de alta calidad. Superviso la arquitectura de aplicaciones y establezco estándares de desarrollo.',
        description3: 'Implemento funcionalidades complejas utilizando las últimas características de Angular 19, incluyendo nuevas APIs, optimizaciones de rendimiento y patrones de diseño avanzados para crear experiencias de usuario excepcionales.',
        description4: 'Comparto conocimiento y mejores prácticas con el equipo, facilitando el crecimiento profesional de desarrolladores junior y mid-level, y colaborando estrechamente con otros equipos para garantizar la integración efectiva de soluciones.'
      },
      edicbravos: {
        title: 'Fundador y Desarrollador en EdicBravos',
        description1: 'Desde comienzos de 2025, he iniciado una nueva aventura empresarial desarrollando microSaas y páginas web, combinando mi experiencia técnica con una visión de negocio innovadora.',
        description2: 'Creo y desarrollo aplicaciones de software como servicio escalables, enfocándome en soluciones que resuelvan problemas específicos del mercado. Utilizo tecnologías modernas para garantizar un rendimiento óptimo y una experiencia de usuario excepcional.',
        description3: 'Implemento páginas web profesionales utilizando WordPress como plataforma base, optimizando para SEO, rendimiento y conversión. Evalúo constantemente la migración a frameworks modernos como Angular para proyectos que requieran mayor escalabilidad y personalización.',
        description4: 'Analizo las necesidades de cada cliente para determinar la mejor stack tecnológica, considerando factores como escalabilidad, mantenimiento y presupuesto. Cuando el volumen de clientes lo justifique, migro hacia soluciones más robustas como Angular para ofrecer mayor valor agregado.'
      },
      sercide: {
        title: 'Desarrollador Full Stack en SERCIDE',
        description1: 'En SERCIDE, asumí un rol como desarrollador full stack con responsabilidad en el desarrollo de aplicaciones eficientes y escalables, trabajando con tecnologías modernas y métodos ágiles.',
        description2: 'Desarrollo y optimización de interfaces de usuario dinámicas utilizando Angular, garantizando una experiencia fluida y amigable para el usuario final. Realicé tareas de refactorización para mejorar la eficiencia del código existente y actualicé la versión de Angular de la 13 a la 17, implementando mejoras en rendimiento y nuevas funcionalidades.',
        description3: 'Implementación de servicios y lógica empresarial robusta con Golang, asegurando un rendimiento elevado y una alta capacidad de respuesta.',
        description4: 'Configuración y mantenimiento de bases de datos tanto relacionales (PostgreSQL) como no relacionales (MongoDB) para cubrir diferentes necesidades de almacenamiento y procesamiento de datos.',
        description5: 'Implementación y despliegue de aplicaciones en Google Cloud Platform (GCP), optimizando el rendimiento y la escalabilidad en la nube.',
        description6: 'Uso de Git para la gestión de versiones y el trabajo en equipo, facilitando un desarrollo organizado y eficiente.',
        description7: 'Coordinación del flujo de trabajo mediante Jira, gestionando el backlog y resolviendo incidencias de manera ágil y colaborativa.',
        description8: 'Esta experiencia me permitió aplicar y ampliar mis conocimientos en desarrollo full stack, así como colaborar en equipos multidisciplinarios para alcanzar los objetivos del proyecto.'
      },
      comunytek: {
        title: 'Desarrollador de Soluciones Web',
        description1: 'Mi trabajo se centra en identificar y desarrollar soluciones óptimas para aplicaciones web, utilizando tecnologías de vanguardia que permiten ofrecer productos innovadores y altamente funcionales.',
        description2: 'Utilizo Angular para el desarrollo frontend dinámico y .NET para la implementación de la lógica backend, creando aplicaciones robustas y escalables.',
        description3: 'Empleo SQL para el almacenamiento y análisis eficiente de datos, asegurando un acceso rápido y seguro a la información crítica para el negocio.',
        description4: 'Proveo soporte y asesoría a los clientes, asegurando que sus necesidades y requisitos se integren en cada fase del desarrollo y que reciban soluciones alineadas con sus objetivos.',
        description5: 'Este rol me permite combinar habilidades técnicas y de consultoría, fortaleciendo la relación con los clientes y asegurando que cada aplicación cumpla con los estándares de calidad y funcionalidad requeridos en el mercado.'
      },
      
      // Contact
      contactTitle: '¿Hablamos?',
      name: 'Nombre*',
      email: 'Email*',
      message: 'Mensaje',
      sendMessage: 'Enviar Mensaje',
      namePlaceholder: 'Tu nombre completo',
      emailPlaceholder: 'tu.email@ejemplo.com',
      messagePlaceholder: 'Cuéntame sobre tu proyecto...',
      emailRequired: 'Debes ingresar un valor',
      emailInvalid: 'No es un email válido'
    },
    en: {
      // Navbar
      aboutMe: 'About Me',
      experience: 'Work Experience',
      contactMe: 'Contact Me',
      language: 'Language',
      
      // Home
      hello: 'Hello, I am Luis García Arranz',
      developer: 'Developer and web manager',
      experienceButton: 'Experience',
      
      // About Me
      aboutTitle: 'About Me',
      aboutText1: 'Senior Developer specialized in Angular 19 🚀 with more than 6 years of experience transforming complex ideas into innovative digital solutions. My expertise spans from developing scalable enterprise applications to creating microSaas that generate real value for users.',
      aboutText2: '💼 Currently leading high-complexity projects at Capgemini as Senior Developer, while developing my own company EdicBravos, where I create custom web solutions and microSaas using the most advanced technologies in the market.',
      aboutText3: '🎯 My focus centers on technical excellence, performance optimization, and delivering results that exceed expectations. I combine my experience in Angular 19, WordPress, and full-stack development to offer complete and scalable solutions.',
      aboutText4: '🔗 I seek to collaborate on challenging projects that allow me to apply my technical expertise and strategic vision. If you need a senior developer who adds value from day one, let\'s talk about how I can boost your next project!',
      skillsTitle: 'My Skills',
      
      // Experience
      experienceTitle: 'Work Experience 👨🏼‍💻',
      capgemini: {
        title: 'Senior Developer at Capgemini',
        description1: 'At Capgemini, I work as a senior developer specialized in Angular 19, leading high-complexity frontend development projects and playing a key role in architecture and technical decision-making.',
        description2: 'As a senior developer, I guide the team in implementing Angular 19 best practices, ensuring scalable, maintainable, and high-quality code. I supervise application architecture and establish development standards.',
        description3: 'I implement complex functionalities using the latest Angular 19 features, including new APIs, performance optimizations, and advanced design patterns to create exceptional user experiences.',
        description4: 'I share knowledge and best practices with the team, facilitating professional growth for junior and mid-level developers, and collaborating closely with other teams to ensure effective solution integration.'
      },
      edicbravos: {
        title: 'Founder and Developer at EdicBravos',
        description1: 'Since early 2025, I have started a new entrepreneurial journey developing microSaas and web pages, combining my technical experience with an innovative business vision.',
        description2: 'I create and develop scalable software-as-a-service applications, focusing on solutions that solve specific market problems. I use modern technologies to ensure optimal performance and exceptional user experience.',
        description3: 'I implement professional web pages using WordPress as a base platform, optimizing for SEO, performance, and conversion. I constantly evaluate migration to modern frameworks like Angular for projects requiring greater scalability and customization.',
        description4: 'I analyze each client\'s needs to determine the best technological stack, considering factors such as scalability, maintenance, and budget. When the client volume justifies it, I migrate to more robust solutions like Angular to offer greater added value.'
      },
      sercide: {
        title: 'Full Stack Developer at SERCIDE',
        description1: 'At SERCIDE, I assumed a role as a full stack developer with responsibility for developing efficient and scalable applications, working with modern technologies and agile methods.',
        description2: 'Development and optimization of dynamic user interfaces using Angular, ensuring a smooth and user-friendly experience for the end user. I performed refactoring tasks to improve the efficiency of existing code and updated Angular from version 13 to 17, implementing performance improvements and new functionalities.',
        description3: 'Implementation of robust services and business logic with Golang, ensuring high performance and responsiveness.',
        description4: 'Configuration and maintenance of both relational (PostgreSQL) and non-relational (MongoDB) databases to cover different data storage and processing needs.',
        description5: 'Implementation and deployment of applications on Google Cloud Platform (GCP), optimizing performance and scalability in the cloud.',
        description6: 'Use of Git for version management and teamwork, facilitating organized and efficient development.',
        description7: 'Workflow coordination through Jira, managing the backlog and resolving incidents in an agile and collaborative manner.',
        description8: 'This experience allowed me to apply and expand my knowledge in full stack development, as well as collaborate in multidisciplinary teams to achieve project objectives.'
      },
      comunytek: {
        title: 'Web Solutions Developer',
        description1: 'My work focuses on identifying and developing optimal solutions for web applications, using cutting-edge technologies that allow offering innovative and highly functional products.',
        description2: 'I use Angular for dynamic frontend development and .NET for backend logic implementation, creating robust and scalable applications.',
        description3: 'I use SQL for efficient data storage and analysis, ensuring fast and secure access to business-critical information.',
        description4: 'I provide support and advice to clients, ensuring that their needs and requirements are integrated into each development phase and that they receive solutions aligned with their objectives.',
        description5: 'This role allows me to combine technical and consulting skills, strengthening the relationship with clients and ensuring that each application meets the quality and functionality standards required in the market.'
      },
      
      // Contact
      contactTitle: 'Let\'s Talk?',
      name: 'Name*',
      email: 'Email*',
      message: 'Message',
      sendMessage: 'Send Message',
      namePlaceholder: 'Your full name',
      emailPlaceholder: 'your.email@example.com',
      messagePlaceholder: 'Tell me about your project...',
      emailRequired: 'You must enter a value',
      emailInvalid: 'Not a valid email'
    }
  };

  constructor() {}

  getCurrentLanguage(): 'es' | 'en' {
    return this.currentLanguage.value;
  }

  setLanguage(language: 'es' | 'en'): void {
    this.currentLanguage.next(language);
  }

  getTranslations(): Translations {
    return this.translations[this.currentLanguage.value];
  }

  getTranslation(key: keyof Translations): any {
    return this.translations[this.currentLanguage.value][key];
  }
}
