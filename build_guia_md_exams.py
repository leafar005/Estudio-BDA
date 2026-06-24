import re
import os
import glob

exams_dir = "/home/rafaelcasado/informatica/3 curso/2 cuatri/BDA/examenes md/"
md_files = glob.glob(os.path.join(exams_dir, "*.md"))

def parse_exam_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Match ## P or ### P
    sections = re.split(r'\n#{2,3} P\d+.*?\n', content)
    titles = re.findall(r'\n#{2,3} (P\d+.*?)\n', content)
    
    questions = []
    
    for i, title in enumerate(titles):
        section_content = sections[i+1] # sections[0] is the prefix before the first question
        
        # We need to split into Enunciado and Solución
        # Solución starts with "> [!success]- Solución"
        parts = re.split(r'>\s*\[!success\]-\s*Solución\s*\n', section_content)
        
        enunciado_md = parts[0].strip()
        solucion_md = ""
        if len(parts) > 1:
            # The solution is the rest of the text, but it's prefixed with "> "
            sol_lines = parts[1].split('\n')
            clean_sol_lines = []
            for line in sol_lines:
                if line.startswith('> '):
                    clean_sol_lines.append(line[2:])
                elif line.startswith('>'):
                    clean_sol_lines.append(line[1:])
                else:
                    # if it stops being a blockquote, it might be the end of the solution
                    # but sometimes there are empty lines. Let's just keep everything and strip '> '
                    clean_sol_lines.append(line)
            solucion_md = '\n'.join(clean_sol_lines).strip()
            
        questions.append({
            'title': title,
            'enunciado': enunciado_md,
            'solucion': solucion_md
        })
        
    return questions

all_questions = []
for file in sorted(md_files):
    exam_name = re.sub(r'\s*-\s*Bases de Datos Avanzadas\.md$', '', os.path.basename(file), flags=re.IGNORECASE)
    exam_name = exam_name.replace('.md', '').strip() # Just in case
    qs = parse_exam_file(file)
    for q in qs:
        q['exam'] = exam_name
        all_questions.append(q)

print(f"Extracted {len(all_questions)} questions from the MD exams.")

