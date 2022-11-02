import PropTypes from 'prop-types';

import { StatBlock, Text, Value } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatBlock>
      <Text>
        Good<Value>{good}</Value>
      </Text>
      <Text>
        Neutral<Value>{neutral}</Value>
      </Text>
      <Text>
        Bad<Value>{bad}</Value>
      </Text>
      <Text>
        Total<Value>{total}</Value>
      </Text>
      <Text>
        Positive feedback
        <Value>{positivePercentage}%</Value>
      </Text>
    </StatBlock>
  );
};

export default Statistics;

Statistics.propType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
