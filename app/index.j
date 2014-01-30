doctype
html(ng-app="enso")
  head
    meta(charset='utf-8' )
    meta(http-equiv='X-UA-Compatible', content='IE=edge,chrome=1')
    title enso
    link(rel='favicon.ico', href='favicon.ico')
    link(rel='stylesheet', href='/css/app.css')
    script(type="text/javascript").
        window.brunch = window.brunch || {}
        window.brunch['auto-reload'] = {enabled: true}
    script(src='/js/vendor.js')
    script(src='https://maps.googleapis.com/maps/api/js?key=AIzaSyBprIiRqwGjuc69d-tvNpCY5kptKBALh8E&sensor=false')
    script(src='/js/app.js')
    
    link(href='http://fonts.googleapis.com/css?family=PT+Sans:400,700', rel='stylesheet')
  body
    .header
      .contenedor
        a.logo.scrollTo(href='#intro')
        .socialMenu
          a.element.fb(href='https://www.facebook.com/pages/ENSO-Energ%C3%ADa-Solar/515080675254619', target='_blank')
            p
              | FACEBOOK
          .element.tw
            p
              | TWITTER
          .element.in
            p
              | INSTAGRAM
          a.element.map.scrollTo(bgcolor='', href='#map')
            p
              | UBICACIÓN
          .element.tel
            p
              | 871 713-8642
          a.element.mail(href='mailto:contacto@ensoenergia.com', target='_blank')
            p
              | E-MAIL
        
           .borderB 
        .solid
    #mainCont.container
      .menuMain
        .link.menu01.scrollTo.productos(bgcolor='#f9a735', href='#productos')
        .link.menu02.scrollTo.cotizador(bgcolor='#11bf90', href='#cotizador')
        .link.menu03.scrollTo.blog(bgcolor='#f6d024', href='#blog')
        .link.menu04.scrollTo.proyectos(href='#proyectos')
        .link.menu05.scrollTo.contacto(bgcolor='#cdcdcc', href='#contacto')
      .bgshadow
      #intro.seccion
        .introCont.seccionCont
          p.tituloSeccion
            | Energía Solar
          p.descripcion
            | Empresa mexicana fundada en la ciudad de Torreón Coahuila en el año 2013.
      #productos.seccion
        .productosCont.seccionCont

          p.tituloSeccion
            | Productos
          .productosLinea
            
            
            .paso.paso01
              .progressCont.prog01
                .progressBar
              .celdasObj.left.celdas01
              p.tituloProducto
              
            .paso.paso02
              .progressCont.prog02
                .progressBar
              .celdasObj.right.celdas02
            .paso.paso03
              .progressCont.prog03
                .progressBar
              .celdasObj.left.celdas03
            .paso.paso04
              .progressCont.prog04
                .progressBar
              .celdasObj.right.celdas04
            .paso.paso05
              .progressCont.prog05
                .progressBar
              .celdasObj.left.celdas05
            .paso.paso06

              .celdasObj.right.celdas06
      #cotizador.seccion
        .cotizadorCont.seccionCont
          p.tituloSeccion
            | Cotizador
          p.subtituloSeccion
            | Cotiza tu recibo de luz
          .izqCont
            .campo
              input.inputContacto(name='nombre', type='text')
              p.campoTexto
                | Nómbre
            .campo
              input.inputContacto(name='email', type='email')
              p.campoTexto
                | E-mail
            .campo
              input.inputContacto(name='telefono', type='tel')
              p.campoTexto
                | Teléfono
            .campo
              input.inputContacto(name='compania', type='text')
              p.campoTexto
                | Compañia
            
            a.enviar(href='#')
              p
                | Enviar
          .derCont
            img(src="/img/cotizador/recibo.png", alt="")
      #blog.seccion
        .blogCont.seccionCont
          p.tituloSeccion
            | Próximamente
      #proyectos.seccion
        .proyectosCont.seccionCont
          p.tituloSeccion
            | Próximamente
      #contacto.seccion
        .contactoCont.seccionCont
          p.tituloSeccion
            | Contáctanos
          .izqCont
            p.descripCont
              | Puedes contactarnos directamente o llenar la forma con tus preguntas o inquietudes y nosotros te responderemos inmediatamente.
          .derCont
            .campo
              input.inputContacto(name='nombre', type='text')
              p.campoTexto
                | Nómbre
            .campo
              input.inputContacto(name='email', type='email')
              p.campoTexto
                | E-mail
            .campo
              input.inputContacto(name='telefono', type='tel')
              p.campoTexto
                | Teléfono
            .campo
              input.inputContacto(name='compania', type='text')
              p.campoTexto
                | Compañia
            .campo.textfield
              textarea.inputContacto.inputComent(name='comentario')
              p.campoTexto
                | Comentario
            a.enviar(href='#')
              p
                | Enviar
      #map.seccion
        #mapa
        .address
    .footer
      .borderT
  //
    script(src='//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js')
    script(src='js/jquery.color.js')
    script(src='js/jquery.scrollTo.min.js')
    script(src='js/jquery.localscroll.min.js')
    script(src='js/easing.js')
    script(src='js/skrollr.js')
    script(src='js/main.js')
