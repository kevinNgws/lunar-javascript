const { Solar, Lunar, HolidayUtil } = require('./lunar.js');
const moment = require('moment');
const _ = require('lodash');
const fs = require('fs');

let startYear = 2024;
let endYear = 2024;
const calendar = {};
for (startYear = 2024; startYear <= endYear; startYear++) {
  calendar[startYear] = {};
  for (let startMonth = 1; startMonth <= 12; startMonth++) {
    const padMonth = startMonth;
    // const padMonth = _.padStart(startMonth.toString(), 2, '0');
    const numberOfDays = moment(`${startYear}-${padMonth}`, 'YYYY-MM').daysInMonth();
    calendar[startYear][padMonth] = {};
    for (let startDay = 1; startDay <= numberOfDays; startDay++) {
      const padDay = startDay;
      // const padDay = _.padStart(startDay.toString(), 2, '0');
      calendar[startYear][padMonth][padDay] = {};
      for (let startHour = 0; startHour <= 23; startHour++) {
        const padHour = startHour;
        // const padHour = _.padStart(startHour.toString(), 2, '0');
        const s = Solar.fromYmdHms(startYear, startMonth, startDay, startHour, 0, 0);
        const l = s.getLunar();
        const bz = l.getEightChar();
        const jqTable = l.getJieQiTable();
        const jqList = l.getJieQiList();

        calendar[startYear][padMonth][padDay][padHour] = 'NA';

        const prevJq = l.getPrevJieQi(true);
        for (var i = 0, j = jqList.length; i < j; i++) {
          let name = jqList[i];
          if (name === prevJq.getName()) {
            name = jqList[i - 1];
            const prevPrevBz = jqTable[name].getLunar().getEightChar();
            calendar[startYear][padMonth][padDay]['00'] = `${startYear}-${padMonth}-${padDay}`;
            calendar[startYear][padMonth][padDay][padHour] =
              `${bz.getYear()} | ${bz.getMonth()}-${prevPrevBz.getMonth()} | ${bz.getDay()} | ${bz.getTime()}`;
            break;
          }
        }
      }
    }
  }

  fs.writeFile(`calendar-${startYear}.json`, JSON.stringify(calendar), (err) => {
    if (err) throw err;
    console.log('Data written to file');
  });
}
