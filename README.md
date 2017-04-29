# npm autoinstaller
`npma` is a function for automatically installing npm packages directly from the application code.

## Installation
`npm i -S -npma`
  
## Using
If the package is missing, it will be automatically installed (and add to dependencies) directly during the execution of the program (without interrupts).

*myscript.js*
```js:
const leftPad = require('npma')('left-pad');

console.log('It works: ' + leftPad(17, 5, 0));
```

```
> node myscript.js
npm package "left-pad" not installed, installing...
It works: 00017

> node myscript.js
It works: 00017
```

devDependencies.
```js
const leftPad = require('npma')('left-pad', '-D');
```

if you do not need to add packege in dependencies.
```js
const leftPad = require('npma')('left-pad', '');
```

## License
MIT
