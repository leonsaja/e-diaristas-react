import React from "react";
import {
	FooterContainer,
	FooterTitle,
	FooterListItem,
	SocialContainer,
	AppList,
	FooterSocialList,
	SocialButton,
	FooterGrid,
} from "./Footer.style";
import { List, Box, Typography } from "@mui/material";
import Link from "ui/components/navigation/link/Link";
FooterContainer;
const Footer = () => {
	return (
		<FooterContainer>
			<FooterGrid>
				<div>
					<FooterTitle>Meu Foooter</FooterTitle>
					<List>
						<FooterListItem>
							<Link
								href={"/encontrar-diarista"}
								mui={{ color: "inherit", variant: "body2" }}
							>
								Encontrar um (a) diarista
							</Link>
						</FooterListItem>
						<FooterListItem>
							<Link href={"/"} mui={{ color: "inherit", variant: "body2" }}>
								Seja um (a) diarista
							</Link>
						</FooterListItem>
						<FooterListItem>
							<Link href={"/"} mui={{ color: "inherit", variant: "body2" }}>
								Por que usar o E-Diariastas?
							</Link>
						</FooterListItem>
						<FooterListItem>
							<Link href={"/"} mui={{ color: "inherit", variant: "body2" }}>
								Princiapais Dúvidas
							</Link>
						</FooterListItem>
					</List>
				</div>
				<Box sx={{ maxWidth: "400px" }}>
					<FooterTitle>Quer somos </FooterTitle>

					<Typography variant={"body2"} sx={{ mt: 2 }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, nisi
						quibusdam illo voluptates alias iure nemo porro perferendis repellat
						unde dignissimos autem tempore libero cupiditate temporibus fuga
						possimus nihil vel.
					</Typography>
				</Box>

				<SocialContainer>
					<Box>
						<FooterTitle>Baixe nossos aplicativos</FooterTitle>
						<AppList>
							<li>
								<a href={"/"}>
									<img src={"/img/logos/app-store.png"} alt={"AppStore"}></img>

									{/* target={'_blank'}  abre novo guiar no navegador */}
									{/* rel={'noopener noreferrer'} */}
								</a>
							</li>
							<li>
								<a href={"/"}>
									<img
										src={"/img/logos/google-play.png"}
										alt={"AppStore"}
									></img>

									{/* target={'_blank'}  abre novo guiar no navegador */}
									{/* rel={'noopener noreferrer'} */}
								</a>
							</li>
						</AppList>
					</Box>
					<FooterTitle>Redes Social</FooterTitle>
					<FooterSocialList>
						<FooterListItem>
							<SocialButton href={"/"}>
								<i className={"twf-facebook-f"} />
							</SocialButton>
						</FooterListItem>
						<FooterListItem>
							<SocialButton href={"/"}>
								<i className={"twf-instagram"} />
							</SocialButton>
						</FooterListItem>
						<FooterListItem>
							<SocialButton href={"/"}>
								<i className={"twf-youtube"} />
							</SocialButton>
						</FooterListItem>
					</FooterSocialList>
				</SocialContainer>
			</FooterGrid>
		</FooterContainer>
	);
};

export default Footer;
