import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function CustomDialog({ open, children, title, contentText, handleContinue }) {
  return (
    <Dialog open={open} PaperProps={{sx: {width: "50%"}}}> {/*dialog container*/}
      <DialogTitle fontFamily={"Rubik"} fontWeight={"bold"} color={"#235789"}>{title}</DialogTitle>
      <DialogContent fontFamily={"Rubik"}> {/* Main body of modal/dialog */}
        <DialogContentText fontFamily={"Rubik"}> {/* main text */}
          {contentText}
        </DialogContentText>
        {children} {/* Other content */}
      </DialogContent>
      <DialogActions> {/* Dialog action buttons */}
        {/* Force users to make input without option to cancel */}
        {/* <Button onClick={handleClose}>Cancel</Button> */}
        <Button fontFamily={"Rubik"} onClick={handleContinue} sx={{color: "#235789"}}>Continue</Button>
      </DialogActions>
    </Dialog>
  );
}