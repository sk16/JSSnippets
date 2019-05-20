/**
 * Date related utils
 * @author Saket Pandey
 */

const getYearMonthDate = (today = new Date()) => {
	return [today.getFullYear(), today.getMonth() + 1, today.getDate()];
}

const getYYYYMMDDHyphenatedStr = (today = new Date()) => {
	let [todayYear, todayMonth, todayDate] = [...getYearMonthDate(today)];
  todayMonth = todayMonth < 10 ? `0${todayMonth}` : todayMonth;
  todayDate = todayDate < 10 ? `0${todayDate}` : todayDate;
  return `${todayYear}-${todayMonth}-${todayDate}`;
};

/**
 * Converts str to date object 
 * @param  {String} str Pattern is YYYY-MM-DD
 * @param  {Number} offSetMonths months to add
 * @return {[Date]}     date
 */
const getDatefromHyphenatedDateStr = (str = '', offSetMonths = 0) => {
	const [year, month, date] = [...str.split('-').map(parseFloat)];
	const today = new Date();
	today.setFullYear(year);
	//expects 0 index based month number
	today.setMonth(month + parseFloat(offSetMonths) - 1);
	today.setDate(date);
	return today;
}

const getMaxDateStr = (str = '', ptr = '') => {
	const sDt = getDatefromHyphenatedDateStr(str);
	const pDt = getDatefromHyphenatedDateStr(ptr);
	return sDt > pDt ? str : ptr;
}

const getFirstDateOfMonth = (month, year) => {
	return new Date(parseFloat(year), parseFloat(month), 1);
}

const getLastDateOfMonth = (month, year) => {
	return new Date(parseFloat(year), parseFloat(month) + 1, 0);
}

const getNumberOfDaysInMonth = (month, year) => {
	return getLastDateOfMonth(month, year).getDate();
}

const getNextMonthYear = (month, year) => {
	const nextMonthFirstDate = new Date(parseFloat(year), parseFloat(month)+1);
	return [nextMonthFirstDate.getFullYear(), nextMonthFirstDate.getMonth()+1];
}
/**
 * Returns 0 based week day index of a particilar date
 * 0 (if a date falls on Monday) through 6 (if a date falls on Monday)
 * @param  {Date} date
 */
const getDateWeekIndex = (date) => {
	const weekIndex = date.getDay() - 1;
	return weekIndex === -1 ? 6 : weekIndex;
}

/**
 * Returns calendar for month as array of week arrays
 * @param  {Number} month
 * @param  {Number} year
 * @return {[[],[],[]...]} array of week arrays
 * @example input : getMonthCalendar(3,2017)
 * @example output :
 *  [ [ 0, 0, 1, 2, 3, 4, 5 ],
  	[ 6, 7, 8, 9, 10, 11, 12 ],
  	[ 13, 14, 15, 16, 17, 18, 19 ],
  	[ 20, 21, 22, 23, 24, 25, 26 ],
  	[ 27, 28, 29, 30, 31, 0, 0 ] ]
 */
const getMonthCalendar = (mon, year) => {
	const month = mon - 1;
	const monthCalendar = [];
	let days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
	const numberOfDaysInMonth = getNumberOfDaysInMonth(month, year);
	const firstDayWeekIndex = getDateWeekIndex(getFirstDateOfMonth(month, year));
	const lastDayWeekIndex = getDateWeekIndex(getLastDateOfMonth(month, year));
	const numWeekRowsInCalendar = (numberOfDaysInMonth + (firstDayWeekIndex + (6 - lastDayWeekIndex))) / 7;
	console.log(numberOfDaysInMonth, firstDayWeekIndex, lastDayWeekIndex, numWeekRowsInCalendar);
	days = days.slice(0, numberOfDaysInMonth);
	for (let i = 0; i < firstDayWeekIndex; i++) {
		days.unshift(0);
	}
	for (let i = lastDayWeekIndex + 1; i < 7; i += 1) {
		days.push(0);
	}
	for(let i = 0; i < numWeekRowsInCalendar; i += 1) {
		monthCalendar.push(days.slice(0, 7));
		days = days.slice(7);
	}
	return monthCalendar;
}

console.log([...[...getMonthCalendar(11, 2017)]]);
