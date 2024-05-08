import css from "./Feedback.module.css";
const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div className="feedback">
      <h2>Feedback</h2>
      <p className={css.opinion}>Total feedback: {totalFeedback}</p>
      <p className={css.opinion}>Good: {feedback.good}</p>
      <p className={css.opinion}>Neutral: {feedback.neutral}</p>
      <p className={css.opinion}>Bad: {feedback.bad}</p>
      <p className={css.opinion}>Positive feedback: {positiveFeedback}%</p>
    </div>
  );
};
export default Feedback;
