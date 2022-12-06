import { Component } from "react";
import "./App.css";
import Recherche from "./Composants/Recherche";
import { Card, Message } from "semantic-ui-react";
import Etablissement from "./Composants/Etablissement";

class App extends Component {
  state = { data: "", erreur: "" };

  onChercher = async (a, b) => {
    if (a && b) {
      try {
        let reponse = await fetch(
          `https://etablissements-publics.api.gouv.fr/v3/departements/${a}/${b}`
        );
        let donnee = await reponse.json();
        this.setState({ data: donnee.features, erreur: "" });
        console.log(donnee.features);
        //console.log(donnee.type);
      } catch (e) {
        this.setState({ erreur: "Échec de la connexion !" });
      }
    } else {
      this.setState({ erreur: "Merci d'effectuer 2 choix !" });
    }
  };

  onVider = () => {
    this.setState({ data: [], error: "" });
  };

  retournerResultat = () => {
    return this.state.data.map((element) => {
      return (
        <Etablissement key={element.properties.id} abcd={element.properties} />
      );
    });
  };

  render() {
    console.log(this.state);
    console.log(
      this.state.data[0] ? this.state.data[0].properties.email : undefined
    );
    console.log(this.state.data[0]?.properties.email);
    return (
      <div className="App">
        <h1>Rechercher un departement</h1>

        <Recherche
          onJeMetCequeJeVeux={this.onChercher}
          onEmpty={this.onVider}
        />
        {this.state.erreur ? (
          <Message warning>{this.state.erreur}</Message>
        ) : undefined}
        {this.state.data ? (
          <Card.Group>{this.retournerResultat()}</Card.Group>
        ) : undefined}
      </div>
    );
  }
}

export default App;
