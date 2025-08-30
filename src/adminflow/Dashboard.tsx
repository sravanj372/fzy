import React, { useState } from "react";
import { Box, Card, Divider, Typography, Select, Button, Table, TableBody, TableCell, TableHead, TableRow, MenuItem } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useLocation, useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
    DashboardContainer,
    TopSectionPaper,
    DashboardDataGrid,
    DashboardCard,
    DashboardIcon,
    CountText,
    LabelText,
    VerticalDivider,
    MiddleSection,
    LeftColumn,
    DeliveryStatusPaper,
    SectionTitle,
    DeliveryStatusCardsContainer,
    DeliveryStatusCard,
    DeliveryStatusLabel,
    DeliveryStatusCount,
    BarChartPaper,
    ChartHeader,
    ChartTitle,
    ChartSelect,
    BarChartContainer,
    BarChartStyled,
    RightColumn,
    HomepageTitlePaper,
    HomepageTitleHeader,
    HomepageTitleText,
    AddButton,
    HomepageTitleItem,
    HomepageTitleImage,
    HomepageTitleContent,
    HomepageTitleTitle,
    HomepageTitleDate,
    HomepageTitleActions,
    ActionIcon,
    HorizontalDivider,
    TablePaper,
    TableHeader,
    TableTitle,
    TableSelect,
    TableContainerStyled,
    TableHeadRow,
    TableHeadCell,
    TableRowOdd,
    TableRowEven,
    TableCellStyled,
} from "../adminstyles/Adminstyles";

// Importing the image files as assets.
import LocalDiningIcon from '../assets/ion_restaurant-outline.png';
import ShoppingBagIcon from '../assets/solar_bag-3-linear.png';
import PaymentsIcon from '../assets/fluent_money-20-regular.png';
import CompostIcon from '../assets/fluent_earth-leaf-20-regular.png';
import Christmas11 from '../assets/christmas2.png';
import EditIcon from '../assets/edit-vector.png';
import DeleteOutlineIcon from '../assets/1vector.png';
import whiteedit from '../assets/vectorwhite.png'

// Define a type for the data to be deleted
interface FestData {
    id: number;
    icon: string;
    title: string;
    date: string;
}

