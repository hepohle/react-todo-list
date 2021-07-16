import React, { Component } from 'react'

export default class TodoImput extends Component {
    render() {
        const{item, handleChange, handleSubmit, editItem} =
        this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book alto"></i>
                            </div>
                        </div>
                        <input 
                            type="text" 
                            className="form-control text-capitalize"
                            placeholder="add todo item"
                            value={item}
                            onChange={handleChange}
                        />
                    </div>
                    <button 
                        type="submit"
                        disabled={item?false:true}
                        className={editItem
                            ? "btn btn-success btn-block text-uppercase mt-3 ancho"
                            : "btn btn-primary btn-block text-uppercase mt-3 ancho"}>
                            {editItem?'edit item':'add item'}
                    </button>
                </form>
            </div>
        )
    }
}
