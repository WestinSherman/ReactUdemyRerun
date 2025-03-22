import './styles/App.css'
import Chicken from './components/Chicken'
import Greeter from './components/Greeter'

function App() {
    return (
        <div>
            <Greeter person="Violet" />
            <Greeter person="Alia" />
            <Greeter person="Maya" />
        </div>
    )
}

export default App
