const { verifySignUp } = require('../middleware');
const controller = require('../controller/auth.controller');

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Acces-Control-Allow-Headers",
            "x-acces-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/auth/signup", [
            verifySignUp.checkDuplicateUsernameOrEmail,
            verifySignUp.checkRolesExisted
        ],
        controller.signup
    );

    app.post("/api/auth/signin", controller.signin);
};