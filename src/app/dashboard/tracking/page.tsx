import React from 'react'
import type { Metadata } from 'next'

import Tracking from "@/components/Tracking/Tracking"

export const metadata: Metadata = {
  title: 'Application Tracking',
  description: '...',
}

const TrackingPage = () => {
  return (
    <div>
      <Tracking />
    </div>
  )
}

export default TrackingPage;