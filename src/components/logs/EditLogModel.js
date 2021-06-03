import React , { useState , useEffect } from 'react';
import TechSelectOptions from '../techs/TechSelectOptions';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  updateLog , clearCurrent } from '../../actions/logActions';

const EditLogModel = ({  current , updateLog , clearCurrent }) => {
    const [ message , setMessage] = useState('');
    const [attention , setAttetion] = useState(false);
    const [tech , setTech] = useState('');


  useEffect(() => {
      if (current) {
          setMessage(current.message);
          setAttetion(current.attention);
          setTech(current.tech);
      } else {
        setMessage('');
        setAttetion('');
        setTech('');
      }
      // eslint-disable-next-line
  },[current])

  const onSubmit = (e) => {
      e.preventDefault();
      if(message === '' || tech === '') {
          M.toast({ html : 'Please Enter Field...'})
      } else {
       const updatedLog = {
           id : current.id,
           message,
           attention,
           tech,
           date : new Date()
       }

       updateLog(updatedLog);
       M.toast({ html : `Log Updated By ${tech}` });

        // Clear Fields
        setMessage('');
        setAttetion('');
        setTech(false);
      }
  }

 
  const clearAll = () => {
      clearCurrent();
  }

    return (
        <div id="edit-log-modal" className='modal' style={modelStyle} >
            <div className='model-content'>
              <h4 className='green-text'>Enter System Log </h4> 
               <div className='row'>
                  <div className='input-field'>
                      <input type='text' 
                      name='message' 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)} />
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
                </a>{' '}
                { current && <div>
                  <button style={{ margin : 'auto 100px' , bottom : '35px'}} className="waves-effect waves-light btn" onClick={clearAll}>RESET</button>
                  </div>}
            </div>
        </div>
    )
}

const modelStyle = {
    width : '75%',
    height : '75%'
}

EditLogModel.propTypes = {
    current : PropTypes.object,
    updateLog : PropTypes.func.isRequired,
    clearCurrent : PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    current : state.log.current
})

export default connect(mapStateToProps , { updateLog , clearCurrent })(EditLogModel);
