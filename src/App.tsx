import Button from './components/Button.tsx';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '2rem',
        textAlign: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Button Example</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          justifyContent: 'center',
          gap: '1rem',
          width: '100%',
        }}
      >
        <Button color="primary">Text</Button>
        <Button color="primary" icon="arrow-right">
          Text
        </Button>
        <Button color="primary" loading>
          Text
        </Button>
        <Button color="primary" disabled>
          Text
        </Button>
        <Button color="primary" loading disabled>
          Text
        </Button>
        <Button color="secondary">Text</Button>
        <Button color="secondary" onClick={() => alert('Botão clicado') } icon="check">
          Text (click)
        </Button>
        <Button color="secondary" icon="refresh" onClick={() => alert('Botão clicado') } disabled>
          Text (click)
        </Button>
        <Button color="secondary" icon="check" loading>
          Text
        </Button>
      </div>
    </div>
  );
}

export default App;
