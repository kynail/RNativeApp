import React from 'react';
import Board from 'react-trello';
import { View, Text } from 'react-native-web';
import { useSelector, useDispatch } from 'react-redux';
import { addCard } from './redux/cardSlice';

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Planned Tasks',
      label: '2/2',
      cards: [
        {
          id: 'Card1',
          title: 'Write Blog',
          description: 'Can AI make memes',
          label: '30 mins',
          draggable: false,
        },
        {
          id: 'Card2',
          title: 'Pay Rent',
          description: 'Transfer via NEFT',
          label: '5 mins',
          metadata: { sha: 'be312a1' },
        },
        {
          id: 'Card1',
          title: 'Write Blog',
          description: 'Can AI make memes',
          label: '30 mins',
          draggable: false,
        },
      ],
    },
    {
      id: 'lane2',
      title: 'Completed',
      label: '0/0',
      cards: [],
    },
    {
      id: 'lane3',
      title: 'to do',
      label: '0/0',
      cards: [],
    },
  ],
};

function ShowCards() {
  const add = useSelector((state) => state.cardreducer.cards);
  const dispatch = useDispatch();

  return (
    <View>
      <button
        type="button"
        aria-label="Increment value"
        onClick={() => dispatch(addCard('BOABA'))}
      >
        Ajouter carte
      </button>
      <Text>{add}</Text>
      <Board data={data} editable="true" />
    </View>
  );
}
export default ShowCards;
