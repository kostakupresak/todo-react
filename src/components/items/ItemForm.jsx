import {useState} from "react";
import itemService from "../../service/itemService";

export default function ItemForm({reloadItems}) {
    const [text, setText] = useState('');

    async function handleClick() {
        if (text === '') return;

        await itemService.add(text);
        setText('');
        reloadItems();
    }

    function handleChange(event) {
        setText(event.target.value);
    }

    return (
        <>
            <label>
                What are you going to do?
                <input type="text" value={text} onChange={handleChange}/>
            </label>
            <button onClick={handleClick}>Add</button>
        </>
    );
}