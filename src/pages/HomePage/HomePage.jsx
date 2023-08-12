import { useState } from 'react'
import CheckHistory from '../../components/CheckHistory/CheckHistory'
import TrackingForm from '../../components/TrackingForm/TrackingForm'
import TrackingResult from '../../components/TrackingResult/TrackingResult'
import css from './HomePage.module.css'
import { trackDelivery } from '../../services/api'

const HomePage = () => {
    const [trackingStatus, setTrackingStatus] = useState(null);

    const handleTrack = async (ttnNumber) => {
        try {
            const status = await trackDelivery(ttnNumber);
            setTrackingStatus(status);
        } catch (error) {
            console.error('Error tracking:', error);
            setTrackingStatus(null);
        }
    };

    return (
        <div className={css.homeContainer}>
            <TrackingForm onTrack={handleTrack} />
            <div className={css.resultWrapper}>
                <TrackingResult status={trackingStatus} />
                <CheckHistory />
            </div>
        </div>
    )
}

export default HomePage