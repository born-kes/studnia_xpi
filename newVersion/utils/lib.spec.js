"use strict"
 const jsdom = require('jsdom');
 const jQuery  = require('./jquery-3.1.0.min')(new jsdom.JSDOM().window);
 global.jQuery  = jQuery;

const {compose,
    getObjectDateFromDateString,
    getSecondsTimeFromFullDateString,
    getDateForm,
    countPythagore,
    roundTo,
    remainingSecond,
    remainingMinutes,
    remainingHours,
    remainingDay,

    composeBack,
    getDataFormHours,
    getParamFromUrl,
    getLastElementNumeric,
    deserializeUrl,
    getDistance,
    getCoords,

    // czas_marszu
    // G_TempoMarszu
    // typ_w
    // getDistanceTimeMove

    text,
    href

}  = require('./lib');

describe('utils lib', () => {

    describe('mathematical calculating functions', () => {
        it('should run function step by step', () => {
            const
                a = (x) => x * 2,
                b = (x) => x - 2,
                c = (x) => x * 5;
            const
                exception = 10;
            const
                fn = compose(a, b, c),
                response = fn(2);

            expect(response).toBe(exception);
        });

        it('should return shortened numeric ', () => {

            const
                longerNumeric = 1.4142135623730951;
            const
                expected = 1.4142;

            const shortenedNumeric = roundTo(longerNumeric, 4);

            expect(shortenedNumeric).toBe(expected);
        });

        it('should return episode length ', () => {
            const
                village1 = {x: 1, y: 1},
                village2 = {x: 2, y: 2};
            const
                expected = 1.4142;
            const
                distance = roundTo(countPythagore(village1, village2), 4);

            expect(distance).toBe(expected);
        });

        it('should return distance from string and object Village', () => {
            const
                village1 = ['name village (1|1) k 1', {x: 1, y: 1}],
                village2 = ['blabla (2|2) k 1', {x: 2, y: 2}];
            const
                expected = 1.41;
            const
                distanceString = getDistance(village1[0], village2[0]),
                distanceObject = getDistance(village1[1], village2[1]);

            expect(distanceString).toBe(expected);
            expect(distanceObject).toBe(expected);
        })

    }); // end mathematical calculating functions

    describe('date and time calculating functions', () => {

        it('should get Object Date From Date String 10.01.21 22:26:49:641', () => {
            const
                dateString = '10.01.21 22:26:49:641',
                groupElement = ['day', 'month', 'year', 'hour', 'minute', 'second'];

            const
                dateExpected = ['10.01.21 22:26:49', '10', '01', '21', '22', '26', '49'],
                dateExpectedGroups = {day: '10', month: '01', year: '21', hour: '22', minute: '26', second: '49'};

            const
                time = getObjectDateFromDateString(dateString);

            expect(time.input).toBe(dateString);

            dateExpected.map((value, index) => (
                    expect(time[index]).toBe(value)
                )
            );

            groupElement.map((key) => (
                    expect(time.groups[key]).toBe(dateExpectedGroups[key])
                )
            );
        });

        it('should get Seconds Time From Full Date String 10.01.21 22:26:49:641', () => {

            const
                dateString = '10.01.21 22:26:49:641';

            const
                dateExpected = 1610314009;

            const
                responseCountSeconds = getSecondsTimeFromFullDateString(dateString);

            expect(responseCountSeconds).toBe(dateExpected);
        });

        it('should return only Second', () => {
            const
                timeInSeconds = 60 + 41;
            const
                exception = 41;

            const
                Second = remainingSecond(timeInSeconds )

            expect(Second).toBe(exception);
        });

        it('should return only Minutes', () => {
            const
                timeInSeconds = 60 * 3 + 41;
            const
                exception = 3;

            const Minutes = remainingMinutes(timeInSeconds);

            expect(Minutes).toBe(exception);
        });

        it('should return only Hours', () => {
            const
                timeInSeconds = (60*60) *4 + 41;
            const
                exception = 4;

            const
                Hours = remainingHours(timeInSeconds);

            expect(Hours).toBe(exception);
        });

        it('should return only Day', () => {
            const
                timeInSeconds = (60 * 60 * 24) * 3 + 41;
            const
                exception = 3;

            const
                day = remainingDay(timeInSeconds);

            expect(day).toBe(exception);
        })

        describe('should get Date Form', () => {

            it('shout ', () => {

                const
                    timeInSeconds = 3600 + 120 + 2;

                const
                    exceptionDate = '01:02:02',
                    exceptionHours = 1;

                const
                    hours = getDateForm(timeInSeconds);

                expect(hours['Date']).toBe(exceptionDate);
                expect(hours['hours']).toBe(exceptionHours);

            });

            it('shout response another version for one day', () => {
                const
                    timeInSeconds = 3600 * 24;

                const
                    exceptionDate = '1 dzien 00:00:00',
                    exceptionHours = 0;

                const
                    day = getDateForm(timeInSeconds);

                expect(day['Date']).toBe(exceptionDate);
                expect(day['hours']).toBe(exceptionHours);
            });

            it('shout another version for seven days', () => {
                const
                    timeInSeconds = 3600 * 24 * 7;

                const
                    exceptionDate = '7 dni 00:00:00',
                    exceptionHours = 0;

                const
                    week = getDateForm(timeInSeconds);

                expect(week['Date']).toBe(exceptionDate);
                expect(week['hours']).toBe(exceptionHours);
            });

            it('shout', () => {

                const
                    timeInSeconds = 3600 + 120 + 2;
                const
                    exceptionDate = '01:02:02';

                const dataForm = getDataFormHours(timeInSeconds)

                expect(dataForm).toBe(exceptionDate);
            });


        });

    }); // end date time calculating functions

    describe('action to String', () => {
        const
            joC = jasmine.objectContaining;

        it('should return object data from url ', () => {
            const
                testHref = `?pas=das1&id=123`;

            const exception = joC({pas:'das1', id:'123'});

            const object = deserializeUrl(testHref)

            expect(object).toEqual(exception);
        });

        it('should return data from param url ', () => {
            const
                testHref = `val=dal&www=11&pas=das1&id=123`,
                param = 'id';
            const
                exception = `123`
            const
                object = getParamFromUrl(testHref, param)

            expect(object).toBe(exception);
        });

        it('should return object coords village ', () => {
            const
                village = `name village (123|321) K31`;
            const
                exception = joC({xy:'123|321', x:123, y:321});

            const
                object = getCoords(village);

            expect(object).toEqual(exception);
        });


    });

    describe('operation DOM functions', () => {

        it('should function text return string ', () => {
            const
                testString = `test String`,
                el = global.jQuery(`<div>${testString}</div>`);

            const
                string = text(el);

            expect(string).toBe(testString)
        });

        it('should function href return string ', () => {
            const
                testString = `test String`,
                testHref = `val=dal`,
                el = global.jQuery(`<a href="${testHref}">${testString}</a>`);

            const string = href(el)

            expect(string).toBe(testHref);
        });

        it('should function href return string ', () => {
            const
                testNumber = '6',
                el = global.jQuery(`
<div>
 <b>w</b>
 <a href="#val=dal">testString<b>11</b></a>
 <b></b>
 <b>${testNumber}</b>
</div>`);
            const
            expected = 6;

            const string = getLastElementNumeric(el, 'b')

            expect(string).toBe(expected);
        });

  }); // operation DOM functions

});