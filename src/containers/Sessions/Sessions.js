import React from 'react';
import { connect } from 'react-redux';
import './Sessions.css';

export const Sessions = () => {
  return (
    <div className="Sessions">
      <h1>Sessions</h1>
    </div>
  )
}

const mapStateToProps = store => ({
  
})

const mapDispatchToProps = () => ({

})

export default connect(mapStateToProps, null)(Sessions);