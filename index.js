const moment = require('moment');
const EventEmitter = require('events');
const emitter = new EventEmitter();

const [inputDate] = process.argv.slice(2);

const prepareDate = (value) => {
    const date = value.split('/');

    date.forEach(val => {
        if (isNaN(val)) {
            throw new Error("Некорректное значение")
        }
    })

    const [hour, day, month, year] = date;

    return new Date(Date.UTC(year, month - 1, day, hour));
};

const getDateDiff = (date) => {
    const now = moment(new Date())
    const future = moment(date)
    if (now >= future) { // неявно приводим к числу (миллисекунды) и сравниваем
        emitter.emit('stopTick');
        return
    }
    const diff = moment.duration(future.diff(now))._data
    console.log(`${diff.seconds} seconds ${diff.minutes} minutes ${diff.hours} hours ${diff.days} days ${diff.months} months ${diff.years} years`)
}

const futureDate = prepareDate(inputDate);
const timer = setInterval(() => {
    emitter.emit('nextTick', futureDate);
}, 1000)

emitter.on('nextTick', getDateDiff);
emitter.on('stopTick', () => {
    clearInterval(timer);
    console.log('Таймер истек');
});

/* node index.js 12/12/12/2023 */
