'use client'

import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'


const MobileNav = ({
    user
}: MobileNavProps) => {
    const pathname = usePathname()

    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger>
                    <Image
                        src="/icons/hamburger.svg"
                        alt='menu'
                        width={30}
                        height={30}
                        className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent side='left' className=' border-none bg-white p-4'>
                    <SheetTitle>
                        <Link
                            href={'/'} className=' flex  cursor-pointer items-center gap-1 px-4'
                        >
                            <Image
                                src={"/icons/logo.svg"}
                                width={34}
                                height={34}
                                alt="Horizon Logo"
                            />

                            <h1 className=' text-26 font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>
                        </Link>

                    </SheetTitle>
                    <div className='mobilenav-sheet'>
                        <SheetClose asChild>
                            <nav className='flex h-full gap-6 flex-col pt-10 text-white'>

                                {sidebarLinks.map((item) => {
                                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

                                    return (
                                        <SheetClose asChild key={item.label}>
                                            <Link
                                                href={item.route}
                                                className={classNames('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })}
                                            >
                                                <Image
                                                    src={item.imgURL}
                                                    alt={item.label}
                                                    width={20}
                                                    height={20}
                                                    className={classNames({ 'brightness-[3] invert-0': isActive })}
                                                />

                                                <p className={classNames('text-16 font-semibold text-black-2', { '!text-white': isActive })}>{item.label}</p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}
                                User
                            </nav>
                        </SheetClose>

                        Footer
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav