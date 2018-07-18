import * as _ from 'lodash';

const intToMilliseconds = integer => {
  return integer * 3600000;
};

const insertWeekdayScheduleData = (schedule, data, key) => {
  if (schedule != undefined) {
    const sched = schedule.split(':');
    let temp;
    switch (key) {
      case 'active':
        sched[1] = data;
        break;
      case 'morningTime':
        temp = sched[2].split('-');
        temp[0] = data;
        sched[2] = temp.join('-');
        sched[1] = 'true';
        break;
      case 'morningHours':
        temp = sched[2].split('-');
        temp[1] = data;
        sched[2] = temp.join('-');
        sched[1] = 'true';
        break;
      case 'afternoonTime':
        temp = sched[3].split('-');
        temp[0] = data;
        sched[3] = temp.join('-');
        sched[1] = 'true';
        break;
      case 'afternoonHours':
        temp = sched[3].split('-');
        temp[1] = data;
        sched[3] = temp.join('-');
        sched[1] = 'true';
        break;
      default:
        break;
    }
    return sched.join(':');
  } else return schedule;
};

const parseWeekdaySchedule = schedule => {
  if (schedule != undefined) {
    const data = schedule.split(':');
    const morningSchedule = data[2].split('-');
    const afternoonSchedule = data[3].split('-');
    return {
      weekday: JSON.parse(data[0]),
      active: JSON.parse(data[1]),
      morningTime: intToMilliseconds(JSON.parse(morningSchedule[0])),
      morningHours: JSON.parse(morningSchedule[1]),
      afternoonTime: intToMilliseconds(JSON.parse(afternoonSchedule[0])),
      afternoonHours: JSON.parse(afternoonSchedule[1]),
    };
  }
  return schedule;
};

const parseTutorSchedule = schedule => {
  if (schedule != undefined) {
    const data = schedule.split(':');
    return {
      time: data[0],
      sun: JSON.parse(data[1]),
      mon: JSON.parse(data[2]),
      tue: JSON.parse(data[3]),
      wed: JSON.parse(data[4]),
      thu: JSON.parse(data[5]),
      fri: JSON.parse(data[6]),
      sat: JSON.parse(data[7]),
    };
  } else return {};
};

const insertTutorSchedule = (schedule, newData, index) => {
  if (schedule != undefined) {
    const data = schedule.split(':');
    if (index == 0) {
      return;
    }
    data[index] = newData;
    return data.join(':');
  } else return schedule;
};

const programSchedule = schedule => {
  if (!!schedule) {
    const data = schedule.split(':');
    const morningSchedule = data[1].split('-');
    const afternoonSchedule = data[2].split('-');
    return {
      date: new Date(JSON.parse(data[0])),
      morningTime: morningSchedule[0],
      morningDuration: morningSchedule[1],
      afternoonTime: afternoonSchedule[0],
      afternoonDuration: afternoonSchedule[1],
    };
  }
};

module.exports = {
  insertWeekdayScheduleData,
  intToMilliseconds,
  parseWeekdaySchedule,
  parseTutorSchedule,
  insertTutorSchedule,
  programSchedule,
};
