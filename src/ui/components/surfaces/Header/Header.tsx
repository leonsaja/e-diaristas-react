import React, { useState } from "react";
import {
	Container,
	IconButton,
	Toolbar,
	MenuList,
	MenuItem,
	Divider,
} from "@material-ui/core";
import {
	HeaderAppBar,
	HeaderLogo,
	ButtonsContainer,
	HeaderDrawer,
} from "./Header.style";
import RounderButton from "ui/components/inputs/RoundedButton/RoundedButton";
import Link from "ui/components/navigation/link/Link";
import useIsMobile from "data/hooks/uselsMobile";

const Header = () => {
	const isMobile = useIsMobile();
	return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};
const HeaderDesktop = () => {
	return (
		<HeaderAppBar>
			<Toolbar component={Container}>
				<Link href={"/#"}>
					<HeaderLogo src={"/img/logos/logo.svg"} alt={"e-diaristas"} />
				</Link>
				<div>&nbsp;</div>
				<div></div>
				<ButtonsContainer>
					<Link
						href={"/cadastro/diarista"}
						Component={RounderButton}
						mui={{ color: "primary", variant: "contained" }}
					>
						Seja um (a) diarista
					</Link>
					<Link href={"/login"} Component={RounderButton}>
						Login
					</Link>
				</ButtonsContainer>
			</Toolbar>
		</HeaderAppBar>
	);
};
const HeaderMobile = () => {
	const [isDrawerOpen, setDrawerOpen] = useState(false);
	return (
		<HeaderAppBar>
			<Toolbar component={Container}>
				<IconButton
					edge={"start"}
					color={"inherit"}
					onClick={() => setDrawerOpen(true)}
				>
					<i className={"twf-bars"} />
				</IconButton>
				<Link href={"/"}>
					<HeaderLogo src={"/img/logos/logo.svg"} alt={"e-diaristas"} />
				</Link>
				<HeaderDrawer
					open={isDrawerOpen}
					onClose={() => setDrawerOpen(false)}
					onClick={() => setDrawerOpen(false)}
				>
					<MenuList>
						<Link href={"/login"} Component={MenuItem}>
							Login
						</Link>
						<Divider />
						<Link href={"/Cadastro/diarista"} Component={MenuItem}>
							Seja um (a) diarista
						</Link>
					</MenuList>
				</HeaderDrawer>
			</Toolbar>
		</HeaderAppBar>
	);
};
export default Header;
