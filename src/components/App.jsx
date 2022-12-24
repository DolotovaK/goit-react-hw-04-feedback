import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistic } from "./Statistic/Statistic";

export class App extends Component{
   
state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleFeedback = evt => {
    const currentType = evt.currentTarget.name;
    this.setState(prevState => ({ [currentType]: prevState[currentType] + 1 }));
    // console.log(5)
  };
  
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round(good / this.countTotalFeedback() * 100);
  }

  render() {
    return (
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions onHandleFeedback={ this.handleFeedback} options = {['good', 'neutral', 'bad'] } />
        </Section>
        
      <Section title="Statistic:">  
        <Statistic
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()} />
      </Section>
       
        {/* <p>Statistic</p>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutural: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>Positive persentage: </li>
        </ul> */}
      </>
      
    )
  }
}



