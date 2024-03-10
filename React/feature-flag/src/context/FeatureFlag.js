import React, { useState } from 'react';

export const FeatureFlag = React.createContext({});

export const FeatureFlagProvider = ({children}) => {

    // we can use useEffect to update the state using api calls
    // eslint-disable-next-line
    const [features, setFeatures] = useState({
        isGooglePayEnable: true,
        isApplePayEnable: false
    });

    // pass value as object in provider
    return <FeatureFlag.Provider value={{features}}>{children}</FeatureFlag.Provider>;
}