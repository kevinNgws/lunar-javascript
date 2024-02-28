const { Solar, Lunar, HolidayUtil } = require("./lunar.js");
const year = 1988;
const month = 6;
const day = 30;
const hour = 22;
const min = 59;
const sec = 0;
const s = Solar.fromYmdHms(year, month, day, hour, min, sec);

const MING_ZHU = "命主";
const diShi = {
  甲: {
    亥: "长生",
    子: "沐浴",
    丑: "冠带",
    寅: "临官",
    卯: "帝旺",
    辰: "衰",
    巳: "病",
    午: "死",
    未: "墓",
    申: "绝",
    酉: "胎",
    戌: "养",
  },
  丙: {
    寅: "长生",
    卯: "沐浴",
    辰: "冠带",
    巳: "临官",
    午: "帝旺",
    未: "衰",
    申: "病",
    酉: "死",
    戌: "墓",
    亥: "绝",
    子: "胎",
    丑: "养",
  },
  戊: {
    寅: "长生",
    卯: "沐浴",
    辰: "冠带",
    巳: "临官",
    午: "帝旺",
    未: "衰",
    申: "病",
    酉: "死",
    戌: "墓",
    亥: "绝",
    子: "胎",
    丑: "养",
  },
  庚: {
    巳: "长生",
    午: "沐浴",
    未: "冠带",
    申: "临官",
    酉: "帝旺",
    戌: "衰",
    亥: "病",
    子: "死",
    丑: "墓",
    寅: "绝",
    卯: "胎",
    辰: "养",
  },
  壬: {
    申: "长生",
    酉: "沐浴",
    戌: "冠带",
    亥: "临官",
    子: "帝旺",
    丑: "衰",
    寅: "病",
    卯: "死",
    辰: "墓",
    巳: "绝",
    午: "胎",
    未: "养",
  },
  乙: {
    午: "长生",
    巳: "沐浴",
    辰: "冠带",
    卯: "临官",
    寅: "帝旺",
    丑: "衰",
    子: "病",
    亥: "死",
    戌: "墓",
    酉: "绝",
    申: "胎",
    未: "养",
  },
  丁: {
    酉: "长生",
    申: "沐浴",
    未: "冠带",
    午: "临官",
    巳: "帝旺",
    辰: "衰",
    卯: "病",
    寅: "死",
    丑: "墓",
    子: "绝",
    亥: "胎",
    戌: "养",
  },
  己: {
    酉: "长生",
    申: "沐浴",
    未: "冠带",
    午: "临官",
    巳: "帝旺",
    辰: "衰",
    卯: "病",
    寅: "死",
    丑: "墓",
    子: "绝",
    亥: "胎",
    戌: "养",
  },
  辛: {
    子: "长生",
    亥: "沐浴",
    戌: "冠带",
    酉: "临官",
    申: "帝旺",
    未: "衰",
    午: "病",
    巳: "死",
    辰: "墓",
    卯: "绝",
    寅: "胎",
    丑: "养",
  },
  癸: {
    卯: "长生",
    寅: "沐浴",
    丑: "冠带",
    子: "临官",
    亥: "帝旺",
    戌: "衰",
    酉: "病",
    申: "死",
    未: "墓",
    午: "绝",
    巳: "胎",
    辰: "养",
  },
};

