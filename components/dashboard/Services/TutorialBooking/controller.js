import * as _ from 'lodash';

export const getDates = function(startDate, endDate) {
  let dates = [],
    currentDate = startDate,
    addDays = function(days) {
      const date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };
  while (currentDate <= endDate) {
    dates.push(currentDate);
    currentDate = addDays.call(currentDate, 1);
  }
  return dates;
};

export const generateBookedSchedules = (scheduleType, schedules) => {
  if (scheduleType === 'custom') {
    let bookedSchedules = [];
    for (schedule of schedules) {
      let data = {
        date: schedule.ottDate,
        time_start: schedule.ottTime,
        duration: schedule.ottHours,
      };
      bookedSchedules.push(data);
    }
    return bookedSchedules;
  } else if (scheduleType === 'weekly') {
    let bookedSchedules = [];
    const {startDate, endDate, schedule} = schedules;
    let dates = getDates(startDate, endDate);
    for (date of dates) {
      //if that day of the week is active and have a schedule set by the client
      if (schedule[date.getDay()].active) {
        // if moring time is not zero then there is schedule in the morning
        if (schedule[date.getDay()].morningTime != 0) {
          const newDateWithTime =
            date.getTime() + schedule[date.getDay()].morningTime;
          let data = {
            date: new Date(newDateWithTime),
            time_start: schedule[date.getDay()].morningTime,
            duration: schedule[date.getDay()].morningHours,
          };
          bookedSchedules.push(data);
        }
        // if afternoon time is not zero then there is schedule in the morning
        if (schedule[date.getDay()].afternoonTime != 0) {
          const newDateWithTime =
            date.getTime() + schedule[date.getDay()].afternoonTime;
          let data = {
            date: new Date(newDateWithTime),
            time_start: schedule[date.getDay()].afternoonTime,
            duration: schedule[date.getDay()].afternoonHours,
          };
          bookedSchedules.push(data);
        }
      }
    }
    return bookedSchedules;
  }
};

export const generateLPR = (scheduleType, schedules, subjects) => {
  if (scheduleType === 'custom') {
    let generatedLPR = [];
    for (schedule of schedules) {
      let data = {
        date: schedule.ottDate,
        time_start: schedule.ottTime,
        duration: schedule.ottHours,
        time_end: schedule.ottHours + schedule.ottTime,
      };
      generatedLPR.push(data);
    }
    return generatedLPR;
  }
  if (scheduleType === 'weekly') {
    let generatedLPR = [];
    for (schedule of schedules) {
      let data = {
        date: schedule.date,
        time_start: schedule.time_start,
        duration: schedule.duration,
        time_end: schedule.time_start + schedule.duration,
      };
      generatedLPR.push(data);
    }
    return generatedLPR;
  }
};
