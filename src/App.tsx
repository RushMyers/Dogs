import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import { createEndpointFromRoute } from './common/helpers/RouteHelpers';
import Breeds from './components/Breeds/Breeds';
import { Routes } from './common/enumerations/Routes';
import { Layout } from 'antd';
import AppHeader from './components/AppHeader/AppHeader';

const { Content } = Layout

function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Content>
        <Route path={`${createEndpointFromRoute(Routes.breeds)}`} component={Breeds} />
      </Content>
    </BrowserRouter>
  );
}

export default App;
