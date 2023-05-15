
function NavBar() {


  return (
    <>



      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">BadBank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className={`nav-item ${location.pathname === '/createaccount/' ? 'active' : ''}`}>
              <a className="nav-link" href="#/createaccount/" title="Create a new account" >Create Account</a>
            </li>
            <li className={`nav-item ${location.pathname === '/deposit/' ? 'active' : ''}`}>
              <a className="nav-link" href="#/deposit/" title="Deposit money" >Deposit</a>
            </li>
            <li className={`nav-item ${location.pathname === '/withdraw/' ? 'active' : ''}`}>
              <a className="nav-link" href="#/withdraw/" title="Withdraw money" >Withdraw</a>
            </li>
            <li className={`nav-item ${location.pathname === '/balance/' ? 'active' : ''}`}>
              <a className="nav-link" href="#/balance/" title="View balance" >Balance</a>
            </li>
            <li className={`nav-item ${location.pathname === '/alldata/' ? 'active' : ''}`}>
              <a className="nav-link" href="#/alldata/" title="View all data" >All Data</a>
            </li>
            <li className={`nav-item ${location.pathname === '/login/' ? 'active' : ''}`}>
              <a className="nav-link" href="#/login/" title="Login here" >Login</a>
            </li>          
          </ul>
        </div>
      </nav>
    </>
  );
}