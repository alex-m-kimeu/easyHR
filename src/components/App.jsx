import { Route, Switch } from 'react-router-dom';
import EmployeeRecords from "./EmployeeRecords"
import Header from "./Header"
import NewHire from "./NewHire"

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/easyHR/">
        <EmployeeRecords />
      </Route>
      <Route path="/new-hire">
        <NewHire /> 
      </Route>
      <Route path="*">
        <h1 className="font-sans text-4xl font-bold text-center">404 Not Found</h1>
      </Route>
    </Switch>
    </>
  )
}

export default App
