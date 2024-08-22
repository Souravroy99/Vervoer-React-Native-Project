import React from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';

import Splash from './src/pages/Splash.tsx';
import OnBoarding from './src/pages/OnBoarding.tsx';
import Login from './src/pages/login.tsx';
import Registration from './src/pages/registration.tsx';
import VerifyOTP from "./src/pages/VerifyOTP.tsx";
import PhoneVerified from "./src/pages/SuccessOTP.tsx";
import PersonalInfo from './src/pages/PersonalInfo.tsx';
import Email from './src/pages/ForgotPassword.tsx';
import OtpForEmail from './src/pages/VerifyEmail.tsx';
import ForgotPassword from './src/pages/ForgotPasswordSent.tsx';
import EmailVerified from './src/pages/SuccessEmailID.tsx';

function App(): React.JSX.Element {
  return (
    <>

      {/* <Splash /> */}
      {/* <OnBoarding /> */}
      {/* <Login /> */}
      {/* <Registration /> */}
      {/* <VerifyOTP /> */}
      {/* <PhoneVerified /> */}
      <PersonalInfo />
      {/* <Email /> */}
      {/* <OtpForEmail /> */}
      {/* <ForgotPassword /> */}
      {/* <EmailVerified /> */} 

    </>
  );
}

export default App;