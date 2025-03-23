import './styles/App.css'
import Chicken from './components/Chicken'
import Greeter from './components/Greeter'
import Die from './components/Die'
import ListPicker from './components/ListPicker'
import DoubleDice from './components/DoubleDice'
import Heading from './components/Heading'
import ColorList from './components/ColorList'

function App() {
    return (
        <div>
            <ColorList colors={["red", "pink", "purple", "teal"]} />
            <ColorList colors={["black", "cyan", "black", "cyan"]} />
            {/*<Heading color="cyan" text="welcome" />
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
            <Die numSides={4} />*/}
        </div>
    )
}

export default App
