function Withdraw(){
  const ctx = React.useContext(UserContext);
  const sctx = React.useContext(UserSubmissions);

  const [dataFields, setDataFields] = useState({
    withdraw: 0

});



function onChange(event) {
  const { name, value } = event.target;
  setDataFields(currentState => ({
    ...currentState,
    [name]: value
  }));
}


function handleSubmit(e) {
  e.preventDefault();
  
  const withdraw = Number(dataFields.withdraw);
  
  if (withdraw === 0) {
    return;
  }

  if (isNaN(withdraw)) {
    alert('Please enter a number');
    setDataFields({
      withdraw: 0
    });
    return;
  }
  if(withdraw <= 0) {
    alert("Number must be greater than 0")
    setDataFields({
      withdraw: 0
    });
    return;
  }

  const mostRecentAccount = ctx.users[ctx.users.length - 1];

  if (withdraw > mostRecentAccount.balance) {
    alert("Insufficient funds");
    setDataFields({
      withdraw: 0
    });
    return;
  }
  
  
 
  const updatedUser = { ...mostRecentAccount, balance: mostRecentAccount.balance - withdraw };
  const updatedUsers = [...ctx.users.slice(0, -1), updatedUser];
 
  ctx.setUsers(updatedUsers);

  sctx.setSubmissions(prevSubmissions => {
    const lastSubmission = prevSubmissions[prevSubmissions.length - 1];
    const newWithdrawals = [...lastSubmission.withdrawals, withdraw];
    const updatedSubmission = {...lastSubmission, withdrawals: newWithdrawals};
    return [...prevSubmissions.slice(0, -1), updatedSubmission];
  });

  alert("Withdraw received");

  setDataFields({
    withdraw: 0
  });


}


  return (



    <Card    
      txtcolor="blue"
      header="Deposit"
      title={`Your current balance is ${ctx.users[ctx.users.length - 1 ].balance} `}
      text="Feel free to move around using the navigation bar."
      body= { <form onSubmit={handleSubmit}>
      <label htmlFor="name">Amount to Withdraw:</label>
      <input style ={{ display: "block", marginBottom: "20px" }} type="number" name="withdraw" id="withdraw" value={dataFields.withdraw} onChange={onChange}/>
   
      <input type="submit" value={"Withdraw"} />
    </form> }

    />
    
    );  
}
