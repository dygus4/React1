import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        image: PropTypes.string,
        children: PropTypes.node.isRequired,
        
    }
    static defaultProps = {
        children: <p>I can do all the things</p>
    }
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} heroImage={this.props.image}/>
        <div className={styles.description}>
            {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column titleColumn={'Animals'}>
          </Column>
          <Column titleColumn={'Plants'}>
          </Column>
          <Column titleColumn={'Minerals'}>
          </Column>
        </div>
      </section>
    )
  }
}

export default List;