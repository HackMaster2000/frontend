import React from 'react';
import { Link } from 'react-router-dom';

function ProfilePage() {
    // Obtener la información del usuario del localStorage
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    // Función para cerrar sesión
    const handleLogout = () => {
        // Eliminar los datos del usuario del localStorage
        localStorage.removeItem('userInfo');
        // Redireccionar a la página de inicio
        window.location.href = '/';
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center mt-5" style={{ marginBottom: '150px' }}>
            <div className="card p-5">
                <div className="card-body text-center">
                    {userInfo ? (
                        <>
                            <h1 className="card-title mb-4">¡Hola {userInfo.name}!</h1>
                            <p className="card-text">Email: {userInfo.email}</p>
                            <p className="card-text">Username: {userInfo.name}</p>
                            <button className="btn btn-danger mt-3" onClick={handleLogout}>Cerrar Sesión</button>
                        </>
                    ) : (
                        <>
                            <p className="card-text mb-4">No has iniciado sesión</p>
                            <Link to="/login" className="btn btn-primary">Iniciar Sesión</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
