import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import AssetView from "./views/Assets/AssetView";
import EmployeeView from "./views/Employees/EmployeeView"
import AppLayout from "./AppLayout";
import LoginView from "./views/Login/LoginView";
import RegisterView from "./views/Login/RegisterView";
import NotFoundView from "./views/Misc/NotFoundView";
import ProtectedRoute from "./hooks/Auth/ProtectedRoute";
import { UserProvider } from "./hooks/Auth/UserContext";
import AssetAgreementView from "./views/AssetAgreements/AssetAgreementView";
import NewRequest from "./views/AssetAgreements/NewRequest";
import AssetAgreementDetails from "./views/AssetAgreements/AssetAgreementDetails";
import UserSettingsView from "./views/UserSettings/UserSettingsView";
import ApplicationSettingsView from "./views/ApplicationSettings/ApplicationSettingsView"
function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route path="login" element={<LoginView />}></Route>
          <Route path="register" element={<RegisterView />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/" exact element={<AppLayout />}>
              <Route path="new-user-agreement" element={<NewRequest />}></Route>
              <Route path="assets" element={<AssetView />}></Route>
              <Route path="employees" element={<EmployeeView />}></Route>
              <Route path="asset-agreements" element={<AssetAgreementView />}></Route>
              <Route path="asset-agreements/details/:id" element={<AssetAgreementDetails/>}></Route>
              <Route path="user-settings" element={<UserSettingsView />}></Route>
              <Route path="application-settings" element={<ApplicationSettingsView />}></Route>
              <Route path="*" element={<NotFoundView></NotFoundView>}></Route>
            </Route>
          </Route>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
