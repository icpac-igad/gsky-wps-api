const fetchWPSTimeSeries = require("./wps");

const GSKY_OWS_URL = process.env.GSKY_OWS_URL;

class GskyWPSService {
  static async wpsGeometryDrill(query, geojson, ctx) {
    const parameters = {
      identifier: query.identifier,
      storeExecuteResponse: true,
      status: true,
      dataInputs: [
        {
          inputIdentifier: "geometry",
          inputType: "ComplexData",
          inputValue: JSON.stringify(geojson),
        },
      ],
    };

    if (query.start_datetime) {
      parameters.dataInputs.push({
        inputIdentifier: "start_datetime",
        inputType: "ComplexData",
        inputValue: JSON.stringify({
          properties: { timestamp: { "date-time": query.start_datetime } },
        }),
      });
    }

    if (query.end_datetime) {
      parameters.dataInputs.push({
        inputIdentifier: "end_datetime",
        inputType: "ComplexData",
        inputValue: JSON.stringify({
          properties: { timestamp: { "date-time": query.end_datetime } },
        }),
      });
    }

    try {
      const data = await fetchWPSTimeSeries(GSKY_OWS_URL, parameters);
      return data;
    } catch (error) {
      ctx.throw(400, error.response.data);
    }
  }
}

module.exports = GskyWPSService;
