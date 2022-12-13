import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if(favoritesCtx.totalFavourites === 0){
        content = <p>You got no favorites yet. Try adding some?</p>;
    }
    else{
        content = <MeetupList meetups={favoritesCtx.favourites}/>;
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
}

export default FavoritesPage;