import React, {useEffect, useState} from "react";
import BoardActivity from "../components/BoredActivity";

const BoredActivityContainer= () => {

    const [enterprise, setEnterprise] = useState({type: "", activity: ""});
    const [activityClicked, setActivityClicked] = useState(false);

    useEffect(() => {
        fetchEnterprise();
    }, [])

    const fetchEnterprise = () => {
        setActivityClicked(false);
        fetch("https://www.boredapi.com/api/activity")
        .then(response => response.json())
        .then(data => setEnterprise({type: data.type, activity: data.activity}))

    }

    const displayActivity = () => {
        setActivityClicked(true);

    }

    return (
        <>
            <h1>I'm bored...... gimme something to do!</h1>
            <h2>The type of mystery activity will be: {enterprise.type}</h2>
            <button onClick={displayActivity}>Display Activity</button>
            {activityClicked ? <BoardActivity enterprise={enterprise}/> : null}
            <button onClick={fetchEnterprise}>Fetch Activity</button>
        </>
    )

}

export default BoredActivityContainer;