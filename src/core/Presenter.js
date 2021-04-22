
import Constants from './Constants.js';

export default function Presenter(input, process) {
    const constants = Constants();

    function print() {
        console.log(`\n${constants.LOG_INFO_OUTPUT_HOURS} ${ input.getWorkedDayTime() }h -> \n`);

        process.subscribe((workedPeriod) => {
            console.log(workedPeriod);
        });
    }

    return {
        print
    }
}
