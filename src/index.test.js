/**
 * Created by jmichelin on 8/3/16.
 */
import {expect} from 'chai';
import {list, numberOfNames, single, startsWithLetter} from './index'

function isArrayOfStrings(array) {
    return array.every(item => typeof item === 'string');
}

describe('tests should be running', function () {
    describe('list()', function () {
        it('should be an array of strings', function () {
            expect(list()).to.satisfy(isArrayOfStrings);
        });

        it('should contain `FirstName MiddleName LastName`', function () {
            expect(list()).to.include('FirstName MiddleName LastName');
        });
    });

    describe('single()', function () {
        it('should return a string', function () {
            expect(single()).to.be.a('string');
        });

        it('should contain at least three names', function () {
            var arrayOfName = single().split(' ');
            expect(arrayOfName).to.have.length.of.at.least(3);
        });
    });

    describe('startsWithLetter()', function () {
        it('should return a string', function () {
            expect(startsWithLetter('A', 'C', 'E')).to.be.a('string');
        });

        it('should contain three names', function () {
            var arrayOfName = startsWithLetter('A', 'C', 'E').split(' ');
            expect(arrayOfName).to.have.lengthOf(3);
        });

        it('should start with the passed values for f,m,l of A, C, E', function () {
            var arrayOfName = startsWithLetter('A', 'C', 'E').split(' ');
            expect(arrayOfName[0][0]).to.equal('A');
            expect(arrayOfName[1][0]).to.equal('C');
            expect(arrayOfName[2][0]).to.equal('E');
        });

        it('should return only a first name if undefined passed in for m and l', function() {
            "use strict";
            var arrayOfName = startsWithLetter('A', undefined, undefined).split(' ');
            expect(arrayOfName).to.have.lengthOf(1);
        });

        it('should only return a first name starting with A', function() {
            "use strict";
            var arrayOfName = startsWithLetter('A', undefined, undefined).split(' ');
            expect(arrayOfName[0][0]).to.equal('A');
        });

        it('should return only a middle name if undefined passed in for f and l', function() {
            "use strict";
            var arrayOfName = startsWithLetter(undefined, 'M', undefined).split(' ');
            expect(arrayOfName).to.have.lengthOf(1);
        });

        it('should return only a middle name starting with M', function() {
            "use strict";
            var arrayOfName = startsWithLetter(undefined, 'M', undefined).split(' ');
            expect(arrayOfName[0][0]).to.equal('M');
        });

        it('should return only a last name if undefined passed in for f and m', function() {
            "use strict";
            var arrayOfName = startsWithLetter(undefined, undefined, 'L').split(' ');
            expect(arrayOfName).to.have.lengthOf(1);
        });

        it('should return only a middle name starting with M', function() {
            "use strict";
            var arrayOfName = startsWithLetter(undefined, undefined, 'L').split(' ');
            expect(arrayOfName[0][0]).to.equal('L');
        });

        it('should handle lowercase letters', function() {
            "use strict";
            var arrayOfName = startsWithLetter('a', 'b', 'c').split(' ');
            expect(arrayOfName.length).to.equal(3);
        });

        it('should handle lowercase letters', function() {
            "use strict";
            var arrayOfName = startsWithLetter('a', 'b', 'c').split(' ');
            expect(arrayOfName.length).to.equal(3);
        });

        it('should not return undefined for non-letters', function() {
            "use strict";
            var arrayOfName = startsWithLetter(NaN, 1, 'c').split(' ');
            expect(arrayOfName.length).to.equal(1);
        });

        it('should return an empty string when passed no valid letters', function() {
            "use strict";
            var name = startsWithLetter(NaN, 1, 4);
            expect(name).to.equal('');
        });

    });

    describe('numberOfNames()', function () {
        it('numberOfNames(3) should have a length of three', function () {
            var arrayOfNames = numberOfNames(3);
            expect(arrayOfNames).to.have.lengthOf(3);

        });

        it('numberOfNames() should default to one', function () {
            var arrayOfOneName = numberOfNames();
            expect(arrayOfOneName).to.have.lengthOf(1);
        });
    });

});