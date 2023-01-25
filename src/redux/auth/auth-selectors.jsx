const getIsLoggedIn = store => store.auth.isLoggedIn;
const getNameUser = store => store.auth.user.name;

export { getIsLoggedIn, getNameUser };