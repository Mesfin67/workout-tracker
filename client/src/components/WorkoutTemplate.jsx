import axios from "axios";
import { useWorkoutContext } from "../hooks/useWorkoutsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../hooks/useAuthContext";

function WorkoutTemplate({ workout }) {
  let { dispatch } = useWorkoutContext();
  let { title, reps, load, createdAt } = workout;
  let { user } = useAuthContext();

  async function handleClick() {
    if (!user) {
      return;
    }

    let config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    await axios
      .delete(`/api/workouts/` + workout._id, config)
      .then((res) => {
        dispatch({ type: "DELETE_WORKOUT", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h4 className="card-title text-primary">{title}</h4>
        <p className="card-text">Load (lbs): {load}</p>
        <p className="card-text">Reps: {reps}</p>
        <p className="card-text text-muted">
          {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
        </p>
        <button
          className="btn btn-danger btn-sm"
          onClick={handleClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default WorkoutTemplate;
