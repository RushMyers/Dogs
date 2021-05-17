import { Layout, Typography } from 'antd'
import React from "react";
import './AppHeader.css'

const { Header } = Layout

function AppHeader() {
    return (
        <Header className="app-header">
            <Typography.Title level={3} style={{ padding: 12 }}>
                Dawgs Unlimited
            </Typography.Title>
        </Header>
    )
}

export default AppHeader