import React from 'react';

import './overlay.scss';

const Overlay = (props) => {
  return (
    <div className={props.submitted ? 'submitted overlay' : 'overlay'}>
      <form className='form'>
        <div className='form__inputs'>
          <label className='form__label'>
            First Name:
            <input
              className='form__input'
              value={props.firstName}
              onChange={(e) => props.setFirstName(e.target.value)}
            />
          </label>
          <label className='form__label'>
            Last Name:
            <input className='form__input' />
          </label>
          <label className='form__label'>
            UserName:
            <input className='form__input' />
          </label>
        </div>
        <p className='fyi'>*NOT REQUIRED*</p>
        <input
          onClick={(e) => {
            e.preventDefault();
            props.setFormSubmitted(true);
          }}
          type='submit'
          value='Submit'
          className='form__submit'
        />
      </form>
    </div>
  );
};

export default Overlay;
