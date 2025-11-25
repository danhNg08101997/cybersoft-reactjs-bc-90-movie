import React from 'react';
import {NavLink} from "react-router-dom";

function Navbar(props) {
    return (<nav className="bg-neutral-primary border-default">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2.5">
                <NavLink to="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/>
                    <span className="self-center text-xl text-headings font-semibold whitespace-nowrap">Admin</span>
                </NavLink>
                <button data-collapse-toggle="navbar-dropdown" type="button"
                        className="inline-flex items-center p-2 ms-3 w-10 h-10 justify-center inline-flex items-center p-2 ms-3 w-10 h-10 justify-center text-heading bg-neutral-primary box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base focus:outline-none md:hidden"
                        aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                         height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                              d="M5 7h14M5 12h14M5 17h14"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul className="flex flex-col font-medium p-4 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:mt-0 md:text-sm  md:border-0 md:bg-neutral-primary md:space-x-8 md:rtl:space-x-reverse space-y-1">
                        <li>
                            <NavLink to="dashboard"
                                     className={({isActive}) => isActive ? "block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0 md:text-fg-brand md:dark:bg-transparent" : "block py-2 px-3 text-body rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0  md:dark:hover:bg-transparent"}
                                     aria-current="page">Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="add-user"
                                     className={({isActive}) => isActive ? "block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0 md:text-fg-brand md:dark:bg-transparent" : "block py-2 px-3 text-body rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0  md:dark:hover:bg-transparent"}
                            >
                                Add User
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;