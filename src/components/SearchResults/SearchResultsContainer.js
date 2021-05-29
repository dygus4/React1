import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForAllList} from '../../redux/cardsRedux.js';



const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  return {
    cards: getCardsForAllList(state, id),
  };
};

export default connect(mapStateToProps)(SearchResults);