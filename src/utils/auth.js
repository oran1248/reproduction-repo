

import { useArgon2Package } from './useargon2';
import { useJWTPackage } from './usejwt';

export const someClientSideFunc = () => {
    // do nothing
};

// why this unused func is bundled to the output in .next folder ?!?!
export const unusedFunc = () => {
    // if i comment this line, "npm run build" succeeded
    useJWTPackage();
};

// why this unused func is bundled to the output in .next folder ?!?!
export const unusedFunc2 = () => {
    // if i comment this line, "npm run build" succeeded
    useArgon2Package();
};


