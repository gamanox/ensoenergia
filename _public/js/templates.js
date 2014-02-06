module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('<!DOCTYPE html>\n<html ng-app="enso">\n  <head>\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n    <title>enso</title>\n    <link rel="favicon.ico" href="favicon.ico">\n    <link rel="stylesheet" href="/css/app.css">\n    <script type="text/javascript">\n      window.brunch = window.brunch || {}\n      window.brunch[\'auto-reload\'] = {enabled: true}\n    </script>\n    <script src="/js/vendor.js"></script>\n    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBprIiRqwGjuc69d-tvNpCY5kptKBALh8E&amp;sensor=false"></script>\n    <script src="/js/app.js"></script>\n    <link href="http://fonts.googleapis.com/css?family=PT+Sans:400,700" rel="stylesheet">\n  </head>\n  <body>\n    <div class="main_nav">\n      <div class="nav_logo"><a href="/"><img src="img/menu/logo_small.png" alt="" width="40" height="39"></a></div>\n      <div class="nav_icon"><a href="#"><img src="img/menu/menu.svg" alt="" width="41" height="40"></a></div>\n      <div class="nav_close"><a href="#"><img src="img/menu/close.svg" alt="" width="36" height="40"></a></div>\n    </div>\n    <div class="main_nav_menu">\n      <div class="menu_item"><a href="#intro" class="scrollTo">INICIO </a></div>\n      <div class="menu_item"><a href="#paneles" class="scrollTo">NOSOTROS </a></div>\n      <div class="menu_item"><a href="#productos" class="scrollTo">PRODUCTOS </a></div>\n      <div class="menu_item"><a href="#ahorro" class="scrollTo">AHORRA </a></div>\n      <div class="menu_item"><a href="#map" class="scrollTo">UBICACIÓN </a></div>\n      <div class="menu_item"><a href="#contactanos" class="scrollTo">CONTACTO  </a></div>\n    </div>\n    <div id="intro" class="section">\n      <div class="bg"></div>\n      <div class="logo">\n        <div class="img"><img src="img/logo2.png" alt=""></div>\n        <p>ENERGIA SOLAR</p>\n      </div><a href="#paneles" class="goDown scrollTo"></a>\n    </div>\n    <div id="paneles" class="section">\n      <div class="wrap">\n        <p class="title">NOSOTROS</p>\n        <hr>\n        <p class="paragraph">Enso Energía es una empresa mexicana fundada en la ciudad de Torreón Coahuila en el año 2013. Nos dedicamos a la comercialización e instalación de sistemas de generación de energía renovable, principalmente a través de la energía solar. Somos especialistas en proyectos de generación de energía eléctrica a través de paneles solares (energía solar fotovoltaica) y en el diseño y comercialización de equipos de calentamiento solar de agua (energía solar térmica).</p>\n      </div>\n    </div>\n    <div id="panelesBg" class="section">\n      <div class="bg"></div>\n      <div class="wrap">\n      </div>\n    </div>\n    <div id="productos" class="section">\n      <div class="wrap">\n        <p class="title">PRODUCTOS</p>\n        <hr>\n        <div class="services_sect1"><img src="img/menu/menu_v2_01.png" height="92">\n          <h3>PÁNELES</h3>\n          <p class="paragraph">Sistemas de generación de electricidad con paneles solares para casas, comercios e industria (Sistemas Eléctricos Fotovoltaicos).</p>\n        </div>\n        <div class="services_sect2"><img src="img/menu/menu_v2_03.png" height="92">\n          <h3>CALENTADORES</h3>\n          <p class="paragraph">Calentadores solares de agua para casas (boilers solares), comercios e industria (Sistemas Termo Solares).</p>\n        </div>\n      </div>\n    </div>\n    <div id="calentadores" class="section">\n      <div class="bg"></div>\n      <div class="wrap">\n      </div>\n    </div>\n    <div id="ahorro" class="section">\n      <div class="wrap">\n        <p class="title">CALCULA TU AHORRO</p>\n        <hr>\n        <p class="paragraph">Calcula el ahorro que podrías tener con un sistema de energía solar. Consulta tu consumo diario en tu recibo de luz.</p>\n        <form name="projectplanner" method="post" id="projectplanner" action="php/submit.php">\n          <div class="floating-placeholder">\n            <input id="name" name="name" type="text">\n            <label for="name">Nombre / Compañía</label>\n          </div>\n          <div class="floating-placeholder">\n            <input id="phone" name="phone" type="integer">\n            <label for="phone">Teléfono</label>\n          </div>\n          <div class="floating-placeholder">\n            <input id="email" name="email" type="text">\n            <label for="email">Email</label>\n          </div>\n          <div class="floating-placeholder">\n            <input id="city" name="city" type="text">\n            <label for="city">Ciudad</label>\n          </div>\n          <div class="floating-placeholder">\n            <input id="consumo" name="consumo" type="text">\n            <label for="consumo">Consumo diario kW/h</label>\n          </div>\n        </form>\n        <div style="padding-top: 20px;">\n          <center>\n            <div class="send_btn"><a href="javascript:document.getElementById(\'projectplanner\').submit();">ENVIAR</a></div>\n          </center>\n        </div>\n      </div>\n    </div>\n    <div id="map" class="section">\n      <div id="mapa"></div>\n    </div>\n    <div id="ubicacion" class="section">\n      <div class="wrap">\n        <p class="title">UBICACIÓN</p>\n        <hr>\n        <p class="paragraph">Blvd. Independencia #123 Ote. Local 2 <br> C.P. 27140 <br> Torreón, Coah. México.</p>\n      </div>\n    </div>\n    <div id="contactanos" class="section">\n      <div class="bg"></div>\n      <div class="wrap">\n        <p class="title">CONTACTO</p>\n        <hr>\n        <p class="paragraph"></p>\n      </div>\n    </div>\n  </body><!--\n  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>\n  <script src="js/jquery.color.js"></script>\n  <script src="js/jquery.scrollTo.min.js"></script>\n  <script src="js/jquery.localscroll.min.js"></script>\n  <script src="js/easing.js"></script>\n  <script src="js/skrollr.js"></script>\n  <script src="js/main.js"></script>-->\n</html>');
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