import React, { Component } from 'react';
import TreatmentPlanModule from '../../containers/TreatmentPlanModule/TreatmentPlanModule';
import './TreatmentPlans.css';

class TreatmentPlans extends Component {
  constructor() {
    super();

    this.state = {
      currentTab: 'modulation'
    };
  }

  handleTabChange = name => {
    this.setState({ currentTab: name });
  };

  render() {
    const { currentTab } = this.state;

    return (
      <div className="TreatmentPlans">
        <div className="treatment-header-tabs">
          <div
            className={
              currentTab === 'modulation'
                ? 'treatment-header treatment-header-active treatment-header-modulation'
                : 'treatment-header treatment-header-modulation'
            }
            onClick={() => this.handleTabChange('modulation')}
          >
            <h4>Modulation</h4>
          </div>

          <div
            className={
              currentTab === 'postural'
                ? 'treatment-header treatment-header-active'
                : 'treatment-header'
            }
            onClick={() => this.handleTabChange('postural')}
          >
            <h4>Postural</h4>
          </div>

          <div
            className={
              currentTab === 'sensory'
                ? 'treatment-header treatment-header-active'
                : 'treatment-header'
            }
            onClick={() => this.handleTabChange('sensory')}
          >
            <h4>Sensory Discrimination</h4>
          </div>

          <div
            className={
              currentTab === 'social'
                ? 'treatment-header treatment-header-active'
                : 'treatment-header'
            }
            onClick={() => this.handleTabChange('social')}
          >
            <h4>Social/Emotional Development</h4>
          </div>

          <div
            className={
              currentTab === 'executive'
                ? 'treatment-header treatment-header-active treatment-header-executive'
                : 'treatment-header treatment-header-executive'
            }
            onClick={() => this.handleTabChange('executive')}
          >
            <h4>Executive Functioning</h4>
          </div>
        </div>

        <div className="module-container">
          <div
            className={
              currentTab === 'modulation'
                ? 'treatment-body'
                : 'treatment-body display-none'
            }
          >
            <TreatmentPlanModule type={'modulation_'} />
          </div>

          <div
            className={
              currentTab === 'postural'
                ? 'treatment-body'
                : 'treatment-body display-none'
            }
          >
            <TreatmentPlanModule type={'posture_'} />
          </div>

          <div
            className={
              currentTab === 'sensory'
                ? 'treatment-body'
                : 'treatment-body display-none'
            }
          >
            <TreatmentPlanModule type={'sensory_discrimination_'} />
          </div>

          <div
            className={
              currentTab === 'social'
                ? 'treatment-body'
                : 'treatment-body display-none'
            }
          >
            <TreatmentPlanModule type={'social_emotional_'} />
          </div>

          <div
            className={
              currentTab === 'executive'
                ? 'treatment-body'
                : 'treatment-body display-none'
            }
          >
            <TreatmentPlanModule type={'executive_functioning_'} />
          </div>
        </div>
      </div>
    );
  }
}

export default TreatmentPlans;
