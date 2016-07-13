/**
 * Created by jmichelin on 7/13/16.
 */
//require external dependencies
var uniqueRandomArray = require('unique-random-array');

//define available data
var firstNames = require('./first-names.json');
var middleNames = require('./middle-names.json');
var lastNames = require('./last-names.json');

//random generators
var randomFirstName = uniqueRandomArray(firstNames);
var randomMiddleName = uniqueRandomArray(middleNames);
var randomLastName = uniqueRandomArray(lastNames);


//available methods
module.exports = {
    all: function () {
        var allNames;
        for (var i = 0; i < firstNames.length; i++) {
            //Math.floor((Math.random() * 10) + 1);
            allNames = allNames + randomFirstName() + ' ' + randomMiddleName() + ' ' + randomLastName() + "\n";
        }
        return allNames;
    },
    random: function () {
        return randomFirstName() + ' ' + randomMiddleName() + ' ' + randomLastName();

    },
    tester: function(){
        return 'this is a function'
    }
};


//console.log('module.exports.all()', module.exports.all());


//console.log('module.exports.random', module.exports.random);