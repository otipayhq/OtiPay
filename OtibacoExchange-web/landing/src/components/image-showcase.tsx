"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface ImageShowcaseProps {
  images: {
    src: string
    alt: string
    caption?: string
  }[]
  layout?: "grid" | "carousel" | "featured"
  title?: string
}

export default function ImageShowcase({ images, layout = "grid", title }: ImageShowcaseProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(layout === "featured" ? 0 : null)

  if (layout === "featured" && images.length > 0) {
    return (
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="space-y-6">
        {title && <h3 className="text-2xl font-bold text-foreground text-center">{title}</h3>}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Image */}
          <motion.div
            layoutId="featured"
            className="lg:col-span-2 rounded-2xl overflow-hidden shadow-xl border border-border/50"
          >
            <motion.img
              key={selectedImage}
              src={images[selectedImage || 0].src}
              alt={images[selectedImage || 0].alt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Thumbnails */}
          <div className="space-y-4">
            {images.map((img, idx) => (
              <motion.button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`w-full rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === idx ? "border-primary shadow-lg" : "border-border/50 hover:border-primary/50"
                }`}
                whileHover={{ scale: 1.02 }}
              >
                <img src={img.src || "/placeholder.svg"} alt={img.alt} className="w-full h-24 object-cover" />
              </motion.button>
            ))}
          </div>
        </div>

        {images[selectedImage || 0].caption && (
          <p className="text-center text-muted-foreground text-sm">{images[selectedImage || 0].caption}</p>
        )}
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="space-y-6">
      {title && <h3 className="text-2xl font-bold text-foreground text-center">{title}</h3>}

      <div
        className={
          layout === "carousel" ? "overflow-x-auto pb-4" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        }
      >
        <div className={layout === "carousel" ? "flex gap-6" : "contents"}>
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl overflow-hidden shadow-md border border-border/50 group ${
                layout === "carousel" ? "flex-shrink-0 w-80" : ""
              }`}
            >
              <img
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {img.caption && (
                <div className="p-4 bg-card">
                  <p className="text-sm text-muted-foreground text-center">{img.caption}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
