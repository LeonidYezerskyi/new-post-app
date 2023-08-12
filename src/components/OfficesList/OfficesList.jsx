import css from './OfficesList.module.css'

const OfficesList = () => {
    return (
        <div className={css.listContainer}>
            <h1 className={css.title}>List of branches</h1>
            <ul className={css.listWrapper}>
                <li >Description</li>
            </ul>
        </div>
    )
}

export default OfficesList