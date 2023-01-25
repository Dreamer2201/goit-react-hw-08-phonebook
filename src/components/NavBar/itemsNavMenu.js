import { nanoid } from 'nanoid';

const itemsNavMenu = [
    {
        text: "Home",
        id: nanoid(),
        to: "/"
    },
    {
        text: "Contacts",
        id: nanoid(),
        to: "/contacts"
    },
    {
        text: "Register",
        id: nanoid(),
        to: "/register"
    },
    {
        text: "Login",
        id: nanoid(),
        to: "/login"
    }

];

export default itemsNavMenu;