import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

interface Props {
  children: React.ReactNode;
}

export const AdminRoute: React.FC<Props> = ({ children }) => {
  const { user } = useAuth();

  if (!user || user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
