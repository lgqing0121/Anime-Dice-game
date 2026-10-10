import type { ArticleId, LocalizedArticle } from '../../content/types';

export const ES_ARTICLE_COPY = {
  "anime-dice-codes": {
    "title": "Códigos de Anime Dice y recompensas",
    "description": "Consulta UPDATE7 y UPDATE6, sus recompensas documentadas de forma prudente y la ruta exacta para canjear códigos en Anime Dice.",
    "intro": [
      "Los códigos de Anime Dice pueden aportar recursos sin sustituir el ciclo normal de tiradas y mejoras. Esta página solo incluye códigos presentes en las referencias aportadas.",
      "La lista fue revisada el 5 de octubre de 2026. El estado puede cambiar, así que escribe cada código exactamente y acepta la respuesta del juego como definitiva."
    ],
    "sections": [
      {
        "id": "current-codes",
        "title": "Códigos actuales",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Código",
              "Recompensa documentada"
            ],
            "rows": [
              [
                "UPDATE7",
                "Paquete gratuito de UPD 7"
              ],
              [
                "UPDATE6",
                "Lucky Spins, Trait Rerolls, Tickets y Gems"
              ]
            ]
          },
          {
            "type": "callout",
            "tone": "volatile",
            "title": "Estado variable",
            "body": "Revisado el 5 de octubre de 2026; no se publica una fecha de vencimiento sin verificar."
          }
        ]
      },
      {
        "id": "redeem",
        "title": "Cómo canjear",
        "blocks": [
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre Anime Dice y selecciona Shop.",
              "Baja hasta el final del panel.",
              "Escribe el código exacto y selecciona Redeem.",
              "Lee la respuesta del juego."
            ]
          }
        ]
      },
      {
        "id": "problems",
        "title": "Si el código falla",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Comprueba mayúsculas, elimina espacios y confirma el código completo. También puede haber sido usado o retirado."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "¿Qué entrega UPDATE6?",
        "answer": "La referencia documenta Lucky Spins, Trait Rerolls, Tickets y Gems."
      },
      {
        "question": "¿Cuándo se revisó la lista?",
        "answer": "El 5 de octubre de 2026; la respuesta actual del juego sigue siendo la autoridad."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "codes:update7",
      "codes:update6",
      "codes:redeem-path",
      "codes:reviewed-2026-10-05"
    ]
  },
  "anime-dice-guide": {
    "title": "Anime Dice: Guía para principiantes",
    "description": "Anime Dice: Guía para principiantes: guía centrada en el ciclo de tirar, equipar y mejorar el equipo, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de el ciclo de tirar, equipar y mejorar el equipo. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Guía para principiantes como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "guide-context",
        "title": "Guía para principiantes — Punto de partida",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. Roll obtiene personajes para compararlos."
          }
        ]
      },
      {
        "id": "guide-workflow",
        "title": "Guía para principiantes — Secuencia de acciones",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Guía para principiantes.",
              "Usa este punto como primera comprobación: Roll obtiene personajes para compararlos.",
              "Antes de decidir, compara también: Equip Best ayuda a revisar el equipo actual."
            ]
          }
        ]
      },
      {
        "id": "guide-evidence",
        "title": "Guía para principiantes — Comprobaciones confirmadas",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Equip Best ayuda a revisar el equipo actual.",
              "Money y Luck son prioridades iniciales prácticas."
            ]
          }
        ]
      },
      {
        "id": "guide-boundary",
        "title": "Guía para principiantes — Límite de la guía",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Guía para principiantes — Límite de la guía",
            "body": "El tiempo de progreso varía y no está garantizado."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Guía para principiantes: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Guía para principiantes."
      },
      {
        "question": "Guía para principiantes: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Equip Best ayuda a revisar el equipo actual."
      },
      {
        "question": "Guía para principiantes: ¿Qué sigue sin confirmar?",
        "answer": "El tiempo de progreso varía y no está garantizado."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-guide:confirmed-1",
      "anime-dice-guide:confirmed-2",
      "anime-dice-guide:confirmed-3",
      "anime-dice-guide:evidence-boundary"
    ]
  },
  "anime-dice-tips": {
    "title": "Anime Dice: Consejos de progresión",
    "description": "Anime Dice: Consejos de progresión: guía centrada en una rutina segura de tiradas y limpieza, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de una rutina segura de tiradas y limpieza. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Consejos de progresión como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "tips-context",
        "title": "Consejos de progresión — Punto de partida",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. Protege unidades útiles antes de vender."
          }
        ]
      },
      {
        "id": "tips-workflow",
        "title": "Consejos de progresión — Secuencia de acciones",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Consejos de progresión.",
              "Usa este punto como primera comprobación: Protege unidades útiles antes de vender.",
              "Antes de decidir, compara también: Revisa grade, trait y mutation por separado."
            ]
          }
        ]
      },
      {
        "id": "tips-evidence",
        "title": "Consejos de progresión — Comprobaciones confirmadas",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Revisa grade, trait y mutation por separado.",
              "Roll Speed resulta más útil tras estabilizar Money y Luck."
            ]
          }
        ]
      },
      {
        "id": "tips-boundary",
        "title": "Consejos de progresión — Límite de la guía",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Consejos de progresión — Límite de la guía",
            "body": "No se prometen resultados raros ni una velocidad fija."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Consejos de progresión: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Consejos de progresión."
      },
      {
        "question": "Consejos de progresión: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Revisa grade, trait y mutation por separado."
      },
      {
        "question": "Consejos de progresión: ¿Qué sigue sin confirmar?",
        "answer": "No se prometen resultados raros ni una velocidad fija."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-tips:confirmed-1",
      "anime-dice-tips:confirmed-2",
      "anime-dice-tips:confirmed-3",
      "anime-dice-tips:evidence-boundary"
    ]
  },
  "anime-dice-auto-roll": {
    "title": "Anime Dice: Tiradas automáticas",
    "description": "Anime Dice: Tiradas automáticas: guía centrada en el control Auto del panel Roll, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de el control Auto del panel Roll. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Tiradas automáticas como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "auto-roll-context",
        "title": "Tiradas automáticas — Punto de partida",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. Auto repite las tiradas sin pulsar cada vez."
          }
        ]
      },
      {
        "id": "auto-roll-workflow",
        "title": "Tiradas automáticas — Secuencia de acciones",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Tiradas automáticas.",
              "Usa este punto como primera comprobación: Auto repite las tiradas sin pulsar cada vez.",
              "Antes de decidir, compara también: Hide oculta la animación repetida de Roll."
            ]
          }
        ]
      },
      {
        "id": "auto-roll-evidence",
        "title": "Tiradas automáticas — Comprobaciones confirmadas",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Hide oculta la animación repetida de Roll.",
              "Las tiradas continúan con la animación oculta."
            ]
          }
        ]
      },
      {
        "id": "auto-roll-boundary",
        "title": "Tiradas automáticas — Límite de la guía",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Tiradas automáticas — Límite de la guía",
            "body": "Hide no confirma una opción universal para otras escenas."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Tiradas automáticas: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Tiradas automáticas."
      },
      {
        "question": "Tiradas automáticas: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Hide oculta la animación repetida de Roll."
      },
      {
        "question": "Tiradas automáticas: ¿Qué sigue sin confirmar?",
        "answer": "Hide no confirma una opción universal para otras escenas."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-auto-roll:confirmed-1",
      "anime-dice-auto-roll:confirmed-2",
      "anime-dice-auto-roll:confirmed-3",
      "anime-dice-auto-roll:evidence-boundary"
    ]
  },
  "anime-dice-auto-sell": {
    "title": "Anime Dice: Venta automática",
    "description": "Anime Dice: Venta automática: guía centrada en los ajustes del puesto Sell Units, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de los ajustes del puesto Sell Units. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Venta automática como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "auto-sell-context",
        "title": "Venta automática — Punto de partida",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. El puesto ofrece “Edit auto sell settings!”."
          }
        ]
      },
      {
        "id": "auto-sell-workflow",
        "title": "Venta automática — Secuencia de acciones",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Venta automática.",
              "Usa este punto como primera comprobación: El puesto ofrece “Edit auto sell settings!”.",
              "Antes de decidir, compara también: Usa Equip Best antes de fijar el umbral."
            ]
          }
        ]
      },
      {
        "id": "auto-sell-evidence",
        "title": "Venta automática — Comprobaciones confirmadas",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Usa Equip Best antes de fijar el umbral.",
              "Grade, trait y mutation pueden cambiar la utilidad."
            ]
          }
        ]
      },
      {
        "id": "auto-sell-boundary",
        "title": "Venta automática — Límite de la guía",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Venta automática — Límite de la guía",
            "body": "Conserva unidades dudosas hasta compararlas."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Venta automática: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Venta automática."
      },
      {
        "question": "Venta automática: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Usa Equip Best antes de fijar el umbral."
      },
      {
        "question": "Venta automática: ¿Qué sigue sin confirmar?",
        "answer": "Conserva unidades dudosas hasta compararlas."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-auto-sell:confirmed-1",
      "anime-dice-auto-sell:confirmed-2",
      "anime-dice-auto-sell:confirmed-3",
      "anime-dice-auto-sell:evidence-boundary"
    ]
  },
  "anime-dice-how-to-level-up": {
    "title": "Anime Dice: Cómo subir de nivel",
    "description": "Anime Dice: Cómo subir de nivel: guía centrada en invertir recursos solo en unidades duraderas, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de invertir recursos solo en unidades duraderas. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Cómo subir de nivel como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "how-to-level-up-context",
        "title": "Cómo subir de nivel — Punto de partida",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. El nivel es una parte de la evaluación."
          }
        ]
      },
      {
        "id": "how-to-level-up-workflow",
        "title": "Cómo subir de nivel — Secuencia de acciones",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Cómo subir de nivel.",
              "Usa este punto como primera comprobación: El nivel es una parte de la evaluación.",
              "Antes de decidir, compara también: Una tirada mejor puede reemplazar una unidad inicial."
            ]
          }
        ]
      },
      {
        "id": "how-to-level-up-evidence",
        "title": "Cómo subir de nivel — Comprobaciones confirmadas",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Una tirada mejor puede reemplazar una unidad inicial.",
              "Grade, trait y mutation son sistemas separados."
            ]
          }
        ]
      },
      {
        "id": "how-to-level-up-boundary",
        "title": "Cómo subir de nivel — Límite de la guía",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Cómo subir de nivel — Límite de la guía",
            "body": "Las fuentes no confirman un nivel máximo universal."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Cómo subir de nivel: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Cómo subir de nivel."
      },
      {
        "question": "Cómo subir de nivel: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Una tirada mejor puede reemplazar una unidad inicial."
      },
      {
        "question": "Cómo subir de nivel: ¿Qué sigue sin confirmar?",
        "answer": "Las fuentes no confirman un nivel máximo universal."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-how-to-level-up:confirmed-1",
      "anime-dice-how-to-level-up:confirmed-2",
      "anime-dice-how-to-level-up:confirmed-3",
      "anime-dice-how-to-level-up:evidence-boundary"
    ]
  },
  "anime-dice-how-to-skip-cutscenes": {
    "title": "Anime Dice: Cómo ocultar animaciones",
    "description": "Anime Dice: Cómo ocultar animaciones: guía centrada en el control Hide de la animación de Roll, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de el control Hide de la animación de Roll. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Cómo ocultar animaciones como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "how-to-skip-cutscenes-context",
        "title": "Cómo ocultar animaciones — Punto de partida",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. Hide está en la interfaz de Roll."
          }
        ]
      },
      {
        "id": "how-to-skip-cutscenes-workflow",
        "title": "Cómo ocultar animaciones — Secuencia de acciones",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Cómo ocultar animaciones.",
              "Usa este punto como primera comprobación: Hide está en la interfaz de Roll.",
              "Antes de decidir, compara también: La tirada sigue sin la animación repetida."
            ]
          }
        ]
      },
      {
        "id": "how-to-skip-cutscenes-evidence",
        "title": "Cómo ocultar animaciones — Comprobaciones confirmadas",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "La tirada sigue sin la animación repetida.",
              "Otras escenas pueden tener controles distintos."
            ]
          }
        ]
      },
      {
        "id": "how-to-skip-cutscenes-boundary",
        "title": "Cómo ocultar animaciones — Límite de la guía",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Cómo ocultar animaciones — Límite de la guía",
            "body": "No hay fuente que confirme un botón para omitir todas las escenas."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Cómo ocultar animaciones: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Cómo ocultar animaciones."
      },
      {
        "question": "Cómo ocultar animaciones: ¿Qué detalle aportado importa para la decisión?",
        "answer": "La tirada sigue sin la animación repetida."
      },
      {
        "question": "Cómo ocultar animaciones: ¿Qué sigue sin confirmar?",
        "answer": "No hay fuente que confirme un botón para omitir todas las escenas."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-how-to-skip-cutscenes:confirmed-1",
      "anime-dice-how-to-skip-cutscenes:confirmed-2",
      "anime-dice-how-to-skip-cutscenes:confirmed-3",
      "anime-dice-how-to-skip-cutscenes:evidence-boundary"
    ]
  },
  "anime-dice-how-to-join-group": {
    "title": "Anime Dice: Cómo unirse al grupo",
    "description": "Anime Dice: Cómo unirse al grupo: guía centrada en la comunidad verificada More & More Games, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de la comunidad verificada More & More Games. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Cómo unirse al grupo como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "how-to-join-group-context",
        "title": "Cómo unirse al grupo — Punto de partida",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. El grupo vinculado es More & More Games."
          }
        ]
      },
      {
        "id": "how-to-join-group-workflow",
        "title": "Cómo unirse al grupo — Secuencia de acciones",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Cómo unirse al grupo.",
              "Usa este punto como primera comprobación: El grupo vinculado es More & More Games.",
              "Antes de decidir, compara también: La referencia indica que el cofre puede dar spins."
            ]
          }
        ]
      },
      {
        "id": "how-to-join-group-evidence",
        "title": "Cómo unirse al grupo — Comprobaciones confirmadas",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "La referencia indica que el cofre puede dar spins.",
              "También puede ofrecer Gems o rerolls."
            ]
          }
        ]
      },
      {
        "id": "how-to-join-group-boundary",
        "title": "Cómo unirse al grupo — Límite de la guía",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Cómo unirse al grupo — Límite de la guía",
            "body": "Verifica el destino de Roblox y evita imitaciones."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Cómo unirse al grupo: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Cómo unirse al grupo."
      },
      {
        "question": "Cómo unirse al grupo: ¿Qué detalle aportado importa para la decisión?",
        "answer": "La referencia indica que el cofre puede dar spins."
      },
      {
        "question": "Cómo unirse al grupo: ¿Qué sigue sin confirmar?",
        "answer": "Verifica el destino de Roblox y evita imitaciones."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-how-to-join-group:confirmed-1",
      "anime-dice-how-to-join-group:confirmed-2",
      "anime-dice-how-to-join-group:confirmed-3",
      "anime-dice-how-to-join-group:evidence-boundary"
    ]
  },
  "anime-dice-tier-list": {
    "title": "Anime Dice: Tier list de unidades",
    "description": "Anime Dice: Tier list de unidades: guía centrada en evaluar cada unidad dentro del equipo actual, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de evaluar cada unidad dentro del equipo actual. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Tier list de unidades como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "tier-list-context",
        "title": "Tier list de unidades — Papel en la evaluación",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. El ranking depende de la versión del juego."
          }
        ]
      },
      {
        "id": "tier-list-workflow",
        "title": "Tier list de unidades — Decisión segura",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Tier list de unidades.",
              "Usa este punto como primera comprobación: El ranking depende de la versión del juego.",
              "Antes de decidir, compara también: Grade, trait, mutation y nivel cambian la evaluación."
            ]
          }
        ]
      },
      {
        "id": "tier-list-evidence",
        "title": "Tier list de unidades — Lista de propiedades",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Grade, trait, mutation y nivel cambian la evaluación.",
              "Equip Best es un inicio, no un ranking permanente."
            ]
          }
        ]
      },
      {
        "id": "tier-list-boundary",
        "title": "Tier list de unidades — Valores no confirmados",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Tier list de unidades — Valores no confirmados",
            "body": "No existe un ranking universal confirmado."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Tier list de unidades: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Tier list de unidades."
      },
      {
        "question": "Tier list de unidades: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Grade, trait, mutation y nivel cambian la evaluación."
      },
      {
        "question": "Tier list de unidades: ¿Qué sigue sin confirmar?",
        "answer": "No existe un ranking universal confirmado."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-tier-list:confirmed-1",
      "anime-dice-tier-list:confirmed-2",
      "anime-dice-tier-list:confirmed-3",
      "anime-dice-tier-list:evidence-boundary"
    ]
  },
  "anime-dice-units": {
    "title": "Anime Dice: Unidades",
    "description": "Anime Dice: Unidades: guía centrada en tirar, conservar, equipar y mejorar personajes, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de tirar, conservar, equipar y mejorar personajes. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Unidades como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "units-context",
        "title": "Unidades — Papel en la evaluación",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. Los personajes llegan mediante el ciclo de Roll."
          }
        ]
      },
      {
        "id": "units-workflow",
        "title": "Unidades — Decisión segura",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Unidades.",
              "Usa este punto como primera comprobación: Los personajes llegan mediante el ciclo de Roll.",
              "Antes de decidir, compara también: Las unidades permanentes merecen recursos antes que las temporales."
            ]
          }
        ]
      },
      {
        "id": "units-evidence",
        "title": "Unidades — Lista de propiedades",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Las unidades permanentes merecen recursos antes que las temporales.",
              "La descripción oficial confirma ganancias offline."
            ]
          }
        ]
      },
      {
        "id": "units-boundary",
        "title": "Unidades — Valores no confirmados",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Unidades — Valores no confirmados",
            "body": "Disponibilidad y balance pueden cambiar."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Unidades: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Unidades."
      },
      {
        "question": "Unidades: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Las unidades permanentes merecen recursos antes que las temporales."
      },
      {
        "question": "Unidades: ¿Qué sigue sin confirmar?",
        "answer": "Disponibilidad y balance pueden cambiar."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-units:confirmed-1",
      "anime-dice-units:confirmed-2",
      "anime-dice-units:confirmed-3",
      "anime-dice-units:evidence-boundary"
    ]
  },
  "anime-dice-traits": {
    "title": "Anime Dice: Traits",
    "description": "Anime Dice: Traits: guía centrada en evaluar trait sin confundirlo con otros atributos, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de evaluar trait sin confundirlo con otros atributos. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Traits como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "traits-context",
        "title": "Traits — Papel en la evaluación",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. Trait es una propiedad separada."
          }
        ]
      },
      {
        "id": "traits-workflow",
        "title": "Traits — Decisión segura",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Traits.",
              "Usa este punto como primera comprobación: Trait es una propiedad separada.",
              "Antes de decidir, compara también: UPDATE6 documenta Trait Rerolls como recompensa."
            ]
          }
        ]
      },
      {
        "id": "traits-evidence",
        "title": "Traits — Lista de propiedades",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "UPDATE6 documenta Trait Rerolls como recompensa.",
              "El trait debe leerse junto a su unidad."
            ]
          }
        ]
      },
      {
        "id": "traits-boundary",
        "title": "Traits — Valores no confirmados",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Traits — Valores no confirmados",
            "body": "No están confirmados todos los efectos y rankings actuales."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Traits: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Traits."
      },
      {
        "question": "Traits: ¿Qué detalle aportado importa para la decisión?",
        "answer": "UPDATE6 documenta Trait Rerolls como recompensa."
      },
      {
        "question": "Traits: ¿Qué sigue sin confirmar?",
        "answer": "No están confirmados todos los efectos y rankings actuales."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-traits:confirmed-1",
      "anime-dice-traits:confirmed-2",
      "anime-dice-traits:confirmed-3",
      "anime-dice-traits:evidence-boundary"
    ]
  },
  "anime-dice-mutation": {
    "title": "Anime Dice: Mutations",
    "description": "Anime Dice: Mutations: guía centrada en reconocer mutation como propiedad separada, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de reconocer mutation como propiedad separada. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Mutations como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "mutation-context",
        "title": "Mutations — Papel en la evaluación",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. Mutation forma parte del ciclo documentado."
          }
        ]
      },
      {
        "id": "mutation-workflow",
        "title": "Mutations — Decisión segura",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Mutations.",
              "Usa este punto como primera comprobación: Mutation forma parte del ciclo documentado.",
              "Antes de decidir, compara también: Mutation, grade y trait son etiquetas distintas."
            ]
          }
        ]
      },
      {
        "id": "mutation-evidence",
        "title": "Mutations — Lista de propiedades",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Mutation, grade y trait son etiquetas distintas.",
              "Revisa una unidad con mutation antes de venderla."
            ]
          }
        ]
      },
      {
        "id": "mutation-boundary",
        "title": "Mutations — Valores no confirmados",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Mutations — Valores no confirmados",
            "body": "No están confirmadas las probabilidades ni la lista completa."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Mutations: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Mutations."
      },
      {
        "question": "Mutations: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Mutation, grade y trait son etiquetas distintas."
      },
      {
        "question": "Mutations: ¿Qué sigue sin confirmar?",
        "answer": "No están confirmadas las probabilidades ni la lista completa."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-mutation:confirmed-1",
      "anime-dice-mutation:confirmed-2",
      "anime-dice-mutation:confirmed-3",
      "anime-dice-mutation:evidence-boundary"
    ]
  },
  "anime-dice-rarity": {
    "title": "Anime Dice: Rarezas",
    "description": "Anime Dice: Rarezas: guía centrada en comparar rarity con las demás propiedades, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de comparar rarity con las demás propiedades. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Rarezas como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "rarity-context",
        "title": "Rarezas — Papel en la evaluación",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. Rarity describe el resultado de una tirada."
          }
        ]
      },
      {
        "id": "rarity-workflow",
        "title": "Rarezas — Decisión segura",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Rarezas.",
              "Usa este punto como primera comprobación: Rarity describe el resultado de una tirada.",
              "Antes de decidir, compara también: No sustituye grade, trait, mutation o nivel."
            ]
          }
        ]
      },
      {
        "id": "rarity-evidence",
        "title": "Rarezas — Lista de propiedades",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "No sustituye grade, trait, mutation o nivel.",
              "Luck pertenece a la progresión, no a la rarity de una unidad."
            ]
          }
        ]
      },
      {
        "id": "rarity-boundary",
        "title": "Rarezas — Valores no confirmados",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Rarezas — Valores no confirmados",
            "body": "Las probabilidades exactas no están confirmadas."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Rarezas: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Rarezas."
      },
      {
        "question": "Rarezas: ¿Qué detalle aportado importa para la decisión?",
        "answer": "No sustituye grade, trait, mutation o nivel."
      },
      {
        "question": "Rarezas: ¿Qué sigue sin confirmar?",
        "answer": "Las probabilidades exactas no están confirmadas."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-rarity:confirmed-1",
      "anime-dice-rarity:confirmed-2",
      "anime-dice-rarity:confirmed-3",
      "anime-dice-rarity:evidence-boundary"
    ]
  },
  "anime-dice-grades": {
    "title": "Anime Dice: Grados",
    "description": "Anime Dice: Grados: guía centrada en leer grade de forma independiente, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de leer grade de forma independiente. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Grados como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "grades-context",
        "title": "Grados — Papel en la evaluación",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. Grade es distinto de trait y mutation."
          }
        ]
      },
      {
        "id": "grades-workflow",
        "title": "Grados — Decisión segura",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Grados.",
              "Usa este punto como primera comprobación: Grade es distinto de trait y mutation.",
              "Antes de decidir, compara también: Compáralo con la unidad base."
            ]
          }
        ]
      },
      {
        "id": "grades-evidence",
        "title": "Grados — Lista de propiedades",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Compáralo con la unidad base.",
              "Conserva resultados dudosos hasta revisarlos."
            ]
          }
        ]
      },
      {
        "id": "grades-boundary",
        "title": "Grados — Valores no confirmados",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Grados — Valores no confirmados",
            "body": "La tabla completa y modificadores actuales no están confirmados."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Grados: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Grados."
      },
      {
        "question": "Grados: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Compáralo con la unidad base."
      },
      {
        "question": "Grados: ¿Qué sigue sin confirmar?",
        "answer": "La tabla completa y modificadores actuales no están confirmados."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-grades:confirmed-1",
      "anime-dice-grades:confirmed-2",
      "anime-dice-grades:confirmed-3",
      "anime-dice-grades:evidence-boundary"
    ]
  },
  "anime-dice-max-level": {
    "title": "Anime Dice: Nivel máximo",
    "description": "Anime Dice: Nivel máximo: guía centrada en planear inversión sin inventar un límite, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de planear inversión sin inventar un límite. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Nivel máximo como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "max-level-context",
        "title": "Nivel máximo — Papel en la evaluación",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. Los recursos de nivel rinden mejor en unidades permanentes."
          }
        ]
      },
      {
        "id": "max-level-workflow",
        "title": "Nivel máximo — Decisión segura",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Nivel máximo.",
              "Usa este punto como primera comprobación: Los recursos de nivel rinden mejor en unidades permanentes.",
              "Antes de decidir, compara también: Nivel sigue separado de grade, trait y mutation."
            ]
          }
        ]
      },
      {
        "id": "max-level-evidence",
        "title": "Nivel máximo — Lista de propiedades",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Nivel sigue separado de grade, trait y mutation.",
              "Una nueva tirada puede cambiar la prioridad."
            ]
          }
        ]
      },
      {
        "id": "max-level-boundary",
        "title": "Nivel máximo — Valores no confirmados",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Nivel máximo — Valores no confirmados",
            "body": "Las fuentes no establecen un máximo universal."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Nivel máximo: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Nivel máximo."
      },
      {
        "question": "Nivel máximo: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Nivel sigue separado de grade, trait y mutation."
      },
      {
        "question": "Nivel máximo: ¿Qué sigue sin confirmar?",
        "answer": "Las fuentes no establecen un máximo universal."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-max-level:confirmed-1",
      "anime-dice-max-level:confirmed-2",
      "anime-dice-max-level:confirmed-3",
      "anime-dice-max-level:evidence-boundary"
    ]
  },
  "anime-dice-luck": {
    "title": "Anime Dice: Luck",
    "description": "Anime Dice: Luck: guía centrada en priorizar Luck al inicio, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de priorizar Luck al inicio. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Luck como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "luck-context",
        "title": "Luck — Papel en el progreso",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. Luck es una prioridad inicial práctica."
          }
        ]
      },
      {
        "id": "luck-workflow",
        "title": "Luck — Ruta de decisión",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Luck.",
              "Usa este punto como primera comprobación: Luck es una prioridad inicial práctica.",
              "Antes de decidir, compara también: Money y Luck pueden preceder a Roll Speed."
            ]
          }
        ]
      },
      {
        "id": "luck-evidence",
        "title": "Luck — Puntos confirmados",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Money y Luck pueden preceder a Roll Speed.",
              "Luck no garantiza una unidad concreta."
            ]
          }
        ]
      },
      {
        "id": "luck-boundary",
        "title": "Luck — Límites no confirmados",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Luck — Límites no confirmados",
            "body": "No están confirmadas las probabilidades de cada valor."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Luck: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Luck."
      },
      {
        "question": "Luck: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Money y Luck pueden preceder a Roll Speed."
      },
      {
        "question": "Luck: ¿Qué sigue sin confirmar?",
        "answer": "No están confirmadas las probabilidades de cada valor."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-luck:confirmed-1",
      "anime-dice-luck:confirmed-2",
      "anime-dice-luck:confirmed-3",
      "anime-dice-luck:evidence-boundary"
    ]
  },
  "anime-dice-max-luck": {
    "title": "Anime Dice: Luck máxima",
    "description": "Anime Dice: Luck máxima: guía centrada en comprobar límites en el panel actual, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de comprobar límites en el panel actual. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Luck máxima como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "max-luck-context",
        "title": "Luck máxima — Papel en el progreso",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. Luck aparece como prioridad de progresión."
          }
        ]
      },
      {
        "id": "max-luck-workflow",
        "title": "Luck máxima — Ruta de decisión",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Luck máxima.",
              "Usa este punto como primera comprobación: Luck aparece como prioridad de progresión.",
              "Antes de decidir, compara también: Rebirth puede afectar el progreso a largo plazo."
            ]
          }
        ]
      },
      {
        "id": "max-luck-evidence",
        "title": "Luck máxima — Puntos confirmados",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Rebirth puede afectar el progreso a largo plazo.",
              "El panel actual muestra los pasos disponibles."
            ]
          }
        ]
      },
      {
        "id": "max-luck-boundary",
        "title": "Luck máxima — Límites no confirmados",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Luck máxima — Límites no confirmados",
            "body": "No hay un máximo permanente confirmado."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Luck máxima: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Luck máxima."
      },
      {
        "question": "Luck máxima: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Rebirth puede afectar el progreso a largo plazo."
      },
      {
        "question": "Luck máxima: ¿Qué sigue sin confirmar?",
        "answer": "No hay un máximo permanente confirmado."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-max-luck:confirmed-1",
      "anime-dice-max-luck:confirmed-2",
      "anime-dice-max-luck:confirmed-3",
      "anime-dice-max-luck:evidence-boundary"
    ]
  },
  "anime-dice-gems": {
    "title": "Anime Dice: Gems",
    "description": "Anime Dice: Gems: guía centrada en proteger y gastar un recurso de progresión, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de proteger y gastar un recurso de progresión. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Gems como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "gems-context",
        "title": "Gems — Papel en el progreso",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. UPDATE6 incluye Gems en sus recompensas."
          }
        ]
      },
      {
        "id": "gems-workflow",
        "title": "Gems — Ruta de decisión",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Gems.",
              "Usa este punto como primera comprobación: UPDATE6 incluye Gems en sus recompensas.",
              "Antes de decidir, compara también: El cofre del grupo puede dar Gems según la guía."
            ]
          }
        ]
      },
      {
        "id": "gems-evidence",
        "title": "Gems — Puntos confirmados",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "El cofre del grupo puede dar Gems según la guía.",
              "Gasta recursos para una meta definida."
            ]
          }
        ]
      },
      {
        "id": "gems-boundary",
        "title": "Gems — Límites no confirmados",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Gems — Límites no confirmados",
            "body": "Precios, ofertas y mejor compra pueden cambiar."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Gems: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Gems."
      },
      {
        "question": "Gems: ¿Qué detalle aportado importa para la decisión?",
        "answer": "El cofre del grupo puede dar Gems según la guía."
      },
      {
        "question": "Gems: ¿Qué sigue sin confirmar?",
        "answer": "Precios, ofertas y mejor compra pueden cambiar."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-gems:confirmed-1",
      "anime-dice-gems:confirmed-2",
      "anime-dice-gems:confirmed-3",
      "anime-dice-gems:evidence-boundary"
    ]
  },
  "anime-dice-jackpot-roll": {
    "title": "Anime Dice: Jackpot Roll",
    "description": "Anime Dice: Jackpot Roll: guía centrada en comprobar la función antes de gastar, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de comprobar la función antes de gastar. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Jackpot Roll como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "jackpot-roll-context",
        "title": "Jackpot Roll — Papel en el progreso",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. Jackpot Roll se trata aquí como un tema de progreso que debe verificarse dentro del juego."
          }
        ]
      },
      {
        "id": "jackpot-roll-workflow",
        "title": "Jackpot Roll — Ruta de decisión",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Jackpot Roll.",
              "Usa este punto como primera comprobación: Jackpot Roll se trata aquí como un tema de progreso que debe verificarse dentro del juego.",
              "Antes de decidir, compara también: Luck se evalúa aparte del acceso a la función."
            ]
          }
        ]
      },
      {
        "id": "jackpot-roll-evidence",
        "title": "Jackpot Roll — Puntos confirmados",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Luck se evalúa aparte del acceso a la función.",
              "La interfaz actual define activación y coste."
            ]
          }
        ]
      },
      {
        "id": "jackpot-roll-boundary",
        "title": "Jackpot Roll — Límites no confirmados",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Jackpot Roll — Límites no confirmados",
            "body": "Requisitos, premios y probabilidades no están confirmados."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Jackpot Roll: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Jackpot Roll."
      },
      {
        "question": "Jackpot Roll: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Luck se evalúa aparte del acceso a la función."
      },
      {
        "question": "Jackpot Roll: ¿Qué sigue sin confirmar?",
        "answer": "Requisitos, premios y probabilidades no están confirmados."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-jackpot-roll:confirmed-1",
      "anime-dice-jackpot-roll:confirmed-2",
      "anime-dice-jackpot-roll:confirmed-3",
      "anime-dice-jackpot-roll:evidence-boundary"
    ]
  },
  "anime-dice-lucky-spin": {
    "title": "Anime Dice: Lucky Spins",
    "description": "Anime Dice: Lucky Spins: guía centrada en usar spins como recurso limitado, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de usar spins como recurso limitado. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Lucky Spins como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "lucky-spin-context",
        "title": "Lucky Spins — Papel en el progreso",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. UPDATE6 menciona Lucky Spins como recompensa."
          }
        ]
      },
      {
        "id": "lucky-spin-workflow",
        "title": "Lucky Spins — Ruta de decisión",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Lucky Spins.",
              "Usa este punto como primera comprobación: UPDATE6 menciona Lucky Spins como recompensa.",
              "Antes de decidir, compara también: El cofre del grupo también puede dar spins."
            ]
          }
        ]
      },
      {
        "id": "lucky-spin-evidence",
        "title": "Lucky Spins — Puntos confirmados",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "El cofre del grupo también puede dar spins.",
              "Revisa el resultado antes de vender."
            ]
          }
        ]
      },
      {
        "id": "lucky-spin-boundary",
        "title": "Lucky Spins — Límites no confirmados",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Lucky Spins — Límites no confirmados",
            "body": "Resultados, probabilidades y disponibilidad actuales no están confirmados."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Lucky Spins: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Lucky Spins."
      },
      {
        "question": "Lucky Spins: ¿Qué detalle aportado importa para la decisión?",
        "answer": "El cofre del grupo también puede dar spins."
      },
      {
        "question": "Lucky Spins: ¿Qué sigue sin confirmar?",
        "answer": "Resultados, probabilidades y disponibilidad actuales no están confirmados."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-lucky-spin:confirmed-1",
      "anime-dice-lucky-spin:confirmed-2",
      "anime-dice-lucky-spin:confirmed-3",
      "anime-dice-lucky-spin:evidence-boundary"
    ]
  },
  "anime-dice-rebirth": {
    "title": "Anime Dice: Rebirth",
    "description": "Anime Dice: Rebirth: guía centrada en preparar una decisión de largo plazo, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de preparar una decisión de largo plazo. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Rebirth como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "rebirth-context",
        "title": "Rebirth — Papel en el progreso",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. Rebirth pertenece a la progresión prolongada."
          }
        ]
      },
      {
        "id": "rebirth-workflow",
        "title": "Rebirth — Ruta de decisión",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Rebirth.",
              "Usa este punto como primera comprobación: Rebirth pertenece a la progresión prolongada.",
              "Antes de decidir, compara también: Update 7 añadió seis rutas de mejora de rebirth."
            ]
          }
        ]
      },
      {
        "id": "rebirth-evidence",
        "title": "Rebirth — Puntos confirmados",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Update 7 añadió seis rutas de mejora de rebirth.",
              "Lee los efectos del reinicio en el panel actual."
            ]
          }
        ]
      },
      {
        "id": "rebirth-boundary",
        "title": "Rebirth — Límites no confirmados",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Rebirth — Límites no confirmados",
            "body": "No se confirman aquí costes y efectos de cada paso."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Rebirth: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Rebirth."
      },
      {
        "question": "Rebirth: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Update 7 añadió seis rutas de mejora de rebirth."
      },
      {
        "question": "Rebirth: ¿Qué sigue sin confirmar?",
        "answer": "No se confirman aquí costes y efectos de cada paso."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-rebirth:confirmed-1",
      "anime-dice-rebirth:confirmed-2",
      "anime-dice-rebirth:confirmed-3",
      "anime-dice-rebirth:evidence-boundary"
    ]
  },
  "anime-dice-max-rebirth": {
    "title": "Anime Dice: Rebirth máximo",
    "description": "Anime Dice: Rebirth máximo: guía centrada en distinguir rutas de mejora de un límite final, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de distinguir rutas de mejora de un límite final. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Rebirth máximo como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "max-rebirth-context",
        "title": "Rebirth máximo — Papel en el progreso",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. Update 7 documenta seis rutas de mejora."
          }
        ]
      },
      {
        "id": "max-rebirth-workflow",
        "title": "Rebirth máximo — Ruta de decisión",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Rebirth máximo.",
              "Usa este punto como primera comprobación: Update 7 documenta seis rutas de mejora.",
              "Antes de decidir, compara también: El número de rutas no equivale a un máximo de rebirths."
            ]
          }
        ]
      },
      {
        "id": "max-rebirth-evidence",
        "title": "Rebirth máximo — Puntos confirmados",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "El número de rutas no equivale a un máximo de rebirths.",
              "Usa el panel actual para los límites."
            ]
          }
        ]
      },
      {
        "id": "max-rebirth-boundary",
        "title": "Rebirth máximo — Límites no confirmados",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Rebirth máximo — Límites no confirmados",
            "body": "No hay un máximo permanente confirmado."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Rebirth máximo: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Rebirth máximo."
      },
      {
        "question": "Rebirth máximo: ¿Qué detalle aportado importa para la decisión?",
        "answer": "El número de rutas no equivale a un máximo de rebirths."
      },
      {
        "question": "Rebirth máximo: ¿Qué sigue sin confirmar?",
        "answer": "No hay un máximo permanente confirmado."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-max-rebirth:confirmed-1",
      "anime-dice-max-rebirth:confirmed-2",
      "anime-dice-max-rebirth:confirmed-3",
      "anime-dice-max-rebirth:evidence-boundary"
    ]
  },
  "anime-dice-quest-shop": {
    "title": "Anime Dice: Tienda de misiones",
    "description": "Anime Dice: Tienda de misiones: guía centrada en comparar recompensas y compras actuales, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de comparar recompensas y compras actuales. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Tienda de misiones como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "quest-shop-context",
        "title": "Tienda de misiones — Papel en el progreso",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. Comprueba la tienda en la versión actual."
          }
        ]
      },
      {
        "id": "quest-shop-workflow",
        "title": "Tienda de misiones — Ruta de decisión",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Tienda de misiones.",
              "Usa este punto como primera comprobación: Comprueba la tienda en la versión actual.",
              "Antes de decidir, compara también: Gems, Tickets y spins son recursos diferentes."
            ]
          }
        ]
      },
      {
        "id": "quest-shop-evidence",
        "title": "Tienda de misiones — Puntos confirmados",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Gems, Tickets y spins son recursos diferentes.",
              "Compra según el plan del equipo."
            ]
          }
        ]
      },
      {
        "id": "quest-shop-boundary",
        "title": "Tienda de misiones — Límites no confirmados",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Tienda de misiones — Límites no confirmados",
            "body": "Inventario, precios y renovación no están confirmados."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Tienda de misiones: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Tienda de misiones."
      },
      {
        "question": "Tienda de misiones: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Gems, Tickets y spins son recursos diferentes."
      },
      {
        "question": "Tienda de misiones: ¿Qué sigue sin confirmar?",
        "answer": "Inventario, precios y renovación no están confirmados."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-quest-shop:confirmed-1",
      "anime-dice-quest-shop:confirmed-2",
      "anime-dice-quest-shop:confirmed-3",
      "anime-dice-quest-shop:evidence-boundary"
    ]
  },
  "anime-dice-tower": {
    "title": "Anime Dice: Tower",
    "description": "Anime Dice: Tower: guía centrada en preparar equipo y recursos para una entrada, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de preparar equipo y recursos para una entrada. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Tower como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "tower-context",
        "title": "Tower — Preparación",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. Revisa el equipo activo antes de entrar."
          }
        ]
      },
      {
        "id": "tower-workflow",
        "title": "Tower — Lista de Tower",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Tower.",
              "Usa este punto como primera comprobación: Revisa el equipo activo antes de entrar.",
              "Antes de decidir, compara también: Gear, Potions y Tickets son recursos distintos."
            ]
          }
        ]
      },
      {
        "id": "tower-evidence",
        "title": "Tower — Detalles respaldados",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Gear, Potions y Tickets son recursos distintos.",
              "Las fuentes tratan Tower como progresión."
            ]
          }
        ]
      },
      {
        "id": "tower-boundary",
        "title": "Tower — Detalles variables",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Tower — Detalles variables",
            "body": "Pisos, enemigos y recompensas pueden cambiar."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Tower: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Tower."
      },
      {
        "question": "Tower: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Gear, Potions y Tickets son recursos distintos."
      },
      {
        "question": "Tower: ¿Qué sigue sin confirmar?",
        "answer": "Pisos, enemigos y recompensas pueden cambiar."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-tower:confirmed-1",
      "anime-dice-tower:confirmed-2",
      "anime-dice-tower:confirmed-3",
      "anime-dice-tower:evidence-boundary"
    ]
  },
  "anime-dice-gear": {
    "title": "Anime Dice: Gear",
    "description": "Anime Dice: Gear: guía centrada en comparar equipo por origen y utilidad, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de comparar equipo por origen y utilidad. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Gear como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "gear-context",
        "title": "Gear — Preparación",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. Gear está vinculado a Tower en las fuentes."
          }
        ]
      },
      {
        "id": "gear-workflow",
        "title": "Gear — Lista de Tower",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Gear.",
              "Usa este punto como primera comprobación: Gear está vinculado a Tower en las fuentes.",
              "Antes de decidir, compara también: Compara cada pieza con unidad y objetivo."
            ]
          }
        ]
      },
      {
        "id": "gear-evidence",
        "title": "Gear — Detalles respaldados",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Compara cada pieza con unidad y objetivo.",
              "Vincula la forma de obtenerla a una fuente revisada."
            ]
          }
        ]
      },
      {
        "id": "gear-boundary",
        "title": "Gear — Detalles variables",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Gear — Detalles variables",
            "body": "Lista y modificadores en vivo no están confirmados."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Gear: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Gear."
      },
      {
        "question": "Gear: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Compara cada pieza con unidad y objetivo."
      },
      {
        "question": "Gear: ¿Qué sigue sin confirmar?",
        "answer": "Lista y modificadores en vivo no están confirmados."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-gear:confirmed-1",
      "anime-dice-gear:confirmed-2",
      "anime-dice-gear:confirmed-3",
      "anime-dice-gear:evidence-boundary"
    ]
  },
  "anime-dice-potion": {
    "title": "Anime Dice: Potions",
    "description": "Anime Dice: Potions: guía centrada en decidir cuándo usar un recurso temporal, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de decidir cuándo usar un recurso temporal. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Potions como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "potion-context",
        "title": "Potions — Preparación",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. Potions se tratan como preparación para Tower."
          }
        ]
      },
      {
        "id": "potion-workflow",
        "title": "Potions — Lista de Tower",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Potions.",
              "Usa este punto como primera comprobación: Potions se tratan como preparación para Tower.",
              "Antes de decidir, compara también: Lee el texto actual del objeto antes de usarlo."
            ]
          }
        ]
      },
      {
        "id": "potion-evidence",
        "title": "Potions — Detalles respaldados",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Lee el texto actual del objeto antes de usarlo.",
              "Reserva objetos limitados para una meta definida."
            ]
          }
        ]
      },
      {
        "id": "potion-boundary",
        "title": "Potions — Detalles variables",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Potions — Detalles variables",
            "body": "Inventario, duración y efectos pueden cambiar."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Potions: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Potions."
      },
      {
        "question": "Potions: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Lee el texto actual del objeto antes de usarlo."
      },
      {
        "question": "Potions: ¿Qué sigue sin confirmar?",
        "answer": "Inventario, duración y efectos pueden cambiar."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-potion:confirmed-1",
      "anime-dice-potion:confirmed-2",
      "anime-dice-potion:confirmed-3",
      "anime-dice-potion:evidence-boundary"
    ]
  },
  "anime-dice-tickets": {
    "title": "Anime Dice: Tickets",
    "description": "Anime Dice: Tickets: guía centrada en registrar Tickets antes de usarlos, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de registrar Tickets antes de usarlos. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Tickets como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "tickets-context",
        "title": "Tickets — Preparación",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. UPDATE6 incluye Tickets en la recompensa."
          }
        ]
      },
      {
        "id": "tickets-workflow",
        "title": "Tickets — Lista de Tower",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Tickets.",
              "Usa este punto como primera comprobación: UPDATE6 incluye Tickets en la recompensa.",
              "Antes de decidir, compara también: Confirma su uso en la interfaz actual."
            ]
          }
        ]
      },
      {
        "id": "tickets-evidence",
        "title": "Tickets — Detalles respaldados",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Confirma su uso en la interfaz actual.",
              "Ninguna fuente respalda un suministro ilimitado."
            ]
          }
        ]
      },
      {
        "id": "tickets-boundary",
        "title": "Tickets — Detalles variables",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Tickets — Detalles variables",
            "body": "Costes, usos y disponibilidad no están confirmados."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Tickets: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Tickets."
      },
      {
        "question": "Tickets: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Confirma su uso en la interfaz actual."
      },
      {
        "question": "Tickets: ¿Qué sigue sin confirmar?",
        "answer": "Costes, usos y disponibilidad no están confirmados."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-tickets:confirmed-1",
      "anime-dice-tickets:confirmed-2",
      "anime-dice-tickets:confirmed-3",
      "anime-dice-tickets:evidence-boundary"
    ]
  },
  "anime-dice-trading": {
    "title": "Anime Dice: Sistema de intercambios",
    "description": "Anime Dice: Sistema de intercambios: guía centrada en verificar ambos lados de una operación, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de verificar ambos lados de una operación. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Sistema de intercambios como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "trading-context",
        "title": "Sistema de intercambios — Registra la oferta",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. Confirma cada unidad u objeto ofrecido."
          }
        ]
      },
      {
        "id": "trading-workflow",
        "title": "Sistema de intercambios — Compara ambos lados",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Sistema de intercambios.",
              "Usa este punto como primera comprobación: Confirma cada unidad u objeto ofrecido.",
              "Antes de decidir, compara también: Compara grade, trait, mutation y nivel por separado."
            ]
          }
        ]
      },
      {
        "id": "trading-evidence",
        "title": "Sistema de intercambios — Pruebas que conservar",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Compara grade, trait, mutation y nivel por separado.",
              "Usa destinos verificados para contexto comunitario."
            ]
          }
        ]
      },
      {
        "id": "trading-boundary",
        "title": "Sistema de intercambios — Sin precio fijo",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Sistema de intercambios — Sin precio fijo",
            "body": "Disponibilidad y demanda no son permanentes."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Sistema de intercambios: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Sistema de intercambios."
      },
      {
        "question": "Sistema de intercambios: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Compara grade, trait, mutation y nivel por separado."
      },
      {
        "question": "Sistema de intercambios: ¿Qué sigue sin confirmar?",
        "answer": "Disponibilidad y demanda no son permanentes."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-trading:confirmed-1",
      "anime-dice-trading:confirmed-2",
      "anime-dice-trading:confirmed-3",
      "anime-dice-trading:evidence-boundary"
    ]
  },
  "anime-dice-trade-value": {
    "title": "Anime Dice: Valor de intercambio",
    "description": "Anime Dice: Valor de intercambio: guía centrada en comparar ofertas sin copiar un precio aislado, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de comparar ofertas sin copiar un precio aislado. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Valor de intercambio como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "trade-value-context",
        "title": "Valor de intercambio — Registra la oferta",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. Registra identidad y rarity."
          }
        ]
      },
      {
        "id": "trade-value-workflow",
        "title": "Valor de intercambio — Compara ambos lados",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Valor de intercambio.",
              "Usa este punto como primera comprobación: Registra identidad y rarity.",
              "Antes de decidir, compara también: Grade, trait, mutation y nivel alteran la comparación."
            ]
          }
        ]
      },
      {
        "id": "trade-value-evidence",
        "title": "Valor de intercambio — Pruebas que conservar",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Grade, trait, mutation y nivel alteran la comparación.",
              "Cada estimación necesita fuente y fecha."
            ]
          }
        ]
      },
      {
        "id": "trade-value-boundary",
        "title": "Valor de intercambio — Sin precio fijo",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Valor de intercambio — Sin precio fijo",
            "body": "No hay precios en vivo verificados en las fuentes."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Valor de intercambio: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Valor de intercambio."
      },
      {
        "question": "Valor de intercambio: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Grade, trait, mutation y nivel alteran la comparación."
      },
      {
        "question": "Valor de intercambio: ¿Qué sigue sin confirmar?",
        "answer": "No hay precios en vivo verificados en las fuentes."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-trade-value:confirmed-1",
      "anime-dice-trade-value:confirmed-2",
      "anime-dice-trade-value:confirmed-3",
      "anime-dice-trade-value:evidence-boundary"
    ]
  },
  "anime-dice-value-calculator": {
    "title": "Anime Dice: Hoja de evaluación",
    "description": "Anime Dice: Hoja de evaluación: guía centrada en ordenar manualmente ambos lados de una oferta, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de ordenar manualmente ambos lados de una oferta. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Hoja de evaluación como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "value-calculator-context",
        "title": "Hoja de evaluación — Registra la oferta",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. Lista las unidades de ambos lados."
          }
        ]
      },
      {
        "id": "value-calculator-workflow",
        "title": "Hoja de evaluación — Compara ambos lados",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Hoja de evaluación.",
              "Usa este punto como primera comprobación: Lista las unidades de ambos lados.",
              "Antes de decidir, compara también: Compara rarity, grade, trait, mutation y nivel."
            ]
          }
        ]
      },
      {
        "id": "value-calculator-evidence",
        "title": "Hoja de evaluación — Pruebas que conservar",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Compara rarity, grade, trait, mutation y nivel.",
              "Anota fuente y fecha de cualquier estimación.",
              "Rechaza la presión para cerrar la operación antes de verificarla."
            ]
          }
        ]
      },
      {
        "id": "value-calculator-boundary",
        "title": "Hoja de evaluación — Sin precio fijo",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Hoja de evaluación — Sin precio fijo",
            "body": "La página no afirma una fórmula numérica de mercado."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Hoja de evaluación: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Hoja de evaluación."
      },
      {
        "question": "Hoja de evaluación: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Compara rarity, grade, trait, mutation y nivel."
      },
      {
        "question": "Hoja de evaluación: ¿Qué sigue sin confirmar?",
        "answer": "La página no afirma una fórmula numérica de mercado."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-value-calculator:confirmed-1",
      "anime-dice-value-calculator:confirmed-2",
      "anime-dice-value-calculator:confirmed-3",
      "anime-dice-value-calculator:confirmed-4",
      "anime-dice-value-calculator:evidence-boundary"
    ]
  },
  "anime-dice-market": {
    "title": "Anime Dice: Mercado",
    "description": "Anime Dice: Mercado: guía centrada en seguir demanda comunitaria cambiante, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de seguir demanda comunitaria cambiante. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Mercado como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "market-context",
        "title": "Mercado — Registra la oferta",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. Una oferta observada no es una operación completada."
          }
        ]
      },
      {
        "id": "market-workflow",
        "title": "Mercado — Compara ambos lados",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Mercado.",
              "Usa este punto como primera comprobación: Una oferta observada no es una operación completada.",
              "Antes de decidir, compara también: La fecha importa porque la demanda cambia."
            ]
          }
        ]
      },
      {
        "id": "market-evidence",
        "title": "Mercado — Pruebas que conservar",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "La fecha importa porque la demanda cambia.",
              "Compara varias observaciones verificables."
            ]
          }
        ]
      },
      {
        "id": "market-boundary",
        "title": "Mercado — Sin precio fijo",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Mercado — Sin precio fijo",
            "body": "No existe feed en vivo ni lista oficial fija."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Mercado: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Mercado."
      },
      {
        "question": "Mercado: ¿Qué detalle aportado importa para la decisión?",
        "answer": "La fecha importa porque la demanda cambia."
      },
      {
        "question": "Mercado: ¿Qué sigue sin confirmar?",
        "answer": "No existe feed en vivo ni lista oficial fija."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-market:confirmed-1",
      "anime-dice-market:confirmed-2",
      "anime-dice-market:confirmed-3",
      "anime-dice-market:evidence-boundary"
    ]
  },
  "anime-dice-new-update": {
    "title": "Anime Dice: Nueva actualización",
    "description": "Anime Dice: Nueva actualización: guía centrada en identificar el último cambio confirmado, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de identificar el último cambio confirmado. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Nueva actualización como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "new-update-context",
        "title": "Nueva actualización — Verifica la afirmación",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. La investigación aportada identifica Update 7."
          }
        ]
      },
      {
        "id": "new-update-workflow",
        "title": "Nueva actualización — Orden de fuentes",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Nueva actualización.",
              "Usa este punto como primera comprobación: La investigación aportada identifica Update 7.",
              "Antes de decidir, compara también: Update 7 añade rarity Galactic."
            ]
          }
        ]
      },
      {
        "id": "new-update-evidence",
        "title": "Nueva actualización — Cambios documentados",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Update 7 añade rarity Galactic.",
              "También añade seis rutas de rebirth."
            ]
          }
        ]
      },
      {
        "id": "new-update-boundary",
        "title": "Nueva actualización — Detalles desconocidos",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Nueva actualización — Detalles desconocidos",
            "body": "No se confirmó una versión posterior."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Nueva actualización: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Nueva actualización."
      },
      {
        "question": "Nueva actualización: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Update 7 añade rarity Galactic."
      },
      {
        "question": "Nueva actualización: ¿Qué sigue sin confirmar?",
        "answer": "No se confirmó una versión posterior."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-new-update:confirmed-1",
      "anime-dice-new-update:confirmed-2",
      "anime-dice-new-update:confirmed-3",
      "anime-dice-new-update:evidence-boundary"
    ]
  },
  "anime-dice-next-update": {
    "title": "Anime Dice: Próxima actualización",
    "description": "Anime Dice: Próxima actualización: guía centrada en separar anuncios de especulación, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de separar anuncios de especulación. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Próxima actualización como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "next-update-context",
        "title": "Próxima actualización — Verifica la afirmación",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. La página oficial y Discord verificado son fuentes de anuncios."
          }
        ]
      },
      {
        "id": "next-update-workflow",
        "title": "Próxima actualización — Orden de fuentes",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Próxima actualización.",
              "Usa este punto como primera comprobación: La página oficial y Discord verificado son fuentes de anuncios.",
              "Antes de decidir, compara también: Un rumor no equivale a anuncio del desarrollador."
            ]
          }
        ]
      },
      {
        "id": "next-update-evidence",
        "title": "Próxima actualización — Cambios documentados",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Un rumor no equivale a anuncio del desarrollador.",
              "Cada comprobación necesita fecha."
            ]
          }
        ]
      },
      {
        "id": "next-update-boundary",
        "title": "Próxima actualización — Detalles desconocidos",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Próxima actualización — Detalles desconocidos",
            "body": "No hay fecha ni lista futura confirmada."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Próxima actualización: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Próxima actualización."
      },
      {
        "question": "Próxima actualización: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Un rumor no equivale a anuncio del desarrollador."
      },
      {
        "question": "Próxima actualización: ¿Qué sigue sin confirmar?",
        "answer": "No hay fecha ni lista futura confirmada."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-next-update:confirmed-1",
      "anime-dice-next-update:confirmed-2",
      "anime-dice-next-update:confirmed-3",
      "anime-dice-next-update:evidence-boundary"
    ]
  },
  "anime-dice-update-7": {
    "title": "Anime Dice: Update 7",
    "description": "Anime Dice: Update 7: guía centrada en resumir solo cambios documentados, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de resumir solo cambios documentados. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Update 7 como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "update-7-context",
        "title": "Update 7 — Verifica la afirmación",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. Update 7 añade rarity Galactic."
          }
        ]
      },
      {
        "id": "update-7-workflow",
        "title": "Update 7 — Orden de fuentes",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Update 7.",
              "Usa este punto como primera comprobación: Update 7 añade rarity Galactic.",
              "Antes de decidir, compara también: Añade seis rutas de mejora de rebirth."
            ]
          }
        ]
      },
      {
        "id": "update-7-evidence",
        "title": "Update 7 — Cambios documentados",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Añade seis rutas de mejora de rebirth.",
              "UPDATE7 es un código documentado."
            ]
          }
        ]
      },
      {
        "id": "update-7-boundary",
        "title": "Update 7 — Detalles desconocidos",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Update 7 — Detalles desconocidos",
            "body": "No se afirman balances fuera de las fuentes."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Update 7: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Update 7."
      },
      {
        "question": "Update 7: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Añade seis rutas de mejora de rebirth."
      },
      {
        "question": "Update 7: ¿Qué sigue sin confirmar?",
        "answer": "No se afirman balances fuera de las fuentes."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-update-7:confirmed-1",
      "anime-dice-update-7:confirmed-2",
      "anime-dice-update-7:confirmed-3",
      "anime-dice-update-7:evidence-boundary"
    ]
  },
  "anime-dice-event": {
    "title": "Anime Dice: Eventos",
    "description": "Anime Dice: Eventos: guía centrada en confirmar si hay un evento actual, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de confirmar si hay un evento actual. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Eventos como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "event-context",
        "title": "Eventos — Verifica la afirmación",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. Revisa la página oficial y Discord verificado."
          }
        ]
      },
      {
        "id": "event-workflow",
        "title": "Eventos — Orden de fuentes",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Eventos.",
              "Usa este punto como primera comprobación: Revisa la página oficial y Discord verificado.",
              "Antes de decidir, compara también: Inicio y fin deben aparecer en juego o anuncio original."
            ]
          }
        ]
      },
      {
        "id": "event-evidence",
        "title": "Eventos — Cambios documentados",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Inicio y fin deben aparecer en juego o anuncio original.",
              "Una publicación comunitaria necesita respaldo oficial."
            ]
          }
        ]
      },
      {
        "id": "event-boundary",
        "title": "Eventos — Detalles desconocidos",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Eventos — Detalles desconocidos",
            "body": "No hay calendario actual confirmado."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Eventos: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Eventos."
      },
      {
        "question": "Eventos: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Inicio y fin deben aparecer en juego o anuncio original."
      },
      {
        "question": "Eventos: ¿Qué sigue sin confirmar?",
        "answer": "No hay calendario actual confirmado."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-event:confirmed-1",
      "anime-dice-event:confirmed-2",
      "anime-dice-event:confirmed-3",
      "anime-dice-event:evidence-boundary"
    ]
  },
  "anime-dice-admin-abuse-time": {
    "title": "Anime Dice: Horario de evento de administrador",
    "description": "Anime Dice: Horario de evento de administrador: guía centrada en validar fecha, hora y zona de una sesión, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de validar fecha, hora y zona de una sesión. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Horario de evento de administrador como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "admin-abuse-time-context",
        "title": "Horario de evento de administrador — Verifica la afirmación",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. Busca un anuncio fechado en destino oficial."
          }
        ]
      },
      {
        "id": "admin-abuse-time-workflow",
        "title": "Horario de evento de administrador — Orden de fuentes",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Horario de evento de administrador.",
              "Usa este punto como primera comprobación: Busca un anuncio fechado en destino oficial.",
              "Antes de decidir, compara también: Lee fecha y zona horaria juntas."
            ]
          }
        ]
      },
      {
        "id": "admin-abuse-time-evidence",
        "title": "Horario de evento de administrador — Cambios documentados",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Lee fecha y zona horaria juntas.",
              "Ignora republicaciones sin enlace original."
            ]
          }
        ]
      },
      {
        "id": "admin-abuse-time-boundary",
        "title": "Horario de evento de administrador — Detalles desconocidos",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Horario de evento de administrador — Detalles desconocidos",
            "body": "No hay horario recurrente confirmado."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Horario de evento de administrador: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Horario de evento de administrador."
      },
      {
        "question": "Horario de evento de administrador: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Lee fecha y zona horaria juntas."
      },
      {
        "question": "Horario de evento de administrador: ¿Qué sigue sin confirmar?",
        "answer": "No hay horario recurrente confirmado."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-admin-abuse-time:confirmed-1",
      "anime-dice-admin-abuse-time:confirmed-2",
      "anime-dice-admin-abuse-time:confirmed-3",
      "anime-dice-admin-abuse-time:evidence-boundary"
    ]
  },
  "anime-dice-discord": {
    "title": "Anime Dice: Discord",
    "description": "Anime Dice: Discord: guía centrada en usar la invitación comunitaria verificada, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de usar la invitación comunitaria verificada. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Discord como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "discord-context",
        "title": "Discord — Destino seguro",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. El catálogo usa discord.com/invite/ag5MCCu5aQ."
          }
        ]
      },
      {
        "id": "discord-workflow",
        "title": "Discord — Secuencia de verificación",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Discord.",
              "Usa este punto como primera comprobación: El catálogo usa discord.com/invite/ag5MCCu5aQ.",
              "Antes de decidir, compara también: Los canales y anuncios pueden cambiar."
            ]
          }
        ]
      },
      {
        "id": "discord-evidence",
        "title": "Discord — Identidad confirmada",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Los canales y anuncios pueden cambiar.",
              "Nunca compartas contraseña o token con moderadores."
            ]
          }
        ]
      },
      {
        "id": "discord-boundary",
        "title": "Discord — Límite de confianza",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Discord — Límite de confianza",
            "body": "Roles, canales y calendario actual pueden variar."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Discord: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Discord."
      },
      {
        "question": "Discord: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Los canales y anuncios pueden cambiar."
      },
      {
        "question": "Discord: ¿Qué sigue sin confirmar?",
        "answer": "Roles, canales y calendario actual pueden variar."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-discord:confirmed-1",
      "anime-dice-discord:confirmed-2",
      "anime-dice-discord:confirmed-3",
      "anime-dice-discord:evidence-boundary"
    ]
  },
  "anime-dice-reddit": {
    "title": "Anime Dice: Reddit",
    "description": "Anime Dice: Reddit: guía centrada en usar debates sin tratarlos como oficiales, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de usar debates sin tratarlos como oficiales. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Reddit como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "reddit-context",
        "title": "Reddit — Destino seguro",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. No se confirmó un subreddit oficial."
          }
        ]
      },
      {
        "id": "reddit-workflow",
        "title": "Reddit — Secuencia de verificación",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Reddit.",
              "Usa este punto como primera comprobación: No se confirmó un subreddit oficial.",
              "Antes de decidir, compara también: Los posts descubren preguntas, no prueban hechos."
            ]
          }
        ]
      },
      {
        "id": "reddit-evidence",
        "title": "Reddit — Identidad confirmada",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Los posts descubren preguntas, no prueban hechos.",
              "Contrasta afirmaciones con destinos oficiales."
            ]
          }
        ]
      },
      {
        "id": "reddit-boundary",
        "title": "Reddit — Límite de confianza",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Reddit — Límite de confianza",
            "body": "Los votos no convierten un post en anuncio oficial."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Reddit: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Reddit."
      },
      {
        "question": "Reddit: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Los posts descubren preguntas, no prueban hechos."
      },
      {
        "question": "Reddit: ¿Qué sigue sin confirmar?",
        "answer": "Los votos no convierten un post en anuncio oficial."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-reddit:confirmed-1",
      "anime-dice-reddit:confirmed-2",
      "anime-dice-reddit:confirmed-3",
      "anime-dice-reddit:evidence-boundary"
    ]
  },
  "anime-dice-trello": {
    "title": "Anime Dice: Trello",
    "description": "Anime Dice: Trello: guía centrada en verificar un tablero antes de confiar, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de verificar un tablero antes de confiar. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Trello como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "trello-context",
        "title": "Trello — Destino seguro",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. No se confirmó un Trello oficial."
          }
        ]
      },
      {
        "id": "trello-workflow",
        "title": "Trello — Secuencia de verificación",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Trello.",
              "Usa este punto como primera comprobación: No se confirmó un Trello oficial.",
              "Antes de decidir, compara también: Comprueba propietario y enlaces desde canales oficiales."
            ]
          }
        ]
      },
      {
        "id": "trello-evidence",
        "title": "Trello — Identidad confirmada",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "Comprueba propietario y enlaces desde canales oficiales.",
              "Los tableros de fans pueden estar desactualizados."
            ]
          }
        ]
      },
      {
        "id": "trello-boundary",
        "title": "Trello — Límite de confianza",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Trello — Límite de confianza",
            "body": "No publicamos un enlace de Trello sin verificar."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Trello: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Trello."
      },
      {
        "question": "Trello: ¿Qué detalle aportado importa para la decisión?",
        "answer": "Comprueba propietario y enlaces desde canales oficiales."
      },
      {
        "question": "Trello: ¿Qué sigue sin confirmar?",
        "answer": "No publicamos un enlace de Trello sin verificar."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-trello:confirmed-1",
      "anime-dice-trello:confirmed-2",
      "anime-dice-trello:confirmed-3",
      "anime-dice-trello:evidence-boundary"
    ]
  },
  "anime-dice-group": {
    "title": "Anime Dice: Grupo oficial",
    "description": "Anime Dice: Grupo oficial: guía centrada en confirmar More & More Games, con hechos documentados y límites claros para datos variables.",
    "intro": [
      "Esta página trata específicamente de confirmar More & More Games. Evita cifras, horarios y resultados que no aparecen en las fuentes aportadas.",
      "Usa este artículo sobre Grupo oficial como apoyo: identifica el control o la afirmación, compara los hechos aportados y detente donde terminan las pruebas."
    ],
    "sections": [
      {
        "id": "group-context",
        "title": "Grupo oficial — Destino seguro",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Empieza por el control, propiedad o afirmación exacta del tema. La comunidad verificada es More & More Games."
          }
        ]
      },
      {
        "id": "group-workflow",
        "title": "Grupo oficial — Secuencia de verificación",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Sigue esta secuencia antes de cambiar opciones, gastar recursos o aceptar una afirmación."
          },
          {
            "type": "list",
            "style": "ordered",
            "items": [
              "Abre el juego o destino verificado relacionado con Grupo oficial.",
              "Usa este punto como primera comprobación: La comunidad verificada es More & More Games.",
              "Antes de decidir, compara también: La guía indica posibles spins en el cofre."
            ]
          }
        ]
      },
      {
        "id": "group-evidence",
        "title": "Grupo oficial — Identidad confirmada",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Mantén visibles estos hechos aportados al decidir."
          },
          {
            "type": "list",
            "style": "unordered",
            "items": [
              "La guía indica posibles spins en el cofre.",
              "También puede haber Gems o rerolls."
            ]
          }
        ]
      },
      {
        "id": "group-boundary",
        "title": "Grupo oficial — Límite de confianza",
        "blocks": [
          {
            "type": "callout",
            "tone": "unverified",
            "title": "Grupo oficial — Límite de confianza",
            "body": "Confirma recompensas y disponibilidad dentro del juego."
          }
        ]
      }
    ],
    "faq": [
      {
        "question": "Grupo oficial: ¿Qué compruebo primero?",
        "answer": "Abre el juego o destino verificado relacionado con Grupo oficial."
      },
      {
        "question": "Grupo oficial: ¿Qué detalle aportado importa para la decisión?",
        "answer": "La guía indica posibles spins en el cofre."
      },
      {
        "question": "Grupo oficial: ¿Qué sigue sin confirmar?",
        "answer": "Confirma recompensas y disponibilidad dentro del juego."
      }
    ],
    "sourceNote": "Revisado con la página oficial del juego y las referencias editoriales indicadas; los detalles variables deben comprobarse dentro del juego.",
    "factKeys": [
      "anime-dice-group:confirmed-1",
      "anime-dice-group:confirmed-2",
      "anime-dice-group:confirmed-3",
      "anime-dice-group:evidence-boundary"
    ]
  }
} satisfies Record<ArticleId, LocalizedArticle>;
