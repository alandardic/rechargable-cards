import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

function Maps({ ...props }) {
  const { classes } = props;

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Country", "City", "Salary"]}
              tableData={[
                ["1", "Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                ["2", "Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                ["3", "Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                [
                  "4",
                  "Philip Chaney",
                  "Korea, South",
                  "Overland Park",
                  "$38,735"
                ],
                [
                  "5",
                  "Doris Greene",
                  "Malawi",
                  "Feldkirchen in Kärnten",
                  "$63,542"
                ],
                ["6", "Mason Porter", "Chile", "Gloucester", "$78,615"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default Maps;
