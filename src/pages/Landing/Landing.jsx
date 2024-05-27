import Timer from "../../components/Timer";
import Login from "../Login/login";
import './Landing.css'


const Landing = () => {
  return (
    <div className="landingpage">
        <section className="description">
            <h3>SIL Frontend Engineer Assessment</h3>
                <p>
                    The frontend is hosted on vercel while the backend is hosted on render
                </p>
            <div>
                <p>Renders free-plan for hosting projects deactivates the backend system while not in use.
                    Upon loading the landing page for the first time, the system takes approximately 1 minutes to spin the backend server
                    hence the timer!
                    However, one can still proceed to signup however no information will be displayed until the period ends
                </p>
                
            </div>
        </section>
        <section>
            <div className="timer">
                <Timer/>
            </div>
            <div className="login">
                <Login/>
            </div>
            
        </section>
        
        
    </div>
  )
}

export default Landing