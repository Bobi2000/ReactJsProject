import React from 'react';
import * as yup from 'yup';

import '../Board/Board.css';
import withForm from '../shared/hocs/withForm.jsx';
import postService from '../services/post-service';


class CreatePost extends React.Component {

    tagOnChangeHandler = this.props.controlChangeHandlerFactory('tag');
    titleOnChangeHandler = this.props.controlChangeHandlerFactory('title');
    linkOnChangeHandler = this.props.controlChangeHandlerFactory('link');
    descriptionOnChangeHandler = this.props.controlChangeHandlerFactory('description');

    submitHandler = () => {
        const errors = this.props.getFormErrorState();
        if (!!errors) { return; }
        const data = this.props.getFormState();
        postService.create(data).then(() => {
            this.props.history.push('/');
        });
    }

    getFirstControlError = name => {
        const errorState = this.props.getFormErrorState();
        return errorState && errorState[name] && errorState[name][0];
    };

    render() {
        const tagError = this.getFirstControlError('tag');
        const titleError = this.getFirstControlError('title');
        const linkError = this.getFirstControlError('link');
        const descriptionError = this.getFirstControlError('description');

        return <div className="content">
            <div className="row columns">
                <div className="column main">
                    <div className="discussions disscussion-list box main">
                        <form id="submission-form" className="custom">
                            <div className="prompt box clearfix">
                                <span>Creating a Discussion in </span>
                                <select id="application_id" name="application_id" required="required" className="btn" onChange={this.tagOnChangeHandler}>
                                    <option value="">Choose a Board</option>
                                    <option value="Champions">Champions</option>
                                    <option value="StreamsVideos">Streams Videos</option>
                                    <option value="CreationsConcepts">Creations Concepts</option>
                                    <option value="OffTopic">Off Topic</option>
                                </select>
                            </div>
                            {tagError && <div className="error">{tagError}</div>}

                            <label className="title-field">Title</label>
                            <input type="text" name="title" required="required" maxLength="100" className="title title-field box submit" onChange={this.titleOnChangeHandler} ></input>
                            {titleError && <div className="error">{titleError}</div>}

                            <label className="title-field">Link (optional)</label>
                            <input type="text" name="title" className="title title-field box submit" onChange={this.linkOnChangeHandler} ></input>
                            {linkError && <div className="error">{linkError}</div>}

                            <label className="title-field">Body</label>
                            <div className="form-container">
                                <textarea id="body" name="body" required="required" cols="255" rows="6" className="body body-field box" data-apollo-widget="toolbar" onChange={this.descriptionOnChangeHandler} ></textarea>
                            </div>
                            {descriptionError && <div className="error">{descriptionError}</div>}   

                            <button type="button" className="button" value="Submit" onClick={this.submitHandler}>
                                <div className="loading-indicator">
                                    <span className="fist"></span>
                                    <span className="halo spinning"></span>
                                </div>
                                <span className="submitMsg">Post Discussion</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>;
    };
}

const initialFormState = {
    tag: '',
    title: '',
    description: '',
    link: ''
};

const schema = yup.object({
    title: yup.string('Title shoud be a string')
        .required('Title is required')
        .min(4, 'Title should be more than 4 chars'),

    description: yup.string('Description must be a string')
        .required('Description is required')
        .min(6, 'Description must be more than 6 chars'),

    link: yup.string('Link must be a string'),
       

    tag: yup.string('Tag must be a string'),
});

export default withForm(CreatePost, initialFormState, schema)

// .matches(/http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)/, 'Link must end with jpg/gif/png'),