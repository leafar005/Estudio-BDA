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

- 📇 **Motor de Flashcards**: Un sistema súper ágil de tarjetas de memorización (anverso/reverso) integrado para repasar fórmulas y comandos. Accesible de forma global o bloque por bloque (manteniendo el orden del temario para un estudio progresivo).
- 🧠 **Renderizado de Markdown**: Integración nativa del motor de Markdown (`marked.js`). Las preguntas complejas de examen que incluyen tablas ASCII, diagramas, bloques de código SQL (`<pre>`) e hilos de transacciones se renderizan a la perfección de forma idéntica a los apuntes originales.
- 🎨 **Interfaz: Estética moderna (Dark Mode/Glassmorphism) optimizada.
- 🧩 **Modal Inteligente de Estudio**: Al hacer clic en cualquier tema en el portal principal, un menú limpio te preguntará si prefieres enfrentarte al **Cuestionario** clásico con correcciones detalladas, o al **Mazo de Flashcards** rápido de ese mismo tema.
- 🔎 **Banco de Preguntas y Estadísticas**: Un explorador global para buscar entre todas las preguntas del sistema, junto con un panel de rendimiento y sistema de logros para medir tu progreso.

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
