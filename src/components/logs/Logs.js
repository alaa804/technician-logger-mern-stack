import React , { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLogs } from '../../actions/logActions';
import LogItem from './LogItem';
import Preloader from '../layouts/Preloader';

const Logs = ({ log : { logs , loading } , getLogs  }) => {
   
 useEffect(() => {
     getLogs();
    // eslint-disable-next-line
 },[])

   
    if(loading || logs === null) return <Preloader />;

    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="green-text center">
                    System Logs
                </h4>
            </li>
          
            {!loading && logs.length === 0 ? (
        <p style={ textStyle } className='red-text center'>No logs to show...</p>
      ) : (
        logs.map(log => <LogItem log={log} key={log.id} />)
      )}
        </ul>
    )
}

const mapStateToProps = state => ({
    log: state.log
})

const textStyle = {
    'font-size' : '24px',
    'font-weight' : '500'
}

Logs.propTypes = {
    log :PropTypes.object.isRequired,
}

export default connect(mapStateToProps , { getLogs })(Logs); 
