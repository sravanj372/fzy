import { styled } from '@mui/material/styles';
import {
	Box,
	Stack,
	List,
	ListItemButton,
	ListItemText,
	ListItemIcon,
	Typography,
	Dialog,
	DialogActions,
	Button,
	Divider,
	Avatar
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';

export const drawerWidth = 281;

// Styled components for the main layout
export const StyledDrawerContent = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    height: '100vh',
    backgroundColor: '#F1F4F9',
});

export const StyledLogoSection = styled(Stack)({
    padding: '20px 20px 10px 20px',
});

export const StyledLogoImage = styled('img')({
	display: 'block',
	width: '120px',
	height: '32px',
	objectFit: 'contain',
	marginBottom: '10px',
});

export const StyledProfileSection = styled(Stack)({
    flexDirection: 'row',
    gap: '8px', // Using 8px for consistency
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#DEF6DB',
    padding: '12px 15px',
    borderRadius: '10px',
    width: '100%',
    boxSizing: 'border-box',
    cursor: 'pointer',
});

export const StyledAvatar = styled(Avatar)({
	width: 40,
	height: 40,
});

export const StyledProfileName = styled(Typography)({
	fontSize: '15px',
	fontWeight: 600,
	color: '#2C2F31',
});

export const StyledProfileRole = styled(Typography)({
	fontSize: '12px',
	color: '#2F7A52',
});

export const StyledMainList = styled(List)({
    flexGrow: 1,
    paddingTop: '8px', // Using 8px for consistency
});

export const StyledLogoutSection = styled(Box)({
    padding: '15px 15px 20px 15px',
});

export const StyledDivider = styled(Divider)({
	marginBottom: '10px',
	borderColor: '#E0E0E0',
});

// Styled components for list items
export const StyledListItemButton = styled(ListItemButton)(({ theme, selected }) => ({
    margin: '0 15px 5px 15px',
    width: `calc(100% - 30px)`, // Using calc for dynamic width
    borderRadius: '8px',
    position: 'relative',
    minHeight: 40,
    display: 'flex',
    alignItems: 'center',
    padding: '8px 15px',
    backgroundColor: 'transparent',
    '& .MuiListItemIcon-root': {
        color: '#2F7A52',
        minWidth: '40px',
    },
    '& .MuiListItemIcon-root img': {
        filter: 'none',
    },
    '& .MuiListItemText-primary': {
        color: '#2F7A52',
        fontSize: '14px',
        fontWeight: 500,
    },
    '&:not(.Mui-selected):hover': {
        backgroundColor: '#2F7A52',
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            color: 'white',
        },
        '& .MuiListItemIcon-root img': {
            filter: 'brightness(0) invert(1)',
        },
        '& .MuiSvgIcon-root': {
            color: 'white',
        },
    },
    ...(selected && {
        backgroundColor: '#2F7A52',
        '&::before': {
            content: '""',
            position: 'absolute',
            left: -15,
            top: 0,
            width: '4px',
            height: '100%',
            backgroundColor: '#2F7A52',
            borderRadius: '0 4px 4px 0',
        },
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            color: 'white',
        },
        '& .MuiListItemIcon-root img': {
            filter: 'brightness(0) invert(1)',
        },
        '& .MuiSvgIcon-root': {
            color: 'white',
        },
        '&:hover': {
            backgroundColor: '#2F7A52 !important',
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: 'white',
            },
            '& .MuiListItemIcon-root img': {
                filter: 'brightness(0) invert(1)',
            },
            '& .MuiSvgIcon-root': {
                color: 'white',
            },
        },
    }),
}));


