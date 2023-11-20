import { InstagramLogo } from "phosphor-react";
import styled from "styled-components";
import { FaLinkedin, FaMailchimp } from "react-icons/fa";

const StyledFooter = styled.footer`
  background-color: #f5f5f5;
  padding: 1rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

// ... (rest of the component remains the same)

const IconContainer = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const StyledLink = styled.a`
  font-weight: 600;
  color: #4a5568;

  &:hover {
    color: #2d3748;
  }
`;

function Footer() {
  return (
    <StyledFooter className="mt-4">
      <IconContainer>
        <InstagramLogo size={24} />
        <StyledLink
          href="https://www.instagram.com/easycharge_jc/"
          target="_blank"
          rel="noreferrer"
        >
          Follow us on Instagram
        </StyledLink>
      </IconContainer>

      <IconContainer>
        <FaLinkedin size={24} />
        <StyledLink
          href="https://linktr.ee/easycharge_jc"
          target="_blank"
          rel="noreferrer"
        >
          Follow on LinkedIn
        </StyledLink>
      </IconContainer>

      <IconContainer>
        <FaMailchimp size={24} />
        <p className="font-semibold text-stone-600">
          Contact:{" "}
          <StyledLink href="mailto:office@easycharge-jc.com">
            office@easycharge-jc.com
          </StyledLink>
        </p>
      </IconContainer>
    </StyledFooter>
  );
}

export default Footer;
