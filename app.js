/* ==========================================================================
   MATCHFIN ARCHITECTURE BOARD - JAVASCRIPT SIMULATOR
   ========================================================================== */

// 1. Estructura de Datos de Relaciones y Contenidos Técnicos de la Landing Page
const relationsData = {
    // ---- PLANOS DE MERCADO ----
    "plano-a": {
        title: "Plano A — Negocio Actual Institucional",
        description: "Infraestructura SaaS estable que opera el core financiero regulado para la digitalización de procesos de onboarding, análisis crediticio y cumplimiento normativo en bancos y fondos.",
        bullets: [
            "<strong>Módulos Core:</strong> Onboarding regulatorio, compliance, credit management, order routing y monitoreo continuo.",
            "<strong>Compradores:</strong> Compliance, Legales, COO, Directorio y Mesa de operaciones.",
            "<strong>Flujo de Evaluación Lineal:</strong> Recorrido lineal y tradicional de pasos (1 al 8) conducido por el analista bancario para diagnosticar a una contraparte. El banco empuja al CUIT evaluado a través de los estados <strong>VEEO</strong>.",
            "<strong>Ecosistema Activo:</strong> ALyCs, SGRs, Bancos, Fondos y Agentes de mercado."
        ],
        techDetails: {
            "Modelo Comercial": "SaaS institucional estructurado mediante contratos anuales estables.",
            "Drivers Principales": "Cumplimiento normativo de BCRA/CNV y mitigación de riesgo crediticio institucional."
        },
        relations: {
            capas: ["capa-1", "capa-2", "capa-4", "capa-6"],
            steps: ["step-1", "step-2", "step-3", "step-5", "step-6", "step-8"],
            mon: ["mon-1", "mon-4"]
        }
    },
    "plano-b": {
        title: "Plano B — Red de Legibilidad Financiera (Marketplace)",
        description: "Ecosistema descentralizado donde las empresas PyME se registran como participantes para estructurar su legajo financiero (legibilidad) y las SGRs, bancos y fintechs actúan como clientes para descubrirlas y financiarlas.",
        bullets: [
            "<strong>Flujo Descentralizado (Self-Service):</strong> La PyME es el actor que inicia su propio onboarding. Avanza de forma proactiva en su madurez <strong>VEEO</strong> (ingresando CUIT, completando perfil o subiendo balances en el Paso 7) para hacerse legible.",
            "<strong>Variantes de Propósito:</strong> El workflow se bifurca en 4 variantes a partir del Paso 5 según el objetivo del participante (Marketplace visible, Líneas Preaprobadas, Diagnóstico con roadmap o descarga de Informe IA).",
            "<strong>Gobernanza de Visibilidad (Doble Soberanía):</strong> La visibilidad en el marketplace está regulada: (1) para PyMEs captadas por tenants socios (marca blanca / campañas propias), queda a su exclusivo criterio si visibilizarlas o no; (2) para PyMEs captadas por campañas y/o canales directos gestionados por MatchFin, la plataforma define la visibilidad (clasificada o pública) según reglas de negocio y scoring de otra capa.",
            "<strong>Modelo Híbrido:</strong> Registro e historial gratis. Monetiza por consumo de informes IA avanzados y fees de infraestructura cobrados a las entidades."
        ],
        techDetails: {
            "Función Objetivo": "Maximizar PyMEs financieramente legibles y operables en la red.",
            "Drivers Principales": "Reducción del costo de financiamiento y fricción de análisis de crédito."
        },
        relations: {
            capas: ["capa-1", "capa-2", "capa-3", "capa-5", "capa-6"],
            steps: ["step-1", "step-2", "step-3", "step-4", "step-5", "step-6", "step-7", "step-8"],
            mon: ["mon-2", "mon-3", "mon-5"]
        }
    },

    // ---- CAPAS DE ARQUITECTURA (APLICAN A AMBOS PLANOS) ----
    "capa-1": {
        title: "CAPA 1 — Datos (Ingesta Multifuente)",
        description: "Ingesta, estandarización y normalización de registros oficiales y alternativos en un único legajo digital estructurado y auditable.",
        bullets: [
            "<strong>Fuentes Conectadas:</strong> NOSIS, BCRA, AFIP, MAV, BYMA, balances digitalizados, APIs privadas, noticias y registros públicos.",
            "<strong>Estandarización:</strong> Mapeo y normalización de nomenclaturas heterogéneas y control de duplicados.",
            "<strong>Nivel Comercial:</strong> Habilitada en los modelos SaaS Institucional (Mon-1) y On-Demand (Mon-2)."
        ],
        techDetails: {
            "Latencia": "Consultas federadas en tiempo real combinadas con almacenamiento en caché optimizado.",
            "Gobernanza": "Control de procedencia inmutable de todas las fuentes de datos del CUIT consultado."
        },
        relations: {
            planos: ["plano-a", "plano-b"],
            steps: ["step-1", "step-2", "step-3"],
            mon: ["mon-1", "mon-2"]
        }
    },
    "capa-2": {
        title: "CAPA 2 — Legibilidad (Comprensión Financiera)",
        description: "Transformación de datos crudos en variables estructuradas y scores contextuales de salud financiera aplicables a ambos planos de negocio.",
        bullets: [
            "<strong>Componentes Clave:</strong> Ψ (Psi) Health Layer, score contextual, covenant vivo, radar y anomalías.",
            "<strong>Covenant Vivo:</strong> Límites y alertas de crédito paramétricos que se actualizan automáticamente ante cambios de balances.",
            "<strong>Métrica Estrella:</strong> Score Ψ de Salud que evalúa de forma holística la solvencia empresarial."
        ],
        techDetails: {
            "Métricas": "Ratios contables clásicos de liquidez, solvencia y apalancamiento combinados con alertas de AFIP.",
            "Propósito": "Evita la revisión manual de balances estructurando la legibilidad del CUIT de forma comprensible."
        },
        relations: {
            planos: ["plano-a", "plano-b"],
            steps: ["step-5"],
            mon: ["mon-1", "mon-2"]
        }
    },
    "capa-3": {
        title: "CAPA 3 — Observabilidad (Monitoreo Continuo)",
        description: "Supervisión ininterrumpida y en tiempo real del comportamiento de un tercero, reemplazando la foto estática de riesgo por un monitoreo vivo.",
        bullets: [
            "<strong>Componentes Clave:</strong> Monitoreo continuo de variables, alertas de covenants y desvíos, seguimiento y backup histórico de eventos.",
            "<strong>Casos de Uso:</strong> Alerta inmediata ante moras con la AFIP, embargos judiciales o caída en calificación del BCRA.",
            "<strong>Modelo de Cobro:</strong> Se activa a partir de la suscripción de Alertas Activas (Mon-3)."
        ],
        techDetails: {
            "Monitoreo": "Consultas programadas recurrentes sobre el dataset del CUIT bajo observabilidad.",
            "Eficiencia": "Despacho automatizado de alertas vía webhooks o notificaciones en plataforma."
        },
        relations: {
            planos: ["plano-b"],
            steps: ["step-8"],
            mon: ["mon-2", "mon-3"]
        }
    },
    "capa-4": {
        title: "CAPA 4 — Predicción (Anticipación)",
        description: "Modelado probabilístico para proyectar la resiliencia y el comportamiento futuro del flujo de caja del CUIT bajo escenarios de estrés.",
        bullets: [
            "<strong>Modelos Utilizados:</strong> Simulación Monte Carlo, breach probability (probabilidad de impago), stress testing de plazos de pago y análisis de drift.",
            "<strong>Proyección de Escenarios:</strong> Simulación de resiliencia financiera si el plazo de cobro promedio aumenta.",
            "<strong>Modelo de Cobro:</strong> Desbloqueado en el Predictive Add-on corporativo (Mon-3 y Mon-4)."
        ],
        techDetails: {
            "Proyección": "Modelos predictivos a 12 meses alimentados dinámicamente por la observabilidad del CUIT.",
            "Output": "Probabilidad estimada de ruptura de covenants e índice de resiliencia."
        },
        relations: {
            planos: ["plano-a"],
            steps: ["step-6"],
            mon: ["mon-3", "mon-4"]
        }
    },
    "capa-5": {
        title: "CAPA 5 — IA Cognitiva (Inteligencia Aumentada)",
        description: "NLP, copiloto, explicabilidad e investigación aplicada sobre el ecosistema financiero.",
        bullets: [
            "<strong>Assistant:</strong> Copiloto interno que consulta el modelo del tenant: fuentes, CUIT, hallazgos, riesgo.",
            "<strong>Co-Assistant:</strong> Puente API hacia IA externa. Lo que se consulta y genera se reincorpora al conocimiento del tenant. MatchFin controla qué sale; el cliente gobierna el destino.",
            "<strong>🛡️ Blindaje:</strong> El Co-Assistant comparte lo que el modelo sabe, nunca cómo lo sabe. Comparte el recorte de la consulta, nunca el tenant entero.",
            "<strong>Capas de Control:</strong> Cuatro capas aplicadas: mínimo contexto necesario, salida derivada por defecto, aislamiento por tenant, y trazabilidad de cada intercambio. El compliance se aplica sobre cada salida, no se delega.",
            "<strong>Gobernanza Externa:</strong> La conexión con la IA externa es elección del cliente, que asume la relación con ese tercero. MatchFin blinda lo que controla: qué sale, en qué forma y con qué registro."
        ],
        techDetails: {
            "Control de Salida": "MatchFin controla qué sale del tenant; el cliente gobierna el destino final.",
            "Trazabilidad": "Cada intercambio con la IA externa queda registrado de manera inmutable."
        },
        relations: {
            planos: ["plano-b"],
            steps: ["step-4", "step-7"],
            mon: ["mon-3", "mon-5"]
        }
    },
    "capa-6": {
        title: "CAPA 6 — Decisión y Trazabilidad (Acción)",
        description: "Módulo para la parametrización de políticas corporativas, emisión de recomendaciones de acción y resguardo de la trazabilidad del proceso.",
        bullets: [
            "<strong>Gobernanza:</strong> Políticas de riesgo parametrizables, gestión auditable de overrides (excepciones justificadas) e informes para comités de crédito.",
            "<strong>Legajo de Riesgo Reutilizable:</strong> Perfil de riesgo verificado y firmado digitalmente que se almacena para su uso posterior en el ecosistema.",
            "<strong>Modelo de Cobro:</strong> Exclusivo del modelo de Infraestructura Transaccional (Mon-6)."
        ],
        techDetails: {
            "Trazabilidad": "Log de auditoría inmutable que justifica cada decisión conforme a los datos de entrada vigentes.",
            "Interoperabilidad": "Permite compartir el legajo verificado entre empresas y bancos para originación crediticia instantánea."
        },
        relations: {
            planos: ["plano-a", "plano-b"],
            capas: ["capa-predictiva-loop"],
            steps: ["step-8"],
            mon: ["mon-1", "mon-2", "mon-4", "mon-6"]
        }
    },

    // ---- MONETIZACIÓN (EMPAQUETAMIENTOS & FEATURES ADICIONALES) ----
    "mon-1": {
        title: "1. SaaS Institucional (Plano A)",
        description: "Modelo comercial para el Plano A (Bancos, ALyCs, SGRs) basado en suscripción anual y cobro por setup e integración.",
        bullets: [
            "<strong>Capas que Empaqueta:</strong> Habilita la <strong>Capa 1 (Datos)</strong> y <strong>Capa 2 (Legibilidad)</strong> de salud financiera, junto a la <strong>Capa 6 (Decisión)</strong> para la parametrización de workflows institucionales.",
            "<strong>Workflow Asistido:</strong> Controla el onboarding regulatorio, compliance y log inmutable de auditoría (Pasos 1, 2, 5 y 8)."
        ],
        techDetails: {
            "Público Objetivo": "Bancos tradicionales, ALyCs medianas/grandes, SGRs.",
            "Modelo de Cobro": "Contrato corporativo anual estable + cargo de onboarding por única vez."
        },
        relations: { planos: ["plano-a"], capas: ["capa-1", "capa-2", "capa-6"], steps: ["step-1", "step-2", "step-5", "step-8"] }
    },
    "mon-2": {
        title: "2. On-Demand Empresas (Plano B)",
        description: "Modelo comercial autogestionado para el Plano B, basado en la venta de packs prepago de créditos de consulta y cobro por uso de tenant.",
        bullets: [
            "<strong>Capas que Empaqueta:</strong> Da acceso a la <strong>Capa 1</strong> y <strong>Capa 2</strong> para consultas de solvencia rápidas, sumando la <strong>Capa 3 (Observabilidad)</strong> básica para el monitoreo de carteras de proveedores.",
            "<strong>Workflow Asistido:</strong> Identificación del CUIT, análisis contable básico e inicio de alertas de seguimiento (Pasos 3, 5 y 8)."
        ],
        techDetails: {
            "Público Objetivo": "Empresas comerciales no financieras, áreas de compras o tesorería.",
            "Modelo de Cobro": "Packs prepago digitales de consultas de CUIT + cuota mensual de mantenimiento de cartera."
        },
        relations: { planos: ["plano-b"], capas: ["capa-1", "capa-2", "capa-3"], steps: ["step-3", "step-5", "step-8"] }
    },
    "mon-3": {
        title: "3. Inteligencia y Predicción",
        description: "Adicional premium o cargo extra que suma features avanzadas de anticipación sobre la suscripción básica de carteras.",
        bullets: [
            "<strong>Capas que Adiciona:</strong> Activa el predictive engine de la <strong>Capa 4 (Predicción)</strong>, alertas avanzadas de desvíos de la <strong>Capa 3</strong> y el copiloto IA de la <strong>Capa 5</strong>.",
            "<strong>Workflow Asistido:</strong> Enriquecimiento cognitivo, simulación de impago y reportes explicativos del copiloto (Pasos 4, 6 y 7)."
        ],
        techDetails: {
            "Público Objetivo": "Instituciones y empresas que requieran análisis preventivo profundo.",
            "Modelo de Cobro": "Add-on mensual de cobro por capacidad de cálculo o número de usuarios de IA."
        },
        relations: { planos: ["plano-a", "plano-b"], capas: ["capa-3", "capa-4", "capa-5"], steps: ["step-4", "step-6", "step-7"] }
    },
    "mon-4": {
        title: "4. Embedded / White Label",
        description: "Monetización basada en el volumen de llamadas API consumidas por sistemas externos de clientes (core bancario o ERPs).",
        bullets: [
            "<strong>Capas que Empaqueta:</strong> Expone el cálculo de score de la <strong>Capa 2</strong>, el monitoreo continuo de la <strong>Capa 3</strong> y las políticas de la <strong>Capa 6</strong> integradas vía API.",
            "<strong>Workflow Asistido:</strong> Automatiza la consulta del CUIT, el análisis impositivo y la decisión en segundo plano (Pasos 3, 5 y 8)."
        ],
        techDetails: {
            "Público Objetivo": "Fintechs, bancos digitales, plataformas ERP de facturación o cobros.",
            "Modelo de Cobro": "Tarifa por volumen mensual de peticiones API consumidas en producción."
        },
        relations: { planos: ["plano-a"], capas: ["capa-2", "capa-3", "capa-6"], steps: ["step-3", "step-5", "step-8"] }
    },
    "mon-5": {
        title: "5. Network Intelligence",
        description: "Licenciamiento premium corporativo para acceder al benchmark consolidado e inteligencia acumulativa del ecosistema MatchFin.",
        bullets: [
            "<strong>Capas que Adiciona:</strong> Cruza los datos estructurados con el procesamiento NLP de la <strong>Capa 5</strong> para generar comparables e informes agregados de riesgo sectorial.",
            "<strong>Workflow Asistido:</strong> Enriquecimiento cualitativo de conducta comercial de red e investigación de fallos (Paso 4)."
        ],
        techDetails: {
            "Público Objetivo": "Fondos de inversión, consultores macro, reguladores estatales o corporaciones líderes.",
            "Modelo de Cobro": "Suscripción premium corporativa al feed sectorial consolidado de red."
        },
        relations: { planos: ["plano-b"], capas: ["capa-5"], steps: ["step-4"] }
    },
    "mon-6": {
        title: "6. Infraestructura Transaccional (Futuro)",
        description: "El potencial estratégico del modelo de negocio: MatchFin actúa como la autopista de originación crediticia interoperable del ecosistema.",
        bullets: [
            "<strong>Capas que Habilita:</strong> Explota la <strong>Capa 6 (Decisión)</strong> mediante el legajo de riesgo reusable y transferible firmado digitalmente. Habilita la originación y distribución al instante.",
            "<strong>Modelo de Cobro:</strong> MatchFin percibe un fee de infraestructura sobre el flujo financiero canalizado por los actores del Plano A hacia las firmas del Plano B (Paso 8)."
        ],
        techDetails: {
            "Público Objetivo": "Originadores y distribuidores financieros, mercado de capitales consolidado.",
            "Modelo de Cobro": "Comisión porcentual (fee de infraestructura) por cada operación originada/liquidada."
        },
        relations: { planos: ["plano-a", "plano-b"], capas: ["capa-6"], steps: ["step-8"] }
    },
    "capa-predictiva-loop": {
        title: "Bucle Predictivo (Capa de Conocimiento Predictivo)",
        description: "Bucle de retroalimentación estratégico que convierte cada evaluación analítica en una huella estandarizada y anónima en tres dimensiones (Patrimonio, Liquidez y Rentabilidad) relativa al sector. Al acumularse en el tiempo, estas huellas forman trayectorias predictivas y benchmarks que enriquecen los scores sin comprometer la privacidad.",
        bullets: [
            "<strong>Huella P-L-R:</strong> Estructura el perfil financiero en percentiles relativos vs benchmark sectorial. Anonimidad total por construcción.",
            "<strong>Masa Crítica por Sector:</strong> La retroalimentación es segura según cantidad de tenants (Riesgo <10, Viable 10-30, Loop Activo >30 tenants).",
            "<strong>Mecanismo Anti-Churn:</strong> El cliente que rescinde el contrato pierde su historia acumulada y su proyección de comportamiento futura."
        ],
        techDetails: {
            "Dimensiones Analizadas": "Patrimonio (Percentil P), Liquidez (Percentil L), Rentabilidad (Percentil R)",
            "Propósito": "Transformar datos estáticos e inconexos en trayectorias dinámicas de comportamiento sectorial."
        },
        relations: {
            planos: ["plano-a", "plano-b"],
            capas: ["capa-2", "capa-4", "capa-6"],
            steps: ["step-8"],
            mon: ["mon-3", "mon-5", "mon-6"]
        }
    }
};

