import CheckHistory from '../../components/CheckHistory/CheckHistory'
import TrackingForm from '../../components/TrackingForm/TrackingForm'
import TrackingResult from '../../components/TrackingResult/TrackingResult'
import css from './HomePage.module.css'

const HomePage = () => {
    return (
        <div className={css.homeContainer}>
            <TrackingForm />
            <div className={css.resultWrapper}>
                <TrackingResult />
                <CheckHistory />
            </div>
        </div>
    )
}

export default HomePage