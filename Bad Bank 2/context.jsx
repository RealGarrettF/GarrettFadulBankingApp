const { useState } = React;

const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);
const UserSubmissions = React.createContext({
  submissions: [],
  addSubmission: () => {},
});

function Card(props) {
  function classes() {
    const bg = props.bgcolor ? " text-bg-" + props.bgcolor : "bg-primary";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
    return "card " + bg + " mb-3";
  }

  return (
    <div class="card bg-primary mb-3 text-white" style={{ maxWidth: "18rem" }}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <p className="card-text">{props.text}</p>}
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    </div>
  );
}
