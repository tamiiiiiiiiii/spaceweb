import { useMemo, useState } from 'react';
import './Missions.css';

const missions = [
  {
    id: 'voyager-1',
    name: 'Voyager 1',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/d2/Voyager.jpg',
    year: '1977',
    target: 'Внешние планеты и межзвездное пространство',
    status: 'active',
    note: 'Первый аппарат, покинувший границы гелиосферы.',
  },
  {
    id: 'cassini',
    name: 'Cassini-Huygens',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/b/b2/Cassini_Saturn_Orbit_Insertion.jpg',
    year: '1997',
    target: 'Сатурн и Титан',
    status: 'completed',
    note: 'Детально изучила кольца Сатурна и его спутники.',
  },
  {
    id: 'perseverance',
    name: 'Perseverance',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIgxVGbSLwvJjnCqKnnQh5R-ZORDq-FhMiAg&s',
    year: '2020',
    target: 'Марс (кратер Езеро)',
    status: 'active',
    note: 'Ищет следы древней жизни и собирает образцы.',
  },
  {
    id: 'jwst',
    name: 'James Webb',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/James_Webb_Space_Telescope_2009_top.jpg/500px-James_Webb_Space_Telescope_2009_top.jpg',
    year: '2021',
    target: 'Дальний космос и ранняя Вселенная',
    status: 'active',
    note: 'Снимает глубокий космос в инфракрасном диапазоне.',
  },
  {
    id: 'apollo-11',
    name: 'Apollo 11',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsI_MCX67T4LYuJCqZSRwv9QovW12OssGWrQ&s',
    year: '1969',
    target: 'Луна',
    status: 'completed',
    note: 'Первая высадка человека на Луну.',
  },
  {
    id: 'venera-7',
    name: 'Венера-7',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS45jJbT8NKD5NLy5Num_VPV_1pb43OjcyXNw&s',
    year: '1970',
    target: 'Венера',
    status: 'completed',
    note: 'Первый аппарат, передавший данные с поверхности другой планеты.',
  },
  {
    id: 'new-horizons',
    name: 'New Horizons',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIak4Lnyy10q-WGEgjIX1ZsYJWCUwWOgOZFg&s',
    year: '2006',
    target: 'Плутон и пояс Койпера',
    status: 'active',
    note: 'Передал детальные снимки Плутона и продолжает полет дальше.',
  },
  {
    id: 'juno',
    name: 'Juno',
    image:
      'https://mf.b37mrtl.ru/russian/images/2017.02/article/58ac872dc46188ae7e8b4634.jpg',
    year: '2011',
    target: 'Юпитер',
    status: 'active',
    note: 'Изучает внутреннюю структуру и магнитное поле Юпитера.',
  },
  {
    id: 'curiosity',
    name: 'Curiosity',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Curiosity_Self-Portrait_at_%27Big_Sky%27_Drilling_Site.jpg/330px-Curiosity_Self-Portrait_at_%27Big_Sky%27_Drilling_Site.jpg',
    year: '2011',
    target: 'Марс (кратер Гейл)',
    status: 'active',
    note: 'Исследует геологию Марса и потенциальную обитаемость в прошлом.',
  },
  {
    id: 'hayabusa2',
    name: 'Hayabusa2',
    image:
      'https://nss.org/wp-content/uploads/2018/08/hayabusa2.jpg',
    year: '2014',
    target: 'Астероид Рюгу',
    status: 'completed',
    note: 'Доставила образцы астероида на Землю в 2020 году.',
  },
  {
    id: 'insight',
    name: 'InSight',
    image:
      'https://hightech.fm/wp-content/uploads/2022/12/insight_lander_pia22227_print-1-768x576.jpg',
    year: '2018',
    target: 'Марс',
    status: 'completed',
    note: 'Изучила внутреннее строение Марса с помощью сейсмометра.',
  },
  {
    id: 'artemis-i',
    name: 'Artemis I',
    image:
      'https://www.boeing.com/content/dam/boeing/boeingdotcom/features/2022/08/roll-out_xl.jpg',
    year: '2022',
    target: 'Луна',
    status: 'completed',
    note: 'Беспилотный испытательный полет корабля Orion вокруг Луны.',
  },
  {
    id: 'euclid',
    name: 'Euclid',
    image:
      'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2023/02/euclid_mission_poster_horizontal/24697500-1-eng-GB/Euclid_mission_poster_horizontal_article.png',
    year: '2023',
    target: 'Темная материя и темная энергия',
    status: 'active',
    note: 'Создает 3D-карту Вселенной для изучения космической эволюции.',
  },
  {
    id: 'juice',
    name: 'JUICE',
    image:
      'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2017/07/juice_mission/17066055-4-eng-GB/Juice_mission_card_medium.png',
    year: '2023',
    target: 'Спутники Юпитера',
    status: 'active',
    note: 'Европейская миссия к Ганимеду, Европе и Каллисто.',
  },
];

function Missions() {
  const [filter, setFilter] = useState('all');

  const filteredMissions = useMemo(() => {
    if (filter === 'all') return missions;
    return missions.filter((mission) => mission.status === filter);
  }, [filter]);

  return (
    <main className="page missions-page">
      <section className="missions-head">
        <p className="eyebrow">Космические экспедиции</p>
        <h1>Страница миссий</h1>
        <p>
          Легкая по производительности страница с ключевыми миссиями: без тяжелых
          анимаций и лишних эффектов.
        </p>
      </section>

      <section className="missions-filter" aria-label="Фильтр миссий">
        <button
          type="button"
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          Все
        </button>
        <button
          type="button"
          className={filter === 'active' ? 'active' : ''}
          onClick={() => setFilter('active')}
        >
          Активные
        </button>
        <button
          type="button"
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
        >
          Завершенные
        </button>
      </section>

      <section className="missions-grid" aria-label="Карточки космических миссий">
        {filteredMissions.map((mission) => (
          <article className="mission-card" key={mission.id}>
            <div className="mission-image">
              {mission.image ? (
                <img src={mission.image} alt={mission.name} loading="lazy" decoding="async" />
              ) : (
                <span>Добавь фото миссии</span>
              )}
            </div>
            <div className="mission-top">
              <h2>{mission.name}</h2>
              <span className={`status status--${mission.status}`}>
                {mission.status === 'active' ? 'Активна' : 'Завершена'}
              </span>
            </div>
            <p>
              <strong>Год запуска:</strong> {mission.year}
            </p>
            <p>
              <strong>Цель:</strong> {mission.target}
            </p>
            <p>{mission.note}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Missions;
