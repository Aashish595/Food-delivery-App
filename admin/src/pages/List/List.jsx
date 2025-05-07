import React, { useEffect, useState } from 'react'
import './List.css'
import axios from "axios"
import {toast} from "react-toastify"
import EditFoodForm from '../../components/Edit/EditFoodForm'

const List = ({url}) => {

  const [list,setList] = useState([]);
  const [editFoodId, setEditFoodId] = useState(null); // Track which item is being edited

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success){
      setList(response.data.data)
    }
    else
    {
      toast.error("Error")
    }
  }

  const removeFood = async(foodId) => {
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fetchList();
    if (response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error")
    }
  }




  useEffect(()=>{
    fetchList();
  },[])

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
    <div className="list-table">
      <div className="list-table-format title">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b>Action</b>
      </div>
      {list.map((item,index)=>{
        return (
          <div key={index} className='list-table-format'>
            <img src={`${url}/images/`+item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <div className='action-buttons'>
              <button 
                onClick={() => setEditFoodId(item._id)} 
                className="edit-btn"
              >
                Edit
              </button>
              <button 
                onClick={() => removeFood(item._id)} 
                className="remove-btn"
              >
                X
              </button>
            </div>



{editFoodId === item._id && (
              <EditFoodForm
                item={item}
                list={list}
                onClose={() => setEditFoodId(null)}
                onSave={() => {
                  fetchList();
                  setEditFoodId(null);
                  toast.success("Food item updated successfully!"); // Added toast message
                }}
    url={url}
  />
)}
          </div>
        )
      })}
    </div>
    </div>
    
  )
}

export default List