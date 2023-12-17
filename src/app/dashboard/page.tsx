import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Dashboard",
    // default: "Dashboard",
  },
};

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
