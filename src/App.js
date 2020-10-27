import Door from './Door.js'

function App() {
    return (
        <div className="App">
            {[...Array(24).keys()].map(day => (
                <Door day={day + 1} />
            ))}
        </div>
    )
}

export default App
