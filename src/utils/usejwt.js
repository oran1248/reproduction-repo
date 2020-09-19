import jwt from 'jsonwebtoken';

export const useJWTPackage = () => {
    jwt.sign({}, "secret");
};
