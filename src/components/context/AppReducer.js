const AppReducer = (state, action) => {
    switch(action.type){
        case 'SET_POPULAR_MOVIES':
            return {...state, popularMovies: action.payload}
        case 'SET_TRENDING_MOVIES':
            return {...state, trendingMovies: action.payload}
        case 'SET_LATEST_MOVIES':
            return {...state, latestMovies: action.payload}
        case 'SET_TOPRATED_MOVIES':
            return {...state, topRatedMovies: action.payload}
        case 'SET_MOVIE_SEARCH_RESULTS':
            return {...state, searchResults: action.payload}
        case 'SET_SIMILAR_MOVIES':
            return {...state, similarMovies: action.payload}
        case 'ADD_TO_WATCHLIST':
            return {...state, watchlist: [...state.watchlist, action.payload]}
        case 'ADD_TO_WATCHEDLIST':
            return {...state, watched: [...state.watched, action.payload]}
        default:
            return state
    }
}

export default AppReducer

// https://www.debuggr.io/react-update-unmounted-component/