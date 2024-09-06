import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

export const LogOut = () => {
  const [AuthUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...AuthUser,
        user: null,
      });
      localStorage.removeItem("Users")
      toast.success("Logout successfully")
      window.location.reload()
    } catch (err) {
        toast.error("Error :" + err.message)
    }
  };
  return (
    <div>
      <button 
        className="py-2 px-3 text-white bg-rose-800 rounded-xl"
        onClick={handleLogout}
        >
        LogOut
      </button>
    </div>
  );
};
