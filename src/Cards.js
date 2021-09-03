import  React from 'react';
import './cards.scss';
import Data from './data.json';
import ButtonGroup from './ButtonGroup';
//import { BiLogOutCircle } from 'react-icons/bi';
export default class Cards extends React.Component{
   
    

    render(){
        return(
           <div className="cards-page">
              {Data.map(datas=>{
                  return(
                      <div className="card-holder">
                          <img  key={datas.id} src={datas.img_url}/>
                          <div className="card-about">
                             <div key={datas.id}>{datas.name}</div>
                             {datas.original_price?<div key={datas.id} style={{display:'flex'}}><div style={{textDecorationLine:'line-through',marginRight:'8px'}}>$ {datas.original_price}</div><div style={{color:'black'}}>$ {datas.final_price}</div></div>:<div key={datas.id} style={{color:'black'}}>$ {datas.final_price}</div>}
                          </div>
                          <div key={datas.id}>{datas.description}</div>
                          <ButtonGroup class="button"/>
                      </div>
                      
                      )})}
           </div>
              
           
           );
              }
}