# Now we build the HTML
html_template_start = """<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resolución de Ejercicios - BDA</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../shared/shared.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/line-numbers/prism-line-numbers.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-sql.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/line-numbers/prism-line-numbers.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
  <script>
    mermaid.initialize({ startOnLoad: true, theme: 'dark' });
    MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\\\(', '\\\\)']]
      }
    };
  </script>
  <script type="text/javascript" id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

  <style>
    :root {
      --bg-primary: #0a0e1a;
      --bg-secondary: #111827;
      --bg-card: #1a1f35;
      --text-primary: #f3f4f6;
      --text-secondary: #9ca3af;
      --accent: #ec4899; 
      --border-subtle: rgba(255, 255, 255, 0.08);
    }
    
    body { margin: 0; padding: 0; display: flex; height: 100vh; overflow: hidden; font-family: 'Inter', sans-serif; background-color: var(--bg-primary); color: var(--text-primary); }
    
    #sidebar {
      width: 280px;
      min-width: 280px;
      background: rgba(15, 23, 42, 0.95);
      backdrop-filter: blur(15px);
      border-right: 1px solid var(--border-subtle);
      height: 100vh;
      position: relative;
      left: 0; top: 0;
      overflow-y: auto;
      transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 1000;
      display: flex;
      flex-direction: column;
    }
    #sidebar.hidden { margin-left: -280px; }
    
    .sidebar-header { padding: 20px 24px; border-bottom: 1px solid rgba(255,255,255,0.05); }
    .back-btn { display: inline-flex; align-items: center; gap: 8px; color: #94a3b8; text-decoration: none; font-size: 0.9rem; font-weight: 600; transition: color 0.2s; }
    .back-btn:hover { color: #fff; }
    
    .sidebar-content { flex: 1; overflow-y: auto; padding: 20px 0; }
    
    .nav-h2 { display: block; padding: 12px 24px 4px 24px; font-size: 0.85rem; font-weight: 800; color: #ec4899; text-decoration: none; text-transform: uppercase; letter-spacing: 0.05em; }
    .nav-h3 { display: block; padding: 8px 24px 8px 36px; font-size: 0.8rem; color: var(--text-secondary); text-decoration: none; transition: all 0.2s; border-left: 3px solid transparent; }
    .nav-h3:hover { color: var(--text-primary); background: rgba(255,255,255,0.03); }
    
    #main-content {
      flex: 1;
      overflow-y: auto;
      padding: 20px 60px 60px 60px;
      position: relative;
      scroll-behavior: smooth;
    }

    .toggle-btn {
      position: sticky; top: 0px; z-index: 99; margin-bottom: 20px; margin-left: -40px;
      background: var(--bg-card); border: 1px solid var(--border-subtle); color: var(--text-primary);
      padding: 10px 15px; border-radius: 8px; cursor: pointer;
      display: inline-flex; align-items: center; gap: 10px; transition: all 0.2s; font-weight: 600; font-size: 0.9rem;
    }
    .toggle-btn:hover { background: var(--accent); border-color: var(--accent); }

    .content-container { max-width: 900px; margin: 0 auto; }
    .page-title { font-size: 3.2rem; font-weight: 900; margin-bottom: 15px; background: linear-gradient(135deg, #fff 0%, var(--accent) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; line-height: 1.1; text-align: center; }
    .page-subtitle { font-size: 1.15rem; color: var(--text-secondary); margin-bottom: 60px; line-height: 1.6; text-align: center; max-width: 800px; margin-inline: auto; }
    
    .theme-title { font-size: 2.2rem; font-weight: 800; margin: 80px 0 30px 0; padding-bottom: 15px; border-bottom: 2px solid rgba(255,255,255,0.1); color: #fff; scroll-margin-top: 100px; }
    .subtheme-title { font-size: 1.4rem; font-weight: 700; margin: 45px 0 15px 0; color: #fbcfe8; scroll-margin-top: 100px; }
    
    .box { background: rgba(255,255,255,0.03); padding: 24px; border-radius: 12px; border: 1px solid var(--border-subtle); position: relative; overflow: hidden; }
    
    .recipe-step { display: flex; gap: 15px; margin-bottom: 20px; }
    .recipe-number { flex-shrink: 0; width: 32px; height: 32px; background: var(--accent); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; }
    .recipe-content { flex: 1; }
    .recipe-content p { margin-top: 0; line-height: 1.6; color: #d1d5db; }
    
    /* Code styling */
    pre, code { font-family: 'Fira Code', 'JetBrains Mono', monospace !important; }
    code:not([class*="language-"]) { background: rgba(0,0,0,0.4) !important; padding: 2px 6px; border-radius: 4px; color: #f3f4f6 !important; font-weight: 600; border: 1px solid rgba(255,255,255,0.05); }
    
    .sql-example {
      background: #1e1e1e;
      border-radius: 8px;
      margin: 20px 0;
      box-shadow: 0 4px 15px rgba(0,0,0,0.5);
      border: 1px solid rgba(255,255,255,0.05);
      overflow: hidden;
    }
    .sql-example-header {
      background: #2d2d2d;
      padding: 10px 16px;
      display: flex;
      align-items: center;
      position: relative;
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }
    .mac-buttons { display: flex; gap: 8px; }
    .mac-btn { width: 12px; height: 12px; border-radius: 50%; }
    .mac-btn.close { background: #ff5f56; }
    .mac-btn.minimize { background: #ffbd2e; }
    .mac-btn.maximize { background: #27c93f; }
    .sql-example h5 {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      margin: 0;
      color: #a0a0a0;
      font-size: 0.85rem;
      font-family: 'Inter', sans-serif;
      font-weight: 500;
    }
    .sql-example-body { padding: 15px; overflow-x: auto; overflow-y: hidden; }
    
    /* Intro spacing */
    .clasificacion-lista li { margin-bottom: 25px; }
    .sql-example-body pre { margin: 0 !important; background: transparent !important; padding: 0 !important; font-family: 'JetBrains Mono', monospace !important; font-weight: bold !important; font-size: 0.95rem; line-height: 1.5; color: #f8f8f2; overflow-y: hidden !important; }
    
    @media (max-width: 850px) {
      body { flex-direction: column; height: auto; overflow-y: auto; }
      #sidebar { width: 100%; min-width: 100%; height: auto; border-right: none; border-bottom: 1px solid var(--border-subtle); position: relative; z-index: 100; flex-direction: column; }
      .sidebar-content { display: flex; flex-direction: row; overflow-x: auto; overflow-y: hidden; white-space: nowrap; padding: 10px 15px; -webkit-overflow-scrolling: touch; align-items: center; }
      .nav-h2 { display: inline-block; padding: 8px 15px; margin-right: 10px; font-size: 0.8rem; background: rgba(236,72,153,0.1); border-radius: 8px; border-bottom: none; }
      .nav-h3 { display: inline-block; padding: 8px 12px; font-size: 0.85rem; border-left: none; }
      #main-content { overflow-y: visible; padding: 25px 15px; margin-left: 0; }
      .toggle-btn { margin-left: 0; }
    }
  </style>
</head>
<body class="line-numbers">
  
  <nav id="sidebar">
    <div class="sidebar-header">
      <a href="../index.html" class="back-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        Volver al Portal
      </a>
    </div>
    <div class="sidebar-content" id="nav-links">
      <!-- Generated automatically -->
    </div>
  </nav>

  <main id="main-content">
    
    <button id="toggle-sidebar" class="toggle-btn">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>

    <div class="content-container">
      <div style="text-align: center; margin-bottom: 50px;">
        <h1 class="page-title">Resolución de Ejercicios</h1>
                    </div>

"""

