import Timer from "../../components/Timer";
import Login from "../Login/login";
import './Landing.css'


const Landing = () => {
  return (
    <div className="landingpage">
        <h1>SIL Frontend Engineer Assessment</h1>
        <div>
            <p>
                The frontend of the system is hosted on vercel while the backend is hosted on render
            </p>
        </div>
        <div>
            <p>Renders free-plan for hosting projects deactivates the backend system while not in use.
                <br />
                upon loading the landing page for the first time, the system takes approximately 1 minutes to spin the backend server
                <br />
                hence the timer!
                However, one can still proceed to signup however no information will be displayed until the period ends
            </p>
            <Timer/>
        </div>
        
        <Login/>
    </div>
  )
}

export default Landing