// 2. Transversalidad de MatchFin Assistant: Mapeo de Preguntas de Solvencia del Analista por Paso del Workflow
const workflowAssistantQueries = {
    "step-1": {
        question: "¿Qué archivos y balances cargamos para empezar a evaluar a esta metalúrgica?",
        response: "El Asistente IA de MatchFin confirma que la <strong>Capa 1 de Datos</strong> completó la ingesta de los balances consolidados de los últimos 3 ejercicios de Metalúrgica del Plata S.A., además del padrón histórico de AFIP y los reportes consolidados del BCRA. Toda la información ha sido normalizada impositivamente y está lista para el análisis de solvencia.",
        activeCapas: ["capa-1"],
        activeMon: "mon-1"
    },
    "step-2": {
        question: "¿Qué condiciones y límites de alerta tenemos configurados para esta cuenta?",
        response: "El Asistente IA valida las políticas activadas: se configuró un <strong>Índice de Salud Financiera</strong> mínimo de 65/100, un ratio de liquidez mayor a 1.30 y un control preventivo diario de deudas impositivas de AFIP (Capa 2 y 3). El sistema emitirá alertas inmediatas si se detecta cualquier desvío de estas condiciones fijadas.",
        activeCapas: ["capa-1", "capa-3"],
        activeMon: "mon-1"
    },
    "step-3": {
        question: "Carguemos el CUIT de la metalúrgica. ¿Qué deudas vigentes o cheques rechazados reporta?",
        response: "Consultando el CUIT 30-74891253-9 en la Capa 1: El BCRA reporta situación 1 (normal) en todas las entidades financieras del país. No registra deudas en mora en el sistema financiero ni cheques rechazados en los últimos 24 meses. Iniciando el cruce impositivo y legal de los datos del CUIT.",
        activeCapas: ["capa-1"],
        activeMon: "mon-2"
    },
    "step-4": {
        question: "¿El cliente tiene juicios o demandas en su contra que puedan complicar el cobro?",
        response: "Sí, el procesamiento NLP de la <strong>Capa 5 (IA Cognitiva)</strong> rastreó los expedientes judiciales en curso y detectó 3 demandas comerciales de proveedores activos por un total reclamado de $14M. La IA estima que el fallo judicial podría demorar 6 meses, pero sugiere prever esta contingencia en el Índice de Salud de la empresa.",
        activeCapas: ["capa-1", "capa-5"],
        activeMon: "mon-5"
    },
    "step-5": {
        question: "¿Cómo viene la facturación y el Índice de Salud (Psi) de la empresa?",
        response: "El análisis de la <strong>Capa 2 (Legibilidad)</strong> confirma que la facturación creció un 8% interanual. No se detectan deudas previsionales ni impositivas en AFIP. Sin embargo, debido al pasivo potencial por los juicios comerciales activos detectados ($14M), el Ψ (Psi) / Índice de Salud bajó a 62/100, y el ratio de liquidez real disponible se redujo a 1.28.",
        activeCapas: ["capa-2", "capa-5"],
        activeMon: "mon-2"
    },
    "step-6": {
        question: "¿Le puedo vender a 60 días de plazo o hay riesgo de que no me pague?",
        response: "El motor de predicción de la <strong>Capa 4</strong> corrió una simulación de impago proyectando escenarios si extendemos el plazo de pago comercial a 60 días. El resultado arroja una <strong>probabilidad de descalce operativo (breach probability) del 42%</strong> durante el tercer mes. Si el plazo se mantiene en 30 días, el riesgo de impago cae a un nivel de riesgo bajo del 8%.",
        activeCapas: ["capa-4"],
        activeMon: "mon-4"
    },
    "step-7": {
        question: "¿Cuál es la recomendación del copiloto de IA sobre el límite de crédito seguro?",
        response: "Teniendo en cuenta los juicios comerciales activos y la simulación predictiva de plazos, el Asistente IA sugiere fijar un **límite de crédito comercial máximo de $8M a 30 días de plazo**. Esta recomendación equilibra el crecimiento de ventas imprevisto de la metalúrgica con el resguardo de la solvencia operativa.",
        activeCapas: ["capa-5", "capa-6"],
        activeMon: "mon-5"
    },
    "step-8": {
        question: "Aprobamos el límite. ¿Cómo lo monitoreamos en adelante y cómo se liquida?",
        response: "Límite de $8M configurado. La Capa 6 generó el <strong>Legajo de Riesgo Reutilizable</strong>. Además, la evaluación se ha anonimizado y enviado al **Bucle Predictivo**, actualizando la **Huella P-L-R** de la metalúrgica y retroalimentando el benchmark del sector. Se activa el monitoreo diario en la Capa 3.",
        activeCapas: ["capa-3", "capa-6", "capa-predictiva-loop"],
        activeMon: "mon-6"
    }
};

