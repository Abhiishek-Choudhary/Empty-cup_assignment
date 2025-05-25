import React, { useEffect, useState } from "react";
import DesignerCard from "./components/DesignerCard";
import TopBar from "./components/TopBar";

function App() {
  const [designers, setDesigners] = useState([]);
  const [shortlisted, setShortlisted] = useState([]);
  const [showOnlyShortlisted, setShowOnlyShortlisted] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/listings")
      .then(res => res.json())
      .then(data => setDesigners(data));
  }, []);

  const toggleShortlist = (id) => {
    setShortlisted((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filtered = showOnlyShortlisted
    ? designers.filter((d) => shortlisted.includes(d.id))
    : designers;

  return (
    <div className="max-w-md mx-auto p-4">
      <TopBar
        toggle={() => setShowOnlyShortlisted(!showOnlyShortlisted)}
        checked={showOnlyShortlisted}
      />
      <div style={{ marginTop: 25 }}>
        {filtered.map((designer) => (
          <DesignerCard
            key={designer.id}
            heading={designer.name}
            content={designer.description}
            num1={designer.projects}
            num2={designer.years}
            num3={designer.price}
            color={designer.bgColor}
            data={designer}
            isShortlisted={shortlisted.includes(designer.id)}
            onShortlist={toggleShortlist}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
