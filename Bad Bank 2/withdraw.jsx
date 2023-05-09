function Withdraw() {
  const ctx = React.useContext(UserContext);
  const sctx = React.useContext(UserSubmissions);
  const [currentAcct, setCurrentAcct] = useState(null);
  const [dataFields, setDataFields] = useState({
    withdraw: 0,
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

    const withdrawal = Number(dataFields.withdraw);
    if (withdrawal === 0) {
      return;
    }

    if (withdrawal > currentAcct.balance) {
      alert("Insufficient funds");
      setDataFields({
        withdraw: 0,
      });
      return;
    }

    if (isNaN(withdrawal)) {
      alert("Please enter a number");
      setDataFields({
        withdraw: 0,
      });
      return;
    }
    if (withdrawal <= 0) {
      alert("Number must be greater than 0");
      setDataFields({
        withdraw: 0,
      });
      return;
    }

    setUsers((prev) => {
      const newdata = prev.map((state) => {
        if (state.email === currentAcct.email) {
          return {
            ...state,
            balance: state.balance - withdrawal,
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
        withdraws: [...prev.withdraws, withdrawal],
      };
    });


    alert("Withdraw received");
    setDataFields({
      withdraw: 0,
    });
  }

  return (
    <Card
      txtcolor="blue"
      header="Withdraw"
      title={currentAcct && `Your current balance is ${currentAcct.balance} `}
      text="Withdraw here!"
      body={
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Amount to Withdraw:</label>
          <input
            style={{ display: "block", marginBottom: "20px" }}
            type="number"
            name="withdraw"
            id="withdraw"
            value={dataFields.withdraw}
            onChange={onChange}
          />

          <input type="submit" value={"Withdraw"} />
        </form>
      }
    />
  );
}
