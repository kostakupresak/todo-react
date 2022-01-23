import itemService from "../../service/itemService";

export default function Item({item, reloadItems}) {
    const className = item.isToggled ? 'completed' : '';

    async function handleToggle() {
        await itemService.toggle(item.id);
        reloadItems();
    }

    async function handleDelete() {
        await itemService.delete(item.id);
        reloadItems();
    }

    return (
        <div className={className}>
            <p onClick={handleToggle}>{item.text}</p>
            <img onClick={handleDelete} src="assets/delete.svg" alt="Delete"/>
        </div>
    );
}
