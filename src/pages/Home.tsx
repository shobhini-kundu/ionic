import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { info } from './array';

const Home: React.FC = () => {
  info.map((name)=>{console.log(<tr><td>name</td></tr>)})
  
  return (
  <>
  <table>
    <thead><tr>
      <th>name</th>
      <th>last name
      </th>
      <th>age</th>
    </tr>
    </thead>
    <tbody>
      <tr>
      <td>ram</td>
      <td>kumar</td>      
      <td>41</td>
    </tr>
     <tr>
      <td>ram</td>
      <td>kumar</td>      
      <td>42</td>
    </tr>
    <tr>
       <td>ram</td>
      <td>kumar</td>      
      <td>43</td>
    </tr>
     <tr>
       <td>ram</td>
      <td>kumar</td>      
      <td>44</td>
    </tr>
    </tbody>
    
  </table>
  <div></div>
  </>
  );
};

export default Home;
