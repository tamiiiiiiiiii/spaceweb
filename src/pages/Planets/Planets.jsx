import { useEffect, useMemo, useState } from 'react';
import { planets } from '../../data/spaceData';
import './Planets.css';

function Planets() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  useEffect(() => {
    if (!selectedPlanet) {
      return undefined;
    }

    const onEsc = (event) => {
      if (event.key === 'Escape') {
        setSelectedPlanet(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onEsc);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onEsc);
    };
  }, [selectedPlanet]);

  const activePlanet = useMemo(
    () => planets.find((planet) => planet.id === selectedPlanet),
    [selectedPlanet]
  );

  return (
    <main className="page lab-page">
      <section className="lab-heading">
        <p className="eyebrow">Интерактивный раздел</p>
        <h1>3D-лаборатория планет</h1>
        <p>
          Нажми на карточку планеты, чтобы открыть модальное окно с моделью и
          подробными характеристиками.
        </p>
      </section>

      <section className="planet-grid" aria-label="3D-модели планет">
        {planets.map((planet) => (
          <button
            className="planet-card"
            key={planet.id}
            type="button"
            onClick={() => setSelectedPlanet(planet.id)}
          >
            <span className="planet-stage">
              <span
                className={`planet-ball planet-ball--${planet.size}`}
                style={{ '--planet-color': planet.color }}
              >
                {planet.ring && <span className="planet-ring" />}
              </span>
            </span>
            <strong>{planet.name}</strong>
          </button>
        ))}
      </section>

      {activePlanet && (
        <div
          className="modal-overlay"
          role="presentation"
          onClick={() => setSelectedPlanet(null)}
        >
          <article
            className="planet-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`Детали о планете ${activePlanet.name}`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="planet-modal__visual">
              <span
                className="planet-ball planet-ball--focus"
                style={{ '--planet-color': activePlanet.color }}
              >
                {activePlanet.ring && <span className="planet-ring" />}
              </span>
            </div>
            <h3>{activePlanet.name}</h3>
            <p>{activePlanet.description}</p>
            <ul>
              <li>Диаметр: {activePlanet.diameter}</li>
              <li>Длительность суток: {activePlanet.day}</li>
              <li>Период обращения: {activePlanet.year}</li>
            </ul>
            <button
              type="button"
              className="close-button"
              onClick={() => setSelectedPlanet(null)}
            >
              Закрыть
            </button>
          </article>
        </div>
      )}
    </main>
  );
}

export default Planets;
