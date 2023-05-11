import React from "react";
import { Typography, Box } from "@mui/material";

function Home() {
	return (
		<Box sx={{ textAlign: "center", marginTop: "100px" }}>
			<Typography variant="h2" sx={{ color: "white" }}>
				Welcome to home page of EX03
			</Typography>
			<Typography variant="h3" sx={{ color: "white" }}>
				Minh Ma
			</Typography>
			<Typography variant="h4" sx={{ color: "white", marginTop: "100px" }}>
				In this webpage, users will be able to find their deisred Game Of Throne
				characters using Search features, and a donut chart that represent the
				number of members in different houses
			</Typography>
		</Box>
	);
}

export default Home;
