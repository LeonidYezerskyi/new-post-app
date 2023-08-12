import { useSelector } from 'react-redux';
import css from './CheckHistory.module.css'

const CheckHistory = () => {
    const history = useSelector(state => state.history);

    return (
        <div className={css.historyWrapper}>
            <h2>History</h2>
            <ul>
                {history.map((item, index) => (
                    <li className={css.listItem} key={index}>
                        <span className={css.text}>{index + 1}. {item.ttnNumber}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CheckHistory