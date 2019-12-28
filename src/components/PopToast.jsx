import React from "react";
import Toast from 'react-bootstrap/Toast'

const PopToast = ({ show }) => {

    return (
        <Toast show={show} delay={3000} style={styles}>
            <Toast.Body>More info could be  here! like Lorem ipsum or something.</Toast.Body>
        </Toast>
    );
}

export default PopToast;

const styles = {
    position:'absolute',

}