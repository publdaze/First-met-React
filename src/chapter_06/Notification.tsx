import React, { Component } from "react";
import { Alert } from "@material-tailwind/react";

export interface NotificationProps {
  message: string;
}

class Notification extends Component<NotificationProps> {
  constructor(props: NotificationProps) {
    super(props);

    this.state = {};
  }

  render() {
    return <Alert className="m-5 w-96">{this.props.message}</Alert>;
  }
}

export default Notification;
