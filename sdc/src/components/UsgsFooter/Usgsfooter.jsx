import React from "react";

class Usgsheader extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="tmp-container">
          <div className="footer-sdc">
            <ul className="menu nav">
              <li className="first leaf menu-links menu-level-1">
                <a href="https://www.doi.gov/privacy">DOI Privacy Policy</a>
              </li>
              <li className="leaf menu-links menu-level-1">
                <a href="https://www.usgs.gov/laws/policies_notices.html">
                  Legal
                </a>
              </li>
              <li className="leaf menu-links menu-level-1">
                <a href="https://www2.usgs.gov/laws/accessibility.html">
                  Accessibility
                </a>
              </li>
              <li className="leaf menu-links menu-level-1">
                <a href="https://www.usgs.gov/sitemap.html">Site Map</a>
              </li>
              <li className="last leaf menu-links menu-level-1">
                <a href="https://answers.usgs.gov/">Contact USGS</a>
              </li>
            </ul>
          </div>
          <hr />
          <div className="footer-sdc">
            <ul className="menu nav">
              <li className="first leaf menu-links menu-level-1">
                <a href="https://www.doi.gov/">
                  U.S. Department of the Interior
                </a>
              </li>
              <li className="leaf menu-links menu-level-1">
                <a href="https://www.doioig.gov/">DOI Inspector General</a>
              </li>
              <li className="leaf menu-links menu-level-1">
                <a href="https://www.whitehouse.gov/">White House</a>
              </li>
              <li className="leaf menu-links menu-level-1">
                <a href="https://www.whitehouse.gov/omb/management/egov/">
                  E-gov
                </a>
              </li>
              <li className="leaf menu-links menu-level-1">
                <a href="https://www.doi.gov/pmb/eeo/no-fear-act">
                  No Fear Act
                </a>
              </li>
              <li className="last leaf menu-links menu-level-1">
                <a href="https://www2.usgs.gov/foia">FOIA</a>
              </li>
            </ul>
          </div>
          <div className="footer-social-links">
            <ul className="social">
              <li className="follow">Follow</li>
              <li className="twitter">
                <a
                  href="https://twitter.com/usgs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter-square">
                    <span className="only">Twitter</span>
                  </i>
                </a>
              </li>
              <li className="facebook">
                <a
                  href="https://facebook.com/usgeologicalsurvey"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook-square">
                    <span className="only">Facebook</span>
                  </i>
                </a>
              </li>
              <li className="github">
                <a
                  href="https://github.com/usgs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github">
                    <span className="only">GitHub</span>
                  </i>
                </a>
              </li>
              <li className="flickr">
                <a
                  href="https://flickr.com/usgeologicalsurvey"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-flickr">
                    <span className="only">Flickr</span>
                  </i>
                </a>
              </li>
              <li className="youtube">
                <a
                  href="http://youtube.com/usgs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-youtube-play">
                    <span className="only">YouTube</span>
                  </i>
                </a>
              </li>
              <li className="instagram">
                <a
                  href="https://instagram.com/usgs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-instagram">
                    <span className="only">Instagram</span>
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
export default Usgsheader;
