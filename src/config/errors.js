import {
    UNAUTHORIZED_CODE,
    BAD_REQUEST_CODE,
    FORBIDDEN_CODE,
    SERVICE_UNAVAILABLE_CODE,
    VALIDATION_ERROR_CODE,
    UNSUPPORTED_MEDIA_TYPE_CODE,
    CONFLICT_CODE,
    NOT_FOUND_CODE, SERVER_ERROR
} from './status-codes.js';
import {
    PERMISSION_DENIED,
    SOMETHING_WENT_WRONG,
    VALIDATION_ERROR,
    SERVICE_UNAVAILABLE
} from './constants.js';

export class AuthError extends Error {
    status = UNAUTHORIZED_CODE;
    message;
    errors;

    constructor(message, errors = null) {
        super();
        this.message = message;
        this.errors = errors;
    }
}

export class BadRequest extends Error {
    status = BAD_REQUEST_CODE;
    message;
    errors;

    constructor(message, errors = null) {
        super();
        this.message = message;
        this.errors = errors;
    }
}

export class UnsupportedMediaType extends Error {
    status = UNSUPPORTED_MEDIA_TYPE_CODE;
    message;
    errors;

    constructor(message, errors = null) {
        super();
        this.message = message;
        this.errors = errors;
    }
}

export class Conflict extends Error {
    status = CONFLICT_CODE;
    message;
    errors;

    constructor(message, errors = null) {
        super();
        this.message = message;
        this.errors = errors;
    }
}

export class NotFound extends Error {
    status = NOT_FOUND_CODE;
    message;
    errors;

    constructor(message, errors = null) {
        super();
        this.message = message;
        this.errors = errors;
    }
}

export class Forbidden extends Error {
    status = FORBIDDEN_CODE;
    message = PERMISSION_DENIED;
    errors;

    constructor(message, errors = null) {
        super(message);
        this.errors = errors;
        this.message = message;
    }
}

export class ValidationError extends Error {
    status = VALIDATION_ERROR_CODE;
    message = VALIDATION_ERROR;
    errors;

    constructor(errors) {
        super();
        this.errors = errors;
    }
}

export class ExternalApiError extends Error {
    status = SERVICE_UNAVAILABLE_CODE;
    message = SERVICE_UNAVAILABLE;
    errors;

    constructor(errors) {
        super();
        this.errors = errors;
    }
}

export  class  ServerError extends Error {
    status = SERVER_ERROR
    message = "Server Error"
    errors

    constructor(errors) {
        super();
        this.error = errors;
    }
}


export class ServiceUnavailable extends Error {
    status = BAD_REQUEST_CODE;
    message = SOMETHING_WENT_WRONG;
    errors;

    constructor(message, errors = null) {
        super();

        if (errors) {
            this.message = message;
            this.errors = errors;
        } else {
            if (typeof message === 'string') {
                this.message = message;
            } else {
                this.errors = message;
            }
        }
    }
}