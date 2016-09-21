/**
 * Created by jmichelin on 7/13/16.
 */
'use strict'
//require external dependencies
import uniqueRandomArray from 'unique-random-array';
import _ from 'lodash';

//define available data
import firstNames from '../data/first-names.json';
import middleNames from '../data/middle-names.json';
import lastNames from '../data/last-names.json';

//random generators
let randomFirstName = uniqueRandomArray(firstNames);
let randomMiddleName = uniqueRandomArray(middleNames);
let randomLastName = uniqueRandomArray(lastNames);

//filter functions
const filteredNames =  (nameList, initial)=>{
    return nameList.filter((name)=>{
        return name[0] === initial;
    })
};

//methods
const list = ()=>{
    let allNames = ["FirstName MiddleName LastName"];
    for (let i = 0; i < firstNames.length; i++) {
        let tmpName = randomFirstName() + ' ' + randomMiddleName() + ' ' + randomLastName();
        allNames.push(tmpName);
    }
    return allNames;
};


const single = ()=>{
    return randomFirstName() + ' ' + randomMiddleName() + ' ' + randomLastName();
};

const startsWithLetter = (f, m, l)=>{
    let firstName = f === undefined ? '' : _.sample(filteredNames(firstNames, f));
    let middleName = m === undefined ? '' : _.sample(filteredNames(middleNames, m));
    let lastName = l === undefined ? '' : _.sample(filteredNames(lastNames, l));
    let chosenName = firstName + ' ' + middleName + ' ' + lastName
    return chosenName.trim();
}

const numberOfNames = (number=1)=>{
    let allNames=[];
    for (let i = 0; i < number; i++) {
        let tmpName = randomFirstName() + ' ' + randomMiddleName() + ' ' + randomLastName();
        allNames.push(tmpName);
    }
    return allNames;
}

//available methods
module.exports = {
    list: list,
    single: single,
    startsWithLetter: startsWithLetter,
    numberOfNames: numberOfNames
}