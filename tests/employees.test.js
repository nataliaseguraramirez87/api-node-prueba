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
          description: expect.any(String),
          valor:expect.any(Number),
          imageURL: expect.any(String),
        }),
      ])
    );
  });

  it("should create a new product", async () => {
    const res = await request(app).post("/api/products").send({
      name: "John Doe",
      description: "Descripción de los productos",
      valor: 1000 ,
      imageURL: "https://conceptoabc.com/wp-content/uploads/2021/09/Producto.jpg",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: "John Doe",
        description: "Descripción de los productos",
        valor: 1000 ,
        imageURL: "https://conceptoabc.com/wp-content/uploads/2021/09/Producto.jpg",
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
        description: expect.any(String),
        valor:expect.any(Number),
        imageURL: expect.any(String),
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
