import { Container } from "react-bootstrap";
import { Header, Footer } from "./components";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to Proton Store</h1>
        </Container>
        <Footer />
      </main>
    </>
  );
}

export default App;
