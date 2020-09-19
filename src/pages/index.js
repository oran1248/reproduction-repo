import React from 'react';
import { someClientSideFunc } from '../utils/auth';

const Index = () => {
    someClientSideFunc();
    return <div>Index</div>;
};

export default Index;

