import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { trackDelivery } from '../../services/api'
import CheckHistory from '../../components/CheckHistory/CheckHistory'
import TrackingForm from '../../components/TrackingForm/TrackingForm'
import TrackingResult from '../../components/TrackingResult/TrackingResult'
import { showSuccessMessage } from '../../notifications/Toast'
import { addToHistory } from '../../redux/historySlice';
import css from './HomePage.module.css'

const HomePage = () => {
    const [trackingStatus, setTrackingStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [ttnNumber, setTtnNumber] = useState('');
    const dispatch = useDispatch();

    const handleTrack = async (ttnNumber) => {
        try {
            setIsLoading(true)

            const status = await trackDelivery(ttnNumber);
            setTrackingStatus(status);
            showSuccessMessage("Status details received successfully")
            dispatch(addToHistory(ttnNumber));
        } catch (error) {
            console.error('Error tracking:', error);
            setTrackingStatus(null);
        } finally {
            setIsLoading(false);
        }
    };

    const handleHistoryItemClick = (ttnNumber) => {
        setTtnNumber(ttnNumber);
        handleTrack(ttnNumber);
    };

    return (
        <div className={css.homeContainer}>
            <TrackingForm onTrack={handleTrack} ttnNumber={ttnNumber} setTtnNumber={setTtnNumber} />
            <div className={css.resultWrapper}>
                <TrackingResult status={trackingStatus} isLoading={isLoading} />
                <CheckHistory onSelectHistoryItem={handleHistoryItemClick} history={history} />
            </div>
        </div>
    )
}

export default HomePage