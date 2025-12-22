const filterElement= require('./2-filterElement.js');


describe('filterElement(array, element)', () => { 
    test('should return empty array when them input array is empty', () => { 
        expect(filterElement([],"grape")).toEqual([])
     })
    test('should retutn the only items that match the spcifed element', () => { 
         expect(filterElement(["apple","banana"],"apple")).toEqual(["apple"])
     })
 })