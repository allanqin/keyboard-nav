import './App.css';
import InputNav from './components/InputNav';

function App() {
  const title = "Movie"
  const data = ["The Dark Knight", "Avatar", "Pokemon", "Parasite", "The Thoery of Everything", "Star Wars", "Transformers", "Inception", "Forrest Gump"];

  return (
    <div className="App">
      <InputNav data={data} title={title}/>
    </div>
  );
}

export default App;
