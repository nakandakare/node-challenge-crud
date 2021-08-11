import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";
import { User } from "../cases/userCase/user.module";

const opt = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.secretOrKey || "",
};

export default new JWTStrategy(opt, async (jwt_payload, done) => {
    try {
        const user = await User.findById(jwt_payload.id);
        if(user) {
            return done(null, user);
        }
        return done(null, false);
    } catch (err) {
        console.log(err);
        return done(err);
    }
});
