import { createFileRoute } from "@tanstack/react-router";
import { Wrench, Truck, Construction, Phone, Mail, Clock, ArrowUpRight, MapPin } from "lucide-react";
import logoUrbarent from '../Logo_Urbarent_PNG.png';

export const Route = createFileRoute("/")({
  head: () => ({  
    meta: [
      { title: "Urbarent — Soluciones Integrales en Construcción y Maquinaria" },
      { name: "description", content: "Construcción, desmonte, despalme, renta de maquinaria, terracerías, base hidráulica y pavimentación de vías terrestres." },
    ],
  }),
  component: Landing,
});

const WHATSAPP = "https://wa.me/529992718313?text=Hola%20Urbarent%2C%20me%20gustar%C3%ADa%20cotizar%20un%20servicio.";

const services = [
  {
    icon: Construction,
    n: "01",
    title: "Construcción y Desmonte",
    desc: "Trabajos de construcción en general, limpieza, desmonte, despalme y desalojo de terrenos y áreas en construcción.",
  },
  {
    icon: Truck,
    n: "02",
    title: "Renta de Maquinaria",
    desc: "Renta de maquinaria y equipo para limpieza, nivelación y adecuación de terrenos de cualquier escala.",
  },
  {
    icon: Wrench,
    n: "03",
    title: "Terracerías y Pavimentación",
    desc: "Construcción de calles, terracerías, base hidráulica y pavimentación de vías terrestres con acabados de obra.",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-2">
            <img src={logoUrbarent} alt="Logotipo Urbarent" className="h-20 w-auto object-contain" />
            <span className="text-lg font-black uppercase tracking-tight text-black">
              Urba<span className="text-primary">rent</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wider md:flex">
            <a href="#servicios" className="hover:text-primary">Servicios</a>
            <a href="#nosotros" className="hover:text-primary">Nosotros</a>
            <a href="#contacto" className="hover:text-primary">Contacto</a>
          </nav>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener"
            className="inline-flex shrink-0 items-center gap-2 bg-primary px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground transition hover:bg-ink hover:text-bone"
          >
            Cotizar
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden border-b border-border bg-bone">
        <div className="absolute inset-0 grid-lines opacity-60" aria-hidden />
        <div className="absolute right-0 top-0 hidden h-full w-2/5 bg-ink lg:block" aria-hidden />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:py-32">
          <div className="lg:col-span-7">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-12 bg-ink" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-ink/70">
                Grupo Urbamex — Desde Mérida
              </span>
            </div>

            <h1 className="text-[2.75rem] font-black uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Soluciones
              <br />
              Integrales en
              <br />
              <span className="bg-primary px-3 py-1 text-primary-foreground">Construcción</span>
              <br />
              <span className="text-ink/40">&amp;</span> Maquinaria.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg">
              Ejecutamos obra civil, terracerías y pavimentación con maquinaria propia.
              Estructura, precisión y cumplimiento en cada metro cúbico.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm font-bold uppercase tracking-wider text-bone transition hover:bg-primary hover:text-primary-foreground"
              >
                Solicitar Cotización
                <ArrowUpRight className="h-5 w-5 transition group-hover:rotate-45" strokeWidth={2.5} />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 border-2 border-ink px-7 py-4 text-sm font-bold uppercase tracking-wider text-ink transition hover:bg-ink hover:text-bone"
              >
                Ver Servicios
              </a>
            </div>

            <div className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-ink/20 pt-8">
              {[
                ["15+", "Años de experiencia"],
                ["200+", "Obras entregadas"],
                ["24/7", "Soporte en obra"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="text-3xl font-black text-ink sm:text-4xl">{k}</div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-ink/60">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative z-10 ml-auto aspect-[4/5] w-full max-w-md border-4 border-ink bg-bone p-6 lg:mt-12">
              <div className="diag-stripes h-32 w-full" aria-hidden />
              <div className="mt-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                  Especificación
                </div>
                <div className="mt-2 text-2xl font-black uppercase leading-tight text-ink">
                  Obra civil &<br />maquinaria pesada
                </div>
                <div className="mt-6 space-y-2 text-sm font-medium text-ink/80">
                  {["Desmonte y despalme", "Renta de equipo", "Base hidráulica", "Pavimentación"].map((s) => (
                    <div key={s} className="flex items-center gap-2 border-t border-ink/10 pt-2">
                      <span className="h-1.5 w-1.5 bg-primary" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary px-4 py-2 text-xs font-black uppercase tracking-wider text-primary-foreground">
                Est. 2009
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="border-b border-border bg-ink text-bone">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-4">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              / Quiénes Somos
            </div>
            <h2 className="mt-4 text-4xl font-black uppercase leading-tight sm:text-5xl">
              Estructura<br />sobre la que<br />se construye.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-bone/80 lg:col-span-8 lg:text-lg">
            <p>
              Urbarent es una empresa de construcción y renta de maquinaria con base en Mérida, Yucatán.
              Operamos en obra pública y privada, atendiendo a desarrolladores, constructoras y
              propietarios que requieren ejecución directa, sin intermediarios.
            </p>
            <p>
              Nuestra operación se sostiene en tres pilares: equipo propio, cuadrillas calificadas y
              control estricto de tiempos. Cada proyecto se entrega con la misma rigurosidad,
              desde la limpieza de un predio hasta la pavimentación de una vialidad completa.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                / Servicios
              </div>
              <h2 className="mt-3 max-w-2xl text-4xl font-black uppercase leading-tight sm:text-5xl">
                Lo que ejecutamos en obra.
              </h2>
            </div>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="text-sm font-bold uppercase tracking-wider text-ink underline decoration-primary decoration-2 underline-offset-4 hover:text-primary"
            >
              Hablemos de tu proyecto →
            </a>
          </div>

          <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
            {services.map(({ icon: Icon, n, title, desc }) => (
              <article
                key={n}
                className="group relative flex flex-col bg-background p-8 transition hover:bg-ink hover:text-bone sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-14 w-14 shrink-0 place-items-center border-2 border-ink bg-primary text-primary-foreground transition group-hover:border-primary">
                    <Icon className="h-7 w-7" strokeWidth={2} />
                  </div>
                  <span className="font-mono text-xs font-bold tracking-widest text-ink/40 group-hover:text-bone/40">
                    {n} / 03
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-black uppercase leading-tight sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70 group-hover:text-bone/75">
                  {desc}
                </p>
                <div className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                  Consultar
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-10 sm:px-8">
          <h3 className="text-2xl font-black uppercase leading-tight sm:text-3xl">
            ¿Tienes un terreno o una obra en puerta?
          </h3>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm font-bold uppercase tracking-wider text-bone transition hover:bg-bone hover:text-ink"
          >
            Escribir por WhatsApp
            <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
          </a>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-5">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              / Contacto
            </div>
            <h2 className="mt-3 text-4xl font-black uppercase leading-tight sm:text-5xl">
              Cotiza directo<br />con el taller.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Atendemos cotizaciones, visitas a obra y renta de maquinaria. Respuesta directa
              por teléfono o correo en horario de oficina.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="mt-8 inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm font-bold uppercase tracking-wider text-bone transition hover:bg-primary hover:text-primary-foreground"
            >
              WhatsApp directo
              <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
            </a>
          </div>

          <div className="grid gap-px border border-border bg-border lg:col-span-7 sm:grid-cols-2">
            <ContactCard icon={Phone} label="Teléfonos">
              <a href="tel:+529992718313" className="block hover:text-primary">999 271 8313</a>
              <a href="tel:+529999477243" className="block hover:text-primary">999 947 7243</a>
            </ContactCard>
            <ContactCard icon={Mail} label="Correo">
              <a href="mailto:jefetaller@grupourbamex.com" className="break-all hover:text-primary">
                jefetaller@grupourbamex.com
              </a>
            </ContactCard>
            <ContactCard icon={Clock} label="Horarios">
              <div>Lun – Vie · 8:00 am – 5:00 pm</div>
              <div>Sábados · 8:00 am – 12:00 pm</div>
            </ContactCard>
            <ContactCard icon={MapPin} label="Ubicación">
              <div>Mérida, Yucatán</div>
              <div className="text-muted-foreground">Grupo Urbamex</div>
            </ContactCard>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-ink text-bone">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-8 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center bg-primary text-primary-foreground">
              <span className="text-[10px] font-black tracking-tighter">UR</span>
            </div>
            <span className="text-sm font-black uppercase tracking-tight">
              Urba<span className="text-primary">rent</span>
            </span>
          </div>
          <div className="text-xs font-semibold uppercase tracking-wider text-bone/60">
            © {new Date().getFullYear()} Urbarent · Grupo Urbamex — Todos los derechos reservados
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 bg-background p-7">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center border-2 border-ink bg-bone">
          <Icon className="h-5 w-5" strokeWidth={2.25} />
        </div>
        <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-ink/60">
          {label}
        </div>
      </div>
      <div className="text-base font-semibold leading-relaxed text-ink">{children}</div>
    </div>
  );
}
