import { useState } from 'react';
import OfficeForm from '../../components/OfficeForm/OfficeForm'
import OfficesList from '../../components/OfficesList/OfficesList'
import css from './OfficesPage.module.css'

const OfficesPage = () => {
    const [postOffices, setPostOffices] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div>
            <div className={css.menuWrapper}>
                <h1 className={css.title}>List of branches</h1>
                <OfficeForm setPostOffices={setPostOffices} setIsLoading={setIsLoading} />
            </div>

            <OfficesList postOffices={postOffices} isLoading={isLoading} />
        </div>
    )
}

export default OfficesPage