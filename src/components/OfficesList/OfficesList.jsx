import PropTypes from "prop-types";
import css from './OfficesList.module.css'

const OfficesList = ({ postOffices }) => {

    return (
        <div className={css.listContainer}>
            <ul className={css.listWrapper}>
                {postOffices.map(postOffice => {
                    return (
                        < li key={postOffice.Number}>
                            <p>{postOffice.Description}</p>
                            <p>{postOffice.CityDescription}, {postOffice.SettlementAreaDescription}</p>
                        </li>)
                })}
            </ul>
        </div >
    )
}

OfficesList.propTypes = {
    postOffices: PropTypes.arrayOf(PropTypes.shape({
        Number: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        CityDescription: PropTypes.string.isRequired,
        SettlementAreaDescription: PropTypes.string.isRequired,
    })).isRequired,
}

export default OfficesList