export default function SecondaryList() {
    const currentDate = new Date();
    const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

    return (
        <ul className="secondary">
            <li><img src="assets/wifi.svg" alt="WiFi"/></li>
            <li>{currentTime}</li>
        </ul>
    );
}
