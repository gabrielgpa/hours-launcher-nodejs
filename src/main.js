import Input from "./core/Input.js";
import Presenter from "./core/Presenter.js";
import Process from "./core/Process.js";
import Constants from "./core/Constants.js";

export default function Main() {
    function start() {
        let input = Input();
        let process = Process();
        let constants = Constants();
        let presenter = Presenter(input, process);
    
        try {
            input.getInput();
            presenter.print();
            process.init(input.getWorkedDayTime());

            start();   
        } catch (error) {
            console.error(error);
            
            if (constants.ERROR_INPUT_FORMAT === error) {
                start();
            }
        }
    }

    return {
        start
    }
}