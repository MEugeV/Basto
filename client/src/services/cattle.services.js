import axios from "axios";

const URL = "http://localhost:5001/cattle";

export async function getCattleService() {
  try {
    const cattle = (await axios.get(URL)).data;
    return cattle;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteCowService(id) {
  try {
    const deletedCow = (await axios.delete(`${URL}/${id}`)).data;
    return deletedCow;
  } catch (err) {
    console.log(err);
  }
}

export async function createNewCowService(cow) {
  try {
    const newCow = (await axios.post(URL, cow)).data;
    return newCow;
  } catch (err) {
    console.log(err);
  }
}

export async function updateCowService(cow) {
  try {
    const updatedCow = (await axios.put(`${URL}/${cow._id}`, cow)).data;
    return updatedCow;
  } catch (err) {
    console.log(err);
  }
}
