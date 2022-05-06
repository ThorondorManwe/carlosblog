import styled from 'styled-components';
export const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #add8e6;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-150%)'};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 10%;
    left: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 100;
    width: 75%;
`;
export default StyledMenu;