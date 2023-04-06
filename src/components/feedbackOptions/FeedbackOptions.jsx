import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({handleOnClick, options}) {
    return (        
        <div className={css['btn-box']}>
            {options.map((option) => {
                return <button key={option} type="button" name={option} onClick={handleOnClick} className={css['btn-item']}>{option}</button>
            })}
        </div>    
    )
}

FeedbackOptions.propTypes = {
    handleOnClick: PropTypes.func.isRequired, 
    options: PropTypes.arrayOf(PropTypes.string),
}