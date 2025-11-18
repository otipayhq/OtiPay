'use client';

import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

export default function OnboardingStep3() {
  return (
    <SafeAreaView className="flex-1 bg-blue-600">
      <View className="flex-1 justify-between items-center px-6 py-4">

        {/* Header */}
        <View className="w-full items-end">
          <Text className="text-base font-medium text-white">Skip</Text>
        </View>

        {/* Rocket Accent */}
        <View
          className="absolute w-14 h-14 rounded-full bg-purple-500 justify-center items-center"
          style={{ top: 120, left: 24 }}
        >
          <Text className="text-2xl">🚀</Text>
        </View>

        {/* Icon Container */}
        <View className="w-40 h-40 justify-center items-center mt-6">
          <View className="w-40 h-40 rounded-full bg-white/20 justify-center items-center">
            <Text className="text-4xl font-semibold text-white">
              ₦ ↔ $
            </Text>
          </View>
        </View>

        {/* Content */}
        <View className="items-center mb-10">
          <Text className="text-3xl font-bold text-white mb-3">
            Instant NGN ↔ USDT
          </Text>
          <Text className="text-sm text-white text-center leading-6 opacity-80">
            Convert between Naira and USDT instantly at{'\n'}
            competitive rates
          </Text>
        </View>

        {/* Progress Dots */}
        <View className="flex-row gap-2 mb-8">
          <View className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <View className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <View className="w-6 h-[1.5px] bg-white rounded-full" />
        </View>

        {/* Button */}
        <TouchableOpacity className="w-full h-14 rounded-2xl bg-white justify-center items-center mb-6">
          <Text className="text-lg font-semibold text-blue-600">
            Get Started
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}