const tianGanShiShen = {
  甲: {
    甲: "比肩",
    乙: "劫财",
    丙: "食神",
    丁: "伤官",
    戊: "偏财",
    己: "正财",
    庚: "七杀",
    辛: "正官",
    壬: "偏印",
    癸: "正印",
  },
  乙: {
    乙: "比肩",
    甲: "劫财",
    丁: "食神",
    丙: "伤官",
    己: "偏财",
    戊: "正财",
    辛: "七杀",
    庚: "正官",
    癸: "偏印",
    壬: "正印",
  },
  丙: {
    丙: "比肩",
    丁: "劫财",
    戊: "食神",
    己: "伤官",
    庚: "偏财",
    辛: "正财",
    壬: "七杀",
    癸: "正官",
    甲: "偏印",
    乙: "正印",
  },
  丁: {
    丁: "比肩",
    丙: "劫财",
    己: "食神",
    戊: "伤官",
    辛: "偏财",
    庚: "正财",
    癸: "七杀",
    壬: "正官",
    乙: "偏印",
    甲: "正印",
  },
  戊: {
    戊: "比肩",
    己: "劫财",
    庚: "食神",
    辛: "伤官",
    壬: "偏财",
    癸: "正财",
    甲: "七杀",
    乙: "正官",
    丙: "偏印",
    丁: "正印",
  },
  己: {
    己: "比肩",
    戊: "劫财",
    辛: "食神",
    庚: "伤官",
    癸: "偏财",
    壬: "正财",
    乙: "七杀",
    甲: "正官",
    丁: "偏印",
    丙: "正印",
  },
  庚: {
    庚: "比肩",
    辛: "劫财",
    壬: "食神",
    癸: "伤官",
    甲: "偏财",
    乙: "正财",
    丙: "七杀",
    丁: "正官",
    戊: "偏印",
    己: "正印",
  },
  申: {
    辛: "比肩",
    庚: "劫财",
    癸: "食神",
    壬: "伤官",
    乙: "偏财",
    甲: "正财",
    丁: "七杀",
    丙: "正官",
    己: "偏印",
    戊: "正印",
  },
  壬: {
    壬: "比肩",
    癸: "劫财",
    甲: "食神",
    乙: "伤官",
    丙: "偏财",
    丁: "正财",
    戊: "七杀",
    己: "正官",
    庚: "偏印",
    辛: "正印",
  },
  癸: {
    癸: "比肩",
    壬: "劫财",
    乙: "食神",
    甲: "伤官",
    丁: "偏财",
    丙: "正财",
    己: "七杀",
    戊: "正官",
    辛: "偏印",
    庚: "正印",
  },
};

