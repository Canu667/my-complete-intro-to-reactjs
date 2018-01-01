// @flow

declare var module: {
    hot: {
        accept(path: string, callback: () => void): void
    }
};

export type Show = {
    title: string,
    description: string,
    year: string,
    imdbID: string,
    imdbRating: number,
    poster: string,
    trailer: string
};

declare type ActionType = 'SET_SEARCH_TERM' | 'ADD_API_DATA';

declare type ActionT<A: ActionType, P> = {|
    type: A,
    payload: P
|};

// new action
export type Action = ActionT<'SET_SEARCH_TERM', string> | ActionT<'ADD_API_DATA', Show>;