user_text_html = """
    <!-- INTRO SECTION -->
    <section id="intro">
      <h2 class="theme-title" style="border-bottom-color: var(--accent); color: var(--accent);">🚀 LA GUÍA DEFINITIVA</h2>
      <div class="box" style="background: linear-gradient(145deg, rgba(37,99,235,0.1) 0%, rgba(30,58,138,0.05) 100%); border-left: 4px solid var(--accent);">
        <p style="font-size: 1.1rem; line-height: 1.8; color: #d1d5db; margin: 0;">
          <strong>Resumen de alto rendimiento para dominar Bases de Datos Avanzadas.</strong> Diseñado para memorizar, estructurar y evitar trampas de examen.
        </p>
      </div>
    </section>

    <section id="clasificacion">
      <h2 class="theme-title" style="border-bottom-color: var(--accent); color: var(--accent);">📊 1. CLASIFICACIÓN DE EJERCICIOS</h2>
      <div class="box">
        <p style="color: #d1d5db; line-height: 1.6; margin-bottom: 20px;">Tras diseccionar los exámenes, los problemas se dividen en <strong>6 grandes familias</strong>.</p>
        <div class="grid-2" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-bottom: 10px;">
        
        <div class="box" style="border-top: 3px solid #3b82f6;">
          <h4 style="color: #93c5fd; margin-top: 0;">Tipo A: Control de Concurrencia (Marcas de Tiempo y MVCC)</h4>
          <p style="font-size: 0.9rem; margin-top: 10px;"><strong>Qué se pide:</strong> Trazar el estado de las variables (Marcas de Lectura <code>ML</code> y Marcas de Escritura <code>ME</code>) tras una secuencia de operaciones <code>Read(X)</code> / <code>Write(X)</code>.</p>
          <p style="font-size: 0.9rem;"><strong>Conceptos evaluados:</strong> Regla de Escritura de Thomas y Control Multiversión (MVCC).</p>
          <div class="alert" style="margin: 10px 0 0 0; padding: 15px; border-left-color: #ef4444; background: rgba(239, 68, 68, 0.1);">
            <strong style="color: #fca5a5; font-size: 0.9rem;">⚠️ Trampa principal:</strong><br>
            <span style="font-size: 0.85rem;"><strong>Los abortos falsos en la Regla de Thomas.</strong> Si una transacción intenta escribir un dato que ya fue escrito por una transacción más moderna (del "futuro"), ¡NO se aborta! Se ignora silenciosamente. En MVCC, la trampa es no elegir correctamente la versión base sobre la que se opera (se debe buscar la que tenga el mayor <code>ME</code> &le; <code>M(T)</code>).</span>
          </div>
        </div>

        <div class="box" style="border-top: 3px solid #10b981;">
          <h4 style="color: #6ee7b7; margin-top: 0;">Tipo B: Recuperación ante Caídas (Logs y Checkpoints)</h4>
          <p style="font-size: 0.9rem; margin-top: 10px;"><strong>Qué se pide:</strong> Dado un archivo de log y una caída del sistema, deducir la arquitectura y listar qué transacciones sufren <code>UNDO</code> y cuáles <code>REDO</code>.</p>
          <p style="font-size: 0.9rem;"><strong>Conceptos evaluados:</strong> Protocolo WAL, Actualización Diferida vs. Inmediata, y Puntos de Verificación (Checkpoints).</p>
          <div class="alert" style="margin: 10px 0 0 0; padding: 15px; border-left-color: #ef4444; background: rgba(239, 68, 68, 0.1);">
            <strong style="color: #fca5a5; font-size: 0.9rem;">⚠️ Trampa principal:</strong><br>
            <span style="font-size: 0.85rem;">La barrera del <code>CHECKPOINT</code>. Si una transacción hizo <code>COMMIT</code> antes de un checkpoint, <strong>se ignora por completo</strong> en la recuperación, ya que sus datos ya están seguros en disco. Otra trampa es confundir la arquitectura: si el log tiene 4 parámetros (Tx, Dato, ValorViejo, ValorNuevo) es Inmediata; si tiene 3, es Diferida. En Diferida, el <code>UNDO</code> no existe.</span>
          </div>
        </div>

        <div class="box" style="border-top: 3px solid #8b5cf6;">
          <h4 style="color: #c4b5fd;">Tipo C: Optimización Heurística (Álgebra Relacional)</h4>
          <p style="font-size: 0.9rem; margin-top: 10px;"><strong>Qué se pide:</strong> Dibujar el árbol canónico y el árbol optimizado justificando los pasos a partir de una consulta SQL.</p>
          <p style="font-size: 0.9rem;"><strong>Conceptos evaluados:</strong> Equivalencias del álgebra relacional, empujar selecciones (Push-Down), convertir productos cartesianos en Joins.</p>
          <div class="alert" style="margin: 10px 0 0 0; padding: 15px; border-left-color: #ef4444; background: rgba(239, 68, 68, 0.1);">
            <strong style="color: #fca5a5; font-size: 0.9rem;">⚠️ Trampa principal:</strong><br>
            <span style="font-size: 0.85rem;">Olvidar el operador de agrupación (<code>γ</code> o gamma) en consultas con <code>GROUP BY</code> o funciones de agregación (<code>SUM</code>, <code>COUNT</code>).</span>
          </div>
        </div>

        <div class="box" style="border-top: 3px solid #f59e0b;">
          <h4 style="color: #fcd34d;">Tipo D: Diseño Físico (Índices y Planes de Ejecución)</h4>
          <p style="font-size: 0.9rem; margin-top: 10px;"><strong>Qué se pide:</strong> Predecir si Oracle usará o no un índice dado, o analizar la salida de un <code>EXPLAIN PLAN</code>.</p>
          <p style="font-size: 0.9rem;"><strong>Conceptos evaluados:</strong> Índices B-Tree, comportamiento ante valores nulos, lectura de grafos de ejecución.</p>
          <div class="alert" style="margin: 10px 0 0 0; padding: 15px; border-left-color: #ef4444; background: rgba(239, 68, 68, 0.1);">
            <strong style="color: #fca5a5; font-size: 0.9rem;">⚠️ Trampa principal:</strong><br>
            <span style="font-size: 0.85rem;"><strong>Los índices B-Tree de Oracle NO guardan valores completamente nulos</strong>. Si una query hace un <code>SELECT columna</code> o un <code>COUNT(columna)</code> sin un <code>IS NOT NULL</code>, el optimizador descartará el índice y hará un <code>TABLE ACCESS FULL</code>. Excepción: Funciones como <code>MAX()</code> o <code>AVG()</code> sí usan el índice porque ignoran los nulos matemáticamente.</span>
          </div>
        </div>

        <div class="box" style="border-top: 3px solid #ef4444;">
          <h4 style="color: #fca5a5;">Tipo E: Integridad (Cláusula MATCH y Acciones Referenciales)</h4>
          <p style="font-size: 0.9rem; margin-top: 10px;"><strong>Qué se pide:</strong> Validar tuplas candidatas frente a una Foreign Key compuesta con nulos. Diferenciar <code>NO ACTION</code> de <code>RESTRICT</code>.</p>
          <div class="alert" style="margin: 10px 0 0 0; padding: 15px; border-left-color: #ef4444; background: rgba(239, 68, 68, 0.1);">
            <strong style="color: #fca5a5; font-size: 0.9rem;">⚠️ Trampa principal:</strong><br>
            <span style="font-size: 0.85rem;"><code>MATCH FULL</code> rechaza cualquier registro "a medias" (mezcla de nulos y no nulos). <code>NO ACTION</code> permite aplazamiento (<code>DEFERRABLE</code>), mientras que <code>RESTRICT</code> es siempre de verificación inmediata.</span>
          </div>
        </div>

        <div class="box" style="border-top: 3px solid #14b8a6;">
          <h4 style="color: #5eead4; margin-top: 0;">Tipo F: Vistas y Seguridad</h4>
          <p style="font-size: 0.9rem; margin-top: 10px;"><strong>Qué se pide:</strong> Indicar qué pasa si se consulta una vista tras modificar la tabla base, o si se intentan insertar filas migratorias. Privilegios y roles.</p>
          <div class="alert" style="margin: 10px 0 0 0; padding: 15px; border-left-color: #ef4444; background: rgba(239, 68, 68, 0.1);">
            <strong style="color: #fca5a5; font-size: 0.9rem;">⚠️ Trampa principal:</strong><br>
            <span style="font-size: 0.85rem;">El <code>SELECT *</code> al crear una vista se "congela" en el catálogo. Un <code>ALTER TABLE</code> posterior añadiendo una columna no aparecerá en la vista. Además, <code>PUBLIC</code> es un pseudo-rol que no puede ser revocado a un único usuario para aislarlo.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2 -->
    <section id="metodo">
      <h2 class="theme-title" style="border-bottom-color: var(--accent); color: var(--accent);">🛠️ 2. MÉTODO GENERAL DE RESOLUCIÓN (Tus Recetas)</h2>

      <h3 class="subtheme-title">Receta 1: Concurrencia con MVCC (Multiversión)</h3>
      <div class="box">
        <p style="color: #93c5fd; margin-top:0;"><strong>Cómo reconocerlo:</strong> El enunciado te da versiones como <code>A1: Valor=20, ML=4, ME=1</code>.</p>
        <strong>Procedimiento Universal:</strong>
        <div class="recipe-step" style="margin-top:10px;">
          <div class="recipe-number">1</div>
          <div class="recipe-content">
            <strong style="color: #fff;">Encontrar la versión:</strong> Ante una operación de la transacción $T_i$, busca la versión histórica que tenga el mayor <code>ME</code> $\\le M(T_i)$. Esa es tu base.
          </div>
        </div>
        <div class="recipe-step">
          <div class="recipe-number">2</div>
          <div class="recipe-content">
            <strong style="color: #fff;">Si es Lectura (Read):</strong> Se permite siempre. Actualiza el $ML$ de esa versión: $ML = \max(M(T_i), ML actual)$.
          </div>
        </div>
        <div class="recipe-step">
          <div class="recipe-number">3</div>
          <div class="recipe-content">
            <strong style="color: #fff;">Si es Escritura (Write):</strong> Comprueba dos reglas sobre esa versión base:
            <ul style="margin-top: 5px; padding-left: 20px;">
              <li>¿$M(T_i) < ML_{base}$? Si SÍ &rarr; <strong>ROLLBACK</strong> (alguien del futuro ya lo leyó).</li>
              <li>¿$M(T_i) < ME_{base}$? Si SÍ &rarr; <strong>ROLLBACK</strong> (alguien del futuro ya lo sobreescribió).</li>
              <li>Si pasa ambas &rarr; <strong>Crea una nueva versión</strong> $A_{nueva}$ con $Valor = Nuevo$, $ME = M(T_i)$, $ML = M(T_i)$.</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 class="subtheme-title">Receta 2: Logs de Recuperación</h3>
      <div class="box">
        <p style="color: #6ee7b7; margin-top:0;"><strong>Cómo reconocerlo:</strong> Lista de comandos <code>&lt;Tx, START&gt;</code>, <code>&lt;Tx, A, 10, 20&gt;</code>.</p>
        <strong>Procedimiento Universal:</strong>
        <div class="recipe-step" style="margin-top:10px;">
          <div class="recipe-number">1</div>
          <div class="recipe-content">
            <strong style="color: #fff;">Clasificar Arquitectura:</strong> Si ves 4 campos en el DML (Transacción, Variable, Antiguo, Nuevo) es <strong>Inmediata</strong>. Si ves 3 (Transacción, Variable, Nuevo) es <strong>Diferida</strong>.
          </div>
        </div>
        <div class="recipe-step">
          <div class="recipe-number">2</div>
          <div class="recipe-content">
            <strong style="color: #fff;">Barrera Checkpoint:</strong> Traza una línea en el último <code>&lt;CHECKPOINT (activas)&gt;</code>. Tacha cualquier transacción que tenga un <code>&lt;COMMIT&gt;</code> por encima de esa línea. Ya no nos importan.
          </div>
        </div>
        <div class="recipe-step">
          <div class="recipe-number">3</div>
          <div class="recipe-content">
            <strong style="color: #fff;">Clasificar Transacciones Restantes:</strong>
            <ul style="margin-top: 5px; padding-left: 20px;">
              <li>Tienen <code>&lt;COMMIT&gt;</code> &rarr; Van a la lista de <strong>REDO</strong>.</li>
              <li>No tienen <code>&lt;COMMIT&gt;</code> &rarr; Van a la lista de <strong>UNDO</strong> (sólo si es arquitectura Inmediata).</li>
            </ul>
          </div>
        </div>
        <div class="recipe-step">
          <div class="recipe-number">4</div>
          <div class="recipe-content">
            <strong style="color: #fff;">Ejecución:</strong> Aplica primero UNDO (de abajo hacia arriba en el log) y luego REDO (de arriba hacia abajo).
          </div>
        </div>
      </div>

      <h3 class="subtheme-title">Receta 3: Optimización Heurística (Álgebra)</h3>
      <div class="box">
        <strong>Procedimiento Universal:</strong>
        <div class="recipe-step" style="margin-top:10px;">
          <div class="recipe-number">1</div>
          <div class="recipe-content">
            <strong style="color: #fff;">Árbol Bruto:</strong> Junta todas las tablas con producto cartesiano ($\\times$) en la base. Pon una super-selección ($\\sigma$) encima con TODO el <code>WHERE</code>. Remata con la agrupación ($\\gamma$) y la proyección ($\\pi$).
          </div>
        </div>
        <div class="recipe-step">
          <div class="recipe-number">2</div>
          <div class="recipe-content">
            <strong style="color: #fff;">Push-Down (Bajar Filtros):</strong> Rompe la super-selección en condiciones atómicas y bájalas todo lo posible hasta pegarlas a sus tablas respectivas.
          </div>
        </div>
        <div class="recipe-step">
          <div class="recipe-number">3</div>
          <div class="recipe-content">
            <strong style="color: #fff;">Joins:</strong> Convierte las parejas (Tabla $\\times$ Tabla) + Selección de igualdad en operadores Join ($\\bowtie$).
          </div>
        </div>
        <div class="recipe-step">
          <div class="recipe-number">4</div>
          <div class="recipe-content">
            <strong style="color: #fff;">Proyecciones Intermedias:</strong> Pon operadores $\\pi$ antes de cada Join para eliminar columnas inútiles.
          </div>
        </div>
      </div>
    </section>

    <!-- EXAMS SECTION -->
    <section id="examenes">
      <h2 class="theme-title" style="border-bottom-color: var(--accent); color: var(--accent);">📘 3. RESOLUCIÓN DE EXÁMENES</h2>
      <p style="color: #9ca3af; font-size: 1.1rem; line-height: 1.7;">A continuación se resuelven paso a paso los problemas reales extraídos de las convocatorias.</p>
"""

