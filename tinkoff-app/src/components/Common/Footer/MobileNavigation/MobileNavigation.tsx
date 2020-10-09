import React from "react";
import { useStyle } from "./style";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";

export const MobileNavigation: React.FC = () => {
  const classes = useStyle();

  return (
    <div>
      <Container>
        <ul>
          <li>
            <div>
              <Link to='/'>Тинькофф</Link>
              <span>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
                  <path
                    d='M7.707 10.293a1 1 0 00-1.414 1.414l4.294 4.294a1.995 1.995 0 002.826 0l4.294-4.294a1 1 0 00-1.414-1.414L12 14.586l-4.293-4.293z'
                    fill='currentColor'/>
                </svg>
              </span>
            </div>

            <div>
              <ul>
                <li>
                  <Link to='/'>О банке</Link>
                </li>
                <li>
                  <Link to='/'>О банке</Link>
                </li>
                <li>
                  <Link to='/'>О банке</Link>
                </li>
                <li>
                  <Link to='/'>О банке</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </Container>
    </div>
  );
};