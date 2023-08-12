import { useState } from 'react';
import PropTypes from "prop-types";
import css from './OfficeForm.module.css'
import { getPostOffices } from '../../services/api';

const OfficeForm = ({ setPostOffices, setIsLoading }) => {
    const [city, setCity] = useState('');

    const handleChange = (event) => {
        setCity(event.target.value)
    }

    const handleClick = async (e) => {
        e.preventDefault();
        await fetchPostOffices();
    }

    const fetchPostOffices = async () => {
        try {
            setIsLoading(true);

            const response = await getPostOffices(city);
            const data = response.data;
            setPostOffices(data);
            setCity("")
        } catch (error) {
            console.error('Error fetching post offices:', error);
        } finally {
            setIsLoading(false);
        }

    };

    return (
        <div className={css.formWrapper}>
            <input
                className={css.input}
                placeholder='Enter the name of the city'
                type="text"
                value={city}
                onChange={handleChange}
            />
            <button className={css.btn} type='button' onClick={handleClick}>Search</button>
        </div>
    )
}

OfficeForm.propTypes = {
    setPostOffices: PropTypes.func.isRequired
}

export default OfficeForm