const Dev                   = require('../models/Dev');
const parseStringAsArray    = require('../utils/parseStringAsArray');

module.exports = {
  async index(request, response) {
    const { latitude, longitude, techs } = request.query;
    const techsArray = parseStringAsArray(techs);
    const devs = await Dev.find({
        techs: { $in: techsArray },

        location: {
            $near: { 
                $geometry: { type: "Point",  coordinates:[parseFloat(longitude), parseFloat(latitude)] },
                $maxDistance: 1000
            },
        },
    })

    return response.json({ devs });
  }
}