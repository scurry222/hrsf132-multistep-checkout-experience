class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: false,
      form: 1
    }

    this.toggleCheckout = this.toggleCheckout.bind(this);
    this.nextForm = this.nextForm.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  toggleCheckout(e) {
    e.preventDefault();
    this.setState({
      checkout: !this.state.checkout
    })
  }

  resetForm(e) {
    this.setState({
      form: 1
    })
    this.toggleCheckout(e);
  }

  nextForm(e) {
    e.preventDefault();
    this.setState({
      form: this.state.form + 1
    })
  }

  render() {
    const { form, checkout } = this.state;
    const { nextForm, resetForm, toggleCheckout } = this;

    return (
      <>
        {
          checkout
          ? <ProcessForms
              form={ form }
              nextForm={ nextForm }
              resetForm={ resetForm }
            />
          : <button onClick={(e) => {
              toggleCheckout(e);
            }}>checkout</button>
        }
      </>
    )
  }
}

const ProcessForms = ({ form, nextForm, resetForm }) =>
  <>
    {
      form === 1
      ? <form action="">
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="Email"/>
          <input type="text" placeholder="Password"/>
        </form>
      : form === 2
      ? <form action="">
          <input type="text" placeholder="Address Line 1"/>
          <input type="text" placeholder="Address line 2"/>
          <input type="text" placeholder="City"/>
          <input type="text" placeholder="State"/>
          <input type="text" placeholder="Zip Code"/>
        </form>
      : form === 3
      ? <form action="">
          <label>DO NOT ACTUALLY PUT CARD INFO HERE</label>
          <input type="text" placeholder="Credit Card #"/>
          <input type="text" placeholder="Expiration Date"/>
          <input type="text" placeholder="CVV"/>
          <input type="text" placeholder="Billing Zip Code"/>
        </form>
      : null
    }
    <button onClick={(e) =>
      form === 3 ? resetForm(e) : nextForm(e)
    }>Next</button>
  </>


ReactDOM.render(
  <App />,
  document.getElementById('app')
)