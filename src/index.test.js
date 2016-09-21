/**
 * Created by jmichelin on 8/3/16.
 */
// var expect = require('chai').expect;
// var randomNameGenerator = require('./index');
import {expect} from 'chai';
import randomNameGenerator from './index'


describe('tests should be running', function () {
    describe('list()', function () {
        it('should be an array of strings', function () {
            expect(randomNameGenerator.list()).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item){
                    return typeof item === 'string';
                })
            }
        });

        it('should contain `FirstName MiddleName LastName`', function () {
            expect(randomNameGenerator.list()).to.include('FirstName MiddleName LastName');
        });
    });

    describe('single()', function () {
        it('should be a string', function () {
            expect(randomNameGenerator.single()).to.be.a('string');
        });

        it('should contain three names', function () {
            var arrayOfName = randomNameGenerator.single().split(' ');
            expect(arrayOfName).to.have.lengthOf(3);
        });
    });

    describe('startsWithLetter()', function () {
        it('should be a string', function () {
            expect(randomNameGenerator.startsWithLetter('A', 'C', 'E')).to.be.a('string');
        });

        it('should contain three names', function () {
            var arrayOfName = randomNameGenerator.startsWithLetter('A', 'C', 'E').split(' ');
            expect(arrayOfName).to.have.lengthOf(3);
        });

        it('should start with the passed values for f,m,l of A, C, E', function () {
            var arrayOfName = randomNameGenerator.startsWithLetter('A', 'C', 'E').split(' ');
            expect(arrayOfName[0][0]).to.equal('A');
            expect(arrayOfName[1][0]).to.equal('C');
            expect(arrayOfName[2][0]).to.equal('E');
        });

        it('should return only a first name if undefined passed in for m and l', function() {
            "use strict";
            var arrayOfName = randomNameGenerator.startsWithLetter('A', undefined, undefined).split(' ');
            expect(arrayOfName).to.have.lengthOf(1);
        });

        it('should only return a first name starting with A', function() {
            "use strict";
            var arrayOfName = randomNameGenerator.startsWithLetter('A', undefined, undefined).split(' ');
            expect(arrayOfName[0][0]).to.equal('A');
        });

        it('should return only a middle name if undefined passed in for f and l', function() {
            "use strict";
            var arrayOfName = randomNameGenerator.startsWithLetter(undefined, 'M', undefined).split(' ');
            expect(arrayOfName).to.have.lengthOf(1);
        });

        it('should return only a middle name starting with M', function() {
            "use strict";
            var arrayOfName = randomNameGenerator.startsWithLetter(undefined, 'M', undefined).split(' ');
            expect(arrayOfName[0][0]).to.equal('M');
        });

        it('should return only a last name if undefined passed in for f and m', function() {
            "use strict";
            var arrayOfName = randomNameGenerator.startsWithLetter(undefined, undefined, 'L').split(' ');
            expect(arrayOfName).to.have.lengthOf(1);
        });

        it('should return only a middle name starting with M', function() {
            "use strict";
            var arrayOfName = randomNameGenerator.startsWithLetter(undefined, undefined, 'L').split(' ');
            expect(arrayOfName[0][0]).to.equal('L');
        });
    });

    describe('numberOfNames()', function () {
        it('numberOfNames(3) should have a length of three', function () {
            var arrayOfNames =  randomNameGenerator.numberOfNames(3);
            expect(arrayOfNames).to.have.lengthOf(3);

        });

        it('numberOfNames() should default to one', function () {
            var arrayOfOneName = randomNameGenerator.numberOfNames();
            expect(arrayOfOneName).to.have.lengthOf(1);
        });
    });

});