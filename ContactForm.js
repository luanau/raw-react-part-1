var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
  },

  onNameChange: function (event) {
    this.setState({name: event.target.value});
    this.props.onChange(this.state);
  },

  onEmailChange: function (event) {
    this.setState({email: event.target.value});
    this.props.onChange(this.state);
  },

  onDescriptionChange: function (event) {
    this.setState({description: event.target.value});
    this.props.onChange(this.state);
  },

  getInitialState: function () {
    return this.props.contact;
  },

  render: function() {
    return (
      React.createElement('form', {className: 'ContactForm'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Name (required)',
          value: this.state.name,
          onChange: this.onNameChange,
        }),
        React.createElement('input', {
          type: 'email',
          placeholder: 'Email',
          value: this.state.email,
          onChange: this.onEmailChange,
        }),
        React.createElement('textarea', {
          placeholder: 'Description',
          value: this.state.description,
          onChange: this.onDescriptionChange,
        }),
        React.createElement('button', {type: 'submit'}, "Add Contact")
      )
    )
  },
});
