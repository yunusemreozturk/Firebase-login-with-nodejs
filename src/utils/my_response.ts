class MyResponse{
    data: Object
    message: String
    err: Error
    constructor(data = null, message = null, err = null) {
        this.data = data
        this.message = message
        this.err = err
    }

    success(res) {
        return res.status(200).json({success: true, data: this.data, message: this.message ?? "SUCCESS"})
    }

    created(res) {
        return res.status(201).json({success: true, data: this.data, message: this.message ?? "CREATED"})
    }

    error500(res) {
        return res.status(500).json({success: false, message: this.message ?? "SERVER_ERROR"})
    }

    error400(res) {
        return res.status(400).json({success: false, message: this.message ?? "BAD_REQUEST"})
    }

    error401(res) {
        return res.status(400).json({success: false, message: this.message ?? "UNAUTHORIZED"})
    }

    error404(res) {
        return res.status(400).json({success: false, message: this.message ?? "NOT_FOUND"})
    }

    error429(res) {
        return res.status(400).json({success: false, message: this.message ?? "TOO_MANY_REQUEST"})
    }
}

export default MyResponse