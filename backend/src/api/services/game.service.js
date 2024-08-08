const teams = require("../utils/teams.json");

const fetchTeamsService = async () => {
    try {
        const result = teams;
        if(!result){
            return {
                message: "Teams not found",
                error: true
            }
        }

        return {
            message: result,
            error: false
        }
    } catch(err) {
        return {
            message: err.message,
            error: true
        }
    }
}

module.exports = { fetchTeamsService };