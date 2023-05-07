function Deposit(){
  const ctx = React.useContext(UserContext);
  const sctx = React.useContext(UserSubmissions);

  const [dataFields, setDataFields] = useState({
    deposit: 0

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
  
  const deposit = Number(dataFields.deposit);
  
  if (deposit === 0) {
    return;
  }

  if (isNaN(deposit)) {
    alert('Please enter a number');
    setDataFields({
      deposit: 0
    });
    return;
  }
  if(deposit <= 0) {
    alert("Number must be greater than 0")
    setDataFields({
      deposit: 0
    });
    return;
  }
  
  
  const mostRecentAccount = ctx.users[ctx.users.length - 1];
  const updatedUser = { ...mostRecentAccount, balance: mostRecentAccount.balance + deposit };
  const updatedUsers = [...ctx.users.slice(0, -1), updatedUser];
 
  sctx.setSubmissions(prevSubmissions => {
    const lastSubmission = prevSubmissions[prevSubmissions.length - 1];
    const newDeposits = [...lastSubmission.deposits, deposit];
    const updatedSubmission = {...lastSubmission, deposits: newDeposits};
    return [...prevSubmissions.slice(0, -1), updatedSubmission];
  });

  ctx.setUsers(updatedUsers);

 
  alert("Deposit recieved");

  setDataFields({
    deposit: 0
  });


}


  return (
  


    <Card    
      txtcolor="blue"
      header="Deposit"
      title={`Your current balance is ${ctx.users[ctx.users.length - 1 ].balance} `}
      text="Feel free to move around using the navigation bar."
      body= { <form onSubmit={handleSubmit}>
      <label htmlFor="name">Amount to Deposit:</label>
      <input style ={{ display: "block", marginBottom: "20px" }} type="number" name="deposit" id="deposit" value={dataFields.deposit} onChange={onChange}/>
   
      <input type="submit" value={"Deposit"} />
    </form> }

    />
    
    );  
}
