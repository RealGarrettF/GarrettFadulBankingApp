function Deposit() {
  const ctx = React.useContext(UserContext);
  const sctx = React.useContext(UserSubmissions);
  const [currentAcct, setCurrentAcct] = useState(null);

  const [dataFields, setDataFields] = useState({
    deposit: 0,
  });

  React.useEffect(() => {
    const { users, setUsers } = ctx;
    setCurrentAcct(users[0]);
  }, [handleSubmit]);

  function onChange(event) {
    const { name, value } = event.target;
    setDataFields((currentState) => ({
      ...currentState,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    const { users, setUsers } = ctx;
    const { submissions, setSubmissions } = sctx;
    console.log(sctx.submissions);
    console.log(users);
    e.preventDefault();

    const deposit = Number(dataFields.deposit);
    setUsers((prev) => {
      const newdata = prev.map((state) => {
        if (state.email === currentAcct.email) {
          return {
            ...state,
            balance: state.balance + deposit,
          };
        } else {
          return state;
        }
      });
      return newdata;
    });

    setSubmissions((prev) => {
      return {
        ...prev,
        deposits: [...prev.deposits, deposit],
      };
    });
    
    if (deposit === 0) {
      return;
    }

    if (isNaN(deposit)) {
      alert("Please enter a number");
      setDataFields({
        deposit: 0,
      });
      return;
    }
    if (deposit <= 0) {
      alert("Number must be greater than 0");
      setDataFields({
        deposit: 0,
      });
      return;
    }



    alert("Deposit recieved");

    setDataFields({
      deposit: 0,
    });
  }

  return (
    <Card
      txtcolor="blue"
      header="Deposit"
      title={currentAcct && `Your current balance is ${currentAcct.balance} `}
      text="Deposit here!"
      body={
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Amount to Deposit:</label>
          <input
            style={{ display: "block", marginBottom: "20px" }}
            type="number"
            name="deposit"
            id="deposit"
            value={dataFields.deposit}
            onChange={onChange}
          />

          <input type="submit" value={"Deposit"} />
        </form>
      }
    />
  );
}
