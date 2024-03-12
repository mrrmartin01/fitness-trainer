import BeginnerAbs from "../components/workouts/abs/BeginnerAbs";
import BeginnerChest from "../components/workouts/chest/BeginnerChest";
import BeginnerLegs from "../components/workouts/legs/BeginnerLegs";
import BeginnerArms from "../components/workouts/arms/BeginnerArms";
import BeginnerShoulder from "../components/workouts/shoulder/BeginnerShoulder";
import BeginnerBack from "../components/workouts/back/BeginnerBack";


import IntermediateAbs from "../components/workouts/abs/IntermediateAbs";
import IntermediateChest from "../components/workouts/chest/IntermediateChest";
import IntermediateLegs from "../components/workouts/legs/IntermediateLegs";
import IntermediateArms from "../components/workouts/arms/IntermediateArms";
import IntermediateShoulder from "../components/workouts/shoulder/IntermediateShoulder";
import IntermediateBack from "../components/workouts/back/IntermediateBack";


import ExpertAbs from "../components/workouts/abs/ExpertAbs";
import ExpertChest from "../components/workouts/chest/ExpertChest";
import ExpertLegs from "../components/workouts/legs/ExpertLegs";
import ExpertArms from "../components/workouts/arms/ExpertArms";
import ExpertShoulder from "../components/workouts/shoulder/ExpertShoulder";
import ExpertBack from "../components/workouts/back/ExpertBack";



const WorkoutsData = [
    {
        'id': 1,
        'type': "Abs-Beginner",
        'url': BeginnerAbs,
        'intro': "For absolute beginners looking forward to training their abs",
        'detail': "",
        'img': "https://www.fitness-books.com/wp-content/uploads/2017/04/Mens-Ab-Workout-356x220.jpg",
    },
    {
        'id': 2,
        'type': "Abs-Intermediate",
        'url': IntermediateAbs,
        'intro': "For absolute beginners looking forward to training their abs",
        'detail': "",
        'img': "https://cdn.exercise.com/images/4111/ios_large.png"
    },
    {
        'id': 3,
        'type': "Abs-Expert",
        'url': ExpertAbs,
        'intro': "For absolute beginners looking forward to training their abs",
        'detail': "",
        'img': "https://steelsupplements.com/cdn/shop/articles/shutterstock_1255020979_2000x.jpg?v=1604529149"
    },
    {
        'id': 4,
        'type': "Chest-Beginner",
        'url': BeginnerChest,
        'intro': "For absolute beginners looking forward to training their abs",
        'detail': "",
        'img': "https://cdn.shopify.com/s/files/1/1497/9682/files/1.Benefits_of_Having_a_Strong_Chest.jpg?v=1683545634&width=750"
    },
    {
        'id': 5,
        'type': "Chest-Intermediate",
        'url': IntermediateChest,
        'intro': "For absolute beginners looking forward to training their abs",
        'detail': "",
        'img': "https://www.setforset.com/cdn/shop/articles/back_and_chest_workout_2000x.jpg?v=1660093535"
    },
    {
        'id': 6,
        'type': "Chest-Expert",
        'url': ExpertChest, 
        'intro': "For absolute beginners looking forward to training their abs", 
        'detail': "", 
        'img': "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2014/12/chest-proper-pec-pounding-promo.jpg?quality=86&strip=all"
    },
    {
        'id': 7,
        'type': "Legs-Beginner",
        'url': BeginnerLegs,
        'intro': "For absolute beginners looking forward to training their abs",
        'detail': "",
        'img': "https://www.bodybuilding.com/images/2021/april/shredded-legs-for-summer-tall.jpg"
    },
    {

        'id': 8,
        'type': "Legs-Intermediate",
        'url': IntermediateLegs,
        'intro': "For absolute beginners looking forward to training their abs",
        'detail': "",
        'img': "https://media.istockphoto.com/id/503147349/photo/never-skip-leg-day.jpg?s=612x612&w=0&k=20&c=1EBhIkK9gggeGVSgS4hQDGBxuhhAIndPksBBeHTg2Zo="
    },
    {
        'id': 9,
        'type': "Legs-Expert",
        'url': ExpertLegs,
        'intro': "For absolute beginners looking forward to training their abs",
        'detail': "",
        'img': "https://steelsupplements.com/cdn/shop/articles/shutterstock_347383067_1000x.jpg?v=1626087187"
    },
    {
        'id': 10,
        'type': "Arms-Beginner",
        'url': BeginnerArms,
        'intro': "For absolute beginners looking forward to training their abs",
        'detail': "",
        'img': "https://cdn.shopify.com/s/files/1/0090/4773/6378/files/The_best_tricep_exercise.jpg?v=1603396597"
    },
    {
        'id': 11,
        'type': "Arms-Intermediate",
        'url': IntermediateArms,
        'intro': "For absolute beginners looking forward to training their abs",
        'detail': "",
        'img': "https://www.bodybuilding.com/images/2019/september/30day-arms-square-1200x1200-b.jpg"
    },
    {
        'id': 12,
        'type': "Arms-Expert",
        'url': ExpertArms,
        'intro': "For absolute beginners looking forward to training their abs",
        'detail': "",
        'img': "https://generationiron.com/wp-content/uploads/2021/10/534B6178-9581-4BD6-8D73-C72D834E23AB.jpeg"
    },
    {
        'id': 13,
        'type': "Shoulder-Beginner",
        'url': BeginnerShoulder,
        'intro': "For absolute beginners looking forward to training their abs",
        'detail': "",
        'img': "https://image.boxrox.com/2021/11/Back-Muscles-2.jpg"
    },
    {
        'id': 14,
        'type': "Shoulder-Intermediate",
        'url': IntermediateShoulder,
        'intro': "For absolute beginners looking forward to training their abs",
        'detail': "",
        'img': "https://image.boxrox.com/2021/09/Best-Rear-Delt-Exercises.jpg"
    },
    {
        'id': 15,
        'type': "Shoulder-Expert",
        'url': ExpertShoulder,
        'intro': "For absolute beginners looking forward to training their abs",
        'detail': "",
        'img': "https://miro.medium.com/v2/resize:fit:1013/1*yNLZNxzUl57Vdr7dYYx9WQ.jpeg"
    },
    {
        'id': 16,
        'type': "Back-Beginner",
        'url': BeginnerBack,
        'intro': "For absolute beginners looking forward to training their abs",
        'detail': "",
        'img': "https://www.aleanlife.com/wp-content/uploads/2015/04/quick-home-back-workout.jpg"
    },
    {
        'id': 17,
        'type': "Back-Intermediate",
        'url': IntermediateBack,
        'intro': "For absolute beginners looking forward to training their abs",
        'detail': "",
        'img': "https://cdn.muscleandstrength.com/sites/default/files/back800.jpg"
    },
    {
        'id': 18,
        'type': "Back-Expert",
        'url': ExpertBack,
        'intro': "For absolute beginners looking forward to training their abs",
        'detail': "",
        'img': "https://www.ericfavre.com/lifestyle/uk/wp-content/uploads/sites/15/2021/09/augmentez-la-largeur-du-dos-1024x593-1.jpg"
    },
]

export default WorkoutsData