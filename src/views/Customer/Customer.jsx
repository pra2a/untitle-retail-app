import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import ChartistGraph from "react-chartist";

import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Update from "@material-ui/icons/Update";
import AccessTime from "@material-ui/icons/AccessTime";
import CardIcon from "components/Card/CardIcon.jsx";

import avatar from "assets/img/faces/profile.png";

import {
  completedTasksChart
} from "variables/charts"

const styles = {
  cardTitleProfile: {
    "& h4,& h3,& h2,& h1,& h5,& h6": {
      marginBlockStart: "1.1em",
      marginBlockEnd: "0px"
    }
  },  cardBodyProfile: {
    "& h4,& h3,& h2,& h1,& h5,& h6": {
      marginBlockStart: "1.1em",
      marginBlockEnd: "0px"
    }
  }/*,
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }*/
};

function Customer(props) {
  const { classes } = props;
  return (
    <div>
      <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
              <Card>
                  <CardHeader color="primary" stats icon>
                      <CardIcon color="primary">
                          <Icon>info_outline</Icon>
                      </CardIcon>
                      <p className={classes.cardCategory}>Cierres Diarios del Mes</p>
                      <h3 className={classes.cardTitle}>2/2<sup> </sup></h3>
                  </CardHeader>
                  <CardFooter stats>
                      <div className={classes.stats}>
                          <Update />
                          Cerrados/Pendientes
                      </div>
                  </CardFooter>
              </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
              <Card chart>
                <CardHeader color="primary">
                  <ChartistGraph
                    className="ct-chart"
                    data={completedTasksChart.data}
                    type="Line"
                    options={completedTasksChart.options}
                    listener={completedTasksChart.animation}
                  />
                </CardHeader>
                <CardBody>
                  <h4 className={classes.cardTitle}>Transacciones del Cliente</h4>
                </CardBody>
                <CardFooter chart>
                  <div className={classes.stats}>
                    <AccessTime /> últimos 3 meses
                  </div>
                </CardFooter></Card>
          </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory} style={{marginBlockStart:"1.1em",marginBlockEnd: "0px"}}><b>DNI:</b> 19584784</h6>
              <h6 className={classes.cardCategory} style={{marginBlockStart:"1.1em",marginBlockEnd: "0px"}}><b>DNI:</b> 19584784</h6>
              <h4 className={classes.cardTitle} style={{marginBlockStart:"1.1em",marginBlockEnd: "0px"}}>Alec Thompson</h4>
              <h6 className={classes.cardCategory} style={{marginBlockStart:"1.1em",marginBlockEnd: "0px"}}><Icon>phone</Icon> 241-8667030</h6>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(styles)(Customer);
