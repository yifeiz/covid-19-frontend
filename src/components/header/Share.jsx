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
const size = 24;

function ShareButtons(props) {
    return <div className="share">
                <FacebookShareButton
                    url={shareUrl}
                    quote={fbQuote}
                    className="share-button"
                >
                    <FacebookIcon size={size} round />
                </FacebookShareButton>
                <TwitterShareButton
                    url={shareUrl}
                    title={twitterTitle}
                    className="share-button"
                >
                    <TwitterIcon size={size} round />
                </TwitterShareButton>
                <EmailShareButton
                    url={shareUrl}
                    subject={mailSubject}
                    body={mailBody}
                    className="share-button"
                >
                    <EmailIcon size={size} round />
                </EmailShareButton>
            </div>

    ;
}

export default ShareButtons;