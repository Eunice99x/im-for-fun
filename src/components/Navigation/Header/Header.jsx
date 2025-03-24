import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import styled from 'styled-components';

const HoverText = styled.a`
	color: #000;
	:hover {
		color: #ed1212;
		cursor: pointer;
	}
	font: normal normal 700 12px/30px montserrat,sans-serif;
	height: 100%;
	padding: 38px;
	text-decoration: none;
`;

export default function Header() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#ffffff', boxShadow: 'none', marginTop: '-455px'}}>
      <Toolbar>
        <IconButton color="inherit" aria-label="Open drawer">
          <MenuIcon style={{ color: 'black' }} />
        </IconButton>
        <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
          My App
        </Typography>
        <HoverText target="_blank" href="https://compliancelinc.wixsite.com/compliancelinc">
          Home
        </HoverText>
        <HoverText target="_blank" href="https://compliancelinc.wixsite.com/compliancelinc/services">
          Services
        </HoverText>
        <HoverText target="_blank" href="https://compliancelinc.wixsite.com/compliancelinc/contact">
          Contact Us
        </HoverText>
        <HoverText target="_blank" href="https://compliancelinc.wixsite.com/compliancelinc/faqs">
          FAQs
        </HoverText>
        <Button
          variant="contained"
          color="primary"
          style={{
            height: '40px',
            padding: '8px 20px',
            borderRadius: '20px',
            textTransform: 'none',
            font: 'normal normal 700 12px/1.4em Arial, Helvetica, sans-serif',
          }}
        >
          LOGOUT &nbsp;
          <ExitToAppIcon style={{ color: 'white' }} />
        </Button>
      </Toolbar>
    </AppBar>
  );
}
