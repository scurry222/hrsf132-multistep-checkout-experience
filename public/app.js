class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: false,
      form: 1
    };
    this.toggleCheckout = this.toggleCheckout.bind(this);
    this.nextForm = this.nextForm.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  toggleCheckout(e) {
    e.preventDefault();
    this.setState({
      checkout: !this.state.checkout
    });
  }

  resetForm(e) {
    this.setState({
      form: 1
    });
    this.toggleCheckout(e);
  }

  nextForm(e) {
    e.preventDefault();
    this.setState({
      form: this.state.form + 1
    });
  }

  render() {
    const {
      form,
      checkout
    } = this.state;
    const {
      nextForm,
      resetForm,
      toggleCheckout
    } = this;
    return /*#__PURE__*/React.createElement(React.Fragment, null, checkout ? /*#__PURE__*/React.createElement(ProcessForms, {
      form: form,
      nextForm: nextForm,
      resetForm: resetForm
    }) : /*#__PURE__*/React.createElement("button", {
      onClick: e => {
        toggleCheckout(e);
      }
    }, "checkout"));
  }

}

const ProcessForms = ({
  form,
  nextForm,
  resetForm
}) => /*#__PURE__*/React.createElement(React.Fragment, null, form === 1 ? /*#__PURE__*/React.createElement("form", {
  action: ""
}, /*#__PURE__*/React.createElement("input", {
  type: "text",
  placeholder: "Name"
}), /*#__PURE__*/React.createElement("input", {
  type: "text",
  placeholder: "Email"
}), /*#__PURE__*/React.createElement("input", {
  type: "text",
  placeholder: "Password"
})) : form === 2 ? /*#__PURE__*/React.createElement("form", {
  action: ""
}, /*#__PURE__*/React.createElement("input", {
  type: "text",
  placeholder: "Address Line 1"
}), /*#__PURE__*/React.createElement("input", {
  type: "text",
  placeholder: "Address line 2"
}), /*#__PURE__*/React.createElement("input", {
  type: "text",
  placeholder: "City"
}), /*#__PURE__*/React.createElement("input", {
  type: "text",
  placeholder: "State"
}), /*#__PURE__*/React.createElement("input", {
  type: "text",
  placeholder: "Zip Code"
})) : form === 3 ? /*#__PURE__*/React.createElement("form", {
  action: ""
}, /*#__PURE__*/React.createElement("label", null, "DO NOT ACTUALLY PUT CARD INFO HERE"), /*#__PURE__*/React.createElement("input", {
  type: "text",
  placeholder: "Credit Card #"
}), /*#__PURE__*/React.createElement("input", {
  type: "text",
  placeholder: "Expiration Date"
}), /*#__PURE__*/React.createElement("input", {
  type: "text",
  placeholder: "CVV"
}), /*#__PURE__*/React.createElement("input", {
  type: "text",
  placeholder: "Billing Zip Code"
})) : null, /*#__PURE__*/React.createElement("button", {
  onClick: e => form === 3 ? resetForm(e) : nextForm(e)
}, "Next"));

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiY2hlY2tvdXQiLCJmb3JtIiwidG9nZ2xlQ2hlY2tvdXQiLCJiaW5kIiwibmV4dEZvcm0iLCJyZXNldEZvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInJlbmRlciIsIlByb2Nlc3NGb3JtcyIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsR0FBTixTQUFrQkMsS0FBSyxDQUFDQyxTQUF4QixDQUFrQztBQUNoQ0MsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxRQUFRLEVBQUUsS0FEQztBQUVYQyxNQUFBQSxJQUFJLEVBQUU7QUFGSyxLQUFiO0FBS0EsU0FBS0MsY0FBTCxHQUFzQixLQUFLQSxjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixDQUF0QjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjRCxJQUFkLENBQW1CLElBQW5CLENBQWhCO0FBQ0EsU0FBS0UsU0FBTCxHQUFpQixLQUFLQSxTQUFMLENBQWVGLElBQWYsQ0FBb0IsSUFBcEIsQ0FBakI7QUFDRDs7QUFFREQsRUFBQUEsY0FBYyxDQUFDSSxDQUFELEVBQUk7QUFDaEJBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLFNBQUtDLFFBQUwsQ0FBYztBQUNaUixNQUFBQSxRQUFRLEVBQUUsQ0FBQyxLQUFLRCxLQUFMLENBQVdDO0FBRFYsS0FBZDtBQUdEOztBQUVESyxFQUFBQSxTQUFTLENBQUNDLENBQUQsRUFBSTtBQUNYLFNBQUtFLFFBQUwsQ0FBYztBQUNaUCxNQUFBQSxJQUFJLEVBQUU7QUFETSxLQUFkO0FBR0EsU0FBS0MsY0FBTCxD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ZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjaGVja291dDogZmFsc2UsXG4gICAgICBmb3JtOiAxXG4gICAgfVxuXG4gICAgdGhpcy50b2dnbGVDaGVja291dCA9IHRoaXMudG9nZ2xlQ2hlY2tvdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm5leHRGb3JtID0gdGhpcy5uZXh0Rm9ybS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVzZXRGb3JtID0gdGhpcy5yZXNldEZvcm0uYmluZCh0aGlzKTtcbiAgfVxuXG4gIHRvZ2dsZUNoZWNrb3V0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjaGVja291dDogIXRoaXMuc3RhdGUuY2hlY2tvdXRcbiAgICB9KVxuICB9XG5cbiAgcmVzZXRGb3JtKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZvcm06IDFcbiAgICB9KVxuICAgIHRoaXMudG9nZ2xlQ2hlY2tvdXQoZSk7XG4gIH1cblxuICBuZXh0Rm9ybShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZm9ybTogdGhpcy5zdGF0ZS5mb3JtICsgMVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBmb3JtLCBjaGVja291dCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IG5leHRGb3JtLCByZXNldEZvcm0sIHRvZ2dsZUNoZWNrb3V0IH0gPSB0aGlzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtcbiAgICAgICAgICBjaGVja291dFxuICAgICAgICAgID8gPFByb2Nlc3NGb3Jtc1xuICAgICAgICAgICAgICBmb3JtPXsgZm9ybSB9XG4gICAgICAgICAgICAgIG5leHRGb3JtPXsgbmV4dEZvcm0gfVxuICAgICAgICAgICAgICByZXNldEZvcm09eyByZXNldEZvcm0gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA6IDxidXR0b24gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgdG9nZ2xlQ2hlY2tvdXQoZSk7XG4gICAgICAgICAgICB9fT5jaGVja291dDwvYnV0dG9uPlxuICAgICAgICB9XG4gICAgICA8Lz5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgUHJvY2Vzc0Zvcm1zID0gKHsgZm9ybSwgbmV4dEZvcm0sIHJlc2V0Rm9ybSB9KSA9PlxuICA8PlxuICAgIHtcbiAgICAgIGZvcm0gPT09IDFcbiAgICAgID8gPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIi8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgOiBmb3JtID09PSAyXG4gICAgICA/IDxmb3JtIGFjdGlvbj1cIlwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyBMaW5lIDFcIi8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBZGRyZXNzIGxpbmUgMlwiLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkNpdHlcIi8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTdGF0ZVwiLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlppcCBDb2RlXCIvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA6IGZvcm0gPT09IDNcbiAgICAgID8gPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgPGxhYmVsPkRPIE5PVCBBQ1RVQUxMWSBQVVQgQ0FSRCBJTkZPIEhFUkU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQ3JlZGl0IENhcmQgI1wiLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkV4cGlyYXRpb24gRGF0ZVwiLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkNWVlwiLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkJpbGxpbmcgWmlwIENvZGVcIi8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDogbnVsbFxuICAgIH1cbiAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PlxuICAgICAgZm9ybSA9PT0gMyA/IHJlc2V0Rm9ybShlKSA6IG5leHRGb3JtKGUpXG4gICAgfT5OZXh0PC9idXR0b24+XG4gIDwvPlxuXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEFwcCAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4pIl19