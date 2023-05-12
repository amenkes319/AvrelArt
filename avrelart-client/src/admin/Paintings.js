import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Paintings.css';

const API_BASE_URL = 'http://localhost:3001/api';

const Paintings = () => {
    const [paintings, setPaintings] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        medium: '',
        size: '',
        price: '',
    });

    useEffect(() => {
        fetchPaintings();
    }, []);

    const fetchPaintings = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/paintings`);
            setPaintings(response.data);
        } catch (error) {
            console.error("Error fetching paintings:", error);
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPainting = { ...formData };

        const formDataWithFile = new FormData();
        formDataWithFile.append('data', JSON.stringify(newPainting));
        formDataWithFile.append('file', e.target.file.files[0]);

        await axios.post(`${API_BASE_URL}/admin/paintings`, formDataWithFile, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'x-auth-token': 'token'
            },
        });

        setFormData({
            title: '',
            description: '',
            medium: '',
            size: '',
            price: '',
        });
        fetchPaintings();
    };

    const handleUpdate = async (e, id) => {
        e.preventDefault();

        const updatedPainting = {
            title: e.target[`title-${id}`].value,
            description: e.target[`description-${id}`].value,
            medium: e.target[`medium-${id}`].value,
            size: e.target[`size-${id}`].value,
            price: parseFloat(e.target[`price-${id}`].value),
            type: e.target[`type-${id}`].value,
        };

        try {
            const response = await fetch(`${API_BASE_URL}/admin/paintings/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    'x-auth-token': 'token'
                },
                body: JSON.stringify(updatedPainting),
            });

            if (!response.ok) {
                throw new Error("Failed to update painting");
            }

            const data = await response.json();
            setPaintings(
                paintings.map((painting) => (painting.id === id ? { ...painting, ...data } : painting))
            );
        } catch (error) {
            console.error(error);
        }
    };


    const handleDelete = async (id) => {
        await axios.delete(`${API_BASE_URL}/admin/paintings/${id}`, {
            headers: {
                'x-auth-token': 'token'
            },
        });
        fetchPaintings();
    };

    const autoResize = (e) => {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    return (
        <div className="paintings-admin">
            <h3>Manage Paintings</h3>
            <form onSubmit={handleSubmit} className="paintings-admin-form">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    onInput={autoResize}
                    required
                />
                <label htmlFor="medium">Medium</label>
                <input
                    type="text"
                    name="medium"
                    id="medium"
                    value={formData.medium}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor="size">Size</label>
                <input
                    type="text"
                    name="size"
                    id="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    required

                />
                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    name="price"
                    id="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor="type">Type</label>
                <select name="type" id="type" value={formData.type} onChange={handleInputChange} required>
                    <option value="landscapes">Landscapes</option>
                    <option value="abstracts">Abstracts</option>
                    <option value="worksonpaper">Works on Paper</option>
                    <option value="italyseries">Italy Series</option>
                    <option value="unprecedentedtimes">Unprecedented Times</option>
                    <option value="assemblages">Assemblages</option>
                </select>
                <>
                    <label htmlFor="file">Image</label>
                    <input type="file" name="file" id="file" required />
                </>
                <button type="submit">Create Painting</button>
            </form>
            <div className="paintings-list">
                {paintings.map((painting) => (
                    <div key={painting.id} className="painting-item">
                        <form onSubmit={(e) => handleUpdate(e, painting.id)}>
                            <div className="painting-item-image">
                                <img src={`${API_BASE_URL}/paintings/images/${painting.filename}`} alt={painting.title} />
                            </div>
                            <div className="painting-item-info">
                                <label htmlFor={`title-${painting.id}`}>Title:</label>
                                <input type="text" id={`title-${painting.id}`} defaultValue={painting.title} />
                                <label htmlFor={`description-${painting.id}`}>Description:</label>
                                <textarea type="text" id={`description-${painting.id}`} defaultValue={painting.description} onInput={autoResize} />
                                <label htmlFor={`medium-${painting.id}`}>Medium:</label>
                                <input type="text" id={`medium-${painting.id}`} defaultValue={painting.medium} />
                                <label htmlFor={`size-${painting.id}`}>Size:</label>
                                <input type="text" id={`size-${painting.id}`} defaultValue={painting.size} />
                                <label htmlFor={`price-${painting.id}`}>Price:</label>
                                <input type="number" id={`price-${painting.id}`} defaultValue={painting.price} />
                                <label>Type:</label>
                                <select name="type" id={`type-${painting.id}`} defaultValue={painting.type} >
                                    <option value="landscapes">Landscapes</option>
                                    <option value="abstracts">Abstracts</option>
                                    <option value="worksonpaper">Works on Paper</option>
                                    <option value="italyseries">Italy Series</option>
                                    <option value="unprecedentedtimes">Unprecedented Times</option>
                                    <option value="assemblages">Assemblages</option>
                                </select>
                            </div>
                            <button type="submit">Update</button>
                            <button type="button" onClick={() => handleDelete(painting.id)}>Delete</button>
                        </form>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Paintings;