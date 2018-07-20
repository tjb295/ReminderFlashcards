import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import {Card, CardSection, Header, Button } from './common';
import { deckFetch } from '../actions/FlashCardActions';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';

class DeckDisplay extends Component {


    componentWillMount() {
        this.props.deckFetch();

        this.createDataSource(this.props.decks);
    }

    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps.decks);
    }
    
    createDataSource(decks) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(decks);
    }

    onDeckPress(deck) {
        Actions.gameScreen({ deck: deck });
    }

    renderRow(deck) {
        return <Button toPress={Actions.gameScreen.bind(this, {deck: deck})}>{deck.DeckName}</Button>;
    }

  

    render(){
        return(
            <Card>
                <CardSection>
                    <ListView 
                            enableEmptySections
                            dataSource={this.dataSource}
                            renderRow={this.renderRow}
                            />
                </CardSection>
            </Card>

        );
    }
}

const mapStateToProps = state => {
    const decks = _.map(state.deckFetch.decks, (val, uid) => {
        return {...val, uid};
    });

    return { decks: decks };
}

export default connect(mapStateToProps, { deckFetch })(DeckDisplay);