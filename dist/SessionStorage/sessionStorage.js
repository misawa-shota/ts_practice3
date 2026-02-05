class SessionStorage {
    getItem() {
        return sessionStorage.getItem('Todos');
    }
    setItem(taskTodos) {
        sessionStorage.setItem('Todos', JSON.stringify(taskTodos));
    }
}
export const sessionStorageInstance = new SessionStorage();
//# sourceMappingURL=SessionStorage.js.map