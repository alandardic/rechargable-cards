import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden";
// core components
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import iconsStyle from "assets/jss/material-dashboard-react/views/iconsStyle.jsx";
// core components
import Table from "components/Table/Table.jsx";

function Icons(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Group & Rules</h4>
            <p className={classes.cardCategoryWhite}>
              Hezi, Do we need a subtitle for this table?
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Members"]}
              tableData={[
                ["Northern Area", "178"],
                ["Maintenance", "75"],
                ["IT", "96"],
                ["Research & Development", "438"],
                ["Management", "102"]
              ]}
            />
          </CardBody>
          <CardFooter>
            <Button color="primary">Create a new group</Button>
          </CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(Icons);
