const passport = require("passport");

exports.isAuth = (req, res, done) => {
    return passport.authenticate('jwt')
};

exports.sanitizeUser = (user) => {
    return {id: user.id, role:user.role}
}

exports.cookieExtractor = function(req) {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['jwt'];
    }
    // TODO: temporary for testing
    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NGNmNjk4ODAyMDIwZGQ2YzFhMzg4YSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5OTU0MzA1M30.jdriY4bAvbYy5Bc7n9UnGk9H-5fsvtasjT922lQflcQ"
    return token;
};