import React from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Launch from "@material-ui/icons/Launch";
import DateRange from "@material-ui/icons/DateRange";
import Update from "@material-ui/icons/Update";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { bugs, website, server } from "variables/general.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="primary" stats icon>
                <CardIcon color="primary">
                  <Icon>assignment_ind</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Cajeros</p>
                <h3 className={classes.cardTitle}>
                    8/12 <small>activos</small><sup> </sup>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                    <Launch />
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Ver Listado
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="primary" stats icon>
                <CardIcon color="primary">
                    <Icon>shopping_cart</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Ventas Netas</p>
                  <h3 className={classes.cardTitle}><small>Bs </small>34.245<sup><small>00</small></sup></h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Acumulado del día
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="primary" stats icon>
                <CardIcon color="primary">
                  <Icon>money</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Valor de la UFI</p>
                  <h3 className={classes.cardTitle}><small>Bs </small>75<sup><small>00</small></sup></h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                    <DateRange />
                  Al día de Hoy
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
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
                  Cerrados/Total
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
              <Card>
                  <CardHeader color="primary">
                      <h4 className={classes.cardTitleWhite}>
                          <Icon>info_outline</Icon>Ayudar es Sencillo</h4>
                      <p className={classes.cardCategoryWhite}>
                          Monto recaudado durante el mes en curso
                      </p>
                  </CardHeader>
                  <CardBody>
                      <Table
                          tableHeaderColor="primary"
                          tableHead={["Ficha", "Nombre y Apellido", "Monto (Bs.)"]}
                          tableData={[
                              ["4", "Philip Chaney", "8.735,00"],
                              ["1", "Dakota Rice", "6.738,00"],
                              ["3", "Sage Rodriguez", "5.614,20"],
                              ["2", "Minerva Hooper", "3.789,00"]
                          ]}
                      />
                  </CardBody>
              </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>
                    <Icon>payment</Icon>Solicitudes de Pago de Acreencias</h4>
                <p className={classes.cardCategoryWhite}>
                  Reintegros de Acreencias pendientes (4 registros más antigüos)
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={["ID del Cliente", "Nombre del Cliente", "Monto (Bs.)", "Fec. de Solicitud"]}
                  tableData={[
                    ["18256753", "Jane Doe", "36.738,00", "02/12/2018"],
                    ["21213132", "Minerva Hooper", "23.789,00", "01/01/2019"],
                    ["35645646", "Sage Rodriguez", "56.142,00", "23/02/2019"],
                    ["48896686", "Philip Chaney", "38.735,00", "25/03/2019"]
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
