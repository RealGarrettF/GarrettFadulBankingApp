 

function CreateAccount(){
  const ctx = React.useContext(UserContext); 
  const sctx = React.useContext(UserSubmissions);

   const [dataFields, setDataFields] = useState({
    name: '',
    email: '',
    password: '',
    balance: 0

});

function onChange(event) {
  const { name, value } = event.target;
  setDataFields(currentState => ({
    ...currentState,
    [name]: value
  }));
}

  function handleSubmit(event) {
    event.preventDefault();
    if (!dataFields.name && !dataFields.email && !dataFields.password) {
      return;
    }
    if (!dataFields.name || !dataFields.email || !dataFields.password) {
      alert("Please fill in all fields");
      return;
    }
    if (dataFields.password.length < 8) {
      alert("Password must be greater than 8 characters")
      return;
    }

    ctx.setUsers(prevState => [...prevState, {...dataFields, balance: 0}]);
    
    sctx.setSubmissions(prevSubmissions => {
      const newSubmission = {
        accounts: [dataFields],
        deposits: [],
        withdraws: []
      };
      return [...prevSubmissions, newSubmission];
    });
  
  
  

    setDataFields({
      name: '',
      email: '',
      password: ''
    });
    alert("Account successfully created!");

  } 

  return (
      <Card    
      txtcolor="black"
      header="Create Account"
      title="Create new account?"
      body= { <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input style ={{ display: "block", marginBottom: "20px" }} type="text" name="name" id="name" value={dataFields.name} onChange={onChange} />
      <label htmlFor="email">Email:</label>
      <input style ={{ display: "block", marginBottom: "20px" }} type="email" name="email" id="email" value={dataFields.email} onChange={onChange} />
      <label htmlFor="password">Password:</label>
      <input style ={{ display: "block", marginBottom: "20px" }} type="password" name="password" id="password" value={dataFields.password} onChange={onChange} />
      <input type="submit" value={ctx.users.length >= 2 ? "Create another account" : "Create account"} />
    </form> }

    />
  
    
  );
}
