import React from 'react'

export default function Nav({data, onClick}) {
  var tags = [];
  for (var i=0; i<data.length; i++) {
    var d = data[i];
    tags.push(<li key={d.id}><a href="#" data-id={d.id} onClick={(e) => {
      onClick(Number(e.target.dataset.id));
    }}>{d.title}</a></li>)
  }
  return (
    <nav>
      <ol>
        {tags}
      </ol>
    </nav>
  )
}
