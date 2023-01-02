import React, { useState } from 'react'

export default function Update(props) {
  const [id, setId] = useState(props.id);
  const [title, setTitle] = useState(props.title);
  const [desc, setDesc] = useState(props.desc);

  const onChangeHandler = (e) => {
    switch(e.target.name) {
      case "id":
        setId(e.target.value);
        return;
      case "title":
        setTitle(e.target.value);
        return;
      case "desc":
        setDesc(e.target.value);
        return;
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(
      Number(e.target.id.value),
      e.target.title.value,
      e.target.desc.value
    );
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input type="hidden" name="id" value={id} />
      <p><input type="text" name="title" onChange={onChangeHandler} placeholder="title" value={title}></input></p>
      <p><textarea type="text" name="desc" onChange={onChangeHandler} placeholder="description" value={desc}></textarea></p>
      <p><input type="submit"></input></p>
    </form>
  )
}
