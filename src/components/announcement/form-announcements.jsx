import React from "react";
import {Field, reduxForm} from 'redux-form';
import renderInput from "../../shared/input"
import Button from '@material-ui/core/Button';

const FormAnnouncement = ({handleSubmit, post}) => {

    return (
        <>
        <form action="form" onSubmit={handleSubmit} className="form">
            {post ?
                <h1>Edit Announcement</h1> :
                <h1>Add Announcement</h1>
            }
            <Field
                name="title"
                component={renderInput}
                required
                placeholder="title"
            />
            <Field
                name="description"
                component={renderInput}
                required
                placeholder="description"
                className="inp-description"


            />
            <div className="box-buttons">
                <Button
                    size="medium"
                    color="primary"
                    variant="contained"
                    type="submit"
                >{post ? "Save" : "Create"}</Button>
            </div>
        </form>
        </>
    )
};
export default reduxForm({
    form: 'form_announcement'
})(FormAnnouncement);