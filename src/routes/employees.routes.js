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
router.get("/product", getproduct);

// GET An Employee
router.get("/product/:id", getProduct);

// DELETE An Employee
router.delete("/product/:id", deleteProduct);

// INSERT An Employee
router.post("/product", createProduct);

router.patch("/product/:id", updateProduct);

export default router;
