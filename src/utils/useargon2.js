import * as argon2 from 'argon2';

export const useArgon2Package = () => {
    argon2.verify("hash", "pass");
};

