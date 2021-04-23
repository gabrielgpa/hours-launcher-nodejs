import PromptSync from 'prompt-sync';
import momentJs from 'moment';

import Constants from './Constants.js';

export default function Input() {
    let workedDayTime;
    const prompt = PromptSync();
    const constants = Constants();

    function getInput() {
        workedDayTime = prompt(constants.INFO_INPUT_HOURS_WORKED);

        if (!workedDayTime) {
            throw constants.ERROR_INPUT_EMPTY;
        }
        
        let moment = momentJs(workedDayTime, "HH:mm", true);
        let sanitizedWorkedDayTime = ~~(workedDayTime.replace(':', ''));
    
        if (!workedDayTime.includes(':')) {
            throw constants.ERROR_INPUT_FORMAT;
        }
    
        if (typeof sanitizedWorkedDayTime != 'number') {
            throw constants.ERROR_INPUT_FORMAT;
        }

        if (!moment.isValid()) {
            throw constants.ERROR_INPUT_FORMAT;
        }
    }

    function getWorkedDayTime() {
        return workedDayTime;
    }

    return {
        getInput,
        getWorkedDayTime
    };
}
