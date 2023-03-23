import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button color="danger" onClick={() => console.log('Clicked')}>
        This is a <span>button!</span>
      </Button>
    </div>
  );
}

export default App;
