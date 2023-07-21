import { Container } from "react-bootstrap";
import { Header, Footer } from "./components";
import { HomeScreen } from "./screens";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
        <Footer />
      </main>
    </>
  );
}

export default App;
