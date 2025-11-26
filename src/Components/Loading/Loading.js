import React from 'react';
import "./Loading.css"

const Loading = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-10 text-center loading shadow-lg p-14 mx-auto">
                        <div className="lds-roller">
                            <div className="spinner-border text-info" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Loading;