import Container from './Components/Container';
import PhoneBookForm from './Components/PhoneBookForm';
import ContactsList from './Components/ContactsList';
import Search from './Components/Search';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import contactsSelectors from './redux/contacts/contacts-selectors';
import contactsOperations from './redux/contacts/contacts-operations';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
        <PhoneBookForm />
        <Search />
        {this.props.isLoadingContacts && <p>loading </p>}

        <ContactsList />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
