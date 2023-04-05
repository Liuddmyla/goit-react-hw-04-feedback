import React from 'react';
import { Statistics } from './statistics/Statistics';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Section } from './section/Section';
import { Notification } from './notification/Notification';

class App extends React.Component{
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  
  handleOnClick = (e) => {
   const event = e.currentTarget.name;

    this.setState(prevState => {      
      return {
        [event]: prevState[event] + 1,
      }
    })
  }  

  countTotalFeedback = () => {
    let sum = 0;
    Object.values(this.state).map(e => {
      return sum += e;
    })
    return sum;
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round((100 * this.state.good) / this.countTotalFeedback());
  }

  render() {

    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    
    return (
      <>
        <Section title="Please leave feedback">

          <FeedbackOptions options={Object.keys(this.state)} handleOnClick={this.handleOnClick} >
          </FeedbackOptions>
          {total >= 1 ? (<Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positivePercentage}>      
          </Statistics>) : <Notification message="There is no feedback"></Notification>}
          
        </Section>        
      </>
    );
  }
}
export default App;


