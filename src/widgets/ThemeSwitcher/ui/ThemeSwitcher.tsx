import { Theme, useTheme } from '@/app/providers/Theme'
import { Button } from '@/shared/ui/button'
import { Moon, Sun } from 'lucide-react'
import { memo } from 'react'

export const ThemeSwitcher = memo(() => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button variant={'ghost'} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <Sun /> : <Moon />}
    </Button>
  )
})
