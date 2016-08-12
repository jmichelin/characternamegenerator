/**
 * Created by jmichelin on 8/3/16.
 */
var expect = require('chai').expect;
var randomNameGenerator = require('./index');

/*
Current Access Points

list() creates a random list of names
single() generates a single random name
startsWithLetter(f,m,l)
 */

describe('tests should be running', function () {
    describe('all()', function () {
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
        })
    });

});