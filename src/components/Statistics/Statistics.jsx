import css from './Statistics.module.css';


const Statistics = ({good, neutral, bad, total, positivePercentage}) =>  (
         <div>
                <p className={css.stat}>Good: {good}</p>
                <p className={css.stat}>Neutral: {neutral}</p>
                <p className={css.stat}>Bad: {bad}</p>
                <p className={css.stat}>Total: {total}</p>
                <p className={css.stat}>Positive feedback: {good && positivePercentage}</p>
        </div>
        )
   

export default Statistics;