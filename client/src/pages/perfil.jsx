import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProfileHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PostulacionesContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const PostulacionItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const Perfil = ({ companyId }) => {
  const [companyProfile, setCompanyProfile] = useState({});
  const [postulaciones, setPostulaciones] = useState([]);

  useEffect(() => {
    const fetchCompanyProfile = async () => {
      try {
        const response = await fetch(`http://localhost:5000/company/${companyId}`);
        if (!response.ok) {
          throw new Error('Error al obtener el perfil de la empresa');
        }
        const data = await response.json();
        setCompanyProfile(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    const fetchPostulaciones = async () => {
      try {
        const response = await fetch(`http://localhost:5000/postulaciones/${companyId}`);
        if (!response.ok) {
          throw new Error('Error al obtener el historial de postulaciones');
        }
        const data = await response.json();
        setPostulaciones(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchCompanyProfile();
    fetchPostulaciones();
  }, [companyId]);

  return (
    <ProfileContainer>
      <ProfileHeader>
        <h1>Perfil de la Empresa</h1>
      </ProfileHeader>
      <ProfileDetails>
        <p><strong>Nombre:</strong> {companyProfile.nombre}</p>
        <p><strong>Dirección:</strong> {companyProfile.direccion}</p>
        <p><strong>Teléfono:</strong> {companyProfile.telefono}</p>
        <p><strong>Email:</strong> {companyProfile.email}</p>
        <p><strong>Descripción:</strong> {companyProfile.descripcion}</p>
      </ProfileDetails>
      <PostulacionesContainer>
        <h2>Historial de Postulaciones</h2>
        {postulaciones.map((postulacion) => (
          <PostulacionItem key={postulacion.id}>
            <p><strong>Nombre Licitación:</strong> {postulacion.nombreLicitacion}</p>
            <p><strong>Fecha de Postulación:</strong> {postulacion.fechaPostulacion}</p>
            <p><strong>Estado:</strong> {postulacion.estado}</p>
          </PostulacionItem>
        ))}
      </PostulacionesContainer>
    </ProfileContainer>
  );
};

export default Perfil;
