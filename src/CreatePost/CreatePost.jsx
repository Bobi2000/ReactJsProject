import React from 'react';
import '../Board/Board.css';

export default function CreatePost() {
    return <div className="content"> 
                <div className="row columns"> 
                    <div className="column main">
                        <div className="discussions disscussion-list box main">
                        <form id="submission-form" className="custom" method="post">
                            <div className="prompt box clearfix">
                                <span>Creating a Discussion in </span>
                                <select id="application_id" name="application_id" required="required" className="btn">
                                    <option value="">Choose a Board</option>
                                    <option value="Mpd1UjGe">Creations Concepts</option>
                                    <option value="jeJYsmwG">Streams Videos</option>
                               </select>
                            </div>
                            <label for="title" class="title-field">Title</label>
                            <input type="text" name="title" required="required" maxlength="100" class="title title-field box submit" value="Add a title"></input>

                            <label for="link" class="title-field">Link</label>
                            <input type="text" name="title" required="required" maxlength="100" class="title title-field box submit" value="Add a Link (optional)"></input>

                            <label for="body" class="title-field">Body</label>
                            <div class="form-container">
                            <textarea id="body" name="body" required="required" class="body body-field box" data-apollo-widget="toolbar"></textarea>
                            </div>

                            <button type="submit" class="button" value="Submit" data-bind="click: submit">
                                <div class="loading-indicator">
                                    <span class="fist"></span>
                                    <span class="halo spinning"></span>
                                </div>
                                <span class="submitMsg">Post Discussion</span>
                            </button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>;
}