// 3. Mapeador de Nombres de Componentes para los Tags de la Consola
const componentNames = {
    "plano-a": "Plano A: Institucional",
    "plano-b": "Plano B: Empresas",
    "capa-1": "Capa 1: Datos",
    "capa-2": "Capa 2: Legibilidad",
    "capa-3": "Capa 3: Observabilidad",
    "capa-4": "Capa 4: Predicción",
    "capa-5": "Capa 5: IA Cognitiva",
    "capa-6": "Capa 6: Decisión",
    "capa-predictiva-loop": "Bucle Predictivo (P-L-R)",
    "step-1": "Step 1: Ingreso",
    "step-2": "Step 2: Onboarding",
    "step-3": "Step 3: Consulta CUIT",
    "step-4": "Step 4: Investigación IA",
    "step-5": "Step 5: Análisis Salud (Psi)",
    "step-6": "Step 6: Predicción",
    "step-7": "Step 7: Copiloto IA",
    "step-8": "Step 8: Decisión & Tracking",
    "mon-1": "Mon 1: SaaS Institucional",
    "mon-2": "Mon 2: On-Demand Empresas",
    "mon-3": "Mon 3: Inteligencia & Predicción",
    "mon-4": "Mon 4: Embedded API",
    "mon-5": "Mon 5: Network Intel",
    "mon-6": "Mon 6: Infra Transaccional"
};

// 3b. Dataset e Infraestructura del Bucle Predictivo (Widget P-L-R)
let plrActiveCompare = "H-1";
let plrActiveCompany = "metalurgica";

const plrDataset = {
    metalurgica: {
        name: "Metalúrgica del Plata S.A.",
        sector: "Sector Metalúrgico (Industrial)",
        veeo: "VE",
        periods: {
            "H-4": { P: 50, L: 46, R: 22, score: 39 },
            "H-3": { P: 55, L: 48, R: 25, score: 42 },
            "H-2": { P: 58, L: 50, R: 28, score: 45 },
            "H-1": { P: 60, L: 52, R: 30, score: 47 },
            "Actual": { P: 72, L: 45, R: 38, score: 51 },
            "Pred": { P: 78, L: 50, R: 44, score: 57 }
        },
        benchmark: { P: 60, L: 55, R: 50, score: 55 },
        move: "Expansión",
        moveDelta: "+12 pts vs H-1",
        profile: "Patrimonial",
        profileDesc: "Fortaleza en solvencia estructural, presión de liquidez.",
        exp: "Expansión moderada",
        expDesc: "Perfiles similares mejoraron +6pts promedio en 18 meses."
    },
    agroindustrial: {
        name: "Agro Pampeana S.A.",
        sector: "Sector Agro-Industrial",
        veeo: "VEEO",
        periods: {
            "H-4": { P: 62, L: 55, R: 40, score: 52 },
            "H-3": { P: 64, L: 58, R: 42, score: 54 },
            "H-2": { P: 65, L: 60, R: 45, score: 56 },
            "H-1": { P: 68, L: 55, R: 48, score: 57 },
            "Actual": { P: 80, L: 48, R: 52, score: 60 },
            "Pred": { P: 84, L: 54, R: 58, score: 65 }
        },
        benchmark: { P: 65, L: 60, R: 45, score: 56 },
        move: "Expansión Firme",
        moveDelta: "+15 pts vs H-1",
        profile: "Mixto Equilibrado",
        profileDesc: "Alta solvencia, liquidez en rango controlado.",
        exp: "Crecimiento Estable",
        expDesc: "Empresas en este cluster sostienen rendimiento a 12 meses."
    }
};

function getRadarCoords(valP, valL, valR, cx = 70, cy = 70, maxR = 55) {
    const rP = (valP / 100) * maxR;
    const rL = (valL / 100) * maxR;
    const rR = (valR / 100) * maxR;
    return {
        P: { x: cx, y: cy - rP },
        L: { x: cx + rL * 0.8660, y: cy + rL * 0.5 },
        R: { x: cx - rR * 0.8660, y: cy + rR * 0.5 }
    };
}

function makePointsStr(coords) {
    return `${coords.P.x},${coords.P.y} ${coords.L.x},${coords.L.y} ${coords.R.x},${coords.R.y}`;
}

// 3c. Dataset de Variantes de Workflow (Plano B - Red de Legibilidad)
let activeWorkflowVariant = 1;

