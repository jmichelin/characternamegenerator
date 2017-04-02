/**
 * Created by jmichelin on 7/13/16.
 */
//require external dependencies
import uniqueRandomArray from 'unique-random-array';
import sample from 'lodash/sample';

//define available data
import firstNames from '../data/first-names.json';
import middleNames from '../data/middle-names.json';
import lastNames from '../data/last-names.json';

//random generators
const randomFirstName = uniqueRandomArray(firstNames);
const randomMiddleName = uniqueRandomArray(middleNames);
const randomLastName = uniqueRandomArray(lastNames);

//filter functions
function filteredNames(nameList, initial) {
    return nameList.filter(name => name[0] === initial)
};

//methods
export function list() {
    const allNames = ["FirstName MiddleName LastName"];
    let tmpName;

    for (let i = 0, length = firstNames.length; i < length; ++i) {
        tmpName = randomFirstName() + ' ' + randomMiddleName() + ' ' + randomLastName();
        allNames.push(tmpName);
    }
    
    return allNames;
};

export function single() {
    return randomFirstName() + ' ' + randomMiddleName() + ' ' + randomLastName();
};

export function startsWithLetter(f = '', m = '', l = '') {
    const firstName = f && sample(filteredNames(firstNames, f));
    const middleName = m && sample(filteredNames(middleNames, m));
    const lastName = l && sample(filteredNames(lastNames, l));
    const chosenName = firstName + ' ' + middleName + ' ' + lastName;

    return chosenName.trim();
};

export function numberOfNames(number = 1) {
    const allNames=[];
    let tmpName;

    for (let i = 0; i < number; ++i) {
        tmpName = randomFirstName() + ' ' + randomMiddleName() + ' ' + randomLastName();
        allNames.push(tmpName);
    }
    
    return allNames;
};

export default {
    list,
    single,
    startsWithLetter,
    numberOfNames,
};
