export async function login(
    email: string,
    password: string
) {
    const response = await fetch("/api/auth/login",
        {
            method: "POST",
            headers: {"Content-Type":"application/json",},
            credentials: "include",
            body: JSON.stringify({email,password,}),
        }
    );

    const result =await response.json();

    if (!response.ok) {
        throw new Error(result.message);
    }
    return result;
}

export async function signup(fullName: string, email: string, password: string) {
    const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify({ fullName, email, password, }),
    }
    );
    const result = await response.json();
    if (!response.ok) { throw new Error(result.message); }
    return result;
}