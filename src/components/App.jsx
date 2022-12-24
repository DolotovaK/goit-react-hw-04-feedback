import { useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistic } from "./Statistic/Statistic";


export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  function handleFeedback (option) {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1)
        break;
      
        default:
        throw new Error(`There is no ${option}`);
    }
  };

  const totalFeedback = good + neutral + bad;
  
  const positiveFeedbackPercentage = Math.round(good / totalFeedback * 100);
  
return (
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions onHandleFeedback={handleFeedback} options = {options } />
        </Section>
        
      <Section title="Statistic:">  
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positiveFeedbackPercentage} />
      </Section>
      </>
      
    )

}


// export class App extends Component{
   
// state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }

  // handleFeedback = evt => {
  //   const currentType = evt.currentTarget.name;
  //   this.setState(prevState => ({ [currentType]: prevState[currentType] + 1 }));
  //   // console.log(5)
  // };
  
//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage() {
//     const { good } = this.state;
//     return Math.round(good / this.countTotalFeedback() * 100);
//   }

//   render() {
//     return (
//       <>
//       <Section title="Please leave feedback">
//         <FeedbackOptions onHandleFeedback={ this.handleFeedback} options = {['good', 'neutral', 'bad'] } />
//         </Section>
        
//       <Section title="Statistic:">  
//         <Statistic
//           good={this.state.good}
//           neutral={this.state.neutral}
//           bad={this.state.bad}
//           total={this.countTotalFeedback()}
//           positivePercentage={this.countPositiveFeedbackPercentage()} />
//       </Section>
//       </>
      
//     )
//   }
// }



