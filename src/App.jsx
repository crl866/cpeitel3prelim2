import React, { useMemo, useState } from "react";
import { zeroTalentItems } from "./data/zeroTalent";

export default function App() {
  const fullName = "Carl Anton David";

  const items = useMemo(() => zeroTalentItems, []);
  const [index, setIndex] = useState(0);

  const current = items[index];

  const goPrev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  return (
    <div className="page">
      <div className="card">
        <header className="header">
          <h1 className="title">10 Things that Require Zero Talent</h1>
          <p className="subtitle">by {fullName}</p>
        </header>

        <div className="imageWrap">
          <img className="image" src={current.url} alt={current.alt} />
        </div>

        <section className="content">
          <h2 className="skill">{current.thing}</h2>
          <p className="desc">{current.detail}</p>
        </section>

        <footer className="footer">
          <button className="btn" type="button" onClick={goPrev}>
            BACK
          </button>

          <div className="counter">
            {index + 1} / {items.length}
          </div>

          <button className="btn" type="button" onClick={goNext}>
            NEXT
          </button>
        </footer>
      </div>
    </div>
  );
}
