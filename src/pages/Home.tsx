import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
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
        <IonCard style={{width:'400px'}}>
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>React learning</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    <Link to = "/react_learning"><IonButton>Default</IonButton></Link>
    
    </IonCard>
    <IonCard style={{width:'400px'}}>
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>React Form page</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    <Link to = "/react-form"><IonButton>ReactFormPage</IonButton></Link>
    
    </IonCard>
  
      <Link to="/js-Basic">Js Basic</Link>
<ExploreContainer/>

    </IonContent>
  </IonPage>
  </>
  );
};

export default Home;
