import { createAdmin } from "../controllers/userController.js";
import { createAlumni } from "../controllers/userController.js";
import { createStudent } from "../controllers/userController.js";
import { getAllUsers } from "../controllers/userController.js";
import { createCompany, getCompanies } from "../controllers/comapnyController.js";
import { createReview, getAllReviews } from "../controllers/reviewsController.js";
import { likeReviews } from "../controllers/likesController.js";
import express from "express";
import { isAdmin } from "../middleware/Middleware.js";
const router = express.Router()

router.post("/admin/create",createAdmin)
router.post("/alumni/create",createAlumni)
router.post("/Student/create",createStudent)
router.post("/company/create",isAdmin,createCompany)
router.post("/review/create",createReview)
router.post("/like/add",likeReviews)
router.get("/user/get",getAllUsers)
router.get("/company/get",getCompanies)

export default router;