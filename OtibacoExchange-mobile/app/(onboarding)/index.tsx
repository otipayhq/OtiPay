import React, { useState } from 'react';
import { View, SafeAreaView, Pressable, Text } from 'react-native';
import SplashScreen from './splash';
import OnboardingStep1 from './onboarding-step1';
import OnboardingStep2 from './onboarding-step2';
import OnboardingStep3 from './onboarding-step3';

export default function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0);

  const screens = [
    <SplashScreen key="splash" />,
    <OnboardingStep1 key="step1" />,
    <OnboardingStep2 key="step2" />,
    <OnboardingStep3 key="step3" />,
  ];

  const handleNextStep = () => {
    if (currentStep < screens.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {screens[currentStep]}
      {currentStep > 0 && (
        <View>
          <Pressable onPress={handlePreviousStep}>
            <Text>Previous</Text>
          </Pressable>
        </View>
      )}
      {currentStep < screens.length - 1 && (
        <View>
          <Pressable onPress={handleNextStep}>
            <Text>Next</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
}