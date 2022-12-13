import { createContext, useState } from "react"; 

const FavoritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavorite: (favouriteMeetup) => {}, //these methods do nothing but only helps in beter autocompletion when called.
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavourites] = useState([]);

    function addFavoriteHandler(favouriteMeetup) {
        //useState can also accept a function. This is used because useState is not updated instantaneously.
        //.concat adds a new value and creates a new array.
        setUserFavourites((prevUserFavourites)=>{
            return prevUserFavourites.concat(favouriteMeetup);
        });
    }

    function removeFavoriteHandler(meetupId){
        setUserFavourites((prevUserFavourites)=>{
            return prevUserFavourites.filter(meetup=> meetup.id !== meetupId);
        });
    }

    function itemIsFavoriteHandler(meetupId){
        return userFavorites.some(meetup=> meetup.id === meetupId);
    }

    const context = {
        favourites: userFavorites,
        totalFavourites: userFavorites.length,
        addFavorite: addFavoriteHandler, //add pointer to method in this .js file so that other components can access it.
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;