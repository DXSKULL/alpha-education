import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './assets/css/style.css'

function App() {
  return (
    <div className="app">
      <div className="app-main">
        <Header/>
        <div className="app-dashboard">
          <Categories/>
          <ToDoList/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
