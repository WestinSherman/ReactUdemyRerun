export default function ShoppingList({ items }) {
    return (
        <ul>
            {items.map(i => <li style={{
                color: i.isPurchased ? "grey" : "cyan",
                textDecoration: i.isPurchased ? "line-through" : "none"
            }}>{i.item} - {i.units}</li>)}
        </ul>
    )
}

//const data = [
//    { item: "Chicken", units: 1, isPurchased: true },
//    { item: "Pie", units: 2, isPurchased: false },
//    { item: "Rice", units: 3, isPurchased: false },
//    { item: "Burger", units: 3, isPurchased: true },
//]