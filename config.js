const config = {
    baseUrl: process.env.BASE_URL || 'http://localhost:5173',
    credentials: {
        email: process.env.EMAIL || 'example@example.com',
        password: process.env.PASSWORD || 'asdf',
    },
    urlPatterns: {
        dashboardPage: 'dashboard',
        searchPage: 'search',
    },
    pageNames: {
        dashboardPage: 'dashboard',
        searchPage: 'search',
    }
};

module.exports = config;