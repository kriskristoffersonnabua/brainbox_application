import * as _ from 'lodash';

const intToMilliseconds = integer => {
  return integer * 60 * 60;
}

const insertWeekdayScheduleData = (schedule, data, key) => {
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
      sched[1] = "true";
      break;
    case 'morningHours':
      temp = sched[2].split('-');
      temp[1] = data;
      sched[2] = temp.join('-');
      sched[1] = "true";
      break;
    case 'afternoonTime':
      temp = sched[3].split('-');
      temp[0] = data;
      sched[3] = temp.join('-');
      sched[1] = "true";
      break;
    case 'afternoonHours':
      temp = sched[3].split('-');
      temp[1] = data;
      sched[3] = temp.join('-');
      sched[1] = "true";
      break;
    default:
      break;
  }
  return sched.join(':');
}

const parseWeekdaySchedule = schedule => {
  const data = schedule.split(':');
  const morningSchedule = data[2].split('-');
  const afternoonSchedule = data[3].split('-');
  return {
    weekday: JSON.parse(data[0]),
    active: JSON.parse(data[1]),
    morningTime: intToMilliseconds(JSON.parse(morningSchedule[0])),
    morningHours: JSON.parse(morningSchedule[1]),
    afternoonTime: intToMilliseconds(JSON.parse(afternoonSchedule[0])),
    afternoonHours: JSON.parse(afternoonSchedule[1])
  }
}

module.exports = {
  insertWeekdayScheduleData,
  intToMilliseconds,
  parseWeekdaySchedule,
}