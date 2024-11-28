"use client";

import {
  Button,
  Checkbox,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

const LibroReclamaciones = () => {
  const [dateTime, setDateTime] = useState("");
  const [isMinor, setIsMinor] = useState(false);
  const [departamento, setDepartamento] = useState("");
  const [provincia, setProvincia] = useState("");
  const [provincias, setProvincias] = useState<string[]>([]);
  const [distritos, setDistritos] = useState<string[]>([]);

  const handleDepartamentoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDepartamento = e.target.value;

    setDepartamento(selectedDepartamento);

    switch (selectedDepartamento) {
      case "amazonas":
        setProvincias([
          "Chachapoyas", "Bagua", "Bongará", "Condorcanqui", 
          "Luya", "Rodríguez de Mendoza", "Utcubamba"
        ]);
        break;
      case "ancash":
        setProvincias([
          "Huaraz", "Aija", "Antonio Raimondi", "Asunción", 
          "Bolognesi", "Carhuaz", "Carlos Fermín Fitzcarrald", 
          "Casma", "Corongo", "Huari", "Huarmey", "Mariscal Luzuriaga", 
          "Ocros", "Pallasca", "Pomabamba", "Recuay", "Santa", 
          "Sihuas", "Yungay"
        ]);
        break;
      case "apurimac":
        setProvincias([
          "Abancay", "Andahuaylas", "Antabamba", "Aymaraes", "Cotabambas", 
          "Chincheros", "Grau"
        ]);
        break;
      case "arequipa":
        setProvincias([
          "Arequipa", "Camana", "Caylloma", "Condesuyos", "Islay", "La Unión"
        ]);
        break;
      case "ayacucho":
        setProvincias([
          "Ayacucho", "Cangallo", "Huamanga", "Huanca Sancos", "Huanta", 
          "La Mar", "Lucanas", "Parinacochas", "Páucar del Sara Sara", 
          "Víctor Fajardo", "Vilcas Huamán"
        ]);
        break;
      case "cajamarca":
        setProvincias([
          "Cajamarca", "Celendín", "Chota", "Contumazá", "Cutervo", 
          "Hualgayoc", "Jaén", "San Ignacio", "San Marcos", 
          "San Pablo", "Santa Cruz"
        ]);
        break;
      case "callao":
        setProvincias(["Callao"]);
        break;
      case "cusco":
        setProvincias([
          "Cusco", "Acomayo", "Anta", "Calca", "Canas", "Canchis", "Chumbivilcas", 
          "Espinar", "La Convención", "Paruro", "Paucartambo", "Quispicanchi", 
          "Urubamba"
        ]);
        break;
      case "huancavelica":
        setProvincias([
          "Huancavelica", "Acobamba", "Angaraes", "Castrovirreyna", "Churcampa", 
          "Huaytará", "Tayacaja"
        ]);
        break;
      case "huanuco":
        setProvincias([
          "Huánuco", "Ambo", "Dos de Mayo", "Huacaybamba", "Huallaga", "Leoncio Prado", 
          "Marañón", "Pachitea", "Rupa Rupa", "Lauricocha", "Yarowilca"
        ]);
        break;
      case "ica":
        setProvincias([
          "Ica", "Chincha", "Nazca", "Palpa", "Pisco"
        ]);
        break;
      case "junin":
        setProvincias([
          "Huancayo", "Chanchamayo", "Concepción", "Jauja", "Junín", "Tarma", 
          "Yauli", "Satipo", "Chupaca"
        ]);
        break;
      case "la-libertad":
        setProvincias([
          "Trujillo", "Ascope", "Bolívar", "Chepén", "Gran Chimú", "Julcán", 
          "Otuzco", "Pacasmayo", "Pataz", "Santiago de Chuco", "Valle Jequetepeque", 
          "Viru"
        ]);
        break;
      case "lambayeque":
        setProvincias([
          "Chiclayo", "Ferreñafe", "Lambayeque"
        ]);
        break;
      case "lima":
        setProvincias([
          "Lima", "Barranca", "Cañete", "Canta", "Huaral", "Huarochirí", "Oyon", "Yauyos"
        ]);
        break;
      case "loreto":
        setProvincias([
          "Iquitos", "Alto Nanay", "Barranco Alto", "Datem del Marañón", 
          "Loreto", "Mariscal Ramón Castilla", "Requena", "Ucayali"
        ]);
        break;
      case "madre-de-dios":
        setProvincias([
          "Tambopata", "Manu", "Tahuamanu"
        ]);
        break;
      case "moquegua":
        setProvincias([
          "Moquegua", "Ilo", "Mariscal Nieto"
        ]);
        break;
      case "pasco":
        setProvincias([
          "Pasco", "Daniel Alcides Carrión", "Oxapampa"
        ]);
        break;
      case "piura":
        setProvincias([
          "Piura", "Ayabaca", "Huancabamba", "Morropón", "Paita", "Sullana", 
          "Talara", "Sechura"
        ]);
        break;
      case "puno":
        setProvincias([
          "Puno", "Azángaro", "Carabaya", "Chucuito", "El Collao", "Huancané", 
          "Lampa", "Melgar", "San Antonio de Putina", "San Román", 
          "Sandia", "Yunguyo"
        ]);
        break;
      case "san-martin":
        setProvincias([
          "Moyobamba", "Bellavista", "El Dorado", "Huallaga", "Lamas", "Mariscal Cáceres", 
          "Picota", "Rioja", "San Martín", "Tocache"
        ]);
        break;
      case "tacna":
        setProvincias([
          "Tacna", "Candarave", "Jorge Basadre", "Tarata"
        ]);
        break;
      case "tumbes":
        setProvincias([
          "Tumbes", "Contralmirante Villar", "Zarumilla"
        ]);
        break;
      case "ucayali":
        setProvincias([
          "Pucallpa", "Atalaya", "Coronel Portillo", "Padre Abad", "Purús"
        ]);
        break;
      default:        
        setProvincias([]);
    }
      
    setDistritos([]);
  };

  const handleProvinciaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProvincia = e.target.value;

    setProvincia(selectedProvincia);

    switch (selectedProvincia) {
      case "chachapoyas":
        setDistritos([
          "Chachapoyas", "Asunción", "Balsas", "Cheto", "Chiliquín", 
          "Chuquibamba", "Granada", "Huancas", "La Jalca", "Leimebamba", 
          "Levanto", "Magdalena", "Mariscal Castilla", "Molinopampa", 
          "Montevideo", "Olleros", "Quinjalca", "San Francisco de Daguas", 
          "San Isidro de Maino", "Soloco", "Sonche"
        ]);
        break;
      case "bagua":
        setDistritos([
          "Bagua", "Aramango", "Copallín", "El Parco", "Imaza", "La Peca"
        ]);
        break;
      case "bongará":
        setDistritos([
          "Jumbilla", "Chisquilla", "Churuja", "Corosha", "Cuispes", 
          "Florida", "Jazán", "Recta", "San Carlos", "Shipasbamba", 
          "Valera", "Yambrasbamba"
        ]);
        break;
      case "condorcanqui":
        setDistritos([
          "Santa María de Nieva", "El Cenepa", "Río Santiago"
        ]);
        break;
      case "luya":
        setDistritos([
          "Lamud", "Camporredondo", "Cocabamba", "Colcamar", "Conila", 
          "Inguilpata", "Longuita", "Lonya Chico", "Luya", "Luya Viejo", 
          "María", "Ocallí", "Ocumal", "Pisuquia", "Providencia", 
          "San Cristóbal", "San Francisco del Yeso", "San Jerónimo", 
          "San Juan de Lopecancha", "Santa Catalina", "Santo Tomás", 
          "Tingo", "Trita"
        ]);
        break;
      case "rodríguez de mendoza":
        setDistritos([
          "San Nicolás", "Chirimoto", "Cochamal", "Huambo", "Limabamba", 
          "Longar", "Mariscal Benavides", "Milonas", "Omia", "Santa Rosa", 
          "Totora", "Vista Alegre"
        ]);
        break;
      case "utcubamba":
        setDistritos([
          "Bagua Grande", "Cajaruro", "Cumba", "El Milagro", "Jamalca", 
          "Lonya Grande", "Yamón"
        ]);
        break;
        case "huaraz":
          setDistritos([
            "Huaraz", "Cochabamba", "Colcabamba", "Huanchay", "Independencia", 
            "Jangas", "La Libertad", "Olleros", "Pampas Grande", "Pariacoto", 
            "Pira", "Tarica"
          ]);
          break;
        case "aija":
          setDistritos([
            "Aija", "Coris", "Huacllán", "La Merced", "Succha"
          ]);
          break;
        case "antonio raimondi":
          setDistritos([
            "Llamellín", "Aczo", "Chaccho", "Chingas", "Mirgas", "San Juan de Rontoy"
          ]);
          break;
        case "asunción":
          setDistritos([
            "Chacas", "Acochaca"
          ]);
          break;
        case "bolognesi":
          setDistritos([
            "Chiquián", "Abelardo Pardo Lezameta", "Antonio Raymondi", "Aquia", 
            "Cajacay", "Canis", "Colquioc", "Huallanca", "Huasta", "Huayllacayán", 
            "La Primavera", "Mangas", "Pacllón", "San Miguel de Corpanqui", 
            "Ticllos"
          ]);
          break;
        case "carhuaz":
          setDistritos([
            "Carhuaz", "Acopampa", "Amashca", "Anta", "Ataquero", "Marcara", 
            "Pariahuanca", "San Miguel de Aco", "Shilla", "Tinco", "Yungar"
          ]);
          break;
        case "carlos fermín fitzcarrald":
          setDistritos([
            "San Luis", "San Nicolás", "Yauya"
          ]);
          break;
        case "casma":
          setDistritos([
            "Casma", "Buena Vista Alta", "Comandante Noel", "Yaután"
          ]);
          break;
        case "corongo":
          setDistritos([
            "Corongo", "Aco", "Bambas", "Cusca", "La Pampa", "Yanac", "Yupan"
          ]);
          break;
        case "huari":
          setDistritos([
            "Huari", "Anra", "Cajay", "Chavín de Huantar", "Huacachi", "Huacchis", 
            "Huachis", "Huántar", "Masin", "Paucas", "Pontó", "Rahuapampa", 
            "Rapayán", "San Marcos", "San Pedro de Chaná", "Uco"
          ]);
          break;
        case "huarmey":
          setDistritos([
            "Huarmey", "Cochapeti", "Culebras", "Huayan", "Malvas"
          ]);
          break;
        case "mariscal Luzuriaga":
          setDistritos([
            "Piscobamba", "Casca", "Eleazar Guzmán Barrón", "Fidel Olivas Escudero", 
            "Llama", "Llumpa", "Lucma", "Musga"
          ]);
          break;
        case "ocros":
          setDistritos([
            "Ocros", "Acas", "Cajamarquilla", "Carhuapampa", "Cochas", "Congas", 
            "Llipa", "San Cristóbal de Raján", "San Pedro", "Santiago de Chilcas"
          ]);
          break;
        case "pallasca":
          setDistritos([
            "Cabana", "Bolognesi", "Conchucos", "Huacaschuque", "Huandoval", 
            "Lacabamba", "Llapo", "Pallasca", "Pampas", "Santa Rosa", "Tauca"
          ]);
          break;
        case "pomabamba":
          setDistritos([
            "Pomabamba", "Huayllán", "Parobamba", "Quinuabamba"
          ]);
          break;
        case "recuay":
          setDistritos([
            "Recuay", "Catac", "Cotaparaco", "Huayllapampa", "Llacllín", 
            "Marca", "Pampas Chico", "Pararín", "Tapacocha", "Ticapampa"
          ]);
          break;
        case "santa":
          setDistritos([
            "Chimbote", "Cáceres del Perú", "Coishco", "Macate", "Moro", 
            "Nepeña", "Samanco", "Santa", "Nuevo Chimbote"
          ]);
          break;
        case "sihuas":
          setDistritos([
            "Sihuas", "Acobamba", "Alfonso Ugarte", "Cashapampa", "Chingalpo", 
            "Huayllabamba", "Quiches", "Ragash", "San Juan", "Sicsibamba"
          ]);
          break;
        case "yungay":
          setDistritos([
            "Yungay", "Cascapara", "Mancos", "Matacoto", "Quillo", 
            "Ranrahirca", "Shupluy", "Yanama"
          ]);
        break;
        case "abancay":
        setDistritos([
          "Abancay", "Chacoche", "Circa", "Curahuasi", "Huanipaca", 
          "Lambrama", "Pichirhua", "San Pedro de Cachora", "Tamburco"
        ]);
        break;
      case "andahuaylas":
        setDistritos([
          "Andahuaylas", "Andarapa", "Chiara", "Huancarama", "Huancaray", 
          "Huayana", "Kaquiabamba", "Kishuara", "Pacobamba", "Pacucha", 
          "Pampachiri", "Pomacocha", "San Antonio de Cachi", "San Jerónimo", 
          "San Miguel de Chaccrapampa", "Santa María de Chicmo", "Talavera", 
          "Tumay Huaraca", "Turpo"
        ]);
        break;
      case "antabamba":
        setDistritos([
          "Antabamba", "El Oro", "Huaquirca", "Juan Espinoza Medrano", 
          "Oropesa", "Pachaconas", "Sabaino"
        ]);
        break;
      case "aymaraes":
        setDistritos([
          "Chalhuanca", "Capaya", "Caraybamba", "Chapimarca", "Colcabamba", 
          "Cotaruse", "Ihuayllo", "Justo Apu Sahuaraura", "Lucre", "Pocohuanca", 
          "San Juan de Chacña", "Sañayca", "Soraya", "Tapairihua", "Tintay", 
          "Toraya", "Yanaca"
        ]);
        break;
      case "cotabambas":
        setDistritos([
          "Tambobamba", "Cotabambas", "Coyllurqui", "Haquira", "Mara", "Challhuahuacho"
        ]);
        break;
      case "chincheros":
        setDistritos([
          "Chincheros", "Anco-Huallo", "Cocharcas", "Huaccana", "Ocobamba", 
          "Ongoy", "Ranracancha", "Uranmarca"
        ]);
        break;
      case "grau":
        setDistritos([
          "Chuquibambilla", "Curpahuasi", "Gamarra", "Huayllati", "Mamara", 
          "Micaela Bastidas", "Pataypampa", "Progreso", "San Antonio", 
          "Santa Rosa", "Turpay", "Vilcabamba", "Virundo", "Curasco"
        ]);
        break;
      case "arequipa":
        setDistritos([
          "Arequipa", "Alto Selva Alegre", "Cayma", "Cerro Colorado", 
          "Characato", "Chiguata", "Jacobo Hunter", "José Luis Bustamante y Rivero", 
          "La Joya", "Mariano Melgar", "Miraflores", "Mollebaya", 
          "Paucarpata", "Pocsi", "Polobaya", "Quequeña", "Sabandía", 
          "Sachaca", "San Juan de Siguas", "San Juan de Tarucani", 
          "Santa Isabel de Siguas", "Santa Rita de Siguas", "Socabaya", 
          "Tiabaya", "Uchumayo", "Vítor", "Yanahuara", "Yarabamba", 
          "Yura"
        ]);
        break;
      case "camana":
        setDistritos([
          "Camaná", "José María Quimper", "Mariano Nicolás Valcárcel", 
          "Mariscal Cáceres", "Nicolás de Piérola", "Ocoña", "Quilca", "Samuel Pastor"
        ]);
        break;
      case "caylloma":
        setDistritos([
          "Chivay", "Achoma", "Cabanaconde", "Callalli", "Caylloma","Coporaque", "Huambo", "Huanca", "Ichupampa", "Lari", 
          "Lluta", "Maca", "Madrigal", "San Antonio de Chuca", "Sibayo", "Tapay", "Tisco", "Tuti", "Yanque"
        ]);
        break;
      case "condesuyos":
        setDistritos([
          "Chuquibamba", "Andaray", "Cayarani", "Chichas", "Iray", "Río Grande", "Salamanca", "Yanaquihua"
        ]);
        break;
      case "islay":
        setDistritos([
          "Mollendo", "Cocachacra", "Dean Valdivia", "Islay", "Mejía", "Punta de Bombón"
        ]);
        break;
      case "la unión":
        setDistritos([
          "Cotahuasi", "Alca", "Charcana", "Huaynacotas", "Pampamarca", "Puyca", "Quechualla", 
          "Sayla", "Tauria", "Tomepampa", "Toro"
        ]);
        break;
        case "cajamarca":
          setDistritos([
            "Cajamarca", "Asunción", "Chetilla", "Cospán", "Encañada", "Jesús", 
            "Llacanora", "Los Baños del Inca", "Magdalena", "Matara", "Namora", 
            "San Juan"
          ]);
          break;
        case "celendín":
          setDistritos([
            "Celendín", "Chumuch", "Cortegana", "Huasmin", "Jorge Chávez", 
            "José Gálvez", "La Libertad de Pallán", "Miguel Iglesias", 
            "Oxamarca", "Sorochuco", "Sucre", "Utco"
          ]);
          break;
        case "chota":
          setDistritos([
            "Chota", "Anguía", "Chadín", "Chiguirip", "Chimban", "Choropampa", 
            "Cochabamba", "Conchán", "Huambos", "Lajas", "Llama", 
            "Miracosta", "Paccha", "Pion", "Querocoto", "San Juan de Licupis", 
            "Tacabamba", "Tocmoche"
          ]);
          break;
        case "contumazá":
          setDistritos([
            "Contumazá", "Chilete", "Cupisnique", "Guzmango", "San Benito", 
            "Santa Cruz de Toledo", "Tantarica", "Yonan"
          ]);
          break;
        case "cutervo":
          setDistritos([
            "Cutervo", "Callayuc", "Choros", "Cujillo", "La Ramada", "Pimpingos", 
            "Querocotillo", "San Andrés de Cutervo", "San Juan de Cutervo", 
            "San Luis de Lucma", "Santa Cruz", "Santo Domingo de la Capilla", 
            "Santo Tomás", "Socota", "Toribio Casanova"
          ]);
          break;
        case "hualgayoc":
          setDistritos([
            "Bambamarca", "Chugur", "Hualgayoc"
          ]);
          break;
        case "jaén":
          setDistritos([
            "Jaén", "Bellavista", "Chontali", "Colasay", "Huabal", 
            "Las Pirias", "Pomahuaca", "Pucará", "Sallique", "San Felipe", 
            "San José del Alto", "Santa Rosa"
          ]);
          break;
        case "san ignacio":
          setDistritos([
            "San Ignacio", "Chirinos", "Huarango", "La Coipa", "Namballe", 
            "San José de Lourdes", "Tabaconas"
          ]);
          break;
        case "san marcos":
          setDistritos([
            "San Marcos", "Chancay", "Eduardo Villanueva", "Gregorio Pita", 
            "Ichocán", "José Manuel Quiroz", "Pedro Gálvez"
          ]);
          break;
        case "san pablo":
          setDistritos([
            "San Pablo", "San Bernardino", "San Luis", "Tumbaden"
          ]);
          break;
        case "santa cruz":
          setDistritos([
            "Santa Cruz", "Andabamba", "Catache", "Chancaybaños", "La Esperanza", 
            "Ninabamba", "Pulan", "Saucepampa", "Sexi", "Uticyacu", "Yauyucan"
          ]);
          break;

        // Provincia de Callao
        case "callao":
          setDistritos([
            "Callao", "Bellavista", "Carmen de la Legua Reynoso", 
            "La Perla", "La Punta", "Ventanilla", "Mi Perú"
          ]);
          break;

        // Provincias de Cusco
        case "cusco":
          setDistritos([
            "Cusco", "Ccorca", "Poroy", "San Jerónimo", "San Sebastián", 
            "Santiago", "Saylla", "Wanchaq"
          ]);
          break;
        case "acomayo":
          setDistritos([
            "Acomayo", "Acopia", "Acos", "Mosoc Llacta", "Pomacanchi", 
            "Rondocan", "Sangarará"
          ]);
          break;
        case "anta":
          setDistritos([
            "Anta", "Ancahuasi", "Cachimayo", "Chinchaypujio", "Huarocondo", 
            "Limatambo", "Mollepata", "Pucyura", "Zurite"
          ]);
          break;
        case "calca":
          setDistritos([
            "Calca", "Coya", "Lamay", "Lares", "Pisac", "San Salvador", 
            "Taray", "Yanatile"
          ]);
          break;
        case "canas":
          setDistritos([
            "Yanaoca", "Checca", "Kunturkanki", "Langui", "Layo", 
            "Pampamarca", "Quehue", "Tupac Amaru"
          ]);
          break;
        case "canchis":
          setDistritos([
            "Sicuani", "Checacupe", "Combapata", "Marangani", "Pitumarca", 
            "San Pablo", "San Pedro", "Tinta"
          ]);
          break;
        case "chumbivilcas":
          setDistritos([
            "Santo Tomás", "Capacmarca", "Chamaca", "Colquemarca", 
            "Livitaca", "Llusco", "Quiñota", "Velille"
          ]);
          break;
        case "espinar":
          setDistritos([
            "Espinar", "Condoroma", "Coporaque", "Ocoruro", "Pallpata", 
            "Pichigua", "Suyckutambo", "Alto Pichigua"
          ]);
          break;
        case "la convención":
          setDistritos([
            "Quillabamba", "Echarate", "Huayopata", "Maranura", 
            "Ocobamba", "Santa Ana", "Santa Teresa", "Vilcabamba", 
            "Pichari", "Kimbiri", "Villa Virgen", "Villa Kintiarina"
          ]);
          break;
        case "paruro":
          setDistritos([
            "Paruro", "Accha", "Ccapi", "Colcha", "Huanoquite", 
            "Omacha", "Paccaritambo", "Pillpinto", "Yaurisque"
          ]);
          break;
        case "paucartambo":
          setDistritos([
            "Paucartambo", "Caicay", "Challabamba", "Colquepata", 
            "Huancarani", "Kosñipata"
          ]);
          break;
        case "quispicanchi":
          setDistritos([
            "Urcos", "Andahuaylillas", "Camanti", "Ccarhuayo", 
            "Ccatca", "Cusipata", "Huaro", "Lucre", "Marcapata", 
            "Ocongate", "Oropesa", "Quiquijana"
          ]);
          break;
        case "urubamba":
          setDistritos([
            "Urubamba", "Chinchero", "Huayllabamba", "Machupicchu", 
            "Maras", "Ollantaytambo", "Yucay"
          ]);
          break;
          case "huancavelica":
            setDistritos([
              "Huancavelica", "Acobambilla", "Acoria", "Conayca", "Cuenca", 
              "Huachocolpa", "Huayllahuara", "Izcuchaca", "Laria", "Manta", 
              "Mariscal Cáceres", "Moya", "Nuevo Occoro", "Palca", 
              "Pilchaca", "Vilca", "Yauli", "Ascensión"
            ]);
            break;
          case "acobamba":
            setDistritos([
              "Acobamba", "Andabamba", "Anta", "Caja", "Marcas", 
              "Paucara", "Pomacocha", "Rosario"
            ]);
            break;
          case "angaraes":
            setDistritos([
              "Lircay", "Anchonga", "Callanmarca", "Ccochaccasa", "Chincho", 
              "Congalla", "Huanca-Huanca", "Huayllay Grande", "Julcamarca", 
              "San Antonio de Antaparco", "Santo Tomas de Pata", "Secclla"
            ]);
            break;
          case "castrovirreyna":
            setDistritos([
              "Castrovirreyna", "Arma", "Aurahua", "Capillas", "Chupamarca", 
              "Cocas", "Huachos", "Huamatambo", "Mollepampa", "San Juan", 
              "Santa Ana", "Tantara", "Ticrapo"
            ]);
            break;
          case "churcampa":
            setDistritos([
              "Churcampa", "Anco", "Chinchihuasi", "El Carmen", "La Merced", 
              "Locroja", "Paucarbamba", "San Miguel de Mayocc", 
              "San Pedro de Coris", "Pachamarca", "Cosme"
            ]);
            break;
          case "huaytará":
            setDistritos([
              "Huaytará", "Ayavi", "Córdova", "Huayacundo Arma", 
              "Laramarca", "Ocoyo", "Pilpichaca", "Querco", 
              "Quito-Arma", "San Antonio de Cusicancha", "San Francisco de Sangayaico", 
              "San Isidro", "Santiago de Chocorvos", "Santiago de Quirahuara", 
              "Santo Domingo de Capillas", "Tambo"
            ]);
            break;
          case "tayacaja":
            setDistritos([
              "Pampas", "Acostambo", "Acraquia", "Ahuaycha", "Colcabamba", 
              "Daniel Hernández", "Huachocolpa", "Huaribamba", "Ñahuimpuquio", 
              "Pazos", "Quishuar", "Salcabamba", "Salcahuasi", "San Marcos de Rocchac", 
              "Surcubamba", "Tintay Puncu"
            ]);
            break;
            case "huánuco":
            setDistritos([
              "Huánuco", "Ambo", "Dos de Mayo", "Huacaybamba", "Huallaga", "Leoncio Prado", 
              "Marañón", "Pachitea", "Rupa Rupa", "Lauricocha", "Yarowilca"
            ]);
            break;
            case "ambo":
              setDistritos([
                "Ambo", "Cayna", "Colpas", "Conchamarca", "Huácar", "San Francisco", 
                "San Rafael", "Tomay Kichwa"
              ]);
              break;
            case "dos de mayo":
              setDistritos([
                "La Unión", "Chuquis", "Marías", "Pachas", "Quivilla", "Ripan", "Shunqui", 
                "Sillapata", "Yanas"
              ]);
              break;
            case "huacaybamba":
              setDistritos([
                "Huacaybamba", "Canchabamba", "Cochabamba", "Pinra"
              ]);
              break;
            case "huallaga":
              setDistritos([
                "Huacrachuco", "Cholon", "San Buenaventura"
              ]);
              break;
            case "leoncio prado":
              setDistritos([
                "Rupa Rupa", "Daniel Alomía Robles", "Hermilio Valdizán", "José Crespo y Castillo", 
                "Luyando", "Mariano Dámaso Beraún"
              ]);
              break;
            case "marañón":
              setDistritos([
                "Huacrachuco", "Cholon", "San Buenaventura"
              ]);
              break;
            case "pachitea":
              setDistritos([
                "Panao", "Chaglla", "Molino", "Umari"
              ]);
              break;
            case "rupa rupa":
              setDistritos([
                "Rupa Rupa", "Daniel Alomía Robles", "Hermilio Valdizán", "José Crespo y Castillo", 
                "Luyando", "Mariano Dámaso Beraún"
              ]);
              break;
            case "lauricocha":
              setDistritos([
                "Jesús", "Baños", "Jivia", "Queropalca", "Rondos", "San Francisco de Asís", "San Miguel de Cauri"
              ]);
              break;
            case "yarowilca":
              setDistritos([
                "Chavinillo", "Aparicio Pomares", "Cahuac", "Chacabamba", "Chupan", "Jacas Grande", "Obas"
              ]);
              break;
              case "ica":
                setDistritos([
                  "Ica", "La Tinguiña", "Los Aquijes", "Ocucaje", "Pachacútec", "Parcona", 
                  "Pueblo Nuevo", "Salas", "San José de los Molinos", "San Juan Bautista", 
                  "Tate", "Tambo de Mora", "Yauca del Rosario"
                ]);
                break;
              case "chincha":
                setDistritos([
                  "Chincha Alta", "Alto Larán", "Chavín", "El Carmen", "Grocio Prado", "Pueblo Nuevo", 
                  "San Juan de Yanac", "San Pedro", "Tambo de Mora"
                ]);
                break;
              case "nazca":
                setDistritos([
                  "Nazca", "Changuillo", "El Ingenio", "Vista Alegre", "María Reiche"
                ]);
                break;
              case "palpa":
                setDistritos([
                  "Palpa", "Linares", "Tiburcio", "Ollachea", "Matorral"
                ]);
                break;
              case "pisco":
                setDistritos([
                  "Pisco", "Auxol", "El Carmen", "Guevara", "Lanchas", "Tambo de Mora", "Pueblo Nuevo"
                ]);
                break;
                case "huancayo":
                  setDistritos([
                    "Huancayo", "Chicche", "Chupuro", "Colca", "Cuenca", "Huancán", "Huayucachi", 
                    "Ingenio", "Pariahuanca", "Pilcomayo", "Pucará", "Santo Domingo de Acobamba", 
                    "Trescientos de Junio", "Vítor"
                  ]);
                  break;
                case "chanchamayo":
                  setDistritos([
                    "Chanchamayo", "Perené", "San Luis de Shuaro", "San Ramón", "Vega de la Roca"
                  ]);
                  break;
                case "concepción":
                  setDistritos([
                    "Concepción", "Aco", "Chanchamayo", "Chicla", "Cochas", "Cuenca", "Huancapi", 
                    "Mito", "San José de Quero"
                  ]);
                  break;
                case "jauja":
                  setDistritos([
                    "Jauja", "Acolla", "Apata", "Ataura", "Canchayllo", "El Mantaro", "Huaripampa", 
                    "Julcan", "Masma", "Matará", "Molinos", "Sincos", "Tunan Marca"
                  ]);
                  break;
                case "junín":
                  setDistritos([
                    "Junín", "Chanchamayo", "Concepción", "Jauja", "Junín", "Tarma", "Yauli", "Satipo", 
                    "Chupaca"
                  ]);
                  break;
                case "tarma":
                  setDistritos([
                    "Tarma", "Huaricolca", "La Merced", "San Pedro de Cajas", "Santa Rosa", "La Victoria"
                  ]);
                  break;
                case "yauli":
                  setDistritos([
                    "Yauli", "Chanchamayo", "Concepción", "Huaripampa", "Santa Rosa de Ocopa"
                  ]);
                  break;
                case "satipo":
                  setDistritos([
                    "Satipo", "Pangoa", "Río Tambo", "Mazamari", "La Merced", "Pichanaki"
                  ]);
                  break;
                case "chupaca":
                  setDistritos([
                    "Chupaca", "Ahuac", "Huancán", "Chacayan", "Pucará", "San Juan de Iscos"
                  ]);
                  break;
                  case "trujillo":
                    setDistritos([
                      "Trujillo", "El Porvenir", "La Esperanza", "Florencia de Mora", "Laredo", 
                      "Moche", "Poroto", "Salaverry", "Simbal", "Victor Larco Herrera"
                    ]);
                    break;
                  case "ascope":
                    setDistritos([
                      "Ascope", "Chicama", "Chao", "Casa Grande", "Cascas", "María", 
                      "Paiján", "Rázuri", "Santiago de Cao", "Valle de Chicama"
                    ]);
                    break;
                  case "bolívar":
                    setDistritos([
                      "Bolívar", "Bambamarca", "Longotea", "San Nicolás", "Uchumayo"
                    ]);
                    break;
                  case "chepén":
                    setDistritos([
                      "Chepén", "Pacanga", "Río Seco", "Tres Palmas"
                    ]);
                    break;
                  case "gran-chimú":
                    setDistritos([
                      "Gran Chimú", "Cajamarca", "Valle de Santiago"
                    ]);
                    break;
                  case "julcán":
                    setDistritos([
                      "Julcán", "Cochas", "San Felipe", "Tayabamba"
                    ]);
                    break;
                  case "otuzco":
                    setDistritos([
                      "Otuzco", "Agallpampa", "Cachicadán", "Charat", "Huaranchal", "Mache", "Paranday", 
                      "Quiruvilca", "Salpo", "Sinsicap"
                    ]);
                    break;
                  case "pacasmayo":
                    setDistritos([
                      "Pacasmayo", "San José", "Jequetepeque", "San Pedro de Lloc", "Guadalupe"
                    ]);
                    break;
                  case "pataz":
                    setDistritos([
                      "Pataz", "Buldibuyo", "Cachisapa", "Chagual", "Huaranchal", "La Cuesta", "Santiago de Challas"
                    ]);
                    break;
                  case "santiago-de-chuco":
                    setDistritos([
                      "Santiago de Chuco", "Angasmarca", "Chicama", "Mollepampa", "San Martín de Alao"
                    ]);
                    break;
                  case "valle-jequetepeque":
                    setDistritos([
                      "Valle Jequetepeque", "Paiján", "Chicama", "Casa Grande"
                    ]);
                    break;
                  case "viru":
                    setDistritos([
                      "Viru", "Chao", "Viru", "Chicama", "Salaverry"
                    ]);
                    break;
                    case "chiclayo":
                      setDistritos([
                        "Chiclayo", "Chongoyape", "Eten", "Eten Puerto", "La Victoria", "Lagunas", 
                        "Monsefu", "Pimentel", "Reque", "Santa Rosa", "Tumán"
                      ]);
                      break;
                    case "ferreñafe":
                      setDistritos([
                        "Ferreñafe", "Cañaris", "Incahuasi", "Pitipo", "Santa María", "San José"
                      ]);
                      break;
                    case "lambayeque":
                      setDistritos([
                        "Lambayeque", "Chongoyape", "Ferreñafe", "Mochumi", "Pítipo", "San José", 
                        "San Juan de los Morros"
                      ]);
                      break;
                    case "lima":
                        setDistritos([
                          "Lima", "Miraflores", "San Isidro", "Barranco", "Surco", "San Borja", 
                          "San Luis", "La Molina", "La Victoria", "Pueblo Libre", "Magdalena del Mar", 
                          "Rímac", "Jesús María", "El Agustino", "Cercado de Lima", "San Martín de Porres", 
                          "San Juan de Lurigancho", "San Miguel", "Chorrillos", "San Juan de Miraflores", 
                          "Villa El Salvador", "Villa María del Triunfo", "Lince", "Breña", "Callao", 
                          "Ate", "Lurín", "Pachacámac", "Chaclacayo", "Huarochirí", "Santa María del Mar", 
                          "Ventanilla", "Los Olivos", "Puente Piedra", "Rímac", "Chorrillos", "Carabayllo", 
                          "Comas", "Independencia", "San Vicente de Cañete", "Santa Rosa"
                        ]);
                      break;
                      case "barranca":
                        setDistritos([
                          "Barranca", "Paramonga", "Pativilca", "Zorritos", "Vega de Huaral"
                        ]);
                        break;
                      case "cañete":
                        setDistritos([
                          "Cañete", "San Vicente de Cañete", "Nuevo Imperial", "San Antonio", "Cerro Azul", 
                          "Asia", "Kimbiri", "Santa Cruz"
                        ]);
                        break;
                      case "canta":
                        setDistritos([
                          "Canta", "Huarochirí", "Matucana", "San Pedro de Casta"
                        ]);
                        break;
                      case "huaral":
                          setDistritos([
                            "Huaral", "Chancay", "Aucallama", "Ihuari", "Santa Cruz de Andamarca"
                          ]);
                          break;
                      case "huarochirí":
                          setDistritos([
                            "Huarochirí", "Matucana", "San Pedro de Casta", "Ricardo Palma", "San Mateo", 
                            "San Juan de Casta"
                          ]);
                          break;
                      case "oyon":
                        setDistritos([
                          "Oyon", "Tanta", "Canchayllo", "Huancahuasi", "Santa Clara"
                        ]);
                        break;
                      case "yauyos":
                        setDistritos([
                          "Yauyos", "Aco", "Alis", "Ayaviri", "Catahuasi", "Chocos", "Colonia", 
                          "Laraos", "Omas", "San Juan de Matraca"
                        ]);
                        break; 
                        case "iquitos":
                          setDistritos([
                            "Iquitos", "Punchana", "Belén", "San Juan Bautista"
                          ]);
                          break;
                        
                        case "alto nanay":
                          setDistritos([
                            "Santa María", "San Juan de Sinchicuy", "Santa Cruz"
                          ]);
                          break;
                        
                        case "barranca alto":
                          setDistritos([
                            "Barranca", "Yurimaguas", "Tamshiyacu"
                          ]);
                          break;
                        
                        case "datem del marañón":
                          setDistritos([
                            "Barranca", "Manseriche", "Morona", "Pastaza", "Andoas", "Cahuapanas"
                          ]);
                          break;
                        
                        case "loreto":
                          setDistritos([
                            "Nauta", "Parinari", "Tigre", "Trompeteros", "Urarinas"
                          ]);
                          break;
                        
                        case "mariscal ramón castilla":
                          setDistritos([
                            "Caballo Cocha", "Pebas", "Yavari", "Raimondi"
                          ]);
                          break;
                        
                        case "requena":
                          setDistritos([
                            "Requena", "Alto Tapiche", "Capelo", "Emilio San Martín", "Maquía", 
                            "Puínahua", "Saquena", "Soplin", "Tapiche", "Jenaro Herrera", "Yaquerana"
                          ]);
                          break;
                        
                        case "ucayali":
                          setDistritos([
                            "Contamana", "Inahuaya", "Padre Márquez", "Pampa Hermosa", "Sarayacu", 
                            "Vargas Guerra"
                          ]);
                          break;
                          case "tambopata":
                            setDistritos([
                              "Tambopata", "Inambari", "Las Piedras", "Laberinto"
                            ]);
                            break;
                          
                          case "manu":
                            setDistritos([
                              "Manu", "Fitzcarrald", "Madre de Dios", "Huepetuhe"
                            ]);
                            break;
                          
                          case "tahuamanu":
                            setDistritos([
                              "Iñapari", "Iberia", "Tahuamanu"
                            ]);
                            break;
                            case "moquegua":
                              setDistritos([
                                "Moquegua", "Carumas", "Cuchumbaya", "Samegua", "San Cristóbal", "Torata"
                              ]);
                              break;
                            
                            case "ilo":
                              setDistritos([
                                "Ilo", "El Algarrobal", "Pacocha"
                              ]);
                              break;
                            
                            case "mariscal nieto":
                              setDistritos([
                                "Moquegua", "Carumas", "Cuchumbaya", "San Cristóbal", "Torata"
                              ]);
                              break;
                    
                              case "pasco":
                                setDistritos([
                                  "Chaupimarca", "Huachón", "Huariaca", "Huayllay", "Ninacaca", 
                                  "Pallanchacra", "Paucartambo", "San Francisco de Asís de Yarusyacán", "Simón Bolívar", "Ticlacayán", "Tinyahuarco", "Vicco", "Yanacancha"
                                ]);
                                break;
                              
                              case "daniel alcides carrión":
                                setDistritos([
                                  "Yanahuanca", "Chacayan", "Goyllarisquizga", "Paucar", 
                                  "San Pedro de Pillao", "Santa Ana de Tusi", "Tapuc", "Vilcabamba"
                                ]);
                                break;
                              
                              case "oxapampa":
                                setDistritos([
                                  "Oxapampa", "Chontabamba", "Huancabamba", "Palcazu", 
                                  "Pozuzo", "Puerto Bermúdez", "Villa Rica", "Constitución"
                                ]);
                                break;
                                case "piura":
                                  setDistritos([
                                    "Piura", "Castilla", "Catacaos", "Cura Mori", "El Tallán", 
                                    "La Arena", "La Unión", "Las Lomas", "Tambo Grande"
                                  ]);
                                  break;
                                
                                case "ayabaca":
                                  setDistritos([
                                    "Ayabaca", "Frias", "Jilili", "Lagunas", "Montero", 
                                    "Pacaipampa", "Paimas", "Sapillica", "Sicchez", "Suyo"
                                  ]);
                                  break;
                                
                                case "huancabamba":
                                  setDistritos([
                                    "Huancabamba", "Canchaque", "El Carmen de la Frontera", "Huarmaca", 
                                    "Lalaquiz", "San Miguel de El Faique", "Sondor", "Sondorillo"
                                  ]);
                                  break;
                                
                                case "morropón":
                                  setDistritos([
                                    "Chulucanas", "Buenos Aires", "Chalaco", "La Matanza", 
                                    "Morropon", "Salitral", "San Juan de Bigote", "Santa Catalina de Mossa", 
                                    "Santo Domingo", "Yamango"
                                  ]);
                                  break;
                                
                                case "paita":
                                  setDistritos([
                                    "Paita", "Amotape", "Arenal", "Colán", "La Huaca", 
                                    "Tamarindo", "Vichayal"
                                  ]);
                                  break;
                                
                                case "sullana":
                                  setDistritos([
                                    "Sullana", "Bellavista", "Ignacio Escudero", "Lancones", 
                                    "Marcavelica", "Miguel Checa", "Querecotillo", "Salitral"
                                  ]);
                                  break;
                                
                                case "talara":
                                  setDistritos([
                                    "Talara", "El Alto", "La Brea", "Lobitos", "Los Órganos", "Máncora"
                                  ]);
                                  break;
                                
                                case "sechura":
                                  setDistritos([
                                    "Sechura", "Bellavista de la Unión", "Bernal", "Cristo Nos Valga", 
                                    "Vice", "Rinconada Llicuar"
                                  ]);
                                  break;
                                  case "puno":
                                    setDistritos([
                                      "Puno", "Acora", "Amantani", "Atuncolla", "Capachica", 
                                      "Chucuito", "Coata", "Huata", "Mañazo", "Paucarcolla", 
                                      "Pichacani", "Platería", "San Antonio", "Tiquillaca", "Vilque"
                                    ]);
                                    break;
                                  
                                  case "azángaro":
                                    setDistritos([
                                      "Azángaro", "Achaya", "Arapa", "Asillo", "Caminaca", 
                                      "Chupa", "José Domingo Choquehuanca", "Muñani", "Potoni", 
                                      "Saman", "San Anton", "San José", "San Juan de Salinas", 
                                      "Santiago de Pupuja", "Tirapata"
                                    ]);
                                    break;
                                  
                                  case "carabaya":
                                    setDistritos([
                                      "Macusani", "Ajoyani", "Ayapata", "Coasa", "Corani", 
                                      "Crucero", "Ituata", "Ollachea", "San Gaban", "Usicayos"
                                    ]);
                                    break;
                                  
                                  case "chucuito":
                                    setDistritos([
                                      "Juli", "Desaguadero", "Huacullani", "Kelluyo", "Pisacoma", 
                                      "Pomata", "Zepita"
                                    ]);
                                    break;
                                  
                                  case "el collao":
                                    setDistritos([
                                      "Ilave", "Capaso", "Pilcuyo", "Santa Rosa", "Conduriri"
                                    ]);
                                    break;
                                  
                                  case "huancané":
                                    setDistritos([
                                      "Huancané", "Cojata", "Huatasani", "Inchupalla", "Pusi", 
                                      "Rosaspata", "Taraco", "Vilque Chico"
                                    ]);
                                    break;
                                  
                                  case "lampa":
                                    setDistritos([
                                      "Lampa", "Cabanilla", "Calapuja", "Nicasio", "Ocuviri", 
                                      "Palca", "Paratia", "Pucará", "Santa Lucía", "Vilavila"
                                    ]);
                                    break;
                                  
                                  case "melgar":
                                    setDistritos([
                                      "Ayaviri", "Antauta", "Cupi", "Llalli", "Macari", 
                                      "Nuñoa", "Orurillo", "Santa Rosa", "Umachiri"
                                    ]);
                                    break;
                                  
                                  case "san antonio de putina":
                                    setDistritos([
                                      "Putina", "Ananea", "Pedro Vilca Apaza", "Quilcapuncu", "Sina"
                                    ]);
                                    break;
                                  
                                  case "san román":
                                    setDistritos([
                                      "Juliaca", "Cabana", "Cabanillas", "Caracoto"
                                    ]);
                                    break;
                                  
                                  case "sandia":
                                    setDistritos([
                                      "Sandia", "Cuyocuyo", "Limbani", "Patambuco", "Phara", 
                                      "Quiaca", "San Juan del Oro", "Yanahuaya", "Alto Inambari"
                                    ]);
                                    break;
                                  
                                  case "yunguyo":
                                    setDistritos([
                                      "Yunguyo", "Anapia", "Copani", "Cuturapi", "Ollaraya", 
                                      "Tinicachi", "Unicachi"
                                    ]);
                                    break;
                                    case "moyobamba":
                                      setDistritos([
                                        "Moyobamba", "Calzada", "Soritor", "Yantalo", "San José de Sisa", 
                                        "Huicungo", "San Martín de Sisa"
                                      ]);
                                      break;
                                    
                                    case "bellavista":
                                      setDistritos([
                                        "Bellavista", "Alonso de Alvarado", "San José de Sisa", "Tingo de Saposoa", 
                                        "El Edén"
                                      ]);
                                      break;
                                    
                                    case "el-dorado":
                                      setDistritos([
                                        "San Vicente de Cañete", "La Merced", "San Ramón", "Valle de los ríos Apurímac, Ene y Mantaro (VRAEM)"
                                      ]);
                                      break;
                                    
                                    case "huallaga":
                                      setDistritos([
                                        "Juanjui", "Campanilla", "Huicungo", "San José de Sisa"
                                      ]);
                                      break;
                                    
                                    case "lamas":
                                      setDistritos([
                                        "Lamas", "Barranquita", "Cacatachi", "Pinto Recodo", "San Roque de Cumbaza", "Shanao"
                                      ]);
                                      break;
                                    
                                    case "mariscal-cáceres":
                                      setDistritos([
                                        "Juanjui", "Campanilla", "Huicungo", "San José de Sisa"
                                      ]);
                                      break;
                                    
                                    case "picota":
                                      setDistritos([
                                        "Picota", "El Porvenir", "Pillcopata", "Shatoja", "Vista Alegre"
                                      ]);
                                      break;
                                    
                                    case "rioja":
                                      setDistritos([
                                        "Rioja", "Nuevo Progreso", "San Fernando", "San Martín de los Andes", "Shumba"
                                      ]);
                                      break;
                                    
                                    case "san-martín":
                                      setDistritos([
                                        "San Martín", "Alianza", "San José", "Santa Teresa", "San Ignacio"
                                      ]);
                                      break;
                                    
                                    case "tocache":
                                      setDistritos([
                                        "Tocache", "Nueva Cajamarca", "Pucacaca", "San Alejandro", "Shumba"
                                      ]);
                                      break;
                                      case "tacna":
                                        setDistritos([
                                          "Tacna", "Alto de la Alianza", "Calana", "Ciudad Nueva", "Inclán", "Pocollay", "Sama", "Coronel Gregorio Albarracín Lanchipa"
                                        ]);
                                        break;
                                      
                                      case "candarave":
                                        setDistritos([
                                          "Candarave", "Camilaca", "Chipalune", "Huarachullo", "Oros", "Punta de Bombón", "Quilahuani", "Yanque"
                                        ]);
                                        break;
                                      
                                      case "jorge-basadre":
                                        setDistritos([
                                          "Ite", "Los Palos", "Ticaco", "Viñani"
                                        ]);
                                        break;
                                      
                                      case "tarata":
                                        setDistritos([
                                          "Tarata", "Camilaca", "Esquivel", "Sivica"
                                        ]);
                                        break;
                                        case "tumbes":
                                          setDistritos([
                                            "Tumbes", "Corrales", "La Cruz", "Pampa Grande", "San Jacinto", "San Juan de la Virgen", "Zorritos"
                                          ]);
                                          break;
                                        
                                        case "contralmirante-villar":
                                          setDistritos([
                                            "Zarumilla", "Aguas Verdes", "Canoas de Punta Sal", "Tumbes", "San Jacinto"
                                          ]);
                                          break;
                                        
                                        case "zarumilla":
                                          setDistritos([
                                            "Zarumilla", "Aguas Verdes", "Canoas de Punta Sal", "Tumbes", "San Jacinto"
                                          ]);
                                          break;
                                          case "pucallpa":
                                            setDistritos([
                                              "Pucallpa", "Callería", "Yarinacocha", "Manantay", "Campo Verde", "Nueva Requena", "Curimana", "San Fernando"
                                            ]);
                                            break;
                                          
                                          case "atalaya":
                                            setDistritos([
                                              "Atalaya", "Junín de los Andes", "Manu", "Mazuco", "Shintuya"
                                            ]);
                                            break;
                                          
                                          case "coronel portillo":
                                            setDistritos([
                                              "Yarinacocha", "Manantay", "Campo Verde", "Nueva Requena"
                                            ]);
                                            break;

                                      case "padre abad":
                                        setDistritos([
                                          "Padre Abad", "Irazola", "Río Tambo", "Carmen de la Legua"
                                        ]);
                                      break;
                                          
                                          case "purús":
                                            setDistritos([
                                              "Purús", "María", "Catarata"
                                            ]);
                                            break;
                  
      default:
        setDistritos([]);
    }
  };

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDateTime = now.toLocaleString("es-PE", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setDateTime(formattedDateTime);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <form className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-500">
            LIBRO DE RECLAMACIONES
          </h2>
          <p className="text-gray-500">Fecha y hora: {dateTime}</p>
          <br></br>
        </div>
        </form>
        <div className="text-xs">
        <p className="book_p">Agradecemos su interes en comunicarse con Florería DragonFly. Conforme a lo establecido en código de la Protección y Defensa del consumidor contamos con un Libro de Reclamaciones a tu disposición para que puedas registrar tu queja o reclamo.</p>
		<br></br>
    <h3 className="book_h3 font-semibold">Por favor ingrese los datos solicitados.</h3>
    <br></br>
        </div>
        <form id="formSubmit" method="post" action="">
        <div className="grid grid-cols-1 gap-4">
          <Select placeholder="Tienda" required aria-label="Tienda">
            <SelectItem key="tiendaVirtual">Tienda Virtual</SelectItem>
            </Select>
          <Input placeholder="Razón Social" required />
          <Input placeholder="RUC" required />
          <Input placeholder="Dirección" required />
        </div>
        <div>
          <br></br>
          <h3 className="text-lg font-semibold mb-2 text-red-500">
            DATOS DEL CONSUMIDOR
          <br></br>
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Select placeholder="Tipo de documento" required aria-label="Tipo de documento">
              <SelectItem key="dni">DNI</SelectItem>
              <SelectItem key="pasaporte">Pasaporte</SelectItem>
              <SelectItem key="carne">Carné de extranjería</SelectItem>
              <SelectItem key="ruc">RUC</SelectItem>
            </Select>
            <Input placeholder="Documento de identidad" required />
            <Input
              placeholder="Nombre y apellidos del cliente"
              required
              className="md:col-span-2"
            />
            <Input placeholder="Domicilio" required className="md:col-span-2" />
            <Select placeholder="Departamento" required aria-label="Departamento" onChange={handleDepartamentoChange}>
              <SelectItem key="amazonas" value="amazonas">Amazonas</SelectItem>
              <SelectItem key="ancash" value="ancash">Áncash</SelectItem>
              <SelectItem key="apurimac" value="apurinac">Apurímac</SelectItem>
              <SelectItem key="arequipa" value="arequipa">Arequipa</SelectItem>
              <SelectItem key="ayacucho" value="ayacucho">Ayacucho</SelectItem>
              <SelectItem key="cajamarca" value="cajamarca">Cajamarca</SelectItem>
              <SelectItem key="callao" value="callao">Callao</SelectItem>
              <SelectItem key="cusco" value="cusco">Cusco</SelectItem>
              <SelectItem key="huancavelica" value="huancavelica">Huancavelica</SelectItem>
              <SelectItem key="huanuco" value="huanuco">Huánuco</SelectItem>
              <SelectItem key="ica" value="ica">Ica</SelectItem>
              <SelectItem key="junin" value="junin">Junín</SelectItem>
              <SelectItem key="la-libertad" value="la-libertad">La Libertad</SelectItem>
              <SelectItem key="lambayeque" value="lambayeque">Lambayeque</SelectItem>
              <SelectItem key="lima" value="lima">Lima</SelectItem>
              <SelectItem key="loreto" value="loreto">Loreto</SelectItem>
              <SelectItem key="madre-de-dios" value="madre-de-dios">Madre de Dios</SelectItem>
              <SelectItem key="moquegua" value="moquegua">Moquegua</SelectItem>
              <SelectItem key="pasco" value="pasco">Pasco</SelectItem>
              <SelectItem key="piura" value="piura">Piura</SelectItem>
              <SelectItem key="puno" value="puno">Puno</SelectItem>
              <SelectItem key="san-martin" value="san-martin">San Martín</SelectItem>
              <SelectItem key="tacna" value="tacna">Tacna</SelectItem>
              <SelectItem key="tumbes" value="tumbes">Tumbes</SelectItem>
              <SelectItem key="ucayali" value="ucayali">Ucayali</SelectItem>
              {/* Otras opciones */}
            </Select>
            <Select placeholder="Provincia" required aria-label="Provincia" onChange={handleProvinciaChange} value={provincia}>
              {provincias.map((prov, index) => (
                <SelectItem key={prov.toLowerCase()} value={prov}>{prov}</SelectItem>
              ))}
            </Select>
            <Select placeholder="Distrito" required aria-label="Distrito" value={distritos}>
              {distritos.map((dist, index) => (
                <SelectItem key={dist.toLowerCase()} value={dist}>{dist}</SelectItem>
              ))}
            </Select>
            <Input placeholder="Correo electrónico" type="email" required />
            <Input placeholder="Teléfono fijo (opcional)" />
            <Input placeholder="Teléfono celular" required />
          </div>
          <br>
          </br>
          <Checkbox onChange={(e) => setIsMinor(e.target.checked)}>
            <p className="text-s">El cliente es menor de edad</p>
          </Checkbox>
        </div>
        {isMinor && (
          <div className="grid grid-cols-1 gap-4">
            <br></br>
            <h3 className="text-lg font-semibold mb-2 text-red-500">
              SOLO COMPLETAR EN CASO DE SER MENOR DE EDAD
            </h3>
            <Select placeholder="Tipo de documento" required aria-label="Tipo de documento">
              <SelectItem key="dni">DNI</SelectItem>
              <SelectItem key="pasaporte">Pasaporte</SelectItem>
              <SelectItem key="carne">Carné de extranjería</SelectItem>
            </Select>
            <Input
              placeholder="Número de documento del padre, madre o apoderado"
              required
            />
            <Input
              placeholder="Nombre y apellidos del padre, madre o apoderado"
              required
            />
            <Input
              placeholder="Correo electrónico del padre, madre o apoderado"
              type="email"
              required
            />
            <Input
              placeholder="Teléfono celular del padre, madre o apoderado"
              required
            />
          </div>
        )}
        <div>
          <br></br>
          <h3 className="text-lg font-semibold mb-2 text-red-500">
            DETALLE
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <Select placeholder="Motivo" required aria-label="Motivo">
              <SelectItem key="queja">Queja</SelectItem>
              <SelectItem key="reclamo">Reclamo</SelectItem>
            </Select>
            <div className="info">
                <p className="text-xs"><strong>Queja:</strong> Descontento respecto a la atención al publico o Disconformidad no relacionada a los productos o servicios.</p>
                <p className="text-xs"><strong>Reclamo:</strong> Disconformidad relacionada a los productos o servicios.</p>
                </div>
            <Textarea placeholder="Detalle de la reclamación" required />
          </div>
        </div>
        <div>
          <br></br>
          <h3 className="text-lg font-semibold mb-2 text-red-500">
            INFORMACIÓN ADICIONAL
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Select placeholder="Tipo de bien" required aria-label="Tipo de bien">
              <SelectItem key="producto">Producto</SelectItem>
              <SelectItem key="servicio">Servicio</SelectItem>
            </Select>
            <Select placeholder="Canal de pedido" required aria-label="Canal de pedido">
              <SelectItem key="online">Online</SelectItem>
              {/* Otras opciones */}
            </Select>
            <Input type="date" placeholder="Fecha de pedido" required />
            <Input type="date" placeholder="Fecha de reclamo" required />
            <Input type="number" placeholder="Monto reclamado" required />
            <Textarea
              placeholder="Pedido del cliente"
              required
              className="md:col-span-2"
            />
          </div>
        </div>
        <div>
          <br></br>
          <Checkbox>
            Declaro haber leído y aceptado las políticas de privacidad.
          </Checkbox>
        </div>
        <div className="text-center">
          <br></br>
          <Button
            type="submit"
            className="bg-red-500 text-white px-6 py-2 rounded-md"
          >
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LibroReclamaciones;
