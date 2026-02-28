import { NavLink } from 'react-router-dom';
import { facts } from '../../data/spaceData';
import './Home.css';

function Home() {
  return (
    <main className="page home-page">
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Космический атлас</p>
          <h1>Путешествие по Солнечной системе</h1>
          <p>
            Интерактивный мини-портал с фактами о космосе, анимированной орбитой и
            отдельной лабораторией 3D-планет на второй странице.
          </p>
          <NavLink to="/planet-lab" className="hero__cta">
            Смотреть планеты
          </NavLink>
        </div>
        <div className="orbit-art" aria-hidden="true">
          <div className="orbit-art__sun" />
          <span className="orbit orbit--1">
            <span className="dot dot--1" />
          </span>
          <span className="orbit orbit--2">
            <span className="dot dot--2" />
          </span>
          <span className="orbit orbit--3">
            <span className="dot dot--3" />
          </span>
        </div>
      </section>

      <section className="facts-grid">
        {facts.map((fact) => (
          <article className="glass-card" key={fact}>
            {fact}
          </article>
        ))}
      </section>

      <section className="timeline">
        <h2>Космическая хронология</h2>
        <div className="timeline-grid">
          <article>
            <h3>1543</h3>
            <p>Коперник публикует гелиоцентрическую модель мира.</p>
          </article>
          <article>
            <h3>1969</h3>
            <p>Миссия Apollo 11 впервые доставляет людей на Луну.</p>
          </article>
          <article>
            <h3>2020+</h3>
            <p>Новые миссии активно изучают Марс, Юпитер и дальний космос.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;
