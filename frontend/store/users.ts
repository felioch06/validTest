import axios from "axios";

export const actions = {
  async All() {
    let res = await axios
      .get(`${process.env.api}/users`, undefined)
      .then(result => {
        return { error: false, data: result.data };
      })
      .catch(error => {
        return { error: true, data: error.response.data };
      });
    return res;
  },
  async Process({}, form: any) {
    let res = await axios
      .put(`${process.env.api}/users`, form, undefined)
      .then(result => {
        return { error: false, data: result.data };
      })
      .catch(error => {
        return { error: true, data: error.response.data };
      });
    return res;
  },
  async Create({}, form: any) {
    let res = await axios
      .post(`${process.env.api}/users`, form, undefined)
      .then(result => {
        return { error: false, data: result.data };
      })
      .catch(error => {
        return { error: true, data: error.response.data };
      });
    return res;
  }
};
