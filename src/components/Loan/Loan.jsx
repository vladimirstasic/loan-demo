import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    AppBar,
    Button,
    ButtonGroup,
    CssBaseline,
    Grid,
    InputAdornment,
    Link,
    NativeSelect,
    Paper,
    Slider,
    TextField,
    Toolbar,
    Typography
} from "@material-ui/core";
import {useLazyQuery} from "@apollo/client";
import {GET_ALL_POSTS, GET_POST} from "../../queries/queries";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                LoanAid.AI
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
        backgroundColor: theme.palette.secondary.main
    },
    layout: {
        width: 'auto',
        margin: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 1024,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(8),
        },
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

export default function Loan() {
    const classes = useStyles();
    const CURRENCIES = {
        EUR: {
            value: 'EUR',
            symbol: '€'
        },
        USD: {
            value: 'USD',
            symbol: '$'
        },
        GBP: {
            value: 'GBP',
            symbol: '£'
        },
    }
    const [currency, setCurrency] = useState(CURRENCIES.EUR.value);
    const [sliderValues, setSliderValues] = useState({
        homePrice: 50000,
        downPayment: 10000,
        durationInMonths: 20,
        postId: 1,
        posts: {
            page: 1,
            limit: 5,
        }
    })

    const [getPost, {data: postData}] = useLazyQuery(GET_POST, {
        fetchPolicy: 'network-only',
    })

    const [getAllPosts, {data: allPostsData}] = useLazyQuery(GET_ALL_POSTS, {
        fetchPolicy: 'network-only',
    })

    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="absolute" color="default" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        LoanAid.AI
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container className={classes.layout}>
                <Grid item>
                    <Typography variant="h3" color="inherit" noWrap align={"center"}>
                        Calculate and Compare Your Loans
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom align={"center"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias amet culpa ducimus eaque eius
                        et
                        expedita impedit itaque laudantium minima numquam odio, optio quasi sapiente sunt voluptate
                        voluptatem
                        voluptates?
                    </Typography>
                </Grid>
            </Grid>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                            <Grid container direction="column">
                                <Typography variant="h6">
                                    New Loan Application
                                </Typography>
                                <div>
                                    <NativeSelect
                                        id="demo-customized-select-native"
                                    >
                                        <option value={10}>Ten</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                    </NativeSelect>
                                    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                                        <Button onClick={() => setCurrency(CURRENCIES.USD.value)}>USD</Button>
                                        <Button onClick={() => setCurrency(CURRENCIES.EUR.value)}>EUR</Button>
                                        <Button onClick={() => setCurrency(CURRENCIES.GBP.value)}>GBP</Button>
                                    </ButtonGroup>
                                </div>
                                <Grid container spacing={5} alignItems="center">
                                    <Grid item xs={9}>
                                        <p>Home price</p>
                                        <Slider
                                            defaultValue={0}
                                            aria-labelledby="discrete-slider-custom"
                                            onChangeCommitted={e => setSliderValues({
                                                ...sliderValues,
                                                homePrice: e.target.ariaValueNow
                                            })}
                                            step={1000}
                                            min={50000}
                                            max={500000}
                                            marks={[
                                                {
                                                    value: 50000,
                                                    label: `50.000${CURRENCIES[currency].symbol}`,
                                                },
                                                {
                                                    value: 100000,
                                                    label: `100.000${CURRENCIES[currency].symbol}`,
                                                },
                                                {
                                                    value: 500000,
                                                    label: `500.000${CURRENCIES[currency].symbol}`,
                                                },
                                            ]}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField id="home-price-field" value={sliderValues.homePrice}
                                                   variant="outlined" disabled InputProps={{
                                            endAdornment: <InputAdornment
                                                position="end">{CURRENCIES[currency].symbol}</InputAdornment>,
                                        }}/>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={5} alignItems="center">
                                    <Grid item xs={9}>
                                        <p>Down Payment (20%)</p>
                                        <Slider
                                            defaultValue={0}
                                            aria-labelledby="discrete-slider-custom"
                                            step={10}
                                            onChangeCommitted={e => setSliderValues({
                                                ...sliderValues,
                                                downPayment: e.target.ariaValueNow
                                            })}
                                            min={10000}
                                            max={100000}
                                            marks={[
                                                {
                                                    value: 10000,
                                                    label: `10.000${CURRENCIES[currency].symbol}`,
                                                },
                                                {
                                                    value: 50000,
                                                    label: `50.000${CURRENCIES[currency].symbol}`,
                                                },
                                                {
                                                    value: 100000,
                                                    label: `100.000${CURRENCIES[currency].symbol}`,
                                                },
                                            ]}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField id="down-payment-field" value={sliderValues.downPayment}
                                                   variant="outlined"
                                                   disabled InputProps={{
                                            endAdornment: <InputAdornment
                                                position="end">{CURRENCIES[currency].symbol}</InputAdornment>,
                                        }}/>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={5} alignItems="center">
                                    <Grid item xs={9}>
                                        <p>Duration in Months</p>
                                        <Slider
                                            defaultValue={0}
                                            aria-labelledby="discrete-slider-custom"
                                            onChangeCommitted={e => setSliderValues({
                                                ...sliderValues,
                                                durationInMonths: e.target.ariaValueNow
                                            })}
                                            step={1}
                                            min={20}
                                            max={240}
                                            marks={[
                                                {
                                                    value: 20,
                                                    label: '20 months',
                                                },
                                                {
                                                    value: 120,
                                                    label: '120 months',
                                                },
                                                {
                                                    value: 240,
                                                    label: '240 months',
                                                },
                                            ]}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField id="duration-months-field" value={sliderValues.durationInMonths}
                                                   variant="outlined" disabled InputProps={{
                                            endAdornment: <InputAdornment
                                                position="end"><small>months</small></InputAdornment>,
                                        }}/>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={5}>
                                    <Grid item xs={9}>
                                        <p>SET ID PER POST</p>
                                        <Slider
                                            defaultValue={0}
                                            aria-labelledby="discrete-slider-custom"
                                            onChangeCommitted={e => setSliderValues({
                                                ...sliderValues,
                                                postId: Number(e.target.ariaValueNow)
                                            })}
                                            step={1}
                                            min={1}
                                            max={10}
                                            marks={[
                                                {
                                                    value: 1,
                                                    label: 'ID 1',
                                                },
                                                {
                                                    value: 5,
                                                    label: 'ID 5',
                                                },
                                                {
                                                    value: 10,
                                                    label: 'ID 10',
                                                },
                                            ]}
                                        />
                                        <Button variant="contained" color="secondary" onClick={() => getPost({
                                            variables: {
                                                id: sliderValues.postId
                                            },
                                        })}>
                                            Get Posts
                                        </Button>
                                        <pre>{postData?.post?.body}</pre>
                                        <pre>{postData?.post?.id}</pre>
                                        <p>GET POSTS</p>
                                        <Slider
                                            defaultValue={0}
                                            aria-labelledby="discrete-slider-custom"
                                            onChangeCommitted={e => setSliderValues({
                                                ...sliderValues,
                                                posts: {
                                                    page: e.target.ariaValueNow,
                                                    limit: e.target.ariaValueNow,
                                                }
                                            })}
                                            step={1}
                                            min={1}
                                            max={10}
                                            marks={[
                                                {
                                                    value: 1,
                                                    label: 'ID 1',
                                                },
                                                {
                                                    value: 5,
                                                    label: 'ID 5',
                                                },
                                                {
                                                    value: 10,
                                                    label: 'ID 10',
                                                },
                                            ]}
                                        />
                                        <Button variant="contained" color="secondary" onClick={() => getAllPosts({
                                            variables: {
                                                options: {
                                                    "paginate": {
                                                        "page": Number(sliderValues.posts.page),
                                                        "limit": Number(sliderValues.posts.limit)
                                                    }
                                                }
                                            }
                                        })}>
                                            Get All Posts
                                        </Button>
                                        {allPostsData?.posts?.data?.map((post, index) => (
                                            <pre key={index}>
                                                  <div>{post?.id}</div>
                                                  <div>{post?.title}</div>
                                                </pre>
                                        ))}
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField id="duration-months-field" value={sliderValues.postId}
                                                   variant="outlined" disabled InputProps={{
                                            endAdornment: <InputAdornment
                                                position="end"><small>ID</small></InputAdornment>,
                                        }}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                            flexDirection: "column"
                        }}>
                            <div style={{textAlign: "center"}}>
                                <Typography variant="subtitle1" gutterBottom>
                                    Estimated payment
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {CURRENCIES[currency].symbol}{((sliderValues.homePrice - sliderValues.downPayment) / sliderValues.durationInMonths * 1.2).toFixed(2) || 0}/<small>month</small>
                                </Typography>
                            </div>
                            <div style={{textAlign: "center"}}>
                                <p>Loan Amount</p>
                                <div>{`${CURRENCIES[currency].symbol} ${sliderValues.homePrice}`}</div>
                            </div>
                            <div style={{textAlign: "center"}}>
                                <p>Down payment</p>
                                <div>{`${CURRENCIES[currency].symbol} ${sliderValues.downPayment}`}</div>
                            </div>
                            <div style={{textAlign: "center"}}>
                                <p>Loan term</p>
                                <div>{sliderValues.durationInMonths % 12 === 0 ? `${sliderValues.durationInMonths / 12} ${sliderValues.durationInMonths / 12 === 1 ? 'year' : 'years'}` : `${sliderValues.durationInMonths} months`}</div>
                            </div>
                            <div style={{textAlign: "center"}}>
                                <p>Property tax</p>
                                <div>1.2%/year</div>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
                <Copyright/>
            </main>
        </React.Fragment>
    );
}