const { findMean, findMedian, findMode,} = require('./helpers')

describe ("#findMedian", () => {
    it("Finds the median of", () => {
        expect(findMedian([1,-1,4,2])).toEqual(1.5)
    })
    it("Finds the median of an odd set", () => {
        expect(findMedian([1,-1,4])).toEqual(1)
    })
})

describe("#findMean", () => {
    it("Finds the mean of an empty array", () => {
        expect(findMean([])).toEqual(0)
    })
    it("Finds the mean of an array of numbers", () => {
        expect(findMean([1,-1,4,2])).toEqual(1.5)
    })
})

describe("#findMode", () => {
    it("finds the mode", () => {
        expect(findMode([1,1,1,2,2,3])).toEqual(1)
    })
})