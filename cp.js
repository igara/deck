const fse = require('fs-extra');

fse.copySync('node_modules/reveal.js-plugins/customcontrols', 'docs/assets/node_modules/reveal.js-plugins/customcontrols');
fse.copySync('node_modules/reveal.js-plugins/chalkboard', 'docs/assets/node_modules/reveal.js-plugins/chalkboard');
fse.copySync('node_modules/reveal.js-plugins/menu', 'docs/assets/node_modules/reveal.js-plugins/menu');
fse.copySync('node_modules/reveal.js-plugins/fullscreen', 'docs/assets/node_modules/reveal.js-plugins/fullscreen');

fse.copySync('markdown', 'docs');
