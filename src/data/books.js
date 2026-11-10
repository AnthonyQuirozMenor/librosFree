export const bookCategories = [
  { id: 'todos', label: 'Todos los libros' },
  { id: 'Literatura peruana', label: 'Literatura peruana' },
  { id: 'Novelas', label: 'Novelas' },
  { id: 'Cuentos', label: 'Cuentos' },
  { id: 'Poesía', label: 'Poesía' },
  { id: 'Literatura juvenil', label: 'Literatura juvenil' },
  { id: 'Obras clásicas', label: 'Obras clásicas' },
  { id: 'Educación y cultura', label: 'Educación y cultura' }
];

export const booksData = [
  {
    id: 'el-caballero-carmelo',
    title: 'El Caballero Carmelo',
    author: 'Abraham Valdelomar',
    authorId: 'abraham-valdelomar',
    genre: 'Cuentos',
    categories: ['Literatura peruana', 'Cuentos', 'Literatura juvenil', 'Obras clásicas'],
    year: 1913,
    isFeatured: true,
    isPeruvian: true,
    isRecent: false,
    addedOrder: 10,
    accessType: 'full',
    rightsNotice: 'Obra en Dominio Público · Texto íntegro del cuento clásico peruano',
    pdfUrl: './public/books/el-caballero-carmelo.pdf',
    cover: './src/assets/books/caballero-carmelo.svg',
    description: 'Obra maestra del cuento peruano ambientada en San Andrés de los Pescadores (Pisco). Narra con profunda ternura familiar la llegada y el heroico combate final del gallo Carmelo.',
    pages: [
      {
        chapter: 'Capítulo I · El retorno de Roberto',
        content: [
          'Un día, después del desayuno, cuando el sol empezaba a calentar, vimos aparecer, desde la reja, en el fondo de la plazoleta, un jinete en bellísimo caballo de paso, pañuelo al cuello que agitaba el viento, sanpedrano pellón de sedosa cabellera negra, y henchida alforja, que picaba espuelas en dirección a la casa.',
          'Reconocímosle. Era el hermano mayor que, años corridos, volvía. Salimos atropelladamente gritando: —¡Roberto! ¡Roberto!',
          'Entró el viajero al empedrado patio donde el ñorbo y la campanilla enredábanse en las columnas como venas en un brazo, y descendió en los brazos de todos nosotros. ¡Cómo se regocijaba mi madre! Tocábalo, acariciaba su tostada piel, encontrábalo viejo, triste, delgado.',
          'Con su ropa empolvada aún, Roberto recorría las habitaciones rodeado de nosotros; fue a su cuarto, pasó al comedor, vio los objetos que se habían comprado durante su ausencia, y llegó al jardín: —¿Y la higuerilla? —dijo. Buscaba, entristecido, aquel árbol cuya semilla sembrara él mismo antes de partir.'
        ]
      },
      {
        chapter: 'Capítulo II · El regalo para el padre',
        content: [
          'Sobre la mesa del comedor abrió Roberto sus alforjas y empezó a repartir los regalos que traía para cada uno de los miembros de la familia: quesos frescos, chancacas, dulces de las comarcas vecinas y pequeñas reliquias del viaje.',
          'Por fin extrajo una jaula de cañas y dijo a mi padre: —Para ti, papá: el Caballero Carmelo.',
          'Y así entró en nuestra casa aquel hidalgo gallo de pelea. Esbelto, magro, musculoso y austero, su afilada cabeza roja era la de un hidalgo altivo, caballeroso, justiciero y prudente.',
          'Agallas bermejas, delgada cresta de encendido color, ojos vivos y redondos, mirada fiera y perdonadora, acerado pico agudo. La cola hacía un arco de plumas tornasoles, su cuerpo de color carmelo avanzaba en el pecho audaz y duro. Las piernas fuertes, que estacas musulmanas y agudas defendían, cubiertas de escamas, parecían las de un armado caballero medieval.'
        ]
      },
      {
        chapter: 'Capítulo III · La vida en San Andrés de los Pescadores',
        content: [
          'Nuestra aldea, San Andrés de los Pescadores, aldea de gentes sencillas, elevaba sus casitas entre el rumor de las olas y las palmeras silenciosas. Al amanecer, los pescadores lanzaban sus embarcaciones al mar tranquilo mientras el canto claro del Carmelo despertaba a toda la vecindad.',
          'Durante tres años el Carmelo fue el orgullo de la casa y el héroe invicto de la comarca. Envejecía con dignidad en su corral, querido por todos nosotros, hasta que una tarde mi padre aceptó un reto de honor para el día de la Patria, el 28 de julio, frente al joven y arrogante gallo Ajiseco.',
          'La noticia llenó de angustia nuestros corazones infantiles. Veíamos al Carmelo silencioso, preparándose sin saberlo para una lid desigual contra un rival más joven y vigoroso.'
        ]
      },
      {
        chapter: 'Capítulo IV · El combate del 28 de julio',
        content: [
          'Llegó el día terrible. En la cancha de San Andrés se congregó todo el pueblo. El juez hizo sonar la campanilla y soltaron a los dos rivales.',
          'El Ajiseco dio el primer embate con furia ciega; el Carmelo, con la noble serenidad de los antiguos caballeros, esquivó y respondió con precisión. Sin embargo, el cansancio de los años y una herida profunda hicieron flaquear al viejo campeón.',
          'Cuando todos creían vencido al Carmelo, herido y jadeante, recordó su antigua estirpe: incorporóse con supremo esfuerzo, miró fijamente a su adversario y asestó un golpe certero que dejó al Ajiseco tendido con el pico enterrado en la arena. El Carmelo había triunfado.'
        ]
      },
      {
        chapter: 'Capítulo V · El ocaso de un hidalgo',
        content: [
          'Llevamos al Carmelo de regreso a casa en brazos, prodigándole cuidados con agua fresca y granos escogidos. Durante dos días estuvo abatido, rodeado del cariño silencioso de mis hermanos y de mi madre.',
          'En la tarde del segundo día, acercóse a la ventana, miró la luz dorada del crepúsculo marino, desplegó por última vez sus alas de color carmelo, lanzó un canto débil pero altivo, y expiró serenamente.',
          'Así pasó por el mundo aquel gallo hidalgo, dejando en nuestra memoria infantil la huella imborrable del valor, la lealtad y la hermosura silenciosa de la costa peruana.'
        ]
      }
    ]
  },
  {
    id: 'tradiciones-peruanas',
    title: 'Tradiciones Peruanas (Selección Clásica)',
    author: 'Ricardo Palma',
    authorId: 'ricardo-palma',
    genre: 'Obras clásicas',
    categories: ['Literatura peruana', 'Obras clásicas', 'Cuentos', 'Educación y cultura'],
    year: 1872,
    isFeatured: true,
    isPeruvian: true,
    isRecent: false,
    addedOrder: 9,
    accessType: 'full',
    rightsNotice: 'Obra en Dominio Público · Tradiciones clásicas completas de Ricardo Palma',
    pdfUrl: './public/books/tradiciones-peruanas.pdf',
    cover: './src/assets/books/tradiciones-peruanas.svg',
    description: 'Relatos breves que combinan historia virreinal y republicana del Perú con picardía criolla, refranes populares e imaginación literaria inigualable.',
    pages: [
      {
        chapter: 'Tradición I · Don Dimas de la Tijereta (Parte I)',
        content: [
          'Cuento de viejas que trata de cómo un escribano le ganó un pleito al diablo.',
          'Érase que se era y el mal que se vaya y el bien se nos venga, que en los primeros años del siglo pasado existía, en plena portalada de Escribanos de las tres veces coronada ciudad de los Reyes del Perú, un cartulario llamado don Dimas de la Tijereta, miembro del Real Colegio de Escribanos.',
          'Tijereta había llegado a la vejez acumulando escudos de plata y malas mañas de pluma, pero cayó locamente prendado de la joven Visitación, quien jamás le correspondía ni con una sonrisa.',
          'Desesperado de amor en una noche limeña, don Dimas exclamó en voz alta: —¡Venga un diablo cualquiera y llévese mi almilla a cambio del amor de esa muchacha!'
        ]
      },
      {
        chapter: 'Tradición I · Don Dimas de la Tijereta (Parte II)',
        content: [
          'En el acto presentóse Lilit, secretario de Satanás, y firmaron un documento formal por el cual don Dimas entregaba su «almilla» al cabo de tres años a cambio de verse correspondido.',
          'Cumplido el plazo de tres años, Lilit reclamó a don Dimas su pago. El astuto escribano limeño, sin inmutarse, se desvistió la chaqueta y entregó al demonio su prenda interior de lana diciendo: —Aquí tiene usted mi almilla, que según el diccionario de la lengua castellana es la prenda de vestir que llevo puesta; que si usted quiso decir mi alma, debió escribirlo con todas sus letras.',
          'Llevado el pleito ante los jueces infernales, el diccionario dio la razón al escribano limeño, y desde entonces quedó en el infierno el refrán de que a escribano de Lima ni el mismo Satanás le gana un litigio.'
        ]
      },
      {
        chapter: 'Tradición II · ¡Al rincón! ¡Quita calzón!',
        content: [
          'En los tiempos en que gobernaba el Perú el virrey conde de Superunda, visitó el obispo Chávez de la Rosa el seminario de Arequipa para examinar a los alumnos de latinidad.',
          'El maestro, enfadado por la distracción de los escolares, castigaba a quienes no respondían con la severa frase de la época: «¡Al rincón! ¡Quita calzón!». Cuando tocó el turno al más pequeño de la clase, un niño despierto llamado Francisco Javier de Luna Pizarro, el obispo le hizo varias preguntas difíciles que el niño contestó con asombrosa rapidez.',
          'Finalmente, el obispo le preguntó en broma: —¿Cuántos "Dominus vobiscum" tiene la misa? El niño guardó silencio un instante y retrucó: —Señor ilustrísimo, ¿y cuántos "al rincón, quita calzón" merece quien pregunta lo que no está en el libro? Maravillado por su ingenio, el obispo lo tomó bajo su protección, y aquel niño llegó a ser arzobispo de Lima y presidente del primer Congreso Constituyente del Perú.'
        ]
      },
      {
        chapter: 'Tradición III · Los ratones de Fray Martín',
        content: [
          'Y comieron en un plato perro, pericote y gato. Tal es el milagroso suceso que recuerda Lima sobre el humilde lego dominico fray Martín de Porres.',
          'Habiendo proliferado los ratones en la ropería del convento de Santo Domingo, los frailes pusieron trampas para exterminarlos. Fray Martín, compadecido de toda criatura viviente, atrapó a un pericote y le habló como a un hermano pidiéndole que mudase con toda su parentela a la huerta, comprometiéndose él mismo a llevarles alimento cada día.',
          'Más aún, en la cocina del convento logró que un perro, un gato y los ratoncillos comieran en santa paz de una misma escudilla de caldo, ejemplo vivo de concordia que quedó grabado para siempre en el alma popular peruana.'
        ]
      }
    ]
  },
  {
    id: 'los-heraldos-negros',
    title: 'Los Heraldos Negros',
    author: 'César Vallejo',
    authorId: 'cesar-vallejo',
    genre: 'Poesía',
    categories: ['Literatura peruana', 'Poesía', 'Obras clásicas'],
    year: 1919,
    isFeatured: true,
    isPeruvian: true,
    isRecent: false,
    addedOrder: 8,
    accessType: 'full',
    rightsNotice: 'Obra en Dominio Público · Poemario fundamental de César Vallejo (1919)',
    pdfUrl: './public/books/los-heraldos-negros.pdf',
    cover: './src/assets/books/heraldos-negros.svg',
    description: 'Primer gran libro de poemas de César Vallejo. Una obra sobrecogedora sobre el dolor humano, la solidaridad, la nostalgia del hogar andino y la condición existencial.',
    pages: [
      {
        chapter: 'Poema I · Los Heraldos Negros',
        content: [
          'Hay golpes en la vida, tan fuertes... ¡Yo no sé!\nGolpes como del odio de Dios; como si ante ellos,\nla resaca de todo lo sufrido\nse empozara en el alma... ¡Yo no sé!',
          'Son pocos; pero son... Abren zanjas oscuras\nen el rostro más fiero y en el lomo más fuerte.\nSerán tal vez los potros de bárbaros atilas;\no los heraldos negros que nos manda la Muerte.',
          'Son las caídas hondas de los Cristos del alma,\nde alguna fe adorable que el Destino blasfema.\nEsos golpes sangrientos son las crepitaciones\nde algún pan que en la puerta del horno se nos quema.',
          'Y el hombre... Pobre... ¡pobre! Vuelve los ojos, como\ncuando por sobre el hombro nos llama una palmada;\nvuelve los ojos locos, y todo lo vivido\nse empoza, como charco de culpa, en la mirada.\n\nHay golpes en la vida, tan fuertes... ¡Yo no sé!'
        ]
      },
      {
        chapter: 'Poema II · A mi hermano Miguel (In memoriam)',
        content: [
          'Hermano, hoy estoy en el poyo de la casa,\ndonde nos haces una falta sin fondo!\nMe acuerdo que jugábamos esta hora, y que mamá\nnos acariciaba: «Pero, hijos...»',
          'Ahora yo me escondo,\ncomo antes, todas estas oraciones\nvespertinas, y espero que tú no des conmigo.\nPor la sala, el zaguán, los corredores.\nDespués, te ocultas tú, y yo no doy contigo.',
          'Me acuerdo que nos hicimos llorar,\nhermano, en aquel juego.\nMiguel, tú te escondiste\nuna noche de agosto, al alborear;\npero, en vez de ocultarte riendo, estabas triste.',
          'Y tu gemelo corazón de esas tardes\nextintas se ha aburrido de no encontrarte. Y ya\ncae sombra en el alma.\nOye, hermano, no tardes\nen salir. ¿Bueno? Puede inquietarse mamá.'
        ]
      },
      {
        chapter: 'Poema III · Los pasos lejanos',
        content: [
          'Mi padre duerme. Su semblante augusto\nfigura un apacible corazón;\nestá ahora tan dulce...\nsi hay algo en él de amargo, seré yo.',
          'Hay soledad en el hogar; se reza;\ny no hay noticias de los hijos hoy.\nMi padre se despierta, ausculta\nla huida a Egipto, el restañante adiós.',
          'Está ahora tan cerca;\nsi hay algo en él de lejos, seré yo.\nY mi madre pasea allá en los huertos,\nsaboreando un sabor ya sin sabor.',
          'Está ahora tan suave,\ntan ala, tan salida, tan amor.\nHay soledad en el hogar sin bulla,\nsin noticias, sin verde, sin niñez.'
        ]
      },
      {
        chapter: 'Poema IV · Idilio muerto y Masa',
        content: [
          'Qué estará haciendo esta hora mi andina y dulce Rita\nde junco y capulí;\nahora que me asfixia Bizancio, y que dormita\nla sangre, como flojo cognac, dentro de mí.',
          'Dónde estarán sus manos que en actitud contrita\nplanchaban en las tardes blancuras por venir;\nahora, en esta lluvia que me quita\nlas ganas de vivir.',
          'Al fin de la batalla, y muerto el combatiente, vino hacia él un hombre y le dijo: «¡No mueras, te amo tanto!» Pero el cadáver ¡ay! siguió muriendo. Rodeáronle millones de individuos con un ruego común: «¡Quédate hermano!» Entonces todos los hombres de la tierra le rodearon; les vio el cadáver triste, emocionado; incorporóse lentamente, abrazó al primer hombre; echóse a andar...'
        ]
      }
    ]
  },
  {
    id: 'paco-yunque',
    title: 'Paco Yunque',
    author: 'César Vallejo',
    authorId: 'cesar-vallejo',
    genre: 'Literatura juvenil',
    categories: ['Literatura peruana', 'Cuentos', 'Literatura juvenil', 'Educación y cultura'],
    year: 1931,
    isFeatured: true,
    isPeruvian: true,
    isRecent: true,
    addedOrder: 14,
    accessType: 'full',
    rightsNotice: 'Obra en Dominio Público · Relato completo de César Vallejo',
    cover: './src/assets/books/paco-yunque.svg',
    description: 'El cuento más leído por generaciones de estudiantes en el Perú. Relata el primer día de clases del niño campesino Paco Yunque, su amistad con Paco Fariña y su despertar ante la injusticia.',
    pages: [
      {
        chapter: 'Parte I · La llegada al colegio',
        content: [
          'Cuando Paco Yunque y su madre llegaron a la puerta del colegio, los niños estaban jugando en el patio. La madre le dejó y se fue. Paco, paso a paso, fue adelantándose al centro del patio, con su libro primero, su cuaderno y su lápiz.',
          'Paco estaba con miedo, porque era la primera vez que veía a tantos niños juntos. Varios alumnos, pequeños como él, se le acercaron y Paco, cada vez más tímido, se pegó a la pared y se puso colorado. ¡Qué listos eran todos esos chicos! ¡Qué desenvueltos! Como si estuviesen en su casa.',
          'En ese momento sonó la campana y todos entraron al salón de primer año. El profesor hizo sentar a Paco Yunque junto a otro niño de su misma edad llamado Paco Fariña, quien desde el primer minuto lo defendió con generosidad y compañerismo.'
        ]
      },
      {
        chapter: 'Parte II · Humberto Grieve y Paco Fariña',
        content: [
          'Paco Fariña le preguntaba con afecto por su familia y le invitaba a jugar al tablero, mientras Humberto Grieve, hijo del patrón de la casa donde trabajaba la madre de Paco Yunque, exigía que Yunque se pasara a su carpeta como su «muchacho».',
          'Fariña se opuso con valentía diciendo que en el salón todos eran alumnos iguales. Poco después llegó tarde Humberto Grieve sin recibir castigo, mientras que cuando llegó tarde el niño Antonio Gesdres, hijo de un albañil que había tenido que ayudar a su madre enferma, fue sancionado con reclusión.',
          'Todos los niños del salón miraban en silencio aquella diferencia de trato, y Paco Fariña murmuraba indignado mientras consolaba a su nuevo amigo.'
        ]
      },
      {
        chapter: 'Parte III · El ejercicio de los peces y el recreo',
        content: [
          'El profesor explicó una lección sobre los peces y pidió a los alumnos que redactaran un ejercicio en sus cuadernos. Paco Yunque, atento y estudioso, escribió con cuidado toda su tarea.',
          'Al salir al recreo, Humberto Grieve maltrató a Paco Yunque en el patio y, aprovechando el tumulto, arrancó la hoja del cuaderno donde Paco Yunque había escrito su ejercicio, borró el nombre de Paco y puso el suyo propio.',
          'Al volver al aula y pedir el profesor los trabajos, Paco Yunque buscó desesperadamente su hoja sin encontrarla, mientras Grieve entregaba el ejercicio robado como si fuera obra suya. El director felicitó a Grieve como el mejor alumno y castigó a Paco Yunque por no presentar su tarea, mientras Paco Fariña lo abrazaba en silencio compartiendo su dolor.'
        ]
      }
    ]
  },
  {
    id: 'aves-sin-nido',
    title: 'Aves sin Nido',
    author: 'Clorinda Matto de Turner',
    authorId: 'clorinda-matto',
    genre: 'Novelas',
    categories: ['Literatura peruana', 'Novelas', 'Obras clásicas'],
    year: 1889,
    isFeatured: false,
    isPeruvian: true,
    isRecent: false,
    addedOrder: 7,
    accessType: 'full',
    rightsNotice: 'Obra en Dominio Público · Selección de capítulos fundamentales (1889)',
    cover: './src/assets/books/aves-sin-nido.svg',
    description: 'Novela fundacional del indigenismo peruano. Ambientada en el pueblo andino de Kíllac, narra la defensa de la familia Yupanqui por parte de los esposos Fernando y Lucía Marín.',
    pages: [
      {
        chapter: 'Proemio de la autora y Capítulo I',
        content: [
          '«Si la historia es el espejo donde las generaciones por venir han de contemplar la imagen de las generaciones que fueron, la novela tiene que ser la fotografía que estereotipe los vicios y las virtudes de un pueblo, con la consiguiente moraleja correctiva para aquéllos y el homenaje de admiración para éstas.» — Clorinda Matto de Turner.',
          'Era una mañana sin nubes, en que la naturaleza, sonriendo de felicidad, alzaba el himno de adoración al Autor de su belleza. El corazón, tranquilo como el nido de una paloma, se entregaba a la contemplación de aquel cuadro.',
          'En la única plaza del pueblo de Kíllac se levantaba la casa blanca de don Fernando Marín y su joven esposa Lucía, quienes habían llegado a la comarca con el ánimo noble de trabajar con justicia y fraternidad.'
        ]
      },
      {
        chapter: 'Capítulo II · La súplica de Marcela Yupanqui',
        content: [
          'Aquella mañana acercóse a la puerta de Lucía una mujer indígena vestida con acso oscuro y lliclla tejida: era Marcela, esposa de Juan Yupanqui. Con lágrimas en los ojos relató a Lucía cómo el cobrador del reparto lanero amenazaba con arrebatarles a su pequeña hija Margarita por una deuda impagable.',
          'Lucía, profundamente conmovida en su corazón de mujer y ciudadana, prometió a Marcela interceder ante las autoridades del pueblo y socorrer a su familia para impedir tamaño abuso.',
          'Desde aquel instante, el hogar de los esposos Marín se convirtió en refugio de esperanza para las niñas Rosalía y Margarita, a quienes educaron y protegieron con amor maternal frente a la hostilidad de los poderosos de Kíllac.'
        ]
      },
      {
        chapter: 'Capítulo Final · El viaje hacia Lima y el mensaje moral',
        content: [
          'Tras defender con coraje la vida y la dignidad de las huérfanas de Juan y Marcela Yupanqui, don Fernando y Lucía parten hacia Lima llevando consigo a las dos niñas para brindarles educación y porvenir.',
          'En el desenlace, cuando el joven ingeniero Manuel descubre su origen compartido con Margarita, ambos quedan como «aves sin nido» ante las culpas ocultas de la vieja sociedad colonial, dejando en el lector un llamado imperecedero por la educación, la igualdad ante la ley y la dignidad de los pueblos andinos del Perú.'
        ]
      }
    ]
  },
  {
    id: 'el-vuelo-de-los-condores',
    title: 'El Vuelo de los Cóndores',
    author: 'Abraham Valdelomar',
    authorId: 'abraham-valdelomar',
    genre: 'Literatura juvenil',
    categories: ['Literatura peruana', 'Cuentos', 'Literatura juvenil'],
    year: 1914,
    isFeatured: false,
    isPeruvian: true,
    isRecent: true,
    addedOrder: 13,
    accessType: 'full',
    rightsNotice: 'Obra en Dominio Público · Cuento íntegro de Abraham Valdelomar',
    cover: './src/assets/books/vuelo-condores.svg',
    description: 'Hermoso relato de infancia en el puerto de Pisco. Cuenta el deslumbramiento del niño Abraham ante la llegada del circo y su tierna admiración por la joven trapecista Miss Orquídea.',
    pages: [
      {
        chapter: 'Capítulo I · La llegada del circo al muelle de Pisco',
        content: [
          'Aquel día demoré en el muelle viendo desembarcar la compañía de un circo que llegaba por vapor al puerto de Pisco. Nunca había visto yo semejante maravilla: hombres hercúleos, caballos amaestrados, un oso en su jaula, un mono sabio y, entre todos ellos, una niña blanca, delgada y sonriente que iba de la mano de un anciano.',
          'Era Miss Orquídea, la pequeña artista encargada de realizar la prueba más audaz de la función: «El Vuelo de los Cóndores». Volví corriendo a casa tan emocionado que apenas pude probar bocado en la mesa familiar, hasta que mi padre nos mostró las entradas para asistir el sábado a la carpa del circo.'
        ]
      },
      {
        chapter: 'Capítulo II · La función bajo la carpa y Miss Orquídea',
        content: [
          'Llegó la tarde esperada. Bajo la gran carpa iluminada desfilaron los payasos, el barrista Kendall, el oso bailarín y el mono acrobático. De pronto, la banda tocó una música solemne y apareció Miss Orquídea vestida de blanco, subiendo hasta lo más alto de los trapecios.',
          'Cruzó el aire de un extremo a otro en un vuelo prodigioso que arrancó una ovación cerrada de todo el puerto. El público entusiasmado pidió la repetición de la peligrosa prueba; en el segundo intento, la niña perdió asidero y cayó sobre la red, quedando delicadamente herida.',
          'Días después, al pasear por el muelle antes de que el barco partiera, encontré a Miss Orquídea sentada en un sillón frente al mar. Nos miramos con silenciosa ternura y, al zarpar el bote, sacó su pañuelo blanco para decirme adiós: «¡Adiós, Miss Orquídea!», susurré mientras la brisa marina mecía mi primer recuerdo de adolescencia.'
        ]
      }
    ]
  },
  {
    id: 'trilce',
    title: 'Trilce (Selección Vanguardista)',
    author: 'César Vallejo',
    authorId: 'cesar-vallejo',
    genre: 'Poesía',
    categories: ['Literatura peruana', 'Poesía', 'Obras clásicas'],
    year: 1922,
    isFeatured: false,
    isPeruvian: true,
    isRecent: false,
    addedOrder: 6,
    accessType: 'full',
    rightsNotice: 'Obra en Dominio Público · Edición original de Lima (1922)',
    cover: './src/assets/books/trilce.svg',
    description: 'Publicado en Lima en 1922, Trilce revolucionó el idioma poético en lengua española, explorando la libertad expresiva, la ausencia materna y el tiempo.',
    pages: [
      {
        chapter: 'Poemas III y XXIII',
        content: [
          'III\nLas personas mayores\n¿a qué hora volverán?\nDa las seis el ciego Santiago,\ny ya está muy oscuro.\nMadre dijo que no demoraría.',
          'Aguedita, Nativa, Miguel,\ncuidado con ir por ahí, por donde\nacaban de pasar gangueando sus memorias\ndobladoras penas,\nhacia el silencioso corral, y por donde\nlas gallinas que se están acostando todavía,\nse han espantado tanto.\nMejor estemos aquí no más.\nMadre dijo que no demoraría.',
          'XXIII\nTahona estuosa de aquellos mis bizcochos\npura yema infantil innumerable, madre.\nOh tus cuatro gorgas, asombrosamente\nmal plañidas, madre: tus mendigos.\nLas dos hermanas últimas, Miguel\nque ha muerto y yo arrastrando todavía\nuna trenza por cada letra del abecedario.'
        ]
      },
      {
        chapter: 'Poemas XVIII y LXV',
        content: [
          'XVIII\nOh las cuatro paredes de la celda.\nAh las cuatro paredes albicantes\nque sin remedio dan al mismo número.\nCriadero de nervios, mala brecha,\npor sus cuatro rincones cómo arranca\nlas diarias aherrojadas extremidades.\nAmorosa llavera de innumerables llaves,\nsi estuvieras aquí, si vieras hasta\nqué hora son cuatro estas paredes.',
          'LXV\nMadre, me voy mañana a Santiago,\na mojarme en tu bendición y en tu llanto.\nAcomodando estoy mis desengaños y el rosado\nde llaga de mis falsos trajines.\nMe esperará tu arco de asombro,\nlas tonsuradas columnas de tus ansias\nque se acaban la vida.'
        ]
      }
    ]
  },
  {
    id: 'los-rios-profundos',
    title: 'Los Ríos Profundos (Ficha Editorial)',
    author: 'José María Arguedas',
    authorId: 'jose-maria-arguedas',
    genre: 'Novelas',
    categories: ['Literatura peruana', 'Novelas', 'Educación y cultura'],
    year: 1958,
    isFeatured: false,
    isPeruvian: true,
    isRecent: true,
    addedOrder: 12,
    accessType: 'ficha',
    rightsNotice: 'Obra protegida por Derechos de Autor · Se muestra únicamente su Ficha Informativa y Guía Educativa legal',
    cover: './src/assets/books/rios-profundos.svg',
    description: 'Ficha informativa y guía de análisis literario de la gran novela de José María Arguedas sobre el joven Ernesto, el zumbayllu y el universo cultural de los Andes peruanos.',
    pages: [
      {
        chapter: 'Aviso de Derechos de Autor y Ficha Bibliográfica',
        content: [
          'AVISO LEGAL DE LIBROSFREE: En estricto cumplimiento de las leyes de propiedad intelectual y derechos de autor, «Los ríos profundos» (1958) de José María Arguedas es una obra con derechos patrimoniales vigentes. Por ello, LibrosFree NO publica ni reproduce su texto completo sin autorización, poniendo a disposición de los estudiantes únicamente esta ficha informativa y guía cultural elaborada por nuestro equipo.',
          'DATOS DE LA OBRA:\n• Título: Los ríos profundos\n• Autor: José María Arguedas (Andahuaylas, 1911 – Lima, 1969)\n• Año de primera publicación: 1958\n• Género: Novela neoindigenista y de formación juvenil\n• Escenarios principales: Cusco y el internado de Abancay.'
        ]
      },
      {
        chapter: 'Síntesis Argumental y Temas Fundamentales',
        content: [
          'CONTEXTO Y SÍNTESIS: La novela sigue el aprendizaje vital del adolescente Ernesto, quien recorre los Andes junto a su padre, un abogado itinerante, admirando la grandeza viva de los muros incaicos del Cusco antes de ingresar a un colegio religioso en Abancay.',
          'SÍMBOLOS LITERARIOS:\n• El Zumbayllu (trompo andino): Representa la música, la magia, la memoria luminosa y la comunión armónica con la naturaleza quechua.\n• Los Ríos (Pachachaca y Apurímac): Simbolizan la fuerza purificadora y profunda de la cultura andina capaz de vencer toda opresión.\n• La Rebelión de las Chicheras: Liderada por doña Felipa, expresa la dignidad colectiva y la búsqueda de justicia social.'
        ]
      }
    ]
  },
  {
    id: 'la-ciudad-y-los-perros',
    title: 'La Ciudad y los Perros (Ficha Editorial)',
    author: 'Mario Vargas Llosa',
    authorId: 'mario-vargas-llosa',
    genre: 'Novelas',
    categories: ['Literatura peruana', 'Novelas', 'Educación y cultura'],
    year: 1963,
    isFeatured: false,
    isPeruvian: true,
    isRecent: false,
    addedOrder: 5,
    accessType: 'ficha',
    rightsNotice: 'Obra protegida por Derechos de Autor · Se muestra únicamente su Ficha Informativa legal',
    cover: './src/assets/books/ciudad-y-los-perros.svg',
    description: 'Ficha informativa y guía de estudio de la primera gran novela del Premio Nobel peruano Mario Vargas Llosa, ambientada en el Colegio Militar Leoncio Prado.',
    pages: [
      {
        chapter: 'Aviso de Derechos de Autor y Ficha Bibliográfica',
        content: [
          'AVISO LEGAL DE LIBROSFREE: «La ciudad y los perros» (1963) de Mario Vargas Llosa es una obra protegida por derechos de autor vigentes. En cumplimiento de nuestra política de respeto irrestricto a la propiedad intelectual, LibrosFree NO incorpora el texto de la novela y ofrece exclusivamente esta ficha informativa y guía de lectura para estudiantes.',
          'DATOS DE LA OBRA:\n• Título: La ciudad y los perros\n• Autor: Mario Vargas Llosa (Arequipa, 1936 – Lima, 2025), Premio Nobel de Literatura 2010\n• Año de publicación: 1963 (Premio Biblioteca Breve)\n• Movimiento: Boom Latinoamericano / Narrativa urbana contemporánea.'
        ]
      },
      {
        chapter: 'Importancia Literaria y Personajes Clave',
        content: [
          'IMPORTANCIA LITERARIA: Esta obra marcó el inicio del Boom Latinoamericano y renovó las técnicas narrativas en lengua española mediante el uso de múltiples perspectivas, saltos temporales (flashbacks) y monólogo interior.',
          'EJES TEMÁTICOS PARA JÓVENES LECTORES:\n• El contraste entre la disciplina autoritaria y la búsqueda de autenticidad en la adolescencia.\n• La diversidad social y geográfica del Perú reflejada en los cadetes (Alberto «el Poeta», el Jaguar, el Esclavo Ricardo Arana, el Boa y el teniente Gamboa).\n• Recomendación: Consulta esta obra en bibliotecas públicas o ediciones autorizadas.'
        ]
      }
    ]
  },
  {
    id: 'guia-lectura-critica',
    title: 'Guía de Lectura Crítica y Cultura Peruana',
    author: 'Editorial LibrosFree',
    authorId: 'ricardo-palma',
    genre: 'Educación y cultura',
    categories: ['Educación y cultura', 'Literatura juvenil', 'Literatura peruana'],
    year: 2026,
    isFeatured: true,
    isPeruvian: true,
    isRecent: true,
    addedOrder: 15,
    accessType: 'full',
    rightsNotice: 'Publicación Abierta LibrosFree (Licencia Libre Educativa)',
    cover: './src/assets/books/guia-lectura-critica.svg',
    description: 'Manual práctico y ameno diseñado por LibrosFree para adolescentes y jóvenes: cómo crear el hábito de lectura, comprender textos literarios y explorar la riqueza cultural del Perú.',
    pages: [
      {
        chapter: 'Módulo 1 · Cómo construir el hábito de la lectura en 15 minutos al día',
        content: [
          'Leer no es una obligación escolar: es una ventana abierta hacia miles de vidas, épocas y territorios posibles. Para los adolescentes y jóvenes de hoy, rodeados de notificaciones constantes, el secreto para disfrutar de un libro consiste en empezar con sesiones breves pero significativas.',
          '1. Elige historias que conecten con tu curiosidad: cuentos breves como «El Caballero Carmelo» o «Paco Yunque» pueden leerse en una sola tarde.\n2. Personaliza tu entorno de lectura: en el Lector Digital de LibrosFree puedes ajustar el tamaño de letra y alternar entre modo claro, sepia y oscuro para cuidar tu vista en el celular.\n3. Registra tu avance: celebra cada capítulo terminado en la sección «Mi lectura».'
        ]
      },
      {
        chapter: 'Módulo 2 · Mapa de la Literatura Peruana para Jóvenes',
        content: [
          'La literatura del Perú es tan diversa como su geografía de costa, sierra y selva:\n• Tradición oral y quechua: mitos como el de Kuniraya Viracocha o los cantos de amor harawi.\n• Costumbrismo y Tradición: Ricardo Palma convirtió los archivos históricos en relatos llenos de humor e identidad.',
          '• Posmodernismo y Cuento Costeño: Abraham Valdelomar llevó la sensibilidad de las provincias y el mar de Pisco al centro de las letras nacionales.\n• Vanguardia y Poesía Universal: César Vallejo transformó el dolor y la fraternidad humana en una voz poética sin fronteras.\n• Indigenismo y Pluriculturalidad: Clorinda Matto de Turner, Ciro Alegría y José María Arguedas revelaron la sabiduría y las luchas del mundo andino.'
        ]
      },
      {
        chapter: 'Módulo 3 · Claves para la Lectura Crítica y Creativa',
        content: [
          'Cuando leas una obra literaria, hazte tres preguntas esenciales:\n1. ¿Qué siente o busca el personaje principal y cómo se relaciona con tu propia experiencia?\n2. ¿Qué nos dice esta historia sobre la época y la sociedad en que fue escrita?\n3. ¿Qué cambiarías o qué escribirías tú si pudieras conversar con el autor?',
          'Compartir tus lecturas con amigos, guardar tus obras preferidas en «Mis favoritos» y explorar nuevos géneros te convertirá en un lector autónomo, crítico y libre.'
        ]
      }
    ]
  },
  {
    id: 'rimas-y-leyendas',
    title: 'Rimas y Leyendas (Selección)',
    author: 'Gustavo Adolfo Bécquer',
    authorId: 'gustavo-adolfo-becquer',
    genre: 'Poesía',
    categories: ['Poesía', 'Obras clásicas', 'Literatura juvenil'],
    year: 1871,
    isFeatured: false,
    isPeruvian: false,
    isRecent: false,
    addedOrder: 4,
    accessType: 'full',
    rightsNotice: 'Obra en Dominio Público · Selección poética íntegra',
    cover: './src/assets/books/rimas-y-leyendas.svg',
    description: 'Las rimas más célebres del romanticismo en lengua española sobre el misterio de la inspiración, el amor, la soledad y la belleza.',
    pages: [
      {
        chapter: 'Rimas IV, VII y XXI',
        content: [
          'RIMA IV\nNo digáis que agotado su tesoro,\nde asuntos falta, enmudeció la lira;\npodrá no haber poetas; pero siempre\nhabrá poesía.\nMientras las ondas de la luz al beso\npalpiten encendidas,\nmientras el sol las desgarradas nubes\nde fuego y oro vista,\nmientras haya unos ojos que reflejen\nlos ojos que los miran,\n¡habrá poesía!',
          'RIMA VII\nDel salón en el ángulo oscuro,\nde su dueño tal vez olvidada,\nsilenciosa y cubierta de polvo,\nveíase el arpa.\n¡Cuánta nota dormía en sus cuerdas,\ncomo el pájaro duerme en las ramas,\nesperando la mano de nieve\nque sabe arrancarlas!',
          'RIMA XXI\n¿Qué es poesía?, dices mientras clavas\nen mi pupila tu pupila azul.\n¿Qué es poesía? ¿Y tú me lo preguntas?\nPoesía... eres tú.'
        ]
      },
      {
        chapter: 'Rimas XXX, XXXVIII y LIII',
        content: [
          'RIMA XXX\nAsomaba a sus ojos una lágrima\ny a mi labio una frase de perdón;\nhabló el orgullo y se enjugó su llanto,\ny la frase en mis labios expiró.\nYo voy por un camino; ella, por otro;\npero, al pensar en nuestro mutuo amor,\nyo digo aún: «¿Por qué callé aquel día?»\nY ella dirá: «¿Por qué no lloré yo?»',
          'RIMA LIII\nVolverán las oscuras golondrinas\nen tu balcón sus nidos a colgar,\ny otra vez con el ala a sus cristales\njugando llamarán.\nPero aquellas que el vuelo refrenaban\ntu hermosura y mi dicha a contemplar,\naquellas que aprendieron nuestros nombres...\n¡esas... no volverán!'
        ]
      }
    ]
  },
  {
    id: 'cuentos-amor-locura',
    title: 'Cuentos de Amor de Locura y de Muerte',
    author: 'Horacio Quiroga',
    authorId: 'horacio-quiroga',
    genre: 'Cuentos',
    categories: ['Cuentos', 'Obras clásicas', 'Literatura juvenil'],
    year: 1917,
    isFeatured: false,
    isPeruvian: false,
    isRecent: true,
    addedOrder: 11,
    accessType: 'full',
    rightsNotice: 'Obra en Dominio Público · Relatos clásicos de Horacio Quiroga',
    cover: './src/assets/books/cuentos-amor-locura.svg',
    description: 'Incluye relatos magistrales como «El almohadón de plumas» y «A la deriva», cumbres del cuento hispanoamericano de misterio y naturaleza.',
    pages: [
      {
        chapter: 'El almohadón de plumas (Parte I)',
        content: [
          'Su luna de miel fue un largo escalofrío. Rubia, angelical y tímida, el carácter duro de su marido heló sus soñadas niñerías de novia. Ella lo quería mucho, sin embargo, a veces con un ligero estremecimiento cuando volviendo de noche juntos por la calle, echaba una furtiva mirada a la alta estatura de Jordán, mudo desde hacía una hora.',
          'La casa en que vivían influía un poco en sus estremecimientos. La blancura del patio silencioso —frisos, columnas y estatuas de mármol— producía una otoñal impresión de palacio encantado. En ese extraño nido de amor, Alicia pasó todo el otoño, hasta que un ligero ataque de influenza se arrastró insidiosamente y Alicia no se repuso nunca.'
        ]
      },
      {
        chapter: 'El almohadón de plumas (Parte II)',
        content: [
          'Pronto Alicia comenzó a tener alucinaciones y una anemia de marcha agudísima que desconcertó por completo a los médicos. Durante el día su enfermedad no avanzaba, pero cada mañana amanecía lívida, en síncope casi, como si durante la noche la vida se le escapara en nuevas oleadas de sangre.',
          'Alicia murió, por fin. Al deshacer la cama la sirvienta, llamó a Jordán asustada por unas pequeñas manchas de sangre en la funda y por el peso extraordinario del almohadón de plumas. Jordán lo abrió de un tajo: entre las plumas, moviendo lentamente sus patas velludas, había un animal monstruoso, un parásito de las aves que durante las noches había vaciado silenciosamente la vida de Alicia.'
        ]
      }
    ]
  },
  {
    id: 'don-quijote',
    title: 'Don Quijote de la Mancha (Capítulos Iniciales)',
    author: 'Miguel de Cervantes',
    authorId: 'miguel-de-cervantes',
    genre: 'Novelas',
    categories: ['Novelas', 'Obras clásicas', 'Educación y cultura'],
    year: 1605,
    isFeatured: false,
    isPeruvian: false,
    isRecent: false,
    addedOrder: 3,
    accessType: 'full',
    rightsNotice: 'Obra en Dominio Público · Texto clásico de Miguel de Cervantes',
    cover: './src/assets/books/don-quijote.svg',
    description: 'La obra cumbre de las letras hispánicas: la historia de Alonso Quijano, quien de tanto leer libros de caballerías decidió salir al mundo a deshacer agravios junto a Sancho Panza.',
    pages: [
      {
        chapter: 'Capítulo I · Que trata de la condición y ejercicio del famoso hidalgo',
        content: [
          'En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.',
          'Es, pues, de saber que este sobredicho hidalgo, los ratos que estaba ocioso —que eran los más del año—, se daba a leer libros de caballerías con tanta afición y gusto, que olvidó casi de todo punto el ejercicio de la caza, y aun la administración de su hacienda.',
          'En resolución, él se enfrascó tanto en su lectura, que se le pasaban las noches leyendo de claro en claro, y los días de turbio en turbio; y del poco dormir y del mucho leer se le secó el cerebro, de manera que vino a perder el juicio y le pareció convenible hacerse caballero andante.'
        ]
      },
      {
        chapter: 'Capítulo VIII · Del buen suceso de los molinos de viento',
        content: [
          'En esto, descubrieron treinta o cuarenta molinos de viento que hay en aquel campo, y así como don Quijote los vio, dijo a su escudero: —La ventura va guiando nuestras cosas mejor de lo que acertáramos a desear; porque ves allí, amigo Sancho Panza, donde se descubren treinta o pocos más desaforados gigantes, con quienes pienso hacer batalla.',
          '—¿Qué gigantes? —dijo Sancho Panza. —Aquellos que allí ves —respondió su amo— de los brazos largos. —Mire vuestra merced —respondió Sancho— que aquellos que allí se parecen no son gigantes, sino molinos de viento, y lo que en ellos parecen brazos son las aspas, que, volteadas del viento, hacen andar la piedra del molino.'
        ]
      }
    ]
  },
  {
    id: 'el-principe-feliz',
    title: 'El Príncipe Feliz',
    author: 'Oscar Wilde',
    authorId: 'oscar-wilde',
    genre: 'Literatura juvenil',
    categories: ['Cuentos', 'Literatura juvenil', 'Obras clásicas'],
    year: 1888,
    isFeatured: false,
    isPeruvian: false,
    isRecent: true,
    addedOrder: 12,
    accessType: 'full',
    rightsNotice: 'Obra en Dominio Público · Traducción clásica española libre de derechos',
    cover: './src/assets/books/principe-feliz.svg',
    description: 'Conmovedor relato sobre la estatua dorada de un príncipe y una pequeña golondrina que, por amor y compasión, entregan sus joyas y su oro para ayudar a los pobres de la ciudad.',
    pages: [
      {
        chapter: 'Parte I · La estatua sobre la columna y la golondrina',
        content: [
          'En la parte más alta de la ciudad, sobre una columnita, se alzaba la estatua del Príncipe Feliz. Estaba toda revestida de madreselva de oro fino; tenía, a guisa de ojos, dos centelleantes zafiros y un gran rubí rojo ardía en el puño de su espada.',
          'Una noche voló sobre la ciudad una pequeña Golondrina que se dirigía a Egipto. Al posarse entre los pies del Príncipe Feliz para dormir, sintió caer grandes gotas sobre sus plumas: alzó la vista y vio que los ojos de la estatua estaban llenos de lágrimas ante la miseria de los habitantes de la ciudad.'
        ]
      },
      {
        chapter: 'Parte II · El corazón de plomo y las cosas más preciosas',
        content: [
          'Noche tras noche, la Golondrina fue llevando el rubí de la espada a una costurera cuyo niño tenía fiebre, un zafiro a un joven escritor hambriento y el otro zafiro a una niña vendedora de cerillas, hasta que el Príncipe quedó ciego y la Golondrina decidió no partir nunca más para acompañarlo y repartir las hojas de oro de su manto entre los niños pobres.',
          'Cuando llegó el hielo del invierno, la Golondrina besó los labios del Príncipe y cayó muerta a sus pies; en ese mismo instante sonó dentro de la estatua un crujido seco: el corazón de plomo se había partido en dos. Y cuando Dios pidió a uno de sus Ángeles que le trajera las dos cosas más preciosas de la ciudad, el Ángel le llevó el corazón de plomo y el pajarito muerto.'
        ]
      }
    ]
  }
];

