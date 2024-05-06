import { useAuth0 } from '@auth0/auth0-react';
import './App.css';

function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <div className="card">
      <div className="hero-section">
        <header>
          {isAuthenticated && <h3>Hello {user.name}</h3>}
          {isAuthenticated ? (
            <button className="action-button" onClick={(e) => logout()}>
              Logout
            </button>
          ) : (
            <button
              className="action-button"
              onClick={(e) => loginWithRedirect()}
            >
              Login
            </button>
          )}
        </header>
      </div>
    </div>
  );
}

export default App;
