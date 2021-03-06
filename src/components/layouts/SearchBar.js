import React , { useRef } from 'react'
import { connect  } from 'react-redux';
import PropTypes from 'prop-types'
import {  searchLogs , clearLogs } from '../../actions/logActions';

const SearchBar = ({ searchLogs , clearLogs}) => {
  const text = useRef('');


  const onChange = e => {
    if(text.current.value !== '') {
      searchLogs(e.target.value)
    } else {
       clearLogs();
    }
  }

    return (
        <nav style={{ marginBottom : '40px' }} className="green">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input id="search"
               type="search" 
               placeholder="Search Logs..." 
               ref={text} 
               onChange={onChange}
               />
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    )

}

SearchBar.propTypes = {
 searchLogs: PropTypes.func.isRequired,
 clearLogs: PropTypes.func.isRequired
}

export default connect( null , { searchLogs , clearLogs}) (SearchBar);

