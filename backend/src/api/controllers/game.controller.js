const { fetchTeamsService, fetchMatchesService } = require("../services/game.service");
const { handleError, handleResponse } = require("../utils/responseHelper");

const fetchTeamsController = async (req,res) => {
    try {
        const result = await fetchTeamsService();

        console.log("result events ",result)

        if(result.error){
            throw new TypeError(result.message);
        }

        handleResponse({res, statusCode: 201, result: result.message})
    } catch(err) {
        if (err instanceof TypeError) {
            console.log("Error type ", err.message)
            handleError({ res, statusCode: 400, err: err.message });
        } else {// internal error
            handleError({ res, statusCode: 500, err: err.message });
        }
    }
}

const fetchMatchesController = async (req, res) => {
    try {
        const date = req.query.date;

        if(!date){
            throw new Error("Invalid date!");
        }

        const result = await fetchMatchesService(date);

        console.log("result events ",result)

        if(result.error){
            throw new TypeError(result.message);
        }

        handleResponse({res, statusCode: 201, result: result.message})
    } catch(err) {
        if (err instanceof TypeError) {
            console.log("Error type ", err.message)
            handleError({ res, statusCode: 400, err: err.message });
        } else {// internal error
            handleError({ res, statusCode: 500, err: err.message });
        }
    }
}

module.exports = { fetchTeamsController, fetchMatchesController };