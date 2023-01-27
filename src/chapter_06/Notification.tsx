import React, { Component } from "react";
import { Alert } from "@material-tailwind/react";

export interface NotificationProps {
  id: number;
  message: string;
}

class Notification extends Component<NotificationProps> {
  constructor(props: NotificationProps) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log(`${this.props.id} componentDidMount() called.`);
  }

  componentDidUpdate() {
    console.log(`${this.props.id} componentDidUpdate() called.`);
  }

  componentWillUnmount() {
    console.log(`${this.props.id} componentWillUnmount() called.`);
  }

  render() {
    return <Alert className="m-5 w-96">{this.props.message}</Alert>;
  }
}

export default Notification;
