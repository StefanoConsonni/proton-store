import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </main>
    </>
  );
}

export default App;
