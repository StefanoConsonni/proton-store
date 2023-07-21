import { Container } from "react-bootstrap";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to Proton Store</h1>
        </Container>
      </main>
    </>
  );
}

export default App;
