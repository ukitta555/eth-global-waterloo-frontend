import React from "react";
import {Outlet} from "react-router-dom";

export default function Header() {
    return (
        <>
            <div> Header goes here </div>
            <Outlet />
        </>
    )
}