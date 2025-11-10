"use client"
import { useState } from "react"
import type React from "react"

import { motion } from "framer-motion"
import { ArrowRightLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ExchangeConverter() {
  const [fromAmount, setFromAmount] = useState("1")
  const [toAmount, setToAmount] = useState("1580")
  const [reversed, setReversed] = useState(false)

  const fromCurrency = reversed ? "NGN" : "USDT"
  const toCurrency = reversed ? "USDT" : "NGN"
  const rate = reversed ? 0.000633 : 1580

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFromAmount(value)
    if (!isNaN(Number(value))) {
      setToAmount((Number(value) * rate).toFixed(2))
    }
  }

  const handleReverse = () => {
    setReversed(!reversed)
    setFromAmount("1")
    setToAmount(reversed ? "1580" : "0.00")
  }

  return (
    <div className="max-w-2xl mx-auto p-8 rounded-lg border border-border bg-card">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        {/* From Currency */}
        <div className="space-y-2">
          <label className="text-sm font-medium">From</label>
          <div className="flex gap-2">
            <div className="flex-1">
              <Input
                type="number"
                value={fromAmount}
                onChange={handleAmountChange}
                placeholder="Enter amount"
                className="text-lg"
              />
            </div>
            <div className="px-4 py-2 rounded-lg bg-muted font-semibold min-w-fit flex items-center">
              {fromCurrency}
            </div>
          </div>
        </div>

        {/* Reverse Button */}
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReverse}
            className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            <ArrowRightLeft className="w-5 h-5 text-primary" />
          </motion.button>
        </div>

        {/* To Currency */}
        <div className="space-y-2">
          <label className="text-sm font-medium">To</label>
          <div className="flex gap-2">
            <div className="flex-1">
              <Input type="text" value={toAmount} readOnly className="text-lg bg-muted" />
            </div>
            <div className="px-4 py-2 rounded-lg bg-muted font-semibold min-w-fit flex items-center">{toCurrency}</div>
          </div>
        </div>

        {/* Rate Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="p-4 rounded-lg bg-primary/5 border border-primary/20 text-center"
        >
          <p className="text-sm text-muted-foreground mb-1">Current Rate</p>
          <p className="text-lg font-bold">
            1 {fromCurrency} = {rate.toFixed(2)} {toCurrency}
          </p>
        </motion.div>

        {/* CTA Button */}
        <Button size="lg" className="w-full">
          Proceed with Exchange
        </Button>
      </motion.div>
    </div>
  )
}
