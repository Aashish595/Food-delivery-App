import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditFoodForm.css';

const EditFoodForm = ({ item, onClose, onSave, url,list }) => {
  const [formData, setFormData] = useState({
    name: item.name,
    description: item.description || '',
    category: item.category,
    price: item.price
  });

  useEffect(() => {
    setFormData({
      name: item.name,
      description: item.description || '',
      category: item.category,
      price: item.price
    });
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${url}/api/food/edit`, {
        _id: item._id,
        ...formData
      });
      onSave();
    } catch (error) {
      console.error("Update failed", error);
      alert("Update failed. Please try again.");
    }
  };

  return (
    <div className="edit-form-container">
      <div className="edit-form-overlay" onClick={onClose}></div>
      <div className="edit-form-modal">
        <h3>Edit {item.name}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
<div className="form-group">
  <label>Category</label>
  <select
    name="category"
    value={formData.category}
    onChange={handleChange}
    required
  >
    <option value="">Select Category</option>
    <option value="Salad">Salad</option>
    <option value="Rolls">Rolls</option>
    <option value="Deserts">Deserts</option>
    <option value="Sandwich">Sandwich</option>
    <option value="Cake">Cake</option>
    <option value="Pure Veg">Pure Veg</option>
    <option value="Pasta">Pasta</option>
    <option value="Noodles">Noodles</option>
  </select>
</div>
          
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-actions">
            <button type="submit" className="save-btn">Save</button>
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditFoodForm;