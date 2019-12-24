const otplib = require('otplib');
const qrcode = require('qrcode');

const gSecret = 'JJMTIRSFGRFVOUCJGNKUSV2TJZGUUUKVKE2UWQSNIY2EKV2TJNBQ';
const user = 'fred@gmail.com';
const app = 'myangularapp'

const otpauth = otplib.authenticator.keyuri(user, app, gSecret)
console.info('otpauth: ', otpauth)

qrcode.toDataURL(otpauth, 
    (error, imgData) => {
        console.info('error: ', error);
        console.info('imgData: ', imgData);
    }
)