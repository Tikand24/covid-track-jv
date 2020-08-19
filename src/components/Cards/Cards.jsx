import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	if (!confirmed) {
		return "loading...";
	}
	return (
		<div className={styles.container}>
			<Grid container spacing={3} justifye="center">
				<Grid item>
					<Card>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>
								infectados
							</Typography>
							<Typography varaint="h5">
								<CountUp
									start={0}
									end={confirmed.value}
									duration={2.5}
									separator=","
								></CountUp>
							</Typography>
							<Typography color="textSecondary">
								{new Date(lastUpdate).toDateString()}
							</Typography>
							<Typography varaint="body2">Numero de casos activos</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item>
					<Card>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>
								Recuperados
							</Typography>
							<Typography varaint="h5">
								<CountUp
									start={0}
									end={recovered.value}
									duration={2.5}
									separator=","
								></CountUp>
							</Typography>
							<Typography color="textSecondary">
								{new Date(lastUpdate).toDateString()}
							</Typography>
							<Typography varaint="body2">Numero de recuperados por COVID-19</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item>
					<Card>
						<CardContent>
							<Typography color="textSecondary" gutterBottom>
								Muertes
							</Typography>
							<Typography varaint="h5">
								<CountUp
									start={0}
									end={deaths.value}
									duration={2.5}
									separator=","
								></CountUp>
							</Typography>
							<Typography color="textSecondary">
								{new Date(lastUpdate).toDateString()}
							</Typography>
							<Typography varaint="body2">Numero de muertes</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
};

export default Cards;
