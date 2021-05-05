import { Component } from 'react';
import { connect } from 'react-redux';
import Container from '../components/Container';
import PhoneBookForm from '../Components/PhoneBookForm';
import Search from '../Components/Search';
import ContactsList from '../Components/ContactsList';

import { contactsOperations, contactsSelectors } from '../redux/contacts';

class TodosView extends Component {
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
  isLoadingTodos: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(contactsOperations.fetchTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosView);
