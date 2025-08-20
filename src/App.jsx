import {contents} from "./assets/data/data"
import Content from "./components/Content";
import Header from "./components/Header";
import {Section} from "./styles"; // styled-components 

function App() {
  return (
    <main>
      <Header />
      <section>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </section>
    </main>
  );
}

export default App;
