const getIsLoggedIn = store => store.auth.isLoggedIn;
const getNameUser = store => store.auth.user.name;
const getModal = store => store.auth.isModalOpen;

export { getIsLoggedIn, getNameUser, getModal };