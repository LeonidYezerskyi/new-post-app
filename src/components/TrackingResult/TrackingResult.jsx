import css from './TrackingResult.module.css'

const TrackingResult = ({ status }) => {
    return (
        <div className={css.resultWrapper}>
            <p className={css.text}>Delivery status: <span>{status.Status}</span></p>
            <p className={css.text}>Sent: <span>{status.DateCreated}, {status.WarehouseSender}, {status.CitySender}</span></p>
            <p className={css.text}>Received: <span>{status.RecipientDateTime}, {status.WarehouseRecipient}, {status.CityRecipient}</span></p>
        </div>
    )
}

export default TrackingResult