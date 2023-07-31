import request from "supertest";
import app from "../src/app";
import { pool } from "../src/db";

describe("products Routes", () => {
  it("should respond a list of products", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          salary: expect.any(Number),
        }),
      ])
    );
  });

  it("should create a new product", async () => {
    const res = await request(app).post("/api/products").send({
      name: "John Doe",
      salary: 1000,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: "John Doe",
        salary: 1000,
      })
    );
  });

  it("should get an product by id", async () => {
    const res = await request(app).get("/api/products/1");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        id: 1,
        name: expect.any(String),
        salary: expect.any(Number),
      })
    );
  });

  it("should delete an product by id", async () => {
    const res = await request(app).delete("/api/products/1");
    expect(res.statusCode).toEqual(204);
  });

  afterAll(async () => {
    await pool.end();
  });
});
