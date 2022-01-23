import TitleBar from "../bars/TitleBar";
import ToDoApp from "../apps/ToDoApp";

export default function ToDoWindow() {
    return (
        <section className="window">
            <TitleBar/>
            <ToDoApp/>
        </section>
    );
}
