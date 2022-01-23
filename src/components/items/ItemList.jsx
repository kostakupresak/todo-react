import Item from "./Item";

export default function ItemList({items, reloadItems}) {
    function mapItems(item) {
        return <Item key={item.id} item={item} reloadItems={reloadItems}/>;
    }

    function ItemsFormatted() {
        return items.map(mapItems);
    }

    return (
        <>
            <h1>Items</h1>
            <ItemsFormatted/>
        </>
    );
}
