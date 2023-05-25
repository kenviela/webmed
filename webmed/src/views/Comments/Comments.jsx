import Title from "../../components/Title/Title";
import Input from "../../components/Input/Index";
import Header from "../../components/Header/Header";
import "./Comments.scss";
import { useState } from "react";

const Comments = () => {
  const [comment, setComment] = useState("");

  const handleOnClick = (event) => {
    event.preventDefault();
    const data = {
      comment,
    };
    setComment(event.target.comment.value);
    console.log(data);
  };

  return (
    <div className="Comments">
      <Header />
      <div className="Comments__title">
        <Title title="Comentarios" />
      </div>
      <form className="Comments__commentsForm" onSubmit={handleOnClick}>
        <Input type="text" name="comment" labelText="Deja tu comentario" />
        <input
          type="submit"
          value="Comentar"
          className="Comments__commentsForm__submit"
        />
      </form>
      <p>{comment}</p>
    </div>
  );
};

export default Comments;
