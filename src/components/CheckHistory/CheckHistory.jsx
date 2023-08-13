import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { clearHistory } from '../../redux/historySlice';
import css from './CheckHistory.module.css'

const CheckHistory = ({ onSelectHistoryItem }) => {
    const dispatch = useDispatch();

    const history = useSelector(state => state.history);

    const handleClick = () => { dispatch(clearHistory()) };

    return (
        <div className={css.historyWrapper}>
            <div className={css.menuWrapper}>
                <h2>History</h2>
                <button className={css.btn} type='button' onClick={handleClick}>Clear all</button>
            </div>
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