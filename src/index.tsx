import ReactDOM from "react-dom/client"
import App from "./App"

// The ! tells TypeScript that createRoot's value will not be null i.e. a div with the id of "root" will definitely exist in the HTML
ReactDOM
    .createRoot(document.getElementById("root")! )
    .render(<App />)