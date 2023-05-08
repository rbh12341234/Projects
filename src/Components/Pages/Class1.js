import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

function Class1() {
 
const  result= [
  {
      "id": 1,
      "name": "Gym",
      "advertisers": [
          {
              "city_id": 2,
              "city": {
                  "id": 2,
                  "name": "Mumbai"
              },
              "area": [
                  {
                      "area": "Challaghatta"
                  }
              ]
          },
          {
              "city_id": 3,
              "city": {
                  "id": 3,
                  "name": "Delhi"
              },
              "area": [
                  {
                      "area": "Goregaon West"
                  }
              ]
          }
      ]
  },
  {
      "id": 2,
      "name": "Corporate Park",
      "advertisers": [
          {
              "city_id": 1,
              "city": {
                  "id": 1,
                  "name": "Pune"
              },
              "area": [
                  {
                      "area": "Balewadi"
                  },
                  {
                      "area": "Kalyani Nagar"
                  }
              ]
          },
          {
              "city_id": 2,
              "city": {
                  "id": 2,
                  "name": "Mumbai"
              },
              "area": [
                  {
                      "area": "Shivaji Nagar"
                  }
              ]
          }
      ]
  },
  {
      "id": 3,
      "name": "Co-Working",
      "advertisers": [
          {
              "city_id": 1,
              "city": {
                  "id": 1,
                  "name": "Pune"
              },
              "area": [
                  {
                      "area": "Baner"
                  }
              ]
          },
          {
              "city_id": 2,
              "city": {
                  "id": 2,
                  "name": "Mumbai"
              },
              "area": [
                  {
                      "area": "Koramangala"
                  }
              ]
          },
          {
              "city_id": 3,
              "city": {
                  "id": 3,
                  "name": "Delhi"
              },
              "area": [
                  {
                      "area": "Andheri East"
                  }
              ]
          },
          {
              "city_id": 4,
              "city": {
                  "id": 4,
                  "name": "Bengaluru"
              },
              "area": [
                  {
                      "area": "Connaught Place"
                  },
                  {
                      "area": "Saket"
                  }
              ]
          }
      ]
  },
  {
      "id": 4,
      "name": "Colleges",
      "advertisers": [
          {
              "city_id": 1,
              "city": {
                  "id": 1,
                  "name": "Pune"
              },
              "area": [
                  {
                      "area": "Baner"
                  }
              ]
          },
          {
              "city_id": 2,
              "city": {
                  "id": 2,
                  "name": "Mumbai"
              },
              "area": [
                  {
                      "area": "Ashok Nagar"
                  }
              ]
          }
      ]
  },
  {
      "id": 5,
      "name": "Restaurants",
      "advertisers": [
          {
              "city_id": 2,
              "city": {
                  "id": 2,
                  "name": "Mumbai"
              },
              "area": [
                  {
                      "area": "Sanjay Nagar"
                  }
              ]
          },
          {
              "city_id": 3,
              "city": {
                  "id": 3,
                  "name": "Delhi"
              },
              "area": [
                  {
                      "area": "Andheri West"
                  }
              ]
          }
      ]
  },
  {
      "id": 6,
      "name": "Offices",
      "advertisers": [
          {
              "city_id": 3,
              "city": {
                  "id": 3,
                  "name": "Delhi"
              },
              "area": [
                  {
                      "area": "Andheri East"
                  }
              ]
          }
      ]
  }
]
console.log(result);

    const [checked, setChecked] = useState([true, false]);

    const handleChange1 = (event) => {
      setChecked([event.target.checked, event.target.checked]);
    };
  
    const handleChange2 = (event) => {
      setChecked([event.target.checked, checked[1]]);
    };
  
    const handleChange3 = (event) => {
      setChecked([checked[0], event.target.checked]);
    };
  
    const children = (
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        <FormControlLabel
          label="Child 1"
          control={<Checkbox checked={checked[0]}  onChange={handleChange2} />}
          
          
        />
           <div>
           
           </div>
        <FormControlLabel
          label="Child 2"
          control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
        />
      </Box>
    );


  return (
    <>
    
            
    <div>
      <FormControlLabel
        label="Parent"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
            
          />
          
        }
          />
        
            <div>
            {
          result.map(post =>{
            return(
                           <div key={post.id}>
                            <h1>{post.name}</h1>
                    { post.advertisers && post.advertisers.map(advertisers=> (
                  <div key={post.id}>
                  {advertisers.city_id}
                 
                  {post.advertisers.city  && post.advertisers.city.map(city=>(
                      <div key={post.id}> 
                             {city.id}
                             {city.name}
                      </div>        
                  ) )}
                   {post.advertisers.area && post.advertisers.area.map(area=>(
                      <div key={post.id}> 
                             {area.area}
                     </div>        
                  ) )}

                      
                </div>
              ))
            }
                            </div>

            )
          })

        }

            </div>
         
           
        {children}
           
    </div>

</>
  )
  }
export default Class1
