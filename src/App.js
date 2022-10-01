
import './App.css';
import './index.css';
import  Navbar from './Navbar';
import Home from './pages/Home';
import Items from './pages/Items';

function App() {
  let component
    switch (window.location.pathname){
      case "/home":
        component = <Home />
        break
      case "/items":
        component = <Items />
        break;
    }
  
    
  
  return (
    <div className="landing-page">
      <Navbar />
        {component}
         
      {/* <div className="card-app-page">
        <div className="card-title"><h2>This is not a cool landing page</h2></div>
        <div className="card-subtitle"><h6>by Jan Calimbo</h6></div>
        <div className="card-body cat-lorem-ipsum">
           <p className=''>Take a big fluffing crap ðŸ’© cat walks in keyboard for litter box is life meow to be let out so sleeps on my head. Spend all night ensuring people don't sleep sleep all day slap the dog because cats rule so cat snacks, yet furball roll roll roll or go into a room to decide you didn't want to be in there anyway. Why dog in house? i'm the sole ruler of this home and its inhabitants smelly, stupid dogs, inferior furballs time for night-hunt, human freakout sleep on my human's head and being gorgeous with belly side up and stare out cat door then go back inside. That box? i can fit in that box groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked stare at ceiling light run as fast as i can into another room for no reason for cat sit like bread. Climb into cupboard and lick the salt off rice cakes demand to have some of whatever the human is cooking, then sniff the offering and walk away. Good now the other hand, too meowing non stop for food don't nosh on the birds stick butt in face lick butt and make a weird face. Meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat allways wanting food, and human is in bath tub, emergency! drowning! meooowww!, take a deep sniff of sock then walk around with mouth half open. Poop on floor and watch human clean up do doodoo in the litter-box, clickityclack on the piano, be frumpygrumpy or scratch so owner bleeds. Poop on floor and watch human clean up break lamps and curl up into a ball thinking about you i'm joking it's food always food so poop on couch and scream at teh bath. Ha ha, you're funny i'll kill you last kitty loves pigs so meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat mess up all the toilet paper yet ha ha, you're funny i'll kill you last, so tweeting a baseball yet i bet my nine lives on you-oooo-ooo-hooo. Sniff catnip and act crazy fart in owners food claw drapes, what the heck just happened, something feels fishy and lounge in doorway but Gate keepers of hell. One of these days i'm going to get that red dot, just you wait and see .</p>
           <p>
            <h6>Told ya, this ain't cool.</h6>
           </p>
        </div>

      </div> */}
      
    </div>
  );

}
export default App;
