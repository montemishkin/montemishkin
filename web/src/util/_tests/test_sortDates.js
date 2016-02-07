// third party imports
import {assert} from 'chai'
// local imports
import sortDates from 'util/sortDates'


describe('sortDates', function () {
    it('returns 0 for equal dates', function () {
        const date1 = {
            year: 1910,
            month: 10,
            day: 2,
        }
        const date2 = {
            year: 1910,
            month: 10,
            day: 2,
        }

        const actual = sortDates(date1, date2)
        const expected = 0

        assert.deepEqual(actual, expected)
    })


    it('returns 1 when first date has earlier year', function () {
        const date1 = {
            year: 2010,
            month: 5,
            day: 20,
        }
        const date2 = {
            year: 2011,
            month: 2,
            day: 2,
        }

        const actual = sortDates(date1, date2)
        const expected = 1

        assert.deepEqual(actual, expected)
    })


    it('returns -1 when first date has later year', function () {
        const date1 = {
            year: 2015,
            month: 10,
            day: 2,
        }
        const date2 = {
            year: 2011,
            month: 10,
            day: 2,
        }

        const actual = sortDates(date1, date2)
        const expected = -1

        assert.deepEqual(actual, expected)
    })


    it('returns 1 when first date has earlier month (years equal)', function () {
        const date1 = {
            year: 2010,
            month: 8,
            day: 2,
        }
        const date2 = {
            year: 2010,
            month: 10,
            day: 2,
        }

        const actual = sortDates(date1, date2)
        const expected = 1

        assert.deepEqual(actual, expected)
    })


    it('returns -1 when first date has later month (years equal)', function () {
        const date1 = {
            year: 2010,
            month: 12,
            day: 2,
        }
        const date2 = {
            year: 2010,
            month: 10,
            day: 12,
        }

        const actual = sortDates(date1, date2)
        const expected = -1

        assert.deepEqual(actual, expected)
    })


    it('returns 1 when first date has earlier day (years, months equal)', function () {
        const date1 = {
            year: 2010,
            month: 12,
            day: 2,
        }
        const date2 = {
            year: 2010,
            month: 12,
            day: 12,
        }

        const actual = sortDates(date1, date2)
        const expected = 1

        assert.deepEqual(actual, expected)
    })


    it('returns -1 when first date has later day (years, months equal)', function () {
        const date1 = {
            year: 2010,
            month: 12,
            day: 20,
        }
        const date2 = {
            year: 2010,
            month: 12,
            day: 12,
        }

        const actual = sortDates(date1, date2)
        const expected = -1

        assert.deepEqual(actual, expected)
    })


    it('correctly sorts an array of dates', function () {
        const dates = [
            {
                year: 2016,
                month: 1,
                day: 19,
            }, {
                year: 1994,
                month: 1,
                day: 25,
            }, {
                year: 2010,
                month: 3,
                day: 2,
            }, {
                year: 2016,
                month: 5,
                day: 20,
            }, {
                year: 1994,
                month: 2,
                day: 25,
            },
        ]

        const actual = dates.sort(sortDates)
        const expected = [
            {
                year: 2016,
                month: 5,
                day: 20,
            }, {
                year: 2016,
                month: 1,
                day: 19,
            }, {
                year: 2010,
                month: 3,
                day: 2,
            }, {
                year: 1994,
                month: 2,
                day: 25,
            }, {
                year: 1994,
                month: 1,
                day: 25,
            },
        ]

        assert.deepEqual(actual, expected)
    })
})
