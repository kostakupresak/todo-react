import PrimaryList from "../lists/PrimaryList";
import SecondaryList from "../lists/SecondaryList";

export default function TopBar() {
    return (
        <section className="bar">
            <PrimaryList/>
            <SecondaryList/>
        </section>
    );
}
