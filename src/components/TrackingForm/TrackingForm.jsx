import PropTypes from 'prop-types';
import { showErrorMessage } from '../../notifications/Toast';
import css from './TrackingForm.module.css'

const TrackingForm = ({ onTrack, ttnNumber, setTtnNumber }) => {

    const handleInputChange = (e) => {
        setTtnNumber(e.target.value);
    };

    const handleTrack = () => {
        if (ttnNumber) { onTrack(ttnNumber) }
        else {
            showErrorMessage("Please write an invoice number")
        }
    };

    return (
        <div className={css.formWrapper}>
            <input
                className={css.input}
                placeholder='Write your tracking number'
                type="text"
                value={ttnNumber}
                onChange={handleInputChange}
            />
            <button className={css.btn} type='button' onClick={handleTrack}>Get status TTN</button>
        </div>
    )
}

TrackingForm.propTypes = {
    onTrack: PropTypes.func.isRequired,
    setTtnNumber: PropTypes.func.isRequired,
    ttnNumber: PropTypes.string.isRequired,
};

export default TrackingForm