import CheckHistory from '../../components/CheckHistory/CheckHistory'
import TrackingForm from '../../components/TrackingForm/TrackingForm'
import TrackingResult from '../../components/TrackingResult/TrackingResult'
import css from './HomePage.module.css'

const HomePage = () => {
    return (
        <>
            <TrackingForm />
            <TrackingResult />
            <CheckHistory />
        </>
    )
}

export default HomePage