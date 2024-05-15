/* eslint-disable react/prop-types */
import Column from "../Column/Column";
import Row from "../Row/Row";
import Button from "../Button/Button";
import kColor from "../../constants/kColor";

function DialogMessage({ onReject, onAccept }) {
  const textStyle = {
    color: kColor.primaryMain,
  };
  return (
    <Column gap="2rem">
      <h3 style={textStyle}>Are you sure you want to delete ?</h3>
      <Row gap="1rem" justifyContent="center">
        <Button variant="outlined" onClick={onReject}>
          No
        </Button>
        <Button themeColor={kColor.success} onClick={onAccept}>
          Yes
        </Button>
      </Row>
    </Column>
  );
}

export default DialogMessage;
