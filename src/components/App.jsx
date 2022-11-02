import { Component } from 'react';
import Section from 'components/Section';
import Notification from 'components/Notification';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickBtn = e => {
    const { name } = e.currentTarget;
    this.setState(() => {
      return { [name]: this.state[name] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage(total) {
    const { good } = this.state;
    const res = Math.floor((100 / total) * good);
    return !res ? 0 : res;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage(total);

    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            onClick={this.handleClickBtn}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title={'Statistics'}>
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          ) : (
            <Notification message="There is no feedback." />
          )}
        </Section>
      </>
    );
  }
}
