module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('<!DOCTYPE html>\n<html ng-app="enso">\n  <head>\n    <meta charset="utf-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n    <title>enso</title>\n    <link rel="favicon.ico" href="favicon.ico">\n    <link rel="stylesheet" href="/css/app.css">\n    <script type="text/javascript">\n      window.brunch = window.brunch || {}\n      window.brunch[\'auto-reload\'] = {enabled: true}\n    </script>\n    <script src="/js/vendor.js"></script>\n    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBprIiRqwGjuc69d-tvNpCY5kptKBALh8E&amp;sensor=false"></script>\n    <script src="/js/app.js"></script>\n    <link href="http://fonts.googleapis.com/css?family=PT+Sans:400,700" rel="stylesheet">\n  </head>\n  <body>\n    <div id="intro" class="section">\n      <div class="bg"></div>\n      <div class="logo">\n        <div class="img"><img src="img/logo2.png" alt=""></div>\n        <p>ENERGIA SOLAR</p>\n      </div><a href="#panelesBg" class="goDown scrollTo"></a>\n    </div>\n    <div id="paneles" class="section">\n      <div class="wrap">\n        <p class="title">PANELES SOLARES</p>\n        <p class="paragraph">Sistemas de generación de electricidad con paneles solares para casas, comercios e industria (Sistemas Eléctricos Fotovoltaicos).</p>\n      </div>\n    </div>\n    <div id="panelesBg" class="section">\n      <div class="bg"></div>\n      <div class="wrap">\n        <p class="title">PANELES SOLARES</p>\n        <p class="paragraph">Sistemas de generación de electricidad con paneles solares para casas, comercios e industria (Sistemas Eléctricos Fotovoltaicos).</p>\n      </div><a href="#intro" class="goUp scrollTo"></a><a href="#calentadores" class="goDown scrollTo"></a>\n    </div>\n    <div id="calentadores" class="section">\n      <div class="bg"></div>\n      <div class="wrap">\n        <p class="title">CALENTADORES SOLARES</p>\n        <p class="paragraph">Calentadores solares de agua para casas (boilers solares), comercios e industria (Sistemas Termo Solares).</p>\n      </div><a href="#panelesBg" class="goUp scrollTo"></a><a href="#cotizador" class="goDown scrollTo"></a>\n    </div>\n    <div id="cotizador" class="section">\n      <div class="bg"></div>\n      <div class="wrap">\n        <p class="title">CALCULA TU AHORRO</p>\n        <p class="paragraph">Calcula el ahorro que podrías tener con un sistema de energía solar.</p>\n      </div><a href="#calentadores" class="goUp scrollTo"></a><a href="#map" class="goDown scrollTo"></a>\n    </div>\n    <div id="map" class="section">\n      <div id="mapa"></div>\n      <div class="wrap">\n        <p class="title">UBICACIÓN</p>\n        <p class="paragraph">Blvd. Independencia #123 Ote. Local 2 <br> C.P. 27140 <br> Torreón, Coah. México.</p>\n      </div>\n    </div>\n  </body><!--\n  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>\n  <script src="js/jquery.color.js"></script>\n  <script src="js/jquery.scrollTo.min.js"></script>\n  <script src="js/jquery.localscroll.min.js"></script>\n  <script src="js/easing.js"></script>\n  <script src="js/skrollr.js"></script>\n  <script src="js/main.js"></script>-->\n</html>');
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