import ItemForm from "../items/ItemForm";
import ItemList from "../items/ItemList";
import {useEffect, useState} from "react";
import itemService from "../../service/itemService";

export default function ToDoApp() {
    const [items, setItems] = useState([]);

    async function reloadItems() {
        const loadedItems = await itemService.getAll();
        setItems(loadedItems);
    }

    useEffect(() => {
        reloadItems().then(null);
    }, []);

    return (
        <div className="content">
            <div className="sidebar">
                <ItemForm reloadItems={reloadItems}/>
            </div>
            <div className="main">
                <ItemList items={items} reloadItems={reloadItems}/>
            </div>
        </div>
    );
}
