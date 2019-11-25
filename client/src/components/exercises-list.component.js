import React, { Component } from 'react';
import axios from 'axios'
import Exercise from './exercise.component'

export default class ExercisesList extends Component {
    state = { exercises: [] }

    componentDidMount() {
      /* if in local use http://localhost:5000/exercises/ */
      axios.get('/exercises/')
      .then(res => this.setState({ exercises: res.data }))
      .catch(err => console.error(err))
    } 

    deleteExercise=(id)=>{
      /* if in local use http://localhost:5000/exercises */
      axios.delete('/exercises/'+id)
        .then(res => console.log(res.data))
      
      this.setState({
          exercises: this.state.exercises.filter(el => el._id !== id)
      })
    }

    exerciseList=()=>{
        return this.state.exercises.map(currentExercise => {
          return <Exercise exercise={currentExercise} deleteExercise={this.deleteExercise} key={currentExercise._id} />
        })
    }

    render(){
      return(
        <div>
          <h3>Logged Exercises</h3> 
          <table className='table'>
            <thead className='thead-light'>
              <tr>
                <th>Username</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { this.exerciseList() }
            </tbody>
          </table>
        </div>

      )
    }
}