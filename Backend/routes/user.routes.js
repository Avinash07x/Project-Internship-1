import { Router } from "express";
import { body, validationResult } from "express-validator";
import * as userController from "../controllers/user.controller.js";
import * as authMiddleware from "../middleware/auth.middleware.js";

const router = Router();

const validateRegisterFields = [
  body("firstName").notEmpty().withMessage("First name is required"),
  body("lastName").notEmpty().withMessage("Last name is required"),
  body("email").isEmail().withMessage("Valid email required"),
  body("password").isLength({ min: 6 }).withMessage("Password ≥ 6 characters"),
  body("phoneNumber").notEmpty().withMessage("Phone number is required"),
];

const validateLoginFields = [
  body("email").isEmail().withMessage("Valid email required"),
  body("password").isLength({ min: 3 }).withMessage("Password ≥ 3 characters"),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

router.post("/register", validateRegisterFields, handleValidationErrors, userController.createUserController);
router.post("/login", validateLoginFields, handleValidationErrors, userController.loginController);
router.get("/profile", authMiddleware.authUser, userController.profileController);
router.get("/logout", authMiddleware.authUser, userController.logoutController);
router.get("/all", authMiddleware.authUser, userController.getAllUsersController);

export default router;
