import PropTypes from "prop-types";
import Loader from "../Loader/Loader";
import css from './OfficesList.module.css'

const OfficesList = ({ postOffices, isLoading }) => {

    return (
        <div className={css.listSection}>
            {postOffices.length === 0 && (<p className={css.noItem}>No branches have been selected here yet</p>)}
            {isLoading && <Loader />}

            {postOffices.length > 0 && <div className={css.listContainer}>
                <ul className={css.listWrapper}>

                    {postOffices.map((postOffice, index) => {
                        return (
                            < li key={postOffice.Number}>
                                <p className={css.listItem}>{index + 1}. {postOffice.Description}, {postOffice.CityDescription}, {postOffice.SettlementAreaDescription}</p>
                            </li>)
                    })}
                </ul>
            </div >}
        </div>

    )
}

OfficesList.propTypes = {
    postOffices: PropTypes.arrayOf(PropTypes.shape({
        Number: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        CityDescription: PropTypes.string.isRequired,
        SettlementAreaDescription: PropTypes.string.isRequired,
    })).isRequired,
    isLoading: PropTypes.bool.isRequired,
}

export default OfficesList