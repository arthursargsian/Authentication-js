class Utils {
    static getClient() {
        return JSON.parse(localStorage.getItem("client"));
    }

    static getToken() {
        return localStorage.getItem("token");
    }
}

export default Utils;
