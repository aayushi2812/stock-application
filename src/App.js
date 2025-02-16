import logo from './logo.svg';
import './App.css';
import sampleVideo from "./stockApp.mp4";
import { Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <h2>Stock Application</h2>
      <div className='body'>
        <div className="text">
          <p>
            Stock Application is an iOS application developed using SwiftUI, designed to help users monitor and track their favorite stocks efficiently. 
            The app integrates real-time market data, an intuitive search interface, 
            and persistent data storage to enhance the user experience. The app offers 4 main features:
          </p>
          <ol>
            <li>
              <strong>Stock Selection and Monitoring</strong>
              <ul>
                <li>Users can select stocks for tracking and add them to either a watch list or an active list, 
                  offering flexibility in monitoring market trends.</li>
                  <li>Users can also mark the selected stock as Cold, Hot and Very Hot as per rank.</li>
              </ul>
            </li>
            <li>
              <strong>List Editing & Management</strong>
              <ul>
                <li>Users can move stocks between the active list and the watch list effortlessly.</li>
                <li>Provides the ability to delete stocks from lists when no longer needed, ensuring a clutter-free experience.</li>
              </ul>
            </li>
            <li>
              <strong>API Integration with MS Finance</strong>
              <ul>
                <li>Real-time stock data is retrieved using the MS Finance API (via RapidAPI), ensuring up-to-date financial information.</li>
              </ul>
            </li>
            <li>
              <strong>Data Persistence & User Preferences</strong>
              <ul>
                <li>Uses CoreData to store user preferences, selected stocks, rankings, and list placements.</li>
                <li>Ensures a consistent experience across sessions and devices by maintaining stored data.</li>
              </ul>
            </li>
          </ol>
          <Button variant="outlined" style={{color:"white"}} onClick={() => window.open("https://github.com/aayushi2812/DarkSkyDestinations", "_blank")}>Github Link</Button>
        </div>
        <video width="700" height="700" controls>
          <source src={sampleVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
