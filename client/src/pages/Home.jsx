import { useWorkoutContext } from "../hooks/useWorkoutsContext";
import { useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

//components
import WorkoutTemplate from "../components/WorkoutTemplate";
import WorkoutForm from "../components/WorkoutForm";

function Home() {
  const { workouts, dispatch } = useWorkoutContext();
  const { user } = useAuthContext();

  useEffect(() => {
    let getWorkouts = async () => {
      let config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      await axios
        .get("/api/workouts", config)
        .then((res) => {
          dispatch({ type: "SET_WORKOUTS", payload: res.data });
        })
        .catch((err) => {
          console.error(err);
        });
    };
    if (user) {
      getWorkouts();
    }
  }, [dispatch, workouts, user]);

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Workout List */}
        <div className="col-lg-8">
          {workouts &&
            workouts.map((e) => {
              return <WorkoutTemplate key={e._id} workout={e} />;
            })}
        </div>

        {/* Workout Form */}
        <div className="col-lg-4">
          <WorkoutForm />
        </div>
      </div>
    </div>
  );
}

export default Home;
