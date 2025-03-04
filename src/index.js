#!/usr/bin/env node

import readlineSync from 'readline-sync';

const greet = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    return name;
};

export default greet;
