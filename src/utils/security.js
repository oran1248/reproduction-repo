import * as argon2 from 'argon2';
import jwt from 'jsonwebtoken';

export const verifyPasswordHash = (passwordHash, password) => {
    return argon2.verify(passwordHash, password)
};

export const genToken = () => {
    const token = jwt.sign({}, "secret");
    return token;
};
