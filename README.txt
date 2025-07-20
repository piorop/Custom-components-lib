Innowise Lab Internship: Custom-components-lib
Task 9. React Теория
https://innowise-group.atlassian.net/browse/JST-1645

How to use library(lib folder):
1. open library in VSC.
2. npm install (install dependencies)
3. npm run build (running prettier, eslint, webpack)
4. npm run storybook (for component preview)
5. npm run test (test components props in jest)


How to use library(project folder):
1. create react app

2. npm install @piorop/custom-components-lib@1.4.0
(install Custom-components-lib from npm)
https://www.npmjs.com/package/@piorop/custom-components-lib

3. If you want to use components in file paste:
import { Button, TextField, Select, Checkbox, Switch, Modal } from '@piorop/custom-components-lib'
import '@piorop/custom-components-lib/dist/main.css';

4. Enjoy custom components.

(Attached test file App.js using all components)

//--------------------------------------------------------
	//TEST App.js


import './App.css';
import { Button, TextField, Select, Checkbox, Switch, Modal } from '@piorop/custom-components-lib'
import '@piorop/custom-components-lib/dist/main.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [open, setOpen] = useState(false);
  const [switchState, setSwitchState] = useState(false);
  const [options, setOptions] = useState([]);
  const hasSpecialChars = (value) => /[^a-zA-Z]/.test(value);

  const handleOptionChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    setOptions((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value)
    );
  };

  return (
    <div className="App">
      <Button label='helooooo'></Button>
      <form>
        <TextField
          label='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={() => hasSpecialChars(name)}
        />
        <TextField
          label='surname'
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          error={() => hasSpecialChars(surname)}
        />
        <Select label='Age' value={age} onChange={(e) => setAge(e.target.value)} >
          <option>Ten</option>
          <option>Twenty</option>
          <option>Thirty</option>
        </Select>

        <fieldset>
          <legend>Choose options:</legend>
          {['option 1', 'option 2', 'option 3', 'option 4', 'option 5'].map((option) => (
            <Checkbox
              key={option}
              label={option}
              value={option}
              onChange={handleOptionChange}
            />
          ))}
        </fieldset>

        <Switch checked={switchState} onChange={() => setSwitchState(!switchState)}></Switch>

        <div>
        <Button type='button' label='Open modal' onClick={() => setOpen(true)}>Otwórz modal</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <h2>Modal</h2>
          <p>To jest treść modala</p>
        </Modal>
        </div>


        <Button label='submit' variant='outlined' size='small' 
        onClick={()=> alert(`
          name:${name} 
          surname:${surname} 
          age:${age} 
          checked:${switchState}
          selected options: ${options.join(', ')}
          `)}>
        </Button>
      </form>

    </div>
  );
}

export default App;
