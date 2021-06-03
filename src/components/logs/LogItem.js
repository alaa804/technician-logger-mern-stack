import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { deleteLog  , setCurrent } from '../../actions/logActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log : { id , tech , date , message , attention } , deleteLog , setCurrent }) => {


  const onDelete = () => {
    deleteLog(id);
    M.toast({ html : `Log with the ID of ${id} deleted` })
  }

  return (
    <li className='collection-item'>
      <div>
        <a
          onClick={() => setCurrent({ id  , message , date , tech , attention })}
          href='#edit-log-modal'
          className={`modal-trigger ${
            attention ? 'red-text' : 'blue-text'
          }`}
                  >
          {message}
        </a>
        <br />
        <span className='green-text'>
          <span className='black-text'>ID #{id}</span> last updated by{' '}
          <span className='black-text'>{tech}</span> on{' '}
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{date}</Moment>
        </span>
        <a href='#!' onClick={onDelete} className="secondary-content">
             <i className="material-icons red-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};



export default connect(null, { deleteLog , setCurrent})(LogItem);