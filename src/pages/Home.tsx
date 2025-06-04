import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { Link } from 'react-router-dom';


const Home: React.FC = () => {
  
  return (
  <>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>test</IonTitle>
      </IonToolbar>

    </IonHeader>
    <IonContent fullscreen={true}>
      <Link to="/js-Basic">Js Basic</Link>
<ExploreContainer/>

    </IonContent>
  </IonPage>
  </>
  );
};

export default Home;
