import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {

    // // Extraer los valores
    const { name, main } = resultado;

    if(!name) return null;

    const kelvin = 273.15;

    return (
        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>El clima de {name}</h2>
                <p className='temperatura'>
                    {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span> &#x2103;</span>
                </p>
                <p>Humedad {main.humidity} <span> %</span>
                </p>
                <p>Presión armosférica {main.pressure} <span> hPa</span>
                </p>
            </div>
        </div>
    );
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}
 
export default Clima;