import css from './TrackingResult.module.css'

const TrackingResult = () => {
    return (
        <div className={css.resultWrapper}>
            <p className={css.text}>Delivery status: <span>Received</span></p>
            <p className={css.text}>Sent: <span>Yesterday</span></p>
            <p className={css.text}>Received: <span>Today</span></p>
        </div>
    )
}

export default TrackingResult