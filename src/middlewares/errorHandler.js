import { ServiceUnavailable } from "../config/errors.js";
import { BAD_REQUEST_CODE } from "../config/status-codes.js";

/**
 * @description Global error handler
 * @param err
 * @param req
 * @param res
 * @param next
 * @return {Promise<*|void|request.Request>}
 */
export default async (err, req, res, next) => {
    if (!err.status) {
        next(new ServiceUnavailable(err.message));
    }

    let status = err.status || BAD_REQUEST_CODE;

    return res.status(status).json({
        status: status,
        message: err.message || "",
        errors: err.errors || null,
        body: req.body
    });
};