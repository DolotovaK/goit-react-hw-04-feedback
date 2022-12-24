import { PropTypes } from "prop-types"
import css from "./FeedbackOptions.module.css";

export const FeedbackOptions = ({ options, onHandleFeedback }) =>{
    return (
        <section>
            {options.map((option, idx) => {
                return <button type="button" key={idx} onClick={()=>onHandleFeedback(option)} className={css.button}>{option}</button>
            })}

        </section>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onHandleFeedback: PropTypes.func.isRequired

}