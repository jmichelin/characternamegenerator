/**
 * Created by jmichelin on 7/13/16.
 */
//require external dependencies
var uniqueRandomArray = require('unique-random-array');
var _ = require('lodash');

//define available data
var firstNames = require('./first-names.json');
var middleNames = require('./middle-names.json');
var lastNames = require('./last-names.json');

//random generators
var randomFirstName = uniqueRandomArray(firstNames);
var randomMiddleName = uniqueRandomArray(middleNames);
var randomLastName = uniqueRandomArray(lastNames);

//filter functions
var filteredNames = function (nameList, initial) {
    return nameList.filter(function(name){
        return name[0] === initial;
    })
};

//available methods
module.exports = {
    list: function () {
        var allNames = ["FirstName MiddleName LastName"];
        for (var i = 0; i < firstNames.length; i++) {
            //Math.floor((Math.random() * 10) + 1);
            var tmpName = randomFirstName() + ' ' + randomMiddleName() + ' ' + randomLastName() + "\n";
            allNames.push(tmpName);
        }
        return allNames;
    },
    single: function () {
        return randomFirstName() + ' ' + randomMiddleName() + ' ' + randomLastName();

    },
    startsWithLetter: function (f,m,l) {
        var firstName = _.sample(filteredNames(firstNames, f));
        var middleName = _.sample(filteredNames(middleNames, m));
        var lastName = _.sample(filteredNames(lastNames, l));
        return firstName + ' ' + middleName + ' ' + lastName;
    },
    numberOfNames: function (number) {
        var allNames = [];
        for (var i = 0; i < number; i++) {
            //Math.floor((Math.random() * 10) + 1);
            var tmpName = randomFirstName() + ' ' + randomMiddleName() + ' ' + randomLastName() + "\n";
            allNames.push(tmpName);
        }
        return allNames;
    }
};