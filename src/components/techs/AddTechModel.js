import React , { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTech } from '../../actions/techActions';

const AddTechModel = ({ addTech }) => {
    const [ firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');

  const onSubmit = (e) => {
      e.preventDefault();
      if(firstName === '' || lastName === '') {
          M.toast({ html : 'Please Enter Field...'})
      } else {
      addTech({
          firstName,
          lastName
       })
        // Clear Fields
        setFirstName('');
        setLastName('');
      }
  }

    return (
        <div id="add-tech-modal" className='modal' >
            <div className='model-content'>
              <h4 className='green-text'>New Technician </h4> 
               <div className='row'>
                  <div className='input-field'>
                      <input type='text' 
                      name='firstName' 
                      value={firstName} 
                      onChange={(e) => setFirstName(e.target.value)} />
                      <label htmlFor='firstName' className='active'>
                          FirstName
                      </label>
                  </div>
               </div>

               <div className='row'>
                  <div className='input-field'>
                      <input type='text' 
                      name='lastName' 
                      value={lastName} 
                      onChange={(e) => setLastName(e.target.value)} />
                      <label htmlFor='lastName' className='active'>
                          LastName
                      </label>
                  </div>
               </div>

            
            </div>
            <div className='model-footer'>
                <a href='#!' onClick={onSubmit} className='modal-close waves-effect blue btn'>{' '}
                   Enter
                </a>
            </div>
        </div>
    )
}

AddTechModel.propTypes = {
 addTech : PropTypes.func.isRequired,
}

export default connect(null , { addTech }) (AddTechModel);
