/**
 * Created by lesha on 08.10.2017.
 */


import React from 'react';
import {Grid, Row, Col,Glyphicon} from 'react-bootstrap'
import {Link} from 'react-router-dom';
class Footer extends React.Component {

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    //ES5 - componentWillMount
    constructor(props) {
        super(props);
    }

    componentDidMount(){

    }

    componentWillReceiveProps(){

    }

    render = () => {

        return (
            <div className="footer_placeholder">
                <Grid fluid>
                    <Row className="centered">
                        <Col sm={12}
                             // className="pull-left">
                            >
                            <ol className="soc_icn">
                            {/*<h3>*/}
                                <a href="https://vk.com/nauka_v_regiony"> <i className="fa fa-vk fa-2x" aria-hidden="true"></i> </a>
                                <a href="mailto:yuliya@naukavregiony.com"> <i className="fa fa-envelope fa-2x" aria-hidden="true"></i> </a>
                                <a href="https://www.youtube.com/watch?v=ttZP-A7q2S0&feature=youtu.be"> <i className="fa fa-youtube-play fa-2x" aria-hidden="true"></i> </a>
                            {/*</h3>*/}
                            </ol>
                        </Col>
                        <br/>
                        <Col sm={12}>

                            <h4>© Фонд развития Физтех-школ. Все права защищены.</h4>
                        </Col>

                    </Row>
                </Grid>
            </div>
        )
    }

}


//const mapStateToProps = (state) => {
//    return {
//        currentUserId: state.users.currentUserId,
//        loading: state.users.loading
//    }
//}

//const mapDispatchToProps = (dispatch) => {
//    return {
//        onLogout: (data) => {
//            dispatch(actions.logOut())
//        }
//    }
//}

//Footer = connect(mapStateToProps, mapDispatchToProps)(Footer)

export default Footer