import React, {useState} from 'react';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

const chars = [
  {
    id: '1',
    name: 'Max',
    age: 26,
  },
  {
    id: '2',
    name: 'Vlad',
    age: 90,
  },
  {
    id: '3',
    name: 'Prekol',
    age: 17,
  },
  {
    id: '4',
    name: 'Zhestka',
    age: 11,
  },
]

export default function Board() {
  const [characters, setCharacters] = useState(chars)

  const handleOnDragEnd = (result) => {
    if (!result.destination) return
    // Fix outside null state
    const items = Array.from(characters)
    // Save state
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    setCharacters(items)
  }
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center'>
      <div className="text-3xl font-bold text-gray-900 mt-2 text-center">
        Boards
      </div>
      <div className="max-w-6xl border border-gray-100 w-full mx-auto">
        <div className="w-full mx-auto bg-white p-8 border border-gray-300">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId='characters'>
              {(provided) => (
                <ul className='border border-red-600' {...provided.droppableProps} ref={provided.innerRef}>
                  {characters.map(({id, name, age}, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <li
                            className='border border-gray-400'
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <div>{name}</div>
                            <div>{age}</div>
                          </li>
                        )}
                      </Draggable>
                    )
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
}