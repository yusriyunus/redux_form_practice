import React from "react";
import ContactForm from "./ContactForm";

class App extends React.Component {
  submit = values => {
    console.log(values);
  };

  render() {
    return <ContactForm onSubmit={this.submit} />;
  }
}

export default App;
