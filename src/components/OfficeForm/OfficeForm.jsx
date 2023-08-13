import { useState } from 'react';
import PropTypes from "prop-types";
import { getPostOffices } from '../../services/api';
import { showErrorMessage, showSuccessMessage } from '../../notifications/Toast';
import css from './OfficeForm.module.css'

const OfficeForm = ({ setPostOffices, setIsLoading }) => {
    const [city, setCity] = useState('');
    const [isValidСity, setIsValidCity] = useState(false);

    const handleChange = (event) => {
        const cityInput = event.target.value;
        setCity(cityInput);
        validateCity(cityInput);
    }

    const validateCity = (cityInput) => {
        const cityPattern = /^[А-Яа-яЇїІіЄєҐґ\s']+$/;

        setIsValidCity(cityPattern.test(cityInput));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        if (city && isValidСity) {
            await fetchPostOffices();
        }
        else {
            setCity("");
            showErrorMessage("Choose the correct city name. Only the Ukrainian language, no digits")
        }
    }

    const fetchPostOffices = async () => {
        try {
            setIsLoading(true);

            const response = await getPostOffices(city);
            const data = response.data;

            if (data.length === 0) {
                setCity("");
                setPostOffices("");
                return showErrorMessage("Couldn't find any offices in such city")
            }

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