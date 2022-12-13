import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const navigate = useNavigate();
    function addMeetupHandler(meetupData) {
        fetch('https://meet-up-react-e7f5e-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response);
            navigate('/');
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
}

export default NewMeetupPage;