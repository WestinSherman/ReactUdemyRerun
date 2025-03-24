export default function ShoppingListItem({ item, units, isPurchased }) {
    const styles = {
        color: isPurchased ? "black" : "cyan",
        textDecoration: isPurchased ? "line-through" : "none"
    };
    return (
        <li style={styles}>
            {item} - {units}
        </li>
    )
}