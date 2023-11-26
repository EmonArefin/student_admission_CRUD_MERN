const express = require("express")
const router = express.Router();

const RegistrationController = require("../controllers/RegistrationController");
router.post("/create-registration-form", RegistrationController.createRegistration);
router.get("/delete-form/:id", RegistrationController.deleteRegistration);
router.get("/all-registration-form", RegistrationController.registrationForm);
router.post("/update-registration-form/:id", RegistrationController.updateRegistration);
router.get("/registration-id/:id", RegistrationController.registrationById);

module.exports = router;