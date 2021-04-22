import momentJs from 'moment';

function Process() {
    let days = 0;
    let listHours = [];
    let workedDayTime;
    const state = {
        observers: []
    };

    function init(workedDayTimeToProcess) {
        workedDayTime = workedDayTimeToProcess;

        while (days <= 30) {
            let schedule = generateSchedule();
    
            days++;
            
            const workedPeriod = formatSchedule(schedule, days);
            
            listHours.push(workedPeriod);

            notifyAll(workedPeriod);
        }
    }
    
    function formatSchedule(schedule, day) {
        return `${day}: ${schedule[0]} - ${schedule[1]}`;
    }
    
    function generateSchedule() {
        let hour = getRandomInt(9, 11);
        let minute = getRandomInt(0, 59);
        let initHour = `${hour}:${minute}`;
        
        while(listHours.includes(initHour)) {
            hour = getRandomInt(0, 19);
            minute = getRandomInt(0, 59);
            initHour = `${hour}:${minute}`;
        }
    
        let workedDayTimeSplited = workedDayTime.toString().split(':');
        let lastHour = sumHour(hour, minute, workedDayTimeSplited[0], workedDayTimeSplited[1]);
    
        return [initHour, lastHour];
    }
    
    function sumHour(initHour, initMinute, workedDayHour, workedDayMinute) {
        let moment = momentJs();
    
        moment.hour(~~initHour);
        moment.minute(~~initMinute);
    
        moment.add(~~workedDayHour + 1, 'hours');
        moment.add(~~workedDayMinute, 'minutes');
    
        return moment.format('HH:mm');
    }
    
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
    
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function subscribe(observerFunction) {
        state.observers.push(observerFunction);
    }

    function notifyAll(command) {
        for (const observerFunction of state.observers) {
            observerFunction(command);
        }
    }

    return {
        init,
        subscribe
    }
}

export default Process;