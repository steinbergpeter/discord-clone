'use client'

import CreateServerModal from '@/components/modals/create-server-modal'
import { useState, useEffect } from 'react'

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <CreateServerModal />
    </>
  )
}

export default ModalProvider
