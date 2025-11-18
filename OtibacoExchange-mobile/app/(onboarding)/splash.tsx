'use client';

import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default function SplashScreen() {
  return (
    <SafeAreaView className="flex-1 bg-blue-600">
      <View className="flex-1 justify-center items-center px-6">
        {/* Logo Container */}
        <View className="mb-8">
          <View className="w-30 h-30 rounded-3xl bg-slate-100 justify-center items-center">
            <Text className="text-6xl font-bold text-blue-600">
              O
            </Text>
          </View>
        </View>

        {/* Branding Text */}
        <View className="items-center mb-20">
          <Text className="text-4xl font-bold text-white mb-2">
            OtiPay
          </Text>
          <Text className="text-base font-medium text-white">
            Fast. Secure. Borderless.
          </Text>
        </View>

        {/* Progress Dots */}
        <View className="flex-row gap-2 absolute bottom-12">
          <View className="w-2 h-2 rounded-full bg-white opacity-60" />
          <View className="w-2 h-2 rounded-full bg-white opacity-60" />
          <View className="w-2 h-2 rounded-full bg-white opacity-60" />
        </View>
      </View>
    </SafeAreaView>
  );
}