const diZhiShiShen = {
  甲: {
    子: {
      癸: "正印",
    },
    丑: {
      己: "正财",
      癸: "正印",
      辛: "正官",
    },
    寅: {
      甲: "比肩",
      丙: "食神",
      戊: "偏财",
    },
    卯: {
      乙: "劫财",
    },
    辰: {
      戊: "偏财",
      乙: "劫财",
      癸: "正印",
    },
    巳: {
      丙: "食神",
      庚: "七杀",
      戊: "偏财",
    },
    午: {
      丁: "伤官",
      己: "正财",
    },
    未: {
      己: "正财",
      丁: "伤官",
      乙: "劫财",
    },
    申: {
      庚: "七杀",
      壬: "偏印",
      戊: "偏财",
    },
    酉: {
      辛: "正官",
    },
    戌: {
      戊: "偏财",
      辛: "正官",
      丁: "伤官",
    },
    亥: {
      壬: "偏印",
      甲: "比肩",
    },
  },
  乙: {
    子: {
      癸: "偏印",
    },
    丑: {
      己: "偏财",
      癸: "偏印",
      辛: "七杀",
    },
    寅: {
      甲: "劫财",
      丙: "伤官",
      戊: "正财",
    },
    卯: {
      乙: "比肩",
    },
    辰: {
      戊: "正财",
      乙: "比肩",
      癸: "偏印",
    },
    巳: {
      丙: "伤官",
      庚: "正官",
      戊: "正财",
    },
    午: {
      丁: "食神",
      己: "偏财",
    },
    未: {
      己: "偏财",
      丁: "食神",
      乙: "比肩",
    },
    申: {
      庚: "正官",
      壬: "正印",
      戊: "正财",
    },
    酉: {
      辛: "七杀",
    },
    戌: {
      戊: "正财",
      辛: "七杀",
      丁: "食神",
    },
    亥: {
      壬: "正印",
      甲: "劫财",
    },
  },
  丙: {
    子: {
      癸: "正官",
    },
    丑: {
      己: "伤官",
      癸: "正官",
      辛: "正财",
    },
    寅: {
      甲: "偏印",
      丙: "比肩",
      戊: "食神",
    },
    卯: {
      乙: "正印",
    },
    辰: {
      戊: "食神",
      乙: "正印",
      癸: "正官",
    },
    巳: {
      丙: "比肩",
      庚: "偏财",
      戊: "食神",
    },
    午: {
      丁: "劫财",
      己: "伤官",
    },
    未: {
      己: "伤官",
      丁: "劫财",
      乙: "正印",
    },
    申: {
      庚: "偏财",
      壬: "七杀",
      戊: "食神",
    },
    酉: {
      辛: "正财",
    },
    戌: {
      戊: "食神",
      辛: "正财",
      丁: "劫财",
    },
    亥: {
      壬: "七杀",
      甲: "偏印",
    },
  },
  丁: {
    子: {
      癸: "七杀",
    },
    丑: {
      己: "食神",
      癸: "七杀",
      辛: "偏财",
    },
    寅: {
      甲: "正印",
      丙: "劫财",
      戊: "伤官",
    },
    卯: {
      乙: "偏印",
    },
    辰: {
      戊: "伤官",
      乙: "偏印",
      癸: "七杀",
    },
    巳: {
      丙: "劫财",
      庚: "正财",
      戊: "伤官",
    },
    午: {
      丁: "比肩",
      己: "食神",
    },
    未: {
      己: "食神",
      丁: "比肩",
      乙: "偏印",
    },
    申: {
      庚: "正财",
      壬: "正官",
      戊: "伤官",
    },
    酉: {
      辛: "偏财",
    },
    戌: {
      戊: "伤官",
      辛: "偏财",
      丁: "比肩",
    },
    亥: {
      壬: "正官",
      甲: "正印",
    },
  },
  戊: {
    子: {
      癸: "正财",
    },
    丑: {
      己: "劫财",
      癸: "正财",
      辛: "伤官",
    },
    寅: {
      甲: "七杀",
      丙: "偏印",
      戊: "比肩",
    },
    卯: {
      乙: "正官",
    },
    辰: {
      戊: "比肩",
      乙: "正官",
      癸: "正财",
    },
    巳: {
      丙: "偏印",
      庚: "食神",
      戊: "比肩",
    },
    午: {
      丁: "正印",
      己: "劫财",
    },
    未: {
      己: "劫财",
      丁: "正印",
      乙: "正官",
    },
    申: {
      庚: "食神",
      壬: "偏财",
      戊: "比肩",
    },
    酉: {
      辛: "伤官",
    },
    戌: {
      戊: "比肩",
      辛: "伤官",
      丁: "正印",
    },
    亥: {
      壬: "偏财",
      甲: "七杀",
    },
  },
  己: {
    子: {
      癸: "偏财",
    },
    丑: {
      己: "比肩",
      癸: "偏财",
      辛: "食神",
    },
    寅: {
      甲: "正官",
      丙: "正印",
      戊: "劫财",
    },
    卯: {
      乙: "七杀",
    },
    辰: {
      戊: "劫财",
      乙: "七杀",
      癸: "偏财",
    },
    巳: {
      丙: "正印",
      庚: "伤官",
      戊: "劫财",
    },
    午: {
      丁: "偏印",
      己: "比肩",
    },
    未: {
      己: "比肩",
      丁: "偏印",
      乙: "七杀",
    },
    申: {
      庚: "伤官",
      壬: "正财",
      戊: "劫财",
    },
    酉: {
      辛: "食神",
    },
    戌: {
      戊: "劫财",
      辛: "食神",
      丁: "偏印",
    },
    亥: {
      壬: "正财",
      甲: "正官",
    },
  },
  庚: {
    子: {
      癸: "伤官",
    },
    丑: {
      己: "正印",
      癸: "伤官",
      辛: "劫财",
    },
    寅: {
      甲: "偏财",
      丙: "七杀",
      戊: "偏印",
    },
    卯: {
      乙: "正财",
    },
    辰: {
      戊: "偏印",
      乙: "正财",
      癸: "伤官",
    },
    巳: {
      丙: "七杀",
      庚: "比肩",
      戊: "偏印",
    },
    午: {
      丁: "正官",
      己: "正印",
    },
    未: {
      己: "正印",
      丁: "正官",
      乙: "正财",
    },
    申: {
      庚: "比肩",
      壬: "食神",
      戊: "偏印",
    },
    酉: {
      辛: "劫财",
    },
    戌: {
      戊: "偏印",
      辛: "劫财",
      丁: "正官",
    },
    亥: {
      壬: "食神",
      甲: "偏财",
    },
  },
  辛: {
    子: {
      癸: "食神",
    },
    丑: {
      己: "偏印",
      癸: "食神",
      辛: "比肩",
    },
    寅: {
      甲: "正财",
      丙: "正官",
      戊: "正印",
    },
    卯: {
      乙: "偏财",
    },
    辰: {
      戊: "正印",
      乙: "偏财",
      癸: "食神",
    },
    巳: {
      丙: "正官",
      庚: "劫财",
      戊: "正印",
    },
    午: {
      丁: "七杀",
      己: "偏印",
    },
    未: {
      己: "偏印",
      丁: "七杀",
      乙: "偏财",
    },
    申: {
      庚: "劫财",
      壬: "伤官",
      戊: "正印",
    },
    酉: {
      辛: "比肩",
    },
    戌: {
      戊: "正印",
      辛: "比肩",
      丁: "七杀",
    },
    亥: {
      壬: "伤官",
      甲: "正财",
    },
  },
  壬: {
    子: {
      癸: "劫财",
    },
    丑: {
      己: "正官",
      癸: "劫财",
      辛: "正印",
    },
    寅: {
      甲: "食神",
      丙: "偏财",
      戊: "七杀",
    },
    卯: {
      乙: "伤官",
    },
    辰: {
      戊: "七杀",
      乙: "伤官",
      癸: "劫财",
    },
    巳: {
      丙: "偏财",
      庚: "偏印",
      戊: "七杀",
    },
    午: {
      丁: "正财",
      己: "正官",
    },
    未: {
      己: "正官",
      丁: "正财",
      乙: "伤官",
    },
    申: {
      庚: "偏印",
      壬: "比肩",
      戊: "七杀",
    },
    酉: {
      辛: "正印",
    },
    戌: {
      戊: "七杀",
      辛: "正印",
      丁: "正财",
    },
    亥: {
      壬: "比肩",
      甲: "食神",
    },
  },
  癸: {
    子: {
      癸: "比肩",
    },
    丑: {
      己: "七杀",
      癸: "比肩",
      辛: "偏印",
    },
    寅: {
      甲: "伤官",
      丙: "正财",
      戊: "正官",
    },
    卯: {
      乙: "食神",
    },
    辰: {
      戊: "正官",
      乙: "食神",
      癸: "比肩",
    },
    巳: {
      丙: "正财",
      庚: "正印",
      戊: "正官",
    },
    午: {
      丁: "偏财",
      己: "七杀",
    },
    未: {
      己: "七杀",
      丁: "偏财",
      乙: "食神",
    },
    申: {
      庚: "正印",
      壬: "劫财",
      戊: "正官",
    },
    酉: {
      辛: "偏印",
    },
    戌: {
      戊: "正官",
      辛: "偏印",
      丁: "偏财",
    },
    亥: {
      壬: "劫财",
      甲: "伤官",
    },
  },
};

