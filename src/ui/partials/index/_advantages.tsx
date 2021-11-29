import React from "react";
import { GradientBackground, SectionTitle, ListStyled, ListItemTextStyled, AvatarStyled } from "./_advantages.styled";
import { Container, ListItem, ListItemAvatar } from "@mui/material";
const Advantages = () => {
	return (
		<GradientBackground>
			<Container>
				<SectionTitle>Por que usar o e-diarista?</SectionTitle>
				<ListStyled>
					<ListItem>
						<ListItemAvatar>
							<AvatarStyled>
								<i className={"twf-search-2"}></i>
							</AvatarStyled>
						</ListItemAvatar>
						<ListItemTextStyled
							primary={"Meu titulo"}
							secondary={"Um texto qualquer"}
						/>
					</ListItem>
				</ListStyled>
				<ListStyled>
					<ListItem>
						<ListItemAvatar>
							<AvatarStyled>
								<i className={"twf-search-2"}></i>
							</AvatarStyled>
						</ListItemAvatar>
						<ListItemTextStyled
							primary={"Meu titulo"}
							secondary={"Um texto qualquer"}
						/>
					</ListItem>
				</ListStyled>
				<ListStyled>
					<ListItem>
						<ListItemAvatar>
							<AvatarStyled>
								<i className={"twf-search-2"}></i>
							</AvatarStyled>
						</ListItemAvatar>
						<ListItemTextStyled
							primary={"Meu titulo"}
							secondary={"Um texto qualquer"}
						/>
					</ListItem>
				</ListStyled>
				<ListStyled>
					<ListItem>
						<ListItemAvatar>
							<AvatarStyled>
								<i className={"twf-search-2"}></i>
							</AvatarStyled>
						</ListItemAvatar>
						<ListItemTextStyled
							primary={"Meu titulo"}
							secondary={"Um texto qualquer"}
						/>
					</ListItem>
				</ListStyled>
				<ListStyled>
					<ListItem>
						<ListItemAvatar>
							<AvatarStyled>
								<i className={"twf-search-2"}></i>
							</AvatarStyled>
						</ListItemAvatar>
						<ListItemTextStyled
							primary={"Meu titulo"}
							secondary={"Um texto qualquer"}
						/>
					</ListItem>
				</ListStyled>
			</Container>
		</GradientBackground>
	);
};

export default Advantages;
