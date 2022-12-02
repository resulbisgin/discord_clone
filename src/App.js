import './App.css';
import Groups from './components/Groups';
import Discover from './components/Discover';
import MainComponents from './components/MainComponents';

function App() {
  return (
    <div className="flex bg-[#393943] h-screen">
     <Groups/>
     <Discover/>
     <MainComponents/>
    </div>
  );
}

export default App;
