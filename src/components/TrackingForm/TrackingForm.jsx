import { useState } from 'react';
import PropTypes from 'prop-types';
import { showErrorMessage } from '../../notifications/Toast';
import css from './TrackingForm.module.css'

const TrackingForm = ({ onTrack, ttnNumber, setTtnNumber }) => {
    const [isValidTtn, setIsValidTtn] = useState(false);

    const handleInputChange = (e) => {
        const inputTtnNumber = e.target.value;
        setTtnNumber(inputTtnNumber);
        validateTtnNumber(inputTtnNumber);
    };

    const handleTrack = (e) => {
        e.preventDefault();

        if (isValidTtn && ttnNumber.trim() !== '') {
            onTrack(ttnNumber);
        } else {
            setTtnNumber("");
            return showErrorMessage("An invoice number must contain 11-14 digits without spaces");
        }
    };

    const validateTtnNumber = (inputTtnNumber) => {
        const ttnPattern = /^[0-9]{11,14}$/;

        setIsValidTtn(ttnPattern.test(inputTtnNumber));
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