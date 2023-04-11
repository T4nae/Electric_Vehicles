import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

export function Nav() {
    return (
        <ButtonToolbar
            data-aos="slide-down"
            data-aos-duration="2000"
            className="justify-content-center"
        >
            <ButtonGroup size="lg" className="button-group">
                <Button className="button" variant="link" href="#home">
                    Home
                </Button>
                <Button className="button" variant="link" href="#compare">
                    Compare
                </Button>
                <Button className="button" variant="link" href="#growth">
                    Growth
                </Button>
                <Button className="button" variant="link" href="#pumps">
                    Pumps
                </Button>
                <Button className="button" variant="link" href="#effects">
                    Effects
                </Button>
            </ButtonGroup>
        </ButtonToolbar>
    );
}

import "./goTop.css";

export function GoTop(props) {
    return (
        <>
            <div className={props.showGoTop} onClick={props.scrollUp}>
                <button type="button" className="btn btn-link" />
            </div>
        </>
    );
}
export default GoTop;
