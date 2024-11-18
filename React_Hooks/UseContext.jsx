import { createContext, useContext } from 'react';

const ThemeContext = createContext(null);

export default function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
}

function Form() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
          <Panel title="Welcome">
          <Button>Sign up</Button>
             <Button>Log in</Button>
     </Panel>
          </div>
        </div>
      </div>
      
      <h1>UseContext:</h1>
      <h4>
      <ul>
        <li>
       UseContext is used ito manage global data in reaut application</li>
       <li>We dont wont to use props to passing the data one to last components we can use context</li>
       </ul>
       <h2>we use in </h2>
       <ul>
        <li>Globel state</li>
        <li>Services</li>
        <li>themes </li>
       </ul>

      </h4>
      <h1></h1>
    </div>
    
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}
