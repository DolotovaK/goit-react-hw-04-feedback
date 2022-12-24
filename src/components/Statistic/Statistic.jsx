import { PropTypes } from "prop-types"
import { Notification } from "components/Notification/Notification"

export const Statistic =({good, neutral, bad, total, positivePercentage })=> {
    
    if (total > 0) 
          return (
        <section>
          <ul>
            <li>Good: {good}</li>
            <li>Neutural: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive persentage: { positivePercentage} %</li>
        </ul> 
       </section> ) 
    return <Notification message="There is no feedback"/>  
}

Statistic.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,

}