const diZhiCangGan = {
  子: ["癸"],
  丑: ["己", "癸", "辛"],
  寅: ["甲", "丙", "戊"],
  卯: ["乙"],
  辰: ["戊", "乙", "癸"],
  巳: ["丙", "庚", "戊"],
  午: ["丁", "己"],
  未: ["己", "丁", "乙"],
  申: ["庚", "壬", "戊"],
  酉: ["辛"],
  戌: ["戊", "辛", "丁"],
  亥: ["壬", "甲"],
};

const shorthandShiShen = {
  比肩: "比",
  劫财: "劫",
  食神: "食",
  伤官: "伤",
  正财: "财",
  偏财: "偏",
  正官: "官",
  七杀: "杀",
  正印: "印",
  偏印: "枭",
};

const displayBz = (result) => {
  console.log(
    `年: ${result.year} (${result.yearDiShi})\n月: ${result.month} (${result.monthDiShi})\n日: ${result.day} (${result.dayDiShi})\n时: ${result.time} (${result.timeDiShi})`
  );
};

const getDiShi = (tianGan, diZhi) => {
  return diShi[tianGan][diZhi];
};

const getTianGanShiShen = (riZhuTianGan, tianGan, isMingZhu = false) => {
  if (isMingZhu) {
    return MING_ZHU;
  }
  return tianGanShiShen[riZhuTianGan][tianGan];
};