const Dashboard = () => {
    // State for managing the delete modal with a specific type
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
    const [itemToDelete, setItemToDelete] = useState<FestData | null>(null);

    // Data for the top section cards
    const dashboarddata = [
        { id: 1, icon: LocalDiningIcon, count: 80, label: 'Total Restaurants' },
        { id: 2, icon: ShoppingBagIcon, count: 200, label: 'Active Orders' },
        { id: 3, icon: PaymentsIcon, count: `$30,635`, label: 'Total Revenue' },
        { id: 4, icon: CompostIcon, count: `10,000Kgs`, label: 'Total CO₂ saved' },
    ];

    // Data for the pickup and delivery status cards
    const deliverystatusdata = [
        { id: 1, count: 100, label: 'Scheduled Pickups' },
        { id: 2, count: 267, label: 'Completed Deliveries' },
        { id: 3, count: 89, label: 'Pending Orders' },
    ];

    // Data for the total revenue bar chart
    const data = [350, 680, 820, 580, 1020, 950, 500, 500, 500, 500, 500, 500];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Data for the "Homepage Title" list with explicit type
    const festdata: FestData[] = [
        { id: 1, icon: Christmas11, title: 'Feast Festively, Waste...', date: '1 Dec - 29 Dec' },
        { id: 2, icon: Christmas11, title: 'Delicious Meals, Zero Waste...', date: '1 Sep - 19 Oct' },
        { id: 3, icon: Christmas11, title: 'Delicious Meals, Zero Waste...', date: '1 Sep - 19 Oct' },
        { id: 4, icon: Christmas11, title: 'Delicious Meals, Zero Waste...', date: '1 Sep - 19 Oct' },
        { id: 5, icon: Christmas11, title: 'Delicious Meals, Zero Waste...', date: '1 Sep - 19 Oct' },
        { id: 6, icon: Christmas11, title: 'Delicious Meals, Zero Waste...', date: '1 Sep - 19 Oct' },
        { id: 7, icon: Christmas11, title: 'Delicious Meals, Zero Waste...', date: '1 Sep - 19 Oct' },
    ];

    // Table headings for the "Highest-earning restaurants" table
    const highestearningsheadings: { id: string; heading: string; align: "right" | "left" | "center" | "inherit" | "justify" | undefined }[] = [
        { id: 'restaurantname', heading: 'Restaurant Name', align: 'left' },
        { id: 'vendorname', heading: 'Vendor Name', align: 'left' },
        { id: 'contact', heading: 'Contact', align: 'center' },
        { id: 'totalrevenue', heading: 'Total Revenue', align: 'center' },
        { id: 'location', heading: 'Location', align: 'center' },
    ];

    // Data for the highest-earning restaurants table
    const highestearningsdata = [
        { id: 1, restaurantname: 'Tandoori Flame', vendorname: 'James Murphy', contact: '+61 412 345 678', totalrevenue: `$12,350.00`, location: 'Sydney' },
        { id: 2, restaurantname: 'Sushi Ro', vendorname: 'Mei Tanaka', contact: '+61 412 345 271', totalrevenue: `$8,750.00`, location: 'Brisbane' },
        { id: 3, restaurantname: 'Chicken Flame', vendorname: 'James Murphy', contact: '+61 412 545 679', totalrevenue: `$6,500.00`, location: 'Sydney' },
        { id: 4, restaurantname: 'Mutton Flame', vendorname: 'James Murphy', contact: '+61 412 645 672', totalrevenue: `$5,200.00`, location: 'Sydney' },
    ];

    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;

    // Navigation handlers
    function homeTilteNavigate() {
        if (path === "/admin" || path === "/admin/dashboard") {
            navigate('/admin/dashboard/home-title');
        }
    }
    function TermsandConditionNavigate() {
        if (path === "/admin" || path === "/admin/dashboard") {
            navigate('/admin/dashboard/terms-and-conditions');
        }
    }

    function editHomeTilte() {
        if (path === "/admin" || path === "/admin/dashboard") {
            navigate('/admin/dashboard/edit-home-title/');
        }
    }
    
    function CuisineNavigate() {
        if (path === "/admin" || path === "/admin/dashboard") {
            navigate('/admin/dashboard/cuisine');
        }
    }

    // Modal handlers
    const handleOpenDeleteModal = (item: FestData) => {
        setItemToDelete(item);
        setOpenDeleteModal(true);
    };

    const handleCloseDeleteModal = () => {
        setOpenDeleteModal(false);
        setItemToDelete(null);
    };

    const handleDeleteConfirm = () => {
        // Here you would implement the actual deletion logic
        console.log("Deleting item with ID:", itemToDelete?.id);
        handleCloseDeleteModal();
    };


    const buttonTextStyle = {
        fontFamily: 'Nunito Sans',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '14px',
        letterSpacing: '0%',
        textTransform: 'none', 
    };

    const buttonStyle = {
        ...buttonTextStyle,
        height: '50px',
        paddingLeft: '32px',
        paddingRight: '32px',
        borderRadius: '10px',
    };

    // Modal Style
    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: '16px',
        boxShadow: 24,
        p: 4,
        zIndex: 1001,
    };
    
    // Figma-specific styles for the modal
    const figmaModalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 'auto',
      minWidth: 420,
      bgcolor: 'white',
      borderRadius: '24px',
      boxShadow: 24,
      p: 4,
      zIndex: 1001,
      textAlign: 'center'
    };
    
    const figmaTitleStyle = {
        color: '#F44336', // Figma-specific red color
        fontSize: '24px',
        fontWeight: 600,
        lineHeight: '32px',
        mb: 4
    };
    
    const figmaCancelButtonStyle = {
        color: '#F44336',
        borderColor: '#F44336',
        borderWidth: '2px',
        borderRadius: '10px',
        textTransform: 'none',
       
        px: 6,
        '&:hover': {
            borderColor: '#D32F2F',
            borderWidth: '2px',
        }
    };
    
    const figmaDeleteButtonStyle = {
        bgcolor: '#F44336',
        color: 'white',
        borderRadius: '10px',
        textTransform: 'none',
        
        py:1,
        px: 6,
        '&:hover': {
            bgcolor: '#D32F2F',
        }
    };

    return (
        <DashboardContainer>
            {/* Conditional backdrop for dim effect */}
            {openDeleteModal && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        bgcolor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1000,
                    }}
                />
            )}
            
            {/* The main dashboard content */}
            <TopSectionPaper>
                <DashboardDataGrid>
                    {dashboarddata.map((data, index) => (
                        <React.Fragment key={data.id}>
                            <DashboardCard>
                                <DashboardIcon src={data.icon} alt={data.label} />
                                <Box>
                                    <CountText>
                                        {data.count}
                                    </CountText>
                                    <LabelText>
                                        {data.label}
                                    </LabelText>
                                </Box>
                            </DashboardCard>
                            {index < dashboarddata.length - 1 && (
                                <VerticalDivider orientation="vertical" flexItem />
                            )}
                        </React.Fragment>
                    ))}
                </DashboardDataGrid>
            </TopSectionPaper>

            <MiddleSection>
                <LeftColumn>
                    <DeliveryStatusPaper>
                        <SectionTitle>
                            Pickup and Delivery Status
                        </SectionTitle>
                        <DeliveryStatusCardsContainer>
                            {deliverystatusdata.map((deliverydata) => (
                                <DeliveryStatusCard key={deliverydata.id} variant="outlined">
                                    <DeliveryStatusLabel>
                                        {deliverydata.label}
                                    </DeliveryStatusLabel>
                                    <DeliveryStatusCount>
                                        {deliverydata.count}
                                    </DeliveryStatusCount>
                                </DeliveryStatusCard>
                            ))}
                        </DeliveryStatusCardsContainer>
                    </DeliveryStatusPaper>

                    <BarChartPaper>
                        <ChartHeader>
                            <ChartTitle>
                                Total Revenue
                            </ChartTitle>
                            <ChartSelect
                                value="2025"
                                variant="standard"
                                disableUnderline
                                IconComponent={KeyboardArrowDownIcon}
                            >
                                <MenuItem value="2025">This Year </MenuItem>
                                <MenuItem value="2024">2024</MenuItem>
                                <MenuItem value="2023">2023</MenuItem>
                            </ChartSelect>
                        </ChartHeader>
                        <BarChartContainer>
                            <BarChartStyled
                                height={300}
                                series={[
                                    {
                                        data,
                                        color: '#2F7A52',
                                    },
                                ]}
                                xAxis={[{
                                    scaleType: 'band',
                                    data: months,
                                    paddingInner: 0.9,
                                    paddingOuter: 0.3
                                }]}
                                yAxis={[
                                    {
                                        min: 0,
                                        max: 1200,
                                        tickMinStep: 200,
                                        disableLine: true,
                                        disableTicks: true,
                                        valueFormatter: (value: number) => `$${value}`,
                                    },
                                ]}
                                grid={{ horizontal: true, vertical: false }}
                                barCategoryGapRatio={0.1}
                                barGapRatio={0.9}
                            />
                        </BarChartContainer>
                    </BarChartPaper>
                </LeftColumn>

                <RightColumn>
                    <Box sx={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                        <AddButton
                            variant="contained"
                            startIcon={<img src={whiteedit} alt="Edit" style={{ height: '18px', width: '18px' }} />}
                            onClick={CuisineNavigate}
                            sx={buttonStyle}
                        >
                            Cuisine Type
                        </AddButton>
                        <AddButton
                            variant="contained"
                            startIcon={<img src={whiteedit} alt="Edit" style={{ height: '18px', width: '18px' }} />}
                            onClick={TermsandConditionNavigate}
                            sx={buttonStyle}
                        >
                            Terms Conditions <br />& Privacy Policy.
                        </AddButton>
                    </Box>

                    <HomepageTitlePaper>
                        <HomepageTitleHeader>
                            <HomepageTitleText>Homepage Title</HomepageTitleText>
                            <AddButton
                                variant="contained"
                                startIcon={<AddIcon />}
                                onClick={homeTilteNavigate}
                            >
                                ADD NEW
                            </AddButton>
                        </HomepageTitleHeader>
                        {festdata.map((data, index) => (
                            <React.Fragment key={index}>
                                <HomepageTitleItem>
                                    <HomepageTitleImage src={data.icon} alt="Homepage Title" />
                                    <HomepageTitleContent>
                                        <HomepageTitleTitle>{data.title}</HomepageTitleTitle>
                                        <HomepageTitleDate>{data.date}</HomepageTitleDate>
                                    </HomepageTitleContent>
                                    <HomepageTitleActions>
                                        <ActionIcon src={EditIcon} alt="Edit" onClick={editHomeTilte} />
                                        <ActionIcon 
                                            src={DeleteOutlineIcon} 
                                            alt="Delete" 
                                            onClick={() => handleOpenDeleteModal(data)} 
                                        />
                                    </HomepageTitleActions>
                                </HomepageTitleItem>
                                {index < festdata.length - 1 && (
                                    <HorizontalDivider />
                                )}
                            </React.Fragment>
                        ))}
                    </HomepageTitlePaper>
                </RightColumn>
            </MiddleSection>

            <TablePaper>
                <TableHeader>
                    <TableTitle>Highest-earning restaurants </TableTitle>
                    <TableSelect
                        value="2025"
                        variant="standard"
                        disableUnderline
                        IconComponent={KeyboardArrowDownIcon}
                    >
                        <MenuItem value="2025">This Year </MenuItem>
                        <MenuItem value="2024">2024</MenuItem>
                        <MenuItem value="2023">2023</MenuItem>
                    </TableSelect>
                </TableHeader>
                <TableContainerStyled>
                    <Table sx={{ minWidth: 600 }}>
                        <TableHead>
                            <TableHeadRow>
                                {highestearningsheadings.map((heading) => (
                                    <TableHeadCell key={heading.id} align={heading.align}>
                                        {heading.heading}
                                    </TableHeadCell>
                                ))}
                            </TableHeadRow>
                        </TableHead>
                        <TableBody>
                            {highestearningsdata.map((earning, index) => (
                                <Box component={index % 2 === 0 ? TableRowEven : TableRowOdd} key={index}>
                                    <TableCellStyled align="left" component="th" scope="row">
                                        {earning.restaurantname}
                                    </TableCellStyled>
                                    <TableCellStyled align="left">
                                        {earning.vendorname}
                                    </TableCellStyled>
                                    <TableCellStyled align="center">
                                        {earning.contact}
                                    </TableCellStyled>
                                    <TableCellStyled align="center">
                                        {earning.totalrevenue}
                                    </TableCellStyled>
                                    <TableCellStyled align="center">
                                        {earning.location}
                                    </TableCellStyled>
                                </Box>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainerStyled>
            </TablePaper>

            {/* Custom Delete Confirmation Modal to match Figma */}
            {openDeleteModal && (
                <Box sx={figmaModalStyle}>
                    <Typography id="delete-modal-title" sx={figmaTitleStyle}>
                        Are you sure you want to delete the <br />Homepage title?
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '48px' }}>
                        <Button variant="outlined" onClick={handleCloseDeleteModal} sx={figmaCancelButtonStyle}>
                            Cancel
                        </Button>
                        <Button variant="contained" onClick={handleDeleteConfirm} sx={figmaDeleteButtonStyle}>
                            Delete
                        </Button>
                    </Box>
                </Box>
            )}
        </DashboardContainer>
    );
};

export default Dashboard;