import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const RegisterUserForm = ({ user, className, onSave, onDelete, onChange, loading, errors}) => {
  return (
    <div className="manage-user-form">
      <div className="manage-user-options">
        <form>
        
          <h4>First Name<span className="asterisk">*</span></h4>
          <TextInput
            type="text"
            name="firstname"
            label="firstname"
            value={user.firstname}
            onChange={onChange}
            error=""
            className="register-form-standard"/>
  
          <h4>Last Name<span className="asterisk">*</span></h4>
          <TextInput
            type="text"
            name="lastname"
            label="lastname"
            value={user.lastname}
            onChange={onChange}
            error=""
            className="register-form-standard"/>
  
          <h4>Email<span className="asterisk">*</span></h4>
          <TextInput
            type="email"
            name="email"
            label="email"
            value={user.email}
            onChange={onChange}
            error=""
            className="register-form-standard"/>
  
          <h4>Password<span className="asterisk">*</span></h4>
          <TextInput
            type="password"
            name="password"
            label="Password"
            value={user.password}
            onChange={onChange}
            error=""
            className="register-form-standard"/>
  
          <h4>Username<span className="asterisk">*</span></h4>
          <TextInput
            type="text"
            name="username"
            label="username"
            value={user.username}
            onChange={onChange}
            error=""
            className="register-form-standard"/>
  
          <h4>Phone<span className="asterisk">*</span></h4>
          <TextInput
            type="text"
            name="phone"
            label="phone"
            value={user.phone}
            onChange={onChange}
            error=""
            className="register-form-standard"/>
  
          <h4>Street Address<span className="asterisk">*</span></h4>
          <TextInput
            type="text"
            name="street"
            label="street"
            value={user.street}
            onChange={onChange}
            error=""
            className="register-form-standard"/>
  
          <h4>Street Address 2<span className="asterisk">*</span></h4>
          <TextInput
            type="text"
            name="street2"
            label="street2"
            value={user.street2}
            onChange={onChange}
            error=""
            className="register-form-standard"/>
  
          <h4>City<span className="asterisk">*</span></h4>
          <TextInput
            type="text"
            name="city"
            label="city"
            value={user.city}
            onChange={onChange}
            error=""
            className="register-form-standard"/>
  
          <h4>State<span className="asterisk">*</span></h4>
          <TextInput
            type="text"
            name="state"
            label="state"
            value={user.state}
            onChange={onChange}
            error=""
            className="register-form-standard"/>
  
          <h4>Zip<span className="asterisk">*</span></h4>
          <TextInput
            type="text"
            name="zip"
            label="zip"
            value={user.zip}
            onChange={onChange}
            error=""
            className="register-form-standard"/>
  
  
          <input
            type="submit"
            disabled={loading}
            value={loading ? 'Saving...' : 'Save' }
            className="btn btn-primary"
            onClick={onSave}
            className="register-form-save-btn"/>
  
        </form>
      </div>
    </div>
  );
};

RegisterUserForm.propTypes = {
  user: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default RegisterUserForm;
