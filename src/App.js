import logo from './logo.svg';
import './App.css';
import { Main } from './components/Main';
import { Sidebar } from './components/Sidebar';
function App() {
  return (
    <div className="App flex flex-wrap overflow-hidden">
      
        <Sidebar></Sidebar>
        <div className="flex-1"> {/* Main content will take up remaining width */}
        <Main />
      </div>
    </div>
  );
}

export default App;
