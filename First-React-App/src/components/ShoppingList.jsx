import ShoppingListItem from "./ShoppingListItem"
export default function ShoppingList({ items }) {
    return (
        <ul>
            {items.map((i) => (
                <ShoppingListItem
                    key={i.id}
                    {...i}
                />
            ))}
        </ul>
    )
}

//const data = [
//    { item: "Chicken", units: 1, isPurchased: true },
//    { item: "Pie", units: 2, isPurchased: false },
//    { item: "Rice", units: 3, isPurchased: false },
//    { item: "Burger", units: 3, isPurchased: true },
//]