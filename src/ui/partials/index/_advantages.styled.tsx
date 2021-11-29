import { styled } from "@mui/material/styles";
import { List, Avatar, ListItemText } from "@mui/material";
export const GradientBackground = styled("section")`
	background: ${({ theme }) =>
		"linear-gradient(180deg, " +
		theme.palette.secondary.main +
		" 0%, " +
		theme.palette.primary.main +
    " 100%)"};
    color:${({ theme }) => theme.palette.primary.contrastText};
	height: 700px;
	
`;

export const SectionTitle = styled("h2")`
	position: relative;
	text-align: center;
	font-size: ${({ theme }) => theme.typography.h6.fontSize};
	font-weight: normal;
	margin: 0;
	padding: ${({ theme }) => theme.spacing(7) + " 0 " + theme.spacing(4)};

	&::after {
		content: "";
		width: 44px;
		height: 2px;
		background-color: currentColor;
		position: absolute;
		bottom: ${({ theme }) => theme.spacing(2)};
		left: 50%;
		transform: translateX(-50%);
	}
	${({ theme }) => theme.breakpoints.down("md")} {
		font-size-adjust: ${({ theme }) => theme.typography.h5.fontSize};
		padding: ${({ theme }) => theme.spacing(11) + " 0 " + theme.spacing(13)};

		&::after {
			bottom: ${({ theme }) => theme.spacing(10)};
		
		}
	}
`;
export const ListStyled = styled(List)`

	${({ theme }) => theme.breakpoints.up("md")} {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: ${({ theme }) => theme.spacing(7)};
	}
`;
export const ListItemTextStyled = styled(ListItemText)`
    .MuiListItemText-primary{
        font-weight: bold;
    }
    .MuiListItemText-secondary{
        color:currentColor;
    }

`;
export const AvatarStyled = styled(Avatar)`
    background-color: transparent;
    border:2px solid currentColor;
    padding:2px;
    i{
        font-size: 25px;
        
    }
	${({ theme }) => theme.breakpoints.up('md')}{
		padding:20px;
		margin-right: ${({ theme }) => theme.spacing(4)};
		i{
			font-size:50px;
		}
	}


`;

