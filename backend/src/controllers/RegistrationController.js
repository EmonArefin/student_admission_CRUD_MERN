const RegistrationModel = require("../models/RegistrationModel");
// const jwt = require("jsonwebtoken");

exports.createRegistration = async(req, res)=>{
    try {
        const reqBody = req.body;
        const data = await RegistrationModel.create(reqBody);
        res.status(200).json({
            status: "Success",
            data: data
        });
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            data: error.toString()
        })
    }
};

exports.registrationForm = async(req, res)=>{
    try {
        let data = await RegistrationModel.find();
        res.status(200).json({
            status: "Success",
            data: data
        });
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            data: error.toString()
        })
    }
};

exports.updateRegistration = async(req, res)=>{
    try {
        let id = req.params.id;
        let reqBody = req.body;
        let query = {_id:id}
        let data = await RegistrationModel.updateOne(query, reqBody);

        res.status(200).json({
            status: "Success",
            data: data
        });
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            data: error.toString()
        })
    }
};

exports.deleteRegistration = async(req, res)=>{
    try {
        let id = req.params.id;
        let query = {_id:id}
        let data = await RegistrationModel.deleteOne(query);

        res.status(200).json({
            status: "Success",
            data: data
        });
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            data: error.toString()
        })
    }
};

exports.registrationById = async(req, res)=>{
    try {
        let id = req.params.id;
        let query = {_id:id}
        let data = await RegistrationModel.find(query);

        res.status(200).json({
            status: "Success",
            data: data
        });
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            data: error.toString()
        })
    }
};
