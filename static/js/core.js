function updateAuthUI(user) {
    if (user) {
        navAuth.innerHTML = `Hi, ${user.name}`;
    } else {
        navAuth.innerHTML = `<a href="/login/">Login</a>`;
    }
}
