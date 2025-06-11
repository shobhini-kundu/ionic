import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonItem, IonLabel, IonList, IonPage, IonThumbnail } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { products } from './Data'
interface IProduct{
  id:number,
      name:string ,
      price: number,
      category: string,
      description: string,
      image: string,
      inStock: boolean,
      rating: number
}
const Reactlearning:React.FC = () => {
  const [selectedProduct,setSelectedProduct]=useState<IProduct[]>([])
  useEffect(()=>{
    console.log("all selected product",selectedProduct);
    
  },[selectedProduct]);
const handleSelectProduct = (product:IProduct)=>{
  // console.log("selected product",product)
  setSelectedProduct((prevProduct)=>[...prevProduct,product])
}
  const handleRemoveProduct=(product:IProduct)=>{
    const newProduct =selectedProduct.filter((productItem)=>{
      return productItem.id !== product.id;
    })
setSelectedProduct(newProduct)
  }


  return (
    <IonPage>
      <IonContent>
        <div style={{ display:"flex", flexWrap:"wrap"}}>
        <IonCard>
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        {products.map((product,productIndex)=>{
          return (
            <div key={productIndex}>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src={product.image}/>
            </IonThumbnail>
            <div><IonLabel>{product.name}</IonLabel>
            <div>{product.description}</div>
            <div>{product.price}</div>
            <br/>
            <IonButton onClick={()=>{handleSelectProduct(product)}}>Select Product</IonButton>
              </div>          
              </IonItem>
          </IonList>
          
            </div>
          )
        })}
        
        <div>The Selected Items
        {selectedProduct.map((selectedProduct,selectedProductIndex)=>{
          return (
            <div key={selectedProductIndex}>
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src={selectedProduct.image}/>
            </IonThumbnail>
            <div><IonLabel>{selectedProduct.name}</IonLabel>
            <div>{selectedProduct.description}</div>
            <div>{selectedProduct.price}</div>
            <br/>
            <IonButton onClick={()=>{handleRemoveProduct(selectedProduct)}}>Remove Product</IonButton>

              </div>          
              </IonItem>
          </IonList>
          
            </div>
          )
        })}
        </div>
        </IonCardContent>
        </IonCard>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Reactlearning