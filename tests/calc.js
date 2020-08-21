var testCalc = require('../pages/TestCalculator');

describe('Super Calculator', function() {
    
    beforeEach(function() {
        testCalc.get();
    });

    it('Should have a title', function() {
        expect(testCalc.getTitle()).toEqual('Super Calculator');
    });

    it('Should execute 5 operations', function() {
        expect(testCalc.performOperation(4, 5, "ADDITION")).toEqual('9');
        expect(testCalc.performOperation(10, 7, "SUBTRACTION")).toEqual('3');;
        expect(testCalc.performOperation(4, 7, "MULTIPLICATION")).toEqual('28');;
        expect(testCalc.performOperation(32, 8, "DIVISION")).toEqual('4');;
        expect(testCalc.performOperation(65, 8, "MODULO")).toEqual('1');;
        expect(testCalc.countOperation()).toEqual(5);
        browser.sleep(1000);
    });
})
