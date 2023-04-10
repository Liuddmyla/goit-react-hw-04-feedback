import { useState } from 'react';
import  Statistics  from './statistics/Statistics';
import  FeedbackOptions  from './feedbackOptions/FeedbackOptions';
import  Section  from './section/Section';
import Notification from './notification/Notification';



export default function App() {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const handleOnClick = (e) => {
    const event = e.currentTarget.name;

    if (event === 'good') {
      setGood(() => { return (good + 1) });
    }

    if (event === 'neutral') {
      setNeutral(() => { return (neutral + 1) });
    }

    if (event === 'bad') {
      setBad(() => { return (bad + 1) });
    }   
  }  

  const countTotalFeedback = () => {
    let sum = 0;
    [good, neutral, bad].map(e => {
      return sum += e;
    })
    return sum;
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round((100 * good) / countTotalFeedback());
  }    
    
  return (    
    <Section title="Please leave feedback">

    <FeedbackOptions options={Object.keys({ good, neutral, bad })} handleOnClick={handleOnClick} />
        
      {countTotalFeedback() >= 1 ? (<Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()} />) : <Notification message="There is no feedback" />}
          
    </Section>     
  );
}
 

