import axios from "axios";
export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://realty-in-us.p.rapidapi.com/locations/auto-complete",
    params: { input: req.query.keyword },
    headers: {
      "x-rapidapi-host": "realty-in-us.p.rapidapi.com",
      "x-rapidapi-key": '90778eb5afmsh70491b6b0348608p19475djsncb4ef91ef6b4',
    },
  };
  axios
    .request(options)
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}