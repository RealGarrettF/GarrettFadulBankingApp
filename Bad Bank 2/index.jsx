

function Spa() {
  const [submissions, setSubmissions] = useState({
    accounts: [],
    deposits: [],
    withdraws: [],
  });
  const [users, setUsers] = useState([
    {
      name: "guest",
      email: "guest@gmail.com",
      password: "guest",
      balance: 0,
    }
  ]);

  React.useEffect(() => {
    users.map((user) => {
      setSubmissions((prev) => {
        return {
          ...prev,
          accounts: [...prev.accounts, user.name],
        };
      });
    });
  }, []);

  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider value={{ users, setUsers }}>
        <UserSubmissions.Provider value={{ submissions, setSubmissions }}>
          <div className="container" style={{ padding: "20px" }}>
            <Route path="/" exact component={Home} />
            <Route path="/createaccount/" component={CreateAccount} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/balance/" component={Balance} />
            <Route path="/alldata/" component={AllData} />
          </div>
        </UserSubmissions.Provider>
      </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));
