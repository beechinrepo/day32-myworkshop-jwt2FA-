const otplib = require('otplib');

const gSecret = 'JJMTIRSFGRFVOUCJGNKUSV2TJZGUUUKVKE2UWQSNIY2EKV2TJNBQ';

const code = otplib.authenticator.generate(gSecret);

console.info('code = ', code);