const variantWorkflowData = {
    1: {
        "step-6": {
            title: "ARMA LEGAJO",
            text: "Carga de balances, DDJJ y CUIT sin costo y a tu ritmo.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>`,
            query: {
                question: "¿Cómo arma una PyME su legajo de visibilidad en Plano B y qué documentación requiere?",
                response: "El Asistente IA de MatchFin confirma que la PyME puede cargar su padrón impositivo, balances de los últimos 2 años y facturación electrónica de forma 100% digital. Esta información es procesada y normalizada por el motor de legibilidad de MatchFin sin costo alguno.",
                activeCapas: ["capa-1", "capa-2"],
                activeMon: "mon-2"
            }
        },
        "step-7": {
            title: "EVALUACIÓN Y REGISTRO",
            text: "Tu legajo se procesa y se firma digitalmente de forma estructurada.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
            query: {
                question: "¿Qué validaciones automáticas se realizan sobre el legajo cargado?",
                response: "El motor de MatchFin ejecuta el Score QUANT preliminar y firma digitalmente el perfil financiero estructurado. Esto garantiza que la información sea verídica, esté actualizada y cumpla con las políticas de origen necesarias para las entidades del marketplace.",
                activeCapas: ["capa-2", "capa-6"],
                activeMon: "mon-2"
            }
        },
        "step-8": {
            title: "VISIBLE EN MARKETPLACE",
            text: "Aparecés para entidades que buscan empresas financiables.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/><path d="M2 12h20"/></svg>`,
            query: {
                question: "¿Cómo descubren las entidades financieras a las PyMEs visibles en la red?",
                response: "Las SGRs, bancos y fondos adheridos buscan en el marketplace mediante filtros de **score, sector y región**. La visibilidad de la metalúrgica en el marketplace se rige por la **doble soberanía**: si proviene de un tenant socio (por ejemplo, vía su propia campaña o widget de marca blanca), queda a su exclusivo criterio si visibilizarla o no; si ingresa por campañas de MatchFin o cualquiera de los 4 canales directos de entrada (Bloque A), la plataforma define el flujo de visibilidad (clasificada o pública) basado en reglas aplicadas en otra capa de negocio. Los análisis de riesgo privados habituales permanecen invisibles para el resto de la red.",
                activeCapas: ["capa-3", "capa-6", "capa-predictiva-loop"],
                activeMon: "mon-6"
            }
        }
    },
    2: {
        "step-6": {
            title: "COMPLETA PERFIL",
            text: "Carga guiada con validaciones para calificar a ofertas reales.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 7a4 4 0 100-8 4 4 0 000 8z"/></svg>`,
            query: {
                question: "¿Qué datos adicionales requiere el perfil de línea preaprobada?",
                response: "Se solicita complementar el legajo con la facturación electrónica de los últimos 3 meses vía AFIP y deudas previsionales actualizadas. Con esto, el CUIT califica de forma completa frente a los algoritmos de las SGRs y bancos del marketplace.",
                activeCapas: ["capa-1", "capa-2"],
                activeMon: "mon-2"
            }
        },
        "step-7": {
            title: "CALIFICACIÓN AUTOMÁTICA",
            text: "El motor evalúa el legajo contra políticas de riesgo de bancos y SGRs.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><path d="M9 9h6v6H9zm0-5v1m6-1v1M4 9h1m15 0h1M4 15h1m15 0h1M9 20v1m6-1v1"/></svg>`,
            query: {
                question: "¿Cómo opera el motor de riesgo para calificar las líneas preaprobadas?",
                response: "MatchFin procesa el legajo en base a las políticas parametrizadas por las entidades (SGRs y bancos) en la Capa 6. El sistema cruza deudas, ratios de liquidez y el score predictivo para determinar la elegibilidad y el monto de financiamiento estimado.",
                activeCapas: ["capa-2", "capa-4", "capa-6"],
                activeMon: "mon-3"
            }
        },
        "step-8": {
            title: "LÍNEAS PREAPROBADAS",
            text: "SGRs y bancos interesados te ofrecen montos y tasas preliminares.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>`,
            query: {
                question: "¿Cuáles son las ofertas de crédito preaprobadas para la metalúrgica?",
                response: "El Asistente IA detectó **3 ofertas de líneas de crédito / avales preaprobados** para Metalúrgica del Plata S.A.:<br>1. *Garantizar SGR:* Aval por $10M a 180 días con tasa preferencial.<br>2. *Banco Galicia:* Línea de descuento de cheques hasta $8M (CPA: p51).<br>3. *Fintech A:* Capital de trabajo por $5M preaprobado a sola firma.",
                activeCapas: ["capa-3", "capa-6", "capa-predictiva-loop"],
                activeMon: "mon-6"
            }
        }
    },
    3: {
        "step-6": {
            title: "DIAGNÓSTICO DE CARPETA",
            text: "Análisis del % de completitud y peso de campos en el score.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>`,
            query: {
                question: "¿Qué es el diagnóstico de carpeta y qué porcentaje tiene Metalúrgica del Plata?",
                response: "El diagnóstico analiza la calidad e integridad de la información cargada. Metalúrgica del Plata S.A. tiene actualmente un **65% de completitud** en su carpeta. El sistema evalúa qué datos clave faltan subir and cuánto sumarían al score QUANT de elegibilidad de crédito.",
                activeCapas: ["capa-2", "capa-3"],
                activeMon: "mon-2"
            }
        },
        "step-7": {
            title: "ROADMAP DE LEGAJO",
            text: "Pasos ordenados recomendados para tener una carpeta óptima.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/></svg>`,
            query: {
                question: "¿Cuál es la hoja de ruta (roadmap) recomendada para optimizar el legajo?",
                response: "El Asistente IA ha trazado un **Roadmap de Mejora** personalizado para la metalúrgica. El paso prioritario es cargar el balance auditado 2025 (suma +20% de completitud y +12 pts de score potencial). En el drawer lateral se muestra el checklist detallado de tareas pendientes.",
                activeCapas: ["capa-2", "capa-5"],
                activeMon: "mon-3"
            }
        },
        "step-8": {
            title: "CARPETA COMPLETA",
            text: "Tu carpeta financiera alcanza el nivel óptimo y elegible.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
            query: {
                question: "¿Qué ocurre cuando la carpeta financiera de la PyME alcanza el 100% de elegibilidad?",
                response: "Al completar el 100% del legajo optimizado, el score Psi de la metalúrgica sube a p75. Se emite una alerta en la Capa 3 y la empresa pasa a ser clasificada como **Elegibilidad Premium (Operable sin contacto)** en la red, habilitando la originación inmediata.",
                activeCapas: ["capa-3", "capa-6", "capa-predictiva-loop"],
                activeMon: "mon-6"
            }
        }
    },
    4: {
        "step-6": {
            title: "SOLICITUD DE INFORME",
            text: "Petición de reporte financiero narrativo autogestionado.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5m-7 7h14"/></svg>`,
            query: {
                question: "¿Qué tipos de informes narrativos de IA pueden solicitar las empresas?",
                response: "Las PyMEs pueden solicitar un informe autogestionado de su situación comercial y financiera en lenguaje natural. Este reporte compila datos contables, impositivos, y estimaciones de stress testing en un único documento narrativo estructurado.",
                activeCapas: ["capa-1", "capa-2"],
                activeMon: "mon-2"
            }
        },
        "step-7": {
            title: "ANÁLISIS COGNITIVO",
            text: "NLP y algoritmos estructuran el análisis en lenguaje accesible.",
            icon: `<span class="ai-box-badge">AI</span>`,
            query: {
                question: "¿Cómo genera la IA el informe narrativo de solvencia y riesgo?",
                response: "La Capa 5 (IA Cognitiva) ejecuta modelos de lenguaje (NLP) sobre el dataset de balances y juicios. Analiza de forma explicable las variables de Patrimonio, Liquidez y Rentabilidad en percentiles, redactando un resumen ejecutivo accionable para compartir.",
                activeCapas: ["capa-2", "capa-5"],
                activeMon: "mon-3"
            }
        },
        "step-8": {
            title: "INFORME DESCARGABLE",
            text: "Reporte narrativo en PDF estructurado listo para compartir.",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>`,
            query: {
                question: "¿Cuál es el contenido del PDF final descargable de la metalúrgica?",
                response: "El Asistente IA de MatchFin ha generado el **Informe de Legibilidad Financiera**. En la consola lateral puedes ver una vista previa interactiva con el resumen ejecutivo de solvencia y el botón de descarga del PDF. El reporte destaca el score predictivo p51 y la solidez patrimonial de la PyME.",
                activeCapas: ["capa-3", "capa-6", "capa-predictiva-loop"],
                activeMon: "mon-3"
            }
        }
    }
};

// 4. Elementos del DOM
const simulatorToggle = document.getElementById('simulator-toggle');
const sideDrawer = document.getElementById('side-drawer');
const drawerClose = document.getElementById('drawer-close');
const interactiveItems = document.querySelectorAll('.interactive-item');
const consoleBody = document.getElementById('console-body-content');
const consoleTitle = document.getElementById('console-target-title');
const relationsNav = document.getElementById('console-relations-nav');
const navTagsContainer = document.getElementById('nav-tags-container');

// Chat DOM
const chatMessages = document.getElementById('chat-messages');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');

// Estado Global
let isSimulatorActive = false;
let currentSelectedId = null;
let balanceChecked = false;
let afipChecked = false;

// 5. Manejador de Activación/Desactivación del Simulador
simulatorToggle.addEventListener('change', (e) => {
    isSimulatorActive = e.target.checked;
    if (isSimulatorActive) {
        document.body.classList.add('interactive-mode-active');
        sideDrawer.classList.add('open');
        
        // Cargar saludo inicial en el chat
        chatMessages.innerHTML = '';
        appendChatMessage('MatchFin Assistant', 'Modo Simulador IA activado. Al pasar el cursor o hacer clic sobre los elementos con bordes punteados de la landing page, podrás analizar sus relaciones estructurales. Elige un paso del workflow de Experiencia de Usuario (Pasos 1-8) para iniciar la simulación sobre el CUIT 30-74891253-9 (Metalúrgica del Plata S.A.).', 'ai-msg');
    } else {
        document.body.classList.remove('interactive-mode-active');
        sideDrawer.classList.remove('open');
        clearAllHighlights();
        resetConsole();
    }
    updateVeeoHighlights();
});

// Cerrar drawer manualmente
drawerClose.addEventListener('click', () => {
    sideDrawer.classList.remove('open');
    simulatorToggle.checked = false;
    isSimulatorActive = false;
    document.body.classList.remove('interactive-mode-active');
    clearAllHighlights();
    resetConsole();
    updateVeeoHighlights();
});

// 6. Funciones de Resaltado Visual (Cross-Highlighting)
function clearAllHighlights() {
    interactiveItems.forEach(el => {
        el.classList.remove('selected-focus', 'related-active', 'noise-muted');
    });
}

function applyHighlights(sourceId) {
    const data = relationsData[sourceId];
    if (!sourceId.startsWith('step-') && !data) return;

    // 1. Atenuar todos los elementos
    interactiveItems.forEach(el => {
        el.classList.add('noise-muted');
    });

    // 2. Destacar el origen
    const sourceEl = document.getElementById(sourceId);
    if (sourceEl) {
        sourceEl.classList.remove('noise-muted');
        sourceEl.classList.add('selected-focus');
    }

    // Si es un paso del workflow
    if (sourceId.startsWith('step-')) {
        const stepQuery = workflowAssistantQueries[sourceId];
        if (stepQuery) {
            stepQuery.activeCapas.forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    el.classList.remove('noise-muted');
                    el.classList.add('selected-focus');
                }
            });
            const monEl = document.getElementById(stepQuery.activeMon);
            if (monEl) {
                monEl.classList.remove('noise-muted');
                monEl.classList.add('related-active');
            }
            // También encender el plano asociado
            let activePlano = (stepQuery.activeMon === 'mon-1') ? 'plano-a' : 'plano-b';
            const planoEl = document.getElementById(activePlano);
            if (planoEl) {
                planoEl.classList.remove('noise-muted');
                planoEl.classList.add('related-active');
            }
        }
        return;
    }

    // Si es plano, capa o monetización
    const rels = data.relations;
    if (!rels) return;

    const highlightGroup = (group, className = 'related-active') => {
        if (group) {
            group.forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    el.classList.remove('noise-muted');
                    el.classList.add(className);
                }
            });
        }
    };

    highlightGroup(rels.planos);
    highlightGroup(rels.capas);
    highlightGroup(rels.steps);
    highlightGroup(rels.mon);
}

// Resaltado rápido al usar la caja de chat libre
function applyHighlightsForChatText(capasArray) {
    interactiveItems.forEach(el => {
        el.classList.add('noise-muted');
    });

    capasArray.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.classList.remove('noise-muted');
            el.classList.add('selected-focus');
        }
    });

    // Siempre activar Capa 5 de IA e interactividad
    const iaCapa = document.getElementById('capa-5');
    if (iaCapa) {
        iaCapa.classList.remove('noise-muted');
        iaCapa.classList.add('related-active');
    }
}

