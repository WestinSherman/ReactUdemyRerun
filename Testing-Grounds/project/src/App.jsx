import './App.css';
import ColorBox from './components/ColorBox';

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
    </div>
  )
}

export default App
