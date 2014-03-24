module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('<!DOCTYPE html>\n<html ng-app="enso">\n  <head>\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n    <title>enso</title>\n    <link rel="favicon.ico" href="favicon.ico">\n    <link rel="stylesheet" href="/css/app.css">\n    <script type="text/javascript">\n      window.brunch = window.brunch || {}\n      window.brunch[\'auto-reload\'] = {enabled: true}\n    </script>\n    <script src="/js/vendor.js"></script>\n    <script src="https://www.google.com/jsapi"></script>\n    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBprIiRqwGjuc69d-tvNpCY5kptKBALh8E&amp;sensor=false"></script>\n    <script src="/js/app.js"></script>\n    <link href="http://fonts.googleapis.com/css?family=PT+Sans:400,700" rel="stylesheet">\n  </head>\n  <body>\n    <div class="main_nav">\n      <div class="nav_logo"><a href="/"><img src="img/menu/logo_small.png" alt="" width="40" height="39"></a></div>\n      <div class="nav_icon"><a href="#"><img src="img/menu/menu.svg" alt="" width="41" height="40"></a></div>\n      <div class="nav_close"><a href="#"><img src="img/menu/close.svg" alt="" width="36" height="40"></a></div>\n    </div>\n    <div class="main_nav_menu">\n      <div class="menu_item"><a href="#intro" class="scrollTo">INICIO </a></div>\n      <div class="menu_item"><a href="#nosotros" class="scrollTo">NOSOTROS </a></div>\n      <div class="menu_item"><a href="#paneles" class="scrollTo">PANELES </a></div>\n      <div class="menu_item"><a href="#calentadores" class="scrollTo">BOILERS </a></div>\n      <div class="menu_item"><a href="#albercas" class="scrollTo">ALBERCAS </a></div>\n      <div class="menu_item"><a href="#ahorro" class="scrollTo">AHORRA </a></div>\n      <div class="menu_item"><a href="#blog" class="scrollTo">NOTICIAS </a></div>\n      <div class="menu_item"><a href="#map" class="scrollTo">UBICACIÓN </a></div>\n      <div class="menu_item"><a href="#contactanos" class="scrollTo">CONTACTO  </a></div>\n    </div>\n    <div id="intro" class="section">\n      <div class="bg"></div>\n      <div class="logo">\n        <div class="img"><img src="img/logo2.png" alt=""></div>\n        <p>ENERGIA SOLAR</p>\n      </div><a href="#nosotros" class="goDown scrollTo"></a>\n    </div>\n    <div id="nosotros" class="section">\n      <div class="wrap">\n        <p class="title">NOSOTROS</p>\n        <hr>\n        <p class="paragraph">Enso Energía es una empresa mexicana fundada en la ciudad de Torreón Coahuila en el año 2013. Nos dedicamos a la comercialización e instalación de sistemas de generación de energía renovable, principalmente a través de la energía solar. Somos especialistas en proyectos de generación de energía eléctrica a través de paneles solares (energía solar fotovoltaica) y en el diseño y comercialización de equipos de calentamiento solar de agua (energía solar térmica).</p>\n      </div>\n    </div>\n    <div id="panelesBg" class="section">\n      <div class="bg"></div>\n      <div class="wrap">\n      </div>\n    </div>\n    <div id="paneles" class="section">\n      <div class="wrap">\n        <p class="title">PANELES SOLARES</p>\n        <hr>\n        <div class="services_sect1"><img src="img/menu/menu_v2_01.png" height="92">\n          <h3>Interconectados a la red de CFE</h3>\n          <p class="paragraph">Estos sistemas no necesitan respaldo de baterías para almacenar la energía producida durante el día. La energía eléctrica producida por medio del sol, es interconectada a la red eléctrica de la compañía de luz, de esta manera, cuando es de noche o en días nublados, la compañía seguirá suministrando la electricidad necesaria en el hogar o negocio. Lo importante aquí, es cambiar mediante un sencillo trámite, el medidor convencional por uno llamado BIDIRECCIONAL, también suministrado por CFE. Con este medidor, la energía excedente que se produzca durante el día y que se va por la red, es contabilizada a favor del propietario del sistema, por lo que cada uno de los KWH producidos mediante el sol, son aprovechados.</p>\n        </div>\n        <div class="services_sect2"><img src="img/menu/menu_v2_01.png" height="92">\n          <h3>Aislados o autónomos.</h3>\n          <p class="paragraph">Estos sistemas son utilizados cuando no existe manera de conectar el sistema solar a la red de CFE. A diferencia de los interconectados, los sistemas autónomos requieren baterías de respaldo para almacenar la electricidad producida durante el día por medio del sol. Son ideales para ranchos, casas de campo, cabañas, etc. y para cualquier lugar donde se requiera electricidad y no haya acceso a la red de la compañía de luz.      </p>\n        </div>\n      </div>\n    </div>\n    <div id="calentadoresBg" class="section">\n      <div class="bg"></div>\n      <div class="wrap">\n      </div>\n    </div>\n    <div id="calentadores" class="section">\n      <div class="wrap">\n        <p class="title">BOILERS SOLARES</p>\n        <hr>\n        <div class="services_sect1"><img src="img/menu/menu_v2_03.png" height="92">\n          <h3>Línea CH</h3>\n          <p class="paragraph">La línea CH cuenta con tanque exterior, estructura y reflectores en acero inoxidable. El tanque interior es de acero de titanio porcenalizado. Su característica más destacable, es que no requiere que haya un boiler de gas o eléctrico de respaldo, ya que cuenta en su tanque interno con una resistencia eléctrica que calienta el agua por medio de electricidad cuando es necesario. Esta resistencia es controlada por medio de un panel digital que se programa de manera automática o se controla manualmente para que nunca falta agua caliente en el hogar.</p>\n        </div>\n        <div class="services_sect2"><img src="img/menu/menu_v2_03.png" height="92">\n          <h3>Línea EH</h3>\n          <p class="paragraph">La línea EH se recomienda cuando ya existe un boiler de gas o eléctrico de respaldo. Cuenta con tanque exterior y estructura de acero de zinc galvanizado. El tanque interior es de acero inoxidable 304- 2B (grado alimenticio). </p>\n        </div>\n      </div>\n    </div>\n    <div id="albercasBg" class="section">\n      <div class="bg"></div>\n      <div class="wrap"></div>\n    </div>\n    <div id="albercas" class="section">\n      <div class="wrap">\n        <p class="title">ALBERCAS</p>\n        <hr>\n        <div class="services_sect1"><img src="img/menu/menu_v2_03.png" height="92">\n          <h3>Albercas Climatizadas</h3>\n          <p class="paragraph">Los calentadores solares de polipropileno UV con protección Sun Guard, son piezas diseñadas y fabricadas bajo altos estándares de calidad con tecnología de punta y desarrollo de materiales para sistemas de calentamiento de agua a través del aprovechamiento de los rayos solares.</p>\n        </div>\n        <div class="services_sect2"><img src="img/menu/menu_v2_03.png" height="92">\n          <h3>Calentamiento de agua gran escala</h3>\n          <p class="paragraph">Nuestros sistemas solares a gran escala, están diseñados para calentar grandes volúmenes de agua para comercios o industrias que le requieran. Son diseñados a la medida de las necesidades y son ideales para clubes deportivos, granjas avícolas, establos lecheros, hoteles, tortillerías, restaurantes, etc.  </p>\n        </div>\n      </div>\n    </div>\n    <div id="contactoBg" class="section">\n      <div class="bg"></div>\n      <div class="wrap"></div>\n    </div>\n    <div id="ahorro" class="section">\n      <div class="wrap">\n        <p class="title">CALCULA TU AHORRO</p>\n        <hr>\n        <p class="paragraph">Calcula el ahorro que podrías tener con un sistema de energía solar. Consulta tu consumo diario en tu recibo de luz.</p>\n        <form name="projectplanner" method="post" id="projectplanner" action="php/submit.php">\n          <div class="floating-placeholder">\n            <input id="name" name="name" type="text">\n            <label for="name">Nombre / Compañía</label>\n          </div>\n          <div class="floating-placeholder">\n            <input id="phone" name="phone" type="integer">\n            <label for="phone">Teléfono</label>\n          </div>\n          <div class="floating-placeholder">\n            <input id="email" name="email" type="text">\n            <label for="email">Email</label>\n          </div>\n          <div class="floating-placeholder">\n            <input id="city" name="city" type="text">\n            <label for="city">Ciudad</label>\n          </div>\n          <div class="floating-placeholder">\n            <input id="consumo" name="consumo" type="text">\n            <label for="consumo">Consumo diario kW/h</label>\n          </div>\n        </form>\n        <div style="padding-top: 20px;">\n          <center>\n            <div class="send_btn files"><a href="">SUBIR RECIBO</a>\n              <input id="fileupload" type="file" name="files[]" data-url="server/php/" multiple>\n            </div>\n            <div class="send_btn"><a href="javascript:document.getElementById(\'projectplanner\').submit();">ENVIAR</a></div>\n          </center>\n        </div>\n      </div>\n    </div>\n    <div id="blogBg" class="section">\n      <div class="bg"></div>\n      <div class="wrap"></div>\n    </div>\n    <div id="blog" class="section">\n      <div class="wrap">\n        <p class="title">NOTICIAS</p>\n        <hr>\n      </div>\n      <div class="postsCont">\n        <div class="left"></div>\n        <div class="right"></div>\n        <div id="posts">\n          <div class="post"></div>\n        </div>\n      </div>\n    </div>\n    <div id="map" class="section">\n      <div id="mapa"></div>\n    </div>\n    <div id="ubicacion" class="section">\n      <div class="wrap">\n        <p class="title">UBICACIÓN</p>\n        <hr>\n        <p class="paragraph">Blvd. Independencia #123 Ote. Local 2 <br> C.P. 27140 <br> Torreón, Coah. México.<br> Teléfono: 871 7 13 86 42</p>\n      </div>\n    </div>\n    <div id="contactanos" class="section">\n      <div class="bg"></div>\n      <div class="wrap">\n        <p class="title">CONTACTO</p>\n        <hr>\n        <div class="socialCont">\n          <div class="social"><a target="_blank" href="https://www.facebook.com/pages/ENSO-Energ%C3%ADa-Solar/515080675254619" class="fb"></a><a target="_blank" href="https://twitter.com/ENSOenergia" class="tw"></a><a target="_blank" href="http://ensoenergia.com/mailto:contacto@ensoenergia.com" class="mail"></a></div>\n        </div>\n      </div>\n    </div>\n  </body><!--\n  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>\n  <script src="js/jquery.color.js"></script>\n  <script src="js/jquery.scrollTo.min.js"></script>\n  <script src="js/jquery.localscroll.min.js"></script>\n  <script src="js/easing.js"></script>\n  <script src="js/skrollr.js"></script>\n  <script src="js/main.js"></script>-->\n</html>');
}
return buf.join("");
};
;module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div class="hero-unit">\n  <h3>{{ msg }}</h3>\n</div>');
}
return buf.join("");
};
;
//# sourceMappingURL=templates.js.map