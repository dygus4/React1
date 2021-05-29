import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
//import {settings} from '../../data/dataStore';
//import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';


class SearchResults extends React.Component {
    
    static propTypes = {
      title: PropTypes.string.isRequired,   
      icon: PropTypes.node,
      cards: PropTypes.array, 
      
    }
    
    
    render() {
      const {title, icon, cards} = this.props;
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>
            {title}
            <span className={styles.icon}>
              <Icon name={icon}></Icon>
            </span>
          </h3>
          <div className={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData}/>
            ))}
          </div>
          
          
        </section>
      );
    }
}

export default SearchResults;