// 7. Renderizado e interactividad de la Consola de Relaciones
function renderRelationsNav(id) {
    const data = relationsData[id];
    
    // Workflow Step
    if (id.startsWith('step-')) {
        const query = workflowAssistantQueries[id];
        if (!query) {
            relationsNav.style.display = 'none';
            return;
        }
        navTagsContainer.innerHTML = '';
        const allRelsIds = [...query.activeCapas, query.activeMon];
        
        allRelsIds.forEach(targetId => {
            const name = componentNames[targetId] || targetId;
            const tag = document.createElement('button');
            tag.className = 'relation-tag-btn';
            tag.textContent = name;
            tag.addEventListener('click', (e) => {
                e.stopPropagation();
                selectElement(targetId);
            });
            navTagsContainer.appendChild(tag);
        });
        
        relationsNav.style.display = 'flex';
        return;
    }

    if (!data || !data.relations) {
        relationsNav.style.display = 'none';
        return;
    }

    navTagsContainer.innerHTML = '';
    const rels = data.relations;
    const allRelsIds = [
        ...(rels.planos || []),
        ...(rels.capas || []),
        ...(rels.steps || []),
        ...(rels.mon || [])
    ];

    if (allRelsIds.length === 0) {
        relationsNav.style.display = 'none';
        return;
    }

    allRelsIds.forEach(targetId => {
        const name = componentNames[targetId] || targetId;
        const tag = document.createElement('button');
        tag.className = 'relation-tag-btn';
        tag.textContent = name;
        tag.addEventListener('click', (e) => {
            e.stopPropagation();
            selectElement(targetId);
        });
        navTagsContainer.appendChild(tag);
    });

    relationsNav.style.display = 'flex';
}

function selectElement(id) {
    if (!isSimulatorActive) {
        // Habilitar automáticamente si hacen clic en un elemento interactivo
        simulatorToggle.checked = true;
        isSimulatorActive = true;
        document.body.classList.add('interactive-mode-active');
        sideDrawer.classList.add('open');
    }
    
    currentSelectedId = id;
    clearAllHighlights();
    applyHighlights(id);
    renderConsoleContent(id);
    renderRelationsNav(id);

    if (id.startsWith('step-')) {
        triggerAssistantStepChat(id);
    }
}

function renderConsoleContent(id) {
    if (id.startsWith('step-')) {
        const stepEl = document.getElementById(id);
        const title = stepEl.querySelector('h6').textContent;
        const detail = stepEl.querySelector('.step-text').textContent;
        const num = stepEl.querySelector('.step-circle').textContent;
        
        consoleTitle.textContent = `Paso ${num}: ${title}`;
        consoleBody.innerHTML = `
            <h4>${title}</h4>
            <p>${detail}</p>
            <div class="console-details-grid">
                <div class="console-detail-block">
                    <span>Impacto en Simulación</span>
                    <p>Secuencia operativa del legajo</p>
                </div>
                <div class="console-detail-block">
                    <span>Rol en la Plataforma</span>
                    <p>Automatización de procesos</p>
                </div>
            </div>
        `;

        // Render special step-7 checklist in Variant 3 (Diagnóstico de Carpeta / Roadmap)
        if (id === 'step-7' && parseInt(activeWorkflowVariant) === 3) {
            const widgetDiv = document.createElement('div');
            widgetDiv.id = 'console-step-widget-root';
            consoleBody.appendChild(widgetDiv);
            renderRoadmapChecklist('console-step-widget-root');
        }

        // Render special step-8 PDF preview in Variant 4 (Informe IA descargable)
        if (id === 'step-8' && parseInt(activeWorkflowVariant) === 4) {
            const widgetDiv = document.createElement('div');
            widgetDiv.id = 'console-step-widget-root';
            consoleBody.appendChild(widgetDiv);
            renderPDFPreview('console-step-widget-root');
        }

        // Render standard P-L-R radar widget on step-8 for other variants
        if (id === 'step-8' && parseInt(activeWorkflowVariant) !== 4) {
            const widgetDiv = document.createElement('div');
            widgetDiv.id = 'plr-widget-root';
            consoleBody.appendChild(widgetDiv);
            initPLRWidget('plr-widget-root', plrActiveCompare, plrActiveCompany);
        }
        
        return;
    }

    const data = relationsData[id];
    if (!data) {
        resetConsole();
        return;
    }

    consoleTitle.textContent = `${data.title}`;
    
    let bulletsHtml = '';
    if (data.bullets) {
        bulletsHtml = `<ul class="console-bullets-ul">`;
        data.bullets.forEach(b => {
            bulletsHtml += `<li>${b}</li>`;
        });
        bulletsHtml += `</ul>`;
    }

    let gridHtml = '';
    if (data.techDetails) {
        gridHtml = `<div class="console-details-grid">`;
        for (const [key, value] of Object.entries(data.techDetails)) {
            gridHtml += `
                <div class="console-detail-block">
                    <span>${key}</span>
                    <p>${value}</p>
                </div>
            `;
        }
        gridHtml += `</div>`;
    }

    consoleBody.innerHTML = `
        <h4>Descripción General</h4>
        <p>${data.description}</p>
        ${gridHtml}
        ${bulletsHtml}
    `;

    if (id === 'capa-predictiva-loop' || id === 'step-8') {
        const widgetRoot = document.createElement('div');
        widgetRoot.id = 'plr-widget-root';
        consoleBody.appendChild(widgetRoot);
        initPLRWidget('plr-widget-root', plrActiveCompare, plrActiveCompany);
    }
}

function resetConsole() {
    consoleTitle.textContent = "Consola de Relaciones";
    consoleBody.innerHTML = `
        <div class="empty-state">
            <p>Haz clic en cualquier componente de la landing (Plano, Capa, Paso de UX, Modelo) para visualizar su información técnica, conexiones operativas e impactos transversales.</p>
        </div>
    `;
    relationsNav.style.display = 'none';
}

// 8. Simulación del Asistente IA del Chat
function triggerAssistantStepChat(stepId) {
    const query = workflowAssistantQueries[stepId];
    if (!query) return;

    chatMessages.innerHTML = '';
    
    appendChatMessage('Analista Financiero', query.question, 'user-msg');
    
    // Simular el retraso típico de la IA
    const aiBubble = appendChatMessage('MatchFin Assistant', 'Procesando datos en tiempo real...', 'ai-msg');
    
    setTimeout(() => {
        const textEl = aiBubble.querySelector('.msg-body');
        if (textEl) {
            textEl.innerHTML = query.response;
        }
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 450);
}

function appendChatMessage(author, message, className) {
    const bubble = document.createElement('div');
    bubble.className = `chat-msg ${className}`;
    bubble.innerHTML = `
        <p class="msg-author">${author}</p>
        <p class="msg-body">${message}</p>
    `;
    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return bubble;
}

// 9. Manejo de Eventos del Click en el Infográfico
interactiveItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = item.id;
        
        if (currentSelectedId === id) {
            currentSelectedId = null;
            clearAllHighlights();
            resetConsole();
            if (isSimulatorActive) {
                // Volver a estado inicial en el drawer si deseleccionan
                chatMessages.innerHTML = '';
                appendChatMessage('MatchFin Assistant', 'Elige un paso del workflow de UX para iniciar la simulación sobre la Metalúrgica.', 'ai-msg');
            }
        } else {
            selectElement(id);
        }
    });
});

// Deseleccionar al hacer click fuera
document.body.addEventListener('click', (e) => {
    // Si se hace clic fuera del infográfico y del drawer
    if (isSimulatorActive && currentSelectedId !== null) {
        if (!e.target.closest('.interactive-item') && !e.target.closest('#side-drawer') && !e.target.closest('.interactive-toggle-container')) {
            currentSelectedId = null;
            clearAllHighlights();
            resetConsole();
            chatMessages.innerHTML = '';
            appendChatMessage('MatchFin Assistant', 'Elige un paso del workflow de UX para iniciar la simulación.', 'ai-msg');
        }
    }
});

