import { useState } from 'react'
import CheckHistory from '../../components/CheckHistory/CheckHistory'
import TrackingForm from '../../components/TrackingForm/TrackingForm'
import TrackingResult from '../../components/TrackingResult/TrackingResult'
import css from './HomePage.module.css'
import { trackDelivery } from '../../services/api'
import { showSuccessMessage } from '../../components/notifications/Toast'

const HomePage = () => {
    const [trackingStatus, setTrackingStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleTrack = async (ttnNumber) => {
        try {
            setIsLoading(true)

            const status = await trackDelivery(ttnNumber);
            setTrackingStatus(status);
            showSuccessMessage("Status details received")
        } catch (error) {
            console.error('Error tracking:', error);
            setTrackingStatus(null);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={css.homeContainer}>
            <TrackingForm onTrack={handleTrack} />
            <div className={css.resultWrapper}>
                <TrackingResult status={trackingStatus} isLoading={isLoading} />
                <CheckHistory />
            </div>
        </div>
    )
}

export default HomePage