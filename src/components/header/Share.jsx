import {
    EmailShareButton, EmailIcon,
    FacebookShareButton, FacebookIcon,
    TwitterShareButton, TwitterIcon,
} from "react-share";
import React from "react";

const shareUrl = "https://flatten.ca";
const fbQuote = "";
const twitterTitle = "";
const mailSubject = "";
const mailBody = "";

function ShareButtons(props) {
    return <div className="share">
                <FacebookShareButton
                    url={shareUrl}
                    quote={fbQuote}
                    className="share-button"
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton
                    url={shareUrl}
                    title={twitterTitle}
                    className="share-button"
                >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
                <EmailShareButton
                    url={shareUrl}
                    subject={mailSubject}
                    body={mailBody}
                    className="share-button"
                >
                    <EmailIcon size={32} round />
                </EmailShareButton>
            </div>

    ;
}

export default ShareButtons;