/*Global global, $, jQuery */
"use strict"

const lib = {}

lib.compose = (...fns) => (x) => fns.reduce((acc,fn) => fn(acc), x);

lib.composeBack = (...fns) => (x) => fns.reduceRight((acc,fn) => fn(acc), x);

lib.getSecondsTimeFromFullDateString = (fullDate) => {
    const {groups} = lib.getObjectDateFromDateString (fullDate);

    return new Date(
        ( (groups.year>2000)?0:2000 ) + Math.floor( groups.year ) ,
        Math.floor( groups.month ) -1,
        Math.floor( groups.day ),
        Math.floor( groups.hour ),
        Math.floor( groups.minute ),
        Math.floor( groups.second ),
    ).getTime()/1000;
};

lib.getObjectDateFromDateString = (fullDate) => {
    const regex = /(?<day>\d+)\.(?<month>\d+)\.(?<year>\d+).(?<hour>\d+)\:(?<minute>\d+)\:(?<second>\d+)/i;
    return fullDate.match(regex);
}

lib.getDateForm = (time) => {
    const day = lib.remainingDay(time);
    let timeString = (day==1)?'1 dzien ':((day>1)?`${day} dni `:'');

    return {
        "Date": timeString + lib.getDataFormHours (time),
        "hours": lib.remainingHours (time)
    }
};

lib.getDataFormHours = (time) => (
    [
        lib.remainingHours(time),
        lib.remainingMinutes(time),
        lib.remainingSecond(time)
    ]
        .map((el) => `${el}`.padStart(2, '0'))
        .join(':')
);

lib.remainingDay = (time) => Math.floor(time/86400);

lib.remainingHours = (time) => Math.floor(time/3600) % 24;

lib.remainingMinutes = (time) => Math.floor(time/60) % 60;

lib.remainingSecond = (time) => Math.floor(time) % 60;

lib.getCoords = (string) => {
    try{
        if("string" === typeof string) {
            const {groups: {xy, x, y}} = string.match(/(?<xy>(?<x>\d{1,3})\|(?<y>\d{1,3}))/);
            return {xy: xy, x: x*1, y: y*1};
        }else{
            return string;
        }
    } catch (e) {
        console.error('getCoords', village, e);
        return {xy:'0|0', x:0, y:0}
    }
}

lib.getParamFromUrl = (string, param='id') => lib.deserializeUrl(string)[param];

lib.deserializeUrl = (string) => {
    let obj = {};
    string.replace(/([^=&?]+)=([^&]*)/g, function (m, key, value) {
        obj[decodeURIComponent(key)] = decodeURIComponent(value);
    });
    return obj;
}

lib.getDistance = function (village_1, village_2 ){
    try {
        return lib.countPythagore(
            lib.getCoords(village_1),
            lib.getCoords(village_2)
        )
             .toFixed(2) * 1;

    } catch (e) {
        console.error( e, [village_1, village_2 ])
        return 0;
    }
}

lib.countPythagore = ({x:ax, y:ay}, {x:bx, y:by}) => Math.sqrt(
    Math.pow( (ax - bx), 2) +
    Math.pow( (ay - by), 2)
);
//
lib.roundTo = (value, places = 2) => {
    const power = Math.pow(10, places);
    return Math.round(value * power) / power;
}
try{
    if ( "undefined" === typeof $ ) {
        if( "undefined" !== typeof jQuery  ) {
            var $ = jQuery.noConflict(true)
        }
        else if( "undefined" !== typeof global && "undefined" !== typeof global.jQuery ) {
            var $ = global.jQuery
        }
        else if( "undefined" !== typeof require ) {
            var $ = require('./jquery-3.1.0.min');
        } else {
            throw 'jQuery is not exist';
        }
    }

    lib.text = (el) => $(el).text();

    lib.href = (el) => $(el).attr('href');

    lib.getLastElementNumeric = (el, tag = 'b') => Math.floor( $(`${tag}:last`, el).text() );

}catch (e) {
    console.error(e);
}
if (!!module)
module.exports = lib;


// ---------
var czas_marszu = function (distance, arra){
    return lib.getDateForm( G_TempoMarszu(arra) * distance * 60);
}

if( "undefined" === typeof config ) {
    const config = require('./config.plc1');
}

var G_TempoMarszu = (arra) => {


    var t;//0 jest puste	//  1   2    3     4   5    6   7   8    9  10   11  12
    // pik, mie, axe, luk, zw, lk, kl, ck, tar, kat, ry, sz

    var w = config.units
        .filter((el,index)=>{
            if( "undefined" !== typeof arra )
                return true;
            return (arra[ index + 1 ] > 0)
        })

    if(config.get(UTILS.SNOB).speed > 0 )
        t=35;
    else if(arra[9]>0
        || arra[10]>0 ) t=30;
    else if(arra[2]>0  ) t=22;
    else if(arra[1]>0
        || arra[3]>0
        || arra[4]>0  ) t=18;
    else if(arra[8]>0  ) t=11;
    else if(arra[6]>0
        || arra[7]>0  ) t=10;
    else if(arra[5]>0  ) t=9;
    else t=0;

    return t;
}

var typ_w = function (arra) {
    console.log('typ_w',arra);
    if(arra[5]>4000){return 3;} //zw
    else if( (arra[3] + (arra[6]*4)+(arra[7]*5)) > 300){return 1;} // 0ff
    else if( (arra[1] + arra[2]+ arra[4] + (arra[8]*4)) > 300){return 2;} //def
    return 0;
}

var getDistanceTimeMove = function (distance, army) {
    return Math.floor((distance * G_TempoMarszu( army ) * 60) / 3600)
}

