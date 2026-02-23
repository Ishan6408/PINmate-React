import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TeamProvider } from './context/TeamContext';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'));
const JoinTeam = lazy(() => import('./pages/JoinTeam'));
const CreateTeam = lazy(() => import('./pages/CreateTeam'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const ProfileSetup = lazy(() => import('./pages/ProfileSetup'));
const TeamChat = lazy(() => import('./pages/TeamChat'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black dark:border-white"></div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AuthProvider>
          <TeamProvider>
            <Router>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/join" element={<JoinTeam />} />
                  <Route path="/create" element={<CreateTeam />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/profile-setup" element={<ProfileSetup />} />
                  <Route path="/chat" element={<TeamChat />} />
                </Routes>
              </Suspense>
            </Router>
          </TeamProvider>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