const getDiZhiShiShen = (riZhuTianGan, diZhi, cangGans) => {
  const _diZhiShiShen = [];
  cangGans.map((cangGan) => {
    _diZhiShiShen.push(diZhiShiShen[riZhuTianGan][diZhi][cangGan]);
  });
  return _diZhiShiShen;
};

const getDiZhiCangGan = (diZhi) => {
  return diZhiCangGan[diZhi];
};

const getCangGanShiShen = (diZhiCangGan, diZhiShiShen) => {
  const cangGanShiShen = [];
  diZhiShiShen.map((shiShen, index) => {
    cangGanShiShen.push(`${diZhiCangGan[index]}${shorthandShiShen[shiShen]}`);
  });
  return cangGanShiShen;
};

const l = s.getLunar();
// console.log(bz.toFullString());
const bz = l.getEightChar();
bz.setSect(2);
const currentBzResult = {
  year: bz.getYear(),
  yearTianGan: bz.getYearGan(),
  yearDiZhi: bz.getYearZhi(),
  yearDiShi: getDiShi(bz.getYearGan(), bz.getYearZhi()),
  yearTianGanShiShen: getTianGanShiShen(bz.getDayGan(), bz.getYearGan()),
  yearDiZhiCangGan: getDiZhiCangGan(bz.getYearZhi()),
  yearDiZhiShiShen: getDiZhiShiShen(
    bz.getDayGan(),
    bz.getYearZhi(),
    getDiZhiCangGan(bz.getYearZhi())
  ),
  yearDiZhiCangGanShiShen: getCangGanShiShen(
    getDiZhiCangGan(bz.getYearZhi()),
    getDiZhiShiShen(
      bz.getDayGan(),
      bz.getYearZhi(),
      getDiZhiCangGan(bz.getYearZhi())
    )
  ),

  month: bz.getMonth(),
  monthTianGan: bz.getMonthGan(),
  monthDiZhi: bz.getMonthZhi(),
  monthDiShi: getDiShi(bz.getMonthGan(), bz.getMonthZhi()),
  monthTianGanShiShen: getTianGanShiShen(bz.getDayGan(), bz.getMonthGan()),
  monthDiZhiCangGan: getDiZhiCangGan(bz.getMonthZhi()),
  monthDiZhiShiShen: getDiZhiShiShen(
    bz.getDayGan(),
    bz.getMonthZhi(),
    getDiZhiCangGan(bz.getMonthZhi())
  ),
  monthDiZhiCangGanShiShen: getCangGanShiShen(
    getDiZhiCangGan(bz.getMonthZhi()),
    getDiZhiShiShen(
      bz.getDayGan(),
      bz.getMonthZhi(),
      getDiZhiCangGan(bz.getMonthZhi())
    )
  ),

  day: bz.getDay(),
  dayTianGan: bz.getDayGan(),
  dayDiZhi: bz.getDayZhi(),
  dayDiShi: getDiShi(bz.getDayGan(), bz.getDayZhi()),
  dayTianGanShiShen: getTianGanShiShen(bz.getDayGan(), bz.getDayGan(), true),
  dayDiZhiCangGan: getDiZhiCangGan(bz.getDayZhi()),
  dayDiZhiShiShen: getDiZhiShiShen(
    bz.getDayGan(),
    bz.getDayZhi(),
    getDiZhiCangGan(bz.getDayZhi())
  ),
  dayDiZhiCangGanShiShen: getCangGanShiShen(
    getDiZhiCangGan(bz.getDayZhi()),
    getDiZhiShiShen(
      bz.getDayGan(),
      bz.getDayZhi(),
      getDiZhiCangGan(bz.getDayZhi())
    )
  ),

  time: bz.getTime(),
  timeTianGan: bz.getTimeGan(),
  timeDiZhi: bz.getTimeZhi(),
  timeDiShi: getDiShi(bz.getTimeGan(), bz.getTimeZhi()),
  timeTianGanShiShen: getTianGanShiShen(bz.getDayGan(), bz.getTimeGan()),
  timeDiZhiCangGan: getDiZhiCangGan(bz.getTimeZhi()),
  timeDiZhiShiShen: getDiZhiShiShen(
    bz.getDayGan(),
    bz.getTimeZhi(),
    getDiZhiCangGan(bz.getTimeZhi())
  ),
  timeDiZhiCangGanShiShen: getCangGanShiShen(
    getDiZhiCangGan(bz.getTimeZhi()),
    getDiZhiShiShen(
      bz.getDayGan(),
      bz.getTimeZhi(),
      getDiZhiCangGan(bz.getTimeZhi())
    )
  ),
};
// console.log("currentBzResult", currentBzResult);
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
// console.log("\n24 节气");
for (var i = 0, j = jqList.length; i < j; i++) {
  var name = jqList[i];
  // console.log(name + " = " + jqTable[name].toYmdHms());
}

