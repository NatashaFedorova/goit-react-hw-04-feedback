import { useState } from 'react';
import Section from 'components/Section';
import Notification from 'components/Notification';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const typeReviews = ['good', 'neutral', 'bad'];

  const handleClickBtn = e => {
    const { name } = e.currentTarget;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        return;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        return;

      case 'bad':
        setBad(prevState => prevState + 1);
        return;

      default:
        console.log('Something went wrong');
        return;
    }
  };

  const calcPositiveFeedback = () => Math.floor((100 / total) * good);

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions onClick={handleClickBtn} options={typeReviews} />
      </Section>
      <Section title={'Statistics'}>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={calcPositiveFeedback()}
          />
        ) : (
          <Notification message="There is no feedback." />
        )}
      </Section>
    </>
  );
};
