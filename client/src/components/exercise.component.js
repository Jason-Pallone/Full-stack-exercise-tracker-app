import React from 'react';
import { Link } from 'react-router-dom';

const Exercise = props => (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0, 10)}</td>
      <td>
        <Link to={'/edit/'+props.exercise._id} className='btn btn-primary'> Edit </Link>
        <button className='btn btn-primary btn-delete' onClick={() => props.deleteExercise(props.exercise._id)}>Delete</button>
      </td>
    </tr>
  )
  
export default Exercise