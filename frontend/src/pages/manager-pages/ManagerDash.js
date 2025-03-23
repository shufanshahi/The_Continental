import React from 'react';
import { FiUsers, FiDollarSign, FiHome, FiPackage } from 'react-icons/fi';
import DashboardCard from "../../components/DashboardCard";
import Navbar from "../../components/Navbar";
import "./ManagerDash.css"

const Dashboard = () => {
    const cards = [
        {
            title: "Employee Information",
            description: "Manage 45 employee records",
            color: "#3B82F6",
            path: "/employee-info",
            icon: <FiUsers className="card-icon" />,
            stat: "45 Active"
        },
        {
            title: "Expense Management",
            description: "Track $12,450 in expenses",
            color: "#10B981",
            path: "/expenses",
            icon: <FiDollarSign className="card-icon" />,
            stat: "+15% from last month"
        },
        {
            title: "Room Management",
            description: "Manage 120 rooms",
            color: "#F59E0B",
            path: "/rooms",
            icon: <FiHome className="card-icon" />,
            stat: "82% Occupied"
        },
        {
            title: "Inventory Control",
            description: "Track 1,240 items",
            color: "#8B5CF6",
            path: "/inventory",
            icon: <FiPackage className="card-icon" />,
            stat: "32 Low stock items"
        }
    ];

    return (
        <div className="dashboard-wrapper">
            <Navbar />
            <div className="dashboard-container">
                {/*<header className="dashboard-header">*/}
                {/*    <h1 className="dashboard-title">Manager Dashboard</h1>*/}
                    {/*<div className="stats-container">*/}
                    {/*    <div className="stat-card">*/}
                    {/*        <h3>Total Revenue</h3>*/}
                    {/*        <p>$245,420</p>*/}
                    {/*        <span className="stat-badge success">+12.5%</span>*/}
                    {/*    </div>*/}
                    {/*    <div className="stat-card">*/}
                    {/*        <h3>Active Bookings</h3>*/}
                    {/*        <p>84 Rooms</p>*/}
                    {/*        <span className="stat-badge warning">3 Checkouts Today</span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                {/*</header>*/}

                <div className="grid-container">
                    {cards.map((card, index) => (
                        <DashboardCard
                            key={index}
                            title={card.title}
                            description={card.description}
                            color={card.color}
                            navigateTo={card.path}
                            icon={card.icon}
                            stat={card.stat}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;