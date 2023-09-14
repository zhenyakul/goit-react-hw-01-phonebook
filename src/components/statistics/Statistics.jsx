import style from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      <h2 className="title">{title}</h2>

      <ul className={style.statList}>
        {stats.map(stat => (
          <li className={style.item} key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Statistics;
