# Story Name Generator 
[![Travis](https://img.shields.io/travis/jmichelin/characternamegenerator.svg?style=flat)](https://travis-ci.org/jmichelin/characternamegenerator)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/jmichelin/characternamegenerator.svg?style=flat)](https://codecov.io/gh/jmichelin/characternamegenerator)
[![NPM Version](https://img.shields.io/npm/v/random-character-name.svg?style=flat)](https://github.com/jmichelin/characternamegenerator)
[![NPM Downloads](https://img.shields.io/npm/dm/random-character-name.svg?style=flat)](https://www.npmjs.com/package/random-character-name)
[![License](https://img.shields.io/npm/l/random-character-name.svg?style=flat)](http://spdx.org/licenses/MIT)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

###Methods
The method list() will return a list of all random names that were generated.
The method single() will return a single random name.
The method startsWithLetter(f,m,l) will let you set the initials.
The method numberOfNames(number) will return the requested number of names.

###Examples


```javascript
var rndNameGen = require('random-character-name');

rndNameGen.list();
//generates a large array of names
/* 
ex.
  ['Em Andre Vento',
  'Marsiella Lester Drisko',
  'Lou Charley Hoang',
  'Bettye Ransell Cristabel',
  ...
  'Shawnee Timothee Rigby',
  'Roch Wilbur Ithnan',
  'Shanta Wheeler Milicent',
  'Janela Wally Marlowe' ]

*/

rndNameGen.single(); 
//generates a string with a random name
//ex. 'Donnie Reinhard Levin'

rndNameGen.startsWithLetter('A','C','E');
//generates a string with a name with requested initials
//ex. 'Ajay Christophorus Elset'

rndNameGen.numberOfNames(3)
//generates an array with the number of names requested.
/*
ex.
[ 'Nedi Burt Lexine',
  'Cairistiona Jacobo Merl',
  'Annaliese Bartolomeo Cherian' ]
*/
```