// 10. Procesamiento de Preguntas Libres en el Chat
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const text = chatInput.value.trim();
    if (!text) return;
    
    chatInput.value = '';
    currentSelectedId = null;
    
    // Inyectar pregunta de usuario
    appendChatMessage('Tú (Analista)', text, 'user-msg');
    
    // Inyectar estado de espera de la IA
    const aiBubble = appendChatMessage('MatchFin Assistant', 'Consultando el dataset del CUIT...', 'ai-msg');
    
    const textLower = text.toLowerCase();
    let responseText = '';
    let highlightCapas = [];

    // Enrutadores Semánticos
    if (textLower.includes('afip') || textLower.includes('deuda') || textLower.includes('cheque') || textLower.includes('rechazado') || textLower.includes('bcra') || textLower.includes('solvencia')) {
        responseText = "Analizando bases de AFIP y BCRA en el dataset: <strong>Metalúrgica del Plata S.A.</strong> se encuentra al día con sus aportes previsionales y no registra deudas impositivas activas. Su situación en la Central de Deudores del BCRA es 1 (Normal) en los 5 bancos en que opera. El Ψ (Psi) / Índice de Salud se mantiene en 62/100 debido a contingencias externas legales.";
        highlightCapas = ["capa-1", "capa-2"];
    } 
    else if (textLower.includes('juicio') || textLower.includes('demanda') || textLower.includes('expediente') || textLower.includes('legal') || textLower.includes('proveedor')) {
        responseText = "La Capa 5 (IA Cognitiva) detectó 3 expedientes judiciales en curso en juzgados comerciales. El total consolidado reclamado por proveedores asciende a $14M. Esta contingencia ya reduce el score global de la metalúrgica a 62/100, recomendándose monitorear el covenant diariamente.";
        highlightCapas = ["capa-1", "capa-5"];
    } 
    else if (textLower.includes('plazo') || textLower.includes('dia') || textLower.includes('días') || textLower.includes('60') || textLower.includes('30') || textLower.includes('caja') || textLower.includes('impago') || textLower.includes('predic') || textLower.includes('estrés')) {
        responseText = "El modelo predictivo de la Capa 4 evaluó un escenario de cobro extendido a 60 días. Se proyecta un descalce financiero temporal en el mes 3 con una <strong>probabilidad de impago (breach probability) del 42%</strong>. Se aconseja limitar el plazo de pago comercial a 30 días.";
        highlightCapas = ["capa-4"];
    } 
    else if (textLower.includes('limite') || textLower.includes('límite') || textLower.includes('monto') || textLower.includes('aprobar') || textLower.includes('decisión') || textLower.includes('monitoreo') || textLower.includes('alerta')) {
        responseText = "La propuesta de decisión en la Capa 6 sugiere una **aprobación condicionada con un límite de crédito de $8M a 30 días de plazo**, emparejado con una alerta de monitoreo continuo en la Capa 3 por si el score Ψ baja de 55.";
        highlightCapas = ["capa-3", "capa-6"];
    } 
    else if (textLower.includes('huella') || textLower.includes('radar') || textLower.includes('plr') || textLower.includes('bucle') || textLower.includes('predictivo') || textLower.includes('repositorio') || textLower.includes('trayectoria')) {
        responseText = "Consultando el **Bucle Predictivo (Repositorio de Huellas)**: La huella P-L-R actual de la metalúrgica es: **Patrimonio p72** (firmeza de largo plazo), **Liquidez p45** (presión de caja) y **Rentabilidad p38**. La expectativa para el próximo período es de *Expansión moderada* (+6 pts) basada en el cluster de empresas metalúrgicas con perfiles similares.";
        highlightCapas = ["capa-2", "capa-4", "capa-predictiva-loop"];
    }
    else if (textLower.includes('veeo') || textLower.includes('estado') || textLower.includes('nivel') || textLower.includes('indice') || textLower.includes('índice')) {
        let currentVeeo = "VE";
        if (balanceChecked && afipChecked) currentVeeo = "VEEO (Operable)";
        else if (balanceChecked || afipChecked) currentVeeo = "VEE (Elegible)";
        else currentVeeo = "VE (Evaluable)";
        
        responseText = "El **Índice VEEO** describe el nivel de preparación financiera de la empresa. **Metalúrgica del Plata S.A.** se encuentra en el nivel **" + currentVeeo + "**. Su evolución avanza de Visible (V) y Evaluable (VE) hacia Elegible (VEE) y Operable (VEEO) a medida que completa la documentación de su carpeta.";
        highlightCapas = ["capa-2", "capa-6"];
    }
    else {
        responseText = "Hola. Como Asistente IA de este CUIT puedo resolver tus dudas sobre el dataset de <strong>Metalúrgica del Plata S.A.</strong>. Pregúntame sobre: <br>1. *Deudas previsionales AFIP o situación crediticia* (Capa 1/2)<br>2. *Juicios y demandas activas* (Capa 5 IA)<br>3. *Riesgo e impacto de venderle a 60 días* (Capa 4 Predicción)<br>4. *Límites recomendados y monitoreo* (Capa 3/6)<br>5. *Huella P-L-R y trayectoria predictiva* (Bucle Predictivo)<br>6. *Nivel de preparación e Índice VEEO* (Modelo VEEO)";
        highlightCapas = ["capa-5", "capa-predictiva-loop"];
    }

    setTimeout(() => {
        const textEl = aiBubble.querySelector('.msg-body');
        if (textEl) {
            textEl.innerHTML = responseText;
        }
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        if (isSimulatorActive) {
            applyHighlightsForChatText(highlightCapas);
        }
    }, 450);
});

// Helper for VEEO badge styling
function getVeeoBadgeClass(veeo) {
    if (veeo === "V") return "veeo-visible";
    if (veeo === "VE") return "veeo-evaluable";
    if (veeo === "VEE") return "veeo-elegible";
    if (veeo === "VEEO") return "veeo-operable";
    return "";
}

