"use client";

import { FC } from "react";
import { getAdminHomeUrl } from "../../../config/url.config";
import { useAuth } from "../../../hooks/useAuth";
import s from "../Navigation.module.scss";
import MenuItem from "../menu/MenuItem";
import LogoutButton from "./Logout";

const AuthItems: FC = () => {
  const { user } = useAuth();

  return (
    <div className={s.container}>
      {user ? (
        <>
          <MenuItem
            item={{
              icon: "MdSettings",
              link: "/profile",
              title: "Profile",
            }}
          />
          <LogoutButton />
        </>
      ) : (
        <MenuItem
          item={{
            icon: "MdLogin",
            link: "/auth",
            title: "Login",
          }}
        />
      )}

      {user?.isAdmin && (
        <MenuItem
          item={{
            icon: "MdOutlineLock",
            link: getAdminHomeUrl(),
            title: "Admin panel",
          }}
        />
      )}
    </div>
  );
};

export default AuthItems;
