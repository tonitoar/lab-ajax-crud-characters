class APIHandler {
  constructor (baseUrl) {
    this.api = axios.create({baseUrl: baseUrl})
    this.BASE_URL = baseUrl;
  }

  getFullList () {
      return this.api.get("/characters")
        .then(response => {
          console.log("Retriving all the characters");
          console.log("response data", response.data);
          return response.data; 
        })
        .catch(()=> {
          console.log("something went wrong");
          return "ERROR"
        })
  }

  getOneRegister(id) {
    return this.api
      .get(`/characters/${id}`)
      .then(response => {
        console.log("Retrieving a single character");
        console.log("response data", response.data);
        return response.data;
      })
      .catch(() => {
        console.log("something went wrong");
        return "ERROR";
      });
  }

  createOneRegister(data) {
    return this.api
      .post("/characters", data)
      .then(response => {
        console.log("Creating a character");
        console.log("response data", response.data);
        return response.data;
      })
      .catch(() => {
        console.log("something went wrong");
        return "ERROR";
      });
  }

  updateOneRegister(id, data) {
    return this.api
      .put(`/characters/${id}`, data)
      .then(response => {
        console.log("Updating a character");
        console.log("response data", response.data);
        return response.data;
      })
      .catch(() => {
        console.log("something went wrong");
        return "ERROR";
      });
  }

  deleteOneRegister(id) {
    return this.api
      .delete(`/characters/${id}`)
      .then(response => {
        console.log("Deleting a character");
        console.log("response data", response.data);
        return response.data;
      })
      .catch(() => {
        console.log("something went wrong");
        return "ERROR";
      });
  }
}