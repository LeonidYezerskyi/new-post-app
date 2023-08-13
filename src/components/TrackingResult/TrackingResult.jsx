import PropTypes from 'prop-types';
import Loader from "../Loader/Loader"
import css from './TrackingResult.module.css'

const TrackingResult = ({ status, isLoading }) => {
    if (status === null) {
        return <div className={css.resultWrapper}>
            <p className={css.text}>No valid parcel number selected for delivery status</p>
            {isLoading && <Loader />}
        </div>
    }

    return (
        <div className={css.resultWrapper}>
            <p className={css.text}>Delivery status: <span>{status?.Status}</span></p>
            <p className={css.text}>Sent: <span>{status?.DateCreated} {status?.WarehouseSender}, {status?.CitySender}</span></p>
            <p className={css.text}>Received: <span>{status?.RecipientDateTime} {status?.WarehouseRecipient}, {status?.CityRecipient}</span></p>
            {isLoading && <Loader />}

        </div>
    )
}

TrackingResult.propTypes = {
    status: PropTypes.shape({
        Status: PropTypes.string.isRequired,
        DateCreated: PropTypes.string,
        WarehouseSender: PropTypes.string.isRequired,
        CitySender: PropTypes.string.isRequired,
        RecipientDateTime: PropTypes.string.isRequired,
        WarehouseRecipient: PropTypes.string.isRequired,
        CityRecipient: PropTypes.string.isRequired,
    }),
    isLoading: PropTypes.bool.isRequired,
};

export default TrackingResult