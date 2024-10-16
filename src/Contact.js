import Helmet from 'react-helmet';
import Titlebar from './Titlebar';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YoutubeIcon from '@material-ui/icons/YouTube';

const Contact = () => {
    return(
        <>
            <div>
                <Helmet><title>Contact</title></Helmet>
            </div>
            <Titlebar title="CONTACT" />
            <div className="container">
                <div className="row position-relative d-flex align-items-center">
                    <div className="col-md-5">
                        <form>
                            <div className="mb-3">
                                <input type="text" name="fullName" placeholder="Full Name" className="form-control" id="InputFullName" />
                            </div>
                            <div className="mb-3">
                                <input type="email" name="emailId" placeholder="Email ID" className="form-control" id="InputEmail" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                            <input type="text" name="contactNumber" placeholder="Contact Number" className="form-control" id="InputContactNo" />
                            </div>
                            <div className="mb-3">
                                <input type="text" name="subject" placeholder="Enquiry For?" className="form-control" id="InputSubject" />
                            </div>
                            <div className="mb-3">
                                <textarea name="msg" placeholder="Message.." className="form-control" id="InputMsg"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-2">
                        <div className="col_divider">
                            <span>OR</span>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="contact_detail">
                            <p><strong>Address:</strong> Sample text, Mumbai, India</p>
                            <p><strong>Email:</strong> admin@gmail.com</p>
                            <p><strong>Phone:</strong> +91-9999900000</p>
                            <p><strong>Social:</strong> <FacebookIcon /> <InstagramIcon /> <YoutubeIcon /></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;