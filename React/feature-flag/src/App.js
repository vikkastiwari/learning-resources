import React from 'react';
import { FeatureFlag, FeatureFlagProvider } from './context/FeatureFlag';
import './App.css';

function App() {
  return (
    <FeatureFlagProvider>
      <Example></Example>
    </FeatureFlagProvider>
  );
}

const Example = () => {
  const { features } = React.useContext(FeatureFlag);
  console.log(features);
  return (
    <>
      <h2>Feature Flag Example</h2>
      <Feature feature="isGooglePayEnable" value={true}>Google</Feature>
      <br />
      <Feature feature="isApplePayEnable" value={false}>Apple</Feature>
    </>
  );
}

const Feature = ({feature, children, value}) => {
  const {features} = React.useContext(FeatureFlag);
  return features[feature] === value ? children : null;
}

export default App;
