const errorMessageList = {
    204: "No Content",
    400: "Bad Request",
    401: "Unauthotized",
    403: "Forbidden",
    404: "Not found",
    409: "Conflict"
}

const HttpError = (status, message = errorMessageList[status]) => {
    const error = new Error(message);
    error.status = status;
    return error;
}

module.exports = HttpError;