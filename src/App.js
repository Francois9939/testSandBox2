import { useState } from "react";

function App() {
  const [compteur, setCompteur] = useState(1);

  const handleclic = () => {
    setCompteur(compteur + 1);
  };

  return (
    <div>
      <h1>Bonjour {compteur}</h1>
      <button onClick={handleclic}>Incremente </button>
    </div>
  );
}

export default App;
