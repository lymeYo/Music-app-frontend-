import { useEffect, useState } from 'react'

export const useOpenListener = (parentClass: string): any => {
  const [isOpen, setOpen] = useState<boolean>(false)

  useEffect(() => {
    const handler = (event) => {
      const elem = event.target

      if (!elem.closest('.' + parentClass)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handler)

    return () => document.removeEventListener('click', handler)
  }, [parentClass])

  return [isOpen, setOpen]
}
