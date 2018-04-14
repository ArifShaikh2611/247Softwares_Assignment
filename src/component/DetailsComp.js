import React, { Component } from 'react';
import update from 'immutability-helper'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import SubDetailsComp from './SubDetailsComp';

const divStyle= {
    margin : "20px"
}

class DetailsComp extends Component{
    state = {
        cards: [
            {
                id: 1,
                name: 'Event',
                displayType: 'showDetail'
            },
            {
                id: 2,
                name: 'Event Maker',
                displayType: 'showDetail'
            },
            {
                id: 3,
                name: 'Priority',
                displayType: 'showDetail'
            },
            {
                id: 4,
                name: 'Add',
                displayType: 'addDetail'
            }
        ]
    }

	moveCard = (dragIndex, hoverIndex) => {
        console.log('moveCard')
		const { cards } = this.state
		const dragCard = cards[dragIndex]

		this.setState(
			update(this.state, {
				cards: {
					$splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
				},
			}),
		)
    }

    render(){
        return(
            <div style={divStyle}>
                {this.state.cards.map((x, idx) => (
                    <SubDetailsComp
                        key={x.id}
                        index={idx}
                        labelName={x.name}
                        displayType={x.displayType}
                        moveCard={this.moveCard}
                    />
                ))}
            </div>
        )
    }
}

export default DragDropContext(HTML5Backend)(DetailsComp);
