/**
 * Created by jmichelin on 7/13/16.
 */
//require external dependencies
import uniqueRandomArray from 'unique-random-array';
import _ from 'lodash';

//define available data
import firstNames from '../data/first-names.json';
import middleNames from '../data/middle-names.json';
import lastNames from '../data/last-names.json';

//random generators
var randomFirstName = uniqueRandomArray(firstNames);
var randomMiddleName = uniqueRandomArray(middleNames);
var randomLastName = uniqueRandomArray(lastNames);

//filter functions
var filteredNames = function (nameList, initial) {
    return nameList.filter(function (name) {
        return name[0] === initial;
    })
};

module.exports = {
    list: list,
    single: single,
    startsWithLetter: startsWithLetter,
    numberOfNames: numberOfNames
}

//available methods
function list() {
    var allNames = ["FirstName MiddleName LastName"];
    for (var i = 0; i < firstNames.length; i++) {
        //Math.floor((Math.random() * 10) + 1);
        var tmpName = randomFirstName() + ' ' + randomMiddleName() + ' ' + randomLastName();
        allNames.push(tmpName);
    }
    return allNames;
}

function single() {
    return randomFirstName() + ' ' + randomMiddleName() + ' ' + randomLastName();

}

function startsWithLetter(f, m, l) {
    var firstName = _.sample(filteredNames(firstNames, f));
    var middleName = _.sample(filteredNames(middleNames, m));
    var lastName = _.sample(filteredNames(lastNames, l));
    return firstName + ' ' + middleName + ' ' + lastName;
}

function numberOfNames(number) {
    if (number === undefined) {
        number = 1;
    }
    var allNames = [];
    for (var i = 0; i < number; i++) {
        //Math.floor((Math.random() * 10) + 1);
        var tmpName = randomFirstName() + ' ' + randomMiddleName() + ' ' + randomLastName();
        allNames.push(tmpName);
    }
    return allNames;
}