def render_markdown(text):
    # Fix rightarrow
    text = text.replace('\\rightarrow', '&rarr;')

    placeholders = {}
    def repl_code(m):
        lang = m.group(1).strip()
        if not lang: lang = "sql"
        code = m.group(2).strip()
        
        # Escape HTML tags inside code so logs like <T1, START> appear correctly
        code = code.replace('<', '&lt;').replace('>', '&gt;')
        
        if lang == 'mermaid':
            html = f'<div class="mermaid" style="background: rgba(255,255,255,0.03); padding: 20px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); text-align: center; margin: 20px 0;">\n{code}\n</div>'
        else:
            html = f'''<div class="sql-example">
      <div class="sql-example-header">
        <div class="mac-buttons"><span class="mac-btn close"></span><span class="mac-btn minimize"></span><span class="mac-btn maximize"></span></div>
        <h5>Código / Datos</h5>
      </div>
      <div class="sql-example-body">
        <pre><code class="language-{lang}">{code}</code></pre>
      </div>
    </div>'''
        pid = f"__CODE_BLOCK_{len(placeholders)}__"
        placeholders[pid] = html
        return pid
        
    text = re.sub(r'```([a-zA-Z0-9]*)\n(.*?)```', repl_code, text, flags=re.DOTALL)
    
    # Convert markdown tables to HTML tables
    # First, simple pass to convert markdown lines starting and ending with |
    table_pattern = re.compile(r'(\|.*\|[\r\n]+)+')
    
    def repl_table(m):
        lines = m.group(0).strip().split('\n')
        if not lines: return ''
        html = '<div style="overflow-x: auto; margin-bottom: 20px; border-radius: 8px; border: 1px solid var(--border-subtle); background: rgba(0,0,0,0.2);">'
        html += '<table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;">'
        
        for i, line in enumerate(lines):
            line = line.strip()
            if not line: continue
            if '---' in line: continue # separator
            
            cells = [c.strip() for c in line.split('|')[1:-1]]
            tag = 'th' if i == 0 else 'td'
            style = 'padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.05);'
            if tag == 'th': style += ' background: rgba(255,255,255,0.03); font-weight: 600; color: #e5e7eb; letter-spacing: 0.05em; text-transform: uppercase; font-size: 0.85rem;'
            else: style += ' color: #d1d5db;'
            
            html += '<tr style="transition: background 0.2s;" onmouseover="this.style.background=\'rgba(255,255,255,0.02)\'" onmouseout="this.style.background=\'transparent\'">'
            for cell in cells:
                # Basic inline formatting parsing
                cell = re.sub(r'\*\*(.*?)\*\*', r'<strong style="color:#fff;">\g<1></strong>', cell)
                cell = re.sub(r'_(.*?)_', r'<em>\1</em>', cell)
                cell = re.sub(r'`(.*?)`', r'<code>\1</code>', cell)
                html += f'<{tag} style="{style}">{cell}</{tag}>'
            html += '</tr>'
        html += '</table></div>'
        
        pid = f"__CODE_BLOCK_{len(placeholders)}__"
        placeholders[pid] = html
        return pid
        
    text = table_pattern.sub(repl_table, text)

    # Basic bold
    text = re.sub(r'\*\*(.*?)\*\*', r'<strong style="color:#fff;">\g<1></strong>', text)
    
    # Headers
    text = re.sub(r'^#### (.*?)$', r'<h4 style="margin-top: 25px; margin-bottom: 15px; color: #93c5fd; font-size: 1.1rem;">\1</h4>', text, flags=re.MULTILINE)
    text = re.sub(r'^### (.*?)$', r'<h3 style="margin-top: 30px; margin-bottom: 15px; color: #60a5fa; font-size: 1.25rem;">\1</h3>', text, flags=re.MULTILINE)
    
    # Lists
    text = re.sub(r'^- (.*?)$', r'<div style="margin-bottom: 12px; padding-left: 20px; text-indent: -15px; line-height: 1.7;">• \1</div>', text, flags=re.MULTILINE)
    text = re.sub(r'^> (.*?)$', r'<div style="border-left: 3px solid rgba(255,255,255,0.2); padding-left: 15px; margin: 15px 0; color: #a1a1aa;">\1</div>', text, flags=re.MULTILINE)

    # Inline Code
    text = re.sub(r'`([^`\n]+)`', r'<code style="font-family: \'JetBrains Mono\', monospace; font-weight: bold; background: rgba(0,0,0,0.4); padding: 2px 6px; border-radius: 4px; color: #f3f4f6;">\1</code>', text)

    # Replace markdown images
    text = re.sub(r'!\[\[(.*?)\]\]', r'<div style="text-align:center; margin: 15px 0;"><img src="../shared/\1" style="max-width:100%; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);"></div>', text)
    
    # Convert newlines to paragraphs/br
    text = text.replace('\n\n', '<br><br>')
    
    # Restore placeholders
    for pid, html in placeholders.items():
        text = text.replace(pid, html)
    
    return text

cases_html = ""
counter = 1

for q in all_questions:
    enunciado = render_markdown(q['enunciado'])
    solucion = render_markdown(q['solucion'])
    
    # Skip if it doesn't have a solution
    if not solucion:
        continue
        
    # Clean up the exam name
    exam_label = q['exam']
    title_label = q['title']
    
    # Clean up the title to be shorter
    clean_title = re.sub(r'^(?:Pregunta\s*)?P\d+[a-z]?(?:\s*\([^)]+\))?[\.\s-]*', '', title_label).strip()
    if not clean_title:
        clean_title = title_label.replace('###', '').strip()
    
    cases_html += f"""
      <h3 class="subtheme-title">{exam_label} | {clean_title}</h3>
      <div class="box" style="margin-bottom: 30px; border-left: 4px solid #3b82f6;">
        <div style="background: rgba(0,0,0,0.2); padding: 15px; margin-bottom: 20px; border-radius: 8px;">
          <strong style="color: #93c5fd; font-size: 1.1rem; display: block; margin-bottom: 10px;">Enunciado:</strong>
          <div style="color: #e5e7eb; line-height: 1.6;">
          {enunciado}
          </div>
        </div>
        
        <strong style="color: #10b981; font-size: 1.1rem; display: block; margin-bottom: 10px;">🎯 Resolución:</strong>
        <div style="padding: 15px; border-left: 3px solid #10b981; background: rgba(16, 185, 129, 0.1); border-radius: 4px;">
          <div style="color: #d1d5db; line-height: 1.6;">
          {solucion}
          </div>
        </div>
      </div>
"""
    counter += 1

html_template_end = """
    </section>
    </div>
  </main>

  <script>
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const toggleBtn = document.getElementById('toggle-sidebar');

    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('hidden');
    });

    // Generar índice automático
    const sidebarContent = document.getElementById('nav-links');
    sidebarContent.innerHTML = '';
    
    document.querySelectorAll('.theme-title, .subtheme-title').forEach((el, index) => {
      if (!el.id) el.id = 'sec-' + index;
      
      const link = document.createElement('a');
      link.href = '#' + el.id;
      link.textContent = el.textContent;
      
      if (el.tagName === 'H2') {
        link.className = 'nav-h2';
      } else if (el.tagName === 'H3') {
        link.className = 'nav-h3';
      }
      
      sidebarContent.appendChild(link);
    });
  </script>
</body>
</html>
"""

final_html = html_template_start + user_text_html + cases_html + html_template_end

with open("guia/index.html", "w", encoding="utf-8") as f:
    f.write(final_html)

print("Guia generated from MD files.")
