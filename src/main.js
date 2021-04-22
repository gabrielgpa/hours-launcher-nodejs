import Input from "./core/Input.js";
import Presenter from "./core/Presenter.js";
import Process from "./core/Process.js";

export default function Main() {
    function start() {
        let input = Input();
        let process = Process();
        let presenter = Presenter(input, process);
    
        input.getInput();
        presenter.print();
        process.init(input.getWorkedDayTime());

        start();
    }

    return {
        start
    }
}