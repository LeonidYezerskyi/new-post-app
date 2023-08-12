import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './TrackingForm.module.css'
import { showErrorMessage } from '../notifications/Toast';

const TrackingForm = ({ onTrack }) => {
    const [ttnNumber, setTtnNumber] = useState('');

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
};

export default TrackingForm