"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { useState } from "react"

interface ModernVideoEmbedProps {
  videoId: string
  title: string
  thumbnail?: string
  description?: string
  aspectRatio?: "16/9" | "4/3" | "1/1"
}

export default function ModernVideoEmbed({
  videoId,
  title,
  thumbnail,
  description,
  aspectRatio = "16/9",
}: ModernVideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50 group">
        {/* Thumbnail with play overlay */}
        <div
          className={`relative w-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden`}
          style={{
            aspectRatio,
          }}
        >
          {!isPlaying && thumbnail && (
            <img
              src={thumbnail || "/placeholder.svg"}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}

          {!isPlaying && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlaying(true)}
              className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-primary/90 hover:bg-primary shadow-lg backdrop-blur-sm transition-all"
              aria-label="Play video"
            >
              <Play className="w-6 h-6 text-primary-foreground fill-current" />
            </motion.button>
          )}

          {isPlaying && (
            <div className="absolute inset-0 w-full h-full">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          )}
        </div>
      </div>

      {/* Metadata */}
      {(title || description) && (
        <div className="space-y-2">
          {title && <h3 className="text-lg font-semibold text-foreground">{title}</h3>}
          {description && <p className="text-muted-foreground text-sm">{description}</p>}
        </div>
      )}
    </motion.div>
  )
}
