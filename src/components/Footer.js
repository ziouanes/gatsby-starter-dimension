import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Hamza - Progeamming. Design: <a href="https://www.instagram.com/hamza_ziouane/">instagram</a><span className="icon fa-instagram"></span>. Built with: <a href="https://github.com/ziouanes">Github</a><span className="icon fa-github"></span></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