// console.log("\nNew Calculation");
const prevJq = l.getPrevJieQi(true);
const prevBz = prevJq.getSolar().getLunar().getEightChar();
// console.log(
//   `上一节气: ${prevJq
//     .getSolar()
//     .toYmdHms()}, ${prevJq.getName()}, ${prevBz.getMonth()}`
// );
let newMonth = currentBzResult.month;
let newMonthTianGan = currentBzResult.monthTianGan;
let newMonthDiZhi = currentBzResult.monthDiZhi;
let newMonthDiShi = currentBzResult.monthDiShi;
let newMonthTianGanShiShen = currentBzResult.monthTianGanShiShen;
let newMonthDiZhiCangGan = currentBzResult.monthDiZhiCangGan;
let newMonthDiZhiShiShen = currentBzResult.monthDiZhiShiShen;
let newMonthDiZhiCangGanShiShen = currentBzResult.monthDiZhiCangGanShiShen;
for (var i = 0, j = jqList.length; i < j; i++) {
  let name = jqList[i];
  if (name === prevJq.getName()) {
    name = jqList[i - 1];
    const prevPrevBz = jqTable[name].getLunar().getEightChar();
    // console.log(
    //   `上上一节气: ${jqTable[
    //     name
    //   ].toYmdHms()}, ${name}, ${prevPrevBz.getMonth()}`
    // );
    newMonth = prevPrevBz.getMonth();
    newMonthTianGan = prevPrevBz.getMonthGan();
    newMonthDiZhi = prevPrevBz.getMonthZhi();
    newMonthDiShi = getDiShi(
      prevPrevBz.getMonthGan(),
      prevPrevBz.getMonthZhi()
    );
    newMonthTianGanShiShen = getTianGanShiShen(
      currentBzResult.dayTianGan,
      prevPrevBz.getMonthGan()
    );
    newMonthDiZhiCangGan = getDiZhiCangGan(prevPrevBz.getMonthZhi());
    newMonthDiZhiShiShen = getDiZhiShiShen(
      bz.getDayGan(),
      prevPrevBz.getMonthZhi(),
      getDiZhiCangGan(prevPrevBz.getMonthZhi())
    );
    newMonthDiZhiCangGanShiShen = getCangGanShiShen(
      getDiZhiCangGan(prevPrevBz.getMonthZhi()),
      getDiZhiShiShen(
        bz.getDayGan(),
        prevPrevBz.getMonthZhi(),
        getDiZhiCangGan(prevPrevBz.getMonthZhi())
      )
    );
  }
}
const newBzResult = {
  ...currentBzResult,
  month: newMonth,
  monthTianGan: newMonthTianGan,
  monthDiZhi: newMonthDiZhi,
  monthDiShi: newMonthDiShi,
  monthTianGanShiShen: newMonthTianGanShiShen,
  monthDiZhiCangGan: newMonthDiZhiCangGan,
  monthDiZhiShiShen: newMonthDiZhiShiShen,
  monthDiZhiCangGanShiShen: newMonthDiZhiCangGanShiShen,
};
console.log("\nCurrent 八字", currentBzResult);
console.log("\nNew 八字", newBzResult);
