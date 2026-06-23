const CATEGORIES = [
  {
    "id": "catalogo",
    "name": "Catálogo",
    "icon": "🗂️"
  },
  {
    "id": "vistas",
    "name": "Vistas",
    "icon": "🔍"
  },
  {
    "id": "integridade",
    "name": "Integridad",
    "icon": "🛡️"
  },
  {
    "id": "seguridade",
    "name": "Seguridad",
    "icon": "🔒"
  },
  {
    "id": "activas",
    "name": "Triggers",
    "icon": "⚡"
  },
  {
    "id": "desenofisico",
    "name": "Diseño Físico",
    "icon": "💾"
  },
  {
    "id": "optimizacion",
    "name": "Optimización",
    "icon": "🚀"
  },
  {
    "id": "recuperacion",
    "name": "Recuperación",
    "icon": "🔄"
  },
  {
    "id": "concorrencia",
    "name": "Concurrencia",
    "icon": "🔀"
  },
  {
    "id": "examen",
    "name": "Exámenes",
    "icon": "📝"
  },

  {
    "id": "examen_2026_enero",
    "name": "Enero 2026",
    "icon": "📝"
  },
  {
    "id": "examen_2023",
    "name": "Examen 2023",
    "icon": "📝"
  },
  {
    "id": "examen_2022_julio_11",
    "name": "11-07-2022",
    "icon": "📝"
  },
  {
    "id": "examen_2022_julio_06",
    "name": "06-07-2022",
    "icon": "📝"
  }

];

const QUESTIONS = [
  {
    "category": "catalogo",
    "type": "vf",
    "question": "El diccionario de datos y el catálogo del sistema son exactamente el mismo concepto en la teoría de bases de datos.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. El diccionario de datos (DD) es un concepto más amplio que puede incluir programas y personas asociadas, mientras que el catálogo es la estructura interna del SGBD relacional (tablas y vistas de sistema) para almacenar metadatos.",
    "trap": true
  },
  {
    "category": "catalogo",
    "type": "multi",
    "question": "Según el estándar SQL, ¿cuál es el nivel máximo de jerarquía donde se puede ejecutar una consulta SQL?",
    "options": [
      "Catálogo",
      "Cluster",
      "Entorno SQL",
      "Esquema"
    ],
    "correct": 1,
    "justification": "Un Cluster es el máximo ámbito sobre el que se puede ejecutar una consulta SQL, por lo que representa la base de datos tal como la ve el usuario.",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "multi",
    "question": "¿Cuál es la ruta correcta para referirse a un elemento único según el estándar SQL?",
    "options": [
      "nombre_cluster.nombre_catalogo.nombre_elemento",
      "nombre_catalogo.nombre_esquema.nombre_elemento",
      "nombre_esquema.nombre_tabla.nombre_columna",
      "nombre_entorno.nombre_cluster.nombre_catalogo"
    ],
    "correct": 1,
    "justification": "La nomenclatura única de los elementos de la BD en el estándar SQL es: nombre_catalogo.nombre_esquema.nombre_elemento.",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "vf",
    "question": "El esquema INFORMATION_SCHEMA expone los datos del catálogo, pero las tablas base se almacenan en un esquema hipotético llamado DEFINITION_SCHEMA.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. El estándar SQL establece que las tablas base se almacenan en DEFINITION_SCHEMA (inaccesible para los usuarios) y se exponen mediante vistas en el INFORMATION_SCHEMA.",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "multi",
    "question": "En Oracle, las vistas del catálogo que comienzan por el prefijo DBA_ pueden ser consultadas por:",
    "options": [
      "Cualquier usuario que crease esos objetos",
      "Solo por usuarios con el rol DBA",
      "Cualquier usuario conectado a la base de datos",
      "Solo por usuarios con el rol CONNECT o RESOURCE"
    ],
    "correct": 1,
    "justification": "Las vistas DBA_<tipo objeto> muestran todos los objetos del sistema pero solo pueden ser consultadas por usuarios con el rol DBA.",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "multi",
    "question": "En Oracle, ¿cuál es la vista del catálogo que devuelve todas las tablas y vistas creadas por el usuario?",
    "options": [
      "TABS (USER_TABLES)",
      "TAB",
      "OBJ",
      "CAT"
    ],
    "correct": 1,
    "justification": "TAB devuelve las tablas y vistas del usuario. TABS solo devuelve las tablas. CAT devuelve tablas, vistas y secuencias.",
    "trap": true
  },
  {
    "category": "catalogo",
    "type": "multi",
    "question": "¿Cuál es el equivalente en PostgreSQL para el concepto de \"Catálogo\" del estándar SQL?",
    "options": [
      "Schema (Esquema)",
      "Cluster (Instalación)",
      "Database (Base de datos)",
      "Tablespace"
    ],
    "correct": 2,
    "justification": "En PostgreSQL, un Catálogo del estándar SQL equivale a una Database (Base de datos).",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "vf",
    "question": "En PostgreSQL, una base de datos solo puede contener un único esquema.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. Dentro de una base de datos de PostgreSQL puede haber varios esquemas, y un usuario puede crear varios esquemas en una misma base de datos.",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "multi",
    "question": "¿Qué vista de INFORMATION_SCHEMA almacena la información de las vistas?",
    "options": [
      "SCHEMATA",
      "VIEWS",
      "TABLES",
      "Ambas TABLES y VIEWS"
    ],
    "correct": 3,
    "justification": "La información de las vistas se almacena tanto en VIEWS como en TABLES (donde las vistas aparecen con table_type = \"VIEW\").",
    "trap": true
  },
  {
    "category": "catalogo",
    "type": "vf",
    "question": "Los usuarios pueden ejecutar directamente sentencias UPDATE o DELETE sobre las tablas del INFORMATION_SCHEMA para modificar los metadatos.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. El catálogo es de solo lectura para los usuarios. Las modificaciones se producen de forma indirecta mediante operaciones DDL (CREATE, ALTER, DROP).",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "multi",
    "question": "En Oracle Multitenant (CDB/PDB), el prefijo de las vistas del catálogo que permite ver objetos de TODAS las PDBs (desde el CDB$ROOT) es:",
    "options": [
      "ALL_",
      "DBA_",
      "CDB_",
      "ROOT_"
    ],
    "correct": 2,
    "justification": "El prefijo CDB_ muestra todos los objetos de todas las PDBs si se consulta desde el container principal, pero requiere privilegios de DBA.",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "multi",
    "question": "En Oracle, ¿cuál de estas consultas NO se utilizaría para consultar elementos propios del usuario?",
    "options": [
      "SELECT * FROM TAB;",
      "SELECT * FROM ALL_TABLES;",
      "SELECT * FROM TABS;",
      "SELECT * FROM CAT;"
    ],
    "correct": 1,
    "justification": "ALL_TABLES (o ALL_*) muestra los objetos a los que el usuario tiene acceso, no solo los que son de su propiedad (USER_*).",
    "trap": true
  },
  {
    "category": "catalogo",
    "type": "vf",
    "question": "El esquema INFORMATION_SCHEMA es autodescriptivo porque contiene información sobre sus propias vistas.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. La vista INFORMATION_SCHEMA.VIEWS contiene las definiciones de las vistas del propio esquema INFORMATION_SCHEMA.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "vf",
    "question": "Una vista estándar (virtual) almacena la consulta y los datos asociados en el espacio de datos para un acceso más rápido.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. Una vista virtual solo almacena su definición (la consulta SELECT) en el catálogo. No almacena los datos; estos siguen en las tablas base.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "multi",
    "question": "Según el estándar SQL-92, ¿cuál de las siguientes cláusulas NO impide que una vista sea actualizable?",
    "options": [
      "Uso de SELECT DISTINCT",
      "Uso de un WHERE simple con una condición de filtro",
      "Uso de la cláusula GROUP BY",
      "Uso de operaciones algebraicas como UNION"
    ],
    "correct": 1,
    "justification": "La cláusula WHERE con un filtro normal permite actualizar la vista. El DISTINCT, GROUP BY o UNION hacen que la vista no sea actualizable.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "multi",
    "question": "¿Qué ocurre cuando ejecutamos \"DROP VIEW v1 RESTRICT\" y existe una vista \"v2\" que depende de \"v1\"?",
    "options": [
      "Se borran ambas vistas (v1 y v2)",
      "Se borra v1 y v2 queda en estado inválido",
      "La sentencia falla y no se borra ninguna vista",
      "Oracle pregunta si queremos borrar las dos"
    ],
    "correct": 2,
    "justification": "La opción RESTRICT (que es la predeterminada en el estándar) hace que el borrado falle si existen vistas dependentes. Para borrarlas se usaría CASCADE.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "vf",
    "question": "Una tupla migratoria es una fila insertada o actualizada a través de una vista que deja de cumplir las condiciones de la vista y \"desaparece\" de ella.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. Las tuplas migratorias desaparecen de la vista al no cumplir su WHERE, aunque sí se insertan/actualizan en la tabla base.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "multi",
    "question": "¿Cómo podemos evitar que se produzcan tuplas migratorias en una vista actualizable?",
    "options": [
      "Añadiendo la cláusula WITH NO MIGRATION a la definición",
      "Añadiendo la cláusula WITH CHECK OPTION a la definición",
      "Las tuplas migratorias no se pueden evitar",
      "Marcando la vista como WITH READ ONLY"
    ],
    "correct": 1,
    "justification": "WITH CHECK OPTION asegura que cualquier inserción o actualización haga que la nueva fila siga cumpliendo las condiciones del WHERE de la vista.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "multi",
    "question": "¿Qué diferencia hay entre CASCADED y LOCAL CHECK OPTION cuando una vista V2 está definida sobre V1?",
    "options": [
      "LOCAL no comprueba nada, CASCADED comprueba las restricciones de la tabla base.",
      "LOCAL comprueba la condición de V2 y de V1, CASCADED solo la de V2.",
      "LOCAL comprueba solo la condición de V2, CASCADED comprueba las de V2 y V1.",
      "Son idénticas en funcionamiento."
    ],
    "correct": 2,
    "justification": "CASCADED comprueba las condiciones de todas las vistas subyacentes, mientras que LOCAL solo comprueba las condiciones de la vista actual en la que se hace el DML.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "multi",
    "question": "¿Cuando creas una Vista Materializada en Oracle con el modo REFRESH COMPLETE, cómo se actualizan los datos?",
    "options": [
      "Se actualizan incrementalmente usando materialized view logs.",
      "Se borra el contenido y se recrea la vista ejecutando la consulta completa.",
      "Lo hacen los triggers de la tabla base automáticamente.",
      "Los datos nunca se actualizan."
    ],
    "correct": 1,
    "justification": "REFRESH COMPLETE borra los datos y vuelve a ejecutar la consulta desde cero. FAST usa logs incrementales.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "vf",
    "question": "El concepto de \"Query Rewrite\" (Reescritura de consultas) hace que el optimizador utilice vistas materializadas de forma transparente para acelerar consultas equivalentes.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. Si la opción está activa, Oracle puede transformar una consulta para leer de la vista materializada si detecta que el resultado sería el mismo, mejorando el rendimiento.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "vf",
    "question": "En Oracle, usar DROP VIEW marca como inválidas las vistas definidas sobre ella, a diferencia del estándar que utiliza CASCADE para borrarlas.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. Oracle no borra en cascada las vistas dependientes, simplemente las marca como INVALID.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "multi",
    "question": "¿Cuál es el comportamiento predeterminado en Oracle al crear una Vista Materializada (BUILD)?",
    "options": [
      "BUILD DEFERRED",
      "BUILD IMMEDIATE",
      "ON PREBUILT TABLE",
      "BUILD NEVER"
    ],
    "correct": 1,
    "justification": "Por defecto, las vistas materializadas se crean con BUILD IMMEDIATE, es decir, los datos se extraen y se guardan en el disco en el momento de la creación.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "multi",
    "question": "En Oracle, si tienes una vista definida sobre un join de dos tablas, ¿puedes actualizarla?",
    "options": [
      "No, las vistas con joins nunca se pueden actualizar.",
      "Sí, cualquier columna de las dos tablas.",
      "Sí, pero solo los atributos de la tabla preservada por clave.",
      "Sí, pero solo mediante comandos PL/SQL."
    ],
    "correct": 2,
    "justification": "Oracle extiende el estándar permitiendo actualizar vistas con join, pero solo las columnas de la tabla preservada por clave.",
    "trap": true
  },
  {
    "category": "integridade",
    "type": "multi",
    "question": "¿Qué diferencia hay entre las restricciones UNIQUE y PRIMARY KEY?",
    "options": [
      "UNIQUE solo se puede aplicar a un atributo, PRIMARY KEY a varios.",
      "UNIQUE permite valores nulos (según el SGBD), PRIMARY KEY nunca permite nulos ni duplicados.",
      "No hay ninguna diferencia, son sinónimos en SQL.",
      "PRIMARY KEY no genera un índice, UNIQUE sí."
    ],
    "correct": 1,
    "justification": "La PRIMARY KEY requiere que los atributos no sean nulos. UNIQUE puede permitir valores nulos (Oracle y PostgreSQL admiten varios nulos, SQL Server solo uno).",
    "trap": false
  },
  {
    "category": "integridade",
    "type": "multi",
    "question": "¿Cómo reacciona una clave foránea (sin acción referencial especificada) ante un DELETE en la tabla padre cuando la hija tiene registros vinculados?",
    "options": [
      "Borra los registros de la tabla hija (CASCADE).",
      "Pone los registros de la tabla hija a nulo (SET NULL).",
      "Da un error y aborta el borrado en la tabla padre (NO ACTION / RESTRICT).",
      "Ignora el borrado pero no muestra error."
    ],
    "correct": 2,
    "justification": "La acción referencial por defecto es NO ACTION (o RESTRICT dependiendo del momento de validación), que bloquea el borrado si hay registros vinculados.",
    "trap": false
  },
  {
    "category": "integridade",
    "type": "multi",
    "question": "Para una clave foránea compuesta con MATCH PARTIAL y los valores (NULL, 31-12-1999). La tabla padre NO tiene ningún registro con 31-12-1999. ¿Se validaría la restrición?",
    "options": [
      "Sí, porque uno de los campos es NULL.",
      "No, porque el campo que no es nulo no existe en la tabla referenciada.",
      "Sí, las restricciones MATCH solo evalúan campos que no son NULL ignorando si existen.",
      "No, porque la tabla padre no admite nulos en la PK."
    ],
    "correct": 1,
    "justification": "Con MATCH PARTIAL, los campos no nulos (31-12-1999) DEBEN existir en la clave candidata correspondiente. Como no existe, la restrición no se cumple.",
    "trap": true
  },
  {
    "category": "integridade",
    "type": "multi",
    "question": "¿Cuál sería el resultado de evaluar la clave foránea (A, NULL, C) con MATCH FULL?",
    "options": [
      "Válida, porque el NULL la hace válida.",
      "Válida si existe un registro (A, ?, C) en la tabla padre.",
      "Inválida. En MATCH FULL o son todos NULL, o ninguno puede serlo.",
      "Inválida porque MATCH FULL solo evalúa el primer campo."
    ],
    "correct": 2,
    "justification": "MATCH FULL exige que TODOS los campos sean NULL, o NINGUNO sea NULL. Si hay combinación de valores y NULLs, siempre es inválida.",
    "trap": false
  },
  {
    "category": "integridade",
    "type": "vf",
    "question": "La opción DEFERRABLE INITIALLY DEFERRED sirve para aplazar la comprobación de las restricciones de integridad al momento de hacer COMMIT de la transacción.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. En modo aplazado, la comprobación no se hace en la sentencia DML, sino que se espera al momento de confirmación (COMMIT). Es útil para inserciones con dependencias circulares.",
    "trap": false
  },
  {
    "category": "integridade",
    "type": "vf",
    "question": "La restrición de NOT NULL puede definirse tanto a nivel de columna como a nivel de tabla (de fila).",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. La restrición NOT NULL solo se puede especificar a nivel de columna, a diferencia de otras como PRIMARY KEY o CHECK que se pueden definir a nivel de tabla.",
    "trap": true
  },
  {
    "category": "integridade",
    "type": "multi",
    "question": "Un \"ciclo referencial\" con borrado en CASCADA entre la tabla EMP y sí misma (fk_mgr):",
    "options": [
      "Da error al crear la restricción.",
      "Podría hacer que al borrar un jefe supremo se borrara toda la tabla de empleados.",
      "Solo afectaría a un nivel de jerarquía.",
      "Oracle cambia el CASCADE por SET NULL automáticamente."
    ],
    "correct": 1,
    "justification": "El borrado en cascada (CASCADE) es recursivo. Si borras el jefe y tienes CASCADE, se borrarán todos sus subordinados, y luego los subordinados de ellos.",
    "trap": false
  },
  {
    "category": "integridade",
    "type": "multi",
    "question": "¿Qué diferencia fundamental hay entre las acciones referenciales RESTRICT y NO ACTION?",
    "options": [
      "RESTRICT borra en cascada, NO ACTION no hace nada.",
      "RESTRICT no se puede definir en Oracle, NO ACTION sí.",
      "RESTRICT realiza la comprobación inmediatamente en la sentencia, NO ACTION lo hace al terminar la sentencia o aplazado (tras los triggers).",
      "Ninguna, son siempre equivalentes en tiempo de ejecución."
    ],
    "correct": 2,
    "justification": "Aunque ambas bloquean el cambio, RESTRICT se evalúa siempre inmediatamente sin esperar a que termine la sentencia o a eventos aplazados. NO ACTION puede diferirse.",
    "trap": false
  },
  {
    "category": "integridade",
    "type": "multi",
    "question": "En Oracle, si olvidamos el nombre al declarar una PRIMARY KEY, ¿qué hace el sistema?",
    "options": [
      "Da un error de compilación de SQL.",
      "Asigna el nombre del esquema como nombre de la clave.",
      "Asigna un nombre interno del tipo SYS_Cxxxxxxx.",
      "Usa el nombre de la columna + _PK como nombre."
    ],
    "correct": 2,
    "justification": "Si no se indica CONSTRAINT <nombre>, los SGBD como Oracle le asignan nombres genéricos de sistema (ej: SYS_C00123), lo que dificulta su mantenimiento.",
    "trap": false
  },
  {
    "category": "integridade",
    "type": "vf",
    "question": "Si una columna define DEFAULT 10, la restricción SET DEFAULT en la FK pondrá el valor a NULL si no se encuentra.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. La acción SET DEFAULT pondrá los campos de la clave foránea al valor predeterminado especificado para ellos (en este caso, 10).",
    "trap": false
  },
  {
    "category": "seguridade",
    "type": "multi",
    "question": "En el Control de Acceso Obligatorio (MAC) bajo el modelo Bell-LaPadula, ¿qué dice la propiedad \"Estrella (*)\"?",
    "options": [
      "Un sujeto S puede LEER un objeto O si su clase de seguridad es mayor o igual a la de O.",
      "Un sujeto S puede ESCRIBIR un objeto O si su clase de seguridad es menor o igual a la de O.",
      "Un sujeto solo puede escribir en objetos de su misma clase de seguridad.",
      "El usuario administrador tiene acceso irrestricto a todas las clases."
    ],
    "correct": 1,
    "justification": "La propiedad Estrella (*) dicta que S puede escribir en O si Class(S) <= Class(O). Esto evita que información de alto nivel (ej: Top Secret) \"baje\" a niveles inferiores al escribirla en un objeto público.",
    "trap": true
  },
  {
    "category": "seguridade",
    "type": "multi",
    "question": "¿Cuál es la principal diferencia entre WITH GRANT OPTION y WITH ADMIN OPTION?",
    "options": [
      "Son lo mismo, pero GRANT OPTION se usa en Oracle y ADMIN OPTION en SQL estándar.",
      "GRANT OPTION se aplica a privilegios sobre objetos y ADMIN OPTION a roles/privilegios de sistema.",
      "ADMIN OPTION permite revocar los privilegios a otros usuarios, GRANT OPTION no.",
      "GRANT OPTION se puede revocar de forma aislada, ADMIN OPTION no."
    ],
    "correct": 1,
    "justification": "WITH GRANT OPTION se utiliza con privilegios a nivel de objeto. WITH ADMIN OPTION se utiliza al conceder roles o privilegios del sistema.",
    "trap": false
  },
  {
    "category": "seguridade",
    "type": "multi",
    "question": "U1 concede SELECT sobre T a U2 WITH GRANT OPTION. U2 lo concede a U3. Si U1 ejecuta \"REVOKE SELECT ON T FROM U2 CASCADE\", ¿qué ocurre?",
    "options": [
      "U2 pierde el privilegio, pero U3 lo conserva porque lo recibió de U2.",
      "U2 y U3 pierden el privilegio, ya que se revoca toda la cadena de concesión.",
      "La sentencia falla porque U1 no se la concedió a U3 directamente.",
      "Oracle pregunta si se desea revocar también a U3."
    ],
    "correct": 1,
    "justification": "Con la opción CASCADE, el SGBD recorre las líneas de concesión y revoca los privilegios de todos los usuarios que los obtuvieran a partir del usuario al que se le revoca (U2 y por tanto U3).",
    "trap": false
  },
  {
    "category": "seguridade",
    "type": "vf",
    "question": "En Oracle, si olvidamos la cláusula CASCADE al hacer REVOKE de un privilegio sobre un objeto, el comportamiento predeterminado es rechazar la sentencia (RESTRICT).",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. Oracle no implementa las cláusulas CASCADE ni RESTRICT en la sentencia REVOKE para objetos. Su comportamiento predeterminado y único es siempre borrar las cadenas de concesión en cascada.",
    "trap": true
  },
  {
    "category": "seguridade",
    "type": "vf",
    "question": "En Oracle, retirar (REVOKE) un rol a un usuario hace que el usuario pierda los privilegios de ese rol de forma inmediata en su sesión actual.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. Si se le hace REVOKE del rol a un usuario, su sesión actual no pierde los privilegios hasta que reconecte. No obstante, si se borra el rol (DROP ROLE), sí se pierden los privilegios de forma inmediata.",
    "trap": true
  },
  {
    "category": "seguridade",
    "type": "multi",
    "question": "¿Cuál de las siguientes técnicas es la mejor solución en una BD relacional para restringir el acceso de forma horizontal (solo algunas filas) a un usuario?",
    "options": [
      "Hacer GRANT SELECT(filas) ON tabla TO usuario.",
      "Usar un trigger BEFORE SELECT para ocultar los datos.",
      "Crear una vista con el WHERE adecuado y dar permisos solo sobre la vista.",
      "Definir un rol que contenga las filas específicas."
    ],
    "correct": 2,
    "justification": "No se pueden dar permisos sobre filas específicas (no existe GRANT sobre filas). La solución es crear una vista con la selección de filas y conceder el permiso sobre la vista.",
    "trap": false
  },
  {
    "category": "seguridade",
    "type": "vf",
    "question": "La pseudo-cuenta PUBLIC en SQL se utiliza para referenciar a la totalidad de los AuthIDs actuales y futuros de la Base de Datos.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. Hacer GRANT a PUBLIC otorga ese privilegio a cualquier usuario que exista o se cree en el futuro en la BD.",
    "trap": false
  },
  {
    "category": "seguridade",
    "type": "multi",
    "question": "¿Cuándo se produce una inyección SQL?",
    "options": [
      "Cuando el servidor de base de datos se satura por excesivas peticiones de conexión.",
      "Cuando no se sanitiza la entrada del usuario, permitiéndole alterar la estructura o función de la consulta.",
      "Cuando un trigger modifica las sentencias del usuario sin su conocimiento.",
      "Cuando un usuario con el rol DBA se loguea de forma remota sin cifrado."
    ],
    "correct": 1,
    "justification": "La inyección SQL es un fallo de seguridad que ocurre cuando el programa no filtra las entradas y el atacante puede inyectar comandos (ej: '; DROP TABLE...') dentro de la consulta SQL. La solución ideal es el uso de consultas parametrizadas.",
    "trap": false
  },
  {
    "category": "seguridade",
    "type": "multi",
    "question": "Dentro de la auditoría en Oracle, ¿para qué sirve el paquete DBMS_FGA (Fine Grained Auditing)?",
    "options": [
      "Para registrar inicios de sesión fallidos de todos los usuarios.",
      "Para auditar comandos DDL como CREATE y DROP.",
      "Para auditar accesos y condiciones a nivel de filas y columnas específicas, incluyendo SELECTs.",
      "Para realizar copias de seguridad incrementales automáticas."
    ],
    "correct": 2,
    "justification": "FGA permite una auditoría de gran finura. Por ejemplo, registrar cuando se accede a una columna específica (SAL) de una fila específica (DEPTNO=30), todo ello mediante políticas.",
    "trap": false
  },
  {
    "category": "seguridade",
    "type": "vf",
    "question": "Un trigger estándar del tipo \"AFTER SELECT\" se puede usar para auditar cuando un usuario consulta los datos.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. El estándar SQL no contempla eventos asociados a la consulta (SELECT). Para auditar lecturas, se suelen emplear herramientas específicas del SGBD como la auditoría FGA de Oracle.",
    "trap": true
  },
  {
    "category": "seguridade",
    "type": "multi",
    "question": "En Oracle, si U2 concede un ROL a U3, y después U1 le revoca el ROL a U2. ¿Qué le ocurre a U3?",
    "options": [
      "U3 pierde el rol automáticamente, igual que con los privilegios de objetos.",
      "U3 mantiene el rol, porque Oracle no revoca en cascada (cascade) los roles, ni hay opción para ello.",
      "La sentencia REVOKE de U1 falla porque U2 ya lo concedió a un tercero.",
      "U3 pasa a ser propietario del rol."
    ],
    "correct": 1,
    "justification": "A diferencia de los privilegios de objetos (que Oracle revoca en cascada por defecto), cuando se revoca un rol o privilegio del sistema con un REVOKE explícito, la revocación NO ocurre en cascada a los concesionarios terceros.",
    "trap": true
  },
  {
    "category": "activas",
    "type": "multi",
    "question": "En el paradigma ECA de las BD activas, ¿a qué corresponde el acrónimo?",
    "options": [
      "Estado, Condición, Acción",
      "Evento, Comando, Alteración",
      "Evento, Condición, Acción",
      "Entidad, Comprobación, Evaluación"
    ],
    "correct": 2,
    "justification": "ECA: Evento (lo que dispara el trigger, ej: INSERT), Condición (la cláusula WHEN), y Acción (el código o bloque PL/SQL que se ejecuta).",
    "trap": false
  },
  {
    "category": "activas",
    "type": "vf",
    "question": "Un trigger puede ayudarnos a sortear la limitación de los SGBD que no implementan las restricciones ASSERTION del estándar SQL.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. Como ningún SGBD soporta las ASSERTIONS, las comprobaciones de estado que involucran muchas filas o tablas se implementan con triggers a nivel de sentencia.",
    "trap": false
  },
  {
    "category": "activas",
    "type": "multi",
    "question": "¿Cuál es la diferencia fundamental en granularidad entre FOR EACH STATEMENT y FOR EACH ROW?",
    "options": [
      "ROW solo sirve para INSERT, STATEMENT para los demás.",
      "ROW se ejecuta una vez por cada fila afectada por el evento, STATEMENT se ejecuta solo una vez para toda la sentencia DML.",
      "STATEMENT es obligatorio en Oracle, ROW es la opción estándar ISO.",
      "No hay diferencia, son sinónimos."
    ],
    "correct": 1,
    "justification": "FOR EACH ROW itera por las filas afectadas, permitiendo acceder a NEW y OLD. FOR EACH STATEMENT se dispara solo una vez por sentencia, sin importar cuántas filas modificase (aunque fuesen 0).",
    "trap": false
  },
  {
    "category": "activas",
    "type": "multi",
    "question": "En un trigger FOR EACH ROW en Oracle ante un UPDATE, ¿cuál de las siguientes afirmaciones sobre las variables de transición es correcta?",
    "options": [
      ":NEW se puede leer y modificar en todos los triggers.",
      ":OLD y :NEW se pueden leer; :NEW se puede modificar si el trigger es BEFORE; :OLD es siempre de solo lectura.",
      ":OLD se puede modificar, pero solo en triggers AFTER.",
      "Si el evento es INSERT, :OLD contiene el valor de la clave primaria."
    ],
    "correct": 1,
    "justification": "La variable :OLD representa la fila original y no se puede alterar. La variable :NEW se puede modificar solo en los triggers BEFORE (por ejemplo, para cambiar un valor antes de que se guarde en la BD). En inserts, :OLD es nulo.",
    "trap": false
  },
  {
    "category": "activas",
    "type": "multi",
    "question": "¿Qué significa el error ORA-04091 \"la tabla [...] está mutando\" en Oracle?",
    "options": [
      "El trigger está en un bucle infinito de llamadas a sí mismo.",
      "El trigger intentó hacer la acción \"mutate table\" no permitida para usuarios rasos.",
      "En un trigger a nivel de fila se intentó leer o modificar la misma tabla sobre la que está actuando el evento disparador.",
      "Se intentó usar :NEW en un trigger de DELETE."
    ],
    "correct": 2,
    "justification": "Oracle genera la excepción de tabla mutante cuando, desde un trigger FOR EACH ROW, se lanza una consulta (SELECT) o modificación (DML) contra la misma tabla subyacente que está en medio del proceso de actualización.",
    "trap": false
  },
  {
    "category": "activas",
    "type": "multi",
    "question": "¿Para qué sirve un trigger INSTEAD OF?",
    "options": [
      "Para evitar que un usuario ejecute cualquier instrucción DML.",
      "Para sustituir los valores de las columnas sin que el usuario tenga permisos.",
      "Principalmente para hacer actualizables vistas complejas (ej: con GROUP BY o JOIN) realizando acciones explícitas de actualización de las tablas base en lugar del DML contra la vista.",
      "Para cancelar una operación después de que ya fuese aplicada."
    ],
    "correct": 2,
    "justification": "Un trigger INSTEAD OF intercepta la instrucción DML sobre la vista y ejecuta el bloque en su lugar (no se aplica la acción original en la vista). Esto se suele emplear para propagar los datos a las tablas base correctamente.",
    "trap": false
  },
  {
    "category": "activas",
    "type": "vf",
    "question": "La cláusula WHEN en un trigger permite utilizar consultas SQL completas (subconsultas) como condición en el estándar y en Oracle.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. Ni el estándar ni Oracle permiten subconsultas en la cláusula WHEN de un trigger. La condición en WHEN debe ser una expresión sencilla (habitualmente empleando NEW u OLD). Si se precisa una subconsulta, se puede usar IF-THEN en el cuerpo de la acción.",
    "trap": true
  },
  {
    "category": "activas",
    "type": "multi",
    "question": "En un trigger de Oracle que reacciona a \"INSERT OR UPDATE OR DELETE\", ¿cómo sabe el código PL/SQL cuál fue la acción original?",
    "options": [
      "Revisando el valor del campo \"EVENT_TYPE\" en el catálogo.",
      "Mediante el uso de variables bind como :EVENT.",
      "Empleando los predicados booleanos condicionales INSERTING, UPDATING y DELETING.",
      "Oracle no lo permite, hay que escribir tres triggers separados."
    ],
    "correct": 2,
    "justification": "Oracle PL/SQL provee de las funciones INSERTING, UPDATING y DELETING para que, dentro de la Acción del trigger, se pueda derivar por qué caso en concreto se disparó la ejecución.",
    "trap": false
  },
  {
    "category": "activas",
    "type": "vf",
    "question": "En el SQL Estándar, es posible utilizar la variable NEW TABLE en un trigger a nivel de sentencia (FOR EACH STATEMENT) para referenciar la tabla generada con todos los nuevos valores del comando UPDATE.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. El estándar define \"OLD TABLE\" y \"NEW TABLE\" para los triggers a nivel de sentencia, que contienen las imágenes \"antes\" y \"después\" del conjunto de filas afectadas (Oracle no soporta esta funcionalidad).",
    "trap": false
  },
  {
    "category": "activas",
    "type": "multi",
    "question": "Tenemos una vista V1 basada en las tablas T1 y T2 con JOIN y un trigger INSTEAD OF definido en V1. ¿Qué ocurre si un usuario hace un INSERT en V1?",
    "options": [
      "Los datos siempre van a parar a T1 y T2 automáticamente sin necesidad de código en el trigger.",
      "Se ejecuta el código PL/SQL del trigger, y dependerá de su lógica hacer los inserts oportunos en T1 y/o T2.",
      "El INSERT fallará porque INSTEAD OF solo sirve para DELETE y UPDATE.",
      "El SGBD insertará en T1 pero el trigger tendrá que procesar T2."
    ],
    "correct": 1,
    "justification": "En un trigger INSTEAD OF, la acción que iba a hacer el usuario se descarta y se le pasa la responsabilidad íntegra al código del trigger.",
    "trap": false
  },
  {
    "category": "desenofisico",
    "type": "multi",
    "question": "Según la arquitectura ANSI/SPARC, ¿qué tipo de independencia se da entre el esquema conceptual y el esquema físico?",
    "options": [
      "Independencia lógica",
      "Independencia de hardware",
      "Independencia física",
      "Independencia relacional"
    ],
    "correct": 2,
    "justification": "La independencia física es la capacidad de modificar el esquema físico (organización interna, ficheros) sin tener que alterar el esquema conceptual (tablas, restricciones).",
    "trap": false
  },
  {
    "category": "desenofisico",
    "type": "multi",
    "question": "En Oracle, ¿cuál es la relación correcta entre las estructuras de almacenamiento físico y lógico?",
    "options": [
      "Un bloque contiene varias extensiones, y un segmento contiene varios bloques.",
      "Un tablespace está formado por varios ficheros de datos, y un segmento es un conjunto de extensiones.",
      "Una extensión contiene varios segmentos contiguos.",
      "Un segmento debe estar almacenado siempre en un único fichero físico."
    ],
    "correct": 1,
    "justification": "Un tablespace (lógico) mapea a varios datafiles (físico). Un segmento (objeto) se divide en extensiones (grupos de bloques contiguos en un fichero). Un segmento puede abarcar varios ficheros dentro del mismo tablespace.",
    "trap": false
  },
  {
    "category": "desenofisico",
    "type": "multi",
    "question": "¿Cuál es la organización de almacenamiento más común y predeterminada para una tabla (donde las inserciones son eficientes y las filas no están ordenadas)?",
    "options": [
      "Tabla Hash (Hash Table)",
      "Tabla B-tree",
      "Tabla apilada (Heap Table)",
      "Cluster"
    ],
    "correct": 2,
    "justification": "Una tabla \"heap\" (apilada) almacena filas en cualquier bloque donde haya espacio disponible, sin seguir ningún orden.",
    "trap": false
  },
  {
    "category": "desenofisico",
    "type": "multi",
    "question": "En Oracle, ¿qué tablespace se emplea para almacenar los registros de deshacer necesarios para rollbacks y consistencia de lectura?",
    "options": [
      "SYSTEM",
      "SYSAUX",
      "UNDOTBS1",
      "USERS"
    ],
    "correct": 2,
    "justification": "UNDOTBS1 es el tablespace de Undo, utilizado para guardar el estado previo de los datos modificados por las transacciones sin confirmar.",
    "trap": false
  },
  {
    "category": "desenofisico",
    "type": "vf",
    "question": "La selectividad de una consulta es directamente proporcional al porcentaje de filas que devuelve (a más selectividad, más filas devuelve).",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. La selectividad es inversamente proporcional. Una consulta con una selectividad muy alta es aquella que recupera muy pocas filas (ej. una fila de millones).",
    "trap": true
  },
  {
    "category": "desenofisico",
    "type": "multi",
    "question": "¿Qué característica define a un árbol B+ en la mayoría de SGBD?",
    "options": [
      "Es un árbol no balanceado orientado a memoria RAM.",
      "Los nodos hoja contienen todas las claves de indexación, y están enlazados entre sí para facilitar recorridos.",
      "La clave primaria debe ir siempre en la raíz.",
      "No se permiten duplicados en ningún nodo del árbol."
    ],
    "correct": 1,
    "justification": "En el árbol B+, todos los valores de la clave están en los nodos hoja (a veces repetidos en los intermedios para navegación) y las hojas están enlazadas para poder iterar en orden fácilmente.",
    "trap": false
  },
  {
    "category": "desenofisico",
    "type": "multi",
    "question": "¿Para qué sirve un índice REVERSE en Oracle?",
    "options": [
      "Para permitir búsquedas por rango de forma más eficiente.",
      "Para darle la vuelta al árbol y que la raíz esté abajo.",
      "Para indexar atributos textuales de derecha a izquierda.",
      "Para evitar contención sobre los nodos hoja al insertar claves secuenciales (ej. autoincrementales)."
    ],
    "correct": 3,
    "justification": "Al invertir los bytes de la clave, los valores sucesivos (ej: 101, 102) acaban distribuidos por nodos hoja distantes, evitando el \"cuello de botella\" de múltiples transacciones escribiendo en el mismo bloque físico simultáneamente. No sirve para búsquedas por rango.",
    "trap": false
  },
  {
    "category": "desenofisico",
    "type": "multi",
    "question": "¿Cuándo es muy recomendable utilizar un índice BITMAP en Oracle?",
    "options": [
      "Para claves primarias muy consultadas en entornos OLTP.",
      "En entornos OLAP para atributos de baja cardinalidad (ej: sexo, estado) en consultas con múltiples AND/OR.",
      "En tablas con inserciones y borrados muy frecuentes.",
      "Para sustituir los índices B+ en tablas con miles de millones de diferentes registros."
    ],
    "correct": 1,
    "justification": "El índice bitmap es ideal para atributos con pocos valores diferentes (baja cardinalidad) donde se combinan múltiples condiciones mediante operaciones a nivel de bit. Padecen mucha contención en DML (OLTP).",
    "trap": false
  },
  {
    "category": "desenofisico",
    "type": "vf",
    "question": "Oracle indexa automáticamente las filas donde el valor de la clave del índice es NULL.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. Oracle no indexa las entradas nulas (si la clave completa es NULL), a diferencia de PostgreSQL, que sí indexa los NULLs.",
    "trap": false
  },
  {
    "category": "desenofisico",
    "type": "multi",
    "question": "En el diseño físico, ¿cuál es el objetivo de un CLUSTER Hash en Oracle?",
    "options": [
      "Replicar los datos en varios nodos físicos para disponibilidad.",
      "Guardar tablas particionadas en diferentes tablespaces.",
      "Sustituir la búsqueda de árbol B+ aplicando una función Hash para encontrar el bloque de datos correspondiente, ideal para \"lookup tables\" con un acceso directo rápido.",
      "Almacenar el log de transacciones de forma compacta."
    ],
    "correct": 2,
    "justification": "En un Hash Cluster las filas se almacenan dependiendo del valor de la función hash sobre la clave de cluster, ahorrando el acceso extra a disco que requeriría un índice.",
    "trap": false
  },
  {
    "category": "desenofisico",
    "type": "multi",
    "question": "Una tabla IOT (Index-Organized Table) en Oracle se caracteriza por:",
    "options": [
      "Almacenar el índice en un fichero de memoria temporal.",
      "Almacenar la tabla misma en los nodos hoja del árbol B+, junto con la clave primaria, ahorrando el espacio del índice separado y evitando el doble acceso a disco.",
      "Ser una tabla agrupada con el objetivo de optimizar únicamente los full table scans.",
      "Requerir siempre un particionado hash adjunto."
    ],
    "correct": 1,
    "justification": "En una IOT, los propios datos de la tabla \"viven\" en las hojas del índice primario B+, no hay ROWIDs, lo que acelera la búsqueda por clave primaria al ahorrar el salto del índice al heap.",
    "trap": false
  },
  {
    "category": "desenofisico",
    "type": "multi",
    "question": "¿Cuál es una ventaja principal de particionar una tabla muy grande?",
    "options": [
      "Elimina la necesidad de hacer copias de seguridad (backups).",
      "Desaparecen los bloqueos a nivel de fila durante las modificaciones.",
      "Permite descartar particiones enteras (\"partition pruning\") en la ejecución de la consulta si la cláusula WHERE coincide con la clave de particionado, lo que acelera drásticamente las lecturas.",
      "Aumenta automáticamente el nivel de normalización de la base de datos hasta la 3FN."
    ],
    "correct": 2,
    "justification": "La eliminación (pruning) de particiones permite ignorar fragmentos de la tabla masiva que sabemos de antemano que no contienen los datos demandados.",
    "trap": false
  },
  {
    "category": "optimizacion",
    "type": "multi",
    "question": "La regla heurística \"Empujar las selecciones\" en la optimización algebraica se refiere a:",
    "options": [
      "Transformar todas las proyecciones en selecciones.",
      "Hacer las selecciones lo antes posible en el árbol de la consulta (bajarlas a las hojas) para reducir el volumen de datos procesado por uniones posteriores.",
      "Colocar las selecciones debajo de las agregaciones para obtener resultados nulos.",
      "Agrupar los Theta-Joins y quitarlos del plan de ejecución."
    ],
    "correct": 1,
    "justification": "Aplicar la selección tempranísimo reduce las tuplas a cruzar en los pesados productos cartesianos o joins (Regla 1: realizar selecciones lo antes posible).",
    "trap": false
  },
  {
    "category": "optimizacion",
    "type": "multi",
    "question": "Según las equivalencias en álgebra relacional, ¿cuál de estas afirmaciones es CORRECTA?",
    "options": [
      "La selección conjuntiva (A AND B) no se puede descomponer en cascada.",
      "La unión (U) y la intersección (∩) son conmutativas, pero la diferencia (-) NO.",
      "La selección es distributiva sobre la diferencia, pero NO sobre la unión.",
      "El orden de las proyecciones encadenadas altera el resultado final irremediablemente."
    ],
    "correct": 1,
    "justification": "Regla 10: R U S = S U R y R ∩ S = S ∩ R, pero R - S no es lo mismo que S - R.",
    "trap": false
  },
  {
    "category": "optimizacion",
    "type": "multi",
    "question": "Calcule el coste (en bloques de E/S) de un Block Nested Loop Join entre R y S en el peor caso (memoria mínima). R tiene bR bloques y S tiene bS bloques.",
    "options": [
      "bR + (bR * bS)",
      "bR + bS",
      "bR + (nR * bS)",
      "bR + bS * log(bR)"
    ],
    "correct": 0,
    "justification": "En el peor de los casos solo cabe un bloque de cada tabla en memoria. Se lee la tabla externa (R, bR bloques), y por cada bloque leído de R hay que escanear S enteros (bR * bS). El total es bR + (bR * bS). Si fuese un simple Nested Loop, sería bR + (nR * bS).",
    "trap": false
  },
  {
    "category": "optimizacion",
    "type": "multi",
    "question": "¿Qué algoritmo de Join debe utilizarse obligatoriamente (en su versión básica) cuando no hay condición de igualdad (ej: T1.id < T2.id)?",
    "options": [
      "Hash Join",
      "Nested Loop Join (bucles anidados)",
      "Sort-Merge Join",
      "Index-Only Scan"
    ],
    "correct": 1,
    "justification": "Tanto Sort-Merge como Hash Join requieren una condición de equijoin (=). Para theta-joins con desigualdades, la única estrategia general disponible es Nested Loops.",
    "trap": false
  },
  {
    "category": "optimizacion",
    "type": "multi",
    "question": "En el Grace Hash Join, si las dos tablas no caben en memoria:",
    "options": [
      "Se lanza un error de falta de memoria y la consulta se cancela.",
      "Ambas tablas se particionan en disco usando una función Hash, y luego se cargan y se cruzan pares de particiones que sí encajen en la RAM.",
      "Se asume que la primera tabla cabrá y se pasa el resto a paginación de SWAP del Sistema Operativo.",
      "Se pasa a un Sort-Merge join automáticamente."
    ],
    "correct": 1,
    "justification": "En el Grace Hash Join (que se usa cuando las tablas exceden la RAM disponible para la Hash table del In-memory Hash Join), se parte el problema segmentando ambas tablas con la misma función de hash. Cada partición se trata como un in-memory hash join independiente.",
    "trap": false
  },
  {
    "category": "optimizacion",
    "type": "multi",
    "question": "En Oracle, si utilizamos la sentencia EXPLAIN PLAN FOR, la consulta:",
    "options": [
      "Se ejecuta en segundo plano consumiendo el mismo tiempo que de costumbre, pero con los resultados borrados.",
      "No se ejecuta, solo se generará el plan de ejecución estimado, almacenándolo en la PLAN_TABLE.",
      "Produce las filas del resultado con estadísticas exactas anexadas a cada fila.",
      "Devuelve un error si no añadimos /*+ FULL */."
    ],
    "correct": 1,
    "justification": "EXPLAIN PLAN genera el plan de ejecución sin ejecutar la sentencia real, solo se basa en la estimación del Optimizador Basado en Costes (CBO). Mientras que AUTOTRACE o EXPLAIN ANALYZE (en Postgres) sí que pueden ejecutar.",
    "trap": false
  },
  {
    "category": "optimizacion",
    "type": "multi",
    "question": "Al analizar un plan en PostgreSQL, vemos un \"Bitmap Index Scan\" seguido de un \"Bitmap Heap Scan\". ¿Qué indica esto?",
    "options": [
      "La tabla está particionada con índices tipo Oracle BITMAP.",
      "El índice retorna las filas individualmente saltando por disco como en un nested loop, sin ordenar el acceso a disco.",
      "Usa un índice secundario para las búsquedas, recogiendo las entradas que lo cumplen, las ordena por identificador físico (rowid/block ID) en el \"bitmap en memoria\", y después lee de la tabla (heap) ordenadamente para ahorrar E/S.",
      "La consulta es muy pequeña y los índices fueron ignorados."
    ],
    "correct": 2,
    "justification": "Esa es precisamente la estrategia \"Table Access By Index Rowid Batched\" de Oracle, o Bitmap Index/Heap Scan de Postgres: mitigar el problema de los índices secundarios (el ir y venir por disco de manera aleatoria) ordenando las referencias físicas leídas del índice antes de pedírselas a la tabla.",
    "trap": false
  },
  {
    "category": "optimizacion",
    "type": "multi",
    "question": "En un plan de Oracle encontramos el procedimiento \"INDEX SKIP SCAN\". ¿Qué ocurrió probablemente?",
    "options": [
      "Invocamos un índice de clave inversa donde se produce la contención de bloque.",
      "Tenemos un índice compuesto, ej: (A, B), y lanzamos un WHERE sobre B únicamente. Oracle \"saltó\" sobre los distintos valores de A y aplicó la búsqueda del valor de B para cada uno.",
      "El índice estaba marcado como INVISIBLE y Oracle decidió no considerarlo.",
      "El índice comprobó los valores nulos de la columna de la clave."
    ],
    "correct": 1,
    "justification": "INDEX SKIP SCAN se usa en índices compuestos cuando no se proporciona en el predicado la columna que lo lidera (primera en el índice). El motor extrae todos los valores únicos líderes y lanza búsquedas separadas para cada uno con la condición conocida.",
    "trap": false
  },
  {
    "category": "optimizacion",
    "type": "vf",
    "question": "En PostgreSQL, deshabilitar un parámetro como \"enable_seqscan = false\" garantiza al 100% que no se harán escaneos secuenciales (Seq Scan) en ninguna consulta.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. Postgres no tiene forma de garantizar la prohibición absoluta (algunos escaneos solo pueden ser seq scan, por ejemplo la tabla entera sin cláusula where, o las tablas sin índices), pero \"desanima\" al planificador incrementando irrealmente su coste penalizándolo.",
    "trap": true
  },
  {
    "category": "optimizacion",
    "type": "multi",
    "question": "¿Qué diferencia fundamental hay entre los procedimientos \"HASH GROUP BY\" y \"SORT GROUP BY\" de Oracle?",
    "options": [
      "El SORT siempre requiere más memoria RAM que el HASH.",
      "El HASH no ordena los grupos (la salida final es no determinista sin ORDER BY), mientras que el SORT sí presenta la salida ordenada por la columna agrupada.",
      "El HASH agrupa la información sin contar duplicados y el SORT los tiene en cuenta.",
      "El SORT agrupa solo usando un índice B+ mientras que HASH solo sobre índices BITMAP."
    ],
    "correct": 1,
    "justification": "Aunque HASH GROUP BY suele ser más rápido (y es la opción por defecto moderna en Oracle cuando se permite), su salida no viene pre-ordenada como subproducto, a diferencia de SORT GROUP BY.",
    "trap": false
  },
  {
    "category": "recuperacion",
    "type": "multi",
    "question": "¿Qué propiedad de las transacciones (ACID) garantiza principalmente la recuperación ante fallos basada en logs?",
    "options": [
      "Atomicidad",
      "Consistencia",
      "Aislamiento",
      "Durabilidad (Persistencia)"
    ],
    "correct": 3,
    "justification": "La durabilidad garantiza que una vez confirmada la transacción, los cambios persisten ante cualquier fallo, algo que se logra en gran medida volcando los logs a disco (almacenamiento estable).",
    "trap": false
  },
  {
    "category": "recuperacion",
    "type": "multi",
    "question": "Cuando un programa quiere modificar un dato de la base de datos, ¿qué secuencia de operaciones a nivel físico ocurre en el gestor de almacenamiento?",
    "options": [
      "Se ejecuta Write() e inmediatamente se invoca Output() para escribir en el disco.",
      "Input() carga el bloque en RAM (si no lo estaba), Read() lo lee hacia la variable del programa, este la modifica, Write() la traslada al buffer cache, y Output() la volcará a disco en algún momento futuro.",
      "Read() carga el dato desde disco y Write() lo escribe directamente en el disco sin pasar por el buffer cache.",
      "Output() vacía el buffer cache e Input() realiza la escritura del programa."
    ],
    "correct": 1,
    "justification": "Los datos se procesan en la RAM del SGBD (buffer cache). Un Input carga el bloque de disco al buffer. El programa hace Read/Write hacia el buffer. Output vuelca el buffer a disco más tarde, guiado por la estrategia del Gestor de Recuperación.",
    "trap": false
  },
  {
    "category": "recuperacion",
    "type": "multi",
    "question": "¿Qué dos valores debe registrar obligatoriamente un log para transacciones con actualizaciones INMEDIATAS por cada dato modificado?",
    "options": [
      "La marca temporal y el ID de la transacción.",
      "La imagen anterior (para el undo) y la imagen posterior (para el redo).",
      "La imagen posterior y el número de disco.",
      "Solo la imagen anterior, ya que la posterior se está escribiendo directamente en disco."
    ],
    "correct": 1,
    "justification": "En actualizaciones inmediatas se necesita la imagen anterior (old value) por si la transacción aborta y hay que deshacer cambios (undo) que ya estaban en el buffer, y la posterior (new value) por si hay que rehacer (redo).",
    "trap": false
  },
  {
    "category": "recuperacion",
    "type": "vf",
    "question": "En una técnica de recuperación con actualizaciones DIFERIDAS, el log nunca necesita guardar la imagen anterior del dato modificado.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. En las diferidas los cambios no van al buffer de datos hasta el COMMIT. Si aborta antes, no se tocó nada real, así que nunca hay que hacer UNDO, por lo que la imagen anterior no se almacena.",
    "trap": false
  },
  {
    "category": "recuperacion",
    "type": "multi",
    "question": "Durante la recuperación tras un fallo usando CHECKPOINTS, ¿qué transacciones pueden ser ignoradas si no hubo pérdida de almacenamiento no volátil?",
    "options": [
      "Las que estaban activas en el momento de escribir el registro de checkpoint en el log.",
      "Todas las transacciones que se iniciaron después del checkpoint.",
      "Aquellas que terminaron (Commit o Rollback) antes del inicio del checkpoint.",
      "Aquellas que ejecutaron su primera operación justo después del checkpoint."
    ],
    "correct": 2,
    "justification": "Las transacciones terminadas antes del checkpoint ya tuvieron sus bloques de datos volcados a disco con el Output() que fuerza el propio checkpoint, así que sus cambios ya son estables en el disco.",
    "trap": false
  },
  {
    "category": "recuperacion",
    "type": "multi",
    "question": "¿Qué afirma estrictamente el protocolo WAL (Write-Ahead Logging)?",
    "options": [
      "Los datos en el buffer de datos deben volcarse a disco antes del COMMIT.",
      "El buffer de datos debe volcarse a disco antes del buffer de logs.",
      "El buffer de logs correspondiente a la modificación debe volcarse al archivo de log en disco ANTES de que el bloque de datos modificado se vuelque a la BD en disco.",
      "Todo registro de log debe escribirse dos veces en el disco."
    ],
    "correct": 2,
    "justification": "El Write-Ahead Logging dice que la intención/registro del cambio debe sobrevivir en el disco (log) antes de que se sobrescriba el dato real en el disco (datos), garantizando que siempre haya forma de recuperarlo.",
    "trap": false
  },
  {
    "category": "recuperacion",
    "type": "multi",
    "question": "¿Por qué el proceso de hacer commit de una transacción suele ser rápido en Oracle y sistemas semejantes (Estrategia \"Robar\" y \"No forzar\")?",
    "options": [
      "Porque el commit solo implica escribir un bloque en la memoria RAM.",
      "Porque solo exige volcar el buffer de log correspondiente a disco, pero NO exige forzar el volcado de los masivos bloques de datos modificados.",
      "Porque la transacción se escribe en el disco en segundo plano al día siguiente.",
      "Porque no se utilizan logs de ninguna clase hasta el checkpoint."
    ],
    "correct": 1,
    "justification": "El log es secuencial y muy pequeño. Forzarlo es rápido. \"No forzar\" permite que los pesados bloques de datos se vuelquen de forma diferida y asíncrona cuando le convenga al planificador de E/S del sistema operativo.",
    "trap": false
  },
  {
    "category": "recuperacion",
    "type": "multi",
    "question": "¿Cuál es el objetivo principal del archivado de archivos de log (Logs Offline)?",
    "options": [
      "Liberar RAM del servidor.",
      "Guardar un registro permanente, infinito y ordenado de todas las operaciones del sistema desde el último backup, vital para pérdidas de discos (almacenamiento no volátil).",
      "Desfragmentar la base de datos.",
      "Realizar las estadísticas de uso para el optimizador de la base de datos (CBO)."
    ],
    "correct": 1,
    "justification": "Los Online Logs son circulares y se sobrescriben. Para sobrevivir a la pérdida de un disco, hay que coger un backup antiguo y reproducir TODOS los cambios, y para eso se necesitan los Offline Logs (archivados).",
    "trap": false
  },
  {
    "category": "recuperacion",
    "type": "multi",
    "question": "Ante un fallo total con pérdida del disco duro de datos (almacenamiento no volátil), ¿cuál es la secuencia de recuperación?",
    "options": [
      "1. Restaurar archivos de datos del último backup. 2. Aplicar logs offline (y online si sobrevivieron) para hacer roll-forward hasta el punto de fallo.",
      "1. Formatear el log y cargar el backup. La BD arrancará instantáneamente con los datos de la noche anterior.",
      "1. Aplicar logs online sobre el disco dañado y luego restaurar los datos.",
      "1. Reiniciar el sistema operativo, el SGBD recupera todo automáticamente sin backup."
    ],
    "correct": 0,
    "justification": "Cuando se rompe el disco, coges la foto vieja (backup físico) y le reproduces por encima \"la película\" de todo lo que pasó después (Offline + Online Logs) para dejarla en el segundo exacto antes del fallo.",
    "trap": false
  },
  {
    "category": "recuperacion",
    "type": "multi",
    "question": "¿Cuál es la diferencia entre un backup físico (ej: RMAN) y un backup lógico (ej: expdp de Oracle o pg_dump)?",
    "options": [
      "El lógico almacena bits puros y el físico un XML.",
      "El backup lógico solo se puede hacer con la BD parada (en frío).",
      "El backup físico copia los archivos reales de datos; el lógico extrae sentencias SQL (DDL/DML) tomadas por una transacción aislada. El lógico no sirve para aplicar logs por encima.",
      "El backup lógico es más grande y más rápido de restaurar en caso de fallo de disco masivo."
    ],
    "correct": 2,
    "justification": "Las exportaciones (pg_dump) generan código fuente que reconstruye los datos en cualquier otro gestor, pero solo saca la instantánea visible para esa sesión; no permite el empalme con los binary logs posteriores.",
    "trap": false
  },
  {
    "category": "concorrencia",
    "type": "multi",
    "question": "¿Qué problema de concurrencia ocurre cuando dos transacciones leen el mismo dato original y luego ambas lo modifican sobrescribiéndose, sobreviviendo solo el cambio de la última que haga commit?",
    "options": [
      "Lectura Sucia (Dirty Read)",
      "Análisis incoherente",
      "Lectura Fantasma",
      "Actualización Perdida (Lost Update)"
    ],
    "correct": 3,
    "justification": "La actualización perdida se produce cuando dos sesiones inician un Update basado en los valores que leyeron a la vez (ej. un saldo), ignorándose la suma real. Los dos niveles de aislamiento en Oracle lo impiden.",
    "trap": false
  },
  {
    "category": "concorrencia",
    "type": "multi",
    "question": "¿Cuándo ocurre una Lectura Sucia (Dirty Read)?",
    "options": [
      "T1 modifica un dato, T2 lo lee, T1 hace ROLLBACK. T2 trabajó con un dato que nunca existió legalmente.",
      "T1 y T2 leen un dato a la vez y se produce un interbloqueo.",
      "T1 lee todas las filas, y durante su lectura T2 inserta una nueva que aparece en el segundo select.",
      "Cuando dos usuarios sobrescriben la misma tabla al mismo tiempo."
    ],
    "correct": 0,
    "justification": "Se llama dependencia no confirmada. T2 apoya su trabajo en datos que, al hacer T1 rollback, es como si nunca llegasen a ser ciertos. Ocurre en el nivel READ UNCOMMITTED.",
    "trap": false
  },
  {
    "category": "concorrencia",
    "type": "vf",
    "question": "El problema de las \"Filas fantasma\" se refiere al cambio de valores en registros concretos que fueron previamente leídos por la misma transacción.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. Eso es una Lectura No Repetible. Las Filas Fantasma aplican a la inserción/borrado de nuevas filas en un conjunto (ej: COUNT(*)) que cambia mientras T1 vuelve a ejecutar el SELECT.",
    "trap": false
  },
  {
    "category": "concorrencia",
    "type": "multi",
    "question": "¿Cuándo dos planes de ejecución se consideran \"equivalentes por conflictos\"?",
    "options": [
      "Cuando tardan el mismo tiempo en ejecutarse y usan los mismos recursos.",
      "Cuando, para cada par de operaciones en conflicto (de distintas transacciones, mismo dato, por lo menos un write), su orden de ejecución se mantiene intacto en ambos planes.",
      "Cuando ninguna de las transacciones hace escrituras (solo lecturas).",
      "Cuando la suma total de transacciones es la misma."
    ],
    "correct": 1,
    "justification": "El núcleo de la seriabilidad. Si logras desplazar operaciones sin invertir el orden natural de los conflictos (los choques Lectura-Escritura o Escritura-Escritura), los planes son equivalentes de cara al resultado.",
    "trap": false
  },
  {
    "category": "concorrencia",
    "type": "multi",
    "question": "En un grafo de precedencia, la existencia de un ciclo indica que...",
    "options": [
      "La base de datos está pendiente de volcar el log.",
      "Ocurrió un interbloqueo irresoluble (deadlock).",
      "El plan NO es serializable por conflictos, lo que significa que el entrelazado de operaciones produce resultados anómalos imposibles en una ejecución en serie.",
      "El plan es serializable pero muy ineficiente."
    ],
    "correct": 2,
    "justification": "En el grafo de serialización, los ciclos demuestran que T1 pasó antes que T2 en algún dato, pero T2 pasó antes que T1 en otro. Esto destruye la posibilidad de equivalerlo matemáticamente a la ejecución en serie T1->T2 o T2->T1.",
    "trap": false
  },
  {
    "category": "concorrencia",
    "type": "multi",
    "question": "La seriabilidad \"por vistas\" es más amplia que la de \"conflictos\". ¿Cuándo podemos encontrar un plan serializable por vistas que no lo sea por conflictos?",
    "options": [
      "Siempre que exista un rollback en la transacción principal.",
      "Cuando las transacciones son solo de lectura (READ ONLY).",
      "Cuando existe la \"escritura a ciegas\" (blind write, sobrescribir un valor sin leerlo antes).",
      "Es imposible, siempre coinciden al 100% en sistemas SQL puros."
    ],
    "correct": 2,
    "justification": "Cuando una transacción sobrescribe salvajemente un dato sin mirarlo (ej: SET A = 99), las limitaciones matemáticas del conflicto R-W se ignoran, y puede generar planes correctos (vistas) que un analizador de conflictos daría por inválidos.",
    "trap": false
  },
  {
    "category": "concorrencia",
    "type": "multi",
    "question": "¿Cómo funciona el Protocolo de Bloqueo en 2 Fases (2PL)?",
    "options": [
      "Fase 1: Se bloquean todas las tablas completas. Fase 2: Se ejecuta la transacción rápida y se finaliza sin liberar nada hasta el commit.",
      "Fase 1 (Crecimiento): Las transacciones adquieren bloqueos pero nunca los liberan. Fase 2 (Decrecimiento): Comienzan a liberar bloqueos y ya no pueden adquirir ninguno nuevo.",
      "Fase 1: Se intentan adquirir bloqueos en modo No Exclusivo y Fase 2: Se actualizan a Exclusivo obligatoriamente.",
      "Fase 1: Lectura (Dirty Read). Fase 2: Escritura (Commit)."
    ],
    "correct": 1,
    "justification": "En el 2PL únicamente hay 2 etapas vitales: subida y bajada. En cuanto sueltas tu primer bloqueo (por ejemplo, sueltas el de A para coger el de C), estás en la fase de decrecimiento y EL PROTOCOLO PROHÍBE que pidas nuevos bloqueos.",
    "trap": false
  },
  {
    "category": "concorrencia",
    "type": "vf",
    "question": "El protocolo 2PL básico garantiza la ausencia total de interbloqueos (deadlocks).",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. El 2PL genera seriabilidad, pero padece abiertamente de deadlocks (T1 tiene A y quiere B, T2 tiene B y quiere A). Y también padece anulaciones en cascada si no es en las versiones Estricta o Rigurosa.",
    "trap": false
  },
  {
    "category": "concorrencia",
    "type": "multi",
    "question": "¿Qué diferencia el 2PL ESTRICTO del 2PL RIGUROSO?",
    "options": [
      "Estricto no se usa en bases de datos comerciales. Riguroso solo se usa en Oracle.",
      "Estricto retiene TODOS los bloqueos (X y S) hasta el Commit. Riguroso solo retiene los S.",
      "Estricto solo retiene los bloqueos Exclusivos (X) hasta el Commit. Riguroso retiene AMBOS tipos (S y X) hasta el fin de la transacción (Commit/Rollback).",
      "No hay diferencia teórica."
    ],
    "correct": 2,
    "justification": "El estricto permite soltar bloqueos compartidos en la fase de decrecimiento normal, pero secuestra los de escritura hasta el final para evitar anulaciones en cascada y lecturas sucias de datos modificados no confirmados.",
    "trap": false
  },
  {
    "category": "concorrencia",
    "type": "multi",
    "question": "Una técnica preventiva de deadlocks basada en timestamps es la \"Esperar-Morir\" (Wait-Die). T1 es Vieja (M=1) y T2 es Nueva (M=2). Si T2 pide un dato bloqueado por T1, ¿qué pasa?",
    "options": [
      "T2 espera tranquilamente a que T1 acabe.",
      "T2 \"muere\" (aborta) porque es más nueva que quien posee el bloqueo, y luego se reinicia con la misma marca de tiempo.",
      "T2 \"hiere\" a T1, haciendo que la vieja aborte y T2 coja el control.",
      "El sistema detiene a ambas y pide intervención humana."
    ],
    "correct": 1,
    "justification": "En Esperar-Morir: \"Si soy viejo y me lo quita un nuevo, espero. Si soy nuevo y lo tiene un viejo, me suicido por respeto (muero).\" T2 (nueva) pide a T1 (vieja), T2 no se puede permitir esperar al viejo y por lo tanto MUERE.",
    "trap": false
  },
  {
    "category": "concorrencia",
    "type": "multi",
    "question": "El algoritmo de prevención \"Herir-Esperar\" (Wound-Wait). T1 es Vieja (M=1) y T2 es Nueva (M=2). Si T1 pide un dato que está bloqueado por T2, ¿qué ocurre?",
    "options": [
      "T1 muere y cede el espacio a T2.",
      "T1 (vieja) \"hiere\" (aborta forzosamente) a T2 (nueva) y roba su bloqueo. T2 tendrá que reiniciar después.",
      "T1 espera hasta que T2 libere el bloqueo para evitar un aborto injusto.",
      "Se ignora la escritura de la vieja por la regla de Thomas."
    ],
    "correct": 1,
    "justification": "En Herir-Esperar: \"Si soy viejo y lo tiene un nuevo, se lo arranco de las manos (lo hiero). Si soy nuevo y lo tiene un viejo, espero en la cola\".",
    "trap": false
  },
  {
    "category": "concorrencia",
    "type": "multi",
    "question": "En Oracle, ¿qué nivel de aislamiento se ejecuta POR DEFECTO para todas las transacciones y qué problemas previene?",
    "options": [
      "SERIALIZABLE. No previene la actualización perdida pero previene fantasmas.",
      "READ UNCOMMITTED. Es tan rápido que previene interbloqueos.",
      "READ COMMITTED. Evita la lectura sucia y (por los bloqueos implícitos) la actualización perdida, pero permite lecturas no repetibles y filas fantasma.",
      "REPEATABLE READ. Es estrictamente mejor que READ COMMITTED y evita fantasmas a nivel físico."
    ],
    "correct": 2,
    "justification": "Oracle usa siempre READ COMMITTED por defecto. Con MVCC no bloquea en lecturas. Las lecturas son de la última versión confirmada antes del momento del SELECT. Permite fantasmas y read-inconsistencies (no repetibles).",
    "trap": false
  },
  {
    "category": "concorrencia",
    "type": "vf",
    "question": "En Oracle, si una transacción quiere leer un registro (SELECT), no necesita solicitar NINGÚN tipo de bloqueo sobre el dato. Y si otra lo está escribiendo (UPDATE), el SELECT usa la imagen anterior de las tablas UNDO.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. Oracle usa el MVCC (Multiversion Concurrency Control). \"Las lecturas no bloquean las escrituras, y las escrituras no bloquean las lecturas.\" La consistencia se encuentra reconstruyendo bloques basados en el SCN desde el tablespace UNDOTBS1.",
    "trap": false
  },
  {
    "category": "concorrencia",
    "type": "multi",
    "question": "En el paradigma Multiversión (MVCC), cuando $T_i$ quiere leer el dato A, ¿a qué versión de A debe acceder para ser consistente?",
    "options": [
      "Siempre leer la última versión absoluta insertada en la base de datos, sin importar quién la hizo ni si hizo commit.",
      "A la versión que posea la Marca de Escritura (ME) más grande que sea menor o igual a la Marca de la propia transacción $M(T_i)$. Nunca \"lee del futuro\".",
      "A la versión primaria en disco, despreciando las de las otras transacciones en buffer.",
      "Genera un error de lectura si alguien está alterando el campo en el mismo instante."
    ],
    "correct": 1,
    "justification": "T tiene que ver la realidad tal y como quedó congelada en el instante en el que T nació (su marca temporal). Ignora cualquier versión creada en su \"futuro\" relativo ($ME > M(T)$).",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "multi",
    "question": "En la metodología clásica donde las estructuras de los datos residían en el código de los programas, ¿cuál era uno de los principales problemas?",
    "options": [
      "Incompatibilidad de la información al estar diseminada en varios programas y falta de documentación del significado y permisos de los datos.",
      "La imposibilidad de usar lenguajes como COBOL o C.",
      "El SGBD era demasiado lento al leer ficheros planos.",
      "El catálogo no permitía usar SQL."
    ],
    "correct": 0,
    "justification": "Antes del uso de diccionarios y catálogos, los metadatos (como la longitud y el formato de los registros) estaban codificados a mano en los programas (en COBOL, C, etc.), lo que generaba inconsistencias, datos aislados y un mantenimiento horrible.",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "multi",
    "question": "¿Qué diferencia clave existe entre un Diccionario de Datos (DD) y un Catálogo de Sistema?",
    "options": [
      "El Catálogo almacena información adicional como qué programas usan los datos y qué empleados son responsables de ellos, mientras el DD solo contiene las tablas.",
      "El Catálogo solo puede ser leído por el administrador (DBA), mientras el DD es de acceso público obligatorio.",
      "El DD es un concepto más amplio que puede incluir programas, personas y semántica, mientras el Catálogo es la estructura interna estricta (tablas/vistas) mantenida exclusivamente por el SGBD de forma automática.",
      "El DD lo crean los usuarios con un CREATE DICTIONARY, y el Catálogo lo crean los desarrolladores de la BD."
    ],
    "correct": 2,
    "justification": "El Diccionario de Datos es un repositorio externo de conocimiento (muchas veces asociado a software CASE) que aglutina semántica y relaciones corporativas (quién hace qué), mientras que el Catálogo se restringe a los metadatos físicos y lógicos que el SGBD precisa para funcionar (y que gestiona el propio SGBD).",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "vf",
    "question": "El Catálogo del SGBD permite la modificación directa de los datos por parte de los usuarios mediante sentencias UPDATE, INSERT o DELETE para redefinir las tablas de forma rápida.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. El catálogo lo mantiene el SGBD de forma opaca, y se presenta como \"Solo Lectura\" para los usuarios. Los metadatos se alteran únicamente de forma indirecta ejecutando instrucciones DDL (CREATE, DROP, ALTER).",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "multi",
    "question": "Un Diccionario de Datos (DD) puede utilizarse de manera automática para:",
    "options": [
      "Realizar las copias de seguridad a nivel de sistema operativo.",
      "Compilar y empaquetar el código del servidor.",
      "Generar automáticamente la estructura de la base de datos (CREATE TABLE) y la definición de datos en lenguajes de programación (clases Java, POJOs).",
      "Configurar la red del servidor de datos."
    ],
    "correct": 2,
    "justification": "El software de DD o las herramientas CASE basadas en un DD tienen la capacidad de generar los scripts SQL de montaje o el esqueleto para los mapeadores objeto-relacional de Java, C#, etc.",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "multi",
    "question": "¿A qué nivel ANSI/SPARC corresponden los datos almacenados en un Catálogo relacional?",
    "options": [
      "Lógico y Relacional estrictamente.",
      "Solamente al esquema conceptual (tablas).",
      "A los esquemas conceptual (tablas), externo (vistas) y físico (espacios de almacenamiento).",
      "Al nivel físico exclusivamente (índices, sectores de disco)."
    ],
    "correct": 2,
    "justification": "El catálogo recoge todos los niveles: define las vistas (externo), las tablas y claves (conceptual) y los índices y tablespaces (físico).",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "vf",
    "question": "Además de almacenar las estructuras, el catálogo de una BD puede contener información externa a la base de datos, como la definición semántica de los datos (\"para qué sirven\") o descripciones funcionales de los programas que acceden a ellos.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. El catálogo NO contiene información externa; solo lo que precisa estrictamente para gestionar la BD. Es el Diccionario de Datos quien recoge semántica, especificaciones y descripciones de la aplicación.",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "multi",
    "question": "¿Cuál es la estructura jerárquica exacta de objetos en el SQL Estándar, ordenada de menor a mayor amplitud?",
    "options": [
      "Esquema -> Catálogo -> Cluster -> Entorno SQL",
      "Catálogo -> Esquema -> Cluster -> Entorno SQL",
      "Esquema -> Cluster -> Catálogo -> Entorno SQL",
      "Catálogo -> Entorno SQL -> Esquema -> Cluster"
    ],
    "correct": 0,
    "justification": "La jerarquía es: Los Elementos (tablas) se agrupan en Esquemas. Los Esquemas se agrupan en Catálogos. Los Catálogos se agrupan en un Cluster (visión del usuario). Y los Clusters residen en el Entorno SQL (la instancia del SGBD en el servidor).",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "vf",
    "question": "En el estándar SQL, dos esquemas distintos que estén dentro del mismo catálogo pueden tener el mismo nombre.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. Los nombres de los esquemas deben ser únicos e irrepetibles DENTRO del mismo catálogo.",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "multi",
    "question": "Cuando un usuario hace una consulta del tipo \"SELECT column_name, data_type FROM information_schema.columns\", ¿qué concepto de sistema se está demostrando?",
    "options": [
      "La exposición de metadatos de la base de datos a través de vistas públicas estándar del Catálogo SQL.",
      "El uso de herramientas DDL para modificar tablas.",
      "La actualización explícita de las tablas base del sistema.",
      "El procesamiento automático de query rewriting en Oracle."
    ],
    "correct": 0,
    "justification": "El INFORMATION_SCHEMA es la manera en la que el estándar SQL (adoptado por múltiples gestores) expone de forma \"amigable\" (por vistas) los rudimentarios metadatos encriptados almacenados en las entrañas del sistema.",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "multi",
    "question": "Durante la ejecución de \"SELECT * FROM emp WHERE sal + comm > 2000 AND deptno=10\", ¿cómo utiliza el SGBD el catálogo?",
    "options": [
      "Comprueba que la tabla y las columnas existan, verifica permisos de SELECT, determina los tipos de datos exactos para hacer la suma e identifica los índices disponibles.",
      "El SGBD genera una versión nueva de la tabla en el catálogo antes de ejecutar el plan.",
      "Simplemente resuelve el alias \"*\" convirtiéndolo en la clave primaria temporalmente.",
      "Ignora el catálogo ya que se trata de DML y no de DDL."
    ],
    "correct": 0,
    "justification": "El optimizador y analizador semántico del SGBD consulta el catálogo antes de ejecutar nada: comprueba sintaxis contra tablas reales, seguridad (permisos de SELECT sobre EMP), y estrategia física (busca los índices en el catálogo).",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "multi",
    "question": "Hasta la versión 11g, ¿cómo era la correspondencia típica de Oracle respecto al estándar de SQL?",
    "options": [
      "Era una implementación pura, siguiendo Esquema->Catálogo->Cluster paso por paso.",
      "En una instalación había una única base de datos global. Cada usuario era propietario de un único esquema (con el mismo nombre que el usuario). No existían los clusters ni catálogos múltiples independientes del estándar.",
      "No se soportaban esquemas; todo pertenecía al DBA.",
      "Existía un INFORMATION_SCHEMA completo y ningún prefijo DBA_."
    ],
    "correct": 1,
    "justification": "Oracle 11g mantenía la concepción clásica de una única BD monstruosa en la que el usuario era a su vez un esquema de facto. SCOTT es un usuario pero \"SCOTT\" es a la vez el esquema donde yacen sus objetos.",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "multi",
    "question": "En Oracle 12c y posteriores (Arquitectura Multitenant), ¿qué representa la CDB$ROOT?",
    "options": [
      "Es el Root User que equivaldría al root de Linux.",
      "Es un nuevo prefijo para las vistas del catálogo de usuario.",
      "Es el Contenedor Principal (Container Database) a partir del cual cuelgan las Pluggable Databases (PDBs) enchufables.",
      "Es un esquema oculto similar al DEFINITION_SCHEMA."
    ],
    "correct": 2,
    "justification": "La Container DataBase o CDB (con una raíz CDB$ROOT) supone el esqueleto arquitectónico; las distintas PDBs se inyectan en esta infraestructura ofreciendo aislamiento al estilo de múltiples bases de datos en un sistema moderno.",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "multi",
    "question": "Un usuario \"pepe\" quiere ver TODAS las tablas a las que le dieron derecho de lectura (sea dueño o no). ¿Qué vista Oracle debe consultar?",
    "options": [
      "USER_TABLES (TABS)",
      "DBA_TABLES",
      "ALL_TABLES",
      "CDB_TABLES"
    ],
    "correct": 2,
    "justification": "El prefijo ALL_ enumera todos los objetos de la BD a los cuales el usuario que realiza la consulta tiene, cuanto menos, derechos limitados (concedidos por roles o permisos), a diferencia de USER_ que muestra los que creó él mismo.",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "multi",
    "question": "¿Qué diferencia el comando de Postgres \"CREATE SCHEMA bda\" de la creación de esquemas en Oracle clásico?",
    "options": [
      "En Oracle creas un usuario y automáticamente eso representa un esquema; en Postgres se pueden crear múltiples esquemas separados (como carpetas) dentro de una misma Base de Datos (Database) que pertenecen al mismo usuario.",
      "En Postgres el esquema no admite tablas dentro.",
      "En Oracle se permite crear hasta 5 esquemas por usuario.",
      "A nivel funcional son totalmente idénticos en esa sintaxis."
    ],
    "correct": 0,
    "justification": "En Postgres (semejante más al estándar) una BD contiene N esquemas creados explícitamente (`CREATE SCHEMA mai; CREATE SCHEMA bda;`), funcionando como espacios de nombres dentro de la propia BD. Oracle 11 ataba el concepto de Usuario=Esquema=Nombre.",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "vf",
    "question": "En PostgreSQL, un usuario que accede a la Base de Datos \"docencia\" tendrá disponible por defecto un esquema de nombre \"public\" además de cualquier esquema generado con el prefijo \"pg_catalog\".",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. Por defecto, en PostgreSQL cada BD se asocia a un esquema `public` donde caen todos los objetos que no se añaden explícitamente a otro esquema.",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "multi",
    "question": "En Oracle, ¿qué objetos podemos encontrar en el diccionario si consultamos la vista CAT (USER_CATALOG)?",
    "options": [
      "Restricciones, Claves Foráneas y Triggers.",
      "La configuración del hardware del cluster.",
      "Tablas, vistas y secuencias propiedad del usuario.",
      "El registro de usuarios logueados en la base de datos en ese instante."
    ],
    "correct": 2,
    "justification": "CAT muestra específicamente TABLE_NAME y TABLE_TYPE restringidos a TABLE, VIEW, y SEQUENCE (creados por la propia sesión). Es una vista de retrocompatibilidad cómoda.",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "vf",
    "question": "En Oracle, la vista COLS y la vista USER_TAB_COLUMNS muestran exactamente la misma información, refiriéndose a las columnas que pertenecen a las tablas del usuario.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. COLS es un sinónimo público (una forma acortada) de la vista del sistema USER_TAB_COLUMNS.",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "multi",
    "question": "Si intentas ejecutar un SELECT sobre las tablas del DEFINITION_SCHEMA en el SQL Estándar puro, ¿qué ocurriría?",
    "options": [
      "La consulta triunfa si eres administrador.",
      "Saldría un error porque es un conjunto de tablas hipotéticas u ocultas por diseño, siendo inaccesibles por DML desde SQL.",
      "Se borraría la caché de la memoria del sistema.",
      "Devolvería un listado en formato JSON."
    ],
    "correct": 1,
    "justification": "El estándar deja la implementación física libre a cada marca y escuda esas tablas. Por protección y seguridad estructural, exige que no exista manera ni posibilidad de hacer SQL en ellas, exponiéndolas solamente como lectura a través de vistas en INFORMATION_SCHEMA.",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "vf",
    "question": "Un cluster en PostgreSQL es el equivalente exacto al concepto de \"Entorno SQL\" del estándar, representando la totalidad de la instalación (instancia del SGBD).",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. En PostgreSQL, lo que se denomina \"Database Cluster\" es toda la instalación en la máquina que hospeda y sirve al múltiple conjunto de Bases de Datos separadas. En terminología ISO es el \"Entorno\".",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "multi",
    "question": "En el nivel conceptual de ANSI/SPARC, ¿cómo logran las vistas obtener \"independencia lógica\"?",
    "options": [
      "Sustituyendo las estructuras en disco por arrays en memoria RAM.",
      "Cifrando los datos de las tablas base automáticamente.",
      "Actuando como capa de abstracción: si el administrador altera la estructura física de base de una tabla (ej. separar en dos tablas), puede modificar la vista para que reconstruya el formato original, salvando los programas externos.",
      "Ejecutando backups de las consultas SQL en background."
    ],
    "correct": 2,
    "justification": "Esa es la gran virtud de las vistas en la teoría de datos. Los usuarios hacen queries a las vistas. Si un DBA normaliza o mueve una tabla base, reescribe la vista con JOINs y el programador/aplicación end-user ni se entera del cambio subyacente.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "multi",
    "question": "¿Cuáles son los componentes fundamentales estrictos de una vista virtual en el catálogo?",
    "options": [
      "El nombre de la vista, las filas congeladas en disco, y un trigger.",
      "El nombre de la vista, la lista de atributos (columnas), y la sentencia SELECT que obtendrá los datos dinámicamente cuando sea solicitada.",
      "Un índice oculto y un árbol B+.",
      "Un procedimiento PL/SQL y un número de versión."
    ],
    "correct": 1,
    "justification": "La vista virtual es eso: un simple macro textual en el catálogo. Guardas un nombre, la alineación de columnas, y el esqueleto SQL asociado que se desenrollará ante una llamada.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "multi",
    "question": "En la cláusula CREATE VIEW según las reglas rígidas del SQL-92 antiguo, ¿qué directiva estaba terminantemente prohibida dentro del SELECT?",
    "options": [
      "La cláusula WHERE.",
      "El INNER JOIN y los productos cartesianos.",
      "La directiva ORDER BY.",
      "Las funciones COUNT o MAX."
    ],
    "correct": 2,
    "justification": "Hasta SQL:2008 las relaciones o vistas por concepto conjuntista puro carecen de orden. El SQL-92 denegaba imponer directivas ORDER BY en el momento de su creación, obligándote a ordenarlo desde fuera con `SELECT * FROM vista ORDER BY`. Oracle y SQL modernos rompen esta regla.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "vf",
    "question": "Si se omite un atributo que contiene la restricción NOT NULL en la tabla base a la hora de definir las columnas mostradas por la Vista, un intento de hacer INSERT desde la vista triunfará sin fallo insertando valores aleatorios en la Base.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. La inserción a través de la vista se propaga a la tabla base de forma ciega. Si ignoraste la columna, el SGBD intenta ponerle valor NULL por defecto; al chocar frontalmente con la directriz NOT NULL, el DBMS desecha la inserción y da error.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "multi",
    "question": "En cuanto al concepto de tuplas migratorias de salida (outward migration) en vistas actualizables, ocurre cuando:",
    "options": [
      "El SGBD exporta datos a un disco duro remoto.",
      "La actualización o inserción de una fila cumple con los criterios, pero luego otra transacción la borra en cascada.",
      "Un comando UPDATE lanzado en la vista cambia los atributos de una fila rompiendo explícitamente la propia cláusula WHERE de la vista, haciendo que la fila deje de verse en la vista inmediatamente tras la actualización exitosa en la tabla original.",
      "La tabla base altera su nombre y las tablas hija tienen que migrar al nuevo."
    ],
    "correct": 2,
    "justification": "Muy común. Vista \"empleados_vips\" con `salario > 3000`. Haces `UPDATE empleados_vips SET salario = 1000`. El update triunfa en la DB, pero en ese mismo milisegundo la tupla huye o \"migra\" fuera de tu vista porque perdió los requisitos para salir en ella.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "multi",
    "question": "¿Cómo soluciona Oracle el problema del comportamiento CASCADED o LOCAL en la cláusula WITH CHECK OPTION de la creación de Vistas?",
    "options": [
      "Oracle pide específicamente LOCAL para el check y lanza un error DDL en cualquier otro caso.",
      "Aunque ISO lo soporte, en Oracle no tiene sentido; Oracle asume de modo determinista un enfoque siempre CASCADED, imponiendo siempre de forma forzada todas las restricciones heredadas de las vistas inferiores ignorando la sintaxis LOCAL.",
      "Oracle solamente comprueba el check si eres administrador.",
      "Oracle delega eso a los triggers INSTEAD OF y deshabilita cualquier CHECK OPTION nativo."
    ],
    "correct": 1,
    "justification": "Oracle en su documentación aclara que el `WITH CHECK OPTION` clásico se aplica en comportamiento cascada hacia toda la cadena subordinada.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "multi",
    "question": "El comportamiento real ante la ejecución del comando \"ALTER VIEW <nombre_vista> COMPILE;\" es:",
    "options": [
      "Permite pasar del código SQL al código objeto C de la máquina.",
      "Reconstruye la estructura B+ Tree del índice materializado de la vista de modo instantáneo en segundo plano sin detener la ejecución.",
      "Fuerza al sistema a revalidar la sintaxis de la consulta tras detectar una dependencia rota y que provocó la invalidación en el catálogo, pasando su flag de INVALID a VALID de nuevo en el caso de salir victoriosa.",
      "Modifica y altera el bloque SELECT interno mediante texto."
    ],
    "correct": 2,
    "justification": "En Oracle si borras una columna en una tabla y las vistas que referenciaban con `SELECT *` entran en pánico y se marcan como \"INVALID\" por el motor de dependencias. Al restaurar la normalidad de la base, las vistas tienen que ser reensambladas en el analizador léxico compilándolas manual o automáticamente (con COMPILE).",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "multi",
    "question": "¿Qué comportamiento sorprendente ejecuta Oracle al encontrar un UPDATE cuya vista se compone de un INNER JOIN entre 2 tablas distintas?",
    "options": [
      "Da un ORA-01779 explícito negando en redondo toda manipulación por tener tablas asociadas.",
      "Permite modificarla con gracia, pero únicamente para aquellas columnas correspondientes a la \"tabla preservada por clave\", donde se puede identificar fidedignamente a cuál fila corresponde sin riesgo de actualizaciones masivas espurias por redundancia de las claves unidas.",
      "Sustituye el enlace por una función precalculada de subquery a ciegas.",
      "Escribe en cascada las dos al mismo tiempo y se genera un deadlock."
    ],
    "correct": 1,
    "justification": "En las \"Join Views\" actualizables de Oracle se permite hacer INSERT/UPDATE en la vista con la firme condición técnica de que los valores a editar o insertar correspondan a atributos de la \"key-preserved table\" (la tabla N de la relación 1:N). El sistema rastrea el ROWID exacto.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "vf",
    "question": "Según se enseña en el tema de Vistas en Oracle, cualquier uso de expresiones o literales (ej. `sal + 200` o `\"Constante\"`) en el SELECT list hace inviable lanzar comandos UPDATE en esa vista entera, provocando fallos extremos del sistema.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. La belleza de esto en Oracle es que *solo* prohíbe modificar (o insertar en ella explícitamente sin omitirla) la expresión matemática virtual o literal calculado, pero sigue permitiendo alegremente las actualizaciones en las DEMÁS columnas directas y puras de esa misma vista.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "multi",
    "question": "Sobre una \"Materialized View (MV)\" con BUILD DEFERRED y REFRESH FORCE. ¿Cuál es su conducta inicial al invocar CREATE MATERIALIZED VIEW?",
    "options": [
      "Bloquea todo y repopula al instante todos los terabytes de la Base de Datos.",
      "No llena ni almacena los datos aún (DEFERRED), y pospone el primer refresco y la captura al primer instante de sincronización (el primer exec de dbms_mview.refresh). Usará fast si es posible, completo si no (FORCE).",
      "Actúa como una Virtual View normal y solamente materializa en disco la tabla si sobrepasas las cien mil consultas diarias automáticamente.",
      "Cancela el comando si no existen log de transacciones creados previamente con FAST."
    ],
    "correct": 1,
    "justification": "BUILD DEFERRED construye la firma vacía sin perder horas en la materialización (a diferencia de IMMEDIATE). Mientras tanto, FORCE determina que ante el momento del refresh se apueste por estrategia mixta pragmática para la captura de la data.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "multi",
    "question": "¿Qué prerrequisito pesado puede exigir el uso de REFRESH FAST en una Vista Materializada de forma exitosa?",
    "options": [
      "El requerimiento de que se active y persista las Materialized View Logs en las tablas base para empujar de forma asincrónica y microscópica todas las modificaciones en la MV minimizando el gasto de ancho de banda a disco.",
      "Desconectar a todos los usuarios para lograr el lock.",
      "Permisos de EXECUTE en el núcleo del Sistema Operativo Host.",
      "Toda la Base de Datos debe ser congelada en ese instante de tiempo predefinido (START WITH)."
    ],
    "correct": 0,
    "justification": "Para un \"fast refresh\" (refresco rápido o incremental) en el cual solo se propaga un DELTA, se requiere que alguien o algo anote las modificaciones concretas mientras el snapshot no vino a recaudar la chatarra. Esos libritos de notas se denominan MV Logs.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "multi",
    "question": "La directiva \"ON PREBUILT TABLE\" de Vistas Materializadas se utiliza comúnmente para:",
    "options": [
      "Data Warehousing, donde existe la tabla real inmensa precargada y se construye la MV indicándole que comparta y abrace a ese segmento ingente ya existente para que optimice el re-writing sin tener que volver a escribir miles de terabytes a lo largo del disco.",
      "Eliminar las tablas materializadas si caducan por espacio.",
      "Proporcionar un entorno temporal donde la tabla se elimina tras cerrar la consulta y se liberan las referencias ligeras del compilador.",
      "Reconstruir una tabla del log tras ocurrir un desastre en almacenamiento magnético usando los checkpoints de recuperación avanzados."
    ],
    "correct": 0,
    "justification": "En un entorno masivo no tienes tiempo material de volcar las filas a una MV y gastar duplicado de Storage, entonces creas la tabla (o la recuperas por herramientas de importación externas, SQLLoader) y después enganchas la MV a esos bloques explícitos por comodidad del Query Rewriting.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "multi",
    "question": "La optimización Query Rewriting en las vistas materializadas proporciona la posibilidad mágica de que...",
    "options": [
      "Una query muy pobre de PL/SQL se autogenere en un C superior en rendimiento.",
      "Cuando alguien lance un select muy largo sobre EMP y DEPT, el Optimizador Oculto intercepta la jugada, descarta leer de las tablas base y extrae el precalculado a la velocidad de la luz disponible en tu MV escondida, todo de forma totalmente transparente.",
      "Se pueden corregir y arreglar typos en la query escrita desde SQL*Plus gracias a heurísticas de lenguaje basada en regex (expresiones regulares de precompilación).",
      "Las consultas siempre eviten un Full Table Scan sustituyéndolo por Nested Loops de bloque."
    ],
    "correct": 1,
    "justification": "La ventaja suprema en BI o DataWarehousing en Oracle. No tienes ni que cambiar las consultas hechas en el Software final en años. Simplemente habilitas un `ENABLE QUERY REWRITE` en tu vista y las queries pasan por el bypass en la fase CBO si cuadran o encajan estrictamente con la definición de la vista, convirtiendo horas de coste de CPU en milisegundos.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "multi",
    "question": "¿Cualquier consulta que ataque una Vista simple virtual mejora sistemáticamente los índices de ejecución y ahorra tiempo respecto a consultar las dos tablas originales explícitamente con JOIN?",
    "options": [
      "Hasta las BD NoSQL, sí, pero en SQL Relacional se penaliza el tiempo.",
      "Sí, siempre muestran mayor eficiencia en las métricas de AUTOTRACE porque actúan como caché.",
      "Ni ahorra tiempo ni aumenta la eficiencia, en el analizador de Oracle \"se desenreda\" la definición de la vista solapándola junto a la query superior con el fin de recompilar el plan completo como si la vista estuviera expandida en el source code en crudo originalmente.",
      "Solo funciona si la base de datos usa hints de indexación o el usuario emplea un compilador JIT (Just in time execution)."
    ],
    "correct": 2,
    "justification": "El usuario novato tiene la percepción errónea de que la vista \"tarda menos porque el cálculo lo hace la BD\", lo cual no es más que un engaño mental; la Base desenrolla el macro sustituyéndolo y el proceso cuesta literalmente los mismísimos recursos computacionales, con igual plan, coste, buffers, bites que hacerlo a mano (sacando las MViews, obvio).",
    "trap": false
  },
  {
    "category": "integridade",
    "type": "multi",
    "question": "¿A qué nos referimos cuando decimos que un SGBD transaccional asegura la integridad?",
    "options": [
      "Garantiza que los discos duros no fallarán físicamente y perderán datos.",
      "El SGBD asegura que la BD pasará de un estado consistente inicial a otro estado consistente al finalizar la transacción, aunque temporalmente durante su ejecución incumpla alguna regla interna provisional (siempre que haga commit final con las reglas cumplidas).",
      "Significa que los empleados no podrán borrar datos si no tienen permiso de superusuario.",
      "Asegura la encriptación extremo a extremo."
    ],
    "correct": 1,
    "justification": "La integridad asume consistencia. Mientras corre la transacción puedes romper momentáneamente restricciones (ej. aplazadas), pero el gestor jamás hará COMMIT si al finalizar el estado global no recobra la coherencia absoluta.",
    "trap": false
  },
  {
    "category": "integridade",
    "type": "multi",
    "question": "¿En qué fase del proceso global de diseño debemos modelar las reglas y restricciones de integridad?",
    "options": [
      "Someramente en la fase de Modelado Lógico (paso a relacional).",
      "Únicamente en el script SQL final (Fase de Implementación Física).",
      "En TODAS las fases. Identificando obligaciones en el diagrama E-R y en el diccionario de datos (Fase Conceptual), definiendo claves (Fase Lógica), y construyendo triggers y CHECKs (Fase Física).",
      "Solo en la entrevista con los stakeholders y usuarios del sistema."
    ],
    "correct": 2,
    "justification": "La integridad se planifica en todas las etapas. Lo que se documenta en el diccionario en conceptual, luego se convierte en primary keys en el modelo relacional y cristaliza en triggers/constraints en la implementación SQL física.",
    "trap": false
  },
  {
    "category": "integridade",
    "type": "vf",
    "question": "Toda y cualquier restricción impuesta por el dominio del problema en una empresa se puede dibujar y expresar implícitamente de forma gráfica mediante diagramas E-R.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. La cardinalidad y participación se pinta fácil. Pero la restricción \"la fecha de fin de baja debe ser mayor a la fecha de inicio\" o \"el sueldo del jefe debe superar a sus trabajadores\" es imposible de pintar en el E-R y se deja para el Diccionario de Datos y la fase de implementación.",
    "trap": false
  },
  {
    "category": "integridade",
    "type": "multi",
    "question": "¿De qué nivel hablamos cuando declaramos restricciones con la sintaxis `CHECK (ENDDATE > STARTDATE)`?",
    "options": [
      "Nivel de atributo (columna).",
      "Nivel de fila (tabla).",
      "Nivel de base de datos completa.",
      "Nivel de esquema conceptual."
    ],
    "correct": 1,
    "justification": "Por implicar dos atributos (o más) del mismo registro simultáneamente (STARTDATE y ENDDATE), es imperativo que la restricción se evalúe a nivel de fila (table-level constraint) y no a nivel simple de columna.",
    "trap": false
  },
  {
    "category": "integridade",
    "type": "multi",
    "question": "¿Cuál es una de las mayores ventajas prácticas de declarar tus propias restricciones añadiendo la sintaxis `CONSTRAINT <nombre_restriccion>` en SQL?",
    "options": [
      "Hace que el SGBD procese los INSERTS un 15% más rápido debido a la referenciación nominal.",
      "Ofrece mensajes de error legibles cuando ocurre una violación (ej. `El nombre \"ck_venta_positiva\" fue violado`), y permite desactivarla o borrarla simplemente llamándola por el nombre sin tener que hacer ingeniería inversa en el catálogo.",
      "El SGBD genera automáticamente triggers.",
      "Aumenta el almacenamiento de metadatos en caché optimizada."
    ],
    "correct": 1,
    "justification": "Ponerle nombre como \"fk_emp_dept\" ahorra un sufrimiento enorme al depurar un log que diría \"constraint SYS_C00329432 violated\". Además facilita hacer `ALTER TABLE DROP CONSTRAINT fk_emp_dept;`.",
    "trap": false
  },
  {
    "category": "integridade",
    "type": "vf",
    "question": "Una columna con la restricción UNIQUE no acepta valores duplicados de ningún tipo, rechazando también si intentamos insertar múltiples valores NULL.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. Por increíble que parezca, para el estándar SQL los valores NULL son \"desconocidos\". Al comparar NULL = NULL el resultado es UNKNOWN, no TRUE. Por esto, Oracle y Postgres admiten infinitos NULLs en una columna UNIQUE (SQL Server es la rara excepción).",
    "trap": true
  },
  {
    "category": "integridade",
    "type": "multi",
    "question": "Supongamos dos tablas: EMP y LEAVE. La tabla EMP borra en cascada a LEAVE. ¿Qué sucederá si en el borrado en cascada interfiere una tercera tabla con regla RESTRICT?",
    "options": [
      "El sistema salta el RESTRICT y borra todo menos los registros afectados por esa tercera tabla.",
      "Se parte la base de datos en dos esquemas.",
      "El borrado encadenado se paraliza al encontrar el muro del RESTRICT. Fallará la operación completa original y no se borrará ni el EMP padre.",
      "Se ejecuta la acción y se vuelcan los datos en un log de rechazados."
    ],
    "correct": 2,
    "justification": "El modelo relacional es exigente. Las acciones de cascada inician árboles recursivos de borrado. Si una sola de las ramas encuentra un límite `NO ACTION` o `RESTRICT` y los registros no cumplen la regla, toda la transacción principal se revierte (rollback) arrojando un error global.",
    "trap": false
  },
  {
    "category": "integridade",
    "type": "multi",
    "question": "El problema clásico de \"inserción inviable en BD vacía\" surge conocido como Ciclo Referencial. ¿Qué situación lo provoca?",
    "options": [
      "Cuando hacemos una copia de seguridad a media tarde.",
      "Tenemos una tabla T1 con una clave foránea NO NULA hacia T2, y al mismo tiempo T2 tiene una clave foránea NO NULA hacia T1. Nadie puede nacer primero.",
      "Cuando tenemos triggers cíclicos en una única tabla.",
      "Al usar el prefijo SYS_ en las tablas."
    ],
    "correct": 1,
    "justification": "Si el DEPARTAMENTO tiene que tener sí o sí un DIRECTOR (empleado) para insertarse, y el EMPLEADO tiene que tener sí o sí un DEPARTAMENTO al que pertenecer para insertarse, crear la primera fila desde cero se torna en un callejón sin salida de integridad.",
    "trap": false
  },
  {
    "category": "integridade",
    "type": "multi",
    "question": "¿Cómo soluciona SQL el dilema del ciclo referencial con campos NOT NULL?",
    "options": [
      "Borrando el NOT NULL al esquema.",
      "Ignorando los checks por defecto durante dos segundos.",
      "Marcando las restricciones como DEFERRABLE (aplazables). El SGBD permite cargar o insertar los datos con la integridad rota durante la transacción, y solo verifica la validez de ambas tablas al ejecutar de forma simultánea el COMMIT.",
      "A través de índices particionados temporales."
    ],
    "correct": 2,
    "justification": "El salvavidas para un \"huevo y la gallina\" en bases de datos son las restricciones DEFERRABLE. Colocamos el modo en INITIALLY DEFERRED, hacemos todos los inserts \"ilegales\" juntos, y cuando las tablas ya coinciden matemáticamente, aplicamos COMMIT. Al comprobarse el commit, todo cuadra.",
    "trap": false
  },
  {
    "category": "integridade",
    "type": "multi",
    "question": "¿Cuál es el funcionamiento exótico del modo de aplazamiento `INITIALLY IMMEDIATE` si aplicamos la orden `SET CONSTRAINTS ALL DEFERRED` en el inicio de nuestra transacción?",
    "options": [
      "La orden es rechazada porque ya nacen con IMMEDIATE para siempre.",
      "Todas las restricciones de la base de datos borran sus normas.",
      "La restricción, aunque es de tipo comprobación instantánea por defecto, fue inteligentemente definida como DEFERRABLE (aplazable). Por tanto, nuestra sesión actual tiene poder para posponerla y comprobará el error al hacer el commit.",
      "Genera aserciones nuevas en background."
    ],
    "correct": 2,
    "justification": "La combinación DEFERRABLE INITIALLY IMMEDIATE permite que la restricción se porte como una normal (cuando haces INSERT grita si está mal en aquel momento). No obstante, a diferencia de las NOT DEFERRABLE, esta te otorga la magia de darle al pause temporal con el comando SET CONSTRAINTS... DEFERRED cuando te interese.",
    "trap": false
  },
  {
    "category": "integridade",
    "type": "multi",
    "question": "¿Por qué muchos SGBD se niegan a incluir funcionalmente la herramienta ASSERTION (Aserciones globales) del estándar SQL?",
    "options": [
      "Porque Oracle tiene los derechos de patente sobre ellas.",
      "Las aserciones requieren comprobar globalmente cruces y variables entre múltiples tablas ante cualquier mísero INSERT en cualquier lugar; el gasto computacional aplastaría el rendimiento del servidor.",
      "Las aserciones carecen de utilidad matemática probada en álgebra.",
      "Porque su sintaxis es incompatible con el código XML de las nuevas DBs."
    ],
    "correct": 1,
    "justification": "Las aserciones son la \"estrella de la muerte\" del rendimiento. Una ASERCIÓN como `CHECK (ningún jefe de ninguna sucursal en Europa gane el doble que el analista menor pagado)` tendría que ser evaluada por el SGBD en TODO cambio que le hagas a salario, contratando o modificando continentes.",
    "trap": false
  },
  {
    "category": "integridade",
    "type": "vf",
    "question": "La sentencia CREATE DOMAIN en SQL Estándar solo nos permite definir un tipo de alias para \"VARCHAR\" sin poder atar conductas matemáticas (como restricciones) a los tipos derivados creados.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. El corazón de las creación de DOMAIN en SQL es justamente añadir las restricciones anexas a ellos (ej: `CREATE DOMAIN salario NUMERIC(7,2) CHECK (VALUE > 1080);`). Después, las tablas que declaren columnas de ese dominio heredan la regla instantáneamente.",
    "trap": false
  },
  {
    "category": "integridade",
    "type": "multi",
    "question": "Ante un intento de usar subconsultas como `CHECK (SAL <= (SELECT MAX(SAL) FROM EMP))`, ¿cuál es el resultado estándar en la industria relacional?",
    "options": [
      "Funciona y ejecuta la query cada vez que se actualiza el saldo.",
      "Es materialmente rechazado o se ignora porque generaría dolores de cabeza circulares (la evaluación dependería de los datos en curso). Se recomienda pasarlo a triggers si asumes las penalizaciones lógicas asociadas.",
      "El optimizador lo hace transparente con Views.",
      "Se convierte en una FOREIGN KEY secreta."
    ],
    "correct": 1,
    "justification": "Al ser las CHECK reglas duraderas ultra eficientes, forzarlas a leer todo EMP por cada check de integridad o generar mutaciones de tabla revienta la escalabilidad. El estándar dicta que un Check enfoca solo en los valores introducidos o los presentes en la fila entrante, no subqueries densas.",
    "trap": false
  },
  {
    "category": "seguridade",
    "type": "multi",
    "question": "Uno de los grandes modelos de seguridad es el Control de Acceso Discrecional (DAC). ¿Cuál es su dogma base en SQL?",
    "options": [
      "Nadie puede ver datos hasta que pasa tres tests del estado.",
      "El administrador posee los datos en exclusiva, cifrándolos para el resto de usuarios de la red.",
      "Los usuarios tienen derechos de propiedad sobre los objetos que crean y conceden discrecionalmente la libertad a los demás de acceder a sus contenidos (mediante GRANT).",
      "Las máquinas gestionan permisos por IA basada en comportamientos anómalos."
    ],
    "correct": 2,
    "justification": "Discrecional (DAC) significa \"yo lo creo, yo lo mando\". El propietario decide darle permisos `GRANT SELECT` a los amigos que él prefiere de forma discrecional o caprichosa. Se opone radicalmente al Mandatory Access Control (MAC) que dicta estrictas reglas de defensa nacional donde el propietario no pinta nada.",
    "trap": false
  },
  {
    "category": "seguridade",
    "type": "multi",
    "question": "En el modelo MAC (Control Acceso Obligatorio), bajo el teorema Bell-LaPadula, existe un nivel Confidencial (1) y Top Secret (2). La regla \"no read-up\" significa:",
    "options": [
      "Un usuario nivel 1 no puede leer información Top Secret nivel 2.",
      "Un usuario nivel 2 no puede leer a uno de nivel 1.",
      "Un usuario nivel 2 no puede escribir a nivel 1.",
      "Un usuario nivel 1 no puede escribir al nivel 2."
    ],
    "correct": 0,
    "justification": "La Simple Security Property (\"no read-up\") establece el sentido común: Si yo soy de clase inferior, se prohíbe que mi vista \"suba\" hacia el material sensible de las altas esferas. Sujeto S solo puede leer Objeto O si Clase(S) >= Clase(O).",
    "trap": false
  },
  {
    "category": "seguridade",
    "type": "multi",
    "question": "En Oracle/SQL, para conferir acceso granular solo a las columnas Nombre y Salario de una tabla sin exponer información como el DNI a un grupo de roles, ¿qué sintaxis del GRANT se usa?",
    "options": [
      "La sintaxis horizontal basada en WHERE en el comando GRANT.",
      "Oracle no posee GRANT sobre columnas individuales en la ISO.",
      "Usamos la selección de atributos por paréntesis: `GRANT SELECT (nombre, salario) ON empleados TO role_contables;`",
      "Tenemos que emplear Vistas explícitamente, el comando GRANT para atributos no sirve en selects."
    ],
    "correct": 2,
    "justification": "El privilegio de objeto se puede granular a la columna en INSERT, UPDATE y REFERENCES en el estándar. En Oracle modernizado se permite granular SELECTs, o recurrir clásicamente al uso de vistas que actúan como \"escudos\" que tapan la data secreta (seguridad a nivel de vista horizontal o vertical).",
    "trap": false
  },
  {
    "category": "seguridade",
    "type": "vf",
    "question": "En las cadenas de concesión que involucran ROLES globales usando la opción `WITH ADMIN OPTION`, la revocación de un privilegio en cascada ocurre por defecto.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. Uno de los detalles más puñeteros y sutiles de los ROLES y la WITH ADMIN OPTION es que el REVOKE NUNCA es en cascada hacia los terceros. Cuando un Administrador revoca un privilegio de sistema a un intermediario, la gente a quien este le dio acceso conserva los privilegios hasta que se los quitemos a mano.",
    "trap": true
  },
  {
    "category": "seguridade",
    "type": "multi",
    "question": "Según el modelo de inferencia en bases de datos estadísticas, ¿qué grave peligro existe al usar la simple cláusula WHERE en ella cuando tienes restricciones de anonimización?",
    "options": [
      "El gestor colapsa y gasta CPU.",
      "El error ORA-3330 salta en el monitor del admin.",
      "Si un atacante hace dos queries ligeramente parecidas cuyo recuento varíe en 1, usando álgebra puede deducir (inferir) cuál es exactamente el dato protegido de ese individuo diferenciador que antes era anónimo dentro del agregado estadístico global.",
      "Que la base de datos se destruya y caiga."
    ],
    "correct": 2,
    "justification": "Las BD Estadísticas prohíben revelar filas individuales (ej: \"¿Cuál es el salario del paciente con SIDA de 30 años en Lugo?\"). Para evitarlo exigen agrupaciones \"Mínimo N elementos\". Un hacker consulta \"sueldos de los 10 médicos de Lugo\" y luego consulta \"sueldos de 9 médicos exluyendo a Paco\". Restando las sumas, averigua que Paco gana 3400. ¡Inferencia!",
    "trap": false
  },
  {
    "category": "seguridade",
    "type": "multi",
    "question": "La tecnología Transparent Data Encryption (TDE) de Oracle proporciona protección contra ¿qué tipo de amenazas o intrusiones concretas?",
    "options": [
      "Las inyecciones SQL desde formularios web que alteran las Queries de contraseña.",
      "El ataque furtivo a los ficheros físicos de disco (datafiles) o copias de seguridad fuera de línea; los hackers que copien los `.dbf` en su pen drive e intenten leerlos en una infraestructura paralela chocarán contra un muro criptográfico encriptado de forma transparente para nuestra BD local viva.",
      "Los ataques de interbloqueo con 2PL sobre transacciones vitales.",
      "TDE protege los envíos de texto desde el navegador hasta el servidor IIS en Javascript."
    ],
    "correct": 1,
    "justification": "El término transparente proviene de que el SGBD deja a la vista las tablas cuando haces selects dentro de él de forma natural, pero de forma subyacente mantiene todo cifrado en el medio magnético de disco rígido. Evita el peligro real de los robos de los discos duros del CPD.",
    "trap": false
  },
  {
    "category": "seguridade",
    "type": "multi",
    "question": "Cuando creamos un conjunto de usuarios masivos para pruebas, ¿a qué peligroso pseudo-usuario debemos revocarle permisos y cuidar de no darle cosas por defecto?",
    "options": [
      "Al esquema SYS, que gestiona el root de la DB.",
      "Al ADMIN superior.",
      "Al SYSTEM.",
      "A PUBLIC, un alias colectivo donde por defecto, en viejas versiones de Oracle, la gente echaba grants y el resultado era un agujero negro en el que a cualquier nuevo usuario se le añadían esos poderes instantáneamente y de forma automática por la magia de esta pseudo-role de grupo genérico."
    ],
    "correct": 3,
    "justification": "El PUBLIC incluye por defecto permisos insanos como conectarse libremente en algunos sistemas preconfigurados o de desarrollo. Hacer un GRANT a PUBLIC significa \"barra libre para la eternidad\", debiendo cuidarlo o revocar su presencia en el acceso indiscriminado de base de datos.",
    "trap": false
  },
  {
    "category": "seguridade",
    "type": "multi",
    "question": "Dentro de los sistemas de Auditoría Estándar, ¿cómo rastrea Oracle cuando un usuario teclea e intenta ejecutar un `DROP TABLE` prohibido que resultó en un fallo?",
    "options": [
      "Oracle carece de sistemas para el fallo, solamente graba el éxito.",
      "Un trigger de base de datos a nivel de DDL, o activando en la base de datos las trazas (AUDIT DROP ANY TABLE WHENEVER NOT SUCCESSFUL) que guardan registros en las tablas internas de administración a cada intento infructuoso para revisión en el SOC.",
      "Por medio de las views del Information Schema.",
      "La base de datos llora en pantalla y registra la traza en un .txt local de la app cliente."
    ],
    "correct": 1,
    "justification": "La cláusula explícita nativa \"AUDIT comando WHENEVER SUCCESSFUL | NOT SUCCESSFUL\" de Oracle es potentísima para guardar historiales criminales (en el diccionario DBA_AUDIT_TRAIL) y detectar si alguien (falla de login constante, fallos por falta de permisos en drops, accesos de fuera de horario) intenta reventar el sistema.",
    "trap": false
  },
  {
    "category": "seguridade",
    "type": "vf",
    "question": "En el paradigma de Inyección SQL clásico, si la consulta dinámica de la web es del tipo `SELECT * FROM USUARIOS WHERE name = $_POST[\"nombre\"]`, introducir en el campo de texto un valor como `\" admin\" OR 1=1 -- ` conseguiría que el atacante descargase los datos de todos los usuarios de la plataforma por bypass de lógica condicional.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. La variable llena el molde generando una sintaxis SQL globalmente falsa, pues \"1=1\" resulta en Tautología perfecta y universal. Y el doble guion \"--\" anula o comenta cualquier filtro que tenga por debajo la misma aplicación web, rompiendo la seguridad.",
    "trap": false
  },
  {
    "category": "activas",
    "type": "multi",
    "question": "En Oracle, si tienes la imperiosa necesidad de guardar un Registro de Errores mediante COMMIT dentro de la ejecución de un Trigger sin romper la integridad y sin que el compilador dé un error inmediato, ¿qué técnica usarías?",
    "options": [
      "Ejecutar las sentencias mediante dbms_commit().",
      "Definir el Trigger con los poderes del usuario AUTONOMOUS_TRANSACTION para que sus grabaciones (ej: logs en el catálogo) hagan su propio COMMIT independiente del contexto de la transacción principal disparadora (la cual podría hacer rollback más tarde sin borrar tu log).",
      "Desactivar los triggers temporales de fondo.",
      "Las variables pragma NON_COMMIT_SCOPE."
    ],
    "correct": 1,
    "justification": "La regla inquebrantable de Oracle es que un Trigger no puede lanzar instrucciones de control transaccional (COMMIT, ROLLBACK) que interfieran con la transacción matriz que lo invocaba. Para saltarse esto (idealmente para auditar fallos), creas un sub-hilo de base de datos llamado transacción autónoma PRAGMA AUTONOMOUS_TRANSACTION.",
    "trap": false
  },
  {
    "category": "activas",
    "type": "vf",
    "question": "En el código de un trigger FOR EACH ROW de tipo INSERT en Oracle, el componente `:OLD` recoge la copia exacta con los valores antiguos insertados del registro.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. Si el trigger es de INSERT, el registro antes ni existía. La variable :OLD es, en toda su estructura y columnas, puramente NULL. La variable útil es la del :NEW.",
    "trap": false
  },
  {
    "category": "activas",
    "type": "multi",
    "question": "Para evitar bucles infinitos cuando un Trigger de UPDATE actualiza la propia tabla que lo desencadenó y se redispara a sí mismo miles de veces en bucle, ¿qué herramienta dispone la sintaxis del Trigger?",
    "options": [
      "La posibilidad de limitar las alteraciones definiéndolo solo para unas columnas específicas (ej: AFTER UPDATE OF salario ON empleados). Solo saltaría si tocas el salario y no al cambiar las demás cosas.",
      "La obligación de usar FOR EACH STATEMENT en todo lugar.",
      "La cláusula AVOID CASCADING RECURSION.",
      "Un límite máximo de llamadas a trigger estipulado en parámetros del Server (max_trigger_depth = 5)."
    ],
    "correct": 0,
    "justification": "Si en el trigger modificas el nombre, y eso levanta el propio trigger, entras en bucle. Especificando `OF <lista_columnas>` restringes el disparador y cortas de raíz que otras acciones accesorias produzcan incendios continuados.",
    "trap": false
  },
  {
    "category": "activas",
    "type": "multi",
    "question": "Uno de los grandes recursos en Oracle es la capacidad de reaccionar a la caída de la base de datos. ¿Cómo intervienen aquí los Triggers?",
    "options": [
      "Los triggers solo reaccionan a tablas concretas.",
      "Se pueden añadir los llamados System/Database Event Triggers que reaccionan ante aserciones del motor completo, permitiendo ejecutar código en momentos críticos como STARTUP, SHUTDOWN, LOGON y LOGOFF, registrando el historial de la instancia.",
      "Únicamente en el caso de los DBA con privilegio ROOT.",
      "Usando el EVENT TRACKER XML."
    ],
    "correct": 1,
    "justification": "Oracle generalizó los triggers desde simples reglas de DML hasta reglas de la instancia del sistema, facilitando escribir en la tabla de Logs si un usuario sospechoso hace un LOGON a deshoras (iniciando sesión en la propia BD) de forma nativa sin cron-jobs del SO.",
    "trap": false
  },
  {
    "category": "desenofisico",
    "type": "multi",
    "question": "Un \"Index-Organized Table (IOT)\" en Oracle ahorra el coste del doble recorrido a disco que sufriría una búsqueda clásica por clave en un Heap común. ¿Qué contraprestación tiene cuando queremos crear un índice secundario para las búsquedas dobles (ej. buscar por NOMBRE en lugar de la clave)?",
    "options": [
      "La BD no permite índices secundarios en las IOTs.",
      "El índice secundario usa ROWIDs lógicos (Basados en un guess de la clave primaria) en lugar de los ROWIDs físicos fijos del Heap clásico. Como la IOT se rebalancea y los bloques se rompen/mueven (porque los datos viajan con los nodos hoja del B-Tree), esos ROWIDs pierden precisión o exigen resolución extra.",
      "Dobla la capacidad del disco duramente de forma insostenible.",
      "Colapsa el Tablespace TEMP con joins inútiles."
    ],
    "correct": 1,
    "justification": "En la Heap normal los registros tienen una \"dirección de calle\" inalterable (ROWID físico) porque no se mueven ni ordenan jamás. En la IOT, la inserción en el B+ Tree causa splits y tus vecinos se mueven para dejarte sitio. Tu dirección varía. Luego el índice secundario se apoya en la Primary Key a modo de dirección virtual.",
    "trap": false
  },
  {
    "category": "desenofisico",
    "type": "multi",
    "question": "¿Qué significa utilizar índices \"function-based\" (basados en funciones) en un Oracle/Postgres y cuándo son imprescindibles?",
    "options": [
      "Hacer funciones C en el kernel para el árbol B.",
      "Al tener consultas del tipo `WHERE UPPER(apellido) = \"PEREZ\"`, el índice clásico en el apellido minúscula no vale de nada porque el Optimizador no sabe hacer el uppercase al revés; el sistema permite precalcular y meter el propio `UPPER(apellido)` indexado y resuelto para la velocidad del rayo.",
      "Sustituir todos los procedimientos matemáticos.",
      "Indexar solamente las variables de los procedimientos almacenados del software."
    ],
    "correct": 1,
    "justification": "Un Function-Based Index no indexa el dato puro (apellido), sino el resultado de una expresión estricta. Un salvavidas si tu aplicación siempre ejecuta operaciones sobre un campo (`WHERE EXTRACT(YEAR FROM fecha_nac) = 1990`). El Optimizador encontrará este índice como el mesías.",
    "trap": false
  },
  {
    "category": "desenofisico",
    "type": "vf",
    "question": "Los índices \"Invisibles\" son aquellos que están cifrados criptográficamente en los discos y no se detectan ante ataques.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. La característica \"Invisible\" de un índice le dice al CBO (Optimizador basado en coste) \"ignórame y no me uses en el plan de ejecución, como si yo no existiese, PERO mantenme plenamente actualizado en las operaciones DML en background\". Se emplea por los DBAs para probar si \"matar\" un índice rompe o arregla el rendimiento, pero sin el peligro real del DROP.",
    "trap": false
  },
  {
    "category": "desenofisico",
    "type": "multi",
    "question": "¿Qué diferencia el Particionado RANGE del Particionado LIST cuando estructuramos tablas gigantescas de logs de red?",
    "options": [
      "El RANGE emplea algoritmos MD5 y el LIST es ordenado alfabéticamente en bruto.",
      "El RANGE clasifica los fragmentos abarcando intervalos continuos de variables ordenables (ej. 2023 hasta 2024 va aquí, 2025 para allá), óptimo para particionar por tiempo e históricos. El LIST pide los valores discretos finitos a mano uno a uno (ej: Galicia, Asturias, Euskadi).",
      "El LIST requiere tablas de sistema y el RANGE tablas de datos.",
      "Ambos están prohibidos en versiones Multitenant por la falta de compatibilidad."
    ],
    "correct": 1,
    "justification": "Cuando organizas por fechas las particiones deben encajar meses o lustros (RANGE). Si organizas la empresa por los nombres comerciales de delegación (Madrid central, Delegación Coruña) necesitas encasillarlas en un LIST.",
    "trap": false
  },
  {
    "category": "desenofisico",
    "type": "multi",
    "question": "Tenemos una tabla de ventas particionada y queremos crearle un índice global y un índice local particionado (equiparticionado). ¿Qué implica que sea un Índice Local (Local Partitioned Index)?",
    "options": [
      "Divide el árbol B+ en la misma cuantía y en las exactas mismas particiones que la tabla original. Es facilísimo de gestionar, si elimino una partición mensual de datos obsoletos en 2012, su trozo de índice \"muere\" limpiamente con ella sin perturbar al grande.",
      "Que abarca toda la Base de Datos pero el CBO oculta las piezas en el mismo archivo de la tabla sin particionar en el disco duro SSD.",
      "Que se puede compartir para el particionado en otros tablespaces ajenos a las particiones base pero con referencias globales de ROWID apuntando indirectamente a la partición real en ejecución de hardware.",
      "Que la sintaxis global requiere la directiva ONLINE."
    ],
    "correct": 0,
    "justification": "Las particiones locales evitan la dependencia de la \"Araña gigantesca\" (el índice Global que referenciaría desde el nodo central a los millones de particiones físicas debajo y cualquier operación masiva en las hojas haría temblar el árbol entero generando largos procesos de invalidación).",
    "trap": false
  },
  {
    "category": "optimizacion",
    "type": "multi",
    "question": "La ejecución de las bases de datos sufrió una de sus mayores revoluciones gracias al salto de RBO (Optimizador basado en Reglas) a CBO (Optimizador basado en Coste). ¿Qué diferencia el CBO de la versión primigenia RBO?",
    "options": [
      "RBO ejecuta lo que es mejor para el hardware, CBO para la CPU únicamente.",
      "RBO seguía una lista fija y heurística ciega sin importar que la tabla midiese 3 bytes o 30 TB (ej. \"si hay índice, úsalo por cojones\"). CBO consulta los censos estadísticos matemáticos y dice \"Aunque tengas un índice, esta tabla es un enano de 2 bloques y prefiero hacer un acceso global que leer por encima dos árboles estúpidos y lentos\".",
      "El CBO funciona y rechaza todos los joins Nested Loop, prohibiéndolos por obsoletos en el catálogo.",
      "CBO requiere que los programadores le pasen hints para todas sus querys a mano sin ayuda."
    ],
    "correct": 1,
    "justification": "El RBO (Optimizador basado en Reglas) de Oracle era rígido hasta aburrir: \"Si tienes cláusula =, pon primero esta. Si haces tal, usa el índice 15\". El CBO evalúa probabilísticamente la cardinalidad (cuánto costará este camino según el número de bloques en juego) y construye el árbol en base a planes de ejecución comparados de forma simultánea y paralela estimando los costes más baratos del grafo algorítmico del tiempo de finalización de todo el recorrido.",
    "trap": false
  },
  {
    "category": "optimizacion",
    "type": "multi",
    "question": "Dentro del CBO las estadísticas son su pan de cada día, ¿qué son \"nR\" y \"bR\" en la jerga del álgebra teórica para la optimización de DB?",
    "options": [
      "Número de Registros por tabla, y cantidad de Bytes Racionales.",
      "Las variables del Grafo Espera (Wait for Graph).",
      "Número de tuplas (filas) de la relación \"R\" (nR) y Número de bloques que ocupan sus datos físicamente grabados en el disco magnético de la relación \"R\" (bR).",
      "La marca de la transacción T(n)."
    ],
    "correct": 2,
    "justification": "El optimizador estima los costes en Base Al Número de Bloques a viajar desde el SSD o el magnético hasta el buffer (coste por E/S es el factor vital limitante y castigador).",
    "trap": false
  },
  {
    "category": "optimizacion",
    "type": "multi",
    "question": "El Optimizador tiene disponible un índice B-Tree sobre el ID (que es único). ¿Cuál es el coste analítico general de encontrar tu fila específica por ese índice?",
    "options": [
      "Aprox. 1 (El acceso en la hoja de forma constante como Hash).",
      "Simplemente leer todo bR (Coste Lineal O(N)).",
      "Coste hidx (Altura matemática constante del árbol hasta la hoja) + 1 (El gran salto de la hoja a la data original fuera del árbol con el apuntador ROWID al bloque de datos del heap real de la tabla).",
      "Coste m (número extra de las hojas vinculadas) + e."
    ],
    "correct": 2,
    "justification": "Caes en el árbol y vas bajando los niveles del índice (h_idx bloques leídos desde la rama superior hasta las hojas para obtener el ROWID de salida correspondiente). El gran final y coste de la traca añadida: un bloque (el 1 añadido en la función) requerido para coger un avión, marchar al Table Heap central usando tu billete ROWID encontrado, y aterrizar justo encima de tu amada fila solitaria extrayendo todas sus otras columnas asociadas que te falten en el buffer cache de la memoria RAM del servidor.",
    "trap": false
  },
  {
    "category": "optimizacion",
    "type": "multi",
    "question": "¿Qué significan los \"Histogramas\" en el diccionario estadístico del Optimizador y cuándo intervienen de un modo decisivo en el plan de acceso?",
    "options": [
      "Grafismos y barras de logs de caídas de la RAM en la CPU.",
      "Estadísticas muy finas que recogen los saltos del tipo de datos desde un String a un Blob.",
      "Análisis detallados que capturan el hecho irrefutable del Sesgo Estadístico de las columnas, avisando por ejemplo que \"Aunque estado civil tiene solo 3 valores (Soltero/Casado/Viudo), el 95% de la gente es soltera, mientras el 4% es casado y 1% viudo\". Evitando que la BD mienta y asuma un ratio flat de 33% y meta la pata leyendo erróneamente por el B-Tree en una consulta de Solteros y hunda en E/S el server.",
      "Son resúmenes de seguridad."
    ],
    "correct": 2,
    "justification": "Una de las joyas del optimizador avanzado es usar los density_histograms. Sin histograma el CBO calcula una selectividad del 33% ante tus 3 valores (ej. SOLTEROS). Con eso, podría ver viable lanzar un Index-Scan con ROWIDs inútilmente para coger casi toda la tabla del sistema generando accesos doble (random read del infierno E/S repetitivo a cada iteración desde el árbol index hasta la tabla) provocando que vaya 100 veces más lento que barrer de un tirón secuencial los bloques de la memoria (Full Table Scan con el optimizador block scattered).",
    "trap": false
  },
  {
    "category": "optimizacion",
    "type": "multi",
    "question": "¿Qué operación de lectura física profunda en Oracle realiza el equivalente al barrido completo (Full Table Scan) peroooo a través de un índice, pudiendo barrer la base de datos entera por medio de los trozos del índice usando múltiples reads en simultáneo ignorando el árbol lógico superior completamente?",
    "options": [
      "INDEX RANGE SCAN.",
      "BITMAP SCAN DIRECT.",
      "INDEX FAST FULL SCAN.",
      "INDEX UNIQUE SCAN."
    ],
    "correct": 2,
    "justification": "Si pides contar todas las comisiones del mundo (COUNT(COMM)) con un índice sobre ellas de tipo NON-NULL. Como Oracle tiene que sumarlo todo, en lugar de bajar uno a uno desde la raíz perdiendo su tiempo (INDEX FULL SCAN), prefiere saltarse toda la jerarquía legítima del árbol superior por inútil y pasa a devorar salvajemente el tablespace entero donde cayeron dispersadas las hojas del índice extrayéndolas masivamente con operaciones \"multiblock read\" (asíncrono puro multi-hilo) a la velocidad de la luz... ¿La gran desventaja de eso? Como las agarró tal cual venían grabadas en el suelo esparcidas en los bytes magnéticos físicamente sin hacerle caso a los punteros de link lógicos de las ramas B-Tree ordenantes del algoritmo de computer science subyacente... ¡tus resultados vienen por primera vez en el ecosistema B+ DE-SOR-DE-NA-DOS! ¡O le amarras un ORDER BY externo posterior si precisas ordenación o te aguantas con la entropía! ¡Lo dicho se llama Index Fast Full Scan!",
    "trap": false
  },
  {
    "category": "optimizacion",
    "type": "multi",
    "question": "En la jerga de los EXPLAIN PLAN, si ves en la salida un \"TABLE ACCESS BY INDEX ROWID BATCHED\", ¿qué me dice eso?",
    "options": [
      "Hace uso de un bloque especial temporal intermedio en la memoria RAM en el momento en que busca el ROWID.",
      "Es la sustitución moderna a TABLE ACCESS BY INDEX ROWID clásico: para evitar \"viajar al Table Heap del almacenamiento externo\" leyendo el sector de disco y volviendo con el bus de datos saturado para cada maldita clave secundaria un millón de veces con el Random Read... Oracle recolecta y acumula (Batching) primero varios de esos punteros ROWIDs salidos del Índice en el bolsillo a un listado de la RAM interna ordenándolos meticulosamente por localidad geográfica en tu disco duro local, para que cuando hagas viajes por todos ellos saltes los cabezales suavemente en el brazo lector como un señor sin pérdidas del hardware y saques varias del camino minimizando tirones E/S catastróficos en las agujas rotacionales!",
      "Usa sub-consultas en Batch programadas por las noches con el job cron UNIX de backup."
    ],
    "correct": 1,
    "justification": "La eficiencia por encima de todo. Si voy al super (Table Heap) no busco los garbanzos (Rowid), vuelvo, y luego voy por fideos sueltos que estaban justo al lado (Rowid contiguo temporal) repitiendo los viajes al hilo. BATCHED colapsa todo y hace barridas logísticas en las peticiones de acceso a la física de los Datafiles.",
    "trap": false
  },
  {
    "category": "optimizacion",
    "type": "multi",
    "question": "La directiva /*+ USE_HASH (t1 t2) */ le dice al sistema de planes que fuerza el uso de Hash Join cuando haga la mezcla de los conjuntos o las tablas cruzadas t1 y t2. ¿En qué consiste y en qué tipo de igualdad es válido un Hash Join?",
    "options": [
      "Válido en Join Theta con `<` y `>`. Se construye el Hash sobre los bloques.",
      "Únicamente en el caso del uso de Equijoins (`=`). Se crea en vivo en memoria RAM del sistema una enorme Table Hash en memoria sobre las claves y los atributos cruciales deseados pertenecientes estrictamente a la relación de T1 que resultase computacionalmente la MÁS PEQUEÑA en capacidad de tuplas de la relación de todas las dos, para después escudriñar iterativamente línea por línea por encima la T2 masiva entera y enrutar con la velocidad O(1) de Hash Lookup todos los datos cruzándolos.",
      "Siempre se requieren dos B-Tree previos en cada tabla.",
      "Usa el Hash para el Group By."
    ],
    "correct": 1,
    "justification": "La fase llamada \"BUILD Phase\" construye de forma pasmosa en el aire Hash Tables transitorias en la memoria RAM en vivo sobre la tabla menor usando inteligentemente todo el espacio Workarea de tu sesión. La segunda parte o \"PROBE phase\" pasa el tanque rociando los atributos de la tabla gigante (T2) barriendo la Hash memory y ensamblando las tablas con eficiencia divina (coste total = Coste barrida primera tabla bR + Costes barrida de la gran segunda tabla bS = Suma total lineal!). El Hash no funciona en comparativas desiguales.",
    "trap": false
  },
  {
    "category": "recuperacion",
    "type": "multi",
    "question": "¿Qué comportamiento tiene un sistema de BD frente a los \"fallos volátiles\" como los colapsos del sistema operativo o que te arranquen el servidor de la red eléctrica apagándose de golpe y borrándose y deshaciéndose en la nada la memoria RAM global del DB Buffer Cache y las Log Buffers perdidas para siempre al vacío electromagnético?",
    "options": [
      "Requeriría instalar el último tape de copia de seguridad generado en el día y perderse todos los datos transcurridos transaccionalmente de las últimas horas hasta la caída.",
      "Al tener el disco duro de platillos inalterado fuera del suceso del apagón local, se puede invocar los recursos del Gestor de Recuperación reiniciando la base de datos. El Recovery pasará un recorrido y aniquilará limpiamente haciendo \"Undo\" en el disco para repasar cualquier basura incompleta de operaciones sin transaccionar abandonadas a medias tintas por la desgracia del apagamiento forzado, y restaurará en base a los registros estables que poseía la DB.",
      "Se gestionaría la recuperación con un apagamiento RMAN y la Base quedaría corrupta.",
      "Es imposible recuperarlo."
    ],
    "correct": 1,
    "justification": "Por fallos con la RAM volatilizada o pánicos de SO el log ya cubrió en el disco duro las copias de todos los commits pasados gracias a los forzamientos sincrónicos de commit de tus páginas previas de la red. Solo perdiste las tablas de la RAM sin transaccionar y un montoncito sin cerrar pendiente de ser asesinado con los UNDO tras apagar (o REDO de datos consolidados). No requieres Backup en absoluto.",
    "trap": false
  },
  {
    "category": "recuperacion",
    "type": "multi",
    "question": "¿Cuál es el axioma vital detrás de \"No Forzar\" y las estrategias inteligentes en la política del Caché de variables de la Base de Datos?",
    "options": [
      "Los Commits no forcejean con los permisos.",
      "Cuando dices \"COMMIT\" en las aplicaciones o en la API de Java... en realidad Oracle o Postgres \"engañan\" en la cara del informático programador: Ellos guardan lo mínimo exigible por decencia en un papel diminuto súper liviano que pesa milisegundos en el fichero serial Log de Disco como registro legal del hecho (Force temporal Redo log puro)... PERO no hacen ningún esfuerzo infernal para obligar a la física de los discos del servidor a volcar inmensas cantidades de páginas reales y los megabytes exigentes de variables de TABLAS del DB CACHE modificadas del commit al disco en tiempo real jamás. Posponen de forma aplazada eso a los Background Writers del Servidor cuando quieran por libre asíncronamente cuando ya te hayas vuelto feliz para tu casa con la afirmación y mensaje en consola del DBMS de que está hecho.",
      "Encriptan las políticas de Checkpoints y la regla."
    ],
    "correct": 1,
    "justification": "Cuando hacéis un COMMIT, el sistema contesta OK tras mandar en fila vuestros Log Buffers muy ligeritos hacia la cola secuencial de escritura rápida en los redo logs físicos del disco en el momento del cierre de la puerta con gran rapidez E/S. Esa seguridad da pie y confianza absoluta a que, incluso si revienta el sistema de apagón justo un microsegundo más tarde, al reiniciar podremos rehacer por encima toda la tabla usando solo ese libro histórico del log. Por lo que no tiene absolutamente \"ninguna obligación mecánica o temporal de tener que Forzar por narices\" y descender de sopetón miles de Table Blocks aleatorios al datafile de los SSD que colapsarían los sistemas (Estrategia NO FORZAR).",
    "trap": false
  },
  {
    "category": "recuperacion",
    "type": "multi",
    "question": "La política de manejo del buffer STEAL / NO-FORCE que utilizan sistemas de BD comerciales como Oracle, ¿qué implicaciones tiene en la recuperación de datos?",
    "options": [
      "Requiere almacenar únicamente REDO, ya que el buffer jamás sustituye páginas no commitadas en el disco.",
      "Obliga al sistema a mantener registros de UNDO y REDO. STEAL permite al gestor sobrescribir datos en disco correspondientes a transacciones activas (requiere UNDO para deshacer si fallan), mientras que NO-FORCE permite no forzar las páginas en el commit al disco (requiere REDO para rehacer si el servidor cae justo después del commit).",
      "Hace innecesario cualquier registro de log, dependiendo únicamente de la clonación de discos RAID.",
      "Aumenta enormemente las esperas de Commit porque todo debe viajar al disco magnético al instante (FORCE)."
    ],
    "correct": 1,
    "justification": "La política de mayor rendimiento y la más compleja de implementar. Te permite despachar páginas modificadas al disco cuando quieras (Steal) y te permite no volcarlas obligatoriamente en el commit (No-Force), balanceando la E/S de la RAM óptimamente en segundo plano. La contrapartida es que precisas todo el armamento pesado del Log (Undo y Redo) activado.",
    "trap": false
  },
  {
    "category": "recuperacion",
    "type": "vf",
    "question": "Durante la fase de Redo de la recuperación por reinicio del sistema (Crash Recovery), el SGBD solo rehace las operaciones de aquellas transacciones que lograron un COMMIT exitoso antes de la caída, ignorando el resto.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. La estrategia estándar (tipo ARIES) de recuperación en el paradigma moderno rehace el historial COMPLETO y literal (Repeating History) comenzando desde el último Checkpoint a ciegas hacia adelante, rehaciendo absolutamente TODAS las transacciones registradas (ganadoras y perdedoras). Una vez reconstruido el punto exacto de colapso, en la posterior fase de Undo se deshacen de forma ordenada las perdedoras que no encontraron su commit.",
    "trap": true
  },
  {
    "category": "recuperacion",
    "type": "multi",
    "question": "¿Hasta dónde te hace retroceder en el registro log un \"Checkpoint\" o punto de control cuando el sistema se recupera de un fallo eléctrico en el algoritmo de la recuperación de fallos?",
    "options": [
      "Hasta la primera transacción insertada desde que se encendió el servidor originalmente.",
      "Limita tu búsqueda pasiva hasta la marca explícita de ese Checkpoint sincrónico de la base de datos para recuperar por delante; o en el caso de las recuperaciones tipo ARIES hasta el comienzo y fecha de nacimiento log-time de la transacción activa (a menudo atrasada) MÁS antigua recogida o activa en ese hito Checkpoint temporal.",
      "Hasta la línea del RMAN.",
      "Hasta la instalación de tu Base de Datos Oracle."
    ],
    "correct": 1,
    "justification": "El Checkpoint es una bendición: vuelca todo en memoria en seco a disco para garantizar y poner mi mente a descansar sabiendo que \"todo del pasado desde ese momento temporal X atrás, ya es sólido en el disco, así que no lo revises en tu recuperación salvo por el Undo de la maldita transacción vieja y arrastrada que siguió y siguió operando en vivo pasando este hito en la memoria justo antes del choque fatídico\".",
    "trap": false
  },
  {
    "category": "recuperacion",
    "type": "multi",
    "question": "Cuando ocurre un fallo de medios, como que se corrompe por daños en el hardware un disco del Sistema donde residía un archivo de datos de la base de datos (Datafile), ¿qué dos componentes de la política de backups necesitas imprescindiblemente restaurar para poner en servicio la DB?",
    "options": [
      "Simplemente arrancar la Base, ella arregla físicamente el disco con fsck.",
      "Tu copia de seguridad de la base de datos (Backup físico completo o Incremental de hace dos días) para ponerla en el espacio y sustituir la chatarra del disco muerto; JUNTO con el Archivo de Registros de Redo (Archived Redo Logs y Online Logs) acumulados desde el instante exacto de la foto de esa vieja copia de seguridad hasta hoy para aplicarles \"Forward Recovery\" (avanzar la película).",
      "Un backup lógico tipo Export (expdp).",
      "Solo necesitas borrar las partes defectuosas y hacer SHRINK del Tablespace."
    ],
    "correct": 1,
    "justification": "Los DBAs conocen el dolor de un disco calcinado. Coges la cinta de tu último backup y la restauras. Pero ese backup tiene tus clientes y base con \"datos de ayer por la mañana\". La Base de Datos, gracias a conservar los Redo Logs sanos (protegidos en otra cabina de discos multiplexada o SAN), inyecta esa grabación milimétrica de las jugadas transaccionales (Archived) reproduciendo como en un casete las horas perdidas por encima de la imagen restaurada hasta poner la tabla al segundo cero exacto de tiempo de la explosión.",
    "trap": false
  },
  {
    "category": "concorrencia",
    "type": "multi",
    "question": "Cualquier planificador (schedule) de transacciones concurrentes en el servidor se considera absolutamente correcto y matemáticamente aislado para mantener las propiedades ACID si cumple con...",
    "options": [
      "La condición de bloqueo temporal en paralelo.",
      "El grado de Seriabilidad equivalente. Una programación entrelazada y solapada en el tiempo se le considera legítima y saludable mientras el efecto en los datos finales del disco después de sus locuras temporales de solapamiento sea exactamente igual en consistencia, estado y coherencia que el que darían todas y cada una de estas ejecutándose consecutivamente y en una simple y lenta fila solitaria sin solapamiento virtual y ordenadas en serie (con seriabilidad de conflicto o visibilidad).",
      "Si todas acaban.",
      "La política Two-Phase Commit distribuida de los nodos."
    ],
    "correct": 1,
    "justification": "El Santo Grial de la Concurrencia. No ejecutas uno por uno porque irías lentísimo (seriado), solapas para usar I/O a fuego. ¿Cómo garantizas la fiabilidad de aislamiento y ACID (I)? Asegurando mediante protocolos de candados (Locks) que cualquier caótica telaraña que salga del cruce e interbloqueos temporales de E/S acabe sumando el mismo número aritmético global en el disco y variables que si fuesen ejecutadas en rígida Serie.",
    "trap": false
  },
  {
    "category": "concorrencia",
    "type": "vf",
    "question": "La Anomalía de la Lectura Sucia (Dirty Read) ocurre cuando una transacción lee un dato previamente leído y observa que otra transacción hizo un COMMIT entremedias modificando dicho valor de forma legal y sorpresiva, y provocando inconsistencia visual local.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. Eso se describe como \"Lectura No Repetible\" (Non-Repeatable Read) o \"Lectura Fantasma\" (Phantom Read), lo cual pasa cuando tú lees, otro lo modifica Y LO CONFIRMA CON COMMIT, y tú al volver a leer ves la mutación en tiempo real en tus manos. El problema capital y asustadizo de la \"Lectura Sucia\" te sucede si, siendo incauto, lees algo que otra persona cambió MIENTRAS la otra aún ni cerró el Commit y luego aborta haciendo ROLLBACK esfumándose en el viento con la mentira en tus ojos (Lectura de un dato volátil condenado).",
    "trap": true
  },
  {
    "category": "concorrencia",
    "type": "multi",
    "question": "¿Cuándo ocurre un abrazo mortal, abrazo de la muerte o Deadlock sistemático en ejecuciones bloqueantes (Locking)?",
    "options": [
      "Cuando T1 precisa un recurso (ej. bloqueo X en cuenta A) que está en las garras de T2, pero desgraciadamente T2 no lo va a soltar hasta cerrar, y está parado a la espera indefinidamente implorando por el bloqueo de otro recurso (ej. cuenta B) que ostenta justamente T1.",
      "Cuando T1 caduca en la base de datos por Timeout y falla la red.",
      "Cuando un usuario aborta con el administrador.",
      "Cuando una Base Distribuida intenta ejecutar el Rollback en ambos nodos fallidos a la vez."
    ],
    "correct": 0,
    "justification": "El clásico ciclo perverso. Para que T1 termine debe obtener bloqueo en el dato B (que agarra ferozmente T2), y para que T2 termine y lo suelte requiere coger el bloqueo en la variable A (que aferra celosamente T1 en sus tercas manos de avaricioso). Nadie puede seguir de modo perpetuo hasta el fin de los tiempos, conformando un ciclo de dependencia en el Grafo de Esperas, solucionable o tirando abajo a una como víctima y reiniciándola.",
    "trap": false
  },
  {
    "category": "concorrencia",
    "type": "multi",
    "question": "En la prevención optimista de interbloqueos, ¿cuál es la sutil diferencia matemática de las políticas \"Espera-Muere\" (Wait-Die) respecto a \"Hiere-Espera\" (Wound-Wait) al lidiar con un conflicto donde una transacción Vieja requiere el dato bloqueado en posesión de la Nueva?",
    "options": [
      "Ambas bloquean, pero Wound-Wait tarda más tiempo computacional de forma genérica.",
      "En Wait-Die, la Vieja le pide permiso respetuosamente a la Nueva y se pone a esperar pasivamente su turno en la calle hasta que se harta. En la agresiva Wound-Wait las tornas se intercambian drásticamente con la Vieja hiriendo (Wounds) o asesinando literalmente de golpe a la Nueva para abortarla del sistema violentamente con el fin de robarle los bloqueos que ocupaba sin perder tiempo ella esperando.",
      "El Wait-Die destruye a la Vieja, y el Wound-Wait a la Nueva por ley de Timestamp e idéntica forma y sentido geométrico en el log.",
      "La primera usa Timestamping Oracle, la segunda Locks de MS SQL."
    ],
    "correct": 1,
    "justification": "Ambas operan bajo la premisa de la Prioridad a la Transacción Vieja en edad temporal y Marca de Tiempo. En \"Wound-Wait\" la prioridad de la Antigua es total. Si la Vieja va a por un dato ocupado por la Joven y Nueva, la Antigua no le pasa una y hiere (mata con Rollback) a la nueva usurpando en el instante los derechos. En Wait-Die (Espera o Muere), si Vieja va a por Nueva, se pone a esperar respetuosa a la cola; pero si Nueva va a por la Vieja entonces muere con la frustración.",
    "trap": false
  },
  {
    "category": "concorrencia",
    "type": "multi",
    "question": "El Ordenamiento por Marcas de Tiempo (Timestamp Ordering) elimina por completo los candados basando el acceso en la edad T(i). ¿Qué acontece de notable y exótico en la llamada \"Regla de Escritura de Thomas\" (Thomas Write Rule)?",
    "options": [
      "Si una transacción anticuada T_vieja intenta ESCRIBIR magistralmente y de modo tardío en el valor (Item) después de que una T_nueva ya haya superpuesto históricamente y registrado con tu misma intención algo nuevo en él (donde la edad de T_vieja < Marca temporal Escritura Objeto)... la T_vieja no colapsa el servidor con Rollback ni explota llorando como pasaba antes de la regla; la T_vieja obvia heroicamente grabar su escritura arcaica al vertedero, \"Lo Ignora\" de modo magistral como un Ninja y sobrevive viva y feliz mintiendo al compilador de que lo escribió como si no pasara nada.",
      "Obliga y destruye con la reversión Rollback cualquier escritura obsoleta sin fisuras para imponer disciplina.",
      "Requiere una copia encriptada con MVCC obligatoriamente.",
      "Crea versiones nuevas del dato en un grafo de dependencia para el futuro."
    ],
    "correct": 0,
    "justification": "Esta excepción genial demostró que las lecturas atrasadas destrozan todo (debes tirar a la calle a la Vieja). Pero, ¿y qué pasa con una transacción Vieja lenta como un caracol que intenta ir a actualizar X a = 10 y descubre que la Joven ya adelantó por derecha dejando X a = 20 ayer? La matemática indica que lo del viejo se iba a sobreescribir en el siguiente turno si hiciera fila, luego no afecta a los datos saltar el insert nulo en el suelo y continuar tranquilamente sus demás tareas obviándolo.",
    "trap": false
  },
  {
    "category": "concorrencia",
    "type": "vf",
    "question": "La Anomalía de Actualización Perdida (Lost Update) solo se evita usando obligada e imperativamente el nivel de aislamiento extremo \"Serializable\", ya que READ COMMITTED la ignora en el modelo de contención de los estándares SQL en ANSI ISO.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. La actualización perdida es un agujero negro colosal y el pecado mortal de una BD. Cualquier gestor y motor, incluso en READ UNCOMMITTED como aislamiento ínfimo por defecto, está en la obligación técnica estricta y moral relacional de evitar este atropello entre UPDATE simultáneos de un mismo bloque físico con métodos nativos ocultos como cursores estabilizados y latches del Storage Cache.",
    "trap": false
  },
  {
    "category": "concorrencia",
    "type": "multi",
    "question": "En Oracle ¿cuál es la diferencia radical de cómo trata un bloqueo el aislamiento tipo READ COMMITTED por defecto y el SERIALIZABLE cuando ocurre el choque transaccional de un UPDATE concurrente en la misma y exacta fila particular y bloque de la calle virtual?",
    "options": [
      "READ COMMITTED destruye la primera, SERIALIZABLE la última.",
      "En READ COMMITTED T2 queda atrapada atascada en el Lock pasivamente esperando. Si T1 termina y da Commit, T2 renace de las cenizas reviviendo, releyendo en directo la modificación de T1 y aplicando sus nuevos Updates de golpe y saliendo airosa en el proceso. En un SERIALIZABLE rígido las tornas varían; T2 espera también, pero al hacer Commit T1... T2 se despertará amargamente para encontrar el temido y horrible error instantáneo \"ORA-08177: No se puede serializar el acceso para su transacción\", que revienta tu aplicación obligándola dolorosamente a reescribir con Rollback con tu propio lenguaje base cliente hacia atrás por tu programador de Spring o Java.",
      "Ambos esperan tres segundos de timeout y fallan los dos juntos para evitar Deadlocks por defecto en Oracle DBMS.",
      "No hay bloqueos, MVCC soluciona todas las colisiones de Updates en el vuelo."
    ],
    "correct": 1,
    "justification": "Oracle gestiona las actualizaciones cruzadas de la misma fila con la clásica fila de espera Latch (Row-level lock). El milagro viene en el modo de aislamiento por defecto; él aguanta el tirón y asimila la nueva realidad adaptando la cláusula UPDATE a la versión fresquita acabada de Commitir. El Serializable, imponedor de leyes exigentes, detecta esa brecha histórica a causa de que tu foto virtual viciada divergió de modo crítico de la del otro, y te deniega en redondo y salvajemente toda continuidad con fallo rotundo de aborto instantáneo.",
    "trap": false
  },
  {
    "category": "concorrencia",
    "type": "multi",
    "question": "¿Por qué el modelo de recuperación basado en Bloqueos de Dos Fases (2PL) simple y pelado suele caer de las estrategias empresariales de las multinacionales cuando los desarrolladores y programadores aplican las anulaciones en las transacciones de software sin un Estricto de por medio y termina originando \"Anulaciones en cascada\"?",
    "options": [
      "Un fallo hardware de discos duros aleatorio que cancela todo sin dejar rastro y desborda todo el límite de RAM del servidor de base de datos al mismo instante.",
      "El hecho nefasto de que tu fase simple le permite al sistema programado de control soltar y liberar sus pesados candados y bloqueos exclusivos (X) justo antes en la bajada libre del Shrinking en el espacio vital para su flexibilidad operativa tras modificar algo importante... Entonces un competidor listillo se apropia del dato modificado sin terminar, lee ese registro manchado en el vacío temporal en READS y trabaja... cuando de la nada tú caigas a la red principal y hagas un ROLLBACK forzado arrepentido, estallando en tu cara los planes, y arrastrando con la muerte inevitable al colega de la otra punta junto a su base de ramificaciones por apoyar sus resultados recolectorizados en cálculos irreales inventados tuyos. Si no son abortados, las lecturas suicidas corrompen la BD de forma permanente para la posterioridad.",
      "Hace deadlocks en las transacciones ciegas y estalla."
    ],
    "correct": 1,
    "justification": "En el Two-Phase Locking, bajar la cuerda liberando datos X y desbloqueándolos de tu feudo y territorio de forma \"temprana\" expone públicamente el fruto sin terminar y no verificado de tus trabajos a las bocas de otras sesiones del sistema. El simple fallo final tuyo es un virus mortífero con el contagio sistémico en cadena de ejecuciones de sistemas en paralelo que arrastran los rollback hacia atrás juntos de forma ineficiente, obligando a la versión 2PL ESTRICTA para remediar la catástrofe.",
    "trap": false
  },
  {
    "category": "concorrencia",
    "type": "vf",
    "question": "La maravilla principal revolucionaria del Multiversion Concurrency Control (MVCC) usado por Oracle y PostgreSQL de generaciones maduras es proporcionar a los procesos concurrentes múltiples versiones en tiempos paralelos sobre los mismos registros para que \"Ningún lector vuelva y jamás tenga la necesidad o desgracia prehistórica de tener que bloquear a los escritores, ni que el maldito sistema con escritores destruya a los lectores en la puerta con eternas esperas del timeout\" resolviendo majestuosamente uno de los mayores dolores del control central de contención del entorno OLTP mundial.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. Es el Santo Grial de la teoría moderna y de la evolución de las corporaciones de las BD desde épocas oscuras de serialización monolítica. El lector tiene su copia coherente de las tablas congelada en el pasado por su instantánea snapshot predeterminada (scn/marca temporal local o rollback undo blocks recuperados).",
    "trap": false
  },
  {
    "category": "optimizacion",
    "type": "multi",
    "question": "En la magia heurística y algebraica del Optimizador CBO relacional, ¿en qué se basa la optimización de la regla heurística principal de \"Empujar o bajar la operación de Selección (Filtro Sigma) en las hojas del árbol algorítmico\"?",
    "options": [
      "Facilita comprimir los discos ZIP.",
      "Se basa en bajar en la gráfica algorítmica las Selecciones hasta llevarlas lo más al fondo posible y pegadas al acceso físico a las tablas en el disco. Así logras eliminar o barrer enormes trozos, continentes y océanos de tuplas y basura inútil de forma ultra-temprana y preventiva en el paso de salida del Buffer en la base de datos para ahorrar el estrangulamiento de la CPU en el tiempo superior al combinar con otras piezas con asustadizos JOINS posteriores.",
      "Evita hacer índices B-Tree engrosados y defectuosos.",
      "Requiere una copia de las tablas."
    ],
    "correct": 1,
    "justification": "Tu query puede hacer una cruzada cósmica de Cliente JOIN Factura JOIN Vehículos JOIN Direcciones (de millones de filas cruzando con la muerte), y al final pides `WHERE cliente.nombre = \"Julio\"`. El sistema reescribe la query con la Regla de Conmutatividad con Sigma (Selección), metiendo el filtro \"Julio\" el primer paso abajo en la tabla Cliente (que queda con una sola fila solitaria). Los demás JOIN superiores se hacen con una sola fila voladora a la velocidad de la luz frente a O(n³) de las multitudes originales.",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "vf",
    "question": "En el esquema Information_Schema de SQL estándar, la vista SCHEMATA contiene información sobre todos los esquemas propiedad del usuario actual.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. SCHEMATA enumera precisamente los esquemas que tu ID de autorización posee en ese catálogo.",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "vf",
    "question": "Un catálogo es un conjunto de clusters.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. La jerarquía es: Los esquemas se agrupan en catálogos, y los catálogos se agrupan en clusters.",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "vf",
    "question": "La vista DBA_INDEXES en Oracle puede ser consultada por cualquier usuario sin privilegios especiales.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. El prefijo DBA_ restringe el acceso estrictamente a usuarios con el rol de DBA (Database Administrator).",
    "trap": false
  },
  {
    "category": "catalogo",
    "type": "vf",
    "question": "Las vistas del sistema USER_TABLES y TABS en Oracle se refieren exactamente a la misma vista o al mismo sinónimo para mostrar las tablas propiedad del usuario.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. TABS es el acrónimo/sinónimo clásico para USER_TABLES.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "vf",
    "question": "Al hacer DROP de una vista en Oracle y omitir la cláusula CASCADE, la vista se elimina pero las vistas dependientes permanecen marcadas como INVALID.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. Oracle marca las dependientes como INVALID. Al contrario que el estándar donde DROP VIEW RESTRICT fallaría.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "vf",
    "question": "Las Vistas Materializadas se actualizan siempre y únicamente bajo demanda del usuario mediante llamadas al paquete dbms_mview.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. También se pueden actualizar periódicamente con la cláusula START WITH ... NEXT ..., o incluso en tiempo real al confirmar con la cláusula ON COMMIT.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "vf",
    "question": "El modo REFRESH FAST en una Vista Materializada requiere la existencia imperativa de materialized view logs en las tablas base para poder identificar los registros modificados incrementales.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. Sin el log de transacciones de las tablas base, es imposible recopilar solo el incremento y te obliga a usar REFRESH COMPLETE.",
    "trap": false
  },
  {
    "category": "vistas",
    "type": "vf",
    "question": "En SQL estándar, se puede usar la cláusula ALTER VIEW para añadir una nueva columna (nuevo atributo) a la select de la vista sin tener que borrarla primero.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. La sintaxis ALTER VIEW no existe en el SQL estándar para este propósito, se debe usar CREATE OR REPLACE VIEW (Oracle) o borrarla con DROP y recrearla.",
    "trap": false
  },
  {
    "category": "integridade",
    "type": "vf",
    "question": "Las restricciones NOT NULL se pueden especificar a nivel de tabla (de fila) afectando a varias columnas simultáneamente de forma conjunta en la misma línea.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. La restricción NOT NULL solo se puede declarar explícitamente a nivel de columna en el estándar SQL.",
    "trap": false
  },
  {
    "category": "integridade",
    "type": "vf",
    "question": "Si defino una acción ON DELETE SET DEFAULT en una Foreign Key, al borrar un departamento todos sus empleados pasarán a tener como DEPTNO nulo.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. Pasarán a tener el valor predeterminado (DEFAULT) especificado en la definición de la tabla, no forzosamente NULL.",
    "trap": false
  },
  {
    "category": "integridade",
    "type": "vf",
    "question": "En SQL, una FOREIGN KEY con MATCH FULL indica que cualquier combinación parcial de valores nulos y no nulos es válida.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. MATCH FULL obliga a que o BIEN todos los atributos que forman la FK son Nulos en bloque, o BIEN ninguno es nulo y el registro existe.",
    "trap": false
  },
  {
    "category": "integridade",
    "type": "vf",
    "question": "La directiva DEFERRABLE INITIALLY IMMEDIATE comprueba la integridad en el instante pero te permite en medio de la transacción emitir el comando SET CONSTRAINTS DEFERRED para retrasarlo.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. Al ser \"DEFERRABLE\" dispones del poder para alterarlo en ejecución durante la transacción (cosa que las NOT DEFERRABLE no admiten).",
    "trap": false
  },
  {
    "category": "seguridade",
    "type": "vf",
    "question": "El comando GRANT SELECT ON EMP TO Pepe WITH ADMIN OPTION sirve para que Pepe pueda ceder los derechos de SELECT de la tabla.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. Para delegar privilegios sobre OBJETOS se usa WITH GRANT OPTION. La cláusula WITH ADMIN OPTION se usa específicamente para los ROLES o privilegios de sistema.",
    "trap": false
  },
  {
    "category": "seguridade",
    "type": "vf",
    "question": "Un ataque de Inyección SQL solo es posible en aplicaciones web que usen PHP, estando Java libre de riesgos gracias a sus clases basadas en PreparedStatement que no son vulnerables si se usan bien.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO (en parte, aunque es una pregunta trampa habitual). Si Java usa Statement concatenando strings, TAMBIÉN es vulnerable; las PreparedStatement parametrizadas te salvan en cualquier lenguaje.",
    "trap": false
  },
  {
    "category": "seguridade",
    "type": "vf",
    "question": "Cuando otorgas un ROL a un usuario de Oracle, los privilegios de inserción asimilados en la base no están disponibles hasta que el usuario se reconecte o ejecute un SET ROLE si su entorno ya estaba logueado.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. A diferencia de las concesiones puras de privilegios de objeto que tienen efecto inmediato, los cambios de ROLES generalmente requieren reconexión (login nuevo) para recargar el ambiente activo del usuario en la RAM.",
    "trap": false
  },
  {
    "category": "activas",
    "type": "vf",
    "question": "Un Trigger en Oracle puede usar la variable de enlace :NEW cuando se lanza en un evento tipo DELETE.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. Cuando haces DELETE las únicas variables con sentido son las del pasado (:OLD). El :NEW queda vacío (NULL) porque el registro va a desaparecer.",
    "trap": false
  },
  {
    "category": "activas",
    "type": "vf",
    "question": "Los Triggers INSTEAD OF son la única clase de disparador en Oracle que se permite usar estrictamente sobre VISTAS con el fin de hacerlas actualizables esquivando restricciones algebraicas.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. Las vistas no pueden tener los típicos BEFORE o AFTER. Solo pueden llevar INSTEAD OF, donde tú tomas las riendas programáticamente y tratas los datos insertando en las múltiples tablas ocultas desde PL/SQL.",
    "trap": false
  },
  {
    "category": "activas",
    "type": "vf",
    "question": "La condición booleana WHEN en un trigger FOR EACH ROW de Oracle tiene prohibido radicalmente utilizar sentencias SELECT (subconsultas) en su definición.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. La directriz interna obliga a que la cláusula WHEN solo evalúe valores simples de la matriz, operadores de strings o las variables OLD y NEW nativas, jamás queries colosales que hagan E/S a otras tablas.",
    "trap": false
  },
  {
    "category": "desenofisico",
    "type": "vf",
    "question": "En las tablas Heap clásicas (sin indexar), los datos se insertan siempre ordenados basados en la Primary Key por defecto mientras quede espacio libre en un bloque extents.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. Las HEAP son como contenedores de basura o baúles; las filas se echan y se acumulan tal como vienen de la aplicación sin respetar el menor orden, amontonándose en los Extents libres de la tabla.",
    "trap": false
  },
  {
    "category": "desenofisico",
    "type": "vf",
    "question": "El Single Table Hash Cluster tiene la maravillosa ventaja de indexar las tablas garantizando un tiempo de acceso fijo sin necesidad matemática de almacenar los apuntadores del índice en el árbol ocupando megabytes extra en ese disco.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. Un cluster Hash calcula la posición del bloque en la pista de disco magnético o NAND mediante la función predefinida en caliente por el procesador, ahorrando tener que guardar la calle en la agenda.",
    "trap": false
  },
  {
    "category": "desenofisico",
    "type": "vf",
    "question": "Los índices Reverse Key invierten completamente el valor del string para ser insertado en el B-Tree; por ejemplo, si insertas \"ROMA\" el B-Tree lo guarda alfabéticamente como \"AMOR\".",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. Aunque suene estúpido para buscar en un diccionario, es vital para evitar atascos en los índices numéricos cuando miles de cajeros insertan el ticket nº 100, 101, 102 destrozando todos a la vez y por contención el extremo derecho del B-Tree (Hot block contention). Revertirlos los separa espacialmente 001, 101, 201 salvando el hardware.",
    "trap": false
  },
  {
    "category": "optimizacion",
    "type": "vf",
    "question": "La regla heurística del Barrido asegura que es obligatorio ejecutar todos los joins primero para tener una visión panorámica, y solo al final del plan se aplican las selecciones y eliminaciones con el WHERE.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. La estrategia es exactamente opuesta, el principio absoluto de la optimización empuja el Filtro/Selección hacia LO MÁS ABAJO posible para que entre la menor cantidad de basura humana a las piezas de los grandes cruces matriciales (joins).",
    "trap": false
  },
  {
    "category": "optimizacion",
    "type": "vf",
    "question": "En la base PostgreSQL, se pueden desactivar manualmente los caminos de ejecución con el sistema ENABLE_SEQSCAN = OFF forzando al gestor relacional a no usar el escaneo secuencial de tablas completas en absoluto nunca y bajo ningún caso.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. Establecer las variables de \"enable_\" no anula ni prohíbe imperativamente un plan. Lo que hace Postgres es inflarle y subirle un millón el \"coste\" irreal de usarlo, pero si al final todos tus otros índices disponibles caen y no existe salida técnicamente válida, usará forzadamente ese mismo plan con rabia y furia saltándose el OFF.",
    "trap": false
  },
  {
    "category": "optimizacion",
    "type": "vf",
    "question": "El plan de ejecución del EXPLAIN en el SQL Estándar o en Oracle no ejecuta la sentencia DML en las entrañas reales, limitándose únicamente a escupir el grafo algebraico.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. EXPLAIN PLAN genera el pre-análisis. Solo la directiva tipo AUTOTRACE (Oracle) o EXPLAIN ANALYZE (Postgres) la llevan a término cruzando el sudor con la grasa ejecutándola de verdad en el servidor y aportándote las cuentas del tiempo verazmente tras la tortura.",
    "trap": false
  },
  {
    "category": "recuperacion",
    "type": "vf",
    "question": "En el protocolo WAL (Write Ahead Logging), se dicta que es matemáticamente obligatorio hacer el UPDATE y sobrescribir físicamente la base de datos de Datafiles EN EL DISCO DURO con la data nueva antes de atreverse siquiera a escribir cualquier bit registrado en el Log File.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. WAL exige exactamente la antítesis (El Registro Se Escribe Siempre por Delante). DEBE y SE OBLIGA a escribir y saltar en el Fichero de Log las intenciones pasadas a rotulador imborrable de la memoria ANTES de intentar por cualquier medio ensuciar la página física verdadera de los Datafiles que puedan estropearse en un apagón en medio.",
    "trap": false
  },
  {
    "category": "recuperacion",
    "type": "vf",
    "question": "Cuando ocurre un desastre por fallo de transacción simple (ej. división por cero en tu programa que revienta tu sesión individual), solo interviene y se hace lectura del Log del lado Undo, no siendo preciso cerrar el servidor en absoluto ni despertar ningún Checkpoint general del archivo.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. Fallo transaccional revierte en Undo (Rollback dinámico) solo de esa maldita línea; el sistema global DB Buffer Cache saca los escudos invisibles de la RAM de ti y borra tu paso en el aire, los demás ni se enteran de que moriste.",
    "trap": false
  },
  {
    "category": "concorrencia",
    "type": "vf",
    "question": "El grafo de precedencias con grafos enlazados detectará un conflicto serio y exigirá la anulación inmediata de la Transacción si posee al menos dos ciclos concéntricos; si hay un solo ciclo a los nodos se les permite operar libremente por vista equivalente.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 1,
    "justification": "FALSO. Si un grafo dirigido de la precedencia detecta un, repito, UN único ciclo cerrado entre sus nodos, el cuadro y el sistema de horarios solapado deja de estar protegido matemáticamente con la seriabilidad y es ahogado destructivamente en error o muerto; por culpa de uno solo.",
    "trap": false
  },
  {
    "category": "concorrencia",
    "type": "vf",
    "question": "En el protocolo 2PL Conservador (Pre-declaración), las transacciones comienzan su vida en el sistema exigiendo brutalmente bloqueos en todos los registros que llegarán a emplear en su futuro a la vez y de golpe en la primera línea de código, garantizando al 100% que las caídas por DeadLock sean humanamente imposibles si consiguieron arrancar en el procesador vivo.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correct": 0,
    "justification": "VERDADERO. Al ser tan bruto (¡Dadme TODO EL DISCO DURO que preveo leer en dos horas antes de iniciar!), si logra atrapar todos esos bloqueos por magia, jamás va a parar a mediados ni sufrir colisión (no Deadlocks). El problema que lo hizo desaparecer de los mercados de la industria es que estrangula cruel y fatalmente cualquier intento de concurrencia y las colas duran vidas en arrancar.",
    "trap": false
  },
  {
    "category": "examen",
    "type": "multi",
    "question": "**[Examen 06-07-2022 P1] Control de Accesos y Roles (SQL)**\n\n**Nota sobre el esquema:** Esquema de la BD de docencia (tablas: `emp`, `emppro`, `dept`, `pro`). Todos los campos, excepto las claves primarias, admiten nulos.\n\nQueremos que los usuarios `u1`, `u2` y `u3` puedan acceder (para realizar selecciones, inserciones y modificaciones) al código (`empno`), nombre, salario, comisión y código de departamento de los empleados del departamento 10.\n\nSelecciona la opción que logra esto de forma MÁS mantenible (para facilitar añadir los mismos permisos a otros usuarios como `u4`, `u5` en el futuro).",
    "options": [
      "GRANT SELECT, INSERT, UPDATE ON emp TO u1, u2, u3 WHERE deptno=10;",
      "CREATE VIEW emplo AS SELECT empno, ename, sal, comm, deptno FROM emp WHERE deptno = 10 WITH CHECK OPTION; GRANT SELECT, INSERT, UPDATE ON emplo TO u1, u2, u3;",
      "CREATE VIEW emplo AS SELECT empno, ename, sal, comm, deptno FROM emp WHERE deptno = 10 WITH CHECK OPTION; CREATE ROLE user_role; GRANT SELECT, INSERT, UPDATE ON emplo TO user_role; GRANT user_role TO u1, u2, u3;",
      "GRANT ALL PRIVILEGES ON emp TO u1, u2, u3;"
    ],
    "correct": 2,
    "justification": "El uso de **VISTAS** permite implementar seguridad a nivel de filas (horizontal) y columnas (vertical). El uso de **ROLES** permite escalar la asignación de permisos limpiamente sin hacer grants directos usuario por usuario. El **WITH CHECK OPTION** protege inserciones fraudulentas fuera de la vista.",
    "trap": false
  },
  {
    "category": "examen",
    "type": "multi",
    "question": "**[Examen 06-07-2022 P3] Optimización e Índices**\n\nConsidera la tabla `EMP` de docencia, que tiene la restricción `PK_EMP`, clave primaria (`EMPNO`). Además, se definió un índice `I_EMP_COMM` sobre el campo `COMM`, y un índice `I_EMP_SAL` sobre el campo `SAL`.\n\nDadas estas consultas:\n```sql\n1) SELECT /*+ INDEX (EMP I_EMP_COMM) */ COMM FROM EMP;\n2) SELECT MAX(SAL) FROM EMP;\n```\n\n¿Utilizará índices Oracle?",
    "options": [
      "1) Sí, un INDEX FULL SCAN por el hint. 2) Sí, un INDEX FAST FULL SCAN de SAL.",
      "1) No, ignora el hint porque COMM tiene nulos y no están indexados (hará FULL TABLE SCAN). 2) Sí, usará I_EMP_SAL recorriendo la derecha del B+ para buscar el máximo de una pasada.",
      "1) No, Oracle deshabilitó los hints. 2) No, la función agregada descarta índices siempre.",
      "1) Sí, hace un BITMAP SCAN. 2) No, hará full table scan."
    ],
    "correct": 1,
    "justification": "Los índices B-Tree de Oracle NO indexan nulos (salvo si son compuestos sin todos nulos). Pedir TODA la columna COMM implica traer los nulos, el índice carece de esa info y no sirve, ignorando el hint. En el caso 2, MAX(SAL) ignora nulos por definición SQL, y puede leer el nodo hoja de la derecha del índice O(log N).",
    "trap": false
  },
  {
    "category": "examen",
    "type": "multi",
    "question": "**[Examen 06-07-2022 P4] Integridad Referencial (Cláusula MATCH)**\n\nConsidera las siguientes tablas, donde `(K1, K2)` en `ESCLAVA` referencia a `MAESTRA`.\n\n**Tabla MAESTRA**\n\n| K1 | K2 |\n|----|----|\n| 10 | ES |\n\n**Tabla ESCLAVA**\n\n| ID | K1   | K2   |\n|----|------|------|\n| 1  | NULL | GL   |\n| 2  | 10   | NULL |\n| 3  | 10   | ES   |\n\nIndica para cada MATCH qué filas son válidas.",
    "options": [
      "MATCH SIMPLE: Válidas (3). MATCH PARTIAL: Válidas (2,3). MATCH FULL: Válidas (1,2,3).",
      "MATCH SIMPLE: Válidas (1,2,3). MATCH PARTIAL: Válidas (2,3). MATCH FULL: Válida (3).",
      "MATCH SIMPLE: Válidas (2,3). MATCH PARTIAL: Válida (3). MATCH FULL: Válida (3).",
      "MATCH SIMPLE: Válida (3). MATCH PARTIAL: Válidas (1,3). MATCH FULL: Ninguna."
    ],
    "correct": 1,
    "justification": "SIMPLE: si hay algún nulo, aprueba (fila 1 y 2). La 3 es idéntica, aprueba. Total: 1,2,3. \nPARTIAL: permite nulos, pero si hay no nulos, debe haber coincidencia. La 1 falla porque GL no está en MAESTRA. La 2 aprueba porque 10 sí está. La 3 aprueba. Total: 2,3. \nFULL: o todos null, o ninguno y match. Solo la 3 tiene cero nulos y hace match. Total: 3.",
    "trap": false
  },
  {
    "category": "examen",
    "type": "multi",
    "question": "**[Examen 06-07-2022 P5] Thomas Write Rule**\n\nInicialmente ML y ME son 0. $M(T_i) = i$.\n\n| Instante | T1 | T2 | T3 |\n|----------|----|----|----|\n| 1 | Read(A) | | |\n| 2 | | | Write(B) |\n| 3 | Write(B) | | |\n| 4 | | | Read(A) |\n| 5 | | | Read(C) |\n| 6 | | Read(A) | |\n| 7 | | Read(B) | |\n| 8 | Write(C) | | |\n\nIndica cómo terminan las operaciones críticas de la secuencia (t3, t7 y t8).",
    "options": [
      "t3: T1 aborta. t7: T2 lee bien. t8: T1 aborta.",
      "t3: Ignora escritura (Thomas). t7: T2 aborta (lee algo escrito por una más joven). t8: T1 aborta (intenta escribir en algo ya leído por alguien más joven).",
      "t3: T1 escribe y aplasta T3. t7: T2 aborta. t8: T1 escribe ignorando a T3.",
      "Las 3 abortan porque T1 y T2 son viejas."
    ],
    "correct": 1,
    "justification": "En t2, T3 escribió B (ME=3). En t3, T1(M=1) quiere escribir B; M(1)<ME(3), regla Thomas -> SE IGNORA, sobrevive. \nEn t7, T2(M=2) quiere leer B; B tiene ME=3. M(2)<ME(3) -> ROLLBACK T2, no puedes leer futuro. \nEn t8, T1(M=1) quiere escribir C; C tiene ML=3 (por T3 en t5). M(1)<ML(3) -> ROLLBACK T1, no puedes ensuciar el pasado ya leído.",
    "trap": false
  },
  {
    "category": "examen",
    "type": "multi",
    "question": "**[Examen 06-07-2022 P6a] Recuperación de log y caídas**\n\nTras la última entrada de este log se produjo una caída sin pérdida de almacenamiento no volátil:\n```\n<T1, START>\n<T2, START>\n<T1, A, 10, 23>\n<T1, COMMIT>\n<T2, B, 10, 25>\n<T3, START>\n<T2, COMMIT>\n<T3, B, 25, 33>\n<T3, B, 33, 27>\n... CAÍDA.\n```\n\nDi si son actualizaciones diferidas o inmediatas, y qué transacciones deshacer (undo) y refacer (redo).",
    "options": [
      "Diferidas. Deshacer: Ninguna. Refacer: T1, T2.",
      "Inmediatas (aparecen valor viejo y nuevo). Deshacer (undo): T3. Refacer (redo): T1 y T2.",
      "Inmediatas. Deshacer: T3 y T2. Refacer: T1.",
      "Inmediatas. Deshacer: T1. Refacer: T3."
    ],
    "correct": 1,
    "justification": "Vemos el registro `<T1, A, 10, 23>` (10=viejo, 23=nuevo). Para diferidas solo sale el valor nuevo. Al ser inmediatas hay que hacer UNDO de lo que cuelga a medias (T3 no tiene commit), y REDO de quien sí terminó antes de la caída (T1 y T2).",
    "trap": false
  },
  {
    "category": "examen",
    "type": "multi",
    "question": "**[Examen 11-07-2022 P1] Creación y actualización de vistas**\n\nConsidera las siguientes vistas:\n```sql\nCREATE VIEW vista1 AS \nSELECT DISTINCT empno, ename, sal+comm, hiredate \nFROM emp WHERE deptno = 30;\n\n-- Asumiendo que emps_depto10 es (SELECT * FROM emp WHERE deptno=10)\nCREATE VIEW vista2 AS \nSELECT empno, ename, sal, job \nFROM emps_depto10 \nWHERE sal > 4000 \nWITH LOCAL CHECK OPTION;\n```\n\nIndica creación, actualizabilidad y si permiten filas migratorias.",
    "options": [
      "V1: Falla creación por sumar (sal+comm). V2: Se crea, actualizable, sin migración.",
      "V1: Se crea, NO actualizable (por DISTINCT), permite filas migratorias (sin check option). V2: Se crea, actualizable, permite filas migratorias hacia fuera de emps_depto10 porque el check local ignora las vistas base.",
      "V1 y V2 se crean, ambas son read only.",
      "V1: Actualizable. V2: Falla al crearse por cruzar 2 esquemas."
    ],
    "correct": 1,
    "justification": "V1 es no actualizable por el DISTINCT (bloqueo sintáctico). V2 usa WITH LOCAL CHECK OPTION: en INSERTS solo se verifica `sal > 4000`. Si metes un empleado de depto 20, cumple el check \"local\", pero sufre de fila migratoria hacia emps_depto10 (el WHERE deptno=10 está en la vista padre, que se ignora por poner LOCAL en vez de CASCADED).",
    "trap": false
  },
  {
    "category": "examen",
    "type": "multi",
    "question": "**[Examen 11-07-2022 P2] Revocación de Roles**\n\n¿Qué pasa si el administrador (ABD) ejecuta `REVOKE CONNECT FROM PUBLIC;`? \n\n¿Y qué ocurre con las sesiones que en ese mismo instante están activas?",
    "options": [
      "Se desconectan todos de golpe (kill de sesiones activas).",
      "No le pasa nada a nadie porque PUBLIC no es un rol.",
      "Revoca el derecho de conectarse a todos los usuarios de la base (presentes y futuros). Sin embargo, el efecto en sesiones actuales NO es instantáneo; surtirá efecto solo para nuevos logins o reconexiones.",
      "Destruye las tablas del sistema de seguridad."
    ],
    "correct": 2,
    "justification": "PUBLIC engloba a todos. Revocar CONNECT implica que nadie más puede entrar. Pero las revocaciones de ROLES no tienen un impacto en vivo en la sesión en curso (a diferencia de la revocación directa de privilegios de tablas, que es inmediata). Sólo se aplica en el próximo intento de logon.",
    "trap": false
  },
  {
    "category": "examen",
    "type": "multi",
    "question": "**[Examen 11-07-2022 P5] MVCC con Marcas**\n\n$M(T_i)=i$. Inicialmente tenemos en base de datos:\n- **A1** = 20 (ML=4, ME=1)\n- **A2** = 30 (ML=7, ME=6)\n\nLlegan las siguientes operaciones en orden estricto:\n1. T3 lee A\n2. T8 lee A\n3. T9 escribe 13 en A\n4. T3 escribe 25 en A\n\nIndica la trazabilidad de T3 leyendo, T8 leyendo, T9 escribiendo y qué ocurre al final.",
    "options": [
      "T3 lee A1 y actualiza ML de A1. T8 lee A2 y actualiza ML a 8. T9 crea versión A3=13 (ML=9,ME=9). T3 escribe en A1 pero se aborta porque ML(A1) ya era 4 o mayor.",
      "T3 lee A2. T8 lee A1. T9 escribe encima de A2. T3 aborta.",
      "T3 lee A1 pero no actualiza ML porque 3 < 4 (ML se queda en 4). T8 lee A2 y actualiza ML a 8 (porque 8 > 7). T9 crea versión A3=13. T3 intenta escribir (accediendo a A1 por fecha) pero aborta porque M(3) < ML(4).",
      "T3 hace abort en la lectura. T8 crea nueva versión al leer. T9 y T3 escriben bien."
    ],
    "correct": 2,
    "justification": "Lectura de T3 (M=3): mira las versiones. ME<=3 es A1(ME=1). Lee A1. ¿Actualiza ML? ML actual es 4, Max(3,4)=4. Queda igual.\nLectura T8 (M=8): ME<=8 es A2(ME=6). Lee A2. ML=Max(8,7)=8.\nEscritura T9: M=9 > ML_actual(8). Crea A3=13.\nEscritura T3: intenta acceder por fecha a su bloque (ME<=3), le toca el bloque A1. ¿M(3)<ML(A1)? 3 < 4. Intenta sobreescribir algo ya leído por alguien en su futuro relativo. ROLLBACK por MVCC.",
    "trap": false
  },
  {
    "category": "examen",
    "type": "multi",
    "question": "**[Examen 11-07-2022 P6a] Recuperación con CHECKPOINT**\n\n```\n<T1, START>\n<T2, START>\n<T1, A, 10, 28>\n<T1, COMMIT>\n<T2, B, 10, 20>\n<T3, START>\n<CHECKPOINT (T2, T3)>\n<T2, COMMIT>\n<T3, B, 20, 30>\n<T3, B, 30, 33>\n... CAÍDA.\n```\n\nAsume robar y no forzar. Indica qué operaciones de UNDO y REDO son necesarias al reiniciar.",
    "options": [
      "REDO de T1 y T2. UNDO de T3.",
      "Se ignora T1 (finalizada pre-checkpoint). REDO de T2 (hizo commit post-checkpoint). UNDO de T3 (murió activa sin commit).",
      "UNDO de T1, T2 y T3.",
      "REDO de T3 y UNDO de T2."
    ],
    "correct": 1,
    "justification": "El checkpoint obliga a bajar a disco las modificaciones previas, garantizando que T1 ya es 100% estable en disco, por lo que no es necesario analizarla ni hacerle REDO. T2 se confirmó después del checkpoint: nos hace falta su REDO por seguridad (\"no forzar\"). T3 cayó sin confirmarse y pudieron \"robar\" sus páginas sucias hacia el disco: obligatorio hacerle UNDO para limpiar.",
    "trap": false
  },
  {
    "category": "examen",
    "type": "multi",
    "question": "**[Examen 2023 P1] Evolución del Esquema y Vistas**\n\nSecuencia de pasos:\n1. (u1) `CREATE VIEW vista1 AS SELECT * FROM dept WHERE deptno = 30;`\n2. (u1) `GRANT SELECT, INSERT ON vista1 TO u2;`\n3. (u1) `ALTER TABLE dept ADD phone VARCHAR(20);`\n4. (u2) `SELECT * FROM u1.vista1;`\n5. (u2) `INSERT INTO u1.vista1 VALUES (50, 'I+D', 'BOSTON');`\n\n¿Qué ocurre exactamente en los pasos 4 y 5?",
    "options": [
      "4: Muestra el campo phone. 5: Inserta correctamente y se verá en la vista.",
      "4: Falla por desincronización de esquemas. 5: Funciona a nivel de tabla.",
      "4: NO se mostrará la columna phone (las vistas se precompilan ignorando nuevas columnas añadidas con *). 5: Error (falla por validación o por intentar meter deptno=50 cuando la vista filtra deptno=30, además de desajuste de columnas en el VALUES).",
      "Todo aborta desde el paso 3 por existir dependencias."
    ],
    "correct": 2,
    "justification": "Las vistas con `SELECT *` se \"congelan\" (expanden el *) en el momento de creación, y no adoptan los alter table automágicamente. El insert falla porque faltan parámetros (la tabla ahora tiene teléfono y el VALUES solo manda 3 campos sin nombre) e incumple el where de la vista base implícitamente.",
    "trap": false
  },
  {
    "category": "examen",
    "type": "multi",
    "question": "**[Examen 2023 P2] Gestión de Privilegios**\n\nConsidera que \"admin\" es DBA.\n\na) `(admin) REVOKE PUBLIC FROM Usuario;`\nb) `(admin) GRANT CONNECT TO usuario WITH GRANT OPTION;`\n   `(usuario) REVOKE CONNECT FROM admin;`\n\nIndica si son comandos correctos y sus efectos.",
    "options": [
      "Ambos funcionan perfectamente, logrando el control buscado.",
      "a) Funciona, aislando a \"Usuario\" de los grants a PUBLIC. b) Funciona, revoca al administrador la conexión.",
      "a) ERROR: PUBLIC no es un rol asignable o revocable individualmente (todos son parte de PUBLIC implícitamente). b) ERROR: \"usuario\" no puede revocar permisos a \"admin\" si no fue quien se los asignó (GRANT Option no permite matar a tus padres, ni a administradores globales).",
      "a) Aísla toda la base de datos. b) Bloquea el sistema permanentemente."
    ],
    "correct": 2,
    "justification": "PUBLIC es una abstracción universal que no puede ser revocada de un usuario individual. Para (b), el sistema de concesión rastrea grafos en árbol: no puedes revocarle el derecho a quien te lo otorgó a ti, y mucho menos a un súper-usuario del que cuelga la rama.",
    "trap": false
  },
  {
    "category": "examen",
    "type": "multi",
    "question": "**[Examen 2026/22] Cadenas de Concesión (Cascada)**\n\n1. El administrador `T0` da a `X` y a `Y` el privilegio SELECT sobre T, indicando en los dos casos WITH GRANT OPTION.\n2. Luego `X` da a `Y` y `Z` el privilegio de SELECT.\n3. Después `Y` pasa el testigo de la cadena dando a `W` y a `X` el privilegio de SELECT.\n4. A continuación el Administrador hace: `REVOKE SELECT ON T FROM Y CASCADE;`.\n\nDespués de este castigo fatal de T0 sobre Y, ¿quién, además de `X` y de `T0`, conserva el derecho de SELECT?",
    "options": [
      "Nadie, la onda expansiva del CASCADE barrió todas las concesiones.",
      "Z únicamente.",
      "W y Z sobreviven al castigo intactos.",
      "Solo conservan T0 y X el privilegio de SELECT."
    ],
    "correct": 1,
    "justification": "Grafo de poder: T0 -> X (wGO) y T0 -> Y (wGO). X -> Y y X -> Z. Y -> W e Y -> X. \nCuando T0 revoca a Y con CASCADE, se desmorona el nodo Y y todas las ramas que partían de su poder. Y -> W muere, W se queda sin nada. Y -> X cae también, PERO a X no le importa ya que su fuente suprema T0 -> X sigue intacta. Como X sigue intacto, las ramas que nacen de X (X -> Z) siguen vivas. Por lo tanto, Z sobrevive.",
    "trap": true
  },
  {
    "category": "examen",
    "type": "multi",
    "question": "**[Examen 2022] Escaneo y Optimización en Datawarehouses**\n\nTenemos una tabla con 1 millón de registros donde la columna **B** almacena la \"Provincia\" (cientos de miles de valores repetitivos de muy baja cardinalidad). Aplicamos frecuentemente la condición `WHERE B = 'A Coruña'`.\n\nEl optimizador ignora sistemáticamente los índices convencionales B-Tree que creamos sobre esta columna. ¿Qué tipo de índice aplicarías específicamente en este caso para acelerar el filtrado masivo de forma brutal?",
    "options": [
      "Índices de tipo Bitmap Index.",
      "Un índice local con B-Tree inverso (Reverse Key).",
      "Function-based indexes de Oracle.",
      "Árboles B+ Tree compactados (Index-Organized Tables)."
    ],
    "correct": 0,
    "justification": "El Bitmap Index es el rey absoluto en BD analíticas (OLAP) para atributos de baja cardinalidad (ej. Nacionalidad, Provincia, Género). El B-Tree se colapsa intentando listar cientos de miles de ROWIDs dispersos (obligando a hacer Table Access By Index Rowid millones de veces). El Bitmap comprime los datos en máscaras de bits, resolviendo todo con operaciones bitwise súper rápidas en memoria.",
    "trap": false
  },
  {
    "category": "examen",
    "type": "multi",
    "question": "**[Examen Concurrencia 2026/22] Timestamp Ordering Estricto**\n\nTenemos dos objetos, con los siguientes Timestamp de base ($ML$=MarcaLectura, $ME$=MarcaEscritura): \n- **A1** = 10 (ML=5, ME=2)\n- **A2** = 20 (ML=9, ME=7)\n\nRecibimos las siguientes instrucciones en este orden cronológico (el subíndice es su marca temporal, $M(T_4)=4$):\n1. `READ A1` en **T4**\n2. `WRITE A2(25)` en **T9**\n3. `WRITE A1(15)` en **T13**\n4. `WRITE A2(30)` en **T4**\n5. `READ A1` en **T6**\n\n¿Qué va a suceder inevitablemente en la ejecución de estas órdenes?",
    "options": [
      "Se ejecutan felizmente todas las transacciones con la regla clásica.",
      "T4 lee A1 con éxito. T9 escribe A2 con éxito. T13 escribe A1 con éxito. En el paso 4, T4 aborta fatalmente (ROLLBACK) al intentar escribir en A2.",
      "En el paso 4, se aplicaría la regla de Thomas y se ignoraría la escritura de T4 sin tirarlo atrás con error.",
      "T4 lee A1. T9 escribe A2. T13 aborta. T4 y T6 finalizan bien."
    ],
    "correct": 1,
    "justification": "[1º] T4 READ A1 (M=4 > ME=2) -> Lee y NO sube ML (max 5, 4 = 5). \n[2º] T9 WRITE A2 (M=9 > ML=9 y ME=7) -> Escribe, ME pasa a 9. \n[3º] T13 WRITE A1 (M=13 > ML=5 y ME=2) -> Escribe, ME pasa a 13. \n[4º] T4 WRITE A2 (M=4 < ML=9 de A2). Intenta escribir algo ya leído por alguien del futuro (T9 o anterior). T4 causa un fallo fatal y sufre ROLLBACK absoluto. La Regla de Thomas solo te salva de $M(T) < ME$, no de $M(T) < ML$.",
    "trap": true
  },
  {
    category: 'examen',
    type: 'multi',
    question: '**EJERCICIO DE SIMULACIÓN MVCC (Control de Concurrencia Multiversión)**\n\nConsidere que el SGBD utiliza un mecanismo MVCC puro (sin bloqueos para las lecturas) tal y como se explica en teoría. Inicialmente tenemos las siguientes tuplas y versiones:\n\n*   Tupla **X** con valor `100` (Creada por T0, ML=5, ME=2)\n*   Tupla **Y** con valor `200` (Creada por T0, ML=8, ME=4)\n\nA continuación, llegan las siguientes operaciones al planificador en este orden temporal estricto:\n\n1.  `r7(X)` (La transacción T7 lee X)\n2.  `w9(Y, 250)` (La transacción T9 escribe Y)\n3.  `r6(Y)` (La transacción T6 lee Y)\n4.  `w4(X, 150)` (La transacción T4 intenta escribir X)\n\nIndique cuál es el estado final de las marcas temporales (ML, ME) de las versiones originales, y si alguna transacción sufre Rollback.',
    options: [
      'X(ML=7, ME=2). Y(ML=8, ME=4). Se crea nueva versión de Y(ME=9). T6 lee la versión original de Y y actualiza su ML a 8. T4 sufre Rollback porque su M(T) < ML(X).',
      'X(ML=7, ME=2). Y(ML=8, ME=4). Se crea nueva versión de Y(ME=9). T6 lee la nueva versión de Y y actualiza su ML a 9. T4 sobreescribe la versión original de X.',
      'X(ML=7, ME=2). Y(ML=8, ME=4). Se crea nueva versión de Y(ME=9). T6 lee la versión de T0 de Y y no actualiza ML porque 6 < 8. T4 sufre Rollback porque 4 < 7.',
      'T9 sufre Rollback porque 9 > 8. T4 sobreescribe X.'
    ],
    correct: 2,
    justification: 'Paso 1: r7(X). M(T7)=7. 7 > ML=5, luego ML de X pasa a 7. X queda (ML=7, ME=2).\nPaso 2: w9(Y). M(T9)=9. 9 > ML(Y)=8 y 9 > ME(Y)=4. Se crea nueva versión de Y con ME=9, valor=250.\nPaso 3: r6(Y). M(T6)=6. T6 busca la versión con mayor ME que sea <= 6. La versión nueva tiene ME=9 (muy futura). Lee la antigua (ME=4). El ML original es 8. Como 6 < 8, no actualiza el ML.\nPaso 4: w4(X). M(T4)=4. El ML de X es 7 (puesto por T7). Al intentar escribir, como 4 < ML(X)=7, significa que T7 ya leyó un valor que T4 debería haber escrito "en el pasado". Por tanto, T4 sufre ROLLBACK.',
    trap: true
  },
  {
    category: 'examen',
    type: 'multi',
    question: '**EJERCICIO DE SIMULACIÓN DE SEGURIDAD (Cadenas de Concesión)**\n\nEn Oracle, se ejecuta la siguiente secuencia de comandos por distintos usuarios:\n\n1. `SYS`: `GRANT SELECT ON TablaA TO U1 WITH GRANT OPTION;`\n2. `SYS`: `GRANT DBA TO U1 WITH ADMIN OPTION;`\n3. `U1`: `GRANT SELECT ON SYS.TablaA TO U2 WITH GRANT OPTION;`\n4. `U1`: `GRANT DBA TO U2;`\n5. `U2`: `GRANT SELECT ON SYS.TablaA TO U3;`\n6. `SYS`: `REVOKE SELECT ON TablaA FROM U1;`\n7. `SYS`: `REVOKE DBA FROM U1;`\n\n¿Cuál es el estado final de los privilegios de U2 y U3 tras esta secuencia?',
    options: [
      'U2 y U3 pierden tanto SELECT sobre TablaA como el rol DBA, ya que todo se revoca en cascada.',
      'U2 y U3 pierden SELECT sobre TablaA por cascada. Sin embargo, U2 mantiene el rol DBA porque la revocación de roles no es en cascada.',
      'U2 pierde SELECT, pero U3 lo mantiene porque U2 no tenía WITH GRANT OPTION hacia U3.',
      'La sentencia 6 da error porque no se puede revocar un privilegio que ha sido propagado sin usar la cláusula CASCADE CONSTRAINTS.'
    ],
    correct: 1,
    justification: 'En el estándar SQL y en Oracle, la revocación de **Privilegios de Objeto** (como SELECT ON Tabla) siempre se propaga en cascada. Al revocar a U1, caen U2 y U3. Sin embargo, la revocación de **Roles** o **Privilegios de Sistema** (concedidos con ADMIN OPTION) **NUNCA es en cascada**. Por tanto, al revocar DBA a U1, a U2 no se le quita el rol DBA.',
    trap: false
  },
  {
    category: 'examen',
    type: 'multi',
    question: '**EJERCICIO DE VISTAS ACTUALIZABLES**\n\nSuponga las siguientes definiciones de vistas:\n\n```sql\nCREATE VIEW Vista1 AS\nSELECT id, nombre, sueldo, departamento\nFROM Empleados\nWHERE sueldo > 2000;\n\nCREATE VIEW Vista2 AS\nSELECT id, nombre, sueldo, departamento\nFROM Vista1\nWHERE departamento = \'Ventas\'\nWITH LOCAL CHECK OPTION;\n```\n\nSe intenta ejecutar la siguiente instrucción:\n`INSERT INTO Vista2 (id, nombre, sueldo, departamento) VALUES (10, \'Ana\', 1500, \'Ventas\');`\n\n¿Qué ocurre y por qué?',
    options: [
      'Se inserta correctamente. Aunque el sueldo (1500) incumple la Vista1 (>2000), Vista2 solo tiene LOCAL CHECK OPTION y el departamento es "Ventas".',
      'Falla con error de violación de CHECK OPTION. Al heredar de Vista1, LOCAL siempre chequea todas las condiciones base.',
      'Falla con error de violación de CHECK OPTION. La vista base (Vista1) no permite sueldos menores a 2000, por lo que la inserción es bloqueada a nivel físico.',
      'Se inserta en la base de datos subyacente, pero la fila resultante será una "tupla migratoria" porque no será visible desde Vista1.'
    ],
    correct: 0,
    justification: 'Al tener WITH LOCAL CHECK OPTION, el SGBD **solo** comprueba la condición de la vista actual (`departamento = "Ventas"`), la cual se cumple. No comprueba las condiciones de las vistas subyacentes (Vista1: `sueldo > 2000`) a menos que estas tuviesen su propio CHECK OPTION. Por tanto, la inserción **tiene éxito**, y se convierte en una tupla migratoria respecto a Vista1.',
    trap: true
  },
  {
    category: 'examen',
    type: 'multi',
    question: '**EJERCICIO DE DISEÑO FÍSICO: OPTIMIZADOR CBO**\n\nSuponga una tabla `Clientes` con `bR = 10.000` bloques de datos y `nR = 100.000` tuplas.\nExiste un Índice B-Tree clustering (agrupado) sobre la columna `Provincia` con `hidx = 2`.\nHay 50 provincias distintas, y asumimos distribución uniforme.\nSe ejecuta: `SELECT * FROM Clientes WHERE Provincia = \'Madrid\';`\n\nCalcule el coste estimado usando el **Índice Agrupado**. Recuerde la fórmula de estimación de coste para acceso indexado.',
    options: [
      'Coste = 2 (solo recorrer la altura del índice).',
      'Coste = 10.000 (equivale a un Full Table Scan).',
      'Coste = 3 (hidx + 1 bloque de datos).',
      'Coste = 202 (hidx + bloques asociados al valor).'
    ],
    correct: 3,
    justification: 'Al tener distribución uniforme y 50 valores, la selectividad de "Madrid" es 1/50 = 2%. El número de registros con "Madrid" es el 2% de 100.000 = 2.000 tuplas. Al ser un **Índice Agrupado**, esos 2.000 registros están físicamente contiguos en disco. El número de bloques de datos que ocupan es el 2% de bR (10.000) = 200 bloques. El coste total es el de recorrer el índice más leer esos bloques secuenciales: hidx (2) + 200 = 202 accesos a bloque.',
    trap: false
  },
  {
    category: 'examen',
    type: 'multi',
    question: '**EJERCICIO DE INTEGRIDAD REFERENCIAL Y DISPARADORES (Triggers)**\n\nSe tiene la tabla MAESTRA (ID PK) y ESCLAVA (ID_M FK REFERENCES MAESTRA ON DELETE CASCADE).\nSe crea el siguiente Trigger en la tabla ESCLAVA en Oracle:\n\n```sql\nCREATE TRIGGER Trg_Esclava\nBEFORE DELETE ON ESCLAVA\nFOR EACH ROW\nBEGIN\n   -- Acción de registro (log)\nEND;\n```\n\n¿Qué sucede cuando se ejecuta `DELETE FROM MAESTRA WHERE ID=1;` (asumiendo que tiene registros dependientes en ESCLAVA)?',
    options: [
      'Se borra en MAESTRA, luego el motor borra en ESCLAVA por el CASCADE, y el trigger Trg_Esclava se dispara por cada fila esclava borrada.',
      'Da error de tabla mutante (ORA-04091) porque el borrado en cascada bloquea la tabla ESCLAVA.',
      'El trigger NO se dispara. Los triggers definidos por el usuario no se ejecutan cuando el evento DML ha sido desencadenado por una restricción de integridad (ON DELETE CASCADE).',
      'Se borran las filas, pero el trigger se dispara DESPUÉS del borrado en cascada, independientemente de que sea BEFORE.'
    ],
    correct: 0,
    justification: 'En Oracle, las acciones referenciales declarativas (como ON DELETE CASCADE) provocan comandos DML subyacentes que **SÍ** disparan los triggers definidos sobre la tabla hija. Como es BEFORE DELETE FOR EACH ROW, el trigger se ejecutará para cada fila de la esclava justo antes de que el motor la elimine debido a la cascada.',
    trap: true
  },
  {
    "category": "examen_2022_julio_06",
    "type": "multi",
    "question": "Queremos que los usuarios u1, u2 y u3 puedan acceder (para selecciones, inserciones y modificaciones) a varios campos de los empleados del departamento 10. ¿Cuál es la forma óptima usando SQL estándar para que sea sencillo añadir estos permisos a futuros usuarios?",
    "options": [
      "Crear una vista con los datos del departamento 10 usando WITH CHECK OPTION, crear un rol, asignarle los privilegios sobre la vista, y conceder el rol a los usuarios.",
      "Asignar directamente los privilegios GRANT SELECT, INSERT, UPDATE a los usuarios sobre la tabla EMP indicando WHERE deptno=10.",
      "Crear una vista con los datos del departamento 10 sin CHECK OPTION, y conceder permisos directamente a cada usuario.",
      "Crear un rol, asignarle los permisos sobre la tabla EMP y aplicar un trigger de tipo INSTEAD OF para restringir al departamento 10."
    ],
    "correct": 0,
    "justification": "Para que sea fácil añadir permisos a nuevos usuarios se debe crear un rol. Para asegurar que las modificaciones e inserciones solo afecten al departamento 10, es necesario crear una vista con WITH CHECK OPTION y conceder los permisos sobre ella al rol.",
    "trap": false
  },
  {
    "category": "examen_2022_julio_06",
    "type": "multi",
    "question": "¿Qué es el protocolo WAL (Write Ahead Logging), cómo funciona y por qué es necesario?",
    "options": [
      "Es un protocolo que primero vuelca el buffer de datos en el disco físico y posteriormente escribe las operaciones en el fichero de log para confirmar la transacción.",
      "Es una técnica para bloquear transacciones en conflicto, que anota anticipadamente las operaciones en memoria para prevenir interbloqueos.",
      "Es un protocolo que obliga a escribir las modificaciones en el fichero de log en disco antes de volcar el buffer de datos a disco, asegurando la recuperabilidad mediante rehacer (redo) o deshacer (undo).",
      "Es un mecanismo que guarda únicamente el estado inicial de la base de datos (undo) en un archivo separado para restaurar el sistema en caso de un error de disco."
    ],
    "correct": 2,
    "justification": "El protocolo WAL requiere que cualquier cambio sea registrado en el log antes de que el bloque de datos modificado se escriba en disco. Esto garantiza que ante una caída, la información necesaria para rehacer o deshacer las transacciones esté disponible.",
    "trap": false
  },
  {
    "category": "examen_2022_julio_06",
    "type": "multi",
    "question": "Considera la tabla EMP con clave primaria PK_EMP (EMPNO). Se definió un índice I_EMP_COMM sobre COMM, que admite nulos. ¿Qué ocurre al ejecutar la sentencia:<br><pre>SELECT /*+ INDEX (EMP I_EMP_COMM) */ COMM FROM EMP;</pre>",
    "options": [
      "Sí usa el índice I_EMP_COMM porque hay un hint /*+ INDEX */ explícito que fuerza a Oracle a usarlo independientemente de los valores nulos.",
      "No usa el índice I_EMP_COMM y realiza un escaneo completo de la tabla, porque el campo COMM admite valores nulos y estos no se guardan en el índice B-Tree convencional.",
      "Sí usa el índice I_EMP_COMM porque solo se está seleccionando la columna COMM, por lo que un escaneo rápido del índice (Fast Full Scan) es más eficiente.",
      "No usa el índice I_EMP_COMM, sino que usa el índice asociado a la clave primaria (PK_EMP) para recorrer los registros ordenadamente y extraer COMM."
    ],
    "correct": 1,
    "justification": "Como la columna COMM permite nulos, y los nulos no se indexan en un B-Tree convencional de Oracle, el índice no contiene todos los registros de la tabla. Por tanto, Oracle no puede resolver la consulta leyendo solo el índice y hará un Full Table Scan ignorando el hint.",
    "trap": false
  },
  {
    "category": "examen_2022_julio_06",
    "type": "multi",
    "question": "Considera la tabla EMP con clave primaria PK_EMP (EMPNO). Se definió un índice I_EMP_SAL sobre SAL, que admite nulos. ¿Qué ocurre al ejecutar la sentencia:<br><pre>SELECT MAX (SAL) FROM EMP;</pre>",
    "options": [
      "No usa índices y hace un Full Table Scan, ya que al admitir nulos el campo SAL, el optimizador no puede garantizar obtener el máximo sin revisar todos los registros.",
      "Sí usa el índice I_EMP_SAL, buscando eficientemente el valor máximo no nulo directamente en el extremo derecho del índice B-Tree.",
      "Sí usa el índice I_EMP_SAL pero realizando un Full Index Scan para evaluar todos los valores y aplicar la función de agregación MAX en memoria.",
      "Sí usa el índice PK_EMP, ya que al ser la clave primaria ofrece el acceso más rápido, y desde ahí evalúa el salario de todos los empleados."
    ],
    "correct": 1,
    "justification": "Para funciones como MAX o MIN, Oracle aprovecha el índice leyendo directamente el último o primer bloque (Index Full Scan Min/Max), resultando muy eficiente incluso si la columna admite nulos, puesto que no afectan a la búsqueda del máximo.",
    "trap": false
  },
  {
    "category": "examen_2022_julio_06",
    "type": "multi",
    "question": "Con las tablas MAESTRA `(10, ES)` y ESCLAVA (donde K1, K2 es clave foránea hacia MAESTRA):<br>Fila 1: `(1, NULL, GL)`<br>Fila 2: `(2, 10, NULL)`<br>Fila 3: `(3, 10, ES)`<br>¿Qué filas de ESCLAVA son válidas según los tipos de MATCH de la clave foránea?",
    "options": [
      "MATCH SIMPLE: 3. MATCH PARTIAL: 2, 3. MATCH FULL: 1, 2, 3.",
      "MATCH SIMPLE: 1, 2, 3. MATCH PARTIAL: 1, 2. MATCH FULL: 3.",
      "MATCH SIMPLE: 2, 3. MATCH PARTIAL: 3. MATCH FULL: 1, 3.",
      "MATCH SIMPLE: 1, 2, 3. MATCH PARTIAL: 2, 3. MATCH FULL: 3."
    ],
    "correct": 3,
    "justification": "MATCH SIMPLE: todo nulo lo hace válido (1,2,3). MATCH PARTIAL: los no nulos deben coincidir, falla la fila 1 por 'GL' (2,3). MATCH FULL: no permite mezclar nulos y no nulos (solo 3).",
    "trap": false
  },
  {
    "category": "examen_2022_julio_06",
    "type": "multi",
    "question": "Con ordenación por marcas de tiempo y regla de Thomas (M(T1)=1, M(T2)=2, M(T3)=3). Inicialmente ML(B)=0, ME(B)=0.<br>Instante 2: T3 hace Write(B)<br>Instante 3: T1 hace Write(B)<br>Instante 7: T2 hace Read(B)<br>¿Cuál es el resultado en los instantes 3 y 7?",
    "options": [
      "Instante 3: La escritura de T1 falla y hace rollback. Instante 7: T2 lee correctamente la versión escrita por T3.",
      "Instante 3: La escritura de T1 se ignora (por Thomas). Instante 7: T2 falla y hace rollback al intentar leer un dato con ME=3.",
      "Instante 3: La escritura de T1 sobrescribe el valor de T3 actualizando ME a 1. Instante 7: T2 lee exitosamente el valor porque M(T2) > ME(B).",
      "Instante 3: La escritura de T1 se ignora. Instante 7: T2 lee exitosamente el valor descartando la lectura de ME."
    ],
    "correct": 1,
    "justification": "Instante 2: T3 escribe (ME=3). Instante 3: T1 (M=1) intenta escribir; como 1 < ME(B)=3, por Thomas se ignora. Instante 7: T2 (M=2) intenta leer; como 2 < ME(B)=3, es una lectura tardía y hace rollback.",
    "trap": false
  },
  {
    "category": "examen_2022_julio_06",
    "type": "multi",
    "question": "Dado el siguiente log con entradas &lt;Ti, X, old, new&gt;:<br><pre>&lt;T1, START&gt;\n&lt;T2, START&gt;\n&lt;T1, A, 10, 23&gt;\n&lt;T1, COMMIT&gt;\n&lt;T2, B, 10, 25&gt;\n&lt;T3, START&gt;\n&lt;T2, COMMIT&gt;\n&lt;T3, B, 25, 33&gt;\n&lt;T3, B, 33, 27&gt;</pre><br>Tras producirse una caída al final, ¿a qué tipo de sistema corresponde y qué se hace para recuperar?",
    "options": [
      "Actualizaciones diferidas. Se debe hacer redo(T1), redo(T2) e ignorar T3.",
      "Actualizaciones inmediatas. Se debe hacer undo(T1), undo(T2) y redo(T3).",
      "Actualizaciones inmediatas. Se debe hacer redo(T1), redo(T2) y undo(T3).",
      "Actualizaciones diferidas. Se debe hacer redo(T1), redo(T2) y undo(T3)."
    ],
    "correct": 2,
    "justification": "Es un sistema de actualizaciones inmediatas (guarda valor antiguo y nuevo). Se deben rehacer (redo) las transacciones confirmadas con COMMIT (T1 y T2) y deshacer (undo) las que no llegaron a confirmar (T3).",
    "trap": false
  },
  {
    "category": "examen_2022_julio_06",
    "type": "multi",
    "question": "¿Qué es una restricción aplazable (DEFERRABLE) en SQL y cuándo es indispensable su uso?",
    "options": [
      "Es una restricción que se comprueba antes de ejecutar cada instrucción DML y es indispensable para mantener el rendimiento en consultas con muchas uniones.",
      "Es una restricción que solo se aplica si la transacción contiene un ROLLBACK, siendo útil para deshacer cambios masivos en vistas materializadas.",
      "Es una restricción cuya comprobación se pospone hasta el momento del COMMIT. Es indispensable cuando existen ciclos referenciales o claves foráneas cruzadas con NOT NULL.",
      "Es una restricción de integridad de dominio que permite la inserción de valores temporales nulos y se evalúa periódicamente mediante un demonio en segundo plano."
    ],
    "correct": 2,
    "justification": "Las restricciones DEFERRABLE permiten saltarse temporalmente la comprobación de integridad, validándose al hacer COMMIT. Son fundamentales para resolver bucles generados por dependencias circulares.",
    "trap": false
  },
  {
    "category": "examen_2022_julio_06",
    "type": "multi",
    "question": "En la optimización de árboles de álgebra relacional, ¿qué objetivo persiguen la REGLA 5 y 7 al procesar consultas?",
    "options": [
      "Se sustituyen los productos cartesianos por reuniones naturales (REGLA 5) y se agrupan las selecciones en una única operación compleja en la raíz (REGLA 7).",
      "Se aplican índices en los campos de filtrado (REGLA 5) y se eliminan las operaciones de proyección dejando solo el SELECT final (REGLA 7).",
      "Se descienden las selecciones sobre los atributos para filtrarlos de forma monádica sobre las relaciones base (REGLA 5) y se introducen proyecciones intermedias para descartar atributos redundantes antes del cruce (REGLA 7).",
      "Se descienden las funciones de agregación hacia las relaciones base (REGLA 5) y se sustituyen todos los productos cartesianos por selecciones cruzadas (REGLA 7)."
    ],
    "correct": 2,
    "justification": "La Regla 5 convierte las selecciones sobre productos cartesianos en reuniones, permitiendo bajar los filtros unarios. La Regla 7 inserta proyecciones (π) intermedias para descartar de memoria los atributos que ya no van a ser necesarios.",
    "trap": false
  },
  {
    "category": "examen_2022_julio_11",
    "type": "multi",
    "question": "Considera la vista `vista1`:<br><pre>CREATE VIEW vista1 AS\nSELECT DISTINCT empno, ename, sal+comm, hiredate\nFROM emp\nWHERE deptno = 30;</pre><br>¿Se crea la vista? ¿Es actualizable? ¿Permitiría la inserción de filas migratorias?",
    "options": [
      "Se crea sin problemas. No es actualizable. Permite la inserción de filas migratorias.",
      "Da error al crearla porque contiene una expresión aritmética (sal+comm) sin un alias.",
      "Se crea sin problemas. Es actualizable. No permite filas migratorias porque tiene la cláusula DISTINCT.",
      "Se crea sin problemas. No es actualizable. No permite filas migratorias por defecto."
    ],
    "correct": 0,
    "justification": "Se crea sin problemas. No es actualizable ya que tiene una cláusula de filtrado de repetidos (DISTINCT). Por otra parte, sí que permite la inserción de filas migratorias porque no tiene la opción de CHECK OPTION especificada.",
    "trap": false
  },
  {
    "category": "examen_2022_julio_11",
    "type": "multi",
    "question": "Considera la vista `vista2` (asumiendo que `emps_depto10` ya existe):<br><pre>CREATE VIEW vista2 AS\nSELECT empno, ename, sal, job\nFROM emps_depto10\nWHERE sal > 4000\nWITH LOCAL CHECK OPTION;</pre><br>¿Se crea la vista? ¿Es actualizable? ¿Permitiría la inserción de filas migratorias?",
    "options": [
      "Se crea sin problema. Es actualizable. Podría generar filas migratorias respecto a la vista base `emps_depto10`.",
      "Da error al crearla porque `WITH LOCAL CHECK OPTION` no se puede aplicar si la vista base no la tiene.",
      "Se crea sin problema. Es actualizable. No permite ningún tipo de filas migratorias gracias al `WITH LOCAL CHECK OPTION`.",
      "Se crea sin problema. No es actualizable por depender de otra vista."
    ],
    "correct": 0,
    "justification": "Se crearía sin problema y sería actualizable. No existirían filas migratorias de forma local, pero si insertásemos un empleado con sueldo > 4000 de otro departamento, la vista lo permitiría y originaría una fila migratoria respecto a la vista base `emps_depto10`.",
    "trap": true
  },
  {
    "category": "examen_2022_julio_11",
    "type": "multi",
    "question": "¿Qué pasaría si un usuario con el rol ABD ejecutase la sentencia `REVOKE CONNECT FROM PUBLIC;` en Oracle y qué ocurre con los usuarios que ya están conectados?",
    "options": [
      "Revoca el rol CONNECT a todos los usuarios. No es instantáneo para los conectados, se hará efectivo en nuevas sesiones o al ejecutar SET ROLE ALL.",
      "Da un error de privilegios, ya que PUBLIC no es un rol revocable por un usuario genérico, solo por SYS.",
      "Revoca el rol CONNECT a todos los usuarios y cierra inmediatamente las sesiones de los usuarios conectados.",
      "Revoca el rol CONNECT solo a los usuarios sin privilegios administrativos. Los usuarios conectados no notan ningún cambio hasta reiniciar la base de datos."
    ],
    "correct": 0,
    "justification": "Causa la revocación del rol a todos los usuarios, dado que PUBLIC engloba a todos los usuarios. No afecta a las sesiones presentes de inmediato; lo hará en cuanto intenten revalidar sus roles en nuevas sesiones o usando SET ROLE ALL.",
    "trap": false
  },
  {
    "category": "examen_2022_julio_11",
    "type": "multi",
    "question": "Considera la tabla EMP con un índice I_EMP_COMM sobre el campo COMM. ¿Utilizará Oracle el índice para ejecutar la siguiente sentencia?<br><pre>SELECT /*+ INDEX (EMP I_EMP_COMM) */ DISTINCT (COMM)\nFROM EMP;</pre>",
    "options": [
      "No se utilizará el índice porque en Oracle los valores nulos no se incluyen en los índices B-Tree normales y el DISTINCT requiere agruparlos.",
      "Sí, se utilizará obligatoriamente debido a la presencia del hint `/*+ INDEX ... */` que fuerza su uso bajo cualquier circunstancia.",
      "No, porque los índices no pueden utilizarse cuando se incluye la cláusula DISTINCT en la consulta SQL.",
      "Sí, se utilizará el índice ya que el optimizador detecta que el escaneo del índice es más eficiente que el escaneo completo de la tabla."
    ],
    "correct": 0,
    "justification": "El DISTINCT agrupa los valores, por lo que los nulos se agrupan en una única fila. En Oracle, los nulos no se incluyen en los índices B-Tree normales, así que no se usará el índice a pesar del hint.",
    "trap": true
  },
  {
    "category": "examen_2022_julio_11",
    "type": "multi",
    "question": "Considera la tabla EMP con un índice I_EMP_SAL sobre el campo SAL. ¿Utilizará Oracle el índice para ejecutar la siguiente sentencia?<br><pre>SELECT AVG(SAL)\nFROM EMP;</pre>",
    "options": [
      "Sí, utilizará el índice I_EMP_SAL para optimizar el cálculo de agregación sobre los valores no nulos.",
      "No, porque para calcular la media aritmética (AVG) es necesario acceder a todas las columnas de la fila para verificar la concurrencia.",
      "Sí, pero sólo si se añade un hint explícito en la consulta indicando el uso forzado de I_EMP_SAL.",
      "No, porque los índices B-Tree solo sirven para cláusulas WHERE o ORDER BY, no para funciones de agregación como AVG."
    ],
    "correct": 0,
    "justification": "El campo SAL puede contener nulos, pero como se realiza un AVG, Oracle usará el índice para optimizar la agregación de los valores no nulos.",
    "trap": false
  },
  {
    "category": "examen_2022_julio_11",
    "type": "multi",
    "question": "Dadas las tablas MAESTRA(K1,K2) con la fila (5,TR) y ESCLAVA(ID,K1,K2) con filas (1,NULL,GL), (2,5,NULL), (3,5,TR). Sabiendo que (K1,K2) en ESCLAVA referencia a MAESTRA, ¿qué filas de ESCLAVA serían válidas según la cláusula MATCH?",
    "options": [
      "FULL: (3) válida. PARTIAL: (2,3) válidas. SIMPLE: (1,2,3) válidas.",
      "FULL: (3) válida. PARTIAL: (3) válida. SIMPLE: (1,2,3) válidas.",
      "FULL: (1,2,3) válidas. PARTIAL: (2,3) válidas. SIMPLE: (3) válida.",
      "FULL: (3) válida. PARTIAL: (1,2,3) válidas. SIMPLE: (1,2,3) válidas."
    ],
    "correct": 0,
    "justification": "FULL: requiere que ambos componentes sean no nulos (y referencien la maestra) o que todos sean nulos, por tanto solo (3) es válida. PARTIAL: (2) tiene '5', que está en MAESTRA, y (3) es válida por completo. SIMPLE: basta con un nulo para que sea válida (1,2), más la coincidencia completa (3).",
    "trap": false
  },
  {
    "category": "examen_2022_julio_11",
    "type": "multi",
    "question": "En un control de concurrencia multiversión ($M(T_i) = i$), con las versiones de A: $A_1=20$ (ME=1, ML=4) y $A_2=30$ (ME=6, ML=7). Si la transacción $T_3$ lee A, ¿qué ocurre?",
    "options": [
      "T3 lee $A_1 = 20$. Las marcas no cambian: $A_1$ (ME=1, ML=4) y $A_2$ (ME=6, ML=7).",
      "T3 lee $A_1 = 20$. Se actualiza la marca de lectura: $A_1$ (ME=1, ML=3) y $A_2$ (ME=6, ML=7).",
      "T3 no puede leer A porque su marca es menor que el ML de $A_1$, produciendo un rollback.",
      "T3 lee $A_2 = 30$ porque es la versión más reciente del dato y se asume dirty read."
    ],
    "correct": 0,
    "justification": "M(T3)=3, así que busca la versión con ME <= 3, que es A1. Como 3 no supera el ML actual (4), lee A1 sin modificar marcas.",
    "trap": false
  },
  {
    "category": "examen_2022_julio_11",
    "type": "multi",
    "question": "Con el estado de versiones $A_1=20$ (ME=1, ML=4) y $A_2=30$ (ME=6, ML=7), la transacción $T_8$ lee A. ¿Qué ocurre?",
    "options": [
      "T8 lee $A_2 = 30$. Se actualiza la marca de lectura de $A_2$ a ML=8.",
      "T8 lee $A_2 = 30$. Las marcas no cambian porque la lectura no afecta las marcas en multiversión.",
      "T8 no puede leer A porque la marca de lectura de $A_2$ es 7, produciéndose un conflicto.",
      "T8 lee $A_1 = 20$ porque $A_2$ aún no está consolidada al ser ML=7."
    ],
    "correct": 0,
    "justification": "M(T8)=8, así que la versión con ME <= 8 es A2 (ME=6). Como 8 > ML(A2) (7), se actualiza el ML de A2 a 8.",
    "trap": false
  },
  {
    "category": "examen_2022_julio_11",
    "type": "multi",
    "question": "Con el estado de versiones de A actualizadas: $A_1=20$ (ME=1, ML=4) y $A_2=30$ (ME=6, ML=8), la transacción $T_9$ intenta escribir el valor 13 en A. ¿Qué ocurre?",
    "options": [
      "Se permite la escritura y crea una nueva versión $A_3=13$ con ME=9 y ML=9.",
      "Se sobrescribe el valor de $A_2$, cambiando su valor a 13 y actualizando su ME a 9.",
      "Se deniega la escritura y $T_9$ hace rollback porque existe una lectura de T8 con ML=8.",
      "Se permite la escritura creando $A_3=13$, pero se descarta la versión $A_1$ ya que queda obsoleta."
    ],
    "correct": 0,
    "justification": "Como M(T9)=9 y es mayor que el ML de la versión más reciente (8), se permite la escritura y crea la nueva versión A3=13.",
    "trap": false
  },
  {
    "category": "examen_2022_julio_11",
    "type": "multi",
    "question": "Con las versiones $A_1=20$ (ME=1, ML=4), $A_2=30$ (ME=6, ML=8) y $A_3=13$ (ME=9, ML=9), la transacción $T_3$ intenta escribir el valor 25 en A. ¿Qué ocurre?",
    "options": [
      "La operación se deniega porque M(T3)=3 es menor que el ML(A1)=4. T3 hace rollback.",
      "Se crea una versión intermedia $A_{intermedia}=25$ con ME=3 y ML=3 reordenando el histórico.",
      "Se permite la escritura actualizando en el sitio el valor de $A_1$ a 25.",
      "La operación se encola esperando a que el dato A se libere de bloqueos de lectura de T4 y T8."
    ],
    "correct": 0,
    "justification": "T3 intentaría escribir basándose en A1, pero como su marca M(T3)=3 es menor que lecturas posteriores ya realizadas sobre A1 (ML=4), la operación se deniega para evitar anomalías. T3 hace rollback.",
    "trap": true
  },
  {
    "category": "examen_2022_julio_11",
    "type": "multi",
    "question": "Dado un log de recuperación: <br><pre>&lt;T1, START&gt;\n&lt;T2, START&gt;\n&lt;T1, A, 10, 28&gt;\n&lt;T1, COMMIT&gt;\n&lt;T2, B, 10, 20&gt;\n&lt;T3, START&gt;\n&lt;CHECKPOINT (T2, T3)&gt;\n&lt;T2, COMMIT&gt;\n&lt;T3, B, 20, 30&gt;\n&lt;T3, B, 30, 33&gt;</pre><br>Tras una caída, ¿qué tipo de sistema es y qué se hace para recuperarlo (Robar, No forzar)?",
    "options": [
      "Actualizaciones inmediatas. Se ignora T1, se aplica redo(T2) y undo(T3).",
      "Actualizaciones diferidas. Se ignora T1 y T3, se aplica redo(T2).",
      "Actualizaciones inmediatas. Se aplica undo(T1), redo(T2) y undo(T3).",
      "Actualizaciones diferidas. Se aplica redo(T1), redo(T2) y undo(T3)."
    ],
    "correct": 0,
    "justification": "Son inmediatas porque guardan el valor antes y después. T1 se ignora porque consolidó antes del checkpoint. T2 hizo commit tras el checkpoint, requiere redo. T3 no hizo commit, requiere undo.",
    "trap": false
  },
  {
    "category": "examen_2022_julio_11",
    "type": "multi",
    "question": "¿Qué es una restrición aplazable (DEFERRABLE) y en qué situación clásica se hace estrictamente necesario su uso?",
    "options": [
      "Permite posponer su comprobación al momento del COMMIT (DEFERRED). Es necesaria para poder insertar los primeros registros cuando hay ciclos referenciales entre dos o más tablas.",
      "Es una restrición que sólo se evalúa si el administrador lanza un comando de revalidación manual. Se usa para evitar cuellos de botella en la inserción masiva.",
      "Permite deshabilitar la integridad referencial de forma temporal durante la carga de un backup sin generar bloqueos en el diccionario de datos.",
      "Es un tipo especial de restricción a nivel de vista materializada que no se valida de manera síncrona en la base subyacente."
    ],
    "correct": 0,
    "justification": "Las restricciones DEFERRABLE permiten esperar al momento de confirmar la transacción (COMMIT) para verificar la validez, mediante el estado DEFERRED. Su uso clásico es romper ciclos referenciales entre tablas.",
    "trap": false
  },
  {
    "category": "examen_2022_julio_11",
    "type": "multi",
    "question": "A partir de la siguiente información de un plan de ejecución de Oracle:<br><pre>2 | HASH GROUP BY\n3 | MERGE JOIN\n4 | TABLE ACCESS BY INDEX ROWID (EMP)\n5 | INDEX FULL SCAN (PK_DEPT)\n6 | SORT JOIN\n7 | TABLE ACCESS FULL (EMP)\nPredicate Information:\n1 - filter(COUNT(*)&gt;3)\n6 - access(\"EMP\".\"DEPTNO\"=\"DEPT\".\"DEPTNO\")</pre><br>¿Qué sentencia SQL generaría este plan?",
    "options": [
      "SELECT e.deptno, d.dname, COUNT(*) FROM emp e JOIN dept d ON e.deptno = d.deptno GROUP BY e.deptno, d.dname HAVING COUNT(*) > 3;",
      "SELECT e.deptno, COUNT(*) FROM emp e WHERE e.deptno IN (SELECT deptno FROM dept) GROUP BY e.deptno HAVING COUNT(*) > 3;",
      "SELECT d.dname, COUNT(*) FROM dept d WHERE COUNT(*) > 3 GROUP BY d.dname;",
      "SELECT e.deptno, d.dname, COUNT(*) FROM emp e, dept d WHERE e.deptno = d.deptno AND COUNT(*) > 3 GROUP BY e.deptno, d.dname;"
    ],
    "correct": 0,
    "justification": "El plan de ejecución muestra un JOIN (MERGE JOIN) entre EMP y DEPT (a través del INDEX FULL SCAN de PK_DEPT). Luego hace un HASH GROUP BY y por último filtra por `COUNT(*) > 3` (HAVING).",
    "trap": true
  },
  {
    "category": "examen_2023",
    "type": "multi",
    "question": "Considera las siguientes sentencias SQL:<br><pre>1. (u1) CREATE VIEW vista1 AS SELECT * FROM dept WHERE deptno = 30;\n2. (u1) GRANT SELECT, INSERT ON vista1 TO u2;\n3. (u1) ALTER TABLE dept ADD phone VARCHAR(20);\n4. (u2) SELECT * FROM u1.vista1;</pre><br>¿Qué ocurre exactamente en la sentencia 4?",
    "options": [
      "Se mostrarán todas las columnas originales de la tabla `dept`, exceptuando la nueva columna `phone`.",
      "Se mostrarán todas las columnas incluyendo `phone`, con valor NULL para las filas anteriores.",
      "La sentencia producirá un error de compilación porque la vista quedó invalidada al alterar la tabla base.",
      "Se mostrarán todas las columnas incluyendo `phone`, pero el usuario u2 necesita permisos adicionales sobre la tabla modificada."
    ],
    "correct": 0,
    "justification": "La vista es un objeto precompilado que solo conoce los atributos de la tabla en el momento exacto en el que fue creada. Por tanto, no reflejará las columnas añadidas posteriormente con ALTER TABLE.",
    "trap": true
  },
  {
    "category": "examen_2023",
    "type": "multi",
    "question": "Considera las siguientes sentencias SQL:<br><pre>1. (u1) CREATE VIEW vista1 AS SELECT * FROM dept WHERE deptno = 30;\n2. (u1) GRANT SELECT, INSERT ON vista1 TO u2;\n3. (u1) ALTER TABLE dept ADD phone VARCHAR(20);\n5. (u2) INSERT INTO u1.vista1 VALUES (50, 'I+D', 'BOSTON');</pre><br>¿Qué ocurre exactamente en la sentencia 5?",
    "options": [
      "La fila se insertará en la tabla base y `phone` tomará el valor por defecto, aunque no se pueda ver desde la vista.",
      "Producirá un error de validación únicamente porque el valor 50 viola la condición implícita `deptno = 30` de la vista.",
      "Se rechazará porque `u2` sólo tiene permisos sobre `vista1` en su versión original y no en la versión alterada.",
      "Producirá un fallo de compilación de la consulta por la discrepancia en el número de atributos al usar un INSERT genérico (VALUES) sin especificar las columnas."
    ],
    "correct": 3,
    "justification": "Al mapear un INSERT genérico (`VALUES`) sin especificar columnas sobre una tabla modificada estructuralmente, la discrepancia en el número de atributos provocará un fallo de compilación. Si se hubieran especificado las columnas, fallaría igualmente por validación o el registro 'desaparecería'.",
    "trap": true
  },
  {
    "category": "examen_2023",
    "type": "multi",
    "question": "Si el usuario `admin` tiene el rol global de `DBA`, ¿cuál es la validez y el efecto de la siguiente sentencia?<br><pre>(admin) REVOKE PUBLIC FROM Usuario;</pre>",
    "options": [
      "Revocará todos los privilegios públicos del usuario, dejándolo solo con sus permisos específicos.",
      "No es posible ejecutarlo, ya que PUBLIC no es un rol otorgable ni revocable individualmente, sino un pseudo-rol que representa a todos.",
      "La sentencia es válida pero no tiene efecto si el usuario tiene privilegios heredados por otros roles globales.",
      "Es válida y se ejecutará correctamente, pero el usuario mantendrá el permiso CONNECT por defecto."
    ],
    "correct": 1,
    "justification": "No es posible ejecutarlo. `PUBLIC` no es un rol otorgable ni revocable individualmente; es un pseudo-rol o identificador de autorización especial que representa automáticamente a absolutamente todos los usuarios.",
    "trap": false
  },
  {
    "category": "examen_2023",
    "type": "multi",
    "question": "Si el usuario `admin` tiene el rol global de `DBA`, ¿cuál es el efecto de las siguientes acciones secuenciales?<br><pre>1. (admin) GRANT CONNECT TO usuario WITH GRANT OPTION;\n2. (usuario) REVOKE CONNECT FROM admin;</pre>",
    "options": [
      "La sentencia 1 funciona, pero la sentencia 2 dará error porque un usuario común no puede revocar privilegios sobre un administrador si él no fue quien se los concedió.",
      "Ambas sentencias funcionan correctamente; `admin` perderá el rol `CONNECT` pero mantendrá sus privilegios `DBA`.",
      "La sentencia 1 dará error porque el rol `CONNECT` no se puede otorgar con `WITH GRANT OPTION` al ser un rol de sistema.",
      "Ambas sentencias se ejecutan sin error, pero la revocación no tiene efecto sobre `admin` debido a su rol global `DBA`."
    ],
    "correct": 0,
    "justification": "Un usuario común no puede revocar privilegios sobre un administrador si él no fue quien se los concedió originalmente, independientemente del `WITH GRANT OPTION`.",
    "trap": true
  },
  {
    "category": "examen_2023",
    "type": "multi",
    "question": "En un plan de ejecución con control de concurrencia por marcas de tiempo (Regla de Thomas), las marcas iniciales del ítem B son ML(B)=0, ME(B)=0. <br>Si en el instante 2, T3 ejecuta `Write(B)` y luego, en el instante 3, T1 ejecuta `Write(B)`, ¿qué ocurre en el instante 3? (Asume M(Ti)=i)",
    "options": [
      "La escritura se ejecuta normalmente sobreescribiendo el valor de T3 y actualizando ME(B) = 1.",
      "Se produce un FALLO y T1 debe abortar y reiniciarse, ya que no puede escribir un ítem modificado por una transacción posterior.",
      "Se ignora la escritura por la Regla de Thomas sin abortar T1, ya que intenta escribir un valor más antiguo que el consolidado por T3 (M(T1) < ME(B)).",
      "La escritura de T1 queda en espera (bloqueada) hasta que T3 confirme su transacción mediante un COMMIT."
    ],
    "correct": 2,
    "justification": "Como M(T1) = 1 < ME(B) = 3, se está intentando escribir un valor más antiguo que el ya consolidado por T3. La transacción T1 no aborta, simplemente omite la escritura por la Regla de Thomas.",
    "trap": true
  },
  {
    "category": "examen_2023",
    "type": "multi",
    "question": "En un plan con control de concurrencia por marcas de tiempo, tras varias operaciones, las marcas del ítem B son: ML(B)=0, ME(B)=3. ¿Qué ocurre en el instante 7 cuando T2 ejecuta `Read(B)`? (Asume M(Ti)=i)",
    "options": [
      "La lectura es válida, ya que M(T2) > ML(B), y se actualiza ML(B) a 2.",
      "Se lee el valor anterior modificado por T1 usando el control multiversión y T2 continúa sin abortar.",
      "La transacción T2 queda en espera hasta que T3 realice el COMMIT o ROLLBACK de la escritura sobre B.",
      "Se produce un FALLO y T2 se aborta (Rollback), ya que intenta leer una versión de B modificada por una transacción más nueva (T3)."
    ],
    "correct": 3,
    "justification": "Como M(T2) = 2 < ME(B) = 3, la transacción T2 intenta leer una versión de B que fue escrita 'en el futuro' por T3. Por tanto, T2 aborta y se reiniciará.",
    "trap": true
  },
  {
    "category": "examen_2023",
    "type": "multi",
    "question": "En un plan con control de concurrencia por marcas de tiempo, las marcas del ítem C son: ML(C)=3, ME(C)=0. ¿Qué ocurre en el instante 8 cuando T1 ejecuta `Write(C)`? (Asume M(Ti)=i)",
    "options": [
      "Se produce un FALLO y T1 se aborta (Rollback), porque intenta escribir un registro que ya ha sido leído por una transacción más reciente (T3).",
      "Se aplica la Regla de Escritura de Thomas, por lo que la operación Write(C) se ignora pero T1 no aborta.",
      "La escritura es válida y se ejecuta, actualizando ME(C) a 1, ya que ninguna transacción posterior ha escrito en C.",
      "T1 aborta en cascada provocando también el aborto de T3, al invalidar la lectura previa de C que hizo T3."
    ],
    "correct": 0,
    "justification": "Como M(T1) = 1 < ML(C) = 3, T1 intenta escribir un registro que ya ha sido leído por una transacción más reciente (T3). T1 se aborta.",
    "trap": true
  },
  {
    "category": "examen_2023",
    "type": "multi",
    "question": "¿Cuál es el funcionamiento y semántica de la acción referencial `NO ACTION` en SQL (ej: `ON DELETE NO ACTION`)?",
    "options": [
      "La operación se rechaza inmediatamente devolviendo un error, siendo estrictamente equivalente a `RESTRICT` pero sin soportar transacciones aplazables.",
      "La operación se rechaza devolviendo un error de integridad referencial si se violan restricciones, pero permite que la verificación se aplace hasta el final de la transacción (DEFERRED).",
      "Si hay violación de integridad referencial, el motor de base de datos no realiza ninguna acción en la tabla hija dejando los valores huérfanos.",
      "La operación se bloquea indefinidamente hasta que los registros dependientes en la tabla hija sean actualizados o eliminados por otra transacción."
    ],
    "correct": 1,
    "justification": "A diferencia de RESTRICT, NO ACTION permite que la verificación de la restricción se pueda aplazar hasta el final de la transacción (DEFERRED) si está configurada como aplazable.",
    "trap": true
  },
  {
    "category": "examen_2023",
    "type": "multi",
    "question": "En el contexto de la optimización heurística en álgebra relacional, ¿qué ocurre en la fase de 'Bajada de las Selecciones Monódicas'?",
    "options": [
      "Las selecciones (σ) con condiciones sobre una única tabla se desplazan hacia abajo en el árbol, situándose justo encima de sus respectivas tablas base para reducir filas tempranamente.",
      "Se descomponen las condiciones complejas (AND) en una secuencia jerárquica de múltiples operaciones de selección sucesivas.",
      "Se combinan las selecciones resultantes de productos cartesianos con los propios productos (✕) para transformarlos en operaciones de Equi-Join (⋈).",
      "Se introducen proyecciones (π) tempranas destinadas a descartar todas las columnas innecesarias de las tablas arrastrando solo los atributos requeridos."
    ],
    "correct": 0,
    "justification": "Las selecciones monódicas (con variables de una única relación) se aplican lo antes posible empujándolas hacia las hojas del árbol, reduciendo el tamaño de las relaciones antes de hacer los joins o productos cartesianos.",
    "trap": false
  },
  {
    "category": "examen_2023",
    "type": "multi",
    "question": "Al generar un árbol de expresión canónica (sin optimizar) para una consulta SQL con tres tablas unidas en el `FROM` mediante `WHERE`, ¿qué operaciones relacionales se utilizan inicialmente para combinarlas?",
    "options": [
      "Dos operaciones de reunión natural (⋈) evaluadas progresivamente.",
      "Dos operaciones consecutivas de producto cartesiano (✕) seguidas de una única selección (σ) que evalúa todas las condiciones de reunión juntas.",
      "Un producto cartesiano (✕) masivo de tres vías evaluado en un único paso junto con sus proyecciones.",
      "Dos operaciones de Equi-Join (⋈) optimizadas donde las selecciones ya están bajadas al nivel de las tablas."
    ],
    "correct": 1,
    "justification": "En el árbol canónico inicial, las tablas en el FROM se combinan usando Productos Cartesianos (✕), y las condiciones de la cláusula WHERE se evalúan con una operación general de Selección (σ) sobre el resultado del producto masivo.",
    "trap": false
  },
  {
    "category": "examen_2026_enero",
    "type": "multi",
    "question": "En un sistema de control de concurrencia multiversión, tenemos las siguientes versiones del dato A:<br><ul><li>A1 = 10 (ME = 2, ML = 5)</li><li>A2 = 20 (ME = 7, ML = 9)</li></ul>¿Qué ocurre cuando T4 (con marca de transacción M(T4) = 4) lee el dato A?",
    "options": [
      "La transacción lee la versión A1 devolviendo el valor 10, y las marcas de la versión se actualizan a ME = 2 y ML = 5.",
      "La transacción lee la versión A2 devolviendo el valor 20, y las marcas de la versión se actualizan a ME = 7 y ML = 9.",
      "La operación se deniega y la transacción T4 debe abortar para evitar inconsistencias.",
      "La transacción lee la versión A1 devolviendo el valor 10, y la marca de lectura se actualiza a ML = 4."
    ],
    "correct": 0,
    "justification": "M(T4)=4 busca la versión con mayor ME <= 4, que es A1 (ME=2). Al ser M(T4)=4 menor a ML(A1)=5, se lee el valor 10 y la nueva marca ML se calcula como max(4, 5) = 5.",
    "trap": false
  },
  {
    "category": "examen_2026_enero",
    "type": "multi",
    "question": "En un sistema de control de concurrencia multiversión, tenemos las siguientes versiones del dato A:<br><ul><li>A1 = 10 (ME = 2, ML = 5)</li><li>A2 = 20 (ME = 7, ML = 9)</li></ul>¿Qué ocurre cuando T9 (con marca de transacción M(T9) = 9) lee el dato A?",
    "options": [
      "La transacción lee la versión A1 y la marca de lectura se actualiza a ML = 9.",
      "La operación de lectura se rechaza por conflicto de concurrencia, ya que ML = 9.",
      "La transacción lee la versión A2 devolviendo el valor 20 y las marcas de la versión permanecen en ME = 7, ML = 9.",
      "La transacción lee la versión A2 devolviendo el valor 20 y la marca de lectura se actualiza a ML = 10 para proteger lecturas futuras."
    ],
    "correct": 2,
    "justification": "M(T9)=9 busca la versión más reciente con ME <= 9, que es A2 (ME=7). Como ML actual es 9, la nueva ML es max(9, 9) = 9. Se lee el valor 20 y las marcas permanecen inalteradas.",
    "trap": false
  },
  {
    "category": "examen_2026_enero",
    "type": "multi",
    "question": "En un sistema de control de concurrencia multiversión, tenemos las siguientes versiones del dato A:<br><ul><li>A1 = 10 (ME = 2, ML = 5)</li><li>A2 = 20 (ME = 7, ML = 9)</li></ul>¿Qué sucede si la transacción T13 (con marca M(T13) = 13) intenta escribir el valor 13 en A?",
    "options": [
      "Se deniega la escritura porque M(T13) es mayor que la marca de lectura actual de A2.",
      "Se permite la escritura creando una nueva versión A3 = 13 y se le asignan las marcas ME = 13 y ML = 13.",
      "Se sobrescribe la versión A2 cambiando su valor a 13 y actualizando su ME a 13, pero manteniendo ML en 9.",
      "Se permite la escritura creando una nueva versión A3 = 13 con marcas ME = 13 y ML = 9."
    ],
    "correct": 1,
    "justification": "Intenta escribir sobre A2 (ME=7). Se comprueba si M(T13) < ML(A2). Como 13 < 9 es falso, se permite la escritura creando A3=13 con ME=13 y ML=13.",
    "trap": false
  },
  {
    "category": "examen_2026_enero",
    "type": "multi",
    "question": "En un sistema de control de concurrencia multiversión, con las versiones actuales de A: A1 (ME = 2, ML = 5), A2 (ME = 7, ML = 9) y A3 (ME = 13, ML = 13), ¿qué sucede si T4 (M(T4) = 4) intenta escribir el valor 25 en A?",
    "options": [
      "Se permite la escritura creando una nueva versión intermedia con ME = 4 y ML = 5.",
      "Se sobrescribe la versión A1 con el valor 25 y se actualiza su ME a 4.",
      "La operación se suspende a la espera de que la transacción que leyó A1 (modificando ML a 5) confirme sus cambios.",
      "La operación se deniega y la transacción T4 hace rollback porque 4 < 5, indicando que una transacción posterior ya leyó la versión."
    ],
    "correct": 3,
    "justification": "M(T4)=4 actuaría sobre A1 (ME=2). Pero la marca temporal de T4 es menor a ML(A1)=5. Como 4 < 5 es verdadero, la escritura se deniega para evitar anomalías y T4 hace rollback.",
    "trap": false
  },
  {
    "category": "examen_2026_enero",
    "type": "multi",
    "question": "En un sistema de control de concurrencia multiversión, con las versiones originales de A: A1 (ME = 2, ML = 5) y A2 (ME = 7, ML = 9), ¿qué sucede si T6 (M(T6) = 6) intenta escribir el valor 50 en A?",
    "options": [
      "La operación se deniega porque la marca de lectura de A2 es 9, la cual es estrictamente mayor que 6.",
      "Se deniega la operación porque ya existe una versión A2 que fue escrita en el tiempo 7.",
      "Se sobrescribe la versión A1 actualizando su valor a 50 y estableciendo ME a 6, destruyendo el valor original de 10.",
      "Se permite la operación y se crea una nueva versión intermedia válida con valor 50 y marcas ME = 6 y ML = 6."
    ],
    "correct": 3,
    "justification": "M(T6)=6 busca la versión aplicable ME <= 6, que es A1 (ME=2). Como M(T6) >= ML(A1) (es decir, 6 >= 5), la escritura se permite y se crea una versión intermedia con ME=6, ML=6.",
    "trap": false
  },
  {
    "category": "examen_2026_enero",
    "type": "multi",
    "question": "En SQL estándar, ¿cuál es el funcionamiento de la acción referencial <code>ON DELETE NO ACTION</code> (o <code>ON UPDATE NO ACTION</code>) y en qué se diferencia principalmente de <code>RESTRICT</code>?",
    "options": [
      "<code>NO ACTION</code> establece el valor de la clave foránea a NULL en los registros hijos, mientras que <code>RESTRICT</code> devuelve un error abortando la operación.",
      "Ambas acciones funcionan de forma idéntica evaluando siempre de manera inmediata la restricción al intentar la modificación.",
      "<code>NO ACTION</code> ignora la violación de la integridad referencial y permite la operación, a diferencia de <code>RESTRICT</code> que la prohíbe.",
      "<code>NO ACTION</code> impide operaciones que violen la integridad referencial, pero permite aplazar la comprobación hasta el final de la transacción (con DEFERRED), a diferencia de <code>RESTRICT</code> que comprueba siempre de forma inmediata."
    ],
    "correct": 3,
    "justification": "NO ACTION aborta la operación si existe violación, pero a diferencia de RESTRICT, permite diferir (aplazar) la verificación hasta el final de la transacción si está configurada como aplazable.",
    "trap": false
  },
  {
    "category": "examen_2026_enero",
    "type": "multi",
    "question": "¿El hecho de que una vista en SQL Estándar tenga la cláusula <code>WITH CHECK OPTION</code> garantiza siempre y de forma absoluta que no se pueda insertar una fila migratoria a través de ella?",
    "options": [
      "Sí, el estándar SQL estipula que <code>WITH CHECK OPTION</code> comprueba rigurosamente todas las condiciones sin importar cómo estén anidadas las vistas, previniendo siempre las filas migratorias.",
      "No, no de manera absoluta en toda la jerarquía; si se especifica <code>WITH LOCAL CHECK OPTION</code> sobre una vista anidada, se podría permitir la inserción que cumpla su condición local pero no la de la vista base, generando una fila migratoria.",
      "No, <code>WITH CHECK OPTION</code> únicamente previene modificaciones (UPDATE) que generen filas migratorias, pero no tiene efecto en instrucciones INSERT.",
      "Sí, al estar definida en cualquier nivel, propaga siempre las restricciones obligatoriamente a cualquier nivel subyacente impidiendo la migración de filas en todos los escenarios."
    ],
    "correct": 1,
    "justification": "Por defecto, WITH CHECK OPTION actúa en cascada y garantiza invulnerabilidad. Sin embargo, si se utiliza de manera explícita WITH LOCAL CHECK OPTION, solo se comprueba la restricción de la vista actual, lo que podría permitir una fila migratoria si incumple los filtros de las vistas base subyacentes.",
    "trap": false
  }
];