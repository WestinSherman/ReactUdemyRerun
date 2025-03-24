import Property from "./Property"
import "../styles/PropertyList.css"
export default function PropertyList({ properties }) {
    return (
        <div className="PropertyList">
            {properties.map((p) => {
                return <Property {...p} key={p.id} />
            })}
        </div>
    )
}