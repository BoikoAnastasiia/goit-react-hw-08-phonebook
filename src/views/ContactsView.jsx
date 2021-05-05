import { Component } from 'react';
import { connect } from 'react-redux';
import Container from '../Components/Container';
import PhoneBookForm from '../Components/PhoneBookForm';
import Search from '../Components/Search';
import ContactsList from '../Components/ContactsList';

import { contactsOperations, contactsSelectors } from '../redux/contacts';

class ContactView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
        <PhoneBookForm />
        <Search />
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactView);
