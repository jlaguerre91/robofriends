import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';



function App(){

       
        const [robots, setRobots] = useState([])
        
        const [searchfield, setSearchfield] = useState('')

        const [count, setCount] = useState(0)
        
        const onSearchChange = (event) => {
            
            setSearchfield(event.target.value)
            
        }
        

        
        useEffect(()=> {
                fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(users => {setRobots( users)});
                console.log(count);       
            
   }, [count]) //only run if count changes

  

        const filteredRobots = robots.filter(robot =>{

            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return !robots.length ?

            <h1>Loading</h1> :
       

        (

            <div className='tc'>
            <h1 className="f1">RoboFriends</h1>
            
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
            </div>
    
    
        );

        


    }
    


export default App;