# Story Name Generator 

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