# Portal de Estudio BDA 2026

Portal interactivo y avanzado diseñado para facilitar el estudio y la preparación de la asignatura **BDA** (Bases de Datos Avanzadas). Permite acceder a cientos de preguntas de tipo test organizadas por bloques del temario, simulacros de examen reales formateados y flashcards para estudio rápido. Igual que el de ACL, pero adaptado para enfrentarse al motor interno de Oracle y PostgreSQL.

## 📚 Bloques del Temario

El portal cuenta con un banco de **231 preguntas** (extraídas minuciosamente de la teoría, aula virtual y exámenes de años anteriores), divididas en los siguientes bloques:

- 🗂️ **Catálogo**: Diccionario de datos, INFORMATION_SCHEMA y metadatos (USER_, ALL_, DBA_).
- 🔍 **Vistas**: Vistas virtuales, chequeos CASCADED vs LOCAL, vistas materializadas y reescritura.
- 🛡️ **Integridad**: Reglas de restricción, semánticas MATCH, diferimiento (DEFERRABLE) y bloqueos.
- 🔒 **Seguridad**: Modelos MAC/DAC, Bell-LaPadula, Privilegios, Roles con Grant Option y auditorías.
- ⚡ **Triggers**: Bases de datos activas, reglas ECA, tablas mutantes (ORA-04091) e INSTEAD OF.
- 💾 **Diseño Físico**: Arquitectura ANSI, IOT (Index-Organized Tables), Clusters, Hash e Índices Bitmap.
- 🚀 **Optimización**: Álgebra relacional, heurísticas, CBO (Optimizador basado en costes) y algoritmos de Joins.
- 🔄 **Recuperación**: Protocolo WAL, actualizaciones diferidas vs inmediatas, Undo/Redo y Checkpoints.
- 🔀 **Concurrencia**: Anomalías, 2PL, Timestamp Ordering (incluyendo la regla de Thomas), aislamientos y MVCC.
- 📝 **Exámenes**: Problemas completos extraídos de exámenes reales (2022, 2023, 2026) con todos sus datos y tablas conservados.

## 🚀 Características del Ecosistema

- 📇 **Motor de Flashcards 2.0**: Un sistema súper ágil de tarjetas de memorización integrado para repasar fórmulas y comandos. Cuenta con una "cinta transportadora" 3D para deslizar las cartas, barras de progreso dinámicas por colores y soporte transversal.
- 📖 **Portal de Apuntes Interactivos**: Un lector de resúmenes integrado en el ecosistema, con renderizado Markdown al vuelo, formato de alto contraste y navegación sincronizada con las categorías de estudio.
- 🧠 **Renderizado de Markdown Avanzado**: Integración nativa del motor de Markdown (`marked.js`). Las preguntas complejas y resúmenes que incluyen tablas ASCII, diagramas, bloques de código SQL (`<pre>`) e hilos de transacciones se renderizan idénticos a los apuntes originales.
- 🎨 **Interfaz Premium**: Diseño oscuro profundo (`#0a0e17`) unificado en todo el ecosistema (Portal, Flashcards, Quiz y Apuntes), con efectos glassmorphism, sombras neon y un comportamiento de rebote nativo impecable.
- 🧩 **Modal Inteligente de Estudio**: Al hacer clic en cualquier tema en el portal principal, un menú te dará a elegir tu estilo: el **Cuestionario** clásico, los **Apuntes** teóricos, o el **Mazo de Flashcards**.
- 🔎 **Banco y Estadísticas Globales**: Un explorador global para buscar entre todas las preguntas del sistema, con panel de rendimiento y logros para medir tu progreso general.

## 💻 Tecnologías

El proyecto ha sido desarrollado utilizando tecnologías web estándar sin frameworks pesados, primando la velocidad:

- **HTML5**: Estructuración limpia mediante Bento Grids.
- **CSS3**: Diseño premium oscuro, paletas basadas en HSL y organización en componentes reutilizables sin TailwindCSS, manteniendo un control total a medida.
- **JavaScript Vanilla**: Lógica de enrutamiento por parámetros (`?mode=...`), estado inmutable en `app.js` y almacenamiento local (`localStorage`) para guardar progresos sin necesidad de backend.
- **Marked.js**: Librería ultraligera servida por CDN para transformar la teoría compleja (tablas y SQL) en HTML estilizado al vuelo.

## 🚀 Cómo Empezar

El enlace compadre

## 👨‍💻 Autor

Desarrollado por leafar005 con la ayuda de Antigravity (me voy a poner yo a picar las 200 preguntas venga hombre).
