

import { genToken } from '../security';

export const sendLoginRequest = () => {
    // do nothing
};

// why this unused func is bundled to the output in .next folder ?!?!
export const unusedFunc = () => {
    // if i comment this line, "npm run build" succeeded
    genToken();
};


