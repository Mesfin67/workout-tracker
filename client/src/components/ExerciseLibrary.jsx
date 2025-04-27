import React from 'react';
import Navbar from './Navbar';


const ExerciseLibrary = () => {
  // Dummy array of exercises that includes GIF image URLs, titles, and descriptions.
  const exercises = [
    {
      id: 1,
      title: 'Push Up',
      imageUrl: 'https://media1.tenor.com/m/e45GckrMBLEAAAAC/flex%C3%A3o-inclinada-no-banco.gif',
      description: 'A dynamic push-up demonstration showing proper form.'
    },
    {
      id: 2,
      title: 'Squat',
      imageUrl: 'https://media1.tenor.com/m/Pfj8vy41k-0AAAAC/gym.gif',
      description: 'Watch how to do a squat to strengthen your legs and glutes.'
    },
    {
      id: 3,
      title: 'Deadlift',
      imageUrl: 'https://media1.tenor.com/m/U-KW3hhwhxcAAAAC/gym.gif',
      description: 'A demonstration of the deadlift exercise for total body strength.'
    },
    {
      id: 4,
      title: 'Lunges',
      imageUrl: 'https://media1.tenor.com/m/sZ7VwZ6jrbcAAAAC/gym.gif',
      description: 'Improve balance while toning legs and glutes.'
    },
    {
      id: 5,
      title: 'Pullups',
      imageUrl: 'https://media1.tenor.com/m/dtp_AUAAwecAAAAC/barra-fixa-com-bra%C3%A7os-alternados.gif',
      description: 'Master your upper-body strength with this bodyweight move.'
    },
    {
      id: 6,
      title: 'Burpees',
      imageUrl: 'https://media1.tenor.com/m/bx0KQ_SUtWMAAAAC/burpees-noequipmentexercisesmen.gif',
      description: 'A full-body exercise to burn fat fast'
    },
    {
      id: 7,
      title: 'Rows',
      imageUrl: 'https://media1.tenor.com/m/ft6FHrqty-8AAAAC/remada-pronada-maquina.gif',
      description: 'Strengthen back muscles and improve posture..'
    },
    {
      id: 8,
      title: 'Press',
      imageUrl: 'https://media1.tenor.com/m/CV1FfGVNpdcAAAAC/desenvolvimento-militar.gif',
      description: 'Boost shoulder strength with overhead pressing'
    },
    {
      id: 9,
      title: 'Russian Twists',
      imageUrl: 'https://media1.tenor.com/m/Fmh1xemYphAAAAAd/dumbbellrussiantwists.gif',
      description: 'Watch how to do a Russian twist for core strength.'
    },
    {
      id: 10,
      title: 'Plank',
      imageUrl: 'https://media1.tenor.com/m/r9cqd_wnQmMAAAAC/noequipmentexercisesmen-sideplanks.gif',
      description: 'A perfect plank exercise to build core strength and stability.'
    }
  ];

  return (
    <>
    <Navbar/>
    <div className="container my-4">
      <div className="row">
        {exercises.map((exercise) => (
          <div className="col-md-4 mb-4" key={exercise.id}>
            <div className="card h-100">
              <img
                src={exercise.imageUrl}
                className="card-img-top"
                alt={exercise.title}
              />
              <div className="card-body">
                <h5 className="card-title">{exercise.title}</h5>
                <p className="card-text">{exercise.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>

  );
};

export default ExerciseLibrary;
