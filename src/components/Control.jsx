import React from 'react'

export default function Control({onClick}) {
  return (
    <ul>
      <li><a href='create' onClick={(e) => {
        onClick('CREATE');
        e.preventDefault();
      }}>create</a></li>
      <li><a href='update' onClick={(e) => {
        onClick('UPDATE');
        e.preventDefault();
      }}>update</a></li>
      <li>
        <input type="button" value="delete" onClick={(e) => {
        onClick('DELETE_PROCESS');
        e.preventDefault();
      }} />
      </li>
    </ul>
  )
}