// 11. Función de Renderizado e Interactividad del Widget P-L-R
function initPLRWidget(rootId, comparePeriod = plrActiveCompare, companyId = plrActiveCompany) {
    const root = document.getElementById(rootId);
    if (!root) return;
    
    plrActiveCompare = comparePeriod;
    plrActiveCompany = companyId;
    
    const companyData = plrDataset[companyId];
    const actual = companyData.periods["Actual"];
    const compare = companyData.periods[comparePeriod];
    const pred = companyData.periods["Pred"];
    const bench = companyData.benchmark;
    
    // Determinar nivel VEEO actual
    let currentVeeo = companyData.veeo;
    if (companyId === 'metalurgica') {
        if (balanceChecked && afipChecked) currentVeeo = "VEEO";
        else if (balanceChecked || afipChecked) currentVeeo = "VEE";
        else currentVeeo = "VE";
    }
    
    // Calcular deltas
    const deltaP = actual.P - compare.P;
    const deltaL = actual.L - compare.L;
    const deltaR = actual.R - compare.R;
    
    // Generar coordenadas radar (centro 70, 70, radio max 50)
    const maxR = 48;
    const cx = 70, cy = 70;
    const coordsGrid100 = getRadarCoords(100, 100, 100, cx, cy, maxR);
    const coordsGrid75 = getRadarCoords(75, 75, 75, cx, cy, maxR);
    const coordsGrid50 = getRadarCoords(50, 50, 50, cx, cy, maxR);
    const coordsGrid25 = getRadarCoords(25, 25, 25, cx, cy, maxR);
    
    const coordsActual = getRadarCoords(actual.P, actual.L, actual.R, cx, cy, maxR);
    const coordsCompare = getRadarCoords(compare.P, compare.L, compare.R, cx, cy, maxR);
    const coordsPred = getRadarCoords(pred.P, pred.L, pred.R, cx, cy, maxR);
    const coordsBench = getRadarCoords(bench.P, bench.L, bench.R, cx, cy, maxR);
    
    // Generar Trayectoria Line Chart
    // Puntos X: H-4=20, H-3=65, H-2=110, H-1=155, Actual=200, Pred=245
    // Y rango: 10 (p100) a 50 (p0)
    const pointsX = { "H-4": 20, "H-3": 65, "H-2": 110, "H-1": 155, "Actual": 200, "Pred": 245 };
    const getTrajectoryY = (score) => {
        return 46 - ((score - 20) / 80) * 36; // escala entre 10 y 46
    };
    
    let pathActualStr = `M ${pointsX["H-4"]},${getTrajectoryY(companyData.periods["H-4"].score)}`;
    ["H-3", "H-2", "H-1", "Actual"].forEach(p => {
        pathActualStr += ` L ${pointsX[p]},${getTrajectoryY(companyData.periods[p].score)}`;
    });
    
    const pathPredStr = `M ${pointsX["Actual"]},${getTrajectoryY(actual.score)} L ${pointsX["Pred"]},${getTrajectoryY(pred.score)}`;
    
    // HTML del widget
    root.innerHTML = `
        <div class="plr-widget-container">
            <div class="plr-header">
                <div class="plr-company-info">
                    <span class="plr-company-name">${companyData.name}</span>
                    <span class="plr-company-sector">${companyData.sector} <span class="plr-veeo-badge ${getVeeoBadgeClass(currentVeeo)}">${currentVeeo}</span></span>
                </div>
                <select class="plr-select-company" id="widget-company-select">
                    <option value="metalurgica" ${companyId === 'metalurgica' ? 'selected' : ''}>Metalúrgica del Plata S.A.</option>
                    <option value="agroindustrial" ${companyId === 'agroindustrial' ? 'selected' : ''}>Agro Pampeana S.A.</option>
                </select>
            </div>
            
            <div class="plr-grid">
                <!-- RADAR -->
                <div class="plr-radar-area">
                    <div class="plr-radar-svg-container">
                        <svg width="140" height="140" viewBox="0 0 140 140" style="overflow: visible;">
                            <!-- Grid concentric triangles -->
                            <polygon points="${makePointsStr(coordsGrid100)}" fill="none" stroke="#E8E8ED" stroke-width="1"/>
                            <polygon points="${makePointsStr(coordsGrid75)}" fill="none" stroke="#F5F5F7" stroke-width="1" stroke-dasharray="2 2"/>
                            <polygon points="${makePointsStr(coordsGrid50)}" fill="none" stroke="#F5F5F7" stroke-width="1" stroke-dasharray="2 2"/>
                            <polygon points="${makePointsStr(coordsGrid25)}" fill="none" stroke="#F5F5F7" stroke-width="1" stroke-dasharray="2 2"/>
                            
                            <!-- Axes Lines -->
                            <line x1="${cx}" y1="${cy}" x2="${coordsGrid100.P.x}" y2="${coordsGrid100.P.y}" stroke="#E8E8ED" stroke-width="1"/>
                            <line x1="${cx}" y1="${cy}" x2="${coordsGrid100.L.x}" y2="${coordsGrid100.L.y}" stroke="#E8E8ED" stroke-width="1"/>
                            <line x1="${cx}" y1="${cy}" x2="${coordsGrid100.R.x}" y2="${coordsGrid100.R.y}" stroke="#E8E8ED" stroke-width="1"/>
                            
                            <!-- Polygons -->
                            <!-- Benchmark -->
                            <polygon points="${makePointsStr(coordsBench)}" fill="none" stroke="#A1A1A6" stroke-width="1.2" stroke-dasharray="2 2" opacity="0.6"/>
                            <!-- Proyección -->
                            <polygon points="${makePointsStr(coordsPred)}" fill="none" stroke="#10B981" stroke-width="1.2" stroke-dasharray="2 1" opacity="0.8"/>
                            <!-- Comparación (H-X) -->
                            <polygon points="${makePointsStr(coordsCompare)}" fill="rgba(0, 113, 227, 0.03)" stroke="#A3C9FF" stroke-width="1.2"/>
                            <!-- Actual -->
                            <polygon points="${makePointsStr(coordsActual)}" fill="rgba(0, 113, 227, 0.12)" stroke="#0071E3" stroke-width="2"/>
                            
                            <!-- Actual Vertex Dots -->
                            <circle cx="${coordsActual.P.x}" cy="${coordsActual.P.y}" r="3" fill="#0071E3"/>
                            <circle cx="${coordsActual.L.x}" cy="${coordsActual.L.y}" r="3" fill="#0071E3"/>
                            <circle cx="${coordsActual.R.x}" cy="${coordsActual.R.y}" r="3" fill="#0071E3"/>
                            
                            <!-- Axis Labels -->
                            <text x="${cx}" y="${cy - maxR - 4}" font-size="8" font-weight="800" fill="#86868B" text-anchor="middle">Patrimonio</text>
                            <text x="${coordsGrid100.L.x + 2}" y="${coordsGrid100.L.y + 6}" font-size="8" font-weight="800" fill="#86868B" text-anchor="start">Liquidez</text>
                            <text x="${coordsGrid100.R.x - 2}" y="${coordsGrid100.R.y + 6}" font-size="8" font-weight="800" fill="#86868B" text-anchor="end">Rentabilidad</text>
                        </svg>
                    </div>
                    <div class="plr-radar-legend">
                        <div class="plr-legend-dot-item"><span class="plr-legend-line actual"></span><span>Actual</span></div>
                        <div class="plr-legend-dot-item"><span class="plr-legend-line h1"></span><span>${comparePeriod}</span></div>
                        <div class="plr-legend-dot-item"><span class="plr-legend-line proj"></span><span>Proy.</span></div>
                        <div class="plr-legend-dot-item"><span class="plr-legend-line bench"></span><span>Bench</span></div>
                    </div>
                </div>
                
                <!-- SLIDERS -->
                <div class="plr-sliders-area">
                    <div class="plr-compare-header">
                        <span>COMPARAR CON</span>
                        <div class="comparar-capsules" id="widget-capsules">
                            <button class="capsule-btn ${comparePeriod === 'H-4' ? 'active' : ''}" data-period="H-4">H-4</button>
                            <button class="capsule-btn ${comparePeriod === 'H-3' ? 'active' : ''}" data-period="H-3">H-3</button>
                            <button class="capsule-btn ${comparePeriod === 'H-2' ? 'active' : ''}" data-period="H-2">H-2</button>
                            <button class="capsule-btn ${comparePeriod === 'H-1' ? 'active' : ''}" data-period="H-1">H-1</button>
                        </div>
                    </div>
                    
                    <!-- PATRIMONIO -->
                    <div class="plr-slider-item">
                        <div class="plr-slider-labels">
                            <span class="plr-slider-name">Patrimonio</span>
                            <span class="plr-slider-delta ${deltaP >= 0 ? 'positive' : 'negative'}">
                                ${deltaP >= 0 ? '+' : ''}${deltaP} pts
                            </span>
                        </div>
                        <div class="plr-slider-track">
                            <div class="plr-slider-fill positive" style="width: ${actual.P}%;"></div>
                            <div class="plr-slider-marker proj" style="left: ${pred.P}%;" title="Proyección: p${pred.P}"></div>
                            <div class="plr-slider-marker bench" style="left: ${bench.P}%;" title="Benchmark: p${bench.P}"></div>
                        </div>
                        <div class="plr-slider-info-row">
                            <span>Actual <strong class="plr-slider-val blue-txt">p${actual.P}</strong></span>
                            <span>${comparePeriod} <strong class="plr-slider-val">p${compare.P}</strong></span>
                            <span>Proy <strong class="plr-slider-val">p${pred.P}</strong></span>
                            <span>Bench <strong class="plr-slider-val">p${bench.P}</strong></span>
                        </div>
                    </div>
                    
                    <!-- LIQUIDEZ -->
                    <div class="plr-slider-item">
                        <div class="plr-slider-labels">
                            <span class="plr-slider-name">Liquidez</span>
                            <span class="plr-slider-delta ${deltaL >= 0 ? 'positive' : 'negative'}">
                                ${deltaL >= 0 ? '+' : ''}${deltaL} pts
                            </span>
                        </div>
                        <div class="plr-slider-track">
                            <div class="plr-slider-fill ${deltaL >= 0 ? 'positive' : 'negative'}" style="width: ${actual.L}%;"></div>
                            <div class="plr-slider-marker proj" style="left: ${pred.L}%;" title="Proyección: p${pred.L}"></div>
                            <div class="plr-slider-marker bench" style="left: ${bench.L}%;" title="Benchmark: p${bench.L}"></div>
                        </div>
                        <div class="plr-slider-info-row">
                            <span>Actual <strong class="plr-slider-val blue-txt">p${actual.L}</strong></span>
                            <span>${comparePeriod} <strong class="plr-slider-val">p${compare.L}</strong></span>
                            <span>Proy <strong class="plr-slider-val">p${pred.L}</strong></span>
                            <span>Bench <strong class="plr-slider-val">p${bench.L}</strong></span>
                        </div>
                    </div>
                    
                    <!-- RENTABILIDAD -->
                    <div class="plr-slider-item">
                        <div class="plr-slider-labels">
                            <span class="plr-slider-name">Rentabilidad</span>
                            <span class="plr-slider-delta ${deltaR >= 0 ? 'positive' : 'negative'}">
                                ${deltaR >= 0 ? '+' : ''}${deltaR} pts
                            </span>
                        </div>
                        <div class="plr-slider-track">
                            <div class="plr-slider-fill positive" style="width: ${actual.R}%;"></div>
                            <div class="plr-slider-marker proj" style="left: ${pred.R}%;" title="Proyección: p${pred.R}"></div>
                            <div class="plr-slider-marker bench" style="left: ${bench.R}%;" title="Benchmark: p${bench.R}"></div>
                        </div>
                        <div class="plr-slider-info-row">
                            <span>Actual <strong class="plr-slider-val blue-txt">p${actual.R}</strong></span>
                            <span>${comparePeriod} <strong class="plr-slider-val">p${compare.R}</strong></span>
                            <span>Proy <strong class="plr-slider-val">p${pred.R}</strong></span>
                            <span>Bench <strong class="plr-slider-val">p${bench.R}</strong></span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- TRAYECTORIA COMPLETA -->
            <div class="plr-trajectory-section">
                <div class="plr-trajectory-title">Trayectoria Completa (Score Psi)</div>
                <div class="plr-trajectory-chart-container">
                    <svg width="100%" height="45" viewBox="0 0 260 45" style="overflow: visible;">
                        <!-- Grid lines -->
                        <line x1="10" y1="${getTrajectoryY(25)}" x2="250" y2="${getTrajectoryY(25)}" stroke="#F5F5F7" stroke-width="1"/>
                        <line x1="10" y1="${getTrajectoryY(50)}" x2="250" y2="${getTrajectoryY(50)}" stroke="#F5F5F7" stroke-width="1"/>
                        <line x1="10" y1="${getTrajectoryY(75)}" x2="250" y2="${getTrajectoryY(75)}" stroke="#F5F5F7" stroke-width="1"/>
                        
                        <!-- Grid labels -->
                        <text x="5" y="${getTrajectoryY(25) + 3}" font-size="7" font-weight="700" fill="#D2D2D7" text-anchor="end">p25</text>
                        <text x="5" y="${getTrajectoryY(50) + 3}" font-size="7" font-weight="700" fill="#D2D2D7" text-anchor="end">p50</text>
                        <text x="5" y="${getTrajectoryY(75) + 3}" font-size="7" font-weight="700" fill="#D2D2D7" text-anchor="end">p75</text>
                        
                        <!-- Benchmark line (grey flat line) -->
                        <line x1="15" y1="${getTrajectoryY(bench.score)}" x2="245" y2="${getTrajectoryY(bench.score)}" stroke="#A1A1A6" stroke-dasharray="2 2" stroke-width="1" opacity="0.6"/>
                        
                        <!-- Line connections -->
                        <path d="${pathActualStr}" fill="none" stroke="#0071E3" stroke-width="2"/>
                        <path d="${pathPredStr}" fill="none" stroke="#10B981" stroke-width="2" stroke-dasharray="2 2"/>
                        
                        <!-- Dots and Labels -->
                        ${Object.keys(pointsX).map(p => {
                            const val = companyData.periods[p];
                            const isPred = p === "Pred";
                            const dotColor = isPred ? "#10B981" : "#0071E3";
                            const cyVal = getTrajectoryY(val.score);
                            const cxVal = pointsX[p];
                            
                            return `
                                <circle cx="${cxVal}" cy="${cyVal}" r="3.5" fill="${dotColor}" stroke="#FFFFFF" stroke-width="1"/>
                                <text x="${cxVal}" y="${cyVal - 6}" font-size="7.5" font-weight="800" fill="${dotColor}" text-anchor="middle">p${val.score}</text>
                                <text x="${cxVal}" y="44" font-size="7.5" font-weight="700" fill="${p === comparePeriod ? '#0071E3' : '#86868B'}" text-anchor="middle">${p === 'Actual' ? 'Actual' : p === 'Pred' ? 'Pred.' : p}</text>
                            `;
                        }).join('')}
                    </svg>
                </div>
            </div>
            
            <!-- FOOTER SUMMARY CARDS -->
            <div class="plr-cards-footer">
                <div class="plr-footer-card">
                    <span class="plr-card-lbl">MOVIMIENTO</span>
                    <span class="plr-card-val">${companyData.move}</span>
                    <span class="plr-card-desc">${companyData.moveDelta}</span>
                </div>
                <div class="plr-footer-card">
                    <span class="plr-card-lbl">PERFIL</span>
                    <span class="plr-card-val">${companyData.profile}</span>
                    <span class="plr-card-desc">${companyData.profileDesc}</span>
                </div>
                <div class="plr-footer-card accent">
                    <span class="plr-card-lbl">EXPECTATIVA</span>
                    <span class="plr-card-val">${companyData.exp}</span>
                    <span class="plr-card-desc">${companyData.expDesc}</span>
                </div>
            </div>
        </div>
    `;
    
    // Bind company select
    document.getElementById("widget-company-select").addEventListener("change", (e) => {
        initPLRWidget(rootId, comparePeriod, e.target.value);
        updateVeeoHighlights();
    });
    
    // Bind period capsules
    const capsules = document.querySelectorAll("#widget-capsules .capsule-btn");
    capsules.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            initPLRWidget(rootId, btn.getAttribute("data-period"), companyId);
        });
    });
}

// 12. Inicialización de los Selectores de Variantes del Workflow
document.querySelectorAll("#workflow-variant-capsules .variant-capsule-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const variantId = btn.getAttribute("data-variant");
        updateWorkflowVariant(variantId);
        
        if (isSimulatorActive) {
            appendChatMessage("MatchFin Assistant", `Flujo del Plano B conmutado a la **Variante ${variantId}**: ${variantId === '1' ? 'Visible en Marketplace' : variantId === '2' ? 'Línea Preaprobada' : variantId === '3' ? 'Diagnóstico de Carpeta' : 'Informe IA descargable'}. Haz clic en los Pasos 6, 7 y 8 en la landing para ver la simulación de esta ruta.`, "ai-msg");
        }
    });
});

