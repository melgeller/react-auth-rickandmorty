const users = [
    {
        email: "silvia@silvia.com",
        password: "123456",
        username: "Silvia"
    },
    {
        email: "test@test.com",
        password: "test",
        username: "test"
    }
];

export const login = ({email, password}) => {
    const user = users.find(
        (user) => user.email === email && user.password === password
    );
    if (user === undefined) throw new Error();
    return user;
};