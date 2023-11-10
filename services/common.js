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
    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NGUwMTMyYzBjNmE1NmU4MTE5M2Q3NSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjk5NjEwOTQ1fQ.gFcO3rmbIyctAZ_hDvs1YE7GdXpY9uIbj-IPv9EWQuE"
    return token;
};