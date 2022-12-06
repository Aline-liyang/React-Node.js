import { Component } from "react";
import { Button, Select } from "semantic-ui-react";
import './Recherche.css';


class Recherche extends Component {
    state = { depart: 0, categorie: "" }
    //onDepartementChange = () => { this.state({ depart: 40 })}
    //onCategorieChange = () => { this.state({ categorie: "sport" }) }
    //onDepartementChange = (date) => { this.setState({ depart: date.value })}
    //onCategorieChange =(date)=>{ this.setState({ categorie: date.value })}

    onDepartementChange = (e,data) => { this.setState({depart:data.value})}
    onCategorieChange = (e,data) => {this.setState({categorie:data.value})}

    render(){
        console.log(this.state);
        const optionsDpt = [
            { value: "44", key: "44", text:"Loire Atlantique"},
            { value: "49", key: "49", text:"Maine et Loire"},
            { value: "53", key: "53", text:"Mayenne"},
            { value: "72", key: "72", text:"Sarthe"},
            { value: "85", key: "85", text:"Vendée"},
        ];
 
     
        const optionsType = [
            { value: "cpam", key:"cpam", text: "Caisse primaire d'assurance maladie"},
            { value: "cci", key:"cci", text: "Chambre de commerce et d'industrie"},
            { value: "crous", key:"crous", text: "Crous et ses antennes"}
        ]
 
        
        return(
            <div className="recherche">
                <Select placeholder="Choisissez un département" options={optionsDpt} value={this.state.depart} onChange={this.onDepartementChange} />
                <Select placeholder="Choisissez une administration" options={optionsType} value={this.state.categorie} onChange={this.onCategorieChange} />
                <Button primary onClick={ ()=>this.props.onJeMetCequeJeVeux(this.state.depart,this.state.categorie) }> Lancer la recherche </Button>
                <Button secondary onClick={() => this.props.onEmpty()}> Vider la recherche </Button>
               
        
                
 
            </div>
        )
    }
}


export default Recherche;