import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react'
import NavigationLink from './NavigationLink'
import { useTranslations } from 'next-intl'
import { ThemeSwitcher } from './ThemeSwitcher'
import LocaleSwitcher from './LocaleSwitcher'

export default function NavBar () {
  const t = useTranslations('NavBar')

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent /* className="hidden sm:flex gap-4" */ justify="center">
        <NavbarItem>
            <NavigationLink href="/">{t('home')}</NavigationLink>
        </NavbarItem>
        <NavbarItem>
            <NavigationLink href="/food">{t('food')}</NavigationLink>
        </NavbarItem>
        <NavbarItem>
            <NavigationLink href="/bar">{t('bar')}</NavigationLink>
        </NavbarItem>
        <NavbarItem>
            <NavigationLink href="/entertainment">{t('entertainment')}</NavigationLink>
        </NavbarItem>
        <NavbarItem>
            <NavigationLink href="/tops">{t('tops')}</NavigationLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem /* className="hidden lg:flex" */>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem /* className="hidden lg:flex" */>
            <LocaleSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
