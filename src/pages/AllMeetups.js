import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://meet-up-react-e7f5e-default-rtdb.europe-west1.firebasedatabase.app/meetups.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const meetups = [];
                for(const key in data){
                    const meetup = {
                        id: key,
                        ...data[key] //... is a spread operator it copies all the properties and values of that objeect
                    };
                    meetups.push(meetup);
                }
                setIsLoading(false);
                setLoadedMeetups(meetups);
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []); //empty dependencies because we pass no external dependency into useEffect

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    );
}

export default AllMeetupsPage;