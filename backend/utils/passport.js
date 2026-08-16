const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const User = require('../models/user');

const cookieExtractor = function (req) {
    let token = null;
    if (req && req.cookies) token = req.cookies['token'];
    return token;
};

const opts = {
    jwtFromRequest: cookieExtractor,
    secretOrKey: process.env.TOKEN_KEY,
};

passport.use(
    new JwtStrategy(opts, async (payload, done) => {
        try {
            const user = await User.findById(payload.id).select('name email');
            if (user) return done(null, user);
            return done(null, false);
        } catch (err) {
            return done(err, false);
        }
    })
);

module.exports = passport;
