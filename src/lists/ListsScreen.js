import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import loadList from 'lists/data/ListsData';

export class ListScreen extends Component {
  componentWillMount() {
    this.props.fetchLists();
  }

  render() {
    if (this.props.lists[0]) {
      return <Text>Lists! {this.props.lists[0].name}</Text>;
    } else {
      return null;
    }
  }
}

const mapDispatchToProps = dispatch => ({
  fetchLists: () => dispatch(loadList),
});

const mapStateToProps = state => ({
  lists: state.lists.lists,
});

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);
