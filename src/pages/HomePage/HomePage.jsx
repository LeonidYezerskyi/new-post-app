import { useState } from 'react'
import { trackDelivery } from '../../services/api'
import CheckHistory from '../../components/CheckHistory/CheckHistory'
import TrackingForm from '../../components/TrackingForm/TrackingForm'
import TrackingResult from '../../components/TrackingResult/TrackingResult'
import { showSuccessMessage } from '../../notifications/Toast'
import css from './HomePage.module.css'
import { useDispatch } from 'react-redux';
import { addToHistory } from '../../redux/historySlice';

const HomePage = () => {
    const [trackingStatus, setTrackingStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const handleTrack = async (ttnNumber) => {
        try {
            setIsLoading(true)

            const status = await trackDelivery(ttnNumber);
            setTrackingStatus(status);
            showSuccessMessage("Status details received")
            dispatch(addToHistory(ttnNumber));
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