window.FlashcardsData = {
  "catalogo": [
    {
      "q": "¿Qué es el catálogo del sistema?",
      "a": "Conjunto de tablas y vistas mantenidas por el SGBD que almacenan metadatos sobre la base de datos, siendo de solo lectura para los usuarios."
    },
    {
      "q": "¿Qué diferencia el diccionario de datos corporativo del catálogo del sistema?",
      "a": "El diccionario abarca el diseño conceptual y programas; el catálogo es mantenido físicamente por el motor y almacena solo metadatos de la BD."
    },
    {
      "q": "¿Puede un usuario ejecutar INSERT, UPDATE o DELETE directamente contra el catálogo?",
      "a": "No, el catálogo se actualiza de forma implícita mediante operaciones DDL (CREATE, DROP, ALTER, GRANT)."
    },
    {
      "q": "¿Para qué utiliza el Optimizador de Consultas el catálogo?",
      "a": "Para extraer estadísticas (nº de filas, bloques, histogramas, índices) y calcular el plan de ejecución más eficiente."
    },
    {
      "q": "¿Qué cuatro niveles jerárquicos define el estándar SQL para el catálogo?",
      "a": "Entorno SQL (Environment), Clúster, Catálogo y Esquema."
    },
    {
      "q": "¿En el estándar SQL, qué esquema es obligatorio en todo catálogo para consultar metadatos?",
      "a": "INFORMATION_SCHEMA."
    },
    {
      "q": "¿Qué es el DEFINITION_SCHEMA en el estándar SQL?",
      "a": "Es un conjunto de tablas base hipotéticas gestionadas por el SGBD, no accesibles por el usuario, donde se guardan los metadatos físicos."
    },
    {
      "q": "¿Cómo estructura PostgreSQL su jerarquía de metadatos?",
      "a": "En Cluster (instalación), Database (Catálogo) y Schema (Esquema). Dispone de information_schema y pg_catalog."
    },
    {
      "q": "¿Cómo denomina Oracle a los elementos genéricos en su catálogo (tablas, secuencias, etc.)?",
      "a": "Objetos (OBJECTS). Su nomenclatura absoluta es esquema.objeto."
    },
    {
      "q": "¿Qué equivalencia hay en Oracle entre usuarios y esquemas?",
      "a": "En Oracle, cada usuario es propietario de un único esquema que recibe exactamente su mismo nombre."
    },
    {
      "q": "¿Qué indica el prefijo USER_ en las vistas de Oracle?",
      "a": "Muestra únicamente los objetos de los que el usuario actual es propietario o creador."
    },
    {
      "q": "¿Qué indica el prefijo ALL_ en las vistas de Oracle?",
      "a": "Muestra los objetos a los que el usuario tiene acceso (ya sea por ser propietario o por tener permisos concedidos)."
    },
    {
      "q": "¿Qué indica el prefijo DBA_ en las vistas de Oracle?",
      "a": "Muestra todos los objetos de la base de datos sin restricciones de seguridad. Requiere privilegios de administración."
    },
    {
      "q": "¿Qué vista de Oracle describe brevemente todas las demás vistas del catálogo?",
      "a": "DICTIONARY (o su sinónimo DICT)."
    },
    {
      "q": "¿Qué vista de Oracle enumera las tablas del usuario (excluyendo vistas)?",
      "a": "USER_TABLES (o su sinónimo TABS)."
    },
    {
      "q": "¿Qué vista de Oracle detalla las columnas de las tablas del usuario?",
      "a": "USER_TAB_COLUMNS (o su sinónimo COLS)."
    },
    {
      "q": "¿Qué vista de Oracle describe las restricciones de integridad definidas por el usuario?",
      "a": "USER_CONSTRAINTS."
    },
    {
      "q": "En USER_CONSTRAINTS de Oracle, ¿qué significa el valor \"R\" en CONSTRAINT_TYPE?",
      "a": "Indica una restricción de integridad referencial (Clave Foránea o References)."
    },
    {
      "q": "¿Qué vista de Oracle relaciona cada restricción con sus columnas específicas implicadas?",
      "a": "USER_CONS_COLUMNS."
    },
    {
      "q": "¿Qué información muestra la vista USER_OBJECTS (u OBJ) en Oracle?",
      "a": "Información general de los objetos creados por el usuario (fecha de creación, validez, tipo)."
    },
    {
      "q": "¿Qué vista expone los privilegios de sistema directos concedidos al usuario actual en Oracle?",
      "a": "USER_SYS_PRIVS."
    },
    {
      "q": "¿Qué ocurre en el catálogo al crear una vista con SELECT * FROM tabla?",
      "a": "El catálogo expande el asterisco y almacena de forma estática los nombres exactos de las columnas en el instante de la creación."
    },
    {
      "q": "¿Qué vistas estándar en INFORMATION_SCHEMA enumeran tablas base y vistas accesibles?",
      "a": "TABLES y VIEWS, respectivamente."
    },
    {
      "q": "¿Qué significa que el catálogo del sistema sea \"auto-contenido\"?",
      "a": "Que el catálogo se describe a sí mismo; contiene metadatos sobre su propia estructura."
    },
    {
      "q": "¿Dónde se almacena el rastro de la auditoría de grano fino (FGA) en Oracle?",
      "a": "En la vista DBA_FGA_AUDIT_TRAIL."
    },
    {
      "q": "¿Qué información guarda la vista USER_TRIGGERS en Oracle?",
      "a": "Los disparadores, su tipo, el evento disparador, el código PL/SQL y la tabla o vista asociada."
    },
    {
      "q": "¿Permite PostgreSQL tablas con nombres idénticos en la misma base de datos?",
      "a": "Sí, siempre que se encuentren creadas dentro de esquemas diferentes."
    },
    {
      "q": "¿Qué vista nativa de PostgreSQL muestra información directa sobre las tablas?",
      "a": "pg_catalog.pg_tables."
    },
    {
      "q": "¿Almacena el catálogo de un SGBD la semántica o los diagramas del modelo E-R?",
      "a": "No, solo almacena los elementos lógicos y físicos (tablas, restricciones, índices, tipos)."
    },
    {
      "q": "¿Qué prefijo se usa en Oracle Multitenant (versión 12+) para listar objetos de todas las PDBs?",
      "a": "CDB_ (requiere altos privilegios y consultarlo desde CDB$ROOT)."
    },
    {
      "q": "¿Qué función cumple el catálogo durante la fase semántica al compilar una consulta?",
      "a": "Verifica la existencia de los objetos referenciados, los permisos del usuario y la compatibilidad de los tipos de datos."
    },
    {
      "q": "Si en Oracle consultas una tabla sin permisos, ¿qué mensaje de error devuelve y por qué?",
      "a": "Devuelve \"ORA-00942: la tabla o vista no existe\", ocultando la diferencia entre falta de permisos y no existencia para evitar la inferencia de datos."
    }
  ],
  "vistas": [
    {
      "q": "¿Qué es una vista (clásica) en una BD relacional?",
      "a": "Una tabla virtual que expone el resultado de una consulta sin almacenar los datos físicos, guardando solo su definición en el catálogo."
    },
    {
      "q": "¿A qué nivel de la arquitectura ANSI/SPARC corresponde el uso de vistas?",
      "a": "Al nivel externo o de aplicación, definiendo los esquemas externos para cada usuario."
    },
    {
      "q": "¿El estándar SQL-92 permite la cláusula ORDER BY al definir una vista?",
      "a": "No, no lo permite (aunque Oracle y estándares modernos posteriores sí lo soportan)."
    },
    {
      "q": "¿Existe en SQL la instrucción ALTER VIEW para modificar la consulta interna de una vista?",
      "a": "No en el estándar (se debe hacer DROP y CREATE). En Oracle sí existe CREATE OR REPLACE VIEW."
    },
    {
      "q": "¿Qué ocurre al ejecutar DROP VIEW vista CASCADE?",
      "a": "Se borra la vista indicada y, en cascada, cualquier otra vista o elemento dependiente de ella."
    },
    {
      "q": "¿Cuál es la regla básica para que una vista sea actualizable (permita DML)?",
      "a": "El SGBD debe poder localizar inequívocamente la fila exacta en la tabla base a partir de una fila de la vista."
    },
    {
      "q": "Nombra cláusulas que impidan a una vista ser actualizable.",
      "a": "GROUP BY, HAVING, DISTINCT, operaciones de conjuntos (UNION, INTERSECT) y joins en el estándar clásico."
    },
    {
      "q": "¿Permite una vista actualizar un campo basado en una expresión aritmética (ej. sueldo*1.2)?",
      "a": "No, las columnas calculadas o derivadas nunca son actualizables mediante UPDATE o INSERT."
    },
    {
      "q": "¿Qué se entiende por \"tupla migratoria\" en el contexto de las vistas?",
      "a": "Una fila que es insertada o actualizada a través de una vista y que luego deja de cumplir el WHERE de la propia vista, desapareciendo de esta."
    },
    {
      "q": "¿Qué cláusula se usa al crear una vista para prohibir tuplas migratorias?",
      "a": "WITH CHECK OPTION."
    },
    {
      "q": "¿Qué diferencia hay entre LOCAL CHECK OPTION y CASCADED CHECK OPTION?",
      "a": "LOCAL comprueba solo el WHERE de la vista actual ignorando las inferiores; CASCADED valida todas las condiciones en la jerarquía completa de vistas subyacentes."
    },
    {
      "q": "¿Implementa Oracle la cláusula LOCAL CHECK OPTION?",
      "a": "No, en Oracle el comportamiento del CHECK OPTION siempre actúa forzosamente en cascada (CASCADED)."
    },
    {
      "q": "¿Cómo fuerzas en Oracle a que una vista sea únicamente de lectura independientemente de su estructura?",
      "a": "Utilizando la cláusula WITH READ ONLY al crearla."
    },
    {
      "q": "¿Aparece una nueva columna creada con ALTER TABLE en una vista previa definida con SELECT *?",
      "a": "No, porque la lista de columnas se expandió y almacenó de manera estática en el catálogo durante la creación de la vista."
    },
    {
      "q": "¿Qué diferencia a las vistas materializadas de las lógicas clásicas?",
      "a": "Las materializadas almacenan físicamente en disco los resultados de la consulta, consumiendo espacio pero acelerando drásticamente su lectura."
    },
    {
      "q": "¿Qué significa BUILD IMMEDIATE en una vista materializada?",
      "a": "Que los datos se obtienen y almacenan en disco en el mismo momento en que se ejecuta la orden de creación (CREATE MATERIALIZED VIEW)."
    },
    {
      "q": "¿Qué método de REFRESH hace una sincronización puramente incremental?",
      "a": "REFRESH FAST, que requiere disponer de Materialized View Logs en las tablas base subyacentes."
    },
    {
      "q": "¿Qué comportamiento tiene la instrucción REFRESH FORCE?",
      "a": "Es el modo predeterminado de Oracle; intenta realizar un REFRESH FAST y, si estructuralmente no es posible, ejecuta un REFRESH COMPLETE masivo."
    },
    {
      "q": "¿Por qué la opción REFRESH ON COMMIT impacta el rendimiento general de la base de datos?",
      "a": "Porque pausa el cierre exitoso (commit) de las transacciones DML normales hasta que la vista dependiente finalice su sincronización."
    },
    {
      "q": "¿Qué es el Query Rewriting o reescritura de consultas con vistas materializadas?",
      "a": "Un mecanismo del optimizador (CBO) que redirige de forma transparente consultas costosas del usuario hacia la vista materializada para ahorrar tiempo."
    },
    {
      "q": "¿Qué comando activa a nivel de sesión la reescritura de consultas en Oracle?",
      "a": "ALTER SESSION SET QUERY_REWRITE_ENABLED = TRUE;"
    },
    {
      "q": "¿Cómo actúan las vistas en el control de seguridad (DAC) horizontal y vertical?",
      "a": "Horizontalmente limitan filas (usando WHERE) y verticalmente ocultan columnas (proyectando solo atributos no sensibles)."
    },
    {
      "q": "¿Qué elemento se usa para hacer actualizable de manera programática una vista que naturalmente no lo es (ej. con JOINs complejos)?",
      "a": "Un disparador especializado llamado Trigger INSTEAD OF."
    },
    {
      "q": "¿Qué es una tabla preservada por clave (key-preserved table) en un JOIN?",
      "a": "La tabla dentro del join cuya clave primaria mantiene la unicidad en la vista final, permitiendo que sus atributos puedan ser actualizables."
    },
    {
      "q": "¿Qué utilidad tiene ALTER VIEW vista COMPILE en Oracle?",
      "a": "Sirve para revalidar el estado de una vista que haya quedado marcada como inválida tras modificaciones estructurales en las tablas base."
    },
    {
      "q": "¿Qué ocurre en Oracle al hacer DROP de una vista base sin especificar CASCADE CONSTRAINTS?",
      "a": "Elimina la vista y marca todas las vistas jerárquicamente dependientes como inválidas."
    },
    {
      "q": "En Oracle, si tengo una vista actualizable pero con un campo calculado, ¿puedo hacerle un INSERT?",
      "a": "Sí, siempre que la instrucción INSERT omita de manera explícita ese campo calculado en su lista de asignaciones."
    },
    {
      "q": "¿Respeta Oracle la restricción estándar que impide DML si la vista usa una subconsulta hacia su propia tabla?",
      "a": "No, Oracle ignora la circularidad y permite operaciones DML, lo cual puede generar resultados inesperados."
    },
    {
      "q": "¿Mejoran el rendimiento intrínseco de lectura de disco las vistas clásicas?",
      "a": "No, el motor mezcla la consulta de la vista con la del usuario y lanza el escaneo normal hacia las tablas base; su fin es abstracción y seguridad."
    },
    {
      "q": "¿Qué hace la directiva ON PREBUILT TABLE al definir una vista materializada?",
      "a": "Indica a la base de datos que utilice una tabla ya existente como receptáculo físico de la vista materializada (útil en Data Warehouse)."
    },
    {
      "q": "¿Es posible crear índices adicionales (ej. B-Tree) sobre una vista materializada?",
      "a": "Sí, a efectos de eficiencia actúan como un segmento físico ordinario de tabla, permitiendo crear índices para acelerar lecturas complejas."
    }
  ],
  "integridade": [
    {
      "q": "¿Qué se entiende por integridad en una base de datos?",
      "a": "Es el conjunto de mecanismos que aseguran que la información almacenada sea correcta (sin valores inválidos) y completa (sin información esencial faltante)."
    },
    {
      "q": "¿Por qué no debe delegarse la comprobación de integridad en las aplicaciones cliente?",
      "a": "Porque el SGBD debe actuar como último garante de seguridad para evitar datos corruptos, ya que diferentes clientes o accesos directos podrían omitir dichas validaciones."
    },
    {
      "q": "¿Cuáles son las tres grandes fases del ciclo de vida donde se modela la integridad?",
      "a": "Diseño conceptual (E-R), diseño lógico (Claves y FK) y diseño físico (SQL constraints y triggers)."
    },
    {
      "q": "¿Por qué es altamente recomendable especificar un nombre en un CONSTRAINT?",
      "a": "Para obtener mensajes de error mucho más descriptivos frente a violaciones y para facilitar su futura administración (habilitar, inhabilitar, borrar o aplazar)."
    },
    {
      "q": "¿Qué caracteriza la restricción de integridad de tipo PRIMARY KEY?",
      "a": "Forza la unicidad absoluta de los registros, no admite valores nulos implícitamente y solo puede existir una por tabla."
    },
    {
      "q": "¿Permiten implementaciones como Oracle, PostgreSQL o MySQL insertar múltiples valores nulos en columnas UNIQUE?",
      "a": "Sí, el estándar comercial evalúa que los múltiples nulos no son iguales entre sí, por lo que no violan la regla UNIQUE (SQL Server es una excepción)."
    },
    {
      "q": "¿Qué incompatibilidad lógica existe entre ON DELETE SET NULL y el uso de NOT NULL en la misma clave foránea?",
      "a": "Una incompatibilidad absoluta; la FK intenta grabar un NULL en el hijo tras el borrado del padre, pero la restricción NOT NULL de la columna lo impedirá y fallará."
    },
    {
      "q": "¿Permiten los gestores comerciales convencionales emplear agregaciones (ej. SELECT MAX) en las restricciones CHECK?",
      "a": "No, aunque el SQL teórico no limite el contenido, en la práctica PostgreSQL, Oracle y otros impiden evaluar subconsultas referenciales dentro de un CHECK."
    },
    {
      "q": "¿Qué distingue a la acción referencial RESTRICT frente a NO ACTION?",
      "a": "RESTRICT dispara la validación y el rechazo en el instante inmediato (sin aplazamiento). NO ACTION asume la misma prohibición, pero permite que la evaluación se aplace (DEFERRABLE) a fin de la transacción."
    },
    {
      "q": "¿Qué sucede con los registros hijos si se modifica el código PK de su tabla maestra bajo la regla ON UPDATE CASCADE?",
      "a": "El motor actualizará en cascada automáticamente todos los valores en la tabla hija garantizando la armonía del vínculo transaccional."
    },
    {
      "q": "¿Qué peligro asumen las FK configuradas como ON DELETE CASCADE en relaciones reflexivas (ej. tabla empleados consigo misma)?",
      "a": "Un borrado masivo exponencial irreversible; borrar un registro jerárquico superior eliminará automáticamente a todos sus subordinados e indirectos en cadena."
    },
    {
      "q": "En el estándar SQL, ¿qué comportamiento impone MATCH FULL en claves foráneas compuestas con un vector como (2345, NULL)?",
      "a": "Lo rechaza categóricamente. MATCH FULL obliga a que el vector esté íntegramente compuesto por nulos o, de lo contrario, no posea ningún nulo y coincida con el padre."
    },
    {
      "q": "¿Cómo trata el modo por defecto MATCH SIMPLE a un vector híbrido de FK compuesto como (2345, NULL)?",
      "a": "Lo asume como estructuralmente válido. Con la mera aparición de un solo elemento nulo, se evita el chequeo estricto cruzado en la tabla padre."
    },
    {
      "q": "¿Qué funcionalidad aporta una restricción etiquetada como DEFERRABLE INITIALLY DEFERRED?",
      "a": "Posterga sistemáticamente la ejecución del chequeo de la regla de integridad hasta el instante final de aplicar el COMMIT transaccional."
    },
    {
      "q": "Si una transacción evalúa un bloque en modo DEFERRED y encuentra un fallo lógico en el momento del COMMIT, ¿qué acción toma el SGBD?",
      "a": "Rechaza la confirmación global forzando un ROLLBACK automático de toda la transacción, descartando las operaciones temporales íntegras para proteger la base."
    },
    {
      "q": "¿En qué caso práctico resulta vital aplicar el aplazamiento DEFERRABLE?",
      "a": "Para resolver dependencias cíclicas cruzadas obligatorias (dos tablas que se apuntan mediante claves mutuas NOT NULL), imposibles de inicializar sin relajar la orden al cierre transaccional."
    },
    {
      "q": "¿Soporta el SGBD de Oracle la propagación ON UPDATE CASCADE para integridad referencial?",
      "a": "No, Oracle omite intencionalmente este soporte y fuerza de manera interna el estado ON UPDATE NO ACTION."
    },
    {
      "q": "¿Qué herramienta permite sortear la limitación de no disponer de \"Assertions\" estándar cuando existen reglas lógicas inter-tabla muy exigentes?",
      "a": "El uso de procedimientos mediante Triggers (Disparadores) asíncronos programados en el motor (PL/SQL) activados en eventos DML concretos."
    },
    {
      "q": "En PostgreSQL, ¿qué dos restricciones particulares no pueden ser definidas bajo el régimen de aplazamiento (DEFERRABLE)?",
      "a": "Las restricciones de chequeo de columna (NOT NULL) y las restricciones de lógica booleana condicional (CHECK)."
    },
    {
      "q": "¿Cómo funciona la regla de evaluación MATCH PARTIAL en claves compuestas?",
      "a": "Permite nulos intercalados, pero exige que los atributos no-nulos provistos concuerden exactamente con las columnas homólogas de alguna fila concreta de la tabla matriz."
    },
    {
      "q": "En un bloque transaccional PostgreSQL con una validación inmediata fallida, ¿qué ocurre con el resto de la transacción en curso?",
      "a": "Colapsa la integridad de la transacción, entrando en un \"modo rollback\" que abortará cualquier COMMIT posterior, salvo que se gestione internamente con puntos de guardado (Savepoints)."
    },
    {
      "q": "Bajo la regla ON DELETE SET NULL, ¿qué sufre el registro del \"empleado\" de ventas cuando desaparece su \"sucursal\" de cabecera referenciada?",
      "a": "El empleado persiste íntegro en la base de datos sin ser eliminado, pero su columna de referencia hacia la sucursal es blanqueada y asignada al estado nulo."
    },
    {
      "q": "¿Cómo inhabilitas temporalmente una clave foránea problemática en Oracle de forma declarativa sin destruir la regla?",
      "a": "Empleando la instrucción: ALTER TABLE tabla DISABLE CONSTRAINT nombre_restriccion;"
    },
    {
      "q": "¿Puede un mismo campo de un esquema poseer una restricción aplazable (DEFERRED) mientras su vecino es instantánea (IMMEDIATE) en la base de datos relacional?",
      "a": "Sí, la temporalidad de ejecución es un atributo individual anclado a cada orden CONSTRAINT, siendo configuraciones locales e independientes por instrucción."
    },
    {
      "q": "¿Qué ventaja funcional sobresaliente aporta la seguridad garantizada en Triggers que el modelo puro de Restricciones declarativas no provee?",
      "a": "Posibilitan logueos minuciosos para flujos de auditoría activa, admiten alteración transaccional dinámica modificando las filas inyectadas (BEFORE) e interceptaciones manuales complejas (INSTEAD OF)."
    },
    {
      "q": "¿Cómo evalúa por norma una base de datos las claves foráneas circulares en implementaciones de tipo \"reflexivo\" (ej: Supervisor de Empleados)?",
      "a": "Como correctas; se validan como relaciones recursivas válidas soportadas a través de referencias al identificador matriz de la propia estructura original."
    },
    {
      "q": "¿Por qué la técnica de rellenar restricciones CHECK con extensos listados estáticos (ej: Municipios) es una antipráctica de desarrollo arquitectónico?",
      "a": "Debido a su rigidez estructural. Toda incorporación menor exige alterar el DDL general, bloqueos y recompilaciones pesadas. Para listas que mutan, deben aplicarse esquemas foráneos FK hacia Lookup Tables."
    },
    {
      "q": "¿Qué componentes principales agrupan la filosofía reaccional \"Reglas ECA\" en mecanismos activos de Disparadores (Triggers)?",
      "a": "Evento (El DML disparador), Condición (El filtro booleano de viabilidad IF/WHEN) y la Acción (La función PL/SQL o cuerpo codificado de rectificación)."
    },
    {
      "q": "¿Bajo qué normativa técnica del SQL estándar aprueba instantáneamente la evaluación referencial una entrada FK como (idUsuario, NULL)?",
      "a": "Bajo la norma predominante MATCH SIMPLE, la cual da luz verde al salto de verificación externa de existencia en cuanto advierte la presencia de indefinición de al menos una de las tuplas."
    },
    {
      "q": "¿Qué acción de acción referencial (ON DELETE) no soporta de forma explícita Oracle en sus comandos DDL?",
      "a": "Las cláusulas RESTRICT y CASCADE en UPDATE. Oracle únicamente implementa explícitamente CASCADE, SET NULL y el omitido asumido internamente NO ACTION para borrados."
    },
    {
      "q": "¿Cómo trata el estándar SQL una clave foránea híbrida (ej. [10, NULL]) bajo la cláusula MATCH FULL?",
      "a": "La rechaza. MATCH FULL exige que todos los componentes sean nulos simultáneamente, o que ninguno lo sea y coincida con una fila padre."
    },
    {
      "q": "¿Qué diferencia temporal existe entre las restricciones referenciales RESTRICT y NO ACTION?",
      "a": "RESTRICT aborta el fallo inmediatamente y no es aplazable. NO ACTION permite aplazar la validación al final de la transacción (DEFERRABLE)."
    }
  ],
  "seguridade": [
    {
      "q": "¿En qué estándar internacional se basan las buenas prácticas para un Sistema de Gestión de Seguridad de la Información (SGSI)?",
      "a": "ISO/IEC 27001."
    },
    {
      "q": "¿Qué es un AuthID en el contexto de bases de datos?",
      "a": "Un Identificador de Autorización, que puede ser un usuario, un rol o el pseudo-AuthID PUBLIC."
    },
    {
      "q": "¿Qué representa el pseudo-AuthID PUBLIC?",
      "a": "Engloba a todos los AuthIDs (usuarios y roles) presentes y futuros de la base de datos."
    },
    {
      "q": "¿El éxito en la fase de autenticación garantiza el acceso a los datos?",
      "a": "No, solo verifica la identidad. El acceso a los datos depende de la fase de autorización."
    },
    {
      "q": "¿Qué privilegio es estrictamente necesario en Oracle para poder iniciar sesión?",
      "a": "CREATE SESSION (generalmente incluido en el rol CONNECT)."
    },
    {
      "q": "¿Qué es MAC vs DAC?",
      "a": "MAC (Control de Acceso Obligatorio) se basa en políticas de sistema inalterables por el usuario. DAC (Control de Acceso Discrecional) permite a los propietarios conceder/revocar privilegios a discreción."
    },
    {
      "q": "¿El estándar SQL define MAC o DAC?",
      "a": "Define DAC de forma nativa. MAC no está en el estándar SQL oficial."
    },
    {
      "q": "¿Cuáles son las dos reglas del Modelo Bell-LaPadula (MAC)?",
      "a": "Propiedad Simple (No leer hacia arriba) y Propiedad Estrella (No escribir hacia abajo)."
    },
    {
      "q": "¿Qué error muestra Oracle si un usuario intenta hacer un SELECT a una tabla oculta sobre la que no tiene permisos?",
      "a": "ORA-00942: la tabla o vista no existe (oculta la existencia por seguridad de inferencia)."
    },
    {
      "q": "¿Cuáles son los dos grandes tipos de privilegios en el modelo DAC?",
      "a": "Privilegios de Sistema (acciones globales, varían por SGBD) y Privilegios de Objeto (operaciones DML/DDL sobre entidades, comunes en SQL estándar)."
    },
    {
      "q": "Enumera al menos 4 ejemplos de Privilegios de Objeto en SQL.",
      "a": "SELECT, INSERT, UPDATE, DELETE, REFERENCES, TRIGGER, USAGE, EXECUTE."
    },
    {
      "q": "¿Qué cláusula en un GRANT permite al receptor propagar un privilegio de objeto a terceros?",
      "a": "WITH GRANT OPTION."
    },
    {
      "q": "¿Qué ocurre en SQL estándar si se usa REVOKE con la cláusula CASCADE?",
      "a": "Se retira el privilegio al usuario y a todos aquellos a los que este se lo haya propagado en cascada."
    },
    {
      "q": "¿Qué ocurre en SQL estándar si se usa REVOKE con la cláusula RESTRICT?",
      "a": "Falla y aborta si el privilegio ya ha sido propagado a terceros, obligando a revocar primero a los niveles inferiores."
    },
    {
      "q": "¿Soporta Oracle las cláusulas CASCADE o RESTRICT explícitas en sentencias REVOKE?",
      "a": "No, en Oracle los comandos REVOKE sobre privilegios de objeto siempre operan implícitamente en CASCADE."
    },
    {
      "q": "Según la 'Regla del Camino Vivo', ¿cuándo pierde realmente un usuario un privilegio que le revocan?",
      "a": "Solo cuando se rompen TODAS las líneas de concesión (caminos) independientes por los que recibió el privilegio."
    },
    {
      "q": "¿Qué es un Rol en bases de datos?",
      "a": "Una agrupación lógica de privilegios y otros roles, orientada a agilizar la gestión de perfiles laborales."
    },
    {
      "q": "¿Qué cláusula se utiliza en GRANT para que un usuario pueda administrar un rol y concederlo a otros?",
      "a": "WITH ADMIN OPTION."
    },
    {
      "q": "¿Qué 3 grandes poderes otorga WITH ADMIN OPTION sobre un rol?",
      "a": "Conceder el rol, revocar el rol a CUALQUIER usuario (incluso al creador) y destruir el rol (DROP ROLE)."
    },
    {
      "q": "¿Cuál es la principal diferencia de revocación en cascada entre Privilegios de Objeto y Roles?",
      "a": "Los privilegios de objeto se revocan implícitamente en cascada; la revocación de un rol NO tiene efecto en cascada hacia los niveles inferiores."
    },
    {
      "q": "¿La revocación de un Rol (con REVOKE) afecta inmediatamente a las sesiones activas en Oracle?",
      "a": "No, el efecto es diferido. No afecta hasta el próximo inicio de sesión o hasta forzar un SET ROLE."
    },
    {
      "q": "¿La revocación de un Privilegio de Objeto (con REVOKE) afecta inmediatamente a las sesiones en Oracle?",
      "a": "Sí, el corte de acceso es fulminante e inmediato en tiempo real."
    },
    {
      "q": "¿Qué ocurre de inmediato con las sesiones activas si se ejecuta un DROP ROLE en Oracle?",
      "a": "Los privilegios asociados al rol caen de forma fulminante e inmediata para todas las sesiones conectadas."
    },
    {
      "q": "¿Cómo se aplica la ocultación de filas y columnas específicas (seguridad horizontal/vertical) en SQL si GRANT no soporta WHERE?",
      "a": "Creando Vistas que limiten los datos deseados (opcionalmente con WITH CHECK OPTION) y concediendo permisos sobre la vista en lugar de la tabla base."
    },
    {
      "q": "¿Qué es una Base de Datos Estadística y cuál es su mayor riesgo?",
      "a": "Publica datos solo mediante funciones agregadas para anonimizar; su riesgo es la inferencia matemática de datos confidenciales cruzando múltiples resultados de conjuntos pequeños."
    },
    {
      "q": "¿Qué técnica fundamental en programación evita ataques de inyección SQL?",
      "a": "El uso exclusivo de sentencias parametrizadas (prepared statements), evitando concatenar texto crudo de los usuarios en la consulta."
    },
    {
      "q": "Enumera 3 roles predeterminados clásicos de sistema en Oracle.",
      "a": "CONNECT (acceso), RESOURCE (desarrollo básico) y DBA (administración total interna)."
    },
    {
      "q": "¿Puede un usuario con el rol de administración DBA realizar un SELECT directo sobre una tabla de un tercero en Oracle?",
      "a": "No nativamente; debe tener el privilegio de sistema explícito SELECT ANY TABLE para evitar el error de 'tabla no existe'."
    },
    {
      "q": "¿A quién afecta la orden REVOKE CONNECT FROM PUBLIC?",
      "a": "Quita el derecho global implícito de conexión futura, pero no desconecta a nadie con sesión activa (efecto diferido del rol)."
    },
    {
      "q": "¿Qué cláusula de REVOKE permite retirar la potestad de delegar (GRANT OPTION) manteniendo el permiso propio en SQL estándar?",
      "a": "GRANT OPTION FOR."
    },
    {
      "q": "¿Qué vista del catálogo de Oracle muestra de un vistazo los privilegios de objeto concedidos al usuario actual?",
      "a": "USER_TAB_PRIVS."
    },
    {
      "q": "¿Necesita el creador/propietario de un objeto que el DBA le conceda permisos de DML sobre este?",
      "a": "No, el creador adquiere de forma inherente e inmediata todos los privilegios sobre sus objetos y la capacidad de cederlos."
    },
    {
      "q": "¿Cómo se maneja el cifrado de datos críticos como contraseñas o historial clínico?",
      "a": "Cifrado unidireccional (HASH, SHA-256) para claves (se valida cifrando el input), y cifrado bidireccional (TDE o DBMS_CRYPTO) para datos sensibles."
    }
  ],
  "auditoria": [
    {
      "q": "¿Cuál es la misión principal de la Auditoría en Bases de Datos?",
      "a": "El registro sistemático y persistente (logs) de eventos del sistema y acciones de usuarios para permitir análisis forense a posteriori."
    },
    {
      "q": "¿Cuáles son los 5 enfoques principales de auditoría disponibles en sistemas como Oracle?",
      "a": "Auditoría básica (Oracle Audit), Triggers de sistema, Triggers DML, Auditoría de Grano Fino (FGA) y Logs del sistema operativo."
    },
    {
      "q": "¿Qué tipos de eventos generales rastrea la Auditoría Básica (Oracle Audit)?",
      "a": "Ejecución de DDLs, inicio/cierre de sesión, alteración de usuarios, uso de privilegios y comandos DML básicos sobre tablas."
    },
    {
      "q": "¿Qué comandos SQL activan y desactivan métricas específicas en la Auditoría Básica de Oracle?",
      "a": "Las instrucciones AUDIT (para activar) y NOAUDIT (para desactivar)."
    },
    {
      "q": "¿Qué vista del catálogo de Oracle permite revisar los inicios, cierres y fallos de sesión de forma nativa?",
      "a": "DBA_AUDIT_SESSION."
    },
    {
      "q": "¿En la Auditoría Básica se pueden registrar solo las acciones que han fracasado?",
      "a": "Sí, añadiendo parámetros como 'WHENEVER NOT SUCCESSFUL' para grabar intentos sin éxito."
    },
    {
      "q": "¿Para qué escenario se usan principalmente los Triggers de Sistema en seguridad?",
      "a": "Para auditar y reaccionar a eventos a nivel global de BD, como arranques/paradas de instancia o inicios/cierres de sesión (LOGON/LOGOFF)."
    },
    {
      "q": "¿Cómo se codifica un trigger para interceptar los inicios de sesión exitosos?",
      "a": "Mediante un trigger creado con AFTER LOGON ON DATABASE."
    },
    {
      "q": "¿Qué ventaja clave aportan los Triggers DML en auditoría frente a Oracle Audit genérico?",
      "a": "Permiten capturar e inyectar en el log los valores exactos antes (:old) y después (:new) de cada modificación DML, a nivel de fila y columna."
    },
    {
      "q": "¿Cuál es la limitación funcional paralizante de los Triggers DML para auditar?",
      "a": "No pueden dispararse, ni por ende registrar, operaciones de consulta pura y lectura de datos (SELECT)."
    },
    {
      "q": "¿Qué significan las siglas FGA en el contexto de seguridad de Oracle?",
      "a": "Fine Grain Auditing (Auditoría de Grano Fino)."
    },
    {
      "q": "¿Cuál es la capacidad diferencial de la tecnología FGA?",
      "a": "Puede interceptar y registrar operaciones de lectura (SELECT) analizando a nivel atómico condiciones lógicas y columnas accedidas."
    },
    {
      "q": "¿Qué dato forense crítico adjunta el rastro FGA sobre el acceso del usuario?",
      "a": "El código literal y exacto (SQL_TEXT) de la query maliciosa o sospechosa lanzada por el atacante o usuario."
    },
    {
      "q": "¿Qué paquete PL/SQL se invoca para definir las políticas de auditoría FGA?",
      "a": "Se gestionan usando el paquete interno DBMS_FGA (ej. dbms_fga.add_policy)."
    },
    {
      "q": "¿Qué tabla del catálogo almacena el log inalterable resultante de las políticas FGA activas?",
      "a": "DBA_FGA_AUDIT_TRAIL."
    },
    {
      "q": "Si una política FGA tiene la condición 'salario > 5000', ¿qué pasa si el usuario consulta un salario de 3000?",
      "a": "La consulta se procesa con éxito normal, pero no queda rastro en el log de auditoría (ignorado por FGA)."
    },
    {
      "q": "¿Qué sucesos se almacenan típicamente en los Alert Logs del Sistema de base de datos?",
      "a": "Sucesos críticos físicos: fallos en disco, arranques y cierres de la instancia, o cambios estructurales como añadir datafiles."
    },
    {
      "q": "¿Por qué es una mala práctica activar la auditoría para absolutamente todas las acciones del sistema?",
      "a": "Afectaría dramáticamente al rendimiento del servidor (alto overhead de I/O) y agotaría el almacenamiento en disco en poco tiempo."
    },
    {
      "q": "Si programo un trigger DML de auditoría a nivel de sentencia (STATEMENT), ¿cuántas filas grabará en el log ante un UPDATE de 50,000 registros?",
      "a": "Grabará una única fila en el log representando la operación genérica de modificación."
    },
    {
      "q": "Si programo un trigger DML de auditoría a nivel de fila (FOR EACH ROW), ¿cuántas filas grabará en el log ante un UPDATE de 50,000 registros?",
      "a": "Grabará de forma iterativa 50,000 filas independientes en la tabla del log de auditoría."
    },
    {
      "q": "¿Se puede usar FGA sobre sentencias de escritura (INSERT, UPDATE, DELETE)?",
      "a": "Sí, aunque brilla en auditar SELECTs, las políticas FGA soportan la fiscalización de DMLs complejos."
    },
    {
      "q": "En el uso de dbms_fga.add_policy, ¿qué indica el parámetro 'audit_column'?",
      "a": "Especifica el nombre concreto de la columna 'sensible' cuyo acceso desencadena la evaluación del registro de auditoría."
    },
    {
      "q": "¿Se puede crear un trigger que detecte y audite la desconexión inminente de un usuario?",
      "a": "Sí, utilizando un trigger del tipo BEFORE LOGOFF ON DATABASE."
    },
    {
      "q": "¿Qué rol predeterminado dota a un perfil técnico en Oracle del poder exclusivo para moldear las auditorías?",
      "a": "AUDIT_ADMIN."
    },
    {
      "q": "¿Qué vista muestra al DBA el resumen de todas las sentencias DDL y globales que están siendo auditadas?",
      "a": "DBA_STMT_AUDIT_OPTS."
    },
    {
      "q": "¿Qué función SQL sirve como sello de tiempo exacto para guardar marcas de auditoría dentro del bloque de un trigger?",
      "a": "Funciones como SYSDATE o CURRENT_TIMESTAMP."
    },
    {
      "q": "¿Qué ocurre típicamente con la operación original si el trigger que intenta guardar el log falla estrepitosamente?",
      "a": "Por norma general, arrastra a la transacción completa forzando un fallo y Rollback de la acción principal."
    },
    {
      "q": "¿Por qué FGA es más óptimo que Oracle Audit para monitorizar tablas gigantes?",
      "a": "Oracle Audit graba ciegamente cada interacción, mientras que FGA impone filtros semánticos para grabar solo incidentes relevantes ahorrando espacio."
    },
    {
      "q": "¿Reemplaza una correcta política de auditoría a los respaldos (Backups)?",
      "a": "No. La auditoría ofrece un análisis forense de autoría, pero no posee capacidad nativa de restauración frente a pérdida o corrupción severa."
    },
    {
      "q": "¿Es posible saber a través de la auditoría de sesión desde qué equipo cliente se ha intentado la intrusión?",
      "a": "Sí, la vista de sesión (DBA_AUDIT_SESSION) registra el identificador o nombre del terminal/cliente desde donde surgió el LOGON."
    },
    {
      "q": "¿Para qué se usa un trigger de inserción como AFTER INSERT sobre una tabla transaccional crítica en auditorías avanzadas?",
      "a": "Para exportar asíncronamente el histórico inmutable de nuevas operaciones a una tabla aislada (log) sin alterar la lógica de las apps clientes."
    },
    {
      "q": "¿Qué comando usarías en Oracle para auditar de forma global cada intento de creación de sesión (exitosa o no)?",
      "a": "AUDIT CREATE SESSION;"
    },
    {
      "q": "¿En qué se diferencia DBA_SYS_PRIVS de ROLE_SYS_PRIVS respecto a los privilegios?",
      "a": "DBA_SYS_PRIVS detalla privilegios concedidos de forma directa a usuarios/roles; ROLE_SYS_PRIVS muestra los privilegios que aportan roles subordinados accesibles por el usuario."
    },
    {
      "q": "¿Si concedo auditar con FGA 'DNAME' cuando 'deptno=30', se graba SELECT * FROM dept WHERE deptno=10?",
      "a": "No, ya que no se cumple el predicado de condición estipulado por audit_condition, evadiendo el log."
    }
  ],
  "activas": [
    {
      "q": "¿Qué diferencia elemental existe entre una BD Pasiva y una BD Activa?",
      "a": "La Pasiva actúa solo como almacén forzando a las aplicaciones a mantener la lógica; la Activa 'reacciona' y se defiende autónomamente de eventos internos modificando datos."
    },
    {
      "q": "¿A qué hace referencia el modelo de reglas ECA en diseño de bases de datos?",
      "a": "A los componentes de programación reactiva: Evento (Event), Condición (Condition) y Acción (Action)."
    },
    {
      "q": "¿Cuál es la carencia insalvable de la restricción declarativa CHECK frente a un Trigger?",
      "a": "La imposibilidad física de utilizar subconsultas dentro de un CHECK; solo puede evaluar columnas de la fila local en tiempo real."
    },
    {
      "q": "¿Qué es una Aserción (ASSERTION) en el estándar SQL?",
      "a": "Es una macro restricción declarativa de ámbito general para toda la base de datos capaz de evaluar subconsultas masivas."
    },
    {
      "q": "¿Qué SGBD comercial del mercado soporta y recomienda el uso de aserciones en producción?",
      "a": "Ninguno. Jamás fueron implementadas por ningún motor debido a su coste de procesamiento computacional inasumible."
    },
    {
      "q": "¿Qué eventos clásicos (DML) detonan y disparan un trigger sobre una tabla?",
      "a": "Cualquier instrucción final de INSERT, UPDATE o DELETE."
    },
    {
      "q": "¿Cuáles son los tres instantes de tiempo relativos (activación) disponibles en la declaración de un trigger?",
      "a": "BEFORE (antes), AFTER (después) e INSTEAD OF (en lugar de)."
    },
    {
      "q": "¿En qué circunstancias está fuertemente indicado usar un trigger BEFORE?",
      "a": "Para interceptar, auditar y validar datos entrantes antes de ser consolidados, permitiendo manipularlos en memoria o vetar su inserción."
    },
    {
      "q": "¿En qué circunstancias está fuertemente indicado usar un trigger AFTER?",
      "a": "Para consolidar registros inmutables de auditoría (logs) y realizar operaciones de propagación en cascada sobre otras estructuras."
    },
    {
      "q": "¿Sobre qué entidades exactas se permite el anclaje de disparadores INSTEAD OF?",
      "a": "De forma exclusiva y estricta sobre Vistas lógicas. Aplicarlo sobre tablas nativas es un error semántico."
    },
    {
      "q": "¿Qué milagro funcional permite la utilización de triggers INSTEAD OF?",
      "a": "Dotar de capacidades bidireccionales (inserción/modificación) a vistas inherentemente complejas y no actualizables (con JOINs o agrupaciones)."
    },
    {
      "q": "¿Qué es la granularidad FOR EACH ROW?",
      "a": "Determina que el código interno del trigger se ejecutará secuencialmente por cada registro que se vea modificado por la instrucción DML masiva."
    },
    {
      "q": "¿Qué es la granularidad FOR EACH STATEMENT?",
      "a": "Determina que el trigger operará en bloque una única vez por instrucción lanzada, sea para 1 tupla o para millones (es la opción por defecto)."
    },
    {
      "q": "¿Cómo se referencian los registros de transición en el estándar SQL:2008?",
      "a": "Mediante las palabras reservadas OLD ROW y NEW ROW."
    },
    {
      "q": "¿Cómo se referencian internamente los registros de transición dentro del bloque PL/SQL de Oracle?",
      "a": "Mediante los pseudo-registros nativos :old y :new."
    },
    {
      "q": "¿Qué valor reportan las variables del pseudo-registro :old en medio de un evento INSERT?",
      "a": "Un valor estrictamente NULL, dado que no existía historia previa del registro de la entidad."
    },
    {
      "q": "¿Qué valor reportan las variables del pseudo-registro :new en medio de un evento DELETE?",
      "a": "Un valor estrictamente NULL, dado que el estado final de la tupla es inexistente."
    },
    {
      "q": "¿Bajo qué pretexto se puede modificar y sobrescribir el valor de :old?",
      "a": "Bajo ninguno. El pseudo-registro :old es constante y estrictamente de solo lectura global."
    },
    {
      "q": "¿Bajo qué pretexto y momento temporal se permite inyectar datos manipulando el pseudo-registro :new en Oracle?",
      "a": "De forma exclusiva y excluyente desde dentro de disparadores ejecutados en modalidad BEFORE."
    },
    {
      "q": "¿Qué escenario desencadena el catastrófico error de Tabla Mutante (ORA-04091) en Oracle?",
      "a": "Se materializa si un trigger FOR EACH ROW realiza operaciones SQL (DML o SELECT) sobre la misma tabla que se halla inestable al haber disparado dicho evento."
    },
    {
      "q": "¿Es posible provocar un error de Tabla Mutante desde la granularidad FOR EACH STATEMENT?",
      "a": "No. Este escenario es un fenómeno patológico restringido solo a los ciclos intermedios de los triggers iterativos (FOR EACH ROW)."
    },
    {
      "q": "¿Qué elemento sintáctico opcional encarna el bloque C (Condición) de las reglas ECA limitando los disparos inútiles?",
      "a": "El uso de la cláusula WHEN a nivel estructural del trigger (no confundir con un IF dentro del PL/SQL)."
    },
    {
      "q": "¿Cómo puede un bloque PL/SQL interno adivinar si el evento de un trigger combinado fue un borrado o una actualización?",
      "a": "Haciendo uso analítico de los predicados de metadatos internos: INSERTING, UPDATING o DELETING."
    },
    {
      "q": "¿Se permite ejecutar la consolidación transaccional (COMMIT) desde el interior de un disparador DML clásico?",
      "a": "Terminantemente prohibido. El disparo pertenece umbilicalmente a la transacción original y no debe forzar consolidaciones asíncronas."
    },
    {
      "q": "¿Cómo se programa el aborto controlado y dramático de una transacción maliciosa desde dentro de un trigger de Oracle?",
      "a": "Llamando al procedimiento de detención forzosa: RAISE_APPLICATION_ERROR(-2000X, 'Mensaje personalizado')."
    },
    {
      "q": "¿Cuál es el destino fatal de la query DML original si su trigger asociado falla, es vetado, o crashea la memoria?",
      "a": "Provocará implícitamente un ROLLBACK parcial, deshaciendo los efectos nocivos de la query y emitiendo un código de aborto transaccional."
    },
    {
      "q": "¿Qué herramienta nativa del estándar SQL permite forzar detenciones análogas al RAISE_APPLICATION_ERROR?",
      "a": "La instrucción de señales: SIGNAL SQLSTATE 'codigo_personalizado', 'Motivo explicativo'."
    },
    {
      "q": "¿Cómo se neutralizan temporalmente todos los triggers encadenados a la entidad 'CLIENTES' en Oracle?",
      "a": "Lanzando DDL: ALTER TABLE clientes DISABLE ALL TRIGGERS;"
    },
    {
      "q": "¿Qué columna de la vista USER_TRIGGERS concentra la verdadera inteligencia procedimental del disparador?",
      "a": "La columna TRIGGER_BODY, albergando en formato plano el código fuente PL/SQL completo compilado en el motor."
    },
    {
      "q": "¿Es obligatorio anteponer los dos puntos a new.saldo cuando referenciamos la condición de filtro en la cláusula WHEN externa?",
      "a": "No, en la declaración externa explícita (WHEN new.saldo < 0) se escriben sin prefijo sintáctico (:) para el motor de compilación."
    },
    {
      "q": "¿Para auto-inicializar un código correlativo desde la secuencia 'SEQ1', usaríamos lógica tipo BEFORE o tipo AFTER?",
      "a": "Se exige invariablemente el uso de BEFORE y granularidad de fila, sobrescribiendo :new.id := SEQ1.NEXTVAL antes del volcado a disco."
    },
    {
      "q": "¿Cuál es el máximo peligro arquitectónico en bases de datos con cientos de triggers entrelazados en tablas operativas cruzadas?",
      "a": "Desencadenar cascadas mortales de disparos recursivos en bucles infinitos, colapsando silenciosamente el buffer y aniquilando el rendimiento del CPU y del I/O."
    },
    {
      "q": "Si en SQL Estándar necesitamos revisar toda la colección masiva de registros afectados tras un UPDATE genérico en una tabla de 100M filas... ¿A qué variables acudiremos?",
      "a": "Se invocarán los meta-nombres virtuales de las Tablas de Transición (OLD TABLE y NEW TABLE), no soportadas en Oracle nativo."
    },
    {
      "q": "Ante un trigger AFTER UPDATE FOR EACH ROW que registra logs por valor de salario, si realizo 'UPDATE EMP SET DEPT=20', ¿qué valdrá :old.sal y :new.sal en la auditoría?",
      "a": "Ambos variables coexistirán y reportarán matemáticamente el idéntico valor numérico de salario preexistente, ya que la columna salarial jamás mutó en dicha query."
    },
    {
      "q": "¿Si modificamos el trigger para usar INSTEAD OF DELETE en una vista, qué ocurrirá al escribir DELETE en el cliente SQL?",
      "a": "El borrado original a nivel de vista jamás surtirá efecto; el control es asumido absolutamente y en plenitud por el bloque interno del PL/SQL, borrando o no físicamente lo que dicte nuestro código."
    }
  ],
  "desenofisico": [
    {
      "question": "¿Qué niveles conforman la arquitectura ANSI/SPARC?",
      "answer": "Nivel externo (vistas), nivel conceptual (esquema) y nivel físico/interno (ficheros, bloques)."
    },
    {
      "question": "¿Cuál es la diferencia entre el nivel lógico y físico de los datos?",
      "answer": "El nivel lógico trata con tablas, vistas y SQL. El nivel físico trata con ficheros, bloques, extensiones e índices."
    },
    {
      "question": "¿Qué es una zona lógica (tablespace) en almacenamiento?",
      "answer": "Es el contenedor de estructuración lógica máximo, formado físicamente por uno o varios ficheros de datos (datafiles)."
    },
    {
      "question": "Nombra los tablespaces predeterminados creados por Oracle.",
      "answer": "SYSTEM, SYSAUX, UNDOTBS1, TEMP y USERS."
    },
    {
      "question": "¿Qué es un segmento (segment) en almacenamiento?",
      "answer": "Conjunto de datos asociados a un único objeto lógico (tabla o índice). Pertenece a un único tablespace."
    },
    {
      "question": "¿Qué es una extensión (extent) en almacenamiento?",
      "answer": "Es la unidad básica de asignación de espacio físico, consistente en un conjunto de bloques contiguos dentro de un fichero."
    },
    {
      "question": "¿Qué es un bloque de base de datos o página?",
      "answer": "Unidad mínima de transferencia de E/S entre el disco físico y la memoria RAM (Buffer Cache). Típicamente de 8KB."
    },
    {
      "question": "¿Qué caracteriza a una Heap Table (Tabla Apilada)?",
      "answer": "Las filas se insertan desordenadamente en bloques libres. Las inserciones son muy eficientes, pero las búsquedas son ineficientes."
    },
    {
      "question": "¿Cuándo es eficiente realizar un Full Table Scan (Exploración Completa)?",
      "answer": "Cuando la consulta tiene una selectividad muy baja (devuelve un alto porcentaje del volumen total de la tabla)."
    },
    {
      "question": "¿Qué es un índice en bases de datos?",
      "answer": "Una estructura auxiliar que permite acceso rápido a los registros usando la clave de indexación y evitando un Full Table Scan."
    },
    {
      "question": "¿Cuál es el tipo de índice predeterminado en la mayoría de SGBDs?",
      "answer": "El árbol B+ (INDEX_TYPE='NORMAL')."
    },
    {
      "question": "¿Qué almacena un nodo hoja de un árbol B+ convencional?",
      "answer": "Valores de la clave de indexación de forma ordenada junto con un puntero físico directo (ROWID) a la fila en la tabla."
    },
    {
      "question": "¿Verdadero o falso? Oracle indexa los valores NULL en un árbol B+ convencional.",
      "answer": "Falso. Si todas las columnas de la clave son nulas, no se genera ninguna entrada en el índice B+."
    },
    {
      "question": "¿Qué es un índice denso?",
      "answer": "Aquel en el que existe obligatoriamente una entrada en el índice por cada fila de la tabla."
    },
    {
      "question": "¿Qué es un índice disperso?",
      "answer": "Aquel donde existe una entrada por bloque o agrupación, requiriendo que la tabla base esté físicamente ordenada."
    },
    {
      "question": "¿Qué es un índice agrupado (Clustered Index en SQL Server)?",
      "answer": "Un índice donde la tabla física se ordena siguiendo estrictamente la secuencia de la clave del índice. Solo puede haber uno por tabla."
    },
    {
      "question": "¿Para qué se utiliza un índice REVERSE en Oracle?",
      "answer": "Para invertir los bytes de la clave y evitar embotellamientos (hot blocks) al insertar identificadores secuenciales concurrentes. Anula búsquedas por rango."
    },
    {
      "question": "¿Cuándo es ideal utilizar un índice BITMAP?",
      "answer": "Para columnas de muy baja cardinalidad (ej. género, país) en entornos analíticos y de Data Warehouse (OLAP)."
    },
    {
      "question": "¿Por qué no usar índices BITMAP en un entorno OLTP transaccional?",
      "answer": "Porque las modificaciones DML (INSERT/UPDATE) tienen un impacto devastador, bloqueando segmentos enteros de datos simultáneamente."
    },
    {
      "question": "¿Qué ventaja ofrecen los índices basados en funciones?",
      "answer": "Permiten indexar el resultado precalculado de una expresión matemática o de cadena (ej. UPPER(nombre), salario*1.2)."
    },
    {
      "question": "¿Qué es una Tabla Organizada por Índice (IOT) en Oracle?",
      "answer": "Una tabla donde la propia Heap Table desaparece y todos los datos de la fila se guardan directamente en los nodos hoja del árbol B+ de la clave primaria."
    },
    {
      "question": "Nombra una desventaja importante de las IOT.",
      "answer": "Las operaciones DML son pesadas por costosos rebalanceos en el árbol B+ y crear índices secundarios sobre la IOT penaliza el rendimiento."
    },
    {
      "question": "¿Qué es un Cluster en el diseño físico de Oracle?",
      "answer": "Estructura que almacena físicamente entremezclados en los mismos bloques de disco registros de múltiples tablas distintas que comparten una clave común."
    },
    {
      "question": "¿Qué diferencia un B+-Tree Cluster de un Hash Cluster?",
      "answer": "El B+-Tree usa un índice para apuntar al bloque, mientras que el Hash Cluster sustituye el índice por una función hash rápida y directa."
    },
    {
      "question": "¿Qué es el particionado de tablas?",
      "answer": "Estrategia de fragmentación horizontal que divide una tabla gigante en fragmentos físicos independientes más manejables denominados particiones."
    },
    {
      "question": "Nombra los tres tipos básicos de particionado de tablas.",
      "answer": "RANGE (por intervalos), LIST (categorías discretas), y HASH (distribución mediante algoritmo hash)."
    },
    {
      "question": "¿Qué diferencia hay entre un índice particionado local y global?",
      "answer": "El local se fragmenta con los mismos límites y particiones que la tabla base. El global cruza los límites lógicos de las particiones de la tabla."
    },
    {
      "question": "¿Qué es el \"Partition Pruning\" (exclusión de particiones)?",
      "answer": "Capacidad del optimizador de descartar completamente la lectura de particiones físicas que no cumplen el criterio de la consulta, acelerando la respuesta."
    },
    {
      "question": "¿Qué significa \"Alta Cardinalidad\" en una columna de base de datos?",
      "answer": "Que la columna contiene muchos valores distintos y únicos en el dominio (ej. DNI, email). Es ideal para crear índices B-Tree."
    },
    {
      "question": "¿Cuál es la \"trampa de los nulos\" al evaluar consultas como \"SELECT COMM FROM EMP\"?",
      "answer": "Si la columna COMM admite nulos, Oracle ignora cualquier índice B-Tree creado sobre ella y fuerza un Full Table Scan, porque los nulos no están indexados."
    }
  ],
  "optimizacion": [
    {
      "question": "¿Qué es el optimizador de consultas en un SGBD?",
      "answer": "El componente encargado de determinar el plan de ejecución o estrategia física más eficiente para resolver una consulta SQL declarativa."
    },
    {
      "question": "Enumera las 5 fases principales de la ejecución de una consulta.",
      "answer": "1. Análisis. 2. Transformación a álgebra relacional. 3. Optimización algebraica (heurística). 4. Optimización basada en costes (CBO). 5. Ejecución."
    },
    {
      "question": "¿En qué consiste la optimización algebraica (heurística)?",
      "answer": "Aplica reglas de equivalencia lógicas (sin usar estadísticas de datos) para generar la forma canónica del árbol reduciendo tuplas intermedias."
    },
    {
      "question": "Menciona la regla heurística fundamental sobre las selecciones (filtros).",
      "answer": "Realizar las selecciones (condiciones WHERE) lo antes posible, \"empujando\" las operaciones hacia las hojas del árbol."
    },
    {
      "question": "¿Cómo optimiza la heurística los productos cartesianos?",
      "answer": "Sustituyendo siempre que sea posible un Producto Cartesiano seguido de una Selección por un operador \"Join\" directo."
    },
    {
      "question": "¿En qué se fundamenta la Optimización Basada en Costes (CBO)?",
      "answer": "En evaluar planes físicos estimando matemáticamente el coste usando estadísticas del catálogo (número de filas, bloques, cardinalidad)."
    },
    {
      "question": "¿Cómo se mide el \"Coste Computacional\" en el CBO simplificado?",
      "answer": "Se mide estrictamente en el número de transferencias de bloques de disco físico hacia la memoria RAM (operaciones de E/S o I/O)."
    },
    {
      "question": "¿Qué es el Factor de Bloqueo (f_R)?",
      "answer": "El número promedio de filas de una tabla que pueden almacenarse dentro de un único bloque o página física en disco."
    },
    {
      "question": "¿Cuál es la fórmula del coste estimado de un Full Table Scan?",
      "answer": "Coste = b_R (donde b_R es el número total de bloques de la tabla). Útil cuando la selectividad de la consulta es baja."
    },
    {
      "question": "¿Cuál es el coste estimado de una búsqueda de igualdad usando un índice primario (Unique Scan)?",
      "answer": "Coste = h_idx + 1 (donde h_idx es la altura del árbol del índice y 1 es el acceso al bloque físico en tabla)."
    },
    {
      "question": "¿Cuál es el coste de búsqueda por rango usando un índice agrupado (Clustered)?",
      "answer": "Coste = h_idx + m (donde m es el número de bloques de datos secuenciales que se deben leer físicamente)."
    },
    {
      "question": "¿Por qué es muy costoso usar un índice secundario para leer muchas filas dispersas?",
      "answer": "Porque la tabla no está ordenada respecto al índice. Coste = h_idx - 1 + e + d (d=filas leídas), obligando a múltiples saltos de disco aleatorios."
    },
    {
      "question": "¿Qué hace la técnica combinada Bitmap Index Scan + Bitmap Heap Scan en PostgreSQL?",
      "answer": "Recopila ROWIDs del índice, los ordena linealmente en RAM según su posición física y luego lee el disco de forma contigua, mitigando saltos aleatorios."
    },
    {
      "question": "En un Join, ¿a qué llamamos Tabla Externa y Tabla Interna?",
      "answer": "Tabla externa = bucle exterior de control (evaluada una vez). Tabla interna = bucle interior (escaneada repetidamente por cada fila de la externa)."
    },
    {
      "question": "¿Cuál es el coste del Nested Loop Join (Bucle Anidado) en el peor escenario?",
      "answer": "Coste = b_R + (n_R * b_S). Obliga a leer toda la tabla interna (b_S) por cada una de las filas de la tabla externa (n_R)."
    },
    {
      "question": "¿Qué es el Indexed Nested Loop Join y cuál es su coste?",
      "answer": "Es cuando la tabla interna usa un índice B-Tree en la clave de unión. Coste = b_R + (n_R * C_indice). Reduce inmensamente el coste multiplicativo."
    },
    {
      "question": "Explica brevemente el Sort-Merge Join (Ordenación-Mezcla).",
      "answer": "Ambas relaciones se ordenan independientemente por la clave común y luego se fusionan/entrelazan leyendo cada tabla linealmente una sola vez."
    },
    {
      "question": "Explica brevemente el Hash Join.",
      "answer": "Construye en memoria una tabla Hash usando la tabla externa (Build Phase) y luego escanea la tabla interna grande evaluándola contra el Hash (Probe Phase)."
    },
    {
      "question": "¿Qué algoritmos de Join están limitados exclusivamente a resolver \"equijoins\" (operador de igualdad)?",
      "answer": "Sort-Merge Join y Hash Join."
    },
    {
      "question": "¿Qué algoritmo de Join usará el CBO si la condición es una desigualdad (ej. >, <, !=)?",
      "answer": "Invariablemente el optimizador forzará la ejecución de un algoritmo Nested Loops (Bucles Anidados)."
    },
    {
      "question": "En Oracle, ¿qué diferencia los objetivos de optimización ALL_ROWS y FIRST_ROWS_n?",
      "answer": "ALL_ROWS maximiza el throughput global (rendimiento total). FIRST_ROWS_n prioriza minimizar el tiempo de respuesta inicial de las primeras n filas."
    },
    {
      "question": "¿Qué nos indica la tabulación o indentación en un informe EXPLAIN PLAN?",
      "answer": "Jerarquía temporal: los nodos tabulados más a la derecha se ejecutan primero, siendo accesos a disco que alimentan (pipeline) a sus nodos padre superiores."
    },
    {
      "question": "¿Cómo afecta usar \"SELECT COUNT(salario)\" si la columna \"salario\" admite valores nulos?",
      "answer": "Oracle NO podrá usar el índice B-Tree (ya que los nulos no están). Ejecutará un costoso Full Table Scan. Si se usase COUNT(*) o el campo tuviese NOT NULL, usaría INDEX FAST FULL SCAN."
    },
    {
      "question": "En un plan de ejecución, ¿qué indica el paso \"FILTER\" si está inmediatamente encima de un \"GROUP BY\"?",
      "answer": "Indica inequívocamente la evaluación y filtrado lógico de la cláusula HAVING de la consulta original."
    },
    {
      "question": "¿Qué diferencia a un INDEX RANGE SCAN de un INDEX FAST FULL SCAN?",
      "answer": "INDEX RANGE SCAN recorre el árbol de forma secuencial y ordenada devolviendo filas acotadas. FAST FULL SCAN lee masiva y desordenadamente los bloques de disco del índice (útil para agregaciones globales)."
    },
    {
      "question": "¿Por qué es indispensable usar periódicamente el paquete DBMS_STATS en Oracle?",
      "answer": "Para actualizar el diccionario. Si las estadísticas (filas, bloques) son antiguas, el CBO tomará decisiones algorítmicas pésimas basadas en estimaciones falsas."
    },
    {
      "question": "¿Qué indica la segunda regla de optimización heurística respecto a las Proyecciones?",
      "answer": "Aplicar las proyecciones lo más pronto posible para descartar columnas irrelevantes, reduciendo el tamaño en bytes de las tuplas intermedias cargadas en RAM."
    },
    {
      "question": "¿En qué caso el algoritmo \"Nested Loop Join\" (Bucle Anidado normal) es una estrategia muy eficiente?",
      "answer": "Cuando la tabla externa es de tamaño extremadamente pequeño y la tabla interna cuenta con un índice rápido (Unique/Range Scan) en la condición de join."
    },
    {
      "question": "Para un \"In-memory Hash Join\", ¿cuál de las dos tablas debe ser elegida obligatoriamente como Tabla Externa?",
      "answer": "La tabla de menor volumen (Build table), para garantizar que la estructura matemática del Hash quepa de forma íntegra en la memoria RAM."
    },
    {
      "question": "¿Qué ocurre si el optimizador CBO detecta que un HINT (ej. /*+ INDEX(...) */) provocaría devolver resultados falsos o incompletos?",
      "answer": "El optimizador anula el HINT, tiene directiva para ignorarlo si compromete la integridad semántica de la consulta (ej. forzar índice sobre columna con nulos pidiendo todas las filas)."
    },
    {
      "q": "En los planes de ejecución de Oracle, ¿qué hace la operación INDEX FULL SCAN?",
      "a": "Lee de forma ordenada todos los bloques hoja de un índice, evitando el Full Table Scan cuando la consulta se resuelve usando solo las columnas indexadas."
    }
  ],
  "recuperacion": [
    {
      "question": "¿Qué es el concepto de \"Recuperación\" en Bases de Datos?",
      "answer": "Es el proceso algorítmico, basado en redundancia, que devuelve la BBDD a un estado consistente tras un fallo o corrupción."
    },
    {
      "question": "Define los tres niveles de almacenamiento físicos.",
      "answer": "Volátil (se destruye al reiniciar, RAM), No Volátil (permanece sin energía pero sujeto a rotura, HDD), y Estable (utópico, la información nunca se pierde, RAID/réplicas)."
    },
    {
      "question": "Lista las propiedades fundamentales transaccionales \"ACID\".",
      "answer": "Atomicidad (todo o nada), Consistencia, Aislamiento (Isolation, operaciones invisibles entre sí), y Durabilidad (Persistencia ante caídas)."
    },
    {
      "question": "En el flujo a bajo nivel, ¿qué hace la instrucción física \"Input(B)\"?",
      "answer": "Lee el bloque de datos físico \"B\" del disco duro no volátil y lo inyecta en la caché de memoria RAM volátil (Buffer Cache)."
    },
    {
      "question": "¿Qué hace la instrucción física \"Output(B)\"?",
      "answer": "Vuelca y consolida de forma permanente el bloque de datos modificado \"B\" desde la RAM volátil hacia el disco duro no volátil."
    },
    {
      "question": "¿Es cierto que la orden de programa \"Write(X)\" graba instantáneamente en el disco duro? (La trampa del Write)",
      "answer": "No, \"Write(X)\" sólo altera los datos dentro de la memoria RAM (Buffer Cache). El vuelco diferido a disco dependerá de la instrucción Output(B)."
    },
    {
      "question": "¿En qué consiste un \"Fallo con pérdida de almacenamiento volátil (Caída del sistema)\"?",
      "answer": "Interrupción repentina (apagón) que borra la memoria RAM. El disco queda inconsistente con transacciones a medias y sin los últimos commits no volcados. Se repara sólo leyendo los Logs."
    },
    {
      "question": "¿Qué se debe usar en caso de \"Fallo con pérdida de almacenamiento no volátil (Desastre de Disco)\"?",
      "answer": "Se requiere instalar de cero la Base de Datos, restaurar la Copia de Seguridad Física completa (Backup) e inyectar el histórico íntegro de Archivos de Log Offline."
    },
    {
      "question": "Dictamina la \"Regla de Oro\" del protocolo WAL (Write-Ahead Logging).",
      "answer": "Ningún cambio sobre datos puede grabarse físicamente en los bloques del disco sin que antes ese mismo cambio esté registrado de forma segura e inalterable en el fichero de Log (disco)."
    },
    {
      "question": "Explica las políticas Steal (Robar) y No-Force (No forzar) del Buffer.",
      "answer": "Steal permite guardar bloques sucios a disco antes de que la transacción haga commit. No-Force no exige grabar a disco en el milisegundo exacto en que la transacción emite commit."
    },
    {
      "question": "¿Qué impacto tienen las políticas Steal y No-Force en la recuperación del sistema?",
      "answer": "La política Steal obliga a disponer de operaciones \"UNDO\" (Deshacer). La política No-Force obliga a disponer de operaciones \"REDO\" (Rehacer)."
    },
    {
      "question": "¿Cómo es el registro en la técnica de Actualizaciones Diferidas?",
      "answer": "Formato de 3 campos: <T_id, Elemento, Imagen-Posterior>. No hay Imagen Anterior porque el sistema nunca mancha el disco antes del commit."
    },
    {
      "question": "¿Se ejecutan operaciones UNDO en sistemas de Actualización Diferida?",
      "answer": "No, jamás. Las transacciones fracasadas nunca tocaron físicamente el disco; simplemente se descartan ignorándolas por completo al reiniciar."
    },
    {
      "question": "¿Cómo es el registro en la técnica de Actualizaciones Inmediatas?",
      "answer": "Formato de 4 campos completos: <T_id, Elemento, Imagen-Anterior, Imagen-Posterior>. Precisa los valores previos para dar soporte al UNDO de política Steal."
    },
    {
      "question": "Tras una caída en sistemas de Actualización Inmediata, ¿en qué estricto orden cronológico se efectúan las fases de recuperación?",
      "answer": "Es de ejecución obligatoria realizar íntegramente la fase total de \"UNDO\" (Limpieza) en primer lugar, y solo entonces arrancar la fase \"REDO\" (Consolidación)."
    },
    {
      "question": "¿Por qué es crítico que las funciones UNDO y REDO posean propiedad \"Idempotente\"?",
      "answer": "Porque ejecutar la corrección infinitas veces es igual que ejecutarla una vez. Esto permite que si la máquina vuelve a sufrir un apagón mientras el gestor recupera, el motor inicie de nuevo sin duplicar valores."
    },
    {
      "question": "Define una operación general de \"CHECKPOINT\" (Punto de Control).",
      "answer": "Suspensión temporal del sistema para forzar obligatoriamente el volcado masivo (Output) al disco duro de los buffers de Log y datos de la RAM, estampando una firma en el Log."
    },
    {
      "question": "¿Qué efecto tiene una marca de CHECKPOINT sobre el procesamiento de logs?",
      "answer": "Actúa como \"barrera infranqueable\": toda transacción que hubiera consolidado exitosamente su COMMIT de manera previa al checkpoint se ignora y descarta completamente, aligerando el RTO."
    },
    {
      "question": "En un Log Inmediato, ¿quién entra en la lista de castigo de la fase UNDO?",
      "answer": "Cualquier transacción que refleje un START pero carezca en el historial post-caída de su orden correlativa e indispensable de COMMIT o ROLLBACK."
    },
    {
      "question": "En un Log Inmediato, ¿quién entra en la lista de consolidación de la fase REDO?",
      "answer": "Únicamente aquellas transacciones que exhiben formalmente un apunte físico de COMMIT consolidado en el Log antes del momento exacto del apagón."
    },
    {
      "question": "Diferencia esencial entre \"Backup Lógico (Exportación SQL)\" y \"Backup Físico\".",
      "answer": "El Lógico es texto plano de INSERTs y no admite la aplicación posterior de Archivos de Log. El Backup Físico es bit a bit y sí soporta inyectar en bloque los Archive Logs (Roll-forward)."
    },
    {
      "question": "¿Qué define a los \"Redo Logs Online\"?",
      "answer": "Ficheros rotativos preasignados en anillo; capturan modificaciones candentes reescribiéndose sobre sí mismos cíclicamente cuando se agotan."
    },
    {
      "question": "¿Qué misión tienen los \"Archive Logs (Logs Offline)\"?",
      "answer": "Son copias blindadas de sólo lectura de los Redo Logs Online completados. No se borran nunca y retienen la secuencia histórica infinita requerida para recuperación catastrófica en frío."
    },
    {
      "question": "¿Por qué es inútil una Exportación SQL Pura para una contingencia Up-to-the-minute de rotura de hardware?",
      "answer": "Carece de estructura subyacente física que permita al gestor de recuperación engarzar los bloques matemáticos del Log y reproducir transacciones al dedillo posteriores a la foto de exportación."
    },
    {
      "question": "En un Log Inmediato, ocurre Checkpoint(T2, T3 activas). T2 hace COMMIT y luego el servidor cae. ¿Qué pasará?",
      "answer": "Se efectuará REDO(T2) porque culminó. Se aplicará UNDO(T3) analizando las modificaciones logradas de forma regresiva, porque T3 quedó en ascuas."
    },
    {
      "question": "¿Cuál es el paso más crucial del ciclo de salvaguarda de norma ISO/IEC 27001 (PDCA)?",
      "answer": "La fase CHECK (Verificar). Simular de forma periódica e íntegra el procedimiento drástico de restauración de los datos en otro servidor aislado de pruebas."
    },
    {
      "question": "¿Cómo restituye la infraestructura utilizando Backups Incrementales?",
      "answer": "Aplica el \"parche\" gigante inyectando primero la base del último Backup Completo seguido del último Backup Incremental generado (que alberga bloques divergentes)."
    },
    {
      "question": "Al ejecutar formalmente una fase \"UNDO\", ¿en qué sentido direccional se explora el fichero de log?",
      "answer": "Se realiza cronológicamente \"hacia atrás\" (del final abajo, hacia el principio arriba), restableciendo metódicamente la \"Imagen Anterior\"."
    },
    {
      "question": "Al arrancar formalmente una fase \"REDO\", ¿en qué sentido se explora el Log?",
      "answer": "Se evalúa secuencialmente \"hacia adelante\" (de arriba hacia abajo), reimplantando sólidamente la \"Imagen Posterior\" del registro en el bloque."
    },
    {
      "question": "A nivel de diseño de recuperación, ¿por qué es imperativa la dualidad Atomicidad y Durabilidad juntas?",
      "answer": "La Atomicidad invoca los UNDO para demoler intentos sucios transitorios. La Durabilidad requiere de REDOs para fortificar transacciones legítimas que la lentitud del disco no pudo persistir."
    }
  ],
  "concorrencia": [
    {
      "question": "¿Cuál es la misión nuclear del Control de Concurrencia?",
      "answer": "Asegurar que la ejecución simultánea de transacciones entrelazadas emita un resultado final intachable idéntico al que se conseguiría ejecutándolas aisladas en cola de a uno."
    },
    {
      "question": "Nombra los 4 problemas o anomalías universales generadas por carencia de Control.",
      "answer": "Actualización Perdida (Lost Update), Lectura Sucia (Dirty Read), Análisis Incoherente / Lectura No Repetible, y Filas Fantasmas."
    },
    {
      "question": "Explica el desastre de \"Actualización Perdida\" (Lost Update).",
      "answer": "Dos procesos leen concurrentemente la misma tupla, calculan valores en RAM, y al grabar a disco duro secuencialmente, el segundo destruye y sobreescribe de forma ciega todo el trabajo del primero."
    },
    {
      "question": "¿Por qué la \"Lectura Sucia\" (Dirty Read) quiebra fatalmente el modelo ACID?",
      "answer": "Permite a una transacción (T2) nutrirse de las modificaciones efímeras de otra (T1) que no ha concluido. Si T1 ejecuta ROLLBACK, todo el trabajo y commit de T2 quedará basado en alucinaciones."
    },
    {
      "question": "Aparte de los errores numéricos, ¿qué causa una \"Lectura Sucia\" desde el punto de vista arquitectónico?",
      "answer": "Crea \"Planificaciones No Recuperables\". El sistema queda incapacitado para anular limpiamente T1, ya que destruiría a una T2 que previamente fue declarada finalizada con éxito."
    },
    {
      "question": "Define \"Lectura No Repetible\" o Análisis Incoherente.",
      "answer": "Transcurre cuando una misma transacción T1 lee dos veces la misma variable y arroja cifras incompatibles porque una transacción exógena logró empotrar de forma silenciosa un UPDATE intermedio con su COMMIT."
    },
    {
      "question": "Precisa qué particulariza a la anomalía \"Filas Fantasmas\".",
      "answer": "Es una Lectura No Repetible pero de rango coleccional. T1 extrae una tabla de empleados, T2 añade sigilosamente otro individuo. Al re-ejecutar T1, se materializan o esfuman conjuntos de personas enteros."
    },
    {
      "question": "¿Qué convierte a una planificación en \"Serializable por Conflictos\"?",
      "answer": "Que es algebraicamente reducible y equivalente a una ejecución secuencial serie pura. Matemáticamente, exige que su Grafo de Precedencia/Espera carezca totalmente de nudos cíclicos."
    },
    {
      "question": "Deduce cuándo dos operaciones se evalúan teóricamente como \"Acciones en Conflicto\".",
      "answer": "Deben pertenecer a transacciones rivales diferentes, atacar exactamente sobre la misma tupla o variable común y, por lo menos una de las dos partes, ser de naturaleza de Escritura."
    },
    {
      "question": "Describe el funcionamiento del Grafo de Precedencia / Grafo de Espera.",
      "answer": "Representa transacciones como nodos. Una flecha de T1 a T2 asiente que T1 aguarda a T2. Si la telaraña exhibe círculos cerrados (ciclos), el sistema decreta Interbloqueo (Deadlock)."
    },
    {
      "question": "¿En qué principios se sustenta el protocolo de bloqueo 2PL (Two-Phase Locking)?",
      "answer": "Impone la segregación en 2 fases monolíticas: Crecimiento (la transacción sólo consigue nuevos bloqueos o promociona preexistentes) y Decrecimiento (sólo afloja bloqueos, y jamás solicita ninguno nuevo)."
    },
    {
      "question": "Diferencia estelar entre la especificación 2PL Estricta y la variante 2PL Rigurosa.",
      "answer": "Estricto libera bloqueos pasivos compartidos (S) tempranamente guardando los (X) de escritura para el final. Riguroso atesora todos, negando liberar S o X hasta que se pronuncia la confirmación COMMIT."
    },
    {
      "question": "¿A qué denominamos \"Interbloqueo\" (Deadlock)?",
      "answer": "Situación paradójica irresoluble en la que un grupo de transacciones se detiene de forma infinita esperando eternamente a que otra de la agrupación libere sus respectivos recursos encadenados."
    },
    {
      "question": "Las políticas de prevención Marcas de Tiempo castigan a T1 si bloquea a T2. Explica la norma \"Esperar-Morrer\" (Wait-Die).",
      "answer": "Favorece a los ancianos. Si T_Vieja choca con bloqueo de T_Joven, T_Vieja aguarda cortésmente. Si T_Joven choca contra T_Vieja, T_Joven muere y aborta por su insolencia."
    },
    {
      "question": "Explica la técnica combativa \"Ferir-Esperar\" (Wound-Wait) frente a interbloqueos.",
      "answer": "Si T_Vieja demanda el recurso de T_Joven, T_Vieja la \"hiere\" (Wound) induciendo el aborto fulminante de la T_Joven. Si T_Joven demanda a la T_Vieja, la T_Joven se subordina a esperar pasivamente."
    },
    {
      "question": "En Marcas de Tiempo elementales, define qué representan \"ML(A)\" y \"ME(A)\".",
      "answer": "Son las etiquetas del dato A. ML(A) guarda la marca de tiempo \"M(T)\" de la transacción MÁS JOVEN que visualizó el dato. ME(A) guarda la M(T) de la más joven que lo sobrescribió."
    },
    {
      "question": "Algoritmo Marcas de Tiempo: ¿Por qué resulta abortada por un ROLLBACK la transacción T1 al leer un dato A que posee M(T1) < ME(A)?",
      "answer": "Intenta escrutar al dato \"A\" de una manera desfasada en la historia; una transacción más moderna ya modificó permanentemente a \"A\". Provocaría lectura temporal contaminada e irracional."
    },
    {
      "question": "Detalla la función salvadora de la Regla de Thomas en la Escritura.",
      "answer": "Si T1 solicita escribir pero su época es M(T1) < ME(A) (intento de modificar una tupla del pasado), se aborta la actualización IGNORANDO de forma indolora la orden, pero sin disparar un ROLLBACK general."
    },
    {
      "question": "Arquitectura Multiversión (MVCC): ¿Cuál es el principal axioma competitivo de Oracle mediante el uso del Undo Log?",
      "answer": "Las transacciones escritoras (UPDATE) nunca obstruyen ni bloquean las lecturas concurrentes (SELECT), y viceversa. Optimiza la fluidez transaccional y suprime infinidad de Deadlocks."
    },
    {
      "question": "En MVCC, si una transacción T2 desea leer una tupla que posee varias copias/versiones almacenadas en el catálogo. ¿Cuál escoge exactamente?",
      "answer": "Inspecciona las metadatas físicas para reclutar la versión que registre el ME (Marca Escritura) MÁS ELEVADO posible de todo el conjunto de valores que sean iguales o menores a su propio identificador M(T2)."
    },
    {
      "question": "MVCC de escritura: ¿Cuándo el motor admite exitosamente escribir sin abortos por colisiones temporales (rollback forzoso)?",
      "answer": "Exclusivamente si corrobora que la identidad temporal de la transacción T es matemáticamente igual o superior a la Marca de Lectura ML del elemento (es decir, M(T) >= ML(A))."
    },
    {
      "question": "Consolidación MVCC: ¿Qué acción anatómica sucede si la escritura MVCC es válida y se aprueba exitosamente en memoria?",
      "answer": "Se penaliza sobreescribir físicamente el bloque madre anterior. Se inyecta obligatoriamente la creación de una versión física completamente original y nueva encadenada en el soporte de almacenamiento."
    },
    {
      "question": "¿Cuál es la particularidad de una \"Escritura a Ciegas\" (Blind Write)?",
      "answer": "Fenómeno admitido en SQL de enviar directamente sentencias de sustitución agresivas (UPDATE o DELETE incondicionales) sin haberse preocupado ni validado previamente la lectura del dato usando un SELECT."
    },
    {
      "question": "Nivel estándar \"READ COMMITTED\" del SGBD: ¿Cuál es el agujero de vulnerabilidad que permite y por qué motivo?",
      "answer": "Abandona velozmente los bloqueos de lectura (S) línea por línea sin esperar al COMMIT general, promoviendo la materialización tolerada de las anomalías Lectura No Repetible y Filas Fantasmas."
    },
    {
      "question": "¿Cómo blindaríamos imperativamente un comando de lectura crítica SQL en entorno \"READ COMMITTED\" para evadir Lecturas No Repetibles?",
      "answer": "Erigiendo un enclave pesimista adosando la cláusula innegociable \"FOR UPDATE\" en la terminación de la instrucción SELECT originaria."
    },
    {
      "question": "Concordancia Teórica: ¿Qué repercusión técnica acarrea la autorización explícita de \"Escrituras a Ciegas\" en un entorno relacional?",
      "answer": "Habilita legalmente arquitecturas que, aun arrojando grafos circulares prohibidos de Seriabilidad por Conflictos, son catalogadas por la academia como Serializables por Vistas puras."
    },
    {
      "question": "Mecánica de Fallo en MVCC: Explica por qué una T_Vieja se anula si trata de modificar tupla A_1 donde ML(A_1) > M(T_Vieja).",
      "answer": "Destruye las garantías de Aislamiento, dado que obligaría a reescribir de forma parasitaria la tupla madre que otra T_Moderna ya ha extraído e incorporado irreversiblemente a sus resultados locales."
    },
    {
      "question": "Distinción algorítmica pasiva frente a proactiva en Interbloqueos (Deadlocks).",
      "answer": "La pasiva detiene cíclicamente el reloj forzando el escaneo del Grafo de Esperas Wait-For matando arbitrariamente a una víctima. La proactiva interviene anticipadamente mediante marcas (Wait-Die, Wound-Wait)."
    },
    {
      "question": "Control Multiversión (MVCC): Al crear una nueva versión T3(Valor=55), ¿qué metadatos iniciales adoptará irrevocablemente esta nueva fila?",
      "answer": "Impondrá taxativamente como cota cronológica inicial de la nueva estructura: Marca_Lectura ML = 3 y Marca_Escritura ME = 3, congelando las magnitudes temporales relativas de origen de la transacción T3."
    },
    {
      "question": "Diferencia pragmática y de penetración entre los modos de Bloqueo Exclusivo (X) y Compartido (S).",
      "answer": "El compartido (S) concede acceso concurrente pacífico para visualización masiva; el Exclusivo (X) despliega un monopolio hostil expulsando de forma obligatoria cualquier otra lectura paralela sobre dicha celda."
    }
  ],
  "concurrencia": [
    {
      "q": "¿Cuándo entra en acción la Regla de Escritura de Thomas (Thomas Write Rule)?",
      "a": "Cuando una transacción intenta escribir un dato que ya ha sido modificado por otra transacción más 'moderna' (con mayor marca de tiempo). La escritura simplemente se ignora (no se aborta)."
    }
  ]
};