/* eslint-disable @next/next/no-img-element */
'use client'

import NavigationLink from './NavigationLink'
import LocaleSwitcher from './LocaleSwitcher'
import Link from 'next/link'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { AppPathnames } from '@/config'

export default function HeaderBar () {
  const t = useTranslations('NavBar')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <Navbar shouldHideOnScroll isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="md:hidden"/>
        <NavbarBrand className="md:flex w-full items-center justify-center" justify="center">
          <Link href="/" className="flex gap-2 items-center justify-center">
            <img alt="Highlights Bcn site main logo" src="/mapLogo.png" className="h-10"/>
            <div className='flex flex-col'>
              <p className="font-bold text-inherit tracking-wide text-lg leading-5">Highlights</p>
              <p className="font-bold text-inherit tracking-wide text-lg leading-5">Barcelona</p>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>
        <NavbarContent className="hidden md:flex gap-4" justify="center">
          {AppPathnames.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <NavigationLink href={item}>{t(item)}</NavigationLink>
            </NavbarItem>
          ))}
        </NavbarContent>
      <NavbarContent className="hidden md:flex gap-4" justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
            <LocaleSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {AppPathnames.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NavigationLink href={item} onLinkClick={handleLinkClick}>{t(item)}</NavigationLink>
          </NavbarMenuItem>
        ))}
        <div className="flex flex-row justify-start items-center">
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
          <NavbarItem>
              <LocaleSwitcher />
          </NavbarItem>
        </div>
      </NavbarMenu>
    </Navbar>
  )
}
