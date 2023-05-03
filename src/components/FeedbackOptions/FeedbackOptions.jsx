import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) =>  (
    <div className={css.buttonsWrap}>
    {Object.keys(options).map((option, index) => (
    <button type="button" key={option} className={css.button} onClick={onLeaveFeedback[index]}>{option}</button>
))}
    </div> 
)
       

export default FeedbackOptions;

