import { useState } from 'react';
import PropTypes from "prop-types";
import { getPostOffices } from '../../services/api';
import { showErrorMessage, showSuccessMessage } from '../../notifications/Toast';
import css from './OfficeForm.module.css'

const OfficeForm = ({ setPostOffices, setIsLoading }) => {
    const [city, setCity] = useState('');

    const handleChange = (event) => {
        setCity(event.target.value)
    }

    const handleClick = async (e) => {
        e.preventDefault();

        if (city) {
            await fetchPostOffices();
        }
        else {
            showErrorMessage("Please select a city")
        }
    }

    const fetchPostOffices = async () => {
        try {
            setIsLoading(true);

            const response = await getPostOffices(city);
            const data = response.data;
            setPostOffices(data);
            setCity("")
            showSuccessMessage("Receiving the list of offices successful")
        } catch (error) {
            console.error('Error fetching post offices:', error);
            showErrorMessage("Error fetching post offices. Try again later")
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
    setPostOffices: PropTypes.func.isRequired,
    setIsLoading: PropTypes.func.isRequired,
}

export default OfficeForm