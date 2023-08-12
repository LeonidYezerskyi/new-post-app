import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import css from './CheckHistory.module.css'

const CheckHistory = ({ onSelectHistoryItem }) => {
    const history = useSelector(state => state.history);

    return (
        <div className={css.historyWrapper}>
            <h2>History</h2>
            <ul>
                {history.map((item, index) => (
                    <li className={css.listItem} key={index} onClick={() => onSelectHistoryItem(item.ttnNumber)}>
                        <span className={css.text}>{index + 1}. {item.ttnNumber}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

CheckHistory.propTypes = {
    onSelectHistoryItem: PropTypes.func.isRequired,
};

export default CheckHistory