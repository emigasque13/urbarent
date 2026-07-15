import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Mail, c as ArrowUpRight, i as MapPin, n as Truck, o as Construction, r as Phone, s as Clock, t as Wrench } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B6PQy7-a.js
var import_jsx_runtime = require_jsx_runtime();
var Logo_Urbarent_PNG_default = "/assets/Logo_Urbarent_PNG-C5BTcLyE.png";
var WHATSAPP = "https://wa.me/529992718313?text=Hola%20Urbarent%2C%20me%20gustar%C3%ADa%20cotizar%20un%20servicio.";
var services = [
	{
		icon: Construction,
		n: "01",
		title: "Construcción y Desmonte",
		desc: "Trabajos de construcción en general, limpieza, desmonte, despalme y desalojo de terrenos y áreas en construcción."
	},
	{
		icon: Truck,
		n: "02",
		title: "Renta de Maquinaria",
		desc: "Renta de maquinaria y equipo para limpieza, nivelación y adecuación de terrenos de cualquier escala."
	},
	{
		icon: Wrench,
		n: "03",
		title: "Terracerías y Pavimentación",
		desc: "Construcción de calles, terracerías, base hidráulica y pavimentación de vías terrestres con acabados de obra."
	}
];
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: Logo_Urbarent_PNG_default,
								alt: "Logotipo Urbarent",
								className: "h-20 w-auto object-contain"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-lg font-black uppercase tracking-tight text-black",
								children: ["Urba", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "rent"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-8 text-sm font-semibold uppercase tracking-wider md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#servicios",
									className: "hover:text-primary",
									children: "Servicios"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#nosotros",
									className: "hover:text-primary",
									children: "Nosotros"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contacto",
									className: "hover:text-primary",
									children: "Contacto"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: WHATSAPP,
							target: "_blank",
							rel: "noopener",
							className: "inline-flex shrink-0 items-center gap-2 bg-primary px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground transition hover:bg-ink hover:text-bone",
							children: ["Cotizar", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "h-4 w-4",
								strokeWidth: 2.5
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "top",
				className: "relative overflow-hidden border-b border-border bg-bone",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 grid-lines opacity-60",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute right-0 top-0 hidden h-full w-2/5 bg-ink lg:block",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:py-32",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-8 flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-12 bg-ink" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold uppercase tracking-[0.25em] text-ink/70",
										children: "Grupo Urbamex — Desde Mérida"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "text-[2.75rem] font-black uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl",
									children: [
										"Soluciones",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Integrales en",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "bg-primary px-3 py-1 text-primary-foreground",
											children: "Construcción"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-ink/40",
											children: "&"
										}),
										" Maquinaria."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-8 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg",
									children: "Ejecutamos obra civil, terracerías y pavimentación con maquinaria propia. Estructura, precisión y cumplimiento en cada metro cúbico."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 flex flex-wrap items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: WHATSAPP,
										target: "_blank",
										rel: "noopener",
										className: "group inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm font-bold uppercase tracking-wider text-bone transition hover:bg-primary hover:text-primary-foreground",
										children: ["Solicitar Cotización", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
											className: "h-5 w-5 transition group-hover:rotate-45",
											strokeWidth: 2.5
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#servicios",
										className: "inline-flex items-center gap-2 border-2 border-ink px-7 py-4 text-sm font-bold uppercase tracking-wider text-ink transition hover:bg-ink hover:text-bone",
										children: "Ver Servicios"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-ink/20 pt-8",
									children: [
										["15+", "Años de experiencia"],
										["200+", "Obras entregadas"],
										["24/7", "Soporte en obra"]
									].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-3xl font-black text-ink sm:text-4xl",
										children: k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-[11px] font-semibold uppercase tracking-wider text-ink/60",
										children: v
									})] }, k))
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative lg:col-span-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 ml-auto aspect-[4/5] w-full max-w-md border-4 border-ink bg-bone p-6 lg:mt-12",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "diag-stripes h-32 w-full",
										"aria-hidden": true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[10px] font-bold uppercase tracking-[0.3em] text-primary",
												children: "Especificación"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-2 text-2xl font-black uppercase leading-tight text-ink",
												children: [
													"Obra civil &",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"maquinaria pesada"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-6 space-y-2 text-sm font-medium text-ink/80",
												children: [
													"Desmonte y despalme",
													"Renta de equipo",
													"Base hidráulica",
													"Pavimentación"
												].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2 border-t border-ink/10 pt-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 bg-primary" }), s]
												}, s))
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute -bottom-4 -right-4 bg-primary px-4 py-2 text-xs font-black uppercase tracking-wider text-primary-foreground",
										children: "Est. 2009"
									})
								]
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "nosotros",
				className: "border-b border-border bg-ink text-bone",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-bold uppercase tracking-[0.3em] text-primary",
							children: "/ Quiénes Somos"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-4xl font-black uppercase leading-tight sm:text-5xl",
							children: [
								"Estructura",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"sobre la que",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"se construye."
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6 text-base leading-relaxed text-bone/80 lg:col-span-8 lg:text-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Urbarent es una empresa de construcción y renta de maquinaria con base en Mérida, Yucatán. Operamos en obra pública y privada, atendiendo a desarrolladores, constructoras y propietarios que requieren ejecución directa, sin intermediarios." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Nuestra operación se sostiene en tres pilares: equipo propio, cuadrillas calificadas y control estricto de tiempos. Cada proyecto se entrega con la misma rigurosidad, desde la limpieza de un predio hasta la pavimentación de una vialidad completa." })]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "servicios",
				className: "border-b border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-bold uppercase tracking-[0.3em] text-primary",
							children: "/ Servicios"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 max-w-2xl text-4xl font-black uppercase leading-tight sm:text-5xl",
							children: "Lo que ejecutamos en obra."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: WHATSAPP,
							target: "_blank",
							rel: "noopener",
							className: "text-sm font-bold uppercase tracking-wider text-ink underline decoration-primary decoration-2 underline-offset-4 hover:text-primary",
							children: "Hablemos de tu proyecto →"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-px border border-border bg-border md:grid-cols-3",
						children: services.map(({ icon: Icon, n, title, desc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group relative flex flex-col bg-background p-8 transition hover:bg-ink hover:text-bone sm:p-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-14 w-14 shrink-0 place-items-center border-2 border-ink bg-primary text-primary-foreground transition group-hover:border-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "h-7 w-7",
											strokeWidth: 2
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-xs font-bold tracking-widest text-ink/40 group-hover:text-bone/40",
										children: [n, " / 03"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-8 text-xl font-black uppercase leading-tight sm:text-2xl",
									children: title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 flex-1 text-sm leading-relaxed text-ink/70 group-hover:text-bone/75",
									children: desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary",
									children: ["Consultar", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
										className: "h-4 w-4",
										strokeWidth: 2.5
									})]
								})
							]
						}, n))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border bg-primary text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-10 sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl font-black uppercase leading-tight sm:text-3xl",
						children: "¿Tienes un terreno o una obra en puerta?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: WHATSAPP,
						target: "_blank",
						rel: "noopener",
						className: "inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm font-bold uppercase tracking-wider text-bone transition hover:bg-bone hover:text-ink",
						children: ["Escribir por WhatsApp", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
							className: "h-5 w-5",
							strokeWidth: 2.5
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contacto",
				className: "bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-bold uppercase tracking-[0.3em] text-primary",
								children: "/ Contacto"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-3 text-4xl font-black uppercase leading-tight sm:text-5xl",
								children: [
									"Cotiza directo",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"con el taller."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-md text-base leading-relaxed text-muted-foreground",
								children: "Atendemos cotizaciones, visitas a obra y renta de maquinaria. Respuesta directa por teléfono o correo en horario de oficina."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: WHATSAPP,
								target: "_blank",
								rel: "noopener",
								className: "mt-8 inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm font-bold uppercase tracking-wider text-bone transition hover:bg-primary hover:text-primary-foreground",
								children: ["WhatsApp directo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "h-5 w-5",
									strokeWidth: 2.5
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-px border border-border bg-border lg:col-span-7 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContactCard, {
								icon: Phone,
								label: "Teléfonos",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+529992718313",
									className: "block hover:text-primary",
									children: "999 271 8313"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+529999477243",
									className: "block hover:text-primary",
									children: "999 947 7243"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
								icon: Mail,
								label: "Correo",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:jefetaller@grupourbamex.com",
									className: "break-all hover:text-primary",
									children: "jefetaller@grupourbamex.com"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContactCard, {
								icon: Clock,
								label: "Horarios",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Lun – Vie · 8:00 am – 5:00 pm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Sábados · 8:00 am – 12:00 pm" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContactCard, {
								icon: MapPin,
								label: "Ubicación",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Mérida, Yucatán" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-muted-foreground",
									children: "Grupo Urbamex"
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border bg-ink text-bone",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-8 sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-8 w-8 place-items-center bg-primary text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-black tracking-tighter",
								children: "UR"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm font-black uppercase tracking-tight",
							children: ["Urba", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "rent"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs font-semibold uppercase tracking-wider text-bone/60",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Urbarent · Grupo Urbamex — Todos los derechos reservados"
						]
					})]
				})
			})
		]
	});
}
function ContactCard({ icon: Icon, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4 bg-background p-7",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-10 w-10 shrink-0 place-items-center border-2 border-ink bg-bone",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "h-5 w-5",
					strokeWidth: 2.25
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[11px] font-bold uppercase tracking-[0.25em] text-ink/60",
				children: label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-base font-semibold leading-relaxed text-ink",
			children
		})]
	});
}
//#endregion
export { Landing as component };
