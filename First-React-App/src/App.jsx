import './styles/App.css';
import Chicken from './components/Chicken';
import Greeter from './components/Greeter';
import Die from './components/Die';
import ListPicker from './components/ListPicker';
import DoubleDice from './components/DoubleDice';
import Heading from './components/Heading';
import ColorList from './components/ColorList';
import SlotMachine from './components/SlotMachine';
import ShoppingList from './components/ShoppingList';
import PropertyList from './components/PropertyList';
import Clicker from './components/Clicker';
import Form from './components/Form';
import Counter from './components/Counter';
import Toggler from './components/Toggler';
import ToggleCounter from './components/ToggleCounter';
import ColorBoxes from './components/ColorBoxes';
import ColorBox from './components/ColorBox';

//const data = [
//    { id: 1, item: "Chicken", units: 1, isPurchased: true },
//    { id: 2, item: "Pie", units: 2, isPurchased: false },
//    { id: 3, item: "Rice", units: 3, isPurchased: false },
//    { id: 4, item: "Burger", units: 3, isPurchased: true },
//]

//const properties = [
//    { id: 129031, name: "Desert Yurt", price: 150, rating: 4.9 },
//    { id: 129331, name: "Lone Mountain Cabin", price: 250, rating: 4.8 },
//    { id: 129032, name: "Cactus Retreat", price: 300, rating: 4.75 },
//    { id: 129033, name: "Redwood Treehouse Escape", price: 120, rating: 4.9 },
//    { id: 129034, name: "Oceanview Condo", price: 140, rating: 4.7 },
//    { id: 129035, name: "Gold Miner Campground", price: 96, rating: 4.69 },
//];

function App() {
    return (
        <div>
            <ColorBox
                colors={[
                    "#1A1A1A",
                    "#2B2B2B",
                    "#333333",
                    "#4A4A4A",
                    "#555555",
                    "#666666",
                    "#7A7A7A",
                    "#8F8F8F",
                    "#999999",
                    "#A9A9A9",
                    "#00FFFF",
                    "#00E5E5",
                    "#00CCCC",
                    "#00B2B2",
                    "#009999",
                    "#008080",
                    "#006666",
                    "#004C4C",
                    "#003333",
                    "#001A1A",
                ]}
            />
            {/* !!!Start!!!
            <Counter />
            <ToggleCounter />
            <Toggler />
            <Clicker message="HI!!!" buttonText="Please Click Me" />
            <Clicker message="Something different" buttonText="Please Click Me" />
            <Form />
            <PropertyList properties={properties} />
            <SlotMachine slot1="🍒" slot2="🍌" slot3="🍒" />
            <SlotMachine slot1="🍒" slot2="🍒" slot3="🍒" />
            <ShoppingList items={data} />
            <ColorList colors={["red", "pink", "purple", "teal"]} />
            <ColorList colors={["black", "cyan", "black", "cyan"]} />
            <Heading color="cyan" text="welcome" />
            <DoubleDice />
            <DoubleDice />
            <DoubleDice />
            <ListPicker values={[1, 2, 3]} />
            <ListPicker values={["A", "B", "C"]} />
            <Greeter person="Violet" from="ME" />
            <Greeter person="Alia" />
            <Greeter from="MY second" />
            <Die numSides={20} />
            <Die />
            <Die numSides={4} />
            !!!End!!!*/}
        </div>
    )
}

export default App
