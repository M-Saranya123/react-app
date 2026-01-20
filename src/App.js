function App() {
  // Read from environment variables at runtime
  const name = process.env.REACT_APP_TITLE || 'Default Name';
  const version = process.env.REACT_APP_VERSION || '1.0.0';
  
  return (
    <div className="App">
      <p>Title: {name}</p>
      <p>Version: {version}</p>
    </div>
  );
}

export default App;  