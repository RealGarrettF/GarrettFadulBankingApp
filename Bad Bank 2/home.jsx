function Home(){
  return (
    <Card
      txtcolor="black"
      header="Welcome!"
      title="Welcome to the Bad Bank!"
      text="Feel free to move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
