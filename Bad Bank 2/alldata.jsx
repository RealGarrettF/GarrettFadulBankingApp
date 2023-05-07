function AllData() {
      const ctx = React.useContext(UserContext);
      const sctx = React.useContext(UserSubmissions);

      const allUsers = ctx.users.map(user => `Name: ${user.name}, Email: ${user.email}, Password: ${user.password}, Balance: ${user.balance.toString()}`).join('\n');
      // Create a string of all the users' information
      
      const allSubmissions = sctx.submissions.map(submission => {
        const accountInfo = submission.accounts.join(', ');
        const depositInfo = submission.deposits.join(', ');
        const withdrawInfo = submission.withdraws.join(', ');
  
        return `Accounts added: ${accountInfo} \nDeposits made: ${depositInfo} \nWithdraws made: ${withdrawInfo}`;
      }).join('\n\n');



      return (
        <div>
          <Card    
            txtcolor="black"
            header="Users"
            title="Accounts created & balances"
            body={allUsers}
          />
          <Card    
            txtcolor="black"
            header="All Submissions"
            title="All Submissions made"
            body={allSubmissions}
          />
        </div>
      );
    }
    