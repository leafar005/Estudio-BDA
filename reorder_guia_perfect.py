import re

with open('guia/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Reorder "Tipos"
start_tipos = html.find('<div class="grid-2" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-bottom: 10px;">')
start_tipos += len('<div class="grid-2" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-bottom: 10px;">')
end_tipos = html.find('      </div>\n    </section>', start_tipos)

tipos_content = html[start_tipos:end_tipos]
boxes = tipos_content.split('<div class="box" style="border-top: ')
boxes = [b for b in boxes if b.strip()]

tipo_map = {}
for b in boxes:
    block = '<div class="box" style="border-top: ' + b
    if 'Control de Concurrencia' in block: tipo_map['concurrencia'] = block
    elif 'Recuperación ante Caídas' in block: tipo_map['recuperacion'] = block
    elif 'Optimización Heurística' in block: tipo_map['optimizacion'] = block
    elif 'Diseño Físico' in block: tipo_map['diseno'] = block
    elif 'Integridad' in block: tipo_map['integridad'] = block
    elif 'Vistas y Seguridad' in block: tipo_map['vistas'] = block

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

new_tipos_content = "\n\n        ".join([rename_tipo(block, letter).strip() for letter, block in new_order]) + "\n"

html = html[:start_tipos] + "\n        " + new_tipos_content + html[end_tipos:]

# 2. Reorder "Recetas"
start_recetas = html.find('<h2 class="theme-title" style="border-bottom-color: var(--accent); color: var(--accent);">🛠️ 2. MÉTODO GENERAL DE RESOLUCIÓN (Tus Recetas)</h2>')
start_recetas = html.find('\n', start_recetas) + 1
end_recetas = html.find('<!-- EXAMS SECTION -->')

recetas_content = html[start_recetas:end_recetas]
# Clean up the </section> from the end of the block so it doesn't get moved around
recetas_content = recetas_content.replace('</section>', '').strip()

r_parts = recetas_content.split('<h3 class="subtheme-title">Receta')
r_parts = [p for p in r_parts if p.strip()]

receta_map = {}
for p in r_parts:
    block = '<h3 class="subtheme-title">Receta' + p
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

new_recetas_content = "\n\n      ".join([rename_receta(block, num).strip() for num, block in new_recetas_order]) + "\n\n    </section>\n\n    "

html = html[:start_recetas] + '\n      ' + new_recetas_content + html[end_recetas:]

# 3. Fix Title Margins for Tipo blocks
html = html.replace('<h4 style="color: #c4b5fd;">', '<h4 style="color: #c4b5fd; margin-top: 0;">')
html = html.replace('<h4 style="color: #fcd34d;">', '<h4 style="color: #fcd34d; margin-top: 0;">')
html = html.replace('<h4 style="color: #fca5a5;">', '<h4 style="color: #fca5a5; margin-top: 0;">')

with open('guia/index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Perfect ordering applied.")
