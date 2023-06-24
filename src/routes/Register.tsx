import React from "react";

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.currentTarget.email.value);
    console.log(event.currentTarget.password.value);
    console.log(event.currentTarget.publickey.value);
}
export default function Register() {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type={"email"} name={"email"} />
                </label>
                <label>
                    Password:
                    <input type={"password"} name={"password"} />
                </label>
                <label>
                    Your public key of the wallet:
                    <input type={"text"} name={"publickey"} />
                </label>
                <button>
                    Register!
                </button>
            </form>
        </>
    )
}