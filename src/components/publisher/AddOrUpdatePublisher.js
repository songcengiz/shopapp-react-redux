import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { sendPublisher } from "../../redux/action/publisherActions";
import alertify from "alertifyjs"

import PublisherEdit from "./PublisherEdit";
function AddOrUpdatePublisher({
  publishers,

  sendPublisher,
  history,
  ...props
}) {
  const [publisher, setPublisher] = useState({ ...props.publisher });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    setPublisher({ ...props.publisher });
  }, [props.publisher]);

  function handleChange(e) {
    const { name, value } = e.target;
    setPublisher((previousPublisher) => ({
      ...previousPublisher,
      [name]: value,
    }));
    validate(name, value);
  }
  function validate(name, value) {
    if (!value && name === "publisherName") {
      setErrors((previousErrors) => ({
        ...previousErrors,
        publisherName: "You must enter the publisher name❗",
      }));
    } else {
      setErrors((previousErrors) => ({
        ...previousErrors,
        publisherName: "",
      }));
    }
  }
  const reset = () => {
    setPublisher("");
  };
  function handleSubmit(e) {
    e.preventDefault();
    sendPublisher(publisher).then(() => history.push("/"));
    alertify.success(`${publisher.publisherName},saved changes`)
    reset()
  }

  return (
    <PublisherEdit
      onSubmit={handleSubmit}
      onChange={handleChange}
      publisher={publisher}
      errors={errors}
    />
  );
}
export function getPublisherById(publishers, publisherId) {
  // eslint-disable-next-line eqeqeq
  const publisher =
    publishers.find((publisher) => publisher.id == publisherId) || "";
  return publisher;
}
function mapStateToProps(state) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { publisherId } = useParams();
  const publisher =
    publisherId && state.publisherListReducer
      ? getPublisherById(state.publisherListReducer, publisherId)
      : {};
  return {
    publisher,
    publishers: state.publisherListReducer,
  };
}
const mapDispatchToProps = {
  sendPublisher,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddOrUpdatePublisher);
