"use client";

import { Button, Checkbox } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { RiH1, RiH3 } from "react-icons/ri";

const TerminosCondiciones = () => {
  const [dateTime, setDateTime] = useState("");

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
    <div className="max-w-5xl mx-auto">
      <div>
      <h2 className="text-lg font-semibold text-red-500 " style={{fontFamily: 'arial' }}>
          TÉRMINOS Y CONDICIONES GENERALES.
        </h2>
      </div>
      <div className="font-size: '10px'">
      <p className='text-xs'>
        Bienvenido a DragonFly online y su página de E-commerce www.dragonfly.com, 
        constituida bajo las leyes peruanas, cuya actividad principal es permitir la exhibición 
        y comercialización de productos en sus diferentes categorías. En dragonfly.pe nos 
        preocupamos en ofrecerle una experiencia de compra que sea de su total expectativas y personalizada. 
        DragonFly establece los Términos y Condiciones del sitio web que a su vez incluyen las 
         de Privacidad, Políticas de Seguridad y Políticas de Cambios y Devoluciones contenidas y 
         descritas en legislación del sitio web. El uso y acceso a este sitio web se rige por estos 
         Términos y Condiciones, así como a la vigente en la República del Perú. En consecuencia, 
         todas las visitas y todos los contratos y transacciones que se realicen en este sitio, 
         así como sus efectos jurídicos, quedarán regidos por estas reglas y sometidos a la legislación 
         aplicable en Perú. Los Términos y Condiciones del sitio web www.dragonfly.com comprendidos en 
         este documento se aplicarán y se entenderá que forman parte de todos los actos y contratos que 
         se ejecuten o celebren mediante los sistemas de oferta y comercialización comprendidos en este 
         E-commerce entre los usuarios de este sitio, compras de productos en general. Por favor le pedimos 
         a nuestros Usuarios debe leer, entender y aceptar todas las condiciones establecidas en los 
         Términos y Condiciones Generales y en las Políticas de Privacidad, así como en los demás documentos 
         incorporados a los mismos por referencia, previo a su registro como Usuario de dragonfly.com y/o a 
         la adquisición de productos y/o entrega de cualquier dato, quedando sujetos a lo señalado y dispuesto 
         en los Términos y Condiciones. 
        </p>
        <p className="font-semibold" style={{ color: '#000000', fontFamily: 'arial' }}>
          1. CAPACIDAD LEGAL
        </p>
        <p className='text-xs'>
        Los Servicios sólo están disponibles para personas que tengan capacidad legal para contratar. 
        No podrán utilizar los servicios las personas que no tengan esa capacidad entre estos los menores de edad. 
        Los actos que los menores realicen en este sitio serán responsabilidad de sus padres, tutores, encargados 
        o cuidadores, y por tanto se considerarán realizados por éstos en ejercicio de la representación legal con 
        la que cuentan. Quien registre un Usuario como empresa afirmará que (i) cuenta con capacidad para contratar 
        en representación de tal entidad y de obligar a la misma en los términos de este Acuerdo, (ii) la dirección 
        señalada en el registro es el domicilio principal Legal y/o Fiscal de dicha entidad, y (iii) cualquier otra 
        información presentada a DragonFly es verdadera, precisa, actualizada, completa y oportuna.
        </p>
        <p className="font-semibold" style={{ color: '#000000', fontFamily: 'arial' }}>
          2. REGISTRO "USUARIO" DEL E-COMMERCE DRAGONFLY
        </p>
        <p className='text-xs'>
          Es obligatorio completar el formulario de registro en todos sus campos con datos válidos y verdaderos para 
          convertirse en Usuario autorizado de dragonfly.com, de esta manera, podrá acceder a las promociones, y a la 
          adquisición de productos y/o servicios ofrecidos en este sitio. El futuro Usuario de DragonFly deberá completar 
          el formulario de registro con su información personal de manera exacta, precisa y verdadera ("Datos Personales")
           y asume el compromiso de actualizar los Datos Personales conforme resulte necesario. DragonFly podrá utilizar 
           diversos medios para identificar a sus Usuarios, pero DragonFly NO se responsabiliza por la certeza de los 
           Datos Personales provistos por sus Usuarios. Los Usuarios garantizan y responden, en cualquier caso, de la 
           exactitud, veracidad, vigencia y autenticidad de los Datos Personales ingresados. En ese sentido, la declaración 
           realizada por los Usuarios al momento de registrarse se entenderá como una Declaración Jurada. Cada Usuario sólo 
           podrá ser titular de una (1) cuenta en DRAGONFLY, no pudiendo acceder a más de una (1) con distintas direcciones de 
           correo electrónico o falseando, modificando y/o alterando sus datos personales de cualquier manera posible. 
           En caso se detecte esta infracción, DRAGONFLY se comunicará con el cliente informándole que todas sus cuentas serán 
           agrupadas en una sola cuenta anulándose todas sus demás cuentas, ello se informara al usuario mediante correo 
           electrónico indicado por él mismo o el último registrado en DRAGONFLY. Si se verifica o sospecha algún uso 
           fraudulento y/o malintencionado y/o contrario a estos Términos y Condiciones y/o contrarios a la buena fe, 
           DragonFly tendrá el derecho inapelable de dar por terminados los créditos, no hacer efectiva las promociones, 
           cancelar las transacciones en curso, dar de baja las cuentas y hasta de perseguir judicialmente a los infractores. 
           DragonFly podrá realizar los controles que crea convenientes para verificar la veracidad de la información dada por 
           el Usuario. En ese sentido, se reserva el derecho de solicitar algún comprobante y/o dato adicional a efectos de 
           corroborar los Datos Personales, así como de suspender temporal o definitivamente a aquellos Usuarios cuyos datos 
           no hayan podido ser confirmados, DRAGONFLY podrá dar de baja la compra efectuada, sin que ello genere derecho alguno 
           a resarcimiento, pago y/o indemnización. El Usuario, una vez registrado, dispondrá de su dirección de email y 
           una clave secreta (en adelante la "Clave") que le permitirá el acceso personalizado, confidencial y seguro. 
           En caso de poseer estos datos, el Usuario tendrá la posibilidad de cambiar la Clave de acceso para lo cual deberá 
           sujetarse al procedimiento establecido en el sitio respectivo. El Usuario se obliga a mantener la confidencialidad 
           de su Clave de acceso, asumiendo totalmente la responsabilidad por el mantenimiento de la confidencialidad de su 
           Clave secreta registrada en este sitio web, la cual le permite efectuar compras, solicitar servicios y obtener 
           información (la “Cuenta”). Dicha Clave es de uso personal, y su entrega a terceros no involucra responsabilidad de 
           DRAGONFLY en caso de utilización indebida, negligente y/o incorrecta.
        </p>
        <p className="font-semibold" style={{ color: '#000000', fontFamily: 'arial' }}>
          3. CONSENTIMIENTO DE LOS PEDIDOS REALIZADOS A TRAVÉS DEL E-COMMERCE DRAGONFLY
        </p>
        <p className='text-xs'>
          A través de este sitio web la empresa realiza ofertas de bienes y servicios (“Productos”), que pueden ser aceptadas por 
          vía electrónica, y utilizando los mecanismos que el mismo sitio ofrece para ello. Toda aceptación de oferta quedará sujeta 
          a la condición suspensiva a que DRAGONFLY valide la transacción. En consecuencia, la recepción por parte de DRAGONFLY de la 
          solicitud de orden de compra no implica que ella haya sido aceptada, para toda operación que se efectúe en este Sitio, 
          la confirmación y/o validación o verificación por parte de la Empresa, será requisito para la formación del consentimiento. 
          Para validar la transacción la empresa deberá verificar: a), b) Que valida y acepta el medio de pago ofrecido por el usuario, 
          c) Que los datos registrados por el cliente en el sitio coinciden con los proporcionados al efectuar su aceptación de oferta, 
          d) Que el pago es acreditado por el Usuario. Para considerar cumplidas las Condiciones de Compra DRAGONFLY verificará lo siguiente: 
          a. Que exista stock disponible de los productos al momento en que se acepta la oferta b. Que el precio del producto del pedido es el correcto. 
          c. Que valida y aprueba el medio de pago seleccionado por el usuario y el monto de compra de mínimo S/50.00. d. Que los datos registrados por el 
          cliente en el sitio coinciden con los proporcionados al efectuar su solicitud de compra; y, que el pedido sea realizado por mayores de 18 años 
          con DNI o CE vigente. e. Que, cuando se trate de ofertas y/o promociones, el pedido respete las condiciones detalladas en los términos legales. 
          En atención a lo señalado en los párrafos anteriores, y como una medida de protección a la seguridad de las transacciones, DRAGONFLY podrá dejar 
          sin efecto los pedidos cuando verifique que no se cumple con una o más de las Condiciones de Compra, en particular lo indicado en los literales a, b, c, d y e precedentes. 
          En caso no se cumpla con alguna de las condiciones indicadas previamente, y como medida de seguridad para el usuario, DRAGONFLY anulará automáticamente el pedido realizado, 
          procediendo a comunicar este hecho a la entidad financiera emisora de la tarjeta utilizada por el usuario en su solicitud de compra. Dicha entidad financiera será la única 
          responsable de proceder con la liberación del importe retenido para la compra, de acuerdo con sus procedimientos y políticas correspondientes. DRAGONFLY podrá proceder 
          a la anulación de cualquier pedido, así como a cancelar la orden de compra correspondiente, en los términos previstos en el presente párrafo en cualquier momento, 
          incluso luego que el usuario reciba una confirmación de recepción de la orden. Aviso Legal: La venta y despacho de los productos está condicionada a su disponibilidad, 
          y a las existencias de producto y/o a un claro error tipográfico. Cuando el producto no se encuentre disponible y/o haya tenido un error tipográfico, DRAGONFLY notificará de 
          inmediato al cliente y devolverá el valor total del precio pagado.
        </p>
        <p className="font-semibold" style={{ color: '#000000', fontFamily: 'arial' }}>4. PRODUCTOS SUSTITUTOS</p>
        <p className='text-xs'>
        Pese a nuestros mejores esfuerzos, es posible que no dispongamos de alguno de los productos, 
        en este caso el cliente tendrá la opción de elegir entre alguno de los criterios de sustitución 
        durante el proceso de compra: Misma marca del producto con otra presentación, 
        mismo precio con otra marca, en caso no desee que sustituyamos el producto, 
        devolverá el valor total del precio pagado.
        </p>
        <p className="font-semibold" style={{ color: '#000000', fontFamily: 'arial' }}>5. MEDIOS DE PAGO QUE SE PODRÁN UTILIZAR EN EL E-COMMERCE DRAGONFLY</p>
        <p className='text-xs'>
          Para poder completar un pedido es necesario que la compra esté valorizada en mínimo S/.50.00. 
          Pago online con cualquier tarjeta de crédito o débito autorizada para compras por internet y 
          confirmada por la plataforma o pasarela de pago de la empresa MERCADOPAGO. Los productos y 
          servicios ofrecidos en el Sitio, salvo que se señale una forma diferente para casos particulares 
          u ofertas de determinados bienes o servicios, sólo pueden ser pagados con los medios que en cada 
          caso específicamente se indiquen. El uso de tarjetas de créditos o débito se sujetará a lo establecido 
          en estos Términos y Condiciones y, en relación con su emisor, y a lo pactado en los respectivos 
          Contratos de Apertura y Reglamento de Uso. En caso de contradicción, predominará lo expresado en ese 
          último instrumento. Tratándose de tarjetas bancarias aceptadas en el Sitio, los aspectos relativos a 
          éstas, tales como la fecha de emisión, caducidad, cupo, bloqueos, cobros de comisiones, 
          interés de compra en cuotas etc., se regirán por el respectivo Contrato de Apertura y Reglamento de Uso, 
          de tal forma que las Empresas no tendrán responsabilidad por cualquiera de los aspectos señalados. 
          El Sitio podrá indicar determinadas condiciones de compra según el medio de pago que se utilice 
          por el usuario. Al utilizar una tarjeta de crédito o débito, el nombre del titular de dicha tarjeta 
          debe coincidir con el nombre utilizado al registrarse en el portal de DRAGONFLY. De lo contrario, 
          se podría anular la operación. Bajo cualquier sospecha y/o confirmación de compras no autorizadas 
          DRAGONFLY cancelará la compra, efectuará el reverso a la tarjeta de forma automática y estará facultado 
          para iniciar acciones judiciales en contra de la persona que haya llevado a cabo la transacción sospechosa. 
          Así mismo, DRAGONFLY podrá en los términos de la ley, entregar la información personal de quien haya 
          realizado la transacción sospechosa a los tarjetahabientes afectados. Los reembolsos por cualquier 
          devolución, productos fuera de stock, pago parcial, y/o total siempre se realizarán a través del mismo 
          medio de pago en el que fue contratado el servicio. En el caso de tarjetas de crédito, el plazo de 
          devolución de dinero para compras efectuadas online, dependerá de las políticas del banco emisor de 
          la tarjeta del cliente.
        </p>
        <p className="font-semibold" style={{ color: '#000000', fontFamily: 'arial' }}>
          6. STOCK EN EL E-COMMERCE DRAGONFLY
        </p>
        <p className='text-xs'>
        DRAGONFLY se encarga de la actualización del e-commerce dragonfly.com y la revisión constante de los 
        productos y/o servicios que se exhiben en el sitio, no obstante, puede modificar y descontinuar los 
        productos y/o servicios en cualquier momento sin contraer ninguna responsabilidad frente a El Usuario. 
        DRAGONFLY0 en dragonfly.com no garantiza un stock mayor al stock mínimo de 1 (una) unidad de sus productos 
        durante el proceso de despacho de los productos. En virtud a ello, DRAGONFLY se reserva el derecho de no 
        aprobar la solicitud de compra y en consecuencia de no despachar un producto si este no cuenta con el stock 
        solicitado. Toda solicitud de compra que se realice a través de www.dragonfly.com será validada según stock 
        de producto, precio, datos del cliente y datos del medio de pago. En caso alguna de estas validaciones diera 
        negativo, no se procederá a la atención de la solicitud de compra, notificándose al Cliente dicho rechazo vía 
        correo electrónico (indicado por el Cliente durante el proceso de registro en el sitio) o vía telefónica si 
        fuera necesario. En caso la falta de stock se presente únicamente respecto de algunos(s) producto(s), 
        DRAGONFLY lo notificará vía correo electrónico con el comando final del pedido despachado.
        </p>
        <p className="font-semibold" style={{ color: '#000000', fontFamily: 'arial' }}>
          7. PRECIO Y PROMOCIONES
        </p>
        <p className='text-xs'>
          Los precios de los productos y servicios disponibles en el E-commerce DRAGONFLY, mientras aparezcan 
          como disponibles, solo tendrán vigencia y aplicación en éste y no serán aplicables a otros canales de 
          venta utilizados por las empresas, tales como, venta telefónica, ventas en tiendas (tiendas físicas), 
          otros sitios de venta por vía electrónica, catálogos u otros. Los precios de los productos ofrecidos en 
          el Sitio están expresados en Soles o su conversión en moneda extranjera si fuera el caso. Los precios 
          ofrecidos corresponden exclusivamente al valor del bien ofrecido y no incluyen gastos de transporte, 
          manejo, envío, accesorios que no se describan expresamente ni ningún otro ítem adicional o cobro de 
          intereses bancarios por el método de pago utilizado. Los precios y/o promociones de los productos y 
          servicios publicados en este sitio, se encuentran vigentes únicamente mientras aparezcan en él. 
          DRAGONFLY podrá modificar cualquier información contenida en este sitio. No aplica para ventas al 
          por mayor ni corporativas. Asimismo, para brindar oportunidad de compra a más clientes durante el Estado 
          de Emergencia a raíz del Covid-19, la cantidad de unidades permitidas por producto podría variar según la 
          disponibilidad de nuestras tiendas de reparto. Estos máximos aplican por cliente, por día, y por domicilio 
          de entrega. En caso se exceda la cantidad de reparto permitida en alguno de pedidos, el pedido será anulado. 
          Si éste fuere pagado con tarjeta de crédito, se efectuará el extorno dentro del plazo que estime la entidad 
          bancaria correspondiente Los productos, colores, marcas y modelos están sujetos a disponibilidad de stock en 
          la tienda online, no habrá lugar a reclamos por una elección errónea del color de un producto. 
          En caso se exceda esta cantidad se procederá a extornar el dinero abonado por el excedente en caso. 
          El plazo de validez de las promociones u oferta es aquel que coincide con la fecha de vigencia indicada 
          en la promoción o en virtud del agotamiento de las cantidades de productos disponibles para esa promoción 
          debidamente informados al Usuario, o mientras la oferta se mantenga disponible, el menor de estos plazos. 
          Cuando quiera que en una promoción no se indique una fecha de terminación se entenderá que la actividad se 
          extenderá hasta el agotamiento de los inventarios correspondientes. El uso del cupón de descuento es 
          completamente gratuito. Cuando se ofrezcan cupones de descuento, se señalará en la publicidad, el valor del 
          cupón, la suma mínima o máxima de compra para poder redimir el bono y las fechas válidas para su redención. 
          El cupón de descuento aplica para compras realizada exclusivamente en la página www.dragonfly.com, asimismo, 
          dichos cupones de descuento no podrán ser usados para la compra de productos distintos a los señalados y/o 
          aplicarse en promociones distintas, las cuales se encuentren mencionados en la restricción del legal de la 
          promoción. Podrá hacer uso del bono de descuento cualquier persona natural mayor de dieciocho (18) años, 
          conforme a lo establecido en el punto 1. Capacidad Legal. El cupón de descuento no es válido para tarjetas 
          de regalo ni ventas corporativas. Se entiende por ventas corporativas todas aquellas ventas realizadas a 
          personas jurídicas. No es acumulable con otras promociones. El uso del bono solamente podrá ser usado una 
          vez por cada cliente y una vez vencido no podrá volver ser usado o reactivado. DRAGONFLY solo considerará 
          validos aquellos cupones de descuento que cumplan con las condiciones específicas de la promoción. 
          Al hacer una compra con el cupón se entiende que el consumidor ha aceptado íntegramente tanto los 
          Términos y Condiciones generales de la página, así como estos Términos y Condiciones particulares de 
          cada promoción. Dichas promociones y/o cupones no es válido ni aplica en las campañas de San Valentín 
          (12, 13 y 14 febrero), Día de la Mujer (08 de marzo), Día de la Secretaria y Asistente Ejecutiva (26 de abril), 
          Día de la Madre (en la segundo semana considerado desde viernes, sábado y domingo de mayo) y Día del Padre 
          (tercer domingo de junio); solo se venderán los productos del catálogo de dicha Campaña, asimismo algunos 
          productos se incrementará por la demanda que hay en el mercado y afecta los costos establecidos.
        </p>
        <p className="font-semibold" style={{ color: '#000000', fontFamily: 'arial' }}>8. SOBRE LA ENTREGA O DESPACHO DE LOS PRODUCTO</p>
        <p className='text-xs'>
        Los productos adquiridos a través de la página web se sujetarán a las condiciones de despacho y entrega 
        elegidas por el cliente y disponibles en el Sitio. Si desea adquirirlo en el e-commerce DRAGONFLY 
        solicitarlo con anticipación, de 24 horas a 48 horas, según el producto, contando con rangos establecidos 
        y capacidad limitada. Los productos están sujetos al stock disponible (Máximo 40 unidades). Las imágenes o 
        fotos son referenciales. El servicio de Despacho a Domicilio tiene costo adicional no está incluido en los 
        precios de los productos. Si el receptor no cuenta con número de pedido se verifica en la cola de órdenes. 
        Solicitar su documento de identificación, validar los datos. Cliente/receptor debe firmar el ticket de orden 
        de entrega (nombre completo, Dni o Carnet de Extranjería y número de celular) De ser necesario pueden tomar 
        foto del cliente. Despacho a Domicilio: GRAMECO cuenta con cobertura de despachos a nivel nacional e 
        internacional. En la ciudad de Lima es distritos: Barranco, Comas, Breña, Chorrillos, Jesús María, 
        Independencia, Lince, Los Olivos, Magdalena del Mar, Miraflores, San Borja, San Isidro, San Juan de Lurigancho, 
        San Luis, Pueblo Libre, Santiago de Surco y Surquillo. Solo en Temporada de Verano repartimos a las playas del 
        Sur considerado desde el Kilómetro 60 hasta el 120 de la Panamericana Sur. Las entregas se realizan de 3 a 5 
        días útiles durante el día, sin horario exacto de entrega. Consultar las zonas disponibles de cada Distrito al 
        registrar tu ubicación durante el proceso. En caso la ubicación del domicilio del cliente no pueda atenderse 
        porque está en una calle o zona de difícil acceso, DRAGONFLY se comunicará con el cliente para gestionar un 
        cambio de domicilio y poder entregar el producto adquirido. Los productos disponibles para este servicio están 
        limitados por dimensiones y pesos ya que son transportados en unidades de reparto como motos, móviles y apoyo de 
        terceros Courier particulares. Si por alguna razón no se pudiera brindar el servicio en las condiciones indicadas,
         para no afectar el servicio que buscamos brindarles a nuestros clientes, este método podrá ser deshabilitado o 
         el despacho podrá ser modificado previa coordinación con el cliente. Asimismo, el horario de entrega podría 
         verse modificado extraordinariamente a raíz de disposiciones gubernamentales. Para recibir su pedido, el cliente 
         o receptor (persona autorizada), deberá identificarse con su DNI. Cuando el cliente o receptor reciba su pedido 
         deberá revisar el estado de sus productos. Si el cliente o receptor puede rechazar la entrega del pedido si 
         considera que no está en las condiciones requeridas y comunicar DRAGONFLY. Si acepta su pedio, el encargado de 
         despacho solicitará al cliente o receptor que firme el formato de aceptación, como señal de conformidad del 
         despacho, DRAGONFLY no se responsabiliza por daños físicos del producto o faltante del mismo, sólo se atenderán 
         reclamos por temas de garantía o cualquiera descrita dentro de la Política de Devolución y Cambios en los 
         tiempos establecidos en estos Términos y Condiciones. En el caso de productos para ser entregados en Edificios 
         pisos superiores al quinto piso, para evitar daños en el producto, no realizamos entregas sino cuenta con los 
         medios necesarios, el transportista sólo está autorizado a entregar el pedido hasta en un 5to. piso, salvo tenga 
         acceso a ascensores o montacargas. Es indispensable que antes de comprar, revises las dimensiones del producto y 
         del lugar donde lo entregaremos, así evitarás problemas y se podrá efectuar la entrega de forma satisfactoria. 
         El personal de despacho tiene prohibido recibir propinas, así como también solicitar implementos para realizar 
          el envío. La información del lugar de envío es de exclusiva responsabilidad del cliente. Por lo que será de tu 
          responsabilidad la exactitud de los datos indicados para realizar una correcta y oportuna entrega de los 
          productos a tu domicilio o dirección de envío. Si hubiera algún error en la dirección, tu producto podría no 
          llegar en la fecha indicada. Los plazos elegidos para el despacho y entrega se cuentan desde que DRAGONFLY 
          valida la orden de compra y el medio de pago utilizado, considerándose días hábiles para el cumplimiento de 
          dicho plazo. DRAGONFLY mantendrá informado a los clientes sobre el estado de su pedido, en su cuenta o 
          solicitar información en nuestros canales de atención: Central telefónica 446-4555, WhatsApp 987 458 758, 
          Chat, redes sociales o correos pedidosdragonfly@gmail.com y atencionalclientedf@gmail.com horario de oficina 
          de Lunes a Sábados de 8:00am 6:00pm Domingos y Feriados de 9:00am a 5:00pm. 
          El Usuario sólo podrá solicitar el cambio de dirección antes de recibir el correo de confirmación de 
          DRAGONFLY, si en caso el cliente no ha ingresado la dirección correcta en el momento de realizar la 
          compra y la orden ya se encuentre confirmada, el cliente tendría que solicitar a DRAGONFLY la cancelación de 
          la compra inicial y crear una nueva con la dirección correcta, teniendo en cuenta que la venta y despacho de 
          los productos está condicionada a su disponibilidad, nuevo precio del producto, los nuevos plazos de entrega, 
          establecidos por DRAGONFLY y los costos asociados a esta nueva dirección. Nota: Se recomienda al cliente 
          realizar el cambio de la dirección en su cuenta de DRAGONFLY para que en próximas compras no se genere error 
          alguno. DRAGONFLY realizará hasta dos intentos de visita al domicilio indicado por el cliente. 
          Si en esta segunda entrega, al cliente se le vuelve a encontrar ausente, el pedido será retornado, 
          la compra será anulada y se procederá a realizar el extorno por el medio de pago que realizó. 
          Posteriormente le llegará un correo electrónico al cliente sobre la anulación del pedido. 
          En caso el cliente aún quiera el pedido, deberá generar una nueva orden de compra, teniendo en cuenta la 
          posible modificación del precio del producto y su disponibilidad. Horario de Despacho Los horarios de despacho 
          para compras en el E-commerce de DRAGONFLY, son elegidos por el cliente durante el proceso de compra. Una vez 
          que complete sus datos y seleccione el DISTRITO de la entrega, se le mostrarán los días y rangos horarios 
          disponibles, así como el precio del envío a domicilio. Este precio varía según la zona de envío, el rango 
          horario 8:00am a 1:00pm y 1:00pm a 6:00pm. El cliente podrá también indicar los datos de una tercera persona 
          autorizada para recibir su pedido. Nuestro servicio de envío a domicilio tiene un máximo de 10 minutos de 
          espera luego de notificar al cliente la llegada a la dirección de entrega. Transcurrido este periodo se 
          procederá a retirarse y se cobrará el monto de la entrega de acuerdo al tarifario vigente. 
          El cliente deberá coordinar la reprogramación del pedido contactando a nuestro Canales de Atención. 
          Durante campañas específicas de DRAGONFLY San Valentín (12, 13 y 14 febrero), Día de la Mujer (08 de marzo), 
          Día de la Secretaria y Asistente Ejecutiva (26 de abril), Día de la Madre (en la segundo semana considerado 
          desde viernes, sábado y domingo de mayo), Día del Padre (tercer domingo de junio) y Navidad (Campaña Navideña) 
          el incremente de la cantidad de pedidos, y/o situaciones imprevisibles, caso fortuito o fuerza mayor, 
          DRAGONFLY no se abastece con sus unidades de reparto y se ve en la obligación de contratar a empresas 
          particulares o externas de servicios de repartos para realizar las entregas programadas con una capacidad de 
          Logistica limitada. En tal sentido, tendrá la potestad de reprogramar los pedidos previa coordinación con el 
          cliente, quien podrá solicitar que se deje sin efecto su pedido sin penalidad, de no estar de acuerdo con la 
          nueva fecha. Los días 25 de diciembre y 01 de enero no contaremos con servicio de despacho y el 24 y 31 de 
          diciembre solo hasta el mediodía. Asimismo, los horarios de despacho a domicilio, podría verse modificadas 
          extraordinariamente a raíz de disposiciones gubernamentales. DRAGONFLY estamos trabajando para garantizar 
          la disponibilidad y entrega de los Productos en el plazo ofrecido; sin embargo, debido a la situación que 
          afrontamos por la propagación del COVID-19 y al incremento de las operaciones a través de nuestro canal de 
          comercio electrónico, te informamos que nuestros plazos de entrega pueden sufrir eventuales retrasos. 
          Recordamos a todos nuestros usuarios que nuestras actividades económicas se encuentran sujetas al cumplimiento 
          de las disposiciones del Gobierno y pueden verse afectadas en cualquier momento por el Estado de Emergencia 
          Nacional por lo que, ante supuestos de caso fortuito o fuerza mayor, para su beneficio, usted nos faculta a 
          proceder con la anulación de la orden de compra y la devolución al medio de pago empleado. 

        </p>
        <p className="font-semibold" style={{ color: '#000000', fontFamily: 'arial' }}>
          9. POLÍTICA DE DEVOLUCIÓN O CAMBIO DE PRODUCTO
        </p>
        <p className='text-xs'>
          Para gestionar un cambio o devolución es obligatoria la presentación del ticket de compra original o 
          guía de la orden de entrega y el documento nacional de identidad. Es importante que nos comunique e 
          informarnos dentro del tiempo establecidos de la Garantía del producto en los canales de atención de GRAMECO: 
          Central telefónica 446-4666, WhatsApp 945 737 318, Chat, redes sociales o correos pedidosdragonfly@gmail.com y 
          atencionalclientedf@gmail.com horario de oficina de Lunes a Sábados de 8:00am 6:00pm Domingos y Feriados de 
          9:00am a 5:00pm. El proceso de devolución; están sujetos a los motivos causales que hubiese presentado. 
          Asimismo, al realizar el extorno por el medio de pago que realizó su compra. Si la compra fue con medio de 
          pago tarjeta de Crédito, el tiempo de devolución es de acuerdo con las políticas de su banco emisor 
          (un aproximado de 21 días útiles). Los motivos para realizar una devolución o cambio de productos: 
          Productos con Garantía; en busca de las expectativas de los clientes si no desea el producto comunicar e 
          informarnos en cualquier canal de atención de DRAGONLFY; DENTRO DE LAS 24 HORAS después de recibir el pedido, 
          para aceptar el proceso de devolución; recoger los productos en su totalidad y realizar el extorno del dinero 
          por el medio de pago que realizo la compra. Producto en mal estado o defectuoso; si sus orquídeas, anturios o 
          arreglos no cumplieron con los estándares de calidad comunicar e informarnos en cualquier canal de atención de 
          DRAGONFLY; DENTRO DE LAS 24 HORAS después de recibir el pedido, para aceptar el proceso de devolución; recoger 
          los productos en su totalidad y realizar el extorno del dinero por el medio de pago que realizo la compra. 
          O si desea realizar el cambio del producto (sujeto a disponibilidad de stock en la página). Producto diferente 
          a la descripción en el E-commerce DRAGONFLY, si no desea o no está de acuerdo, comunicar e informarnos en 
          cualquier canal de atención de DRAGONFLY; DENTRO DE LAS 24 HORAS después de recibir el pedido, para aceptar 
          el proceso de devolución; recoger los productos en su totalidad y realizar el extorno del dinero por el medio 
          de pago que realizo la compra. Empaque exterior dañado, si no desea o no está de acuerdo, comunicar e 
          informarnos en cualquier canal de atención de DRAGONFLY; DENTRO DE LAS 24 HORAS después de recibir el pedido, 
          para aceptar el proceso de devolución; recoger los productos en su totalidad y realizar el extorno del dinero 
          por el medio de pago que realizo la compra. O si desea realizar el cambio del producto (sujeto a disponibilidad 
          de stock en la página). Faltan partes o accesorios de este producto, si no desea o no está de acuerdo, 
          comunicar e informarnos en cualquier canal de atención de DRAGONFLY; DENTRO DE LAS 24 HORAS después de recibir 
          el pedido, para aceptar el proceso de devolución; recoger los productos en su totalidad y realizar el extorno 
          del dinero por el medio de pago que realizo la compra. O si desea realizar el cambio del producto (sujeto a 
          disponibilidad de stock en la página). No es el producto comprado o Producto Sustituto, si no desea o no está 
          de acuerdo, comunicar e informarnos en cualquier canal de atención de DRAGONFLY; DENTRO DE LAS 24 HORAS después 
          de recibir el pedido, para aceptar el proceso de devolución; recoger los productos en su totalidad y realizar 
          el extorno del dinero por el medio de pago que realizo la compra. Pedido accidental, si no desea o no está de 
          acuerdo, comunicar e informarnos en cualquier canal de atención de DRAGONFLY; DENTRO DE LAS 24 HORAS después de 
          recibir el pedido, para aceptar el proceso de devolución; recoger los productos en su totalidad y realizar el 
          extorno del dinero por el medio de pago que realizo la compra. Se excedió la fecha de entrega estimada, si no 
          desea o no está de acuerdo, comunicar e informarnos en cualquier canal de atención de DRAGONFLY; 
          DENTRO DE LAS 24 HORAS después de recibir el pedido, para aceptar el proceso de devolución; recoger los 
          productos en su totalidad y realizar el extorno del dinero por el medio de pago que realizo la compra. 
          Si el producto no es entregado en su totalidad dentro de las 24 horas después de comunicarnos y haber recibido, 
          se realizará extorno parcial o se considerará como cancelada la solicitud.
        </p>
        <p className="font-semibold" style={{ color: '#000000', fontFamily: 'arial' }}>
          10. RESTRICCIONES
        </p>
        <p className='text-xs'>
        No se aceptará la devolución o cambio de los siguientes productos: -Arreglos, Flores que tengan más de 72 horas después de haberlas recibido, y no hayan cumplido el proceso de cuidado. -Arreglos Preservados si paso dentro de las políticas de Garantía no cambio ni devolución.
        </p>
        <p className="font-semibold" style={{ color: '#000000', fontFamily: 'arial' }}>
          11. POLÍTICA DE GARANTÍAS
        </p>
        <p className='text-xs'>
        Con el fin de ofrecer un mejor servicio; nosotros nos comprometemos a recibir todas sus solicitudes de incidencias en los productos adquiridos y le proporcionaremos solución a dicha solicitud de garantía La garantía DRAGONFLY o de algunos productos de otros proveedores, tienen las siguientes garantías: Productos Perecibles; tienen una garantía de 24 horas después de recibir el producto. Productos No Perecibles; tienen una garantía de 48 horas hasta 72 horas después de recibir el producto. Plantas; tienen una garantía de 15 días después de recibir el producto. Productos Preservadas; tienen una garantía de 3 meses después de recibir el producto.
        </p>
        <p className="font-semibold" style={{ color: '#000000', fontFamily: 'arial' }}>
          12. COMPROBANTES DE PAGO
        </p>
        <p className='text-xs'>
        Según el reglamento de Comprobantes de Pago aprobado por la Resolución de Superintendencia N° 007-99 / SUNAT (RCP) y el Texto Único Ordenado de la Ley del Impuesto General a las Ventas e Impuesto Selectivo al Consumo, aprobado mediante Decreto Supremo N° 055-99-EF y normas modificatorias (TUO del IGV): “No existe ningún procedimiento vigente que permita el canje de boletas de venta por facturas, más aún las notas de crédito no se encuentran previstas para modificar al adquirente o usuario que figura en el comprobante de pago original”. Teniendo en cuenta esta resolución, es obligación del consumidor decidir correctamente el documento que solicitará como comprobante al momento de su compra, ya que según los párrafos citados no procederá cambio alguno.
        </p>
        <p className="font-semibold" style={{ color: '#000000', fontFamily: 'arial' }}>
          13. REEMBOLSOS
        </p>
        <p className='text-xs'>
        Luego que el reembolso es aprobado y ejecutado, el tiempo de procesamiento varía según el método de pago usado. Para una compra con tarjeta de crédito, débito o métodos que permitan la devolución del dinero a través de una cuenta asociada, se hará el reverso a la tarjeta o a la cuenta asociada por el total pagado. Para una compra a través de una transferencia, depósito bancario o pagos en efectivo, se hará una transferencia por el total pagado a cuenta bancaria del titular de la compra. Tiempos de ejecución: El tiempo de ejecución del reembolso es de hasta un (10) días hábiles. Tiempos de procesamiento: Reverso a la tarjeta: El tiempo del reembolso a una tarjeta puede ser hasta quince (21) días hábiles, el tiempo de procesamiento es responsabilidad de la entidad financiera que emitió la tarjeta y es contado desde la ejecución del reembolso. Transferencia bancaria: Para recibir el dinero en una cuenta bancaria, el titular de la cuenta debe ser el mismo que realizó la compra en DRAGONFLY. El tiempo de procesamiento es de tres (3) días hábiles desde su ejecución. La información bancaria proporcionada por el cliente debe ser correcta para evitar retrasos en la atención. De no ser así los tiempos de ejecución y procesamiento se prolongarán. Los datos necesarios son: Nombre y apellido Documento de Identidad Número de orden Correo electrónico registrado en DRAGONFLY Datos de la cuenta bancaria. Cabe precisar que GRAMECO no se responsabiliza por las demoras o dificultades que presente la Entidad Financiera para el cumplimiento del reembolso.
        </p>
        <p className="font-semibold" style={{ color: '#000000', fontFamily: 'arial' }}>
          14. ATENCIÓN POSTVENTA
        </p>
        <p className='text-xs'>
        Cualquier consulta respecto nuestra tienda online incluyendo el estado de sus pedidos, pueden hacerlo a través de los canales de atención: Contact Center 446-4666 opción 3 Asistente Virtual de CHAT Redes Sociales WhatsApp 945 737 318 El horario de atención: Lunes a Sábados de 8:00am 6:00pm Domingos y Feriados de 9:00am a 5:00pm. Excepto el 01 de Enero y 25 de Diciembre. Mediante los canales, el cliente o usuario podrá: · Consultar sobre el estado de su pedido y avance del despacho. · Consultar sobre nuestras políticas vigentes. · Hacer la cancelación de la totalidad de su orden hasta con 24 horas de anticipación del inicio de su bloque horario. · Consultar cualquier inquietud sobre el uso de www.dragonfly.com · El Usuario es responsable de identificarse mediante su DNI o CE y brindar los datos de validación solicitados, en caso no los brinde o existan inconsistencias con nuestra base de datos no podremos darle el soporte en la modificación o cancelación de los pedidos o brindarle información relacionada a la cuenta consultada.
        </p>
        <p className="font-semibold" style={{ color: '#000000', fontFamily: 'arial' }}>
          15. RESPONSABILIDAD DE DRAGONFLY
        </p>
        <p className='text-xs'>
        DRAGONFLY hará lo posible dentro de sus capacidades para que la transmisión del Sitio sea ininterrumpida y libre de errores. Sin embargo, dada la naturaleza de la Internet, dichas condiciones no pueden ser garantizadas. En el mismo sentido, el acceso del Usuario a la Cuenta puede ser ocasionalmente restringido o suspendido con el objeto de efectuar reparaciones, mantenimiento o introducir nuevos Servicios. DRAGONFLY. no será responsable por pérdidas (i) que no hayan sido causadas por el incumplimiento de sus obligaciones; (ii) lucro cesante o pérdidas de oportunidades comerciales; (iii) cualquier daño indirecto.
        </p>
        <p className="font-semibold" style={{ color: '#000000', fontFamily: 'arial' }}>
          16. TÉRMINOS DE LEY
        </p>
        <p className='text-xs'>
        Este acuerdo será gobernado e interpretado de acuerdo con las leyes de Perú, sin dar efecto a cualquier principio de conflictos de ley. Si alguna disposición de estos Términos y Condiciones es declarada ilegal, o presenta un vacío, o por cualquier razón resulta inaplicable, la misma deberá ser interpretada dentro del marco del mismo y en cualquier caso no afectará la validez y la aplicabilidad de las provisiones restantes.
        </p>
        <p className="font-semibold" style={{ color: '#000000', fontFamily: 'arial' }}>
          17. NOTIFICACIONES
        </p>
        <p className='text-xs'>
        Cualquier comentario, inquietud o reclamación respecto de los anteriores Términos y Condiciones, la Política de Privacidad, o la ejecución de cualquiera de éstos, deberá ser notificada por escrito a DRAGONFLY SAC. a la siguiente dirección: Tnt Lengua Romero Mz J1 Lt 2b Chorrillos, provincia y departamento de Lima
        </p>
    </div>
    </div>
  );
};

export default TerminosCondiciones;