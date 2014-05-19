Ensoenergia Website V03
============

## Requirements

1. [Node][node]
2. [Ruby][ruby]
3. [Sass][sass] (`sudo gem install sass`)
2. [Scaffolt][scaffolt] (`npm install -g scaffolt`)
3. [Brunch][brunch] (`npm install -g brunch`)


## Usage
1. Install dependencys
``npm install``
2. Run server
``brunch w -s``
3. Open Browser
``localhost:3333``


And voila - you're done!  For themes check `/vendor/_bootswatch/` directory. You can also use default one.


### What's in the box

- Angular.JS
- JADE (as default templating)
- CoffeeScript/LiveScript (-with skeletons in CS-)
- Twitter Bootstrap 2.3 (Inspired by [Angular-Brunch-Seed][brunchang])
- Bootswatch themes
- Generators: 
    - Init (CoffeeScript/LivesScript)
    - Angular Directives (CoffeeScript/LiveScript)
    - D3 Directive (LiveScript)
    - Bootstrap themed using Bootswatch
    - Bootstrap Responsive (untested)
- D3

Also in, but untested:

- jQuery UI
- Angular.JS UI
- Angular.JS Bootstrap

### How extras work
Each extra is already configured in `config.coffee` (i.e. properly positioned during CSS/JS join). To enable it, just change directory name in `vendor` from `_extra_library` to `extra_library`. And that's it!



[brunchang]: https://github.com/scotch/angular-brunch-seed
[seed]: https://github.com/scotch/angular-brunch-seed
[scotch]: https://github.com/scotch
[livescript]: https://github.com/clkao/angular-brunch-seed-livescript
[clkao]: https://github.com/clkao
[truenorth]: https://github.com/scoarescoare/angular-brunch-true-north
[scoarescoare]: https://github.com/scoarescoare
[scaffolt]: https://github.com/paulmillr/scaffolt
[node]: http://node.org
[brunch]: http://brunch.io
[ruby]: https://gorails.com/setup/osx/10.9-mavericks
[sass]: http://sass-lang.com/install
