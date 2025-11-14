'use client'

import { useState } from 'react'
import { LoginForm } from '@/components/auth/login-form'
import { TOTPForm } from '@/components/auth/totp-form'
import { DeviceVerification } from '@/components/auth/device-verification'
import { DeviceApproved } from '@/components/auth/device-approved'

export default function LoginPage() {
  const [step, setStep] = useState('login')

  const handleContinue = () => {
    // Redirect to dashboard
    window.location.href = '/dashboard'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-navy via-background to-deep-navy flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Login Container */}
      <div className="relative w-full max-w-md">
        <div className="glass-panel p-8 backdrop-blur-xl bg-card/40 rounded-xl border border-white/10">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">OP</span>
            </div>
            <span className="text-2xl font-bold">OtiPay</span>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground text-sm">
              {step === 'login' && 'Secure access to your fintech platform'}
              {step === '2fa' && 'Enter your two-factor authentication code'}
              {step === 'device-verification' && 'Verify your new device'}
              {step === 'approved' && 'Login successful'}
            </p>
          </div>

          {/* Form Steps */}
          {step === 'login' && <LoginForm onSubmit={setStep} />}
          {step === '2fa' && <TOTPForm onSubmit={setStep} />}
          {step === 'device-verification' && <DeviceVerification onSubmit={setStep} />}
          {step === 'approved' && <DeviceApproved onContinue={handleContinue} />}
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-muted-foreground">
          <p>For security issues, contact <button className="text-primary hover:underline">support@otipay.com</button></p>
        </div>
      </div>
    </div>
  )
}
