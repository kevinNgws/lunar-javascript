const { Solar, Lunar, HolidayUtil } = require("./lunar.js");
const year = 1988;
const month = 6;
const day = 30;
const hour = 22;
const min = 59;
const sec = 0;
const s = Solar.fromYmdHms(year, month, day, hour, min, sec);

const diShi = {
  长生: [
    "甲亥",
    "丙寅",
    "戊寅",
    "庚巳",
    "壬申",
    "乙午",
    "丁酉",
    "己酉",
    "辛子",
    "癸卯",
  ],
  沐浴: [
    "甲子",
    "丙卯",
    "戊卯",
    "庚午",
    "壬酉",
    "乙巳",
    "丁申",
    "己申",
    "辛亥",
    "癸寅",
  ],
  冠带: [
    "甲丑",
    "丙辰",
    "戊辰",
    "庚未",
    "壬戌",
    "乙辰",
    "丁未",
    "己未",
    "辛戌",
    "癸丑",
  ],
  临官: [
    "甲寅",
    "丙巳",
    "戊巳",
    "庚申",
    "壬亥",
    "乙卯",
    "丁午",
    "己午",
    "辛酉",
    "癸子",
  ],
  帝旺: [
    "甲卯",
    "丙午",
    "戊午",
    "庚酉",
    "壬子",
    "乙寅",
    "丁巳",
    "己巳",
    "辛申",
    "癸亥",
  ],
  衰: [
    "甲辰",
    "丙未",
    "戊未",
    "庚戌",
    "壬丑",
    "乙丑",
    "丁辰",
    "己辰",
    "辛未",
    "癸戌",
  ],
  病: [
    "甲巳",
    "丙申",
    "戊申",
    "庚亥",
    "壬寅",
    "乙子",
    "丁卯",
    "己卯",
    "辛午",
    "癸酉",
  ],
  死: [
    "甲午",
    "丙酉",
    "戊酉",
    "庚子",
    "壬卯",
    "乙亥",
    "丁寅",
    "己寅",
    "辛巳",
    "癸申",
  ],
  墓: [
    "甲未",
    "丙戌",
    "戊戌",
    "庚丑",
    "壬辰",
    "乙戌",
    "丁丑",
    "己丑",
    "辛辰",
    "癸未",
  ],
  绝: [
    "甲申",
    "丙亥",
    "戊亥",
    "庚寅",
    "壬巳",
    "乙酉",
    "丁子",
    "己子",
    "辛卯",
    "癸午",
  ],
  胎: [
    "甲酉",
    "丙子",
    "戊子",
    "庚卯",
    "壬午",
    "乙申",
    "丁亥",
    "己亥",
    "辛寅",
    "癸巳",
  ],
  养: [
    "甲戌",
    "丙丑",
    "戊丑",
    "庚辰",
    "壬未",
    "乙未",
    "丁戌",
    "己戌",
    "辛丑",
    "癸辰",
  ],
};

const displayBz = (result) => {
  console.log(
    `年: ${result.year} (${result.yearDiShi})\n月: ${result.month} (${result.monthDiShi})\n日: ${result.day} (${result.dayDiShi})\n时: ${result.time} (${result.timeDiShi})`
  );
};

const getDiShi = (ganZhi) => {
  let foundKey = null;
  for (const key of Object.keys(diShi)) {
    for (let index = 0; index < diShi[key].length; index++) {
      const dsElement = diShi[key][index];
      if (dsElement === ganZhi) {
        foundKey = key;
        break;
      }
    }
    if (foundKey) {
      return foundKey;
    }
  }
};

const l = s.getLunar();
// console.log(bz.toFullString());
const bz = l.getEightChar();
bz.setSect(2);
const currentBzResult = {
  year: bz.getYear(),
  yearDiShi: getDiShi(bz.getYear()),
  month: bz.getMonth(),
  monthDiShi: getDiShi(bz.getMonth()),
  day: bz.getDay(),
  dayDiShi: getDiShi(bz.getDay()),
  time: bz.getTime(),
  timeDiShi: getDiShi(bz.getTime()),
};
// displayBz(currentBzResult);
console.log(
  `${year}-${month.toString().padStart(2, 0)}-${day
    .toString()
    .padStart(2, 0)} ${hour.toString().padStart(2, 0)}:${min
    .toString()
    .padStart(2, 0)}:${sec.toString().padStart(2, 0)}`
);

const jqTable = l.getJieQiTable();
const jqList = l.getJieQiList();
console.log("\n24 节气");
for (var i = 0, j = jqList.length; i < j; i++) {
  var name = jqList[i];
  console.log(name + " = " + jqTable[name].toYmdHms());
}

console.log("\nNew Calculation");
const prevJq = l.getPrevJieQi(true);
const prevBz = prevJq.getSolar().getLunar().getEightChar();
console.log(
  `上一节气: ${prevJq
    .getSolar()
    .toYmdHms()}, ${prevJq.getName()}, ${prevBz.getMonth()}`
);
let newMonth = currentBzResult.month;
let newMonthDiShi = currentBzResult.monthDiShi;
for (var i = 0, j = jqList.length; i < j; i++) {
  let name = jqList[i];
  if (name === prevJq.getName()) {
    name = jqList[i - 1];
    const prevPrevBz = jqTable[name].getLunar().getEightChar();
    console.log(
      `上上一节气: ${jqTable[
        name
      ].toYmdHms()}, ${name}, ${prevPrevBz.getMonth()}`
    );
    newMonth = prevPrevBz.getMonth();
    newMonthDiShi = prevPrevBz.getMonthDiShi();
  }
}
const newBzResult = {
  ...currentBzResult,
  month: newMonth,
  monthDiShi: getDiShi(newMonth),
};
console.log("\nCurrent 八字");
displayBz(currentBzResult);
console.log("\nNew 八字");
displayBz(newBzResult);
