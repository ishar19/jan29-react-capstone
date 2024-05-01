import { useState } from 'react';

import categoryImg1 from '../assets/image 2.png';
import categoryImg2 from '../assets/image 3.png';
import categoryImg3 from '../assets/image 4.png';
import categoryImg4 from '../assets/image 6.png';
import categoryImg5 from '../assets/image 7.png';
import categoryImg6 from '../assets/image 8.png';
import categoryImg7 from '../assets/image 9.png';
import categoryImg8 from '../assets/image 10.png';
import categoryImg9 from '../assets/image 11.png';
import danger from '../assets/Vector (2).png';
import Category from './Category';
import { useNavigate } from 'react-router';






function SelectCategory() {

  const SelectCategory = ['Action', 'Drama', 'Romance', 'Thriller', 'Western', 'Horror', 'Fantasy', 'Music', 'Fiction'];
  const categoryImages = [categoryImg1, categoryImg2, categoryImg3, categoryImg4, categoryImg5, categoryImg6, categoryImg7, categoryImg8, categoryImg9];
  const backgroundColors = ['#FF5209', '#D7A4FF', '#148A08', '#84C2FF', '#902500', '#7358FF', '#FF4ADE', '#E61E32', '#6CD061'];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [click, setClick] = useState(true);

  const navigate = useNavigate();

  const handleNextPage = () => {
    
      localStorage.setItem("selectedMovies", selectedCategories)
      navigate('/dashboard')
    
  }




  const [state, setState] = useState({
    field: ""
  })

  const validate = (data) => {
    setState({ ...state, field: data })
    setClick();
    if (!selectedCategories.includes(data)) {
      setSelectedCategories([...selectedCategories, data]);
    }
  }

  const removeCategory = (category) => {
    const updatedCategories = selectedCategories.filter((c) => c !== category);
    setSelectedCategories(updatedCategories);
  };



  return (
    <>

      <div className='bg-[#000000] text-white inline-flex flex-row w-full h-screen justify-self-center'>

        <div>
          <div>
            <p className='text-4xl text-[#72DB73]' style={{ fontFamily: 'Single Day' }}>Super app</p>
          </div>

          <div className='p-20'>
            <p className='text-4xl font-bold'>Choose your </p>
            <p className='text-4xl font-bold'>entertainment </p>
            <p className='text-4xl font-bold'> Category</p>
          </div>

          <div className='grid grid-cols-2 gap-4 mr-16'>


            {selectedCategories.map((category, index) => (
              <div key={index} className='text-white bg-[#148A08] w-20 ml-20' style={{ borderRadius: '1rem', fontSize: '0.8em' }}>
                {category}
                <button className='ml-4 text-black' onClick={() => removeCategory(category)}>X</button>
              </div>
            ))}

          </div>


          {selectedCategories.length < 3 && 

          <div className='flex m-6 ml-24'>

            <img src={danger} width={30} height={2} alt='' className='mr-4'/>
            <p className='text-[#FF0000]'>Minimum 3 category required</p>
          </div>
          }








          



        </div>

        <div className="grid grid-cols-3 gap-1">

          {SelectCategory.map((ele, ind) => (
            <div key={ind} style={{ backgroundColor: backgroundColors[ind], borderRadius: '1rem', cursor: 'pointer', border: click ? '' : '3px solid #11B800'}} className='w-36 h-32 p-3 m-3 grid-cols-3' onClick={() => validate(ele)}>
              <Category categoryname={ele} categoryImage={categoryImages[ind]} />
            </div>
          ))}


        </div>



      </div>

      {selectedCategories.length >= 3 && 

        <div>
            <button className='w-20 mr-16 rounded-3xl bg-[#148A08] text-white float-right relative bottom-10' onClick={ handleNextPage}>Next page</button>
          </div>
      }





    </>
  )
}

export default SelectCategory