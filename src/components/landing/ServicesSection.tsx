import { FadeIn } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface Service {
  id: string;
  title: string;
  description: string;
  items: string[];
  image: string;
  imageAlt: string;
}

const SERVICES: Service[] = [
  {
    id: "redes-sociales",
    title: "Redes Sociales y Contenido",
    description:
      "Manejamos tus redes de principio a fin: creamos contenido que conecta con tu audiencia, construye comunidad y mantiene tu marca activa todos los días.",
    items: [
      "Estrategia de contenido",
      "Producción de foto y video",
      "Diseño de piezas gráficas",
      "Calendario editorial",
      "Community management",
      "Reportes mensuales",
    ],
    image: "/assets/features/feature-rrss.png",
    imageAlt: "Gestión de redes sociales y creación de contenido",
  },
  {
    id: "meta-ads",
    title: "Meta Ads y Generación de Leads",
    description:
      "Campañas en Meta para posicionar tu marca y campañas segmentadas que convierten interesados en clientes reales, con leads entregados directo a tu equipo.",
    items: [
      "Estrategia de pauta digital",
      "Campañas de posicionamiento de marca",
      "Campañas de generación de leads",
      "Segmentación de audiencias",
      "Distribución y entrega de leads",
      "Optimización y reportes de resultados",
    ],
    image: "/assets/features/feature-campanas-ads.png",
    imageAlt: "Campañas de Meta Ads y generación de leads",
  },
  {
    id: "paginas-web",
    title: "Páginas Web",
    description:
      "Diseñamos y desarrollamos sitios web rápidos, claros y pensados para vender — para restaurantes, tiendas y marcas que necesitan una presencia digital seria.",
    items: [
      "Diseño web a medida",
      "Landing pages de conversión",
      "Catálogos y menús digitales",
      "Desarrollo y puesta en línea",
      "Optimización de velocidad y SEO básico",
      "Integración con WhatsApp",
    ],
    image: "/assets/features/feature-paginas-web.png",
    imageAlt: "Diseño y desarrollo de páginas web",
  },
];

const ServicesSection = () => (
  <section id="servicios" className="scroll-mt-24 py-24 md:py-36">
    <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
      <FadeIn>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Servicios
        </p>
        <h2 className="mt-4 max-w-[20ch] text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-foreground">
          Tres servicios, un solo objetivo: que tu negocio venda más.
        </h2>
      </FadeIn>

      <div className="mt-20 space-y-28 md:mt-28 md:space-y-40">
        {SERVICES.map((service, index) => (
          <FadeIn key={service.id}>
            <article
              id={service.id}
              className="grid items-start gap-10 md:grid-cols-2 md:gap-16 lg:gap-24"
            >
              <div className={cn("md:pt-6", index % 2 === 1 && "md:order-2")}>
                <h3 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  {service.title}
                </h3>
                <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-10 space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-border pb-3 text-sm font-medium text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={cn(index % 2 === 1 && "md:order-1")}>
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                  className="aspect-[3/4] w-full rounded-md object-cover"
                />
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
