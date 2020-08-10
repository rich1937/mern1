import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      users:[],
      id=0,
      name:'',
      email:'',
      password:''
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col s6">
          <form>
            <div class="input-field col s12">
              <i class="material-icons prefix">person</i>
              <input type="text" id="autocomplete-input" class="autocomplete" />
              <label for="autocomplete-input">Name</label>
            </div>
            <div class="input-field col s12">
              <i class="material-icons prefix">mail</i>
              <input type="email" id="autocomplete-input" class="autocomplete" />
              <label for="autocomplete-input">Email</label>
            </div>
            <div class="input-field col s12">
              <i class="material-icons prefix">vpn_key</i>
              <input type="password" id="autocomplete-input" class="autocomplete" />
              <label for="autocomplete-input">Password</label>
            </div>
            <button class="btn waves-effect waves-light right" type="submit" name="action">Submit
              <i class="material-icons right">send</i>
            </button>
          </form>

        </div>
        <div className="col s6">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Alvin</td>
                <td>Eclair</td>
                <td>$0.87</td>
                <td>
                  <button class="btn waves-effect waves-light" type="submit" name="action">
                     <i class="material-icons">edit</i>
                  </button>
                </td>
                <td>
                  <button class="btn waves-effect waves-light" type="submit" name="action">
                    <i class="material-icons">delete</i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
