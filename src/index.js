import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { LoaderProvider } from "./context/LoaderContext";
import { Toaster as HotToaster } from "react-hot-toast";
import { AuthProvider } from './context/AuthContext';
import { ScrollToTop } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <HotToaster duration={2000}
        toastOptions={{
          success: {
            style: {
              background: "rgb(22, 101, 52, 0.80)",
              border: "1px solid rgb(76, 175, 80)",
              backdropFilter: "blur(10px)",
              color: "white",
              textAlign: "center"
            },
          },
          error: {
            style: {
              background: "rgb(159, 18, 57, 0.80)",
              border: "1px solid rgb(244, 67, 54)",
              backdropFilter: "blur(10px)",
              color: "white",
              textAlign: "center"
            },
          },
          loading: {
            style: {
              background: "rgb(124, 45, 18, 0.80)",
              border: "1px solid rgb(124, 45, 18)",
              backdropFilter: "blur(10px)",
              color: "white",
            },
          },
        }}
      />
      <AuthProvider>
        <LoaderProvider>
          <App />
        </LoaderProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
