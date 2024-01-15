import seeting from '../../assets/opcion.png';
import styled from "@emotion/styled";
import FilterComponent from '../Shared/FilterComponent';
import { useState } from 'react';

const SubContainerButtonOption = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ContainerButtonOption = styled('div')({
  border: 'solid #1a1a1a 2px',
  borderRadius: '6px',
  display: 'none',
  '@media (max-width: 1100px)': {
    display: 'block',
  },
});

const ContainerModalFilter = styled('div')({
    display: 'none',
    '@media (max-width: 1100px)': {
        zIndex: 99,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#0000004b',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        },
  });

const OpenFilterMobile = ({ filters, checks, setClotheSearched, checked, setChecked }) => {
  const [openFilters, setOpenFilters] = useState(false);

  const handleOpen = () => {
    setOpenFilters(true);
  };

  const handleClose = () => {
    setOpenFilters(false);
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <ContainerButtonOption onClick={handleOpen}>
        <SubContainerButtonOption style={{ backgroundColor: '#1b1b1b', width: '2rem', height: '2rem' }}>
          <img src={seeting} alt="Icono de opciones" style={{ width: '20px', height: '20px' }} />
        </SubContainerButtonOption>
      </ContainerButtonOption>
      {openFilters && (
        <ContainerModalFilter
          onClick={handleClose}
        >
          <div
            onClick={handleModalClick}
            style={{
              overflowY: 'scroll',
              backgroundColor: '#f3f3f3',
              height: '40rem',
              marginTop:'6rem',
            }}
          >
            <FilterComponent
              filters={filters}
              checks={checks}
              checked={checked}
              setChecked={setChecked}
              setClotheSearched={setClotheSearched}
            />
          </div>
        </ContainerModalFilter>
      )}
    </>
  );
};

export default OpenFilterMobile;
