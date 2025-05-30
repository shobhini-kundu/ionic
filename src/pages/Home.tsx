import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';


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
<ExploreContainer/>

    </IonContent>
  </IonPage>
  </>
  );
};

export default Home;
