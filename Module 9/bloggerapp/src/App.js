import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

  const choice = 1;

  // Method 1 : if-else

  if (choice === 1) {

    return <BookDetails />;

  }

  // Method 2 : Element Variable

  let component;

  if (choice === 2) {

    component = <BlogDetails />;

  } else {

    component = <CourseDetails />;

  }

  // Method 3 : Ternary Operator

  return (

    <div>

      {choice === 3 ? <BlogDetails /> : component}

    </div>

  );

}

export default App;