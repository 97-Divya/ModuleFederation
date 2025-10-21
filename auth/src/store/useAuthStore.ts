import { create } from "zustand";

interface AuthState {
  users: Record<string, string>;
  loggedInUser: string | null;
  signup: (username: string, password: string) => boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const storedUsers = JSON.parse(localStorage.getItem("users") || "{}");

const useAuthStore = create<AuthState>((set, get) => ({
  users: storedUsers,
  loggedInUser: localStorage.getItem("loggedInUser") || null,

  signup: (username, password) => {
    const users = { ...get().users };
    if (users[username]) {
      alert("Username already exists!");
      return false;
    }
    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));
    set({ users });
    alert("Signup successful! Please login.");
    return true;
  },

  login: (username, password) => {
    const users = get().users;
    if (users[username] && users[username] === password) {
      localStorage.setItem("loggedInUser", username);
      set({ loggedInUser: username });
      window.location.href = "/home"; // ✅ Navigate in host
      return true;
    }
    alert("User not found or incorrect password! Please sign up.");
    return false;
  },

  logout: () => {
    localStorage.removeItem("loggedInUser");
    set({ loggedInUser: null });
    window.location.href = "/login"; // ✅ Redirect to login
  },
}));

export default useAuthStore;
