import './App.css';
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
    return (
        <div>
            <h1>Adopt me</h1>
            <Pet name="Luna" bread="havanese" animal="Dog" />
            <SearchParams />.
        </div>
    )
};

export default App;
