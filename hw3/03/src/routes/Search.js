import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
	TextField,
	Box,
	Button,
	Typography,
	Stack,
	Card,
	CardMedia,
	CardContent,
} from "@mui/material";

function Search() {
	const [error, setError] = useState(null);
	const [searchInput, setSearchInput] = useState("");
	const [characterDatas, setCharacterDatas] = useState([]);

	const url = "https://thronesapi.com/api/v2/Characters";

	useEffect(() => {
		Axios.get(url)
			.then((res) => {
				setCharacterDatas(res.data);
			})
			.catch((error) => {
				setError(error);
			});
	}, []);

	const handleInput = (event) => {
		const searchInput = event.target.value;
		setSearchInput(searchInput);
	};

	const searchedCharacters = characterDatas.filter((characterData) =>
		characterData.fullName.toLowerCase().includes(searchInput.toLowerCase())
	);

	return (
		<Box
			sx={{
				marginTop: "120px",
			}}
		>
			<Stack sx={{alignContent:"center"}}>
				<TextField
					variant="filled"
					label="Search By Name"
					id="outline-box"
					onChange={handleInput}
					sx={{ backgroundColor: "gray", width: 400 }}
				></TextField>
				<Button
					variant="contained"
					color="secondary"
					sx={{ width: 300, margin: "auto", marginTop: "30px" }}
				>
					Search
				</Button>

				</Stack>
				{searchedCharacters.length > 0 ? (
					searchedCharacters.map((characterData) => (
						<Box
							sx={{
								"&:hover": {
									cursor: "pointer",
								},
								
							}}
						>
							<Card
								key={characterData.id}
								sx={{
									marginTop: "50px",
									maxWidth: 300,
									maxHeight: 400,
									alignContent: "center",
								}}
							>
								<CardMedia
									image={characterData.imageUrl}
									title={characterData.fullName}
									sx={{ height: 300 }}
								/>
								<CardContent>
									<Typography
										key={characterData.id}
										variant="h5"
										gutterBottom
										noWrap
									>
										{characterData.fullName}
									</Typography>
								</CardContent>
							</Card>
						</Box>
					))
				) : (
					<Typography variant="h3" color="white" sx={{marginTop: 20}}>
						No characters found. 
					</Typography>
				)}
		</Box>
	);
}

export default Search;
