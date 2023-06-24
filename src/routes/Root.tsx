import React from 'react';
import {Link} from "react-router-dom";
export default function Root() {
    return (
        <>
            <div>
                <Link to={"login"}>
                    <button>
                        Login page!
                    </button>
                </Link>
            </div>
            <div>
                <Link to={"register"}>
                    <button>
                        Register page!
                    </button>
                </Link>
            </div>
            I'm a root component!
        </>
    )
}