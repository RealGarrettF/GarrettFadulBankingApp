// import UserCards from "./UserCards";
function AllData() {
  const ctx = React.useContext(UserContext);
  const sctx = React.useContext(UserSubmissions);
  const { users, setUsers } = ctx;
  const { submissions, setSubmissions } = sctx;


  {

  }
  return (
    <div>
      {users.length > 0 ? (
        <div
          class="card bg-primary mb-3 text-white"
          style={{ maxWidth: "18rem" }}
        >
          <h5>List of users:</h5>
          {users.map((user, index) => (
            <>
              <div className="card-header">{user.name}</div>
              <div className="card-body">
                {user.email && <h5 className="card-title">{user.email}</h5>}
                {user.balance && <p className="card-text">{user.balance}</p>}
                {user.body}
                {user.status && <div id="createStatus">{user.status}</div>}
              </div>
            </>
          ))}
        </div>
      ) : (
        <>
          <div
            class="card bg-primary mb-3 text-white"
            style={{ maxWidth: "18rem" }}
          >
            <h1>No user added</h1>
          </div>
        </>
      )}


      {submissions.accounts.length > 0 ? (
        <div
          class="card bg-primary mb-3 text-white"
          style={{ maxWidth: "18rem" }}
        >
          <h5>Accounts added:</h5>
          {submissions.accounts.map((acct, index) => {
            return <div key={index}>{acct.name}</div>;
          })}
        </div>
      ) : (
        <div
          class="card bg-primary mb-3 text-white"
          style={{ maxWidth: "18rem" }}
        >
          <h5>No accounts</h5>
        </div>
      )}


      {submissions.deposits.length > 0 ? (
        <div
          class="card bg-primary mb-3 text-white"
          style={{ maxWidth: "18rem" }}
        >
          <h5>List of deposits:</h5>
          {submissions.deposits.map((acct, index) => {
            return <div key={index}>{acct}</div>;
          })}
        </div>
      ) : (
        <div
          class="card bg-primary mb-3 text-white"
          style={{ maxWidth: "18rem" }}
        >
          <h5>No deposits</h5>
        </div>
      )}


      {submissions.withdraws.length > 0 ? (
        <div
          class="card bg-primary mb-3 text-white"
          style={{ maxWidth: "18rem" }}
        >
          <h5>List of withdraws:</h5>
          {submissions.withdraws.map((acct, index) => {
            return <div key={index}>{acct}</div>;
          })}
        </div>
      ) : (
        <div
          class="card bg-primary mb-3 text-white"
          style={{ maxWidth: "18rem" }}
        >
          <h5>No withdraws</h5>
        </div>
      )}
    </div>
  );
}
