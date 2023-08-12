import PropTypes from "prop-types";
import css from './OfficesList.module.css'
import Loader from "../Loader/Loader";

const OfficesList = ({ postOffices, isLoading }) => {

    return (
        <div className={css.listContainer}>

            <ul className={css.listWrapper}>
                {isLoading && <Loader />}

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
    isLoading: PropTypes.bool.isRequired,
}

export default OfficesList