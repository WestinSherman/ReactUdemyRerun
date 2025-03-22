import './styles/App.css'
import Chicken from './components/Chicken'
import Greeter from './components/Greeter'
import Die from './components/Die'

function App() {
    return (
        <div>
            {/*<Greeter person="Violet" from="ME" />
            <Greeter person="Alia" from="ME" />
            <Greeter person="Maya" from="MY second" />*/}
            <Die numSides={20} />
            <Die numSides={6} />
            <Die numSides={4} />
        </div>
    )
}

export default App
