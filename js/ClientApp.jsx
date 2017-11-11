import React from 'react'
import { render } from 'react-dom'

const MyTitle = props => {
    const style = { color: props.color };
    return (
        <div>
          <h1 style={style}>
              {props.title}
          </h1>
        </div>
    );
};

const MyFirstComponent = () => {
  return (
    <div>
        <MyTitle title= 'Game of Thrones' color='YellowGreen' />
        <MyTitle title= 'Stranger Things' color='GreenYellow' />
        <MyTitle title= 'Rick and Morty' color='LimeGreen' />
        <MyTitle title= 'House of Cards' color='peru' />

    </div>
  );
};

render(<MyFirstComponent />, document.getElementById('app'));
