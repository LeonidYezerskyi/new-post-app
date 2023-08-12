import { useState } from 'react';
import css from './TrackingForm.module.css'

const TrackingForm = ({ onTrack }) => {
    const [ttnNumber, setTtnNumber] = useState('');

    const handleInputChange = (e) => {
        setTtnNumber(e.target.value);
    };

    const handleTrack = () => {
        onTrack(ttnNumber);
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

export default TrackingForm