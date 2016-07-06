/**
 * Created by cjpowers on 6/26/16.
 */
import React, {PropTypes} from 'react';

const SelectInput = ({ name, onChange, defaultOption, value, error, options, className}) => {
  return (
    <div>
      <div>
          <select
            name={name}
            value={value}
            onChange={onChange}
            className={className}>
            <option value="">{defaultOption}</option>
            {options.map((option) => {
              return <option key={option.value} value={option.value}>{option.text}</option>;
            })
            }
            </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption:PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
