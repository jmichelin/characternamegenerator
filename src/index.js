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
const filteredNames = (nameList, initial) => nameList.filter(name => name[0] === initial);

//methods
export function single() {
    return `${randomFirstName()} ${randomMiddleName()} ${randomLastName()}`;
};

export function list() {
    return ["FirstName MiddleName LastName", ...firstNames.map($ => single())];
};

export function startsWithLetter(f = '', m = '', l = '') {
    const firstName = f && sample(filteredNames(firstNames, f));
    const middleName = m && sample(filteredNames(middleNames, m));
    const lastName = l && sample(filteredNames(lastNames, l));
    const chosenName = firstName + ' ' + middleName + ' ' + lastName;

    return chosenName.trim();
};

export function numberOfNames(number = 1) {    
    return Array(number).fill(false).map($ => single());
};

export default {
    list,
    single,
    startsWithLetter,
    numberOfNames,
};