function updateWorkflowVariant(variantId) {
    activeWorkflowVariant = parseInt(variantId);
    
    // update buttons state
    const btns = document.querySelectorAll("#workflow-variant-capsules .variant-capsule-btn");
    btns.forEach(btn => {
        if (parseInt(btn.getAttribute("data-variant")) === activeWorkflowVariant) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    
    const stepsData = variantWorkflowData[activeWorkflowVariant];
    if (!stepsData) return;
    
    // Update step DOM nodes
    ["step-6", "step-7", "step-8"].forEach(stepId => {
        const data = stepsData[stepId];
        
        const titleEl = document.getElementById(`${stepId}-title`);
        const textEl = document.getElementById(`${stepId}-text`);
        const iconEl = document.getElementById(`${stepId}-icon`);
        
        if (titleEl) titleEl.textContent = data.title;
        if (textEl) textEl.textContent = data.text;
        if (iconEl) iconEl.innerHTML = data.icon;
        
        // Dynamically override the query in workflowAssistantQueries
        workflowAssistantQueries[stepId] = data.query;
    });
    
    // If the active element was step-6, 7 or 8, re-render the drawer console!
    if (currentSelectedId && currentSelectedId.startsWith("step-") && ["step-6", "step-7", "step-8"].includes(currentSelectedId)) {
        renderConsoleContent(currentSelectedId);
        renderRelationsNav(currentSelectedId);
        triggerAssistantStepChat(currentSelectedId);
        applyHighlights(currentSelectedId);
    }
    
    updateVeeoHighlights();
}

// 13. Renderizado del Checklist de Diagnóstico de Carpeta (Variante 3 - Paso 7)
function renderRoadmapChecklist(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let completitud = 65;
    if (balanceChecked) completitud += 20;
    if (afipChecked) completitud += 15;
    
    let veeoState = "VE";
    if (balanceChecked && afipChecked) veeoState = "VEEO";
    else if (balanceChecked || afipChecked) veeoState = "VEE";
    
    let badgeClass = veeoState === "VEEO" ? "veeo" : (veeoState === "VEE" ? "vee" : "ve");
    
    container.innerHTML = `
        <div class="roadmap-checklist-container">
            <div class="roadmap-header">
                <span class="roadmap-title">Legajo Financiero — Metalúrgica del Plata <span class="checklist-veeo-header-badge ${badgeClass}">${veeoState}</span></span>
                <span class="roadmap-progress">${completitud}% Completitud</span>
            </div>
            <div class="roadmap-list">
                <div class="roadmap-item completed">
                    <span class="roadmap-check-box"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#34C759" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg></span>
                    <div class="roadmap-item-body">
                        <span class="roadmap-item-title">Constancia de Inscripción AFIP</span>
                        <span class="roadmap-item-desc">Verificada. Situación fiscal al día sin moras.</span>
                        <div class="roadmap-item-meta">
                            <span class="roadmap-impact-badge high">Impacto Alto (+15 pts)</span>
                        </div>
                    </div>
                </div>
                <div class="roadmap-item completed">
                    <span class="roadmap-check-box"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#34C759" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg></span>
                    <div class="roadmap-item-body">
                        <span class="roadmap-item-title">Historial Central de Deudores BCRA</span>
                        <span class="roadmap-item-desc">Consulta automatizada completada. Situación 1 (Normal).</span>
                        <div class="roadmap-item-meta">
                            <span class="roadmap-impact-badge high">Impacto Alto (+20 pts)</span>
                        </div>
                    </div>
                </div>
                <div class="roadmap-item ${balanceChecked ? 'completed' : 'pending'}">
                    <span class="roadmap-check-box">${balanceChecked ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#34C759" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>' : '⭕'}</span>
                    <div class="roadmap-item-body">
                        <span class="roadmap-item-title">Estados Contables / Balances Auditados 2025</span>
                        <span class="roadmap-item-desc">Falta subir el balance anual certificado por el Consejo Profesional.</span>
                        <div class="roadmap-item-meta">
                            <span class="roadmap-impact-badge high">Impacto Alto (+20 pts)</span>
                            ${!balanceChecked ? '<button class="roadmap-action-btn" id="btn-subir-balance">Cargar Balance</button>' : ''}
                        </div>
                    </div>
                </div>
                <div class="roadmap-item ${afipChecked ? 'completed' : 'pending'}">
                    <span class="roadmap-check-box">${afipChecked ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#34C759" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>' : '⭕'}</span>
                    <div class="roadmap-item-body">
                        <span class="roadmap-item-title">Declaraciones Juradas de IVA (AFIP)</span>
                        <span class="roadmap-item-desc">Conectar la clave fiscal para sincronizar facturación mensual.</span>
                        <div class="roadmap-item-meta">
                            <span class="roadmap-impact-badge med">Impacto Medio (+15 pts)</span>
                            ${!afipChecked ? '<button class="roadmap-action-btn" id="btn-conectar-afip">Conectar AFIP</button>' : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Bind buttons
    const btnBalance = document.getElementById("btn-subir-balance");
    if (btnBalance) {
        btnBalance.addEventListener("click", (e) => {
            e.stopPropagation();
            balanceChecked = true;
            renderRoadmapChecklist(containerId);
            updateVeeoHighlights();
            appendChatMessage("MatchFin Assistant", "Se ha cargado con éxito el Balance 2025 de **Metalúrgica del Plata S.A.** El score de completitud del legajo sube a " + (65 + (balanceChecked ? 20 : 0) + (afipChecked ? 15 : 0)) + "%. Tu carpeta es ahora un +12% más elegible para las SGRs. Estado VEEO sube a **VEE (Elegible)**.", "ai-msg");
        });
    }
    
    const btnAfip = document.getElementById("btn-conectar-afip");
    if (btnAfip) {
        btnAfip.addEventListener("click", (e) => {
            e.stopPropagation();
            afipChecked = true;
            renderRoadmapChecklist(containerId);
            updateVeeoHighlights();
            appendChatMessage("MatchFin Assistant", "Clave Fiscal conectada con éxito. Importación de facturas de IVA del CUIT 30-74891253-9 finalizada. El score de completitud sube a " + (65 + (balanceChecked ? 20 : 0) + (afipChecked ? 15 : 0)) + "%. Estado VEEO alcanza **VEEO (Operable)**.", "ai-msg");
        });
    }
}

// 14. Renderizado del Preview y Descarga del Informe IA (Variante 4 - Paso 8)
function renderPDFPreview(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = `
        <div class="narrative-preview-box">
            <div class="pdf-preview-header">
                <svg class="pdf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/>
                </svg>
                <div class="pdf-preview-title">
                    <span class="pdf-filename">informe-legibilidad-metalurgica.pdf</span>
                    <span class="pdf-meta">PDF · 3.2 MB · Generado por MatchFin IA</span>
                </div>
            </div>
            <div class="pdf-preview-body">
                <p><strong>RESUMEN EJECUTIVO:</strong> Metalúrgica del Plata S.A. presenta una estructura patrimonial robusta (Score P: p72) respaldada por sus balances auditados e inmuebles industriales declarados. Se observa una solidez estructural de largo plazo superior al promedio sectorial.</p>
                <p><strong>PRESIÓN OPERATIVA:</strong> La liquidez operativa inmediata (Score L: p45) muestra desvíos de plazos de cobranza en la cadena de distribución. Se desaconsejan plazos de crédito comercial mayores a 30 días, proyectando una breach probability de covenants del 42% en plazos de 60 días.</p>
                <p><strong>DIAGNÓSTICO Y PERSPECTIVA:</strong> El cluster sectorial proyecta una expansión moderada con mejoras de rentabilidad ante la reestructuración de pasivos financieros de corto plazo.</p>
            </div>
            <button class="pdf-download-btn" id="btn-pdf-download">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
                Descargar Informe Completo (PDF)
            </button>
        </div>
    `;
    
    document.getElementById("btn-pdf-download").addEventListener("click", (e) => {
        e.stopPropagation();
        alert("Descargando 'informe-legibilidad-metalurgica.pdf'...");
        appendChatMessage("MatchFin Assistant", "PDF generado con éxito. El informe de legibilidad financiera ha sido descargado en tu equipo local.", "ai-msg");
    });
}

// 15. Función para actualizar los destaques visuales de las tarjetas y el índice VEEO
function updateVeeoHighlights() {
    // Reset all VEEO cards active states
    document.querySelectorAll(".veeo-card").forEach(card => card.classList.remove("active-state"));
    document.querySelectorAll(".veeo-index-step").forEach(step => {
        step.classList.remove("step-v-active", "step-ve-active", "step-vee-active", "step-veeo-active");
    });
    
    let currentVeeo = "VE";
    if (isSimulatorActive) {
        if (plrActiveCompany === "metalurgica") {
            if (balanceChecked && afipChecked) currentVeeo = "VEEO";
            else if (balanceChecked || afipChecked) currentVeeo = "VEE";
            else currentVeeo = "VE";
        } else if (plrActiveCompany === "agroindustrial") {
            currentVeeo = "VEEO";
        }
    } else {
        // If simulator is off, highlight based on active workflow variant
        const vid = parseInt(activeWorkflowVariant);
        if (vid === 1) currentVeeo = "V";
        else if (vid === 2) currentVeeo = "VEE";
        else if (vid === 3) currentVeeo = "VE";
        else if (vid === 4) currentVeeo = "VEEO";
    }
    
    // Highlight the card corresponding to currentVeeo
    let cardId = "veeo-card-v";
    let stepId = "index-step-v";
    let activeClass = "step-v-active";
    
    if (currentVeeo === "VE") {
        cardId = "veeo-card-ve";
        stepId = "index-step-ve";
        activeClass = "step-ve-active";
    } else if (currentVeeo === "VEE") {
        cardId = "veeo-card-vee";
        stepId = "index-step-vee";
        activeClass = "step-vee-active";
    } else if (currentVeeo === "VEEO") {
        cardId = "veeo-card-veeo";
        stepId = "index-step-veeo";
        activeClass = "step-veeo-active";
    }
    
    const card = document.getElementById(cardId);
    if (card) card.classList.add("active-state");
    
    const step = document.getElementById(stepId);
    if (step) step.classList.add(activeClass);
}

// Inicializar por defecto la Variante 1 en la landing
updateWorkflowVariant(1);
