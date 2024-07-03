import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiArrowUpWideFill } from 'react-icons/ri';

import { classNames } from '../../utils/classNames';

const DropdownMenu = () => {
  return (
    <Menu as="div" className="relative inline-block">
      {({ open }) => (
        <>
          <MenuButton className="w-full justify-center rounded-md px-3 py-1 font-semibold">
            {open ? (
              <RiArrowUpWideFill size={24} color="white" aria-hidden="true" />
            ) : (
              <GiHamburgerMenu size={24} color="white" aria-hidden="true" />
            )}
          </MenuButton>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                {({ focus }) => (
                  <NavLink
                    to="/introduction"
                    className={classNames(
                      focus ? 'bg-gray-100 text-green-700' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    )}
                  >
                    KT Wiz 소개
                  </NavLink>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <NavLink
                    to="/players"
                    className={classNames(
                      focus ? 'bg-gray-100 text-green-700' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    )}
                  >
                    선수단
                  </NavLink>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <NavLink
                    to="/song"
                    className={classNames(
                      focus ? 'bg-gray-100 text-green-700' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    )}
                  >
                    응원가
                  </NavLink>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <NavLink
                    to="/tickets"
                    className={classNames(
                      focus ? 'bg-gray-100 text-green-700' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    )}
                  >
                    예매 방법
                  </NavLink>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <NavLink
                    to="/cheer-squad"
                    className={classNames(
                      focus ? 'bg-gray-100 text-green-700' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    )}
                  >
                    응원단
                  </NavLink>
                )}
              </MenuItem>
            </div>
          </MenuItems>
        </>
      )}
    </Menu>
  );
};

export default DropdownMenu;
