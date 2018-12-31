module.exports = {

    googleOAuth: (req, res) => {
        if (req.user.role === "admin") {
            return res.cookie('x_auth', req.user.token)
                .status(200)
                .redirect('/admin/dashboard')
        }
        res.cookie('x_auth', req.user.token)
            .status(200)
            .redirect('/user/dashboard')
    },

    amazonOAuth: (req, res) => {
        if (req.user.role === "admin") {
            return res.cookie('x_auth', req.user.token)
                .status(200)
                .redirect('/admin/dashboard')

        }
        res.cookie('x_auth', req.user.token)
            .status(200)
            .redirect('/user/dashboard')
    }
}