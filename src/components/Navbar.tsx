import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle} from "@nextui-org/navbar";
import Link from "next/link";
import NextImage from "next/image";
import {Avatar} from "@nextui-org/avatar";
import {useRouter} from "next/router";

export default function NavBar() {

    const router = useRouter();

    return(
        <Navbar>
            <NavbarContent justify="start">
                <NavbarMenuToggle
                    className="sm:hidden"
                />
            </NavbarContent>

            <NavbarContent justify="center">
                <NavbarBrand>
                    <Avatar ImgComponent={NextImage} imgProps={{width: 300,
                        height:300}} src="/logo.png" size="sm" />
                    <p className="ml-2 font-bold text-inherit">BusCoruña</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                <NavbarItem isActive={router.pathname === '/'}>
                    <Link color="foreground" href="/">
                        Inicio
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={router.pathname === '/graph'}>
                    <Link href="/graph" >
                        Grafo
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={router.pathname === '/map'}>
                    <Link color="foreground" href="/map">
                        Mapa
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}
