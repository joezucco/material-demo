import { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function CheckboxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            "aria-label": "secondary checkbox",
          }}
        />
      }
      label='Testing Checkbox'
    />
  );
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <CheckboxExample />
        <ButtonGroup variant='contained' color='primary'>
          <Button startIcon={<SaveIcon />}>Save</Button>
          <Button startIcon={<DeleteIcon />}>Discard</Button>
        </ButtonGroup>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
    </div>
  );
}

export default App;
