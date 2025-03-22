import './styles/App.css'
import Chicken from './components/Chicken'
import Greeter from './components/Greeter'
import Die from './components/Die'
import ListPicker from './components/ListPicker'

function App() {
    return (
        <div>
            <ListPicker values={[1, 2, 3]} />
            <ListPicker values={["A", "B", "C"]} />
            {/*<Greeter person="Violet" from="ME" />
            <Greeter person="Alia" />
            <Greeter from="MY second" />
            <Die numSides={20} />
            <Die />
            <Die numSides={4} />*/}
        </div>
    )
}

export default App
