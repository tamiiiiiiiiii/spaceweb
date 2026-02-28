import { useEffect, useMemo, useState } from 'react';
import { jwstGallery } from '../../data/spaceData';
import './Galaxy.css';

function Galaxy() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!selectedImage) {
      return undefined;
    }

    const onEsc = (event) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onEsc);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onEsc);
    };
  }, [selectedImage]);

  const currentImage = useMemo(
    () => jwstGallery.find((item) => item.id === selectedImage),
    [selectedImage]
  );

  return (
    <main className="page galaxies-page">
      <section className="lab-heading">
        <p className="eyebrow">Галактики и JWST</p>
        <h1>Мир далеких галактик</h1>
        <p>
          Космический телескоп Джеймса Уэбба снимает Вселенную в инфракрасном
          диапазоне и показывает то, что раньше было скрыто за пылевыми облаками.
        </p>
      </section>

      <section className="galaxy-intro glass-card">
        <h2>Что такое галактика?</h2>
        <p>
          Галактика - это огромная система из звезд, газа, пыли и темной материи,
          удерживаемая гравитацией. Наша галактика называется Млечный Путь.
        </p>
      </section>

      <section className="gallery-grid" aria-label="Галерея JWST">
        {jwstGallery.map((item) => (
          <article className="gallery-card" key={item.id}>
            <button
              className="gallery-image-wrap"
              type="button"
              onClick={() => setSelectedImage(item.id)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="gallery-image"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            </button>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <a href={item.source} target="_blank" rel="noreferrer">
              Источник NASA
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Galaxy;
