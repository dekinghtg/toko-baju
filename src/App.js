import './App.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from "./pages/homepage/homepage.component";

const TopiPage = () => (
    <div>
        <h1>TOPI PAGE</h1>
    </div>
)

function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/topi' component={TopiPage}/>
            </Switch>
        </div>
    );
}

export default App;
