import './App.css';
import Header from "./components/Header";
import AccordionGroup from "./components/AccordionGroup";
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <AccordionGroup></AccordionGroup>
    </Container>
  );
}

export default App;
