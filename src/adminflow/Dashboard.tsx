import React from "react";
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

const Dashboard = () => {
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

    // Data for the "Homepage Title" list
    const festdata = [
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

    function editHomeTilte() {
        if (path === "/admin" || path === "/admin/dashboard") {
            navigate('/admin/dashboard/edit-home-title/');
        }
    }

    return (
        <DashboardContainer>
            {/* Top section with dashboard data cards */}
            <TopSectionPaper>
                <DashboardDataGrid>
                    {dashboarddata.map((data, index) => (
                        <React.Fragment key={data.id}>
                            <DashboardCard>
                                <DashboardIcon component="img" src={data.icon} alt={data.label} />
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

            {/* Middle section with delivery status cards and bar chart */}
            <MiddleSection>
                <LeftColumn>
                    {/* Pickup and delivery status cards */}
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

                    {/* Bar chart for total revenue */}
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
                                    disableLine: true,
                                    disableTicks: true,
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

                {/* Right column with "Homepage Title" list */}
                <RightColumn>
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
                                    <HomepageTitleImage component="img" src={data.icon} alt="Homepage Title" />
                                    <HomepageTitleContent>
                                        <HomepageTitleTitle>{data.title}</HomepageTitleTitle>
                                        <HomepageTitleDate>{data.date}</HomepageTitleDate>
                                    </HomepageTitleContent>
                                    <HomepageTitleActions>
                                        <ActionIcon component="img" src={EditIcon} alt="Edit" onClick={editHomeTilte} />
                                        <ActionIcon as="img" src={DeleteOutlineIcon} alt="Delete" />
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

            {/* Bottom section with the "Highest-earning restaurants" table */}
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
        </DashboardContainer>
    );
};

export default Dashboard;