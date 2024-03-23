import './App.css';
import Accordion from './components/Accordion/Accordion';

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item id='junior' className="accordion-item" title="hello 1">
            <Accordion.Title className="accordion-item-title">
              Hello 1
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>How are you?</p>
                <p>Tell us more about you....!!</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id='senior' className="accordion-item" title="hello 1">
            <Accordion.Title className="accordion-item-title">
              Hello 2
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>How are you?</p>
                <p>Tell us more about you....!!</p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
