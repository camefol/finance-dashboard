"use client"

import React from "react"
import { ReactLenis } from "@studio-freight/react-lenis"

type ReactLenisProps = React.ComponentProps<typeof ReactLenis>

export default function LenisRoot({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1 }}>
      {children as ReactLenisProps["children"]}
    </ReactLenis>
  )
}
