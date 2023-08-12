import css from './CheckHistory.module.css'

const CheckHistory = () => {
    return (
        <div className={css.historyWrapper}>
            <h2>History</h2>
            <ul>
                <li className={css.text}>Kyiv</li>
            </ul>
        </div>
    )
}

export default CheckHistory