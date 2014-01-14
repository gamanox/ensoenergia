!!! 5
html(ng-app="enso")
    head
        meta(charset='utf-8' )
        meta(http-equiv='X-UA-Compatible', content='IE=edge,chrome=1')
        title enso
        link(rel='favicon.ico', href='favicon.ico')
        link(rel='stylesheet', href='/css/app.css')
        script(type="text/javascript")
            window.brunch = window.brunch || {};
            window.brunch['auto-reload'] = {enabled: true};
        script(src='/js/vendor.js')
        script(src='/js/app.js')
    body
        .container(ng-view)
