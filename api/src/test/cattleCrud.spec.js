const app = require("../../app");
const request = require("supertest");
const { mongoose } = require("mongoose");
const Cattle = require("../db/cattle.model");

describe("Test Cattle CRUD", () => {
  beforeAll(async () => {
    await mongoose.connect("mongodb://127.0.0.1/basto");
  });
  afterAll(async () => {
    await mongoose.disconnect();
  });

  describe("GET /cattle", () => {
    let response;

    beforeAll(async () => {
      response = await request(app).get("/cattle").send();
    });

    it("the route works", async () => {
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("json");
    });
    it("request returns an array of cows", async () => {
      expect(response.body).toBeInstanceOf(Array);
    });
  });

  describe("POST /cattle", () => {
    let cow = {
      _id: "CARAVANA52856893",
      animal_type: "Toro",
      animal_weight: 700,
      paddock_name: "La Candelaria",
      device_type: "CARAVANA",
      device_number: "CAR52525",
    };

    beforeEach(async () => {
      response = await request(app).post("/cattle").send(cow);
    });
    afterEach(async () => {
      responseafter = await Cattle.findByIdAndDelete(response.body._id);
    });

    it("the route works", async () => {
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("json");
    });
    it("the cow is created whit the object sent", async () => {
      expect(response.body._id).toBe(cow._id);
    });
    it("returns status 500 if an _id that does not pass the validations is sent to create a cow", async () => {
      cow._id = "C5";
      responseWrong = await request(app).post("/cattle").send(cow);
      expect(responseWrong.status).toBe(500);
      expect(responseWrong.error).toBeDefined();
    });
  });

  describe("PUT /cattle/id", () => {
    let cow = {
      _id: "CARAVANA52856893",
      animal_type: "Toro",
      animal_weight: 700,
      paddock_name: "La Candelaria",
      device_type: "CARAVANA",
      device_number: "CAR52525",
    };

    beforeEach(async () => {
      response = await request(app).post("/cattle").send(cow);
      responseUpdated = await request(app)
        .put(`/cattle/${response.body._id}`)
        .send({ device_type: "COLLAR" });
    });

    afterEach(async () => {
      responseafter = await Cattle.findByIdAndDelete(response.body._id);
    });

    it("the route works", async () => {
      expect(responseUpdated.status).toBe(200);
      expect(responseUpdated.headers["content-type"]).toContain("json");
    });

    it("the cow is updated", async () => {
      expect(responseUpdated.body.device_type).toBe("COLLAR");
    });
  });

  describe("DEL /cattle/id", () => {
    let cow = {
      _id: "CARAVANA52856893",
      animal_type: "Toro",
      animal_weight: 700,
      paddock_name: "La Candelaria",
      device_type: "CARAVANA",
      device_number: "CAR52525",
    };
    beforeEach(async () => {
      cowToDelete = await request(app).post("/cattle").send(cow);
      response = await request(app)
        .delete(`/cattle/${cowToDelete.body._id}`)
        .send();
    });

    it("the route works", async () => {
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("json");
    });
    it("the cow is deleted", async () => {
      expect(response._id).toEqual(cowToDelete._id);
      const searchCowDeleted = await Cattle.findById(cowToDelete._id);
      expect(searchCowDeleted).toBeNull();
    });
  });
});
