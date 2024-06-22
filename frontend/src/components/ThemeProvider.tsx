'use client'
import { ReactNode, useEffect, useState } from 'react'
import Sidebar from './Sidebar'

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState('dark')

    const getOsTheme = () => {
        const media = '(prefers-color-scheme: dark)'
        return window.matchMedia(media).matches ? 'dark' : 'light'
    }

    const handleThemeChange = () => setTheme(getOsTheme())

    useEffect(() => {
        const osThemeWatcher = window.matchMedia('(prefers-color-scheme: dark)')
        osThemeWatcher.addEventListener('change', handleThemeChange)
        return () => {
            osThemeWatcher.removeEventListener('change', handleThemeChange)
        }
    }, [theme])

    useEffect(() => {
        setTheme(getOsTheme())
    }, [])


    return (
        <div id="theme-provider"
            className='flex flex-col items-center gap-3 sm:gap-6 bg-[--background] text-[--on-background]'
            data-theme={theme}>
            <Sidebar theme={theme} setTheme={setTheme} />
            {children}
        </div>
    )
}

export default ThemeProvider
