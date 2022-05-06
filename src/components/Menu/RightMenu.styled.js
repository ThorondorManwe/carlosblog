import styled from 'styled-components';
export const StyledRightMenu = styled.nav`
    display: block;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #add8e6;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(150%)'};
    height: 160%;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 9%;
    right: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 100;
    width: 75%;
`;
export default StyledRightMenu;