//! moment.js locale configuration
//! locale : Afrikaans [af]
//! author : Werner Mollentze : https://github.com/wernerm

import moment from '../moment';

export default moment.defineLocale('af', {
    months: 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split(
        '_'
    ),
    monthsShort: 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
    weekdays: 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split(
        '_'
    ),
    weekdaysShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
    weekdaysMin: 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
    meridiemParse: /vm|nm/i,
    isPM: function (input) {
        return /^nm$/i.test(input);
    },
    meridiem: function (hours, minutes, isLower) {
        if (hours < 12) {
            return isLower ? 'vm' : 'VM';
        } else {
            return isLower ? 'nm' : 'NM';
        }
    },
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm',
    },
    calendar: {
        sameDay: '[Vandag om] LT',
        nextDay: '[Môre om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[Gister om] LT',
        lastWeek: '[Laas] dddd [om] LT',
        sameElse: 'L',
    },
    relativeTime: {
        future: 'oor %s',
        past: '%s gelede',
        s: "'n paar sekondes",
        ss: '%d sekondes',
        m: "'n minuut",
        mm: '%d minute',
        h: "'n uur",
        hh: '%d ure',
        d: "'n dag",
        dd: '%d dae',
        M: "'n maand",
        MM: '%d maande',
        y: "'n jaar",
        yy: '%d jaar',
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: function (number) {
        return (
            number +
            (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de')
        ); // Thanks to Joris Röling : https://github.com/jjupiter
    },
    week: {
        dow: 1, // Maandag is die eerste dag van die week.
        doy: 4, // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
    },
    weekdaysShortParse: [
        /^Son|Sun/i,
        /^Maa|Mon/i,
        /^Din|Tue/i,
        /^Woe|Wed/i,
        /^Don|Thu/i,
        /^Vry|Fri/i,
        /^Sat|Sat/i,
    ],
    monthsShortParse: [
        /^Jan/i,
        /^Feb/i,
        /^Mrt|Mar/i,
        /^Apr/i,
        /^Mei|May/i,
        /^Jun/i,
        /^Jul/i,
        /^Aug/i,
        /^Sep/i,
        /^Okt|Oct/i,
        /^Nov/i,
        /^Des|Dec/i,
    ],
    weekdaysParse: [
        /^Sondag|Sunday|Sun/i,
        /^Maandag|Monday|Mon/i,
        /^Dinsdag|Tuesday|Tue/i,
        /^Woensdag|Wednesday|Wed/i,
        /^Donderdag|Thursday|Thu/i,
        /^Vrydag|Friday|Fri/i,
        /^Saterdag|Saturday|Sat/i,
    ],
    monthsParse: [
        /^Januarie|January|Jan/i,
        /^Februarie|February|Feb/i,
        /^Maart|March|Mrt|Mar/i,
        /^April|Apr/i,
        /^Mei|May/i,
        /^Junie|June|Jun/i,
        /^Julie|July|Jul/i,
        /^Augustus|August|Aug/i,
        /^September|Sep/i,
        /^Oktober|October|Okt|Oct/i,
        /^November|Nov/i,
        /^Desember|December|Des|Dec/i,
    ],
    monthsRegex:
        /^(Januarie|January|Jan|Februarie|February|Feb|Maart|March|Mar|April|Apr|Mei|May|Junie|June|Jun|Julie|July|Jul|Augustus|August|Aug|September|Sep|Oktober|October|Oct|November|Nov|Desember|December|Dec)/i,
    monthsParseExact: true,
    weekdaysParseExact: true
});
