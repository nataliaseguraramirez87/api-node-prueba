import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/employees.controller.js";

const router = Router();

// GET all Employees
router.get("/products", getProducts);

// GET An Employee
router.get("/products/:id", getProduct);

// DELETE An Employee
router.delete("/products/:id", deleteProduct);

// INSERT An Employee
router.post("/products", createProduct);

router.patch("/products/:id", updateProduct);

export default router;
