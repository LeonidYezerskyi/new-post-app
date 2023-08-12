import css from './TrackingForm.module.css'

const TrackingForm = () => {
    return (
        <div className={css.formWrapper}>
            <input
                className={css.input}
                placeholder='Write your tracking number'
                type="text"
            />
            <button className={css.btn} type='button'>Get status TTN</button>
        </div>
    )
}

export default TrackingForm