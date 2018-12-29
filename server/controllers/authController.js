module.exports = {

    googleOAuth: (req, res) => {
        res.cookie('x_auth', req.user.token)
            .status(200)
            .redirect('/user/dashboard')
    },

    amazonOAuth: (req, res) => {
        res.cookie('x_auth', req.user.token)
            .status(200)
            .redirect('/user/dashboard')
    }
}