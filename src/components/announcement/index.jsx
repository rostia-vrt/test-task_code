import React, {useState} from "react";
import {connect} from "react-redux";
import {FORM_ANNOUNCEMENT} from "../../constants/routes"
import {getEditPostAction, removePostAction} from "../../redux/actions/announcement"
import {withRouter} from 'react-router-dom';
import renderInput from "../../shared/input"
import {Field, reduxForm} from 'redux-form';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const AnnouncementCard = ({announcement, getEditPostAction, removePostAction, history}) => {
    const [search, setSearch] = useState('');
    const result = announcement && announcement.posts && announcement.posts.filter(el => el && el.title ? el.title.includes(search) || el.description.includes(search) : "");

    const funcEditPost = (post) => {
        getEditPostAction(post);
        history.push(FORM_ANNOUNCEMENT)
    };

    return (
        <>
        <div className="box-header">
            <Button size="medium" color="primary" className="btn-create" variant="contained" onClick={() => history.push(FORM_ANNOUNCEMENT)}>Create card</Button>
            <Field
                name="search"
                placeholder="Search"
                component={renderInput}
                onChange={(e) => setSearch(e.target.value)}/>
        </div>
        { result && result.length > 0 ?
            <div>
                {result.map((item, index) => (
                    <div className="card" key={item.id}>
                        <div className="top-box">
                            <h3>{item.title}</h3>
                            <p>{item.date}</p>
                        </div>
                        <p className="description">{item.description}</p>

                        <div className="box-buttons">
                            <Button size="small" startIcon={<EditIcon />} variant="contained" color="primary"
                                    onClick={() => funcEditPost(item)}>Edit post</Button>
                            <Button size="small" startIcon={<DeleteIcon />} variant="contained" color="secondary"
                                    onClick={() => removePostAction(item)}>Delete</Button>
                        </div>

                    </div>
                )) }
            </div>:
            <div  className="not-found">
                <h2 >Nothing Found</h2>
            </div>

        }
        </>
    )
};
const mapDispatchToProps = {
    getEditPostAction,
    removePostAction
};

function mapStateToProps({announcement}) {
    return {
        announcement,
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'search_announcement'
})(AnnouncementCard)));
