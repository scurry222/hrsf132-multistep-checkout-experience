class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: false,
      form: 1
    }

    this.toggleCheckout = this.toggleCheckout.bind(this);
    this.nextForm = this.nextForm.bind(this);
    this.backToHome = this.backToHome.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  toggleCheckout() {
    this.setState({
      checkout: !this.state.checkout
    })
  }

  backToHome() {
    this.setState({
      form: 1
    })
    this.toggleCheckout();
  }

  nextForm() {
    this.resetForm();
    this.setState({
      form: this.state.form + 1
    })
  }

  resetForm() {
    Array.from(document.querySelectorAll('input')).forEach(input => input.value = '');
  }


  render() {
    const { form, checkout } = this.state;
    const { nextForm, backToHome, toggleCheckout } = this;

    return (
      <>
        {
          checkout
            ? <ProcessForms
              form={form}
              nextForm={nextForm}
              backToHome={backToHome}
            />
            : <button onClick={() => {
              toggleCheckout();
            }}>checkout</button>
        }
      </>
    )
  }
}

const ProcessForms = ({ form, nextForm, backToHome }) =>
  <>
    {
      form === 1
        ? <form action="/submit_form">
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="password" placeholder="Password" />
        </form>
        : form === 2
          ? <form action="/submit_form">
            <input type="text" name="address1" placeholder="Address Line 1" />
            <input type="text" name="address2" placeholder="Address line 2" />
            <input type="text" name="city" placeholder="City" />
            <input type="text" name="state" placeholder="State" />
            <input type="text" name="zip-code" placeholder="Zip Code" />
          </form>
          : form === 3
            ? <form action="/submit_form">
              <label>DO NOT ACTUALLY PUT YOUR CARD INFO HERE</label>
              <input type="text" name="credit-card" placeholder="Credit Card #" />
              <input type="text" name="exp-date" placeholder="Expiration Date" />
              <input type="text" name="cvv" placeholder="CVV" />
              <input type="text" name="billing" placeholder="Billing Zip Code" />
            </form>
            : null
    }
    <button onClick={() =>
      form === 3 ? backToHome() : nextForm()
    }>Next</button>
  </>


ReactDOM.render(
  <App />,
  document.getElementById('app')
)