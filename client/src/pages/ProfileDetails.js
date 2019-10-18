import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import NavigationBar from "./Navbar";
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Rating from "@material-ui/lab/Rating";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// import SimpleSnackbar from "./snackbar";
import { Snackbar, IconButton } from "@material-ui/core";

const detailsPageStyle = theme => ({
    detailsContainer: {
        margin: theme.spacing.unit * 2
    },
    container: {
        marginBottom: theme.spacing(100),
    },
    smallAvatar: {
        width: 75,
        height: 75,
    },
    bigAvatar: {
        width: 300,
        height: 300,
    },
    roundedBigAvatar: {
        width: 300,
        height: 300,
        borderRadius: 10,
    },
    root: {
        flexGrow: 1,
    },
    marginHorizontal: {
        marginLeft: 60,
        marginRight: 30,
    },
    marginBottom: {
        marginBottom: 30,
    },
    squareBackground: {
        borderRadius: 0,
        width: 300,
        height: 300,
    },
    border: {
        border: 10,
    },
    requestBtn: {
        backgroundColor: "red",
        color: "white",
    }

});

const initalState = {
    firstName: "Norma",
    lastName: "Byers",
    gender: "",
    birthDate: "",
    phone: "",
    address: "Your address",
    description: "Lorem ipsum dolor sit amet adipiscing bibendum sem orci tempus aliquet gravida, orci amet iaculis aptent blandit quam accumsan donec in facilisis, cursus ante curabitur aliquet condimentum tincidunt facilisis non cubilia lorem et pretium aliquam phasellus ipsum metus quisque auctor tristique donec nibh, praesent congue ultricies aenean ornare ligula sagittis proin sed vestibulum purus tempus aenean neque aliquam curae vivamus purus egestas ligula tincidunt nullam. Dolor id fri",
    rate: "$14/hr",
    photo: "../images/07cc6abd390ab904abbf31db5e6ea20357f8b127.png",
    status: "Available",
};

class ProfileDetails extends Component {

    state = initalState;

    constructor(props) {
        super(props)
        this.handleGet = this.handleGet.bind(this);
    }

    handleGet = event => {
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left"
                    }}
                    open={this.state.snackbaropen}
                    autoHideDuration={3000}
                    onClose={this.snackbarClose}
                    message={<span id="message-id">{this.state.snackbarmsg}</span>}
                    action={[
                        <IconButton
                            key="close"
                            arial-label="Close"
                            color="inherit"
                            onClick={this.snackbarClose}
                        ></IconButton>
                    ]}
                />
                <NavigationBar></NavigationBar>
                <Grid container spacing={5}>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={7}>
                        <Grid container spacing={4} align="center">
                            <Box width={1} boxShadow={2}>
                                <Grid item >
                                    {/*Replace with picture later, add background image*/}
                                    <Avatar alt="Your Profile Picture" src={require("../images/07cc6abd390ab904abbf31db5e6ea20357f8b127.png")} className={classes.bigAvatar} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="h4">{this.state.firstName} {this.state.lastName}</Typography>
                                </Grid>
                                <Grid item className={classes.marginBottom} >
                                    <Typography variant="subtitle2">Loving pet sitter</Typography>
                                </Grid>

                                <Grid item className={classes.marginBottom} >
                                    <Typography variant="subtitle2">{this.state.address}</Typography>
                                </Grid>
                                <Grid
                                    item
                                    xs={11}
                                    align="left"
                                    className={classes.marginBottom}
                                >
                                    <h2>About Me</h2>
                                </Grid>
                                <Grid
                                    item
                                    xs={11}
                                    align="left"
                                    className={classes.marginBottom}
                                >
                                    <Typography className={classes.marginHorizontal} variant="body1">{this.state.description}</Typography>
                                </Grid>
                                <Grid
                                    item
                                    xs={11}
                                    align="left"
                                    className={classes.marginBottom}
                                >
                                    <Avatar alt="Your Pets" src={require("../images/07cc6abd390ab904abbf31db5e6ea20357f8b127.png")} className={classes.roundedBigAvatar} style={{ borderRadius: 10 }} />
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Box boxShadow={2} className={classes.marginBottom}>
                            <Grid container align="center" direction="column" spacing={4}>
                                {/*Add color based on status*/}
                                <Box width={1}>
                                    <h2>{this.state.status}</h2>
                                </Box>
                                <Grid item>
                                    <h2>{this.state.rate}</h2>
                                </Grid>
                                <Grid item>
                                    <Rating value={5} readOnly />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id="drop-in"
                                        label="Drop In"
                                        type="datetime-local"
                                        defaultValue="2019-05-24T10:30"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id="drop-out"
                                        label="Drop Out"
                                        type="datetime-local"
                                        defaultValue="2019-05-24T10:30"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item>
                                    <Button size="large" variant="contained" className={classes.requestBtn}>
                                        Send Request
                                        </Button>
                                </Grid>
                            </Grid>
                        </Box>
                        <Grid item spacing={4} className={classes.marginBottom}>
                            <Grid container direction="column" align="center" className={classes.marginBottom}>
                                <Typography variant="h4">Reviews</Typography>
                            </Grid>
                            <Grid container direction="row">
                                <Grid item>
                                    <Avatar alt="Your Profile Picture" src={require("../images/07cc6abd390ab904abbf31db5e6ea20357f8b127.png")} className={classes.smallAvatar} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="h5">Sarah Blakeney</Typography>
                                    <Rating value={5} readOnly />
                                </Grid>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Typography variant="subtitle2">I recommend Norma as a pet sitter!</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container direction="row">
                            <Grid item>
                                <Avatar alt="Your Profile Picture" src={require("../images/07cc6abd390ab904abbf31db5e6ea20357f8b127.png")} className={classes.smallAvatar} />
                            </Grid>
                            <Grid item>
                                <Typography variant="h5">Tom Williams</Typography>
                                <Rating value={5} readOnly />
                            </Grid>
                            <Grid container direction="column">
                                <Grid item>
                                    <Typography variant="subtitle2">I recommend Norma as a pet sitter!</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <SimpleSnackbar></SimpleSnackbar> */}
            </div>
        );
    }
}

export default withStyles(detailsPageStyle)(ProfileDetails);