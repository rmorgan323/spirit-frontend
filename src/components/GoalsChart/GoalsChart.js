import React from 'react';
import { connect } from 'react-redux';
import './GoalsChart.css';
import { VictoryChart, VictoryLine } from 'victory';

const GoalsChart = (props) => {

  const generateLines = () => {
    const lines = props.comparisonData;
    const titleArray = ['executive', 'modulation', 'posture', 'sensory', 'social']
    const colorsArray = ['#DFD7E7', '#9E87BA', '#5E378C', '#a8ed8a', '#3cd52e']
    const display = lines.map((line, index) => {
      const title = Object.keys(line);

      if (titleArray.includes(title[0])) {
        return (
          <VictoryLine
            data={line[title[0]]}
            style={{ data: { stroke: colorsArray[index], strokeWidth: 10 } }}
          >
          </VictoryLine>
        )
      }
    })

    return display;
  }

  return (
    <div>
      <VictoryChart>
        {generateLines()}
      </VictoryChart>
    </div>
  )
}

const mapStateToProps = store => ({
  comparisonData: store.comparisonData
})

export default connect(mapStateToProps, null)(GoalsChart);