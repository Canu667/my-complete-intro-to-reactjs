import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../store';
import { setSearchTerm } from '../actionCreators';
import { shallow, render } from 'enzyme' // add render import
import Search, { Unwrapped as UnwrappedSearch } from '../Search';
import ShowCard from '../ShowCard';
import preload from '../../data.json'

test('Search renders correctly', () => {
    const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm='' />);

    expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
    const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm='' />);
    expect(preload.shows.length).toEqual(component.find(ShowCard).length);
});

test('Search should render correct amount of shows based on search', () => {
    const searchWord = 'black';
    store.dispatch(setSearchTerm(searchWord));
    const component = render(
        <Provider store={store}>
            <MemoryRouter>
                <Search shows={preload.shows} />
            </MemoryRouter>
        </Provider>
    );
    const showCount = preload.shows.filter(show =>
        `${show.title.toUpperCase()} ${show.description.toUpperCase()}`.includes(searchWord.toUpperCase())
    ).length;
    expect(showCount).toEqual(component.find('.show-card').length);
});