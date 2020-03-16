import { connect } from "react-redux";

import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator
} from "../../redux/dialogs-reducer";

import Dialogs from "./Dialogs";
import { compose } from "redux";

let mapStateToProps = state => ({ dialogsPage: state.dialogsPage });

let mapDispatchToProps = dispatch => {
  return {
    updateNewMessageBody: body => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
