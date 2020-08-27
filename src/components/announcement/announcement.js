import React from "react";
import FormAnnouncement from "./form-announcements";
import {connect} from "react-redux";
import {ROOT} from "../../constants/routes"
import {getAnnouncementAction, getEditPostAction, getUpdatePostAction} from "../../redux/actions/announcement"
import {reset} from 'redux-form';
import {withRouter} from 'react-router-dom';
import moment from "moment";
import Button from '@material-ui/core/Button';

const Announcement = ({getAnnouncementAction, getEditPostAction, getUpdatePostAction, reset, history, announcement}) => {

    const funcCreatePost = (post) => {
        post.id = `f${(+new Date).toString(16)}`;
        post.date = moment(new Date()).calendar();
        getAnnouncementAction(post);
        reset("form_announcement");
        history.push(ROOT)
    };
    const funcEditPost = (post) => {
        post.date = moment(new Date()).calendar();
        getUpdatePostAction(post);
        reset("form_announcement");
        history.push(ROOT);
        getEditPostAction(null);
    };


    return (
        <div className="container-form">
        <Button size="medium" color="primary" className="btn-back" variant="contained" onClick={()=> history.push(ROOT)}>Go to back</Button>

        <FormAnnouncement
            initialValues={announcement.edit_post}
            onSubmit={announcement.edit_post ? funcEditPost : funcCreatePost}
            post={announcement.edit_post}
        />
        </div>
    )
};
function mapStateToProps({announcement}) {
    return {
        announcement,
    };
}

const mapDispatchToProps = {
    getAnnouncementAction,
    getEditPostAction,
    getUpdatePostAction,
    reset
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Announcement));