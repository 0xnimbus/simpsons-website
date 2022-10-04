import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'
import Nav from './components/Nav/Nav.jsx'
// import pics
import homer from './homer.jpg'
import bart from './bart.png'
import lisa from './lisa.png'
import maggie from './maggie.png'
import marge from './marge.png'

function App() {
  return (
    <div>
      <Nav />
      <section className="blog-items team-cards">
          <div className="inner-wrapper">
            <div className="blog-container">
              <ProfileCard pic={homer} name="Homer" description="This is homer" email="homer@simpsons.com"/>
              <ProfileCard pic={lisa} name="Lisa" description="This is bart" email="lisa@simpsons.com"/>
              <ProfileCard pic={maggie} name="Maggie" description="This is maggie" email="maggie@simpsons.com"/>
              <ProfileCard pic={marge} name="Marge" description="This is marge" email="marge@simpsons.com"/>
              <ProfileCard pic={bart} name="Bart" description="This is bart" email="bart@simpsons.com"/>
            </div>
          </div>
      </section>
    </div>
  );
}

export default App;
