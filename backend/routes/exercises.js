const express = require('express');
const router = express.Router();

// Dummy exercise data — in a real app, you might read from your database.
const exercises = [
    {
      id: '1',
      name: 'Push Up',
      imageUrl: 'https://learn.athleanx.com/wp-content/uploads/2021/12/AX_PERFECT-PUSH-UP-830x467.jpg',
      description: 'A basic push-up to build upper body strength.'
    },
    {
      id: '2',
      name: 'Squat',
      imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.healthline.com%2Fhealth%2Ffitness%2Fsquats-for-glutes&psig=AOvVaw2kjzgkAssLRUnUW_rQHxVq&ust=1745505597110000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDaz5ux7owDFQAAAAAdAAAAABAE',
      description: 'A squat exercise to strengthen your legs and glutes.'
    },
    {
      id: '3',
      name: 'Plank',
      imageUrl: 'https://www.google.com/imgres?q=A%20core%20stability%20exercise%20that%20develops%20endurance%20in%20your%20abs%20and%20lower%20back%20image&imgurl=https%3A%2F%2Fstatic01.nyt.com%2Fimages%2F2023%2F02%2F03%2Fmultimedia%2FWELL-CORE-WORKOUTS0-pqlt%2FWELL-CORE-WORKOUTS0-pqlt-articleLarge.jpg%3Fquality%3D75%26auto%3Dwebp%26disable%3Dupscale&imgrefurl=https%3A%2F%2Fwww.nytimes.com%2F2023%2F02%2F08%2Fwell%2Fmove%2Fcore-strength-exercises-workouts.html&docid=6SiP0Y-AzhUmbM&tbnid=uv_R_0JPjoGmzM&vet=12ahUKEwiI2q63se6MAxX6caQEHZVcGfIQM3oECGYQAA..i&w=600&h=377&hcb=2&ved=2ahUKEwiI2q63se6MAxX6caQEHZVcGfIQM3oECGYQAA',
      description: 'A core stability exercise that develops endurance in your abs and lower back.'
    }
  ];
  router.get('/', (req, res) => {
    res.json(exercises);
  });

module.exports = router;
