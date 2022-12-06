import { Card } from "semantic-ui-react";

const Etablissement = (props) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          Le nom de l&acute;établissement:{props.abcd.nom}{" "}
        </Card.Header>
        <Card.Meta>Numéro de téléphone : {props.abcd.telephone} </Card.Meta>
        <Card.Meta>Adresse courreil : {props.abcd.email} </Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default Etablissement;
