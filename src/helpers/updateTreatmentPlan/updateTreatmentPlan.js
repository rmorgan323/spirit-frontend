import getKeyFromLS from '../getKeyFromLS';

const updateTreatmentPlan = async (treatmentPlanId, updatedTreatmentPlan) => {
  try {
    const fetchedTreatmentPlan = await fetch(
      `http://localhost:3000/api/v1/treatment-plans/${treatmentPlanId}`,
      {
        method: 'PUT',
        headers: {
          'x-token': getKeyFromLS(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedTreatmentPlan)
      }
    );
    const jsonTreatmentPlan = await fetchedTreatmentPlan.json();

    return jsonTreatmentPlan;
  } catch (error) {
    throw new Error(
      `Error updating treatment plan by id ${treatmentPlanId}: ${error}`
    );
  }
};

export default updateTreatmentPlan;
