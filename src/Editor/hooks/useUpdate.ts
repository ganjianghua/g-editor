import { useState, useCallback } from 'react'

/**
 * 强制更新组件
 */
export const useUpdate = (): VoidFunction => {
  const [, setState] = useState('')
  return useCallback(() => {
    setState(Date.now().toString())
  }, [])
}
