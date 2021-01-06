class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: false,
      form: 1
    }

    this.toggleCheckout = this.toggleCheckout.bind(this);
    this.nextForm = this.nextForm.bind(this);
    this.purchase = this.purchase.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  toggleCheckout() {
    // e.preventDefault();
    this.setState({
      checkout: !this.state.checkout
    })
  }

  purchase() {
    this.setState({
      form: 1
    })
    this.toggleCheckout();
  }

  nextForm(e) {
    // e.preventDefault();

    this.resetForm();
    this.setState({
      form: this.state.form + 1
    })
  }

  resetForm() {
    Array.from(document.querySelectorAll('input')).forEach(input => input.value = '');
  }

  submitHandler(formInfo, callback) {
    console.log('we here')
    axios.post('/submit_form', formInfo)
    .then(() => callback()),
    (error) => console.log('error posting form: ', error)
  }


  render() {
    const { form, checkout } = this.state;
    const { nextForm, purchase, toggleCheckout, handleInput, handleSubmit } = this;

    return (
      <>
        {
          checkout
            ? form === 1
              ? <F1 
                nextForm={nextForm}
                submitHandler={this.submitHandler}
                /> 
              : form === 2
              ? <F2 
                nextForm={nextForm}
                submitHandler={this.submitHandler}
                />
              : form === 3
              ? <F3 
                purchase={purchase}
                submitHandler={this.submitHandler}
                />
              : null
            : <button onClick={(e) => toggleCheckout(e)}>checkout</button>
        }
      </>
    )
  }
}

class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const info = this.state;
    this.props.submitHandler(info, () => {
      for (let key of Object.keys(info)) {
        this.setState({
          [key]: ''
        })
      }
      this.props.nextForm();
    })
  }

  render() {
    const { name, email, password } = this.state;
    const { handleInput, handleSubmit } = this;
  
    return (
      <form onSubmit={ handleSubmit }>
        <input 
          type="text"
          name="name" 
          placeholder="Name" 
          value={ name }
          onChange={ handleInput }/>
        <input 
          type="text"
          name="email" 
          placeholder="Email" 
          value={ email }
          onChange={ handleInput }/>
        <input 
          type="text"
          name="password" 
          placeholder="Password" 
          value={ password }
          onChange={ handleInput }/>
          <button>Next</button>
    </form>
    )
  }
}

class F2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleInput(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const info = this.state;
    this.props.submitHandler(info, () => {
      for (let key of Object.keys(info)) {
        this.setState({
          [key]: ''
        })
      }
      this.props.nextForm();
    })
  }

  render() {
    const { address1, address2, city, state, zip } = this.state;
    const { handleInput, handleSubmit } = this;

    return (
      <form onSubmit={ handleSubmit }>
        <input 
          type="text"
          name="address1" 
          placeholder="Address Line 1" 
          value={ address1 }
          onChange={ handleInput }/>
        <input 
          type="text"
          name="address2" 
          placeholder="Address line 2" 
          value={ address2 }
          onChange={ handleInput }/>
        <input 
          type="text"
          name="city" 
          placeholder="City" 
          value={ city }
          onChange={ handleInput }/>
        <input 
          type="text"
          name="state" 
          placeholder="State" 
          value={ state }
          onChange={ handleInput }/>
        <input 
          type="text"
          name="zip" 
          placeholder="Zip Code" 
          value={ zip }
          onChange={ handleInput }/>
        <button>Next</button>
      </form>
    )
  }
}

class F3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCard: '',
      exp: '',
      cvv: '',
      billing: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const info = this.state;
    this.props.submitHandler(info, () => {
      for (let key of Object.keys(info)) {
        this.setState({
          [key]: ''
        })
      }
      this.props.purchase();
    })
  }

  render() {
    const { creditCard, exp, cvv, billing } = this.state;
    const { handleInput, handleSubmit } = this;


    return (
      <form onSubmit={ handleSubmit }>
        <label>DO NOT ACTUALLY PUT YOUR CARD INFO HERE</label>
        <input 
          type="text"
          name="creditCard" 
          placeholder="Credit Card #" 
          value={ creditCard }
          onChange={ handleInput }/>
        <input 
          type="text"
          name="exp" 
          placeholder="Expiration Date" 
          value={ exp }
          onChange={ handleInput }/>
        <input 
          type="text"
          name="cvv" 
          placeholder="CVV"
          value={ cvv }
          onChange={ handleInput }/>
        <input 
          type="text"
          name="billing" 
          placeholder="Billing Zip Code" 
          value={ billing }
          onChange={ handleInput }/>
        <button>Purchase</button>
      </form>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)