'use client'

import React, { Suspense, lazy, Component } from 'react'
import { Wine } from 'lucide-react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
    scene: string
    className?: string
}

// Error boundary to catch Spline loading failures (e.g. 403, network errors)
class SplineErrorBoundary extends Component<
    { children: React.ReactNode },
    { hasError: boolean }
> {
    constructor(props: { children: React.ReactNode }) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                    <div className="w-32 h-32 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                        <Wine className="w-16 h-16 text-amber-400/60" />
                    </div>
                    <p className="text-white/30 text-sm tracking-widest uppercase">
                        Premium Spirits
                    </p>
                </div>
            )
        }
        return this.props.children
    }
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    return (
        <SplineErrorBoundary>
            <Suspense
                fallback={
                    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                        <div className="w-12 h-12 border-2 border-amber-500/30 border-t-amber-400 rounded-full animate-spin" />
                        <span className="text-sm text-white/30 tracking-widest uppercase">Loading 3D Scene</span>
                    </div>
                }
            >
                <Spline
                    scene={scene}
                    className={className}
                />
            </Suspense>
        </SplineErrorBoundary>
    )
}
