import React , { useState } from 'react';
import TechSelectOptions from '../techs/TechSelectOptions';
import PropTypes from 'prop-types';
import { connect  } from 'react-redux';
import { addLog } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';


const AddLogModel = ({ addLog }) => {
    const [ message , setMessage] = useState('');
    const [attention , setAttetion] = useState(false);
    const [tech , setTech] = useState('');


  const onSubmit = (e) => {
      e.preventDefault();
      if(message === '' || tech === '') {
          M.toast({ html : 'Please Enter Field...'})
      } else {
       const newLog = { 
           message ,
           attention,
           tech,
           date : new Date()
       }
       addLog(newLog);
      M.toast({ html : `Log Added By ${tech}`});

        // Clear Fields
        setMessage('');
        setAttetion('');
        setTech(false);
      }
  }

    return (
        <div id="add-log-modal" className='modal' style={modelStyle} >
            <div className='model-content'>
              <h4 className='green-text'>Enter System Log </h4> 
               <div className='row'>
                  <div className='input-field'>
                      <input type='text' 
                      name='message' 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)} />
                      <label htmlFor='message' className='active'>
                          Log Message
                      </label>
                  </div>
               </div>

               <div className='row'>
                   <div className='input-field'>
                       <select name='tech'
                               value={tech} 
                               className='browser-default'
                               onChange={(e) => setTech(e.target.value)}>
                           <option value='' disabled>
                               Select Technician
                           </option>
                        <TechSelectOptions />
                       </select>
                   </div>
               </div>

               <div className='row'>
                   <div className='input-field'>
                       <p>
                           <label>
                               <input type="checkbox" 
                                className="filled-in" 
                                checked={attention} 
                                value={attention} 
                                onChange={(e) => setAttetion(e.currentTarget.checked)}
                            />
                             <span> Needs Attention </span>
                           </label>
                       </p>
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

const modelStyle = {
    width : '75%',
    height : '75%'
}

AddLogModel.propTypes = {
    addLog : PropTypes.func.isRequired
}


export default connect(null , { addLog }) (AddLogModel);