export const StyledSubListItemButton = styled(ListItemButton)(({ selected }) => ({
    paddingLeft: '64px', // pl: 8 becomes 64px
    margin: '0 15px 5px 30px',
    width: `calc(100% - 45px)`,
    borderRadius: '8px',
    position: 'relative',
    padding: '10px 15px',
    minHeight: 40,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    '& .MuiListItemText-primary': {
        color: '#2C2F31',
        fontSize: '13px',
        fontWeight: 500,
        textDecoration: 'none',
    },
    '&:not(.Mui-selected):hover': {
        backgroundColor: '#EDF5ED',
        '& .MuiListItemText-primary': {
            color: '#2F7A52',
            textDecoration: 'none',
        },
    },
    ...(selected && {
        backgroundColor: 'transparent',
        '&::before': {
            content: 'none',
        },
        '& .MuiListItemText-primary': {
            color: '#2C2F31',
            textDecoration: 'underline',
        },
        '&:hover': {
            backgroundColor: '#EDF5ED',
            '& .MuiListItemText-primary': {
                color: '#2F7A52',
                textDecoration: 'underline',
            },
        },
    }),
}));

export const StyledImage = styled('img')({
    width: 22,
    height: 22,
});

export const StyledListItemText = styled(ListItemText)({
    '& .MuiListItemText-primary': {
        whiteSpace: 'nowrap',
    },
});

export const StyledListItemIcon = styled(ListItemIcon)({
    color: '#2F7A52',
    minWidth: '40px',
});

// Styled components for the logout dialog
export const StyledLogoutDialog = styled(Dialog)({
    '& .MuiPaper-root': {
        borderRadius: '24px', // From p:3
        padding: '24px',
        width: '100%',
        maxWidth: '400px',
    },
    '& .MuiBackdrop-root': {
        backdropFilter: 'blur(0px)',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
});

export const StyledLogoutDialogContent = styled(Typography)({
    color: '#FF3326',
    marginBottom: '32px', // From mb:4
    fontSize: '20px',
    fontWeight: 400,
    marginTop: '16px', // From mt:2
});

export const StyledDialogButton = styled(Button)({
    width: '130px',
});

export const StyledDialogActions = styled(DialogActions)({
	justifyContent: 'center',
	padding: 0,
	marginBottom: '16px',
});

export const StyledCancelButton = styled(Button)({
	color: '#FF3326',
	borderColor: '#FF3326',
	width: '130px',
	marginRight: '16px',
});

export const StyledConfirmButton = styled(Button)({
	width: '130px',
});

export const StyledLogoutListItemButton = styled(ListItemButton)({
	margin: '0',
	width: '100%',
	borderRadius: '8px',
	padding: '10px 15px',
	minHeight: 48,
	display: 'flex',
	alignItems: 'center',
	'&:hover': {
		backgroundColor: '#FF4D4D',
		'& .MuiListItemIcon-root': {
			color: 'white',
		},
		'& .MuiListItemText-primary': {
			color: 'white',
		},
	},
	'& .MuiListItemIcon-root': {
		color: '#FF4D4D',
		minWidth: '40px',
		fontSize: 22,
	},
	'& .MuiListItemText-primary': {
		color: '#FF4D4D',
		fontSize: '14px',
		fontWeight: 500,
		whiteSpace: 'nowrap',
	},
});

export const StyledDashboardIcon = styled(DashboardIcon)({
	fontSize: 22,
});

export const temporaryDrawerSx = {
	display: { xs: 'block', md: 'none' },
	'& .MuiDrawer-paper': {
		width: drawerWidth,
		boxSizing: 'border-box',
		height: '100vh',
		zIndex: 1201,
		boxShadow:
			'0px 8px 10px -5px rgba(0,0,0,0.2), 0px 16px 24px 2px rgba(0,0,0,0.14), 0px 6px 30px 5px rgba(0,0,0,0.12)',
	},
} as const;

export const permanentDrawerSx = {
	display: { xs: 'none', md: 'block' },
	'& .MuiDrawer-paper': {
		width: drawerWidth,
		boxSizing: 'border-box',
		height: '100vh',
		zIndex: 1200,
		position: 'fixed',
		boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
	},
} as const;