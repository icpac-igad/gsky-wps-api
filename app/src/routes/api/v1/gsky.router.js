const Router = require("koa-router");
const isEmpty = require("lodash/isEmpty");
const GskyWPSService = require("services/gskyWpsService");
const { isValidGeojsonPoint, isValidGeojsonPolygon } = require("utils/core");

const router = new Router({
  prefix: "/gsky",
});

class GskyRouter {
  static async wpsExecuteGeometryDrillProcess(ctx) {
    ctx.assert(ctx.query.identifier, 400, "identifier required");

    ctx.assert(
      !isEmpty(ctx.request.body),
      400,
      "Geojson Point or Polygon required"
    );

    // check if point or polygon
    ctx.assert(
      isValidGeojsonPoint(ctx.request.body) ||
        isValidGeojsonPolygon(ctx.request.body),
      400,
      "Invalid feature"
    );

    ctx.body = await GskyWPSService.wpsGeometryDrill(
      ctx.query,
      ctx.request.body,
      ctx
    );
  }
}

router.post("/timeseries", GskyRouter.wpsExecuteGeometryDrillProcess);

module.exports = router;
