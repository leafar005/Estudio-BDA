import re

with open('guia/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Reorder "Tipos"
# Find the start of the grid-2 for "Tipos"
start_tipos = html.find('<div class="grid-2" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-bottom: 10px;">')
if start_tipos == -1:
    print("Tipos grid not found")
    exit(1)

start_tipos += len('<div class="grid-2" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-bottom: 10px;">')
end_tipos = html.find('      </div>\n    </section>', start_tipos)

tipos_content = html[start_tipos:end_tipos]

# Extract each "Tipo" box
tipo_blocks = re.findall(r'(<div class="box" style="border-top: [^>]+>.*?</div>\s*</div>)', tipos_content, flags=re.DOTALL)

# Map them based on what they contain
tipo_map = {}
for block in tipo_blocks:
    if 'Control de Concurrencia' in block: tipo_map['concurrencia'] = block
    elif 'Recuperación ante Caídas' in block: tipo_map['recuperacion'] = block
    elif 'Optimización Heurística' in block: tipo_map['optimizacion'] = block
    elif 'Diseño Físico' in block: tipo_map['diseno'] = block
    elif 'Integridad' in block: tipo_map['integridad'] = block
    elif 'Vistas y Seguridad' in block: tipo_map['vistas'] = block

# Re-assign names to A, B, C, D, E, F
def rename_tipo(block, new_letter):
    return re.sub(r'Tipo [A-F]:', f'Tipo {new_letter}:', block)

new_order = [
    ('A', tipo_map['vistas']),
    ('B', tipo_map['integridad']),
    ('C', tipo_map['optimizacion']),
    ('D', tipo_map['diseno']),
    ('E', tipo_map['recuperacion']),
    ('F', tipo_map['concurrencia'])
]

new_tipos_content = "\n\n        ".join([rename_tipo(block, letter) for letter, block in new_order]) + "\n"

# Replace in html
html = html[:start_tipos] + "\n        " + new_tipos_content + html[end_tipos:]


# 2. Reorder "Recetas"
start_recetas = html.find('<h2 class="theme-title" style="border-bottom-color: var(--accent); color: var(--accent);">🛠️ 2. MÉTODO GENERAL DE RESOLUCIÓN (Tus Recetas)</h2>')
end_recetas = html.find('<!-- EXAMS SECTION -->')

recetas_content = html[start_recetas:end_recetas]

# Extract Recetas
receta_blocks = re.findall(r'(<h3 class="subtheme-title">Receta \d+:[^<]+</h3>\s*<div class="box">.*?</div>\s*</div>)', recetas_content, flags=re.DOTALL)

receta_map = {}
for block in receta_blocks:
    if 'Concurrencia' in block: receta_map['concurrencia'] = block
    elif 'Logs de Recuperación' in block: receta_map['recuperacion'] = block
    elif 'Optimización Heurística' in block: receta_map['optimizacion'] = block

def rename_receta(block, new_num):
    return re.sub(r'Receta \d+:', f'Receta {new_num}:', block)

new_recetas_order = [
    (1, receta_map['optimizacion']),
    (2, receta_map['recuperacion']),
    (3, receta_map['concurrencia'])
]

new_recetas_content = "\n\n      ".join([rename_receta(block, num) for num, block in new_recetas_order]) + "\n\n    </section>\n\n    "

html = html[:start_recetas] + '<h2 class="theme-title" style="border-bottom-color: var(--accent); color: var(--accent);">🛠️ 2. MÉTODO GENERAL DE RESOLUCIÓN (Tus Recetas)</h2>\n\n      ' + new_recetas_content + html[end_recetas:]


# 3. Fix Title Margins for Tipo blocks
html = html.replace('<h4 style="color: #c4b5fd;">', '<h4 style="color: #c4b5fd; margin-top: 0;">')
html = html.replace('<h4 style="color: #fcd34d;">', '<h4 style="color: #fcd34d; margin-top: 0;">')
html = html.replace('<h4 style="color: #fca5a5;">', '<h4 style="color: #fca5a5; margin-top: 0;">')


with open('guia/index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Guia reordered successfully